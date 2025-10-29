import express from "express";
import Mapping from "../models/mappingModel.js";

const router = express.Router();

// POST /api/mappings/suggest
router.post("/suggest", async (req, res) => {
  try {
    const mapping = new Mapping({
      ...req.body,
      cstatus: "Pending",
      date: new Date().toLocaleDateString(),
      createdBy: req.body.createdBy || req.body.username || null
    });
    await mapping.save();
    res.json({ message: "Suggestion submitted" });
  } catch (err) {
    res.status(500).json({ message: "Submit failed", error: err.message });
  }
});

// GET /api/mappings/mystatus?createdBy=...
router.get("/mystatus", async (req, res) => {
  try {
    const createdBy = req.query.createdBy || null;
    const filter = createdBy ? { createdBy } : {};
    const feedbacks = await Mapping.find(filter).sort({ createdAt: -1 }).limit(100);
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Query failed", error: err.message });
  }
});

export default router;
