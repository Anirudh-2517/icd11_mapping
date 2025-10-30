import React, { useEffect, useState } from "react";
import { FileSearch, AlertTriangle, CheckCircle, Info, Download, RefreshCw, Filter } from "lucide-react";
import { getLogs } from "../../services/api";

const LOG_TYPES = {
  error: { icon: AlertTriangle, style: "text-red-500 bg-red-50 border-red-200" },
  warning: { icon: AlertTriangle, style: "text-yellow-500 bg-yellow-50 border-yellow-200" },
  info: { icon: Info, style: "text-blue-500 bg-blue-50 border-blue-200" },
  success: { icon: CheckCircle, style: "text-green-500 bg-green-50 border-green-200" }
};

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await getLogs();
      setLogs(res.data || [
        { _id: 1, type: 'success', message: 'User login successful', date: '2023-10-28 10:30:15', service: 'auth' },
        { _id: 2, type: 'error', message: 'Database connection failed', date: '2023-10-28 10:29:00', service: 'database' },
        { _id: 3, type: 'warning', message: 'High memory usage detected', date: '2023-10-28 10:28:45', service: 'system' },
        { _id: 4, type: 'info', message: 'Backup process started', date: '2023-10-28 10:28:30', service: 'backup' }
      ]);
    } catch (error) {
      console.error('Error fetching logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesFilter = filter === 'all' || log.type === filter;
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const downloadLogs = () => {
    const csvContent = filteredLogs
      .map(log => `${log.date},${log.type},${log.service},"${log.message}"`)
      .join('\n');
    const blob = new Blob([`Date,Type,Service,Message\n${csvContent}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'system_logs.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-orange-700 flex items-center gap-2">
          <FileSearch className="w-8 h-8" />
          System Logs
        </h2>
        <div className="flex gap-2">
          <button
            onClick={fetchLogs}
            className="bg-gray-100 text-gray-600 px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <button
            onClick={downloadLogs}
            className="bg-orange-500 text-white px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-orange-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 w-5 h-5" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            >
              <option value="all">All Logs</option>
              <option value="error">Errors</option>
              <option value="warning">Warnings</option>
              <option value="info">Info</option>
              <option value="success">Success</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-8 text-gray-500">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2" />
              Loading logs...
            </div>
          ) : filteredLogs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No logs found matching your criteria
            </div>
          ) : (
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLogs.map((log) => {
                  const logType = LOG_TYPES[log.type] || LOG_TYPES.info;
                  const Icon = logType.icon;
                  return (
                    <tr key={log._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${logType.style}`}>
                          <Icon className="w-4 h-4" />
                          {log.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.service}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {log.message}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logs;
