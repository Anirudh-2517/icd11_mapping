import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { BarChart3, PieChart, RefreshCw, Download, Calendar, TrendingUp, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Analytics = () => {
  const [metrics, setMetrics] = useState({
    totalDiseases: 0,
    mappedDiseases: 0,
    pendingMappings: 0,
    activeDoctors: 0,
    systemDistribution: []
  });

  const [entriesData, setEntriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [useDemo, setUseDemo] = useState(false);

  // Demo data
  const demoMetrics = {
    totalDiseases: 245,
    mappedDiseases: 198,
    pendingMappings: 47,
    activeDoctors: 32,
    systemDistribution: [
      { name: "Cardiovascular", count: 58 },
      { name: "Respiratory", count: 42 },
      { name: "Digestive", count: 35 },
      { name: "Nervous", count: 38 },
      { name: "Musculoskeletal", count: 28 },
      { name: "Endocrine", count: 22 },
      { name: "Immune", count: 15 },
      { name: "Other", count: 7 }
    ]
  };

  const demoEntriesData = [
    { month: "Jan", entries: 45, diseases: 23 },
    { month: "Feb", entries: 52, diseases: 28 },
    { month: "Mar", entries: 61, diseases: 35 },
    { month: "Apr", entries: 58, diseases: 31 },
    { month: "May", entries: 73, diseases: 42 },
    { month: "Jun", entries: 68, diseases: 38 },
    { month: "Jul", entries: 82, diseases: 47 },
    { month: "Aug", entries: 91, diseases: 53 },
    { month: "Sep", entries: 87, diseases: 49 },
    { month: "Oct", entries: 95, diseases: 58 },
    { month: "Nov", entries: 103, diseases: 62 },
    { month: "Dec", entries: 112, diseases: 71 }
  ];

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const res = await api.get("/analytics");
      setMetrics({
        ...res.data,
        systemDistribution: res.data.systemDistribution || []
      });
      
      // Fetch entries data if available
      if (res.data.entriesData) {
        setEntriesData(res.data.entriesData);
      } else {
        setEntriesData(demoEntriesData);
      }
      
      setUseDemo(false);
    } catch (error) {
      console.error("Error fetching analytics:", error);
      // Use demo data on error
      setMetrics(demoMetrics);
      setEntriesData(demoEntriesData);
      setUseDemo(true);
    } finally {
      setLoading(false);
    }
  };

  const loadDemoData = () => {
    setMetrics(demoMetrics);
    setEntriesData(demoEntriesData);
    setUseDemo(true);
  };

  const getSystemColor = (index) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-orange-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-cyan-500",
      "bg-emerald-500"
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-600/20 rounded-lg">
              <Activity className="w-6 h-6 text-indigo-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
          </div>
          <p className="text-gray-400">Comprehensive overview of system metrics and performance</p>
        </div>

        {/* Controls Bar */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 mb-6 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Last updated: {new Date().toLocaleString()}</span>
              </div>
              {useDemo && (
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-medium rounded-full border border-amber-500/30">
                  Showing Data
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={loadDemoData}
                className="flex items-center gap-2 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Show Data</span>
              </button>
              <button
                onClick={fetchAnalytics}
                className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
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

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-3">
              <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin" />
              <p className="text-gray-400">Loading analytics data...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-300 text-sm font-medium mb-1">Total Diseases</p>
                    <p className="text-3xl font-bold text-white">{metrics.totalDiseases}</p>
                  </div>
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-indigo-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 backdrop-blur-sm rounded-xl border border-emerald-500/30 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-300 text-sm font-medium mb-1">Mapped Diseases</p>
                    <p className="text-3xl font-bold text-white">{metrics.mappedDiseases}</p>
                  </div>
                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                    <PieChart className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm rounded-xl border border-amber-500/30 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-300 text-sm font-medium mb-1">Pending Mappings</p>
                    <p className="text-3xl font-bold text-white">{metrics.pendingMappings}</p>
                  </div>
                  <div className="p-3 bg-amber-500/20 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-300 text-sm font-medium mb-1">Active Doctors</p>
                    <p className="text-3xl font-bold text-white">{metrics.activeDoctors}</p>
                  </div>
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Entries Graph */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Entries Overview</h3>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={entriesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="entries" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6', r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Total Entries"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="diseases" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: '#10B981', r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Disease Entries"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* System Distribution Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <PieChart className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">System Distribution</h3>
              </div>

              {metrics.systemDistribution.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-4">
                  <div className="p-4 bg-gray-700/30 rounded-full mb-4">
                    <PieChart className="w-12 h-12 text-gray-500" />
                  </div>
                  <p className="text-xl font-semibold text-gray-300 mb-2">No distribution data found</p>
                  <p className="text-gray-500 text-center">System distribution data will appear here once available</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {metrics.systemDistribution.map((system, index) => {
                    const percentage = metrics.totalDiseases 
                      ? ((system.count / metrics.totalDiseases) * 100).toFixed(1)
                      : 0;
                    
                    return (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${getSystemColor(index)}`}></div>
                            <span className="text-gray-200 font-medium">{system.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-sm">{percentage}%</span>
                            <span className="text-white font-bold min-w-[3rem] text-right">{system.count}</span>
                          </div>
                        </div>
                        <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getSystemColor(index)} rounded-full transition-all duration-700 ease-out group-hover:opacity-80`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Analytics;