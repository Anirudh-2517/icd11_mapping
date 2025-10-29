import mongoose from "mongoose";

const knowledgeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String },
  link: { type: String }
}, { collection: "knowledge", timestamps: true });

export default mongoose.model("Knowledge", knowledgeSchema);
