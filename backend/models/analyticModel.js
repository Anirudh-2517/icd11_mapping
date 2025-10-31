import mongoose from "mongoose";

const analyticSchema = new mongoose.Schema({
  metric_name: { type: String, required: true },
  value: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Analytics = mongoose.model("Analytics", analyticSchema);
export default Analytics;
