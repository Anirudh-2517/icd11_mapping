import React, { useState } from "react";
import { Play, Loader, Brain, CheckCircle, XCircle, Activity } from "lucide-react";

const AITraining = () => {
  const [training, setTraining] = useState(false);
  const [status, setStatus] = useState("Not started");

  const startTraining = async () => {
    try {
      setTraining(true);
      setStatus("Training model...");
      // Simulating API call - replace with: const response = await api.post("/ai/train");
      await new Promise(resolve => setTimeout(resolve, 3000));
      const response = { data: { message: "Training complete!" } };
      setStatus(response.data.message || "✅ Training complete!");
    } catch (error) {
      console.error(error);
      setStatus("❌ Training failed.");
    } finally {
      setTraining(false);
    }
  };

  const getStatusIcon = () => {
    if (training) return <Loader className="w-5 h-5 animate-spin text-blue-500" />;
    if (status.includes("✅") || status.includes("complete")) return <CheckCircle className="w-5 h-5 text-emerald-500" />;
    if (status.includes("❌") || status.includes("failed")) return <XCircle className="w-5 h-5 text-red-500" />;
    return <Activity className="w-5 h-5 text-gray-400" />;
  };

  const getStatusColor = () => {
    if (training) return "text-blue-600 bg-blue-50 border-blue-200";
    if (status.includes("✅") || status.includes("complete")) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (status.includes("❌") || status.includes("failed")) return "text-red-600 bg-red-50 border-red-200";
    return "text-gray-600 bg-gray-50 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-700 to-emerald-700 bg-clip-text text-transparent">
              AI Model Training
            </h2>
          </div>
          <p className="text-gray-600 ml-14">
            Advanced machine learning pipeline for Ayurveda-ICD code mapping
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Gradient Header Bar */}
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500"></div>
          
          <div className="p-8">
            {/* Info Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Training Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload your dataset and train AI models to automatically map Ayurvedic terminology 
                to standardized ICD codes. The training process uses advanced machine learning 
                algorithms to ensure high accuracy and reliability.
              </p>
            </div>

            {/* Status Card */}
            <div className={`mb-8 p-5 rounded-xl border-2 transition-all duration-300 ${getStatusColor()}`}>
              <div className="flex items-center gap-3">
                {getStatusIcon()}
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">Current Status</p>
                  <p className="font-semibold">{status}</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              {training && (
                <div className="mt-4 bg-white rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 animate-pulse" 
                       style={{ width: '70%' }}></div>
                </div>
              )}
            </div>

            {/* Action Section */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Ready to train?</p>
                <p className="text-sm text-gray-600">Click the button to start the training process</p>
              </div>
              <button
                onClick={startTraining}
                disabled={training}
                className={`
                  px-8 py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-cyan-500 to-emerald-500
                  hover:from-cyan-600 hover:to-emerald-600
                  disabled:from-gray-400 disabled:to-gray-500
                  transform transition-all duration-200
                  hover:scale-105 hover:shadow-lg
                  disabled:scale-100 disabled:cursor-not-allowed
                  flex items-center gap-3
                  shadow-md
                `}
              >
                {training ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Training...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Start Training</span>
                  </>
                )}
              </button>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-600">98.5%</p>
                <p className="text-sm text-gray-600 mt-1">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-600">15min</p>
                <p className="text-sm text-gray-600 mt-1">Avg. Training Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">10K+</p>
                <p className="text-sm text-gray-600 mt-1">Training Records</p>
              </div>
            </div>
          </div>
        </div>

        {/* Helper Text */}
        <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Note:</span> Ensure your dataset is properly formatted 
            before starting the training process. For best results, use datasets with at least 5,000 
            labeled examples.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AITraining;