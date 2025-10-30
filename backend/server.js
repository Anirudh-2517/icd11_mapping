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

const app = express();

// ✅ CORS setup
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Body parser
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/namaste-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Register all routes
app.use("/api/mongo", mongoRoute);
app.use("/api/feedback", feedbackRoute);
app.use("/api/knowledge", simpleKnowledgeRoute);
app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);

// ✅ Base route
app.get("/", (req, res) => {
  res.send("Namaste India backend is running ✅");
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

export default app;
