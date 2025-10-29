import express from "express";
import Log from "../models/logModel.js";
const router = express.Router();

// Get all logs with filtering
router.get("/", async (req, res) => {
  try {
    const { type, service, from, to, limit = 100 } = req.query;
    
    const query = {};
    if (type) query.type = type;
    if (service) query.service = service;
    if (from || to) {
      query.date = {};
      if (from) query.date.$gte = new Date(from);
      if (to) query.date.$lte = new Date(to);
    }

    const logs = await Log.find(query)
      .sort({ date: -1 })
      .limit(Number(limit))
      .populate('user', 'username name');

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get log statistics
router.get("/stats", async (req, res) => {
  try {
    const [errorCount, warningCount, infoCount, successCount] = await Promise.all([
      Log.countDocuments({ type: "error" }),
      Log.countDocuments({ type: "warning" }),
      Log.countDocuments({ type: "info" }),
      Log.countDocuments({ type: "success" })
    ]);

    res.json({
      error: errorCount,
      warning: warningCount,
      info: infoCount,
      success: successCount,
      total: errorCount + warningCount + infoCount + successCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Clear old logs
router.delete("/clear", async (req, res) => {
  try {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const result = await Log.deleteMany({ 
      date: { $lt: thirtyDaysAgo },
      type: { $nin: ["error", "warning"] } // Keep important logs
    });

    res.json({
      message: "Old logs cleared successfully",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;