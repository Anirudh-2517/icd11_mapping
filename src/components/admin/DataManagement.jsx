import React, { useEffect, useState } from "react";
import {
  Database,
  Trash2,
  Edit2,
  Plus,
  RefreshCw,
  Search,
  Filter,
  AlertCircle,
} from "lucide-react";
import api from "../../services/api";

const DataManagement = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [systemFilter, setSystemFilter] = useState("all");

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    setLoading(true);
    try {
      const res = await api.get("/research-models");
      setModels(res.data || []);
      setError("");
    } catch (err) {
      setError("Failed to load research models");
    } finally {
      setLoading(false);
    }
  };

  const deleteModel = async (id) => {
    try {
      await api.delete(`/research-models/${id}`);
      fetchModels();
    } catch (err) {
      setError("Failed to delete model");
    }
  };

  const filteredModels = models.filter((model) => {
    const matchesSearch =
      model.model_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSystem =
      systemFilter === "all" ||
      model.associated_system?.toLowerCase() === systemFilter.toLowerCase();
    return matchesSearch && matchesSystem;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-amber-700 flex items-center gap-2">
          <Database className="w-8 h-8" />
          Research Model Management
        </h2>
        <div className="flex gap-2">
          <button className="bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-600 transition-colors">
            <Plus className="w-5 h-5" />
            Add Model
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={systemFilter}
              onChange={(e) => setSystemFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            >
              <option value="all">All Systems</option>
              <option value="Ayurveda">Ayurveda</option>
              <option value="Siddha">Siddha</option>
              <option value="Unani">Unani</option>
              <option value="Homeopathy">Homeopathy</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8 text-gray-500">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2" />
            Loading research models...
          </div>
        ) : filteredModels.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No research models found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Model Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    System
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Accuracy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Version
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredModels.map((model) => (
                  <tr key={model._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {model.model_name}
                    </td>
                    <td className="px-6 py-4">{model.associated_system}</td>
                    <td className="px-6 py-4">{model.accuracy || "N/A"}%</td>
                    <td className="px-6 py-4">{model.version}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          model.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {model.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteModel(model._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataManagement;
