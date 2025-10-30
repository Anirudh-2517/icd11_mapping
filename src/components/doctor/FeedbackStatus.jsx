import React, { useEffect, useState } from "react";
import axios from "axios";
import { MessageSquare } from "lucide-react";

const FeedbackStatus = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [statusInfo, setStatusInfo] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    const createdBy = user?.username;

    // ✅ Fetch detailed feedback list
    axios
      .get("http://localhost:5000/api/feedback/list")
      .then((res) => setFeedbackList(res.data))
      .catch((err) => console.error("Error fetching feedback list:", err));

    // ✅ Fetch summary statistics
    const url = createdBy
      ? `http://localhost:5000/api/feedback/mystatus?createdBy=${encodeURIComponent(
          createdBy
        )}`
      : "http://localhost:5000/api/feedback/mystatus";

    axios
      .get(url)
      .then((res) => setStatusInfo(res.data))
      .catch((err) => console.error("Error fetching feedback status:", err));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="text-blue-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">Feedback Status</h2>
      </div>

      {/* ✅ Summary card */}
      {statusInfo && (
        <div className="flex gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm w-1/2">
            <p className="text-gray-600 text-sm">Total Feedbacks</p>
            <h3 className="text-2xl font-semibold text-blue-700">
              {statusInfo.totalFeedbacks}
            </h3>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm w-1/2">
            <p className="text-gray-600 text-sm">Average Rating</p>
            <h3 className="text-2xl font-semibold text-green-700">
              ⭐ {statusInfo.averageRating}
            </h3>
          </div>
        </div>
      )}

      {/* ✅ Feedback table */}
      {feedbackList.length === 0 ? (
        <p className="text-gray-500 text-sm">No feedback records yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">User ID</th>
                <th className="p-3">Message</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{item.user_id}</td>
                  <td className="p-3">{item.message}</td>
                  <td className="p-3 text-yellow-600 font-semibold">
                    ⭐ {item.rating}
                  </td>
                  <td className="p-3 text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FeedbackStatus;
