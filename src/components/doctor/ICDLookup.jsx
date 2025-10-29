import React, { useState, useEffect } from "react";
import { Search, Filter, Download, RefreshCw, AlertCircle, Loader2 } from 'lucide-react';

const ICDLookup = () => {
  const [mappings, setMappings] = useState([]);
  const [filteredMappings, setFilteredMappings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSystem, setFilterSystem] = useState("all");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchTerm, filterSystem, mappings]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://localhost:5000/api/mongo/mappings');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      console.log('Data received:', data);
      setMappings(data);
      setFilteredMappings(data);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterData = () => {
    let filtered = [...mappings];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(mapping => 
        mapping.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mapping.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mapping.definition?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mapping.icd_tm2?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mapping.icd_biomed?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply system filter
    if (filterSystem !== "all") {
      filtered = filtered.filter(mapping => mapping.ayush_system === filterSystem);
    }

    setFilteredMappings(filtered);
  };

  const handleExport = () => {
    const csvContent = [
      ['Code', 'Name', 'Definition', 'ICD TM2', 'ICD Biomed', 'AYUSH System'],
      ...filteredMappings.map(m => [
        m.code, m.name, m.definition, m.icd_tm2, m.icd_biomed, m.ayush_system
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'icd_lookup_export.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const getSystemColor = (system) => {
    const colors = {
      'Ayurveda': 'bg-green-100 text-green-800',
      'Yoga': 'bg-purple-100 text-purple-800',
      'Unani': 'bg-blue-100 text-blue-800',
      'Siddha': 'bg-orange-100 text-orange-800',
      'Homeopathy': 'bg-pink-100 text-pink-800',
      'Naturopathy': 'bg-teal-100 text-teal-800',
    };
    return colors[system] || 'bg-gray-100 text-gray-800';
  };

  const uniqueSystems = [...new Set(mappings.map(m => m.ayush_system).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">ICD Lookup</h2>
          <p className="text-gray-600">Search and explore medical code mappings</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800">Error loading data</h3>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, code, definition, ICD..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="md:col-span-3 relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterSystem}
                onChange={(e) => setFilterSystem(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Systems</option>
                {uniqueSystems.map(system => (
                  <option key={system} value={system}>{system}</option>
                ))}
              </select>
            </div>

            {/* Action Buttons */}
            <div className="md:col-span-4 flex gap-2">
              <button
                onClick={fetchData}
                disabled={loading}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span className="font-medium">Refresh</span>
              </button>
              <button
                onClick={handleExport}
                disabled={loading || filteredMappings.length === 0}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                <span className="font-medium">Export</span>
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Showing <span className="font-semibold text-gray-800">{filteredMappings.length}</span> of <span className="font-semibold text-gray-800">{mappings.length}</span> results
            </span>
            {(searchTerm || filterSystem !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterSystem("all");
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Loading data...</p>
          </div>
        ) : (
          /* Table */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Code</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Definition</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ICD TM2</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ICD Biomed</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">AYUSH System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredMappings.length > 0 ? (
                    filteredMappings.map((mapping, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-blue-600">{mapping.code}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-gray-800">{mapping.name}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{mapping.definition}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-700">{mapping.icd_tm2 || '-'}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-700">{mapping.icd_biomed || '-'}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getSystemColor(mapping.ayush_system)}`}>
                            {mapping.ayush_system}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center">
                        <div className="text-gray-400">
                          <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                          <p className="text-lg font-medium text-gray-600">No results found</p>
                          <p className="text-sm text-gray-500 mt-1">Try adjusting your search or filters</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ICDLookup;