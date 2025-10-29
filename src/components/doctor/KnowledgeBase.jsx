import React, { useEffect, useState } from "react";
import axios from "axios";
import { BookOpen } from "lucide-react";

const KnowledgeBase = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/knowledge")
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-500" /> Knowledge Base
      </h2>

      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article._id} className="border p-4 rounded-lg hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{article.summary}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
