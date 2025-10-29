import express from "express";
import ICD from "../models/icdModel.js";

const router = express.Router();

// Get all ICD mappings
router.get("/mappings", async (req, res) => {
  console.log('📡 Received request for ICD mappings');
  try {
    const count = await ICD.countDocuments({});
    console.log(`📊 Total documents in collection: ${count}`);

    const mappings = await ICD.find({});
    console.log(`✅ Successfully fetched ${mappings.length} mappings`);
    
    if (mappings.length > 0) {
      console.log('📝 Sample document:', mappings[0]);
    }

    res.json(mappings);
  } catch (err) {
    console.error('❌ Error fetching mappings:', err);
    res.status(500).json({ message: "Failed to fetch ICD mappings", error: err.message });
  }
});

// Search ICD mappings
router.get("/search", async (req, res) => {
  const q = req.query.q || "";
  console.log(`🔍 Searching for: "${q}"`);
  try {
    const results = await ICD.find({
      $or: [
        { code: { $regex: q, $options: "i" } },
        { name: { $regex: q, $options: "i" } },
        { definition: { $regex: q, $options: "i" } }
      ]
    });
    console.log(`✅ Found ${results.length} results for search: "${q}"`);
    res.json(results);
  } catch (err) {
    console.error('❌ Search error:', err);
    res.status(500).json({ message: "Search failed", error: err.message });
  }
});

// Get mappings by AYUSH system
router.get("/system/:system", async (req, res) => {
  console.log(`🔍 Looking for system: ${req.params.system}`);
  try {
    const mappings = await ICD.find({ ayush_system: req.params.system });
    console.log(`✅ Found ${mappings.length} mappings for system: ${req.params.system}`);
    res.json(mappings);
  } catch (err) {
    console.error('❌ Error fetching by system:', err);
    res.status(500).json({ message: "Failed to fetch system mappings", error: err.message });
  }
});



export default router;
