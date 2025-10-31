// backend/models/logModel.js
import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  _id: String,
  user_id: String,
  action: String,
  date: { type: Date, default: Date.now },
  status: String,
  type: { type: String, default: "info" },
  service: { type: String, default: "system" },
  message: { type: String, default: "" }
});

const Log = mongoose.model("logs", logSchema); // ✅ collection name must be "logs"
export default Log;
