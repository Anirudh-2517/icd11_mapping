import express from "express";
import ICD from "../models/icdModel.js";

const router = express.Router();

// Get all ICD mappings
router.get("/mappings", async (req, res) => {
  try {
    const mappings = await ICD.find({});
    console.log(`Found ${mappings.length} mappings`);
    res.json(mappings);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Search ICD mappings
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    const mappings = await ICD.find({
      $or: [
        { code: { $regex: q, $options: "i" } },
        { name: { $regex: q, $options: "i" } }
      ]
    });
    res.json(mappings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;