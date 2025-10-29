import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { username, password, userType } = req.body;

    // Debug logs
    console.log('📝 Login request received:', { username, userType });
    console.log('🔍 Request body:', req.body);

    // Input validation
    if (!username || !password || !userType) {
      console.log('❌ Login failed: Missing required fields');
      return res.status(400).json({ 
        message: "Username, password, and user type are required" 
      });
    }

    console.log('👤 Login attempt:', { username, userType });

    // Find user by username
    const user = await User.findOne({ username });
    console.log('🔍 Database query result:', user ? 'User found' : 'No user found');
    
    if (!user) {
      console.log('❌ Login failed: User not found');
      return res.status(401).json({ 
        message: "Invalid username" 
      });
    }
    
    if (user.role !== userType) {
      console.log('❌ Login failed: Role mismatch', { expected: userType, actual: user.role });
      return res.status(401).json({ 
        message: "Invalid user type for this account" 
      });
    }

    // Check if user is active
    if (user.status === 'inactive') {
      console.log('❌ Login failed: Account inactive');
      return res.status(401).json({
        message: "Account is inactive. Please contact administrator."
      });
    }

    // Check password (plain text as per your user data)
    if (user.password !== password) {
      console.log('❌ Login failed: Invalid password');
      return res.status(401).json({ 
        message: "Invalid password" 
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { 
        id: user._id,
        userType: user.role, // Include role as userType in token
        username: user.username
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '30d' }
    );

    // Login successful
    console.log('✅ Login successful for:', username);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      specialization: user.specialization,
      token
    });
    
  } catch (err) {
    console.error("⚠️ Login error:", err);
    res.status(500).json({ 
      message: "An error occurred while trying to log in" 
    });
  }
};
