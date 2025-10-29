import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/namaste-db");
    console.log("✅ MongoDB connected to namaste-db");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};
