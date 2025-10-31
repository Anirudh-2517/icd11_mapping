// src/pages/Report.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart3, TrendingUp, Calendar, Tag, RefreshCw, Download, FileText } from "lucide-react";

const Report = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/analytics")
      .then((res) => {
        setAnalytics(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching analytics:", err);
        setLoading(false);
      });
  };

  const getCategoryColor = (category) => {
    const colors = {
      performance: "bg-blue-500/20 text-blue-400 border-blue-500/50",
      users: "bg-green-500/20 text-green-400 border-green-500/50",
      revenue: "bg-purple-500/20 text-purple-400 border-purple-500/50",
      engagement: "bg-orange-500/20 text-orange-400 border-orange-500/50",
      default: "bg-gray-500/20 text-gray-400 border-gray-500/50"
    };
    return colors[category?.toLowerCase()] || colors.default;
  };

  const getTotalValue = () => {
    return analytics.reduce((sum, item) => sum + (parseFloat(item.value) || 0), 0).toFixed(2);
  };

  const getUniqueCategories = () => {
    return [...new Set(analytics.map(a => a.category))].length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-600/20 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">Analytics Report</h1>
          </div>
          <p className="text-gray-400">Comprehensive overview of system metrics and performance</p>
        </div>

        {/* Stats Cards */}
        {!loading && analytics.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-300 text-sm font-medium mb-1">Total Metrics</p>
                  <p className="text-3xl font-bold text-white">{analytics.length}</p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm font-medium mb-1">Categories</p>
                  <p className="text-3xl font-bold text-white">{getUniqueCategories()}</p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Tag className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-xl border border-green-500/30 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-300 text-sm font-medium mb-1">Total Value</p>
                  <p className="text-3xl font-bold text-white">{getTotalValue()}</p>
                </div>
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Controls Bar */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 mb-6 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Last updated: {new Date().toLocaleString()}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={fetchAnalytics}
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-3">
                <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                <p className="text-gray-400">Loading analytics data...</p>
              </div>
            </div>
          ) : analytics.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 px-4">
              <div className="p-4 bg-gray-700/30 rounded-full mb-4">
                <BarChart3 className="w-12 h-12 text-gray-500" />
              </div>
              <p className="text-xl font-semibold text-gray-300 mb-2">No analytics data found</p>
              <p className="text-gray-500 text-center">Analytics data will appear here once available</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900/50 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Metric
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Value
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {analytics.map((a) => (
                    <tr
                      key={a._id}
                      className="hover:bg-gray-700/30 transition-colors duration-150"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-500/20 rounded-lg">
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="text-gray-200 font-medium">
                            {a.metric_name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-2xl font-bold text-white">
                          {a.value}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(a.category)}`}>
                          {a.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(a.date).toLocaleDateString()}</span>
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
    </div>
  );
};

export default Report;