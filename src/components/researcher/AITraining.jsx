import React, { useState } from "react";
import api from "../../services/api";
import { UploadCloud, Play, Loader } from "lucide-react";

const AITraining = () => {
  const [training, setTraining] = useState(false);
  const [status, setStatus] = useState("Not started");

  const startTraining = async () => {
    setTraining(true);
    setStatus("Training model...");
    await api.post("/ai/train");
    setTimeout(() => {
      setTraining(false);
      setStatus("✅ Training complete!");
    }, 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-cyan-700">AI Training</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-600 mb-4">Upload dataset and train AI models for code mapping.</p>
        <button
          onClick={startTraining}
          disabled={training}
          className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          {training ? <Loader className="animate-spin" /> : <Play />}
          {training ? "Training..." : "Start Training"}
        </button>
        <p className="mt-4 text-gray-700">{status}</p>
      </div>
    </div>
  );
};

export default AITraining;
