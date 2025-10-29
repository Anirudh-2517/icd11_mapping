import express from "express";
import User from "../models/userModel.js";
import Disease from "../models/diseaseModel.js";
import Log from "../models/logModel.js";
const router = express.Router();

// Get system summary
router.get("/summary", async (req, res) => {
  try {
    const [users, diseases, logs] = await Promise.all([
      User.countDocuments(),
      Disease.countDocuments(),
      Log.countDocuments()
    ]);

    const activeUsers = await User.countDocuments({ active: true });
    const lastWeekLogs = await Log.countDocuments({
      date: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    });

    res.json({
      totalUsers: users,
      activeUsers,
      totalDiseases: diseases,
      totalLogs: logs,
      lastWeekLogs,
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user activity
router.get("/activity", async (req, res) => {
  try {
    const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const logs = await Log.find({
      date: { $gte: lastWeek }
    })
    .sort({ date: -1 })
    .limit(100);

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get system health
router.get("/health", async (req, res) => {
  try {
    // In a real application, you would check various system metrics
    res.json({
      status: "healthy",
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;