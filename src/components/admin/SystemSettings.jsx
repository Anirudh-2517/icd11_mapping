import React, { useState } from "react";
import api from "../../services/api";

const SystemSettings = () => {
  const [theme, setTheme] = useState("light");
  const [status, setStatus] = useState("");

  const saveSettings = async () => {
    await api.post("/settings", { theme });
    setStatus("Settings saved successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">System Settings</h2>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          Theme:
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <button
          onClick={saveSettings}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Settings
        </button>
        {status && <p className="text-green-600">{status}</p>}
      </div>
    </div>
  );
};

export default SystemSettings;
