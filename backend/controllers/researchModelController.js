import ResearchModel from "../models/ResearchModel.js";

// GET all models
export const getResearchModels = async (req, res) => {
  try {
    const models = await ResearchModel.find();
    res.json(models);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE model
export const deleteResearchModel = async (req, res) => {
  try {
    const model = await ResearchModel.findByIdAndDelete(req.params.id);
    if (!model) return res.status(404).json({ message: "Model not found" });
    res.json({ message: "Model deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create model
export const createResearchModel = async (req, res) => {
  try {
    const model = new ResearchModel(req.body);
    await model.save();
    res.status(201).json(model);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update model
export const updateResearchModel = async (req, res) => {
  try {
    const model = await ResearchModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!model) return res.status(404).json({ message: "Model not found" });
    res.json(model);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
