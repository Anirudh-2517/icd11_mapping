import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Admin-only user management
export const listUsers = async (req, res) => {
  const users = await User.find({}, "-password").limit(1000);
  res.json(users);
};

export const createUser = async (req, res) => {
  try {
    // Log incoming payload for debugging (avoid logging in production)
    console.log("[createUser] incoming body:", req.body);

    const { username, password, userType, email } = req.body;

    // Basic validation: username should be a plain string and not look like a bcrypt hash
    if (typeof username !== 'string' || username.trim().length === 0) {
      return res.status(400).json({ message: 'Username is required and must be a non-empty string' });
    }
    if (typeof username === 'string' && username.startsWith('$2')) {
      console.warn('[createUser] username looks like a bcrypt hash — possible client bug:', username);
      return res.status(400).json({ message: 'Invalid username format' });
    }

    const hashed = password && password.length ? await bcrypt.hash(password, 10) : password;
    const user = new User({ username, password: hashed, userType, email });
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(400).json({ message: "Create failed", error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.password) updates.password = await bcrypt.hash(updates.password, 10);
    const u = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.json(u);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
