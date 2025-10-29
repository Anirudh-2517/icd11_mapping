import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import mongoRoute from './routes/mongoRoute.js';
import feedbackRoute from './routes/feedbackRoute.js';
import simpleKnowledgeRoute from './routes/simpleKnowledgeRoute.js';
const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/namaste-db")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    // Log the list of collections
    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.error("Error listing collections:", err);
        return;
      }
      console.log("📚 Available collections:", collections.map(c => c.name));
    });
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));

// MongoDB routes
app.use("/api/mongo", mongoRoute);
app.use("/api/feedback", feedbackRoute);
app.use("/api/knowledge", simpleKnowledgeRoute);

// Start server
app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
