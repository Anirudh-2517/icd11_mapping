// backend/controllers/analyticController.js
import Analytics from "../models/analyticModel.js";

export const getAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.find();
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching analytics", error });
  }
};

export const createAnalytic = async (req, res) => {
  try {
    const { metric_name, value, category } = req.body;
    const analytic = new Analytics({ metric_name, value, category });
    await analytic.save();
    res.status(201).json(analytic);
  } catch (error) {
    res.status(500).json({ message: "Error creating analytic", error });
  }
};

export const getAnalyticsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const analytics = await Analytics.find({ category });
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category analytics", error });
  }
};
