import React, { useState, useEffect } from "react";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  User, 
  FileText,
  Tag,
  Filter,
  Search,
  AlertCircle,
  TrendingUp,
  Calendar,
  Eye,
  MessageSquare
} from "lucide-react";

const MappingProposals = () => {
  // Demo data
  const demoData = [
    {
      _id: "1",
      doctor_name: "Dr. Priya Sharma",
      proposed_code: "AY-L20.9",
      icd_reference: "L20.9",
      ayush_system: "Ayurveda",
      status: "pending",
      disease_name: "Atopic Dermatitis (Eczema)",
      description: "Vicharchika - Chronic inflammatory skin condition with intense itching and dry patches",
      submitted_date: "2024-10-28T10:30:00Z",
      evidence: "Based on classical Ayurvedic texts and clinical experience with Neem-based formulations"
    },
    {
      _id: "2",
      doctor_name: "Dr. Anita Desai",
      proposed_code: "HO-J30.1",
      icd_reference: "J30.1",
      ayush_system: "Homeopathy",
      status: "approved",
      disease_name: "Allergic Rhinitis due to Pollen",
      description: "Seasonal allergic rhinitis responsive to Allium cepa and Sabadilla",
      submitted_date: "2024-10-25T14:20:00Z",
      evidence: "Documented clinical trials and materia medica references",
      reviewed_date: "2024-10-27T09:15:00Z"
    },
    {
      _id: "3",
      doctor_name: "Hakim Mohammed Ali",
      proposed_code: "UN-E11",
      icd_reference: "E11",
      ayush_system: "Unani",
      status: "pending",
      disease_name: "Type 2 Diabetes Mellitus",
      description: "Ziabetus Shakri - Metabolic disorder managed with Jamun seeds and Methi",
      submitted_date: "2024-10-27T08:45:00Z",
      evidence: "Traditional Unani formulations with proven glycemic control in clinical practice"
    },
    {
      _id: "4",
      doctor_name: "Dr. Murugan Pillai",
      proposed_code: "SI-M06.9",
      icd_reference: "M06.9",
      ayush_system: "Siddha",
      status: "approved",
      disease_name: "Rheumatoid Arthritis",
      description: "Azhal Keel Vayu - Joint inflammation treated with Nilavembu Kudineer",
      submitted_date: "2024-10-20T11:00:00Z",
      evidence: "Siddha literature references and documented patient outcomes",
      reviewed_date: "2024-10-24T16:30:00Z"
    },
    {
      _id: "5",
      doctor_name: "Dr. Sunita Reddy",
      proposed_code: "NA-I10",
      icd_reference: "I10",
      ayush_system: "Naturopathy",
      status: "pending",
      disease_name: "Essential Hypertension",
      description: "High blood pressure managed through DASH diet and hydrotherapy",
      submitted_date: "2024-10-29T16:45:00Z",
      evidence: "Clinical studies on naturopathic interventions for BP management"
    },
    {
      _id: "6",
      doctor_name: "Dr. Rajesh Kumar",
      proposed_code: "AY-K00.1",
      icd_reference: "K00.1",
      ayush_system: "Ayurveda",
      status: "rejected",
      disease_name: "Supernumerary Teeth",
      description: "Danta Vridhi - Excess tooth development",
      submitted_date: "2024-10-22T13:20:00Z",
      evidence: "Limited traditional references",
      reviewed_date: "2024-10-26T10:45:00Z",
      rejection_reason: "Insufficient classical evidence and modern validation"
    },
    {
      _id: "7",
      doctor_name: "Dr. Kavita Mehta",
      proposed_code: "HO-F41.1",
      icd_reference: "F41.1",
      ayush_system: "Homeopathy",
      status: "approved",
      disease_name: "Generalized Anxiety Disorder",
      description: "Chronic anxiety responsive to constitutional remedies like Argentum nitricum",
      submitted_date: "2024-10-18T15:20:00Z",
      evidence: "Extensive repertory references and case studies",
      reviewed_date: "2024-10-21T11:30:00Z"
    },
    {
      _id: "8",
      doctor_name: "Dr. Fatima Khan",
      proposed_code: "UN-M79.3",
      icd_reference: "M79.3",
      ayush_system: "Unani",
      status: "pending",
      disease_name: "Panniculitis",
      description: "Warm-e-Shaham - Inflammation of subcutaneous fat tissue",
      submitted_date: "2024-10-26T09:30:00Z",
      evidence: "Classical Unani treatment protocols with anti-inflammatory herbs"
    },
    {
      _id: "9",
      doctor_name: "Dr. Vikram Singh",
      proposed_code: "NA-U09.9",
      icd_reference: "U09.9",
      ayush_system: "Naturopathy",
      status: "pending",
      disease_name: "Post-COVID Condition",
      description: "Respiratory rehabilitation through pranayama and steam therapy",
      submitted_date: "2024-10-24T09:00:00Z",
      evidence: "Recent clinical observations and breathing exercise studies"
    },
    {
      _id: "10",
      doctor_name: "Dr. Lakshmi Narayanan",
      proposed_code: "SI-G43.1",
      icd_reference: "G43.1",
      ayush_system: "Siddha",
      status: "pending",
      disease_name: "Migraine with Aura",
      description: "Thalai Nokkadu - Severe headache with neurological symptoms",
      submitted_date: "2024-10-26T13:30:00Z",
      evidence: "Traditional Siddha headache management protocols"
    }
  ];

  const [proposals, setProposals] = useState(demoData);
  const [filteredProposals, setFilteredProposals] = useState(demoData);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [systemFilter, setSystemFilter] = useState("all");

  // Filter proposals
  useEffect(() => {
    let filtered = proposals;

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.doctor_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.proposed_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.disease_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.icd_reference.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(p => p.status === statusFilter);
    }

    if (systemFilter !== "all") {
      filtered = filtered.filter(p => p.ayush_system === systemFilter);
    }

    setFilteredProposals(filtered);
  }, [searchQuery, statusFilter, systemFilter, proposals]);

  const handleAction = (id, status) => {
    setActionLoading(id);
    setTimeout(() => {
      const updatedProposals = proposals.map(p =>
        p._id === id
          ? { ...p, status, reviewed_date: new Date().toISOString() }
          : p
      );
      setProposals(updatedProposals);
      setActionLoading(null);
      if (selectedProposal?._id === id) {
        setSelectedProposal({ ...selectedProposal, status, reviewed_date: new Date().toISOString() });
      }
    }, 800);
  };

  const getSystemColor = (system) => {
    const colors = {
      Ayurveda: "bg-green-100 text-green-700 border-green-300",
      Homeopathy: "bg-blue-100 text-blue-700 border-blue-300",
      Unani: "bg-purple-100 text-purple-700 border-purple-300",
      Siddha: "bg-orange-100 text-orange-700 border-orange-300",
      Naturopathy: "bg-teal-100 text-teal-700 border-teal-300"
    };
    return colors[system] || "bg-gray-100 text-gray-700 border-gray-300";
  };

  const getStatusConfig = (status) => {
    const configs = {
      pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        border: "border-yellow-300",
        icon: <Clock className="w-4 h-4" />
      },
      approved: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        border: "border-emerald-300",
        icon: <CheckCircle className="w-4 h-4" />
      },
      rejected: {
        bg: "bg-red-100",
        text: "text-red-700",
        border: "border-red-300",
        icon: <XCircle className="w-4 h-4" />
      }
    };
    return configs[status] || configs.pending;
  };

  const getStats = () => {
    return {
      total: proposals.length,
      pending: proposals.filter(p => p.status === "pending").length,
      approved: proposals.filter(p => p.status === "approved").length,
      rejected: proposals.filter(p => p.status === "rejected").length
    };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Mapping Proposals
            </h1>
          </div>
          <p className="text-gray-600">Review and approve code mapping proposals from AYUSH practitioners</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Proposals</p>
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Approved</p>
                <p className="text-2xl font-bold text-emerald-600">{stats.approved}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Rejected</p>
                <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-400" />
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by doctor, code, disease, or ICD..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition"
              />
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div className="relative">
                <Tag className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <select
                  value={systemFilter}
                  onChange={(e) => setSystemFilter(e.target.value)}
                  className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none appearance-none bg-white"
                >
                  <option value="all">All Systems</option>
                  <option value="Ayurveda">Ayurveda</option>
                  <option value="Homeopathy">Homeopathy</option>
                  <option value="Unani">Unani</option>
                  <option value="Siddha">Siddha</option>
                  <option value="Naturopathy">Naturopathy</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Proposals Grid */}
        {filteredProposals.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No proposals found</h3>
            <p className="text-gray-500">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProposals.map((proposal) => {
              const statusConfig = getStatusConfig(proposal.status);
              return (
                <div
                  key={proposal._id}
                  className="bg-white rounded-xl shadow-sm border-2 border-gray-200 hover:border-teal-200 hover:shadow-lg transition-all duration-200 p-5"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                        {proposal.doctor_name.split(' ')[1]?.[0] || proposal.doctor_name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{proposal.doctor_name}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(proposal.submitted_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                      {statusConfig.icon}
                      {proposal.status}
                    </span>
                  </div>

                  {/* Disease & Code */}
                  <div className="mb-3">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{proposal.disease_name}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{proposal.description}</p>
                  </div>

                  {/* Codes */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-sm font-mono font-semibold border border-teal-200">
                      {proposal.proposed_code}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-mono border border-blue-200">
                      ICD: {proposal.icd_reference}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSystemColor(proposal.ayush_system)}`}>
                      {proposal.ayush_system}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProposal(proposal)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    {proposal.status === "pending" && (
                      <>
                        <button
                          disabled={actionLoading === proposal._id}
                          onClick={() => handleAction(proposal._id, "approved")}
                          className="flex items-center gap-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white rounded-lg font-medium transition"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          disabled={actionLoading === proposal._id}
                          onClick={() => handleAction(proposal._id, "rejected")}
                          className="flex items-center gap-1 px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white rounded-lg font-medium transition"
                        >
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Detail Modal */}
        {selectedProposal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 border-b border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{selectedProposal.disease_name}</h3>
                    <p className="text-gray-600">{selectedProposal.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProposal(null)}
                    className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-2 transition"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {(() => {
                    const statusConfig = getStatusConfig(selectedProposal.status);
                    return (
                      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                        {statusConfig.icon}
                        {selectedProposal.status}
                      </span>
                    );
                  })()}
                  <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getSystemColor(selectedProposal.ayush_system)}`}>
                    {selectedProposal.ayush_system}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Doctor Info */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                      {selectedProposal.doctor_name.split(' ')[1]?.[0] || selectedProposal.doctor_name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {selectedProposal.doctor_name}
                      </p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Submitted: {new Date(selectedProposal.submitted_date).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Code Mapping */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Code Mapping
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-teal-50 rounded-lg p-4 border-2 border-teal-200">
                      <p className="text-xs text-teal-600 font-medium mb-1">Proposed Code</p>
                      <p className="text-xl font-mono font-bold text-teal-700">{selectedProposal.proposed_code}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                      <p className="text-xs text-blue-600 font-medium mb-1">ICD Reference</p>
                      <p className="text-xl font-mono font-bold text-blue-700">{selectedProposal.icd_reference}</p>
                    </div>
                  </div>
                </div>

                {/* Evidence */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Supporting Evidence
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-gray-700">{selectedProposal.evidence}</p>
                  </div>
                </div>

                {/* Review Info */}
                {selectedProposal.reviewed_date && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Review Information</h4>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600">
                        Reviewed on: {new Date(selectedProposal.reviewed_date).toLocaleString()}
                      </p>
                      {selectedProposal.rejection_reason && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded">
                          <p className="text-sm font-medium text-red-700 mb-1">Rejection Reason:</p>
                          <p className="text-sm text-red-600">{selectedProposal.rejection_reason}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                {selectedProposal.status === "pending" && (
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button
                      disabled={actionLoading === selectedProposal._id}
                      onClick={() => handleAction(selectedProposal._id, "approved")}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white rounded-lg font-semibold transition"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve Proposal
                    </button>
                    <button
                      disabled={actionLoading === selectedProposal._id}
                      onClick={() => handleAction(selectedProposal._id, "rejected")}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white rounded-lg font-semibold transition"
                    >
                      <XCircle className="w-5 h-5" />
                      Reject Proposal
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MappingProposals;