import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { BarChart3, PieChart } from "lucide-react";

const Analytics = () => {
  const [metrics, setMetrics] = useState({
    totalDiseases: 0,
    mappedDiseases: 0,
    pendingMappings: 0,
    activeDoctors: 0,
    systemDistribution: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/analytics");
        setMetrics(res.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Analytics Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Diseases</p>
              <p className="text-2xl font-bold text-indigo-600">{metrics.totalDiseases}</p>
            </div>
            <BarChart3 className="text-indigo-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Mapped Diseases</p>
              <p className="text-2xl font-bold text-emerald-600">{metrics.mappedDiseases}</p>
            </div>
            <PieChart className="text-emerald-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Pending Mappings</p>
              <p className="text-2xl font-bold text-amber-600">{metrics.pendingMappings}</p>
            </div>
            <BarChart3 className="text-amber-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Active Doctors</p>
              <p className="text-2xl font-bold text-blue-600">{metrics.activeDoctors}</p>
            </div>
            <BarChart3 className="text-blue-500" />
          </div>
        </div>
      </div>

      {/* System Distribution */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">System Distribution</h3>
        <div className="space-y-4">
          {metrics.systemDistribution.map((system, index) => (
            <div key={index} className="flex items-center">
              <div className="w-32 text-sm text-gray-600">{system.name}</div>
              <div className="flex-1">
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${(system.count / metrics.totalDiseases) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-16 text-right text-sm text-gray-600">{system.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
