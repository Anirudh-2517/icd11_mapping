import React, { useEffect, useState } from "react";
import { FileText, Users, Database, Activity, AlertTriangle, CheckCircle, RefreshCw, Download } from "lucide-react";
import api from "../../services/api";

const Reports = () => {
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/reports/summary");
      setSummary(res.data || {});
      setError("");
    } catch (err) {
      console.error("Error fetching reports summary:", err);
      setError("Failed to load reports");
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = () => {
    // Placeholder: implement export (CSV/PDF) generation on the server
    alert("Report download functionality will be implemented soon");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-sky-700 flex items-center gap-2">
          <FileText className="w-8 h-8" />
          Reports & Analytics
        </h2>

        <div className="flex gap-2">
          <button
            onClick={fetchSummary}
            className="bg-sky-100 text-sky-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-sky-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>

          <button
            onClick={downloadReport}
            className="bg-sky-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-sky-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertTriangle className="w-5 h-5" />
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8 text-gray-500">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2" />
          Loading reports...
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-sky-600">{summary.totalUsers || 0}</p>
                </div>
                <Users className="w-8 h-8 text-sky-500" />
              </div>
              <p className="text-xs text-green-600 mt-2">Active: {summary.activeUsers || 0}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Diseases</p>
                  <p className="text-2xl font-bold text-amber-600">{summary.totalDiseases || 0}</p>
                </div>
                <Database className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-xs text-gray-600 mt-2">Records in database</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">System Logs</p>
                  <p className="text-2xl font-bold text-violet-600">{summary.totalLogs || 0}</p>
                </div>
                <Activity className="w-8 h-8 text-violet-500" />
              </div>
              <p className="text-xs text-violet-600 mt-2">Last week: {summary.lastWeekLogs || 0}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">System Status</p>
                  <p className="text-2xl font-bold text-emerald-600">Healthy</p>
                </div>
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="text-xs text-gray-600 mt-2">All systems operational</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-center">Activity timeline will be implemented soon</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Reports;
