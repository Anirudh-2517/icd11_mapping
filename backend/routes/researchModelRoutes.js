import express from "express";
import ResearchModel from "../models/researchModel.js";

const router = express.Router();

// ✅ GET all models
router.get("/", async (req, res) => {
  try {
    const models = await ResearchModel.find();
    console.log("Fetched models count:", models.length);
    res.json(models);
  } catch (error) {
    console.error("Error fetching research models:", error);
    res.status(500).json({ message: "Server error fetching models" });
  }
});

// ✅ GET one model by ID
router.get("/:id", async (req, res) => {
  try {
    const model = await ResearchModel.findById(req.params.id);
    if (!model) return res.status(404).json({ message: "Model not found" });
    res.json(model);
  } catch (error) {
    res.status(500).json({ message: "Error fetching model" });
  }
});

// ✅ DELETE model
router.delete("/:id", async (req, res) => {
  try {
    await ResearchModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting model" });
  }
});

export default router;
