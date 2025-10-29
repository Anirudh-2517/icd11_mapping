import express from "express";
import Disease from "../models/diseaseModel.js";
const router = express.Router();

// Get all diseases
router.get("/", async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a disease
router.delete("/:id", async (req, res) => {
  try {
    await Disease.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new disease
router.post("/", async (req, res) => {
  try {
    const disease = new Disease(req.body);
    const savedDisease = await disease.save();
    res.status(201).json(savedDisease);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update disease
router.put("/:id", async (req, res) => {
  try {
    const updatedDisease = await Disease.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedDisease);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;