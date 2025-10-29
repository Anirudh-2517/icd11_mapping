import React, { useState, useEffect } from "react";
import axios from "axios";
import { MessageSquare, PlusCircle, Send, XCircle, Users } from "lucide-react";

const API_URL = "http://localhost:5000/api/collaboration-hub";

const CollaborationHub = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState({
    topic: "",
    description: "",
    ayush_system: "",
    icd_reference: "",
    created_by: "672f0b2ceae10b204c62e101" // demo user id (replace dynamically)
  });
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [comment, setComment] = useState("");

  // Fetch topics
  const fetchTopics = async () => {
    try {
      const res = await axios.get(API_URL);
      setTopics(res.data);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  // Create a new topic
  const handleCreateTopic = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, newTopic);
      setNewTopic({ topic: "", description: "", ayush_system: "", icd_reference: "", created_by: "672f0b2ceae10b204c62e101" });
      fetchTopics();
    } catch (error) {
      console.error("Error creating topic:", error);
    }
  };

  // Add comment
  const handleAddComment = async (topicId) => {
    try {
      await axios.post(`${API_URL}/${topicId}/comment`, {
        message: comment,
        userId: "672f0b2ceae10b204c62e101"
      });
      setComment("");
      fetchTopics();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // Close topic
  const handleCloseTopic = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}/close`);
      fetchTopics();
    } catch (error) {
      console.error("Error closing topic:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
        Collaboration Hub
      </h2>

      {/* New Topic Form */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <PlusCircle className="w-5 h-5 mr-2 text-emerald-600" /> Start a New Discussion
        </h3>
        <form onSubmit={handleCreateTopic} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Topic title"
            value={newTopic.topic}
            onChange={(e) => setNewTopic({ ...newTopic, topic: e.target.value })}
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-emerald-400 focus:border-emerald-400"
          />
          <input
            type="text"
            placeholder="ICD Reference (e.g., L20)"
            value={newTopic.icd_reference}
            onChange={(e) => setNewTopic({ ...newTopic, icd_reference: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 focus:ring-emerald-400 focus:border-emerald-400"
          />
          <textarea
            placeholder="Description"
            value={newTopic.description}
            onChange={(e) => setNewTopic({ ...newTopic, description: e.target.value })}
            required
            className="border border-gray-300 rounded-lg p-3 focus:ring-emerald-400 focus:border-emerald-400 md:col-span-2"
          />
          <select
            value={newTopic.ayush_system}
            onChange={(e) => setNewTopic({ ...newTopic, ayush_system: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 focus:ring-emerald-400 focus:border-emerald-400"
          >
            <option value="">Select AYUSH System</option>
            <option value="Ayurveda">Ayurveda</option>
            <option value="Homeopathy">Homeopathy</option>
            <option value="Unani">Unani</option>
            <option value="Siddha">Siddha</option>
            <option value="Naturopathy">Naturopathy</option>
          </select>
          <button
            type="submit"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg px-4 py-3 hover:opacity-90 transition md:col-span-2"
          >
            Create Discussion
          </button>
        </form>
      </div>

      {/* Topics List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <div
            key={topic._id}
            className={`bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all p-5 cursor-pointer ${
              selectedTopic?._id === topic._id ? "ring-2 ring-emerald-400" : ""
            }`}
            onClick={() => setSelectedTopic(topic)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-bold text-gray-800">{topic.topic}</h4>
                <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{topic.participants?.length || 0} participants</span>
                </div>
              </div>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  topic.status === "Closed"
                    ? "bg-red-100 text-red-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {topic.status}
              </span>
            </div>

            <div className="mt-4 border-t pt-3">
              <p className="text-xs text-gray-400">
                AYUSH: {topic.ayush_system || "N/A"} • ICD: {topic.icd_reference || "—"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Topic Detail Drawer */}
      {selectedTopic && (
        <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
          <div className="bg-white w-full sm:w-[450px] h-full shadow-2xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" /> {selectedTopic.topic}
              </h3>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-gray-500 hover:text-red-500"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-600 mb-4">{selectedTopic.description}</p>

            <div className="space-y-3 mb-6">
              {selectedTopic.comments?.map((c, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg border">
                  <p className="text-sm text-gray-800">{c.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    by {c.user?.name || "Anonymous"}
                  </p>
                </div>
              ))}
            </div>

            {selectedTopic.status !== "Closed" && (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 border border-gray-300 rounded-lg p-2"
                />
                <button
                  onClick={() => handleAddComment(selectedTopic._id)}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg px-3 flex items-center gap-1 hover:opacity-90 transition"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}

            {selectedTopic.status === "Open" && (
              <button
                onClick={() => handleCloseTopic(selectedTopic._id)}
                className="mt-4 text-sm text-red-600 hover:underline"
              >
                Close Discussion
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborationHub;
