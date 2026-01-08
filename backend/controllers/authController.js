import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const loginUser = async (req, res) => {
  try {
    console.log('POST /api/auth/login', req.body);
    const { username, password, userType } = req.body;

    if (!username || !password || !userType)
      return res.status(400).json({ success: false, message: "All fields required" });

    const user = await User.findOne({ username, role: userType });
    console.log('Found user for login?', !!user);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    console.log('Password match:', match);
    if (!match) return res.status(401).json({ success: false, message: "Incorrect password" });

    // do not return password to client
    const safeUser = { ...user.toObject() };
    delete safeUser.password;

    res.status(200).json({ success: true, message: "Login successful", user: safeUser });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
