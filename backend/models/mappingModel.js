import mongoose from "mongoose";

const mappingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  definition: { type: String },
  icd_tm2: { type: String },
  icd_biomed: { type: String },
  ayush_system: { type: String },
  createdBy: { type: String },
  cstatus: { type: String, default: "Pending" },
  date: { type: String }
}, { collection: "mappings", timestamps: true });

export default mongoose.model("Mapping", mappingSchema);
