const AyushSystem = require('../models/ayushSystemModel');

// Get all AYUSH systems
exports.getAyushSystems = async (req, res) => {
  try {
    const systems = await AyushSystem.find();
    res.json(systems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new AYUSH system
exports.createAyushSystem = async (req, res) => {
  const system = new AyushSystem(req.body);
  try {
    const newSystem = await system.save();
    res.status(201).json(newSystem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update AYUSH system status
exports.updateSystemStatus = async (req, res) => {
  try {
    const system = await AyushSystem.findById(req.params.id);
    if (!system) {
      return res.status(404).json({ message: 'System not found' });
    }
    system.status = req.body.status;
    const updatedSystem = await system.save();
    res.json(updatedSystem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};