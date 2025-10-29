import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  email: { type: String },
  role: { type: String, required: true, enum: ['admin', 'doctor', 'researcher'] },
  specialization: { type: String },
  status: { type: String, default: 'active', enum: ['active', 'inactive'] }
});

export default mongoose.model("User", userSchema);
