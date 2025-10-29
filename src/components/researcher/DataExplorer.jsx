import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import api from "../../services/api";

const DataExplorer = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/research/data");
      setData(res.data);
    };
    fetchData();
  }, []);

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-emerald-700">Data Explorer</h2>
      <div className="mb-4 flex items-center bg-white rounded-lg shadow-sm p-2">
        <Search className="text-gray-400 ml-2" />
        <input
          type="text"
          placeholder="Search datasets..."
          className="ml-2 w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
        <thead className="bg-emerald-100 text-gray-800">
          <tr>
            <th className="p-3 text-left">Code</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Definition</th>
            <th className="p-3 text-left">System</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, idx) => (
            <tr key={idx} className="border-t hover:bg-emerald-50">
              <td className="p-3">{item.code}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3 text-sm text-gray-600">{item.definition}</td>
              <td className="p-3">{item.ayush_system}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataExplorer;
