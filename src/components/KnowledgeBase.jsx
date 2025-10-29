import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';

const KnowledgeBase = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    category: 'general'
  });

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/knowledge');
      console.log('Knowledge base entries received:', response.data);
      setEntries(response.data);
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
      const response = await axios.post('http://localhost:5000/api/knowledge', newEntry);
      console.log('Entry added:', response.data);
      setEntries([response.data, ...entries]);
      setNewEntry({ title: '', content: '', category: 'general' });
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  };

  const filteredEntries = entries.filter(entry => {
    const searchRegex = new RegExp(searchTerm, 'i');
    return searchRegex.test(entry.title) || searchRegex.test(entry.content);
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Knowledge Base</h2>

      {/* Add Entry Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={newEntry.title}
            onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Content</label>
          <textarea
            value={newEntry.content}
            onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
            className="w-full p-2 border rounded"
            rows="6"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            value={newEntry.category}
            onChange={(e) => setNewEntry({...newEntry, category: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="general">General</option>
            <option value="tutorial">Tutorial</option>
            <option value="guide">Guide</option>
            <option value="faq">FAQ</option>
          </select>
        </div>
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Entry
        </button>
      </form>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search knowledge base..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 p-2 border rounded"
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Entries List */}
      {loading ? (
        <div className="text-center p-4">Loading...</div>
      ) : filteredEntries.length === 0 ? (
        <div className="text-center p-4">No entries found</div>
      ) : (
        <div className="grid gap-4">
          {filteredEntries.map((entry, index) => (
            <div key={entry._id || index} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{entry.title}</h3>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {entry.category}
                </span>
              </div>
              <p className="text-gray-600 whitespace-pre-wrap">{entry.content}</p>
              {entry.createdAt && (
                <div className="text-sm text-gray-500 mt-2">
                  {new Date(entry.createdAt).toLocaleString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;