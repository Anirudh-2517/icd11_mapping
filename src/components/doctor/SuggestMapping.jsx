import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Lightbulb, FileText, Code, Stethoscope, Sparkles } from "lucide-react";

const SuggestMapping = () => {
  const [formData, setFormData] = useState({
    name: "",
    definition: "",
    icd_tm2: "",
    icd_biomed: "",
    ayush_system: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulating API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1500));
      // const payload = { ...formData, createdBy: auth?.username || null };
      // await axios.post("http://localhost:5000/api/mappings/suggest", payload);
      
      setMessage("Mapping suggestion submitted successfully! Our team will review it shortly.");
      setMessageType("success");
      setFormData({ name: "", definition: "", icd_tm2: "", icd_biomed: "", ayush_system: "" });
    } catch (err) {
      console.error(err);
      setMessage("Error submitting suggestion. Please try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const fillExample = () => {
    setFormData({
      name: "Vata Dosha Imbalance",
      definition: "A condition characterized by excess Vata energy causing dryness, anxiety, and irregular digestion in Ayurvedic medicine.",
      icd_tm2: "TM2.A01",
      icd_biomed: "BIO.F45.8",
      ayush_system: "Ayurveda",
    });
  };

  const ayushSystems = [
    { value: "Ayurveda", icon: "🌿", description: "Traditional Indian medicine" },
    { value: "Unani", icon: "🏺", description: "Greco-Arabic medicine" },
    { value: "Siddha", icon: "⚗️", description: "Tamil traditional medicine" },
    { value: "Homeopathy", icon: "💊", description: "Alternative medicine system" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                  Suggest New Mapping
                </h2>
                <p className="text-gray-600 text-sm mt-1">Help us improve the AYUSH-ICD mapping database</p>
              </div>
            </div>
            <button
              onClick={fillExample}
              className="px-4 py-2 bg-white border-2 border-purple-200 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2 text-sm font-medium shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              Fill Example
            </button>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
          
          <div className="p-8">
            {/* Info Banner */}
            <div className="mb-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
              <div className="flex gap-3">
                <FileText className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Your suggestions help bridge traditional AYUSH medical systems with modern ICD classification. 
                    All submissions are reviewed by medical experts before integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Disease Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Stethoscope className="w-4 h-4 text-purple-600" />
                  Disease/Condition Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  placeholder="e.g., Vata Dosha Imbalance, Kapha Aggravation"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  required
                />
              </div>

              {/* Definition */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  Definition
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="definition"
                  placeholder="Provide a clear, concise definition of the condition..."
                  value={formData.definition}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  {formData.definition.length} characters • Aim for 50-300 characters
                </p>
              </div>

              {/* ICD Codes Grid */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <Code className="w-4 h-4 text-indigo-600" />
                  ICD Classification Codes
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-2 block">ICD-TM2 Code</label>
                    <input
                      name="icd_tm2"
                      placeholder="e.g., TM2.A01"
                      value={formData.icd_tm2}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-mono text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-2 block">ICD-Biomed Code</label>
                    <input
                      name="icd_biomed"
                      placeholder="e.g., BIO.F45.8"
                      value={formData.icd_biomed}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-mono text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* AYUSH System Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <span className="text-lg">🏥</span>
                  AYUSH System
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ayushSystems.map((system) => (
                    <label
                      key={system.value}
                      className={`
                        p-4 border-2 rounded-xl cursor-pointer transition-all
                        ${formData.ayush_system === system.value
                          ? 'border-purple-500 bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="ayush_system"
                        value={system.value}
                        checked={formData.ayush_system === system.value}
                        onChange={handleChange}
                        className="sr-only"
                        required
                      />
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{system.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-800">{system.value}</p>
                          <p className="text-xs text-gray-600">{system.description}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`
                    w-full py-4 rounded-xl font-semibold text-white
                    bg-gradient-to-r from-purple-500 to-blue-600
                    hover:from-purple-600 hover:to-blue-700
                    disabled:from-gray-400 disabled:to-gray-500
                    transform transition-all duration-200
                    hover:scale-[1.02] hover:shadow-lg
                    disabled:scale-100 disabled:cursor-not-allowed
                    flex items-center justify-center gap-3
                    shadow-md
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Suggestion</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Message Alert */}
            {message && (
              <div className={`
                mt-6 p-4 rounded-xl border-2 flex items-start gap-3
                ${messageType === 'success' 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                  : 'bg-red-50 border-red-200 text-red-700'
                }
              `}>
                {messageType === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                )}
                <p className="font-medium">{message}</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
            <p className="text-2xl font-bold text-purple-600">2,847</p>
            <p className="text-xs text-gray-600 mt-1">Mappings Reviewed</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
            <p className="text-2xl font-bold text-blue-600">94%</p>
            <p className="text-xs text-gray-600 mt-1">Approval Rate</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
            <p className="text-2xl font-bold text-indigo-600">48hrs</p>
            <p className="text-xs text-gray-600 mt-1">Avg. Review Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestMapping;