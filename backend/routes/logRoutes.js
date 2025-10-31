// backend/routes/logRoutes.js
import express from "express";
import mongoose from "mongoose";
import Log from "../models/logModel.js";

const router = express.Router();

// ✅ GET all logs (used by frontend)
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ date: -1 });
    console.log(`📜 Retrieved ${logs.length} logs`);
    res.json(logs);
  } catch (error) {
    console.error("❌ Error fetching logs:", error);
    res.status(500).json({ message: "Server error fetching logs" });
  }
});

// ✅ GET basic stats
router.get("/stats", async (req, res) => {
  try {
    const total = await Log.countDocuments();
    const failed = await Log.countDocuments({ status: "failed" });
    const success = await Log.countDocuments({ status: "success" });
    res.json({ total, failed, success });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats" });
  }
});

// ✅ DELETE old logs (optional cleanup)
router.delete("/clear", async (req, res) => {
  try {
    const result = await Log.deleteMany({ date: { $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } });
    res.json({ message: `🧹 Deleted ${result.deletedCount} old logs` });
  } catch (error) {
    res.status(500).json({ message: "Error clearing logs" });
  }
});

export default router;
