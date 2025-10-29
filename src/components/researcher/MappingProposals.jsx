import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import api from "../../services/api";

const MappingProposals = () => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await api.get("/proposals");
        setProposals(res.data);
      } catch (err) {
        console.error("Error loading proposals:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProposals();
  }, []);

  const handleAction = async (id, status) => {
    setActionLoading(id);
    try {
      await api.put(`/proposals/${id}`, { status });
      setProposals((prev) =>
        prev.map((p) => (p._id === id ? { ...p, status } : p))
      );
    } catch (err) {
      console.error("Error updating proposal:", err);
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-emerald-600">
        <Loader2 className="animate-spin w-6 h-6 mr-2" />
        Loading proposals...
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Mapping Proposals</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead className="bg-teal-50 text-gray-700">
            <tr>
              <th className="p-3 text-left">Doctor</th>
              <th className="p-3 text-left">Proposed Code</th>
              <th className="p-3 text-left">ICD Reference</th>
              <th className="p-3 text-left">AYUSH System</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((p) => (
              <tr key={p._id} className="border-t hover:bg-teal-50 transition">
                <td className="p-3">{p.doctor_name}</td>
                <td className="p-3 font-medium">{p.proposed_code}</td>
                <td className="p-3">{p.icd_reference}</td>
                <td className="p-3">{p.ayush_system}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      p.status === "approved"
                        ? "bg-emerald-100 text-emerald-700"
                        : p.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    disabled={actionLoading === p._id}
                    onClick={() => handleAction(p._id, "approved")}
                    className="flex items-center px-3 py-1 text-sm bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition"
                  >
                    {actionLoading === p._id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    )}
                    Approve
                  </button>
                  <button
                    disabled={actionLoading === p._id}
                    onClick={() => handleAction(p._id, "rejected")}
                    className="flex items-center px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                  >
                    {actionLoading === p._id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <XCircle className="w-4 h-4 mr-1" />
                    )}
                    Reject
                  </button>
                </td>
              </tr>
            ))}
            {proposals.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No proposals available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MappingProposals;
