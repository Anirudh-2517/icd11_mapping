import React, { useEffect, useState } from "react";
import { Database, Trash2, Edit2, Plus, Upload, Download, Search, Filter, RefreshCw, AlertCircle } from "lucide-react";
import api from "../../services/api";

const DataManagement = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [systemFilter, setSystemFilter] = useState("all");
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const res = await api.get("/data");
      setRecords(res.data || []);
      setError("");
    } catch (err) {
      setError("Failed to load records");
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (id) => {
    try {
      await api.delete(`/data/${id}`);
      fetchRecords();
    } catch (err) {
      setError("Failed to delete record");
    }
  };

  const filteredRecords = records.filter(record => {
    const matchesSearch = (record.name || record.TermName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (record.definition || record.Notes || "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSystem = systemFilter === "all" || record.ayush_system === systemFilter;
    return matchesSearch && matchesSystem;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-amber-700 flex items-center gap-2">
          <Database className="w-8 h-8" />
          Data Management
        </h2>
        <div className="flex gap-2">
          <button className="bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-600 transition-colors">
            <Plus className="w-5 h-5" />
            Add Record
          </button>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
            <Upload className="w-5 h-5" />
            Import
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors">
            <Download className="w-5 h-5" />
            Export
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
                placeholder="Search records..."
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
              <option value="Unani">Unani</option>
              <option value="Siddha">Siddha</option>
              <option value="Homeopathy">Homeopathy</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8 text-gray-500">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2" />
            Loading records...
          </div>
        ) : filteredRecords.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No records found matching your criteria
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name/Term</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">System</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Definition/Notes</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRecords.map((record) => (
                  <tr key={record._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {record.name || record.TermName}
                      </div>
                      <div className="text-sm text-gray-500">
                        Code: {record.code || record.NamasteCode || 'N/A'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                        {record.ayush_system || 'Unknown'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 truncate max-w-md">
                        {record.definition || record.Notes || 'No description available'}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setSelectedRecord(record)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => deleteRecord(record._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
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
