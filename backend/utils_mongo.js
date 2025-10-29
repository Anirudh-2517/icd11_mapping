import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/namaste-db";

export const connectMongo = async () => {
  try {
    mongoose.set("strictQuery", true);

    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // 5s timeout for server discovery
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    // Handle disconnections or reconnections gracefully
    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected. Attempting to reconnect...");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("🔁 MongoDB reconnected successfully.");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB error:", err.message);
    });
  } catch (err) {
    console.error("❌ MongoDB initial connection failed:", err.message);
    setTimeout(connectMongo, 5000); // retry after 5s
  }
};
