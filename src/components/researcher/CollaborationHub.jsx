import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  PlusCircle,
  Send,
  XCircle,
  Users,
  Clock,
  Tag,
  Filter,
  Search,
  AlertCircle,
  CheckCircle,
  MessageCircle
} from "lucide-react";

const CollaborationHub = () => {
  // Demo data
  const demoData = [
    {
      _id: "1",
      topic: "Effective Treatment Protocols for Atopic Dermatitis",
      description: "Looking for insights on combining Ayurvedic approaches with modern dermatological practices for managing chronic eczema in pediatric patients. What has been your experience?",
      ayush_system: "Ayurveda",
      icd_reference: "L20.9",
      status: "Open",
      createdAt: "2024-10-25T10:30:00Z",
      participants: ["user1", "user2", "user3"],
      comments: [
        {
          message: "I've had success using Neem-based formulations combined with dietary modifications. The anti-inflammatory properties work well for managing flare-ups.",
          user: { name: "Dr. Priya Sharma" },
          timestamp: "2024-10-25T11:15:00Z"
        },
        {
          message: "Panchakarma therapies, especially Virechana, have shown promising results in my practice. Would love to hear about dosing protocols others are using.",
          user: { name: "Dr. Rajesh Kumar" },
          timestamp: "2024-10-26T09:20:00Z"
        }
      ]
    },
    {
      _id: "2",
      topic: "Homeopathic Management of Seasonal Allergic Rhinitis",
      description: "Seeking discussion on constitutional remedies versus acute prescriptions for allergic rhinitis patients during peak pollen seasons.",
      ayush_system: "Homeopathy",
      icd_reference: "J30.1",
      status: "Open",
      createdAt: "2024-10-28T14:20:00Z",
      participants: ["user1", "user2", "user3", "user4"],
      comments: [
        {
          message: "Allium cepa and Sabadilla have been my go-to remedies. Constitutional treatment with Tuberculinum has also helped reduce seasonal recurrence.",
          user: { name: "Dr. Anita Desai" },
          timestamp: "2024-10-28T15:45:00Z"
        }
      ]
    },
    {
      _id: "3",
      topic: "Unani Approach to Type 2 Diabetes Management",
      description: "Discussion on integrating traditional Unani formulations with lifestyle modifications for better glycemic control in diabetic patients.",
      ayush_system: "Unani",
      icd_reference: "E11",
      status: "Open",
      createdAt: "2024-10-27T08:00:00Z",
      participants: ["user1", "user2"],
      comments: [
        {
          message: "Jamun seeds (Eugenia jambolana) and Methi have shown excellent results in my clinical experience. I typically recommend 3-6 months of consistent use.",
          user: { name: "Hakim Mohammed Ali" },
          timestamp: "2024-10-27T10:30:00Z"
        },
        {
          message: "Has anyone tried combining these with dietary modifications based on Mizaj (temperament)? I've seen improved patient compliance with personalized approaches.",
          user: { name: "Dr. Fatima Khan" },
          timestamp: "2024-10-28T08:15:00Z"
        },
        {
          message: "The temperament-based approach is crucial. I assess Mizaj before prescribing and adjust formulations accordingly. Patient outcomes have improved significantly.",
          user: { name: "Dr. Zubair Ahmed" },
          timestamp: "2024-10-29T16:40:00Z"
        }
      ]
    },
    {
      _id: "4",
      topic: "Siddha Medicine for Rheumatoid Arthritis",
      description: "Exploring traditional Siddha formulations and external therapies for managing inflammatory joint conditions and improving patient mobility.",
      ayush_system: "Siddha",
      icd_reference: "M06.9",
      status: "Closed",
      createdAt: "2024-10-20T11:00:00Z",
      participants: ["user1", "user2", "user3", "user4", "user5"],
      comments: [
        {
          message: "Nilavembu Kudineer combined with Kaya Kalpa therapies has shown remarkable results. I've documented improvements in joint mobility within 3 months.",
          user: { name: "Dr. Murugan Pillai" },
          timestamp: "2024-10-20T12:30:00Z"
        },
        {
          message: "Agree! Also consider Amukkara Chooranam for long-term management. The anti-inflammatory effects are well-documented in our texts.",
          user: { name: "Dr. Lakshmi Narayanan" },
          timestamp: "2024-10-21T09:15:00Z"
        }
      ]
    },
    {
      _id: "5",
      topic: "Naturopathy Protocols for Hypertension",
      description: "Discussing evidence-based naturopathic interventions including hydrotherapy, diet therapy, and yoga for managing essential hypertension without medications.",
      ayush_system: "Naturopathy",
      icd_reference: "I10",
      status: "Open",
      createdAt: "2024-10-29T16:45:00Z",
      participants: ["user1", "user2", "user3"],
      comments: [
        {
          message: "I've implemented a protocol combining DASH diet principles with daily pranayama and cold hip baths. Seeing consistent BP reduction of 10-15 mmHg over 8 weeks.",
          user: { name: "Dr. Sunita Reddy" },
          timestamp: "2024-10-29T18:20:00Z"
        }
      ]
    },
    {
      _id: "6",
      topic: "Integrative Approach to Chronic Migraine",
      description: "Multi-system discussion on combining different AYUSH modalities for patients with frequent migraine episodes and aura symptoms.",
      ayush_system: "Ayurveda",
      icd_reference: "G43.1",
      status: "Open",
      createdAt: "2024-10-26T13:30:00Z",
      participants: ["user1", "user2", "user3", "user4", "user5", "user6"],
      comments: []
    },
    {
      _id: "7",
      topic: "Post-COVID Respiratory Rehabilitation",
      description: "Sharing experiences with naturopathic breathing exercises and Ayurvedic Rasayana therapy for patients recovering from COVID-19 pneumonia.",
      ayush_system: "Naturopathy",
      icd_reference: "U09.9",
      status: "Open",
      createdAt: "2024-10-24T09:00:00Z",
      participants: ["user1", "user2"],
      comments: [
        {
          message: "Combining Kapalbhati pranayama with steam inhalation using eucalyptus has helped my patients regain lung capacity faster. Monitoring SpO2 levels closely.",
          user: { name: "Dr. Vikram Singh" },
          timestamp: "2024-10-24T11:45:00Z"
        },
        {
          message: "I'm using Chyawanprash along with breathing exercises. The immunomodulatory effects seem to support overall recovery. Any thoughts on dosage?",
          user: { name: "Dr. Meera Joshi" },
          timestamp: "2024-10-25T14:20:00Z"
        }
      ]
    },
    {
      _id: "8",
      topic: "Homeopathic Treatment for Anxiety Disorders",
      description: "Case discussions on individualized homeopathic prescriptions for generalized anxiety disorder and panic attacks in young adults.",
      ayush_system: "Homeopathy",
      icd_reference: "F41.1",
      status: "Closed",
      createdAt: "2024-10-18T15:20:00Z",
      participants: ["user1", "user2", "user3"],
      comments: [
        {
          message: "Aconitum for acute panic episodes has been very effective. For chronic anxiety, I find Argentum nitricum and Gelsemium work well based on individual symptoms.",
          user: { name: "Dr. Kavita Mehta" },
          timestamp: "2024-10-18T16:55:00Z"
        }
      ]
    }
  ];

  const [topics, setTopics] = useState(demoData);
  const [filteredTopics, setFilteredTopics] = useState(demoData);
  const [newTopic, setNewTopic] = useState({
    topic: "",
    description: "",
    ayush_system: "",
    icd_reference: "",
    created_by: "672f0b2ceae10b204c62e101"
  });
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [comment, setComment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [systemFilter, setSystemFilter] = useState("all");
  const [error, setError] = useState("");
  const [showNewTopicForm, setShowNewTopicForm] = useState(false);

  // Filter topics
  useEffect(() => {
    let filtered = topics;

    if (searchQuery) {
      filtered = filtered.filter(topic =>
        topic.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(topic => topic.status.toLowerCase() === statusFilter);
    }

    if (systemFilter !== "all") {
      filtered = filtered.filter(topic => topic.ayush_system === systemFilter);
    }

    setFilteredTopics(filtered);
  }, [searchQuery, statusFilter, systemFilter, topics]);

  // Create a new topic
  const handleCreateTopic = (e) => {
    e.preventDefault();
    const newTopicData = {
      _id: String(Date.now()),
      ...newTopic,
      status: "Open",
      createdAt: new Date().toISOString(),
      participants: ["672f0b2ceae10b204c62e101"],
      comments: []
    };
    setTopics([newTopicData, ...topics]);
    setNewTopic({
      topic: "",
      description: "",
      ayush_system: "",
      icd_reference: "",
      created_by: "672f0b2ceae10b204c62e101"
    });
    setShowNewTopicForm(false);
  };

  // Add comment
  const handleAddComment = (topicId) => {
    if (!comment.trim()) return;

    const newComment = {
      message: comment,
      user: { name: "Current User" },
      timestamp: new Date().toISOString()
    };

    const updatedTopics = topics.map(t => {
      if (t._id === topicId) {
        return {
          ...t,
          comments: [...(t.comments || []), newComment]
        };
      }
      return t;
    });

    setTopics(updatedTopics);
    setComment("");

    const updated = updatedTopics.find(t => t._id === topicId);
    setSelectedTopic(updated);
  };

  // Close topic
  const handleCloseTopic = (id) => {
    const updatedTopics = topics.map(t =>
      t._id === id ? { ...t, status: "Closed" } : t
    );
    setTopics(updatedTopics);
    setSelectedTopic(null);
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

  const getStats = () => {
    return {
      total: topics.length,
      open: topics.filter(t => t.status === "Open").length,
      closed: topics.filter(t => t.status === "Closed").length,
      totalComments: topics.reduce((sum, t) => sum + (t.comments?.length || 0), 0)
    };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Collaboration Hub
              </h1>
            </div>
            <button
              onClick={() => setShowNewTopicForm(!showNewTopicForm)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <PlusCircle className="w-5 h-5" />
              <span className="hidden sm:inline">New Discussion</span>
            </button>
          </div>
          <p className="text-gray-600">Collaborate, discuss, and share knowledge across AYUSH systems</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Topics</p>
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Open</p>
                <p className="text-2xl font-bold text-emerald-600">{stats.open}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Closed</p>
                <p className="text-2xl font-bold text-gray-600">{stats.closed}</p>
              </div>
              <XCircle className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">Comments</p>
                <p className="text-2xl font-bold text-cyan-600">{stats.totalComments}</p>
              </div>
              <MessageCircle className="w-8 h-8 text-cyan-500" />
            </div>
          </div>
        </div>

        {/* New Topic Form */}
        {showNewTopicForm && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-emerald-600" />
                Start a New Discussion
              </h3>
              <button
                onClick={() => setShowNewTopicForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTopic} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic Title *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter discussion topic"
                    value={newTopic.topic}
                    onChange={(e) => setNewTopic({ ...newTopic, topic: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ICD Reference
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., L20"
                    value={newTopic.icd_reference}
                    onChange={(e) => setNewTopic({ ...newTopic, icd_reference: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  placeholder="Provide a detailed description of the topic"
                  value={newTopic.description}
                  onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AYUSH System
                </label>
                <select
                  value={newTopic.ayush_system}
                  onChange={(e) => setNewTopic({ ...newTopic, ayush_system: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
                >
                  <option value="">Select AYUSH System</option>
                  <option value="Ayurveda">Ayurveda</option>
                  <option value="Homeopathy">Homeopathy</option>
                  <option value="Unani">Unani</option>
                  <option value="Siddha">Siddha</option>
                  <option value="Naturopathy">Naturopathy</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg px-4 py-3 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                Create Discussion
              </button>
            </form>
          </div>
        )}

        {/* Filters & Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
              />
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="relative">
                <Tag className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <select
                  value={systemFilter}
                  onChange={(e) => setSystemFilter(e.target.value)}
                  className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none appearance-none bg-white"
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

        {/* Topics List */}
        {filteredTopics.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No discussions found</h3>
            <p className="text-gray-500">Start a new discussion to begin collaborating</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTopics.map((topic) => (
              <div
                key={topic._id}
                className={`bg-white rounded-xl shadow-sm border-2 hover:shadow-lg transition-all duration-200 p-5 cursor-pointer group ${selectedTopic?._id === topic._id
                    ? "border-emerald-400 shadow-lg"
                    : "border-gray-200 hover:border-emerald-200"
                  }`}
                onClick={() => setSelectedTopic(topic)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-emerald-600 transition">
                        {topic.topic}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 ml-7">{topic.description}</p>
                  </div>
                  <span
                    className={`ml-3 px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${topic.status === "Closed"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-emerald-100 text-emerald-700"
                      }`}
                  >
                    {topic.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 ml-7 mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{topic.participants?.length || 0}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{topic.comments?.length || 0}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(topic.createdAt || Date.now()).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 ml-7">
                  {topic.ayush_system && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSystemColor(topic.ayush_system)}`}>
                      {topic.ayush_system}
                    </span>
                  )}
                  {topic.icd_reference && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      ICD: {topic.icd_reference}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Topic Detail Drawer */}
        {selectedTopic && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50">
            <div className="bg-white w-full sm:w-[500px] h-full shadow-2xl flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-cyan-50">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-xl font-bold text-gray-800">{selectedTopic.topic}</h3>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${selectedTopic.status === "Closed"
                          ? "bg-gray-100 text-gray-600"
                          : "bg-emerald-100 text-emerald-700"
                        }`}
                    >
                      {selectedTopic.status}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-2 transition"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-gray-700 text-sm mb-3">{selectedTopic.description}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedTopic.ayush_system && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getSystemColor(selectedTopic.ayush_system)}`}>
                      {selectedTopic.ayush_system}
                    </span>
                  )}
                  {selectedTopic.icd_reference && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      ICD: {selectedTopic.icd_reference}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedTopic.participants?.length || 0} participants</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{selectedTopic.comments?.length || 0} comments</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(selectedTopic.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {selectedTopic.comments && selectedTopic.comments.length > 0 ? (
                  selectedTopic.comments.map((c, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {c.user?.name || "Anonymous"}
                        </h4>
                        <span className="text-xs text-gray-500">
                          {new Date(c.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{c.message}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-10">
                    <MessageSquare className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                    <p>No comments yet. Start the conversation!</p>
                  </div>
                )}
              </div>

              {/* Add Comment Section */}
              {selectedTopic.status === "Open" && (
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="flex-1 border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none"
                    />
                    <button
                      onClick={() => handleAddComment(selectedTopic._id)}
                      className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-md hover:scale-105 transition-all"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Close Topic Button */}
              {selectedTopic.status === "Open" && (
                <div className="border-t border-gray-200 p-4 bg-white">
                  <button
                    onClick={() => handleCloseTopic(selectedTopic._id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition"
                  >
                    <XCircle className="w-5 h-5" />
                    Close Discussion
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollaborationHub;
