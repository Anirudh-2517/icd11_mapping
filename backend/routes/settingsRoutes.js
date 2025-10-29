import express from "express";
import Setting from "../models/settingModel.js";
import Log from "../models/logModel.js";
const router = express.Router();

// Get all settings
router.get("/", async (req, res) => {
  try {
    const settings = await Setting.findOne();
    res.json(settings || {});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update settings
router.post("/", async (req, res) => {
  try {
    const settings = await Setting.findOneAndUpdate(
      {},
      { ...req.body, lastUpdated: new Date() },
      { new: true, upsert: true }
    );

    // Log the settings update
    await new Log({
      type: "info",
      message: "System settings updated",
      service: "settings",
      details: req.body
    }).save();

    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Reset settings to default
router.post("/reset", async (req, res) => {
  try {
    await Setting.deleteOne({});
    const defaultSettings = new Setting();
    await defaultSettings.save();

    // Log the settings reset
    await new Log({
      type: "warning",
      message: "System settings reset to default",
      service: "settings"
    }).save();

    res.json(defaultSettings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;