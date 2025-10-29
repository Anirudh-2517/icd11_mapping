import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MessageSquare } from "lucide-react";
import AuthContext from "../../context/AuthContext";

const FeedbackStatus = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const { auth } = useContext(AuthContext);
    const createdBy = auth?.username;
    const url = createdBy ? `http://localhost:5000/api/feedback/mystatus?createdBy=${encodeURIComponent(createdBy)}` : "http://localhost:5000/api/feedback/mystatus";
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Feedback Status</h2>
      {data.length === 0 ? (
        <p className="text-gray-500 text-sm">No feedback records yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">ICD_TM2</th>
                <th className="p-3">ICD_Biomed</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.icd_tm2}</td>
                  <td className="p-3">{item.icd_biomed}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.cstatus === "Approved"
                        ? "bg-green-100 text-green-700"
                        : item.cstatus === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {item.cstatus}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-500">{item.date}</td>
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
