// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Routes
import mongoRoute from "./routes/mongoRoute.js";
import feedbackRoute from "./routes/feedbackRoutes.js";
import simpleKnowledgeRoute from "./routes/simpleKnowledgeRoute.js";
import authRoutes from "./routes/authRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import aiRoutes from "./routes/aiRoutes.js"; // ✅ AI Routes
import researchModelRoutes from "./routes/researchModelRoutes.js";
import analyticRoutes from "./routes/analyticRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/namaste-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Register routes
app.use("/api/mongo", mongoRoute);
app.use("/api/feedback", feedbackRoute);
app.use("/api/knowledge", simpleKnowledgeRoute);
app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/research-models", researchModelRoutes);
app.use("/api/analytics", analyticRoutes);
app.use("/api/users", userRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("Namaste India backend is running ✅");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

export default app;
