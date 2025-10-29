import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newFeedback, setNewFeedback] = useState({
    title: '',
    description: '',
    type: 'general'
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/feedback/list');
      console.log('Feedbacks received:', response.data);
      setFeedbacks(response.data);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/feedback/add', newFeedback);
      console.log('Feedback added:', response.data);
      setFeedbacks([response.data, ...feedbacks]);
      setNewFeedback({ title: '', description: '', type: 'general' });
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Feedback System</h2>

      {/* Add Feedback Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={newFeedback.title}
            onChange={(e) => setNewFeedback({...newFeedback, title: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={newFeedback.description}
            onChange={(e) => setNewFeedback({...newFeedback, description: e.target.value})}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Type</label>
          <select
            value={newFeedback.type}
            onChange={(e) => setNewFeedback({...newFeedback, type: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="general">General</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="improvement">Improvement</option>
          </select>
        </div>
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Feedbacks List */}
      {loading ? (
        <div className="text-center p-4">Loading...</div>
      ) : feedbacks.length === 0 ? (
        <div className="text-center p-4">No feedbacks yet</div>
      ) : (
        <div className="grid gap-4">
          {feedbacks.map((feedback, index) => (
            <div key={feedback._id || index} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{feedback.title}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                  ${feedback.type === 'bug' ? 'bg-red-100 text-red-800' : 
                    feedback.type === 'feature' ? 'bg-green-100 text-green-800' :
                    feedback.type === 'improvement' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'}`}>
                  {feedback.type}
                </span>
              </div>
              <p className="text-gray-600">{feedback.description}</p>
              {feedback.createdAt && (
                <div className="text-sm text-gray-500 mt-2">
                  {new Date(feedback.createdAt).toLocaleString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feedback;