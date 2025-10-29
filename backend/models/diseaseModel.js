import mongoose from "mongoose";

const diseaseSchema = new mongoose.Schema({
  code: { type: String, required: true }, // A002 format
  name: { type: String, required: true },
  definition: { type: String },
  icd_tm2: { type: String }, // R11 format
  icd_biomed: { type: Number }, // 787.01 format
  ayush_system: { type: String }, // e.g., "Unani"
  extra: { type: mongoose.Schema.Types.Mixed } // flexible field for other metadata
}, { collection: "diseases", timestamps: true });

export default mongoose.model("Disease", diseaseSchema);
