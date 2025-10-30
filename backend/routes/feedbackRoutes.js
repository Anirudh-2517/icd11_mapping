// backend/routes/feedbackRoutes.js
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// ✅ Get all feedbacks
router.get("/list", async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection("feedbacks");
    console.log("📡 Fetching data from feedbacks collection...");

    const feedbacks = await collection.find({}).limit(50).toArray();
    console.log(`✅ Fetched ${feedbacks.length} feedbacks`);

    res.json(feedbacks);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add new feedback
router.post("/add", async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection("feedbacks");
    const newFeedback = {
      ...req.body,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newFeedback);
    console.log("✅ Feedback added:", result.insertedId);
    res.status(201).json(newFeedback);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get feedback statistics (/mystatus)
router.get("/mystatus", async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection("feedbacks");

    const totalFeedbacks = await collection.countDocuments();
    const feedbacks = await collection.find({}).toArray();

    const avgRating =
      feedbacks.length > 0
        ? feedbacks.reduce((sum, f) => sum + (f.rating || 0), 0) / feedbacks.length
        : 0;

    res.json({
      totalFeedbacks,
      averageRating: avgRating.toFixed(2),
      message: "✅ Feedback status fetched successfully",
    });
  } catch (err) {
    console.error("❌ Error in mystatus route:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
