import React, { useEffect, useState } from "react";
import { getLogs } from "../../services/api";
import { Search, Filter, Download, RefreshCw } from "lucide-react";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const { data } = await getLogs();
      setLogs(data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLogs = logs.filter((log) => {
    const safeSearch = searchTerm.toLowerCase();
    return (
      (log.user_id?.toLowerCase() || "").includes(safeSearch) ||
      (log.action?.toLowerCase() || "").includes(safeSearch) ||
      (log.status?.toLowerCase() || "").includes(safeSearch) ||
      (log.service?.toLowerCase() || "").includes(safeSearch)
    );
  });

  const getStatusBadge = (status) => {
    const styles = {
      success: "bg-green-500/20 text-green-400 border-green-500/50",
      failed: "bg-red-500/20 text-red-400 border-red-500/50",
      default: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
    };

    const style = status === "success" ? styles.success : 
                  status === "failed" ? styles.failed : 
                  styles.default;

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${style}`}>
        {status || "Unknown"}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">System Logs</h1>
          <p className="text-gray-400">Monitor and track system activities</p>
        </div>

        {/* Controls Bar */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 mb-6 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by user, action, status..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={fetchLogs}
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex gap-6 text-sm">
              <div className="text-gray-400">
                Total: <span className="text-white font-semibold">{logs.length}</span>
              </div>
              <div className="text-gray-400">
                Filtered: <span className="text-white font-semibold">{filteredLogs.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-3">
                <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                <p className="text-gray-400">Loading logs...</p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-900/50 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      User ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Date & Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {filteredLogs.length > 0 ? (
                    filteredLogs.map((log, index) => (
                      <tr
                        key={log._id || index}
                        className="hover:bg-gray-700/30 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                              {(log.user_id || "?")[0].toUpperCase()}
                            </div>
                            <span className="text-gray-200 font-medium">
                              {log.user_id || "N/A"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-300">{log.action || "N/A"}</span>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(log.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                          {log.date ? new Date(log.date).toLocaleString() : "N/A"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-12">
                        <div className="flex flex-col items-center justify-center text-gray-500">
                          <Filter className="w-12 h-12 mb-3 opacity-50" />
                          <p className="text-lg font-medium">No logs found</p>
                          <p className="text-sm mt-1">Try adjusting your search criteria</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logs;