import mongoose from "mongoose";

const researchModelSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    model_name: { type: String, required: true },
    description: { type: String },
    created_by: { type: String },
    status: { type: String },
    version: { type: String },
    last_trained: { type: Date },
    accuracy: { type: Number },
    associated_system: { type: String },
  },
  { collection: "research_models" } // ✅ forces Mongoose to use existing collection
);

const ResearchModel = mongoose.model("ResearchModel", researchModelSchema);
export default ResearchModel;
