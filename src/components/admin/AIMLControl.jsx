import React, { useState } from "react";
import { Cpu, Play, RefreshCw, BarChart, AlertCircle } from "lucide-react";
import api from "../../services/api";

const AIMLControl = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const triggerTraining = async () => {
    setLoading(true);
    try {
      const res = await api.post("/ai/train");
      setStatus(res.data.message || "Training started successfully");
    } catch (error) {
      setStatus("Error starting training: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const runPrediction = async () => {
    setLoading(true);
    try {
      const res = await api.post("/ai/predict");
      setStatus(res.data.message || "Prediction completed successfully");
    } catch (error) {
      setStatus("Error running prediction: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-fuchsia-700 flex items-center gap-2">
        <Cpu className="w-8 h-8" />
        AI/ML Control Panel
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Model Training</h3>
          <p className="text-gray-600 mb-4">
            Initiate training of the AI model with latest disease mapping data.
          </p>
          <button
            onClick={triggerTraining}
            disabled={loading}
            className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:from-fuchsia-600 hover:to-purple-700 transition-all disabled:opacity-50"
          >
            {loading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <Play className="w-5 h-5" />
            )}
            Start Training
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Prediction Engine</h3>
          <p className="text-gray-600 mb-4">
            Run the prediction engine on pending mappings and classifications.
          </p>
          <button
            onClick={runPrediction}
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:from-emerald-600 hover:to-teal-700 transition-all disabled:opacity-50"
          >
            {loading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <BarChart className="w-5 h-5" />
            )}
            Run Prediction
          </button>
        </div>
      </div>

      {status && (
        <div className={`p-4 rounded-lg flex items-center gap-2 ${
          status.includes("Error") 
            ? "bg-red-50 text-red-700 border border-red-200" 
            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
        }`}>
          {status.includes("Error") ? (
            <AlertCircle className="w-5 h-5" />
          ) : (
            <Cpu className="w-5 h-5" />
          )}
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default AIMLControl;
