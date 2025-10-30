import express from "express";
import Knowledge from "../models/knowledgeModel.js";

const router = express.Router();

// GET /api/knowledge/
router.get("/", async (req, res) => {
  console.log("loudya")
  try {
    const articles = await Knowledge.find().sort({ createdAt: -1 }).limit(200);
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: "Query failed", error: err.message });
  }
});

export default router;
