// backend/routes/aiRoutes.js
import express from "express";
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Define correct file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const trainScript = path.join(__dirname, "../ml/train_model.py");
const predictScript = path.join(__dirname, "../ml/predict_model.py");

// 🧠 TRAIN MODEL — runs Python script train_model.py
router.post("/train", (req, res) => {
  console.log("🚀 Training model...");
  const pythonProcess = spawn("python", [trainScript]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(`📘 Python: ${data}`);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`⚠️ Python Error: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`✅ Python training exited with code ${code}`);
    if (code === 0) {
      res.json({ message: "Training complete ✅" });
    } else {
      res.status(500).json({ error: "Training failed ❌" });
    }
  });

  pythonProcess.on("error", (err) => {
    console.error("🚨 Failed to start Python process:", err);
    res.status(500).json({ error: "Python process error" });
  });
});

// 🧩 PREDICT endpoint — calls predict_model.py
router.post("/predict", (req, res) => {
  console.log("🔮 Predicting...");
  const inputData = JSON.stringify(req.body);
  const pythonProcess = spawn("python", [predictScript, inputData]);

  let result = "";

  pythonProcess.stdout.on("data", (data) => {
    result += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`⚠️ Python Error: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`✅ Python prediction exited with code ${code}`);
    try {
      res.json(JSON.parse(result));
    } catch (e) {
      res.status(500).json({ error: "Failed to parse model output" });
    }
  });

  pythonProcess.on("error", (err) => {
    console.error("🚨 Failed to start Python process:", err);
    res.status(500).json({ error: "Python process error" });
  });
});

export default router;
