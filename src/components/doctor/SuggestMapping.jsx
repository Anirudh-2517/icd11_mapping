import React, { useState, useContext } from "react";
import axios from "axios";
import { Send } from "lucide-react";
import AuthContext from "../../context/AuthContext";

const SuggestMapping = () => {
  const [formData, setFormData] = useState({
    name: "",
    definition: "",
    icd_tm2: "",
    icd_biomed: "",
    ayush_system: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { auth } = useContext(AuthContext);
      const payload = { ...formData, createdBy: auth?.username || null };
      await axios.post("http://localhost:5000/api/mappings/suggest", payload);
      setMessage("Mapping suggestion submitted successfully!");
      setFormData({ name: "", definition: "", icd_tm2: "", icd_biomed: "", ayush_system: "" });
    } catch (err) {
      console.error(err);
      setMessage("Error submitting suggestion.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Suggest Mapping</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Disease Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="definition"
          placeholder="Short Definition"
          value={formData.definition}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="icd_tm2"
            placeholder="ICD_TM2 Code"
            value={formData.icd_tm2}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />
          <input
            name="icd_biomed"
            placeholder="ICD_Biomed Code"
            value={formData.icd_biomed}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />
        </div>
        <select
          name="ayush_system"
          value={formData.ayush_system}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select AYUSH System</option>
          <option value="Ayurveda">Ayurveda</option>
          <option value="Unani">Unani</option>
          <option value="Siddha">Siddha</option>
          <option value="Homeopathy">Homeopathy</option>
        </select>

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90"
        >
          <Send className="w-5 h-5" /> Submit Suggestion
        </button>
      </form>
      {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
    </div>
  );
};

export default SuggestMapping;
