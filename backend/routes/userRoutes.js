// backend/routes/userRoutes.js
import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "-password").limit(1000);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users", error: err.message });
  }
});

// Create user
router.post("/", async (req, res) => {
  try {
    console.log("[createUser] incoming body:", req.body);

    const { username, password, role, email, name, specialization } = req.body;

    // Validation
    if (!username || typeof username !== 'string' || username.trim().length === 0) {
      return res.status(400).json({ message: 'Username is required and must be a non-empty string' });
    }
    
    if (username.startsWith('$2')) {
      return res.status(400).json({ message: 'Invalid username format' });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    if (!role || !['doctor', 'researcher', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Valid role is required (doctor, researcher, admin)' });
    }

    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ 
      username, 
      password: hashed, 
      role, 
      email, 
      name,
      specialization,
      status: 'active' // Default status
    });
    
    await user.save();
    res.status(201).json({ message: "User created successfully", user: { _id: user._id, username: user.username, role: user.role } });
  } catch (err) {
    res.status(400).json({ message: "Create failed", error: err.message });
  }
});

// Update user
router.put("/:id", async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
});

// Toggle user status
router.put("/:id/toggle", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Toggle status
    user.status = user.status === 'active' ? 'inactive' : 'active';
    await user.save();
    
    res.json({ message: "Status updated", user: { _id: user._id, username: user.username, status: user.status } });
  } catch (err) {
    res.status(500).json({ message: "Toggle failed", error: err.message });
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
});

export default router;