const Analytics = require('../models/analyticModel');

// Get all analytics
exports.getAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.find();
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new analytic
exports.createAnalytic = async (req, res) => {
  const analytic = new Analytics(req.body);
  try {
    const newAnalytic = await analytic.save();
    res.status(201).json(newAnalytic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get analytics by category
exports.getAnalyticsByCategory = async (req, res) => {
  try {
    const analytics = await Analytics.find({ category: req.params.category });
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};