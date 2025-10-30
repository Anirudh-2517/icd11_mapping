import User from "../models/userModel.js";

export const loginUser = async (req, res) => {
  try {
    const { username, password, userType } = req.body;

    if (!username || !password || !userType)
      return res.status(400).json({ success: false, message: "All fields required" });

    const user = await User.findOne({ username, role: userType });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    if (user.password !== password)
      return res.status(401).json({ success: false, message: "Incorrect password" });

    res.status(200).json({ success: true, message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
