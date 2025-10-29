const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const ResearchModel = require('../models/icdModel');

// Get research data
router.get('/data', protect, async (req, res) => {
  try {
    const data = await ResearchModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get research data by system
router.get('/data/:system', protect, async (req, res) => {
  try {
    const data = await ResearchModel.find({ ayush_system: req.params.system });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;