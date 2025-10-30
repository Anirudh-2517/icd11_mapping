import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  _id: String,
  user_id: String,
  action: String,
  date: { type: Date, default: Date.now },
  status: String
});

// ✅ Correct model name (singular) — maps automatically to "logs" collection
const Log = mongoose.model("Log", logSchema);

export default Log;
