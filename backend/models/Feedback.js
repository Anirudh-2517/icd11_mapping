// backend/models/Feedback.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Feedback", feedbackSchema);
