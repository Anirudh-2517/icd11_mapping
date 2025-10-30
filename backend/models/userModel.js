import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["doctor", "researcher", "admin"],
      required: true,
    },
    specialization: { type: String },
  },
  { timestamps: true } // optional but useful
);

// ✅ Automatically hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.model("User", userSchema);
