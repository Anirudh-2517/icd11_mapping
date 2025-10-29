import mongoose from "mongoose";

const icdSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  definition: { type: String },
  icd_tm2: { type: String },
  icd_biomed: { type: String },
  ayush_system: { type: String },
});

export default mongoose.model("ICDMapping", icdSchema, "icd_mappings");
