import express from "express";
import Log from "../models/logModel.js";

const router = express.Router();

// ✅ Get all logs (GET /api/logs)
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ date: -1 });
    res.json(logs);
  } catch (error) {
    console.error("❌ Error fetching logs:", error);
    res.status(500).json({ message: "Server error fetching logs" });
  }
});

// ✅ Optional: Get single log by ID (GET /api/logs/:id)
router.get("/:id", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    if (!log) return res.status(404).json({ message: "Log not found" });
    res.json(log);
  } catch (error) {
    console.error("❌ Error fetching log by ID:", error);
    res.status(500).json({ message: "Server error fetching log" });
  }
});

export default router;
