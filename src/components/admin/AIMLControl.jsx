import React, { useState } from "react";
import { Cpu, Play, RefreshCw, BarChart, AlertCircle, CheckCircle, Zap, Activity, TrendingUp, Clock } from "lucide-react";

const AIMLControl = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  const triggerTraining = async () => {
    setLoading(true);
    setLastAction('training');
    try {
      // Simulating API call - replace with: const res = await api.post("/ai/train");
      await new Promise(resolve => setTimeout(resolve, 2000));
      const res = { data: { message: "Training started successfully" } };
      setStatus(res.data.message || "Training started successfully");
    } catch (error) {
      setStatus("Error starting training: " + error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const runPrediction = async () => {
    setLoading(true);
    setLastAction('prediction');
    try {
      // Simulating API call - replace with: const res = await api.post("/ai/predict");
      await new Promise(resolve => setTimeout(resolve, 2000));
      const res = { data: { message: "Prediction completed successfully" } };
      setStatus(res.data.message || "Prediction completed successfully");
    } catch (error) {
      setStatus("Error running prediction: " + error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  // Demo stats
  const stats = {
    modelAccuracy: "94.7%",
    totalPredictions: "12,847",
    avgProcessTime: "1.2s",
    lastTraining: "2 hours ago"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-purple-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl shadow-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">
                AI/ML Control Panel
              </h2>
              <p className="text-gray-600 text-sm mt-1">Advanced machine learning operations and monitoring</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-fuchsia-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-fuchsia-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Accuracy</p>
                <p className="text-xl font-bold text-gray-800">{stats.modelAccuracy}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BarChart className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Predictions</p>
                <p className="text-xl font-bold text-gray-800">{stats.totalPredictions}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Zap className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Time</p>
                <p className="text-xl font-bold text-gray-800">{stats.avgProcessTime}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Last Training</p>
                <p className="text-xl font-bold text-gray-800">{stats.lastTraining}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Control Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Model Training Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-fuchsia-500 to-purple-600"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-fuchsia-100 to-purple-100 rounded-xl">
                  <Play className="w-6 h-6 text-fuchsia-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Model Training</h3>
                  <p className="text-sm text-gray-600">AI model optimization</p>
                </div>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-br from-fuchsia-50 to-purple-50 rounded-xl border border-fuchsia-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Initiate training of the AI model with the latest disease mapping data. 
                  The model will learn from new patterns and improve prediction accuracy.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Training Dataset</span>
                  <span className="font-semibold text-gray-800">15,234 records</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Estimated Time</span>
                  <span className="font-semibold text-gray-800">~15 minutes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Model Version</span>
                  <span className="font-semibold text-gray-800">v2.3.1</span>
                </div>
              </div>

              <button
                onClick={triggerTraining}
                disabled={loading}
                className={`
                  w-full py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-fuchsia-500 to-purple-600
                  hover:from-fuchsia-600 hover:to-purple-700
                  disabled:from-gray-400 disabled:to-gray-500
                  transform transition-all duration-200
                  hover:scale-[1.02] hover:shadow-lg
                  disabled:scale-100 disabled:cursor-not-allowed
                  flex items-center justify-center gap-3
                  shadow-md
                `}
              >
                {loading && lastAction === 'training' ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Training in Progress...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Start Training</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Prediction Engine Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                  <BarChart className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Prediction Engine</h3>
                  <p className="text-sm text-gray-600">Real-time inference</p>
                </div>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Run the prediction engine on pending mappings and classifications. 
                  Process batch predictions with high accuracy and low latency.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Pending Mappings</span>
                  <span className="font-semibold text-gray-800">387 items</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Processing Speed</span>
                  <span className="font-semibold text-gray-800">~200/min</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Confidence Threshold</span>
                  <span className="font-semibold text-gray-800">≥ 85%</span>
                </div>
              </div>

              <button
                onClick={runPrediction}
                disabled={loading}
                className={`
                  w-full py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-emerald-500 to-teal-600
                  hover:from-emerald-600 hover:to-teal-700
                  disabled:from-gray-400 disabled:to-gray-500
                  transform transition-all duration-200
                  hover:scale-[1.02] hover:shadow-lg
                  disabled:scale-100 disabled:cursor-not-allowed
                  flex items-center justify-center gap-3
                  shadow-md
                `}
              >
                {loading && lastAction === 'prediction' ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Processing Predictions...</span>
                  </>
                ) : (
                  <>
                    <BarChart className="w-5 h-5" />
                    <span>Run Prediction</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Status Alert */}
        {status && (
          <div className={`
            p-5 rounded-xl border-2 flex items-start gap-3 animate-in slide-in-from-top duration-300
            ${status.includes("Error") 
              ? "bg-red-50 border-red-200" 
              : "bg-emerald-50 border-emerald-200"
            }
          `}>
            {status.includes("Error") ? (
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            ) : (
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className={`font-semibold mb-1 ${status.includes("Error") ? "text-red-800" : "text-emerald-800"}`}>
                {status.includes("Error") ? "Operation Failed" : "Operation Successful"}
              </p>
              <p className={status.includes("Error") ? "text-red-700" : "text-emerald-700"}>
                {status}
              </p>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-6">
          <div className="flex gap-3">
            <Activity className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">About AI/ML Operations</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                This control panel allows you to manage machine learning operations for the AYUSH-ICD mapping system. 
                Training updates the model with new data, while predictions generate automated mappings for pending entries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Training:</span>
                    <span className="text-gray-600"> Updates model with latest patterns</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Prediction:</span>
                    <span className="text-gray-600"> Generates automated classifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLControl;