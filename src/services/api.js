// frontend/src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 20000,
});

// ✅ Add Authorization token to requests
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.token) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle unauthorized errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// === AUTH ===
export const loginUser = (credentials) => api.post("/auth/login", credentials);
export const registerUser = (data) => api.post("/auth/register", data);

// === USERS ===
export const getUsers = () => api.get("/users");
export const toggleUserStatus = (id) => api.put(`/users/${id}/toggle`);

// === KNOWLEDGE ===
export const getKnowledge = () => api.get("/knowledge");

// === ANALYTICS ===
export const getAnalytics = () => api.get("/analytics");
export const getReportsSummary = () => api.get("/admin/reports/summary");

// === RESEARCH MODELS ===
export const getResearchModels = () => api.get("/research-models");
export const createResearchModel = (data) => api.post("/research-models", data);
export const deleteResearchModel = (id) => api.delete(`/research-models/${id}`);
export const updateResearchModel = (id, data) => api.put(`/research-models/${id}`, data);

// === LOGS ===
export const getLogs = (params = {}) => api.get("/logs", { params });
export const getLogStats = () => api.get("/logs/stats");
export const clearOldLogs = () => api.delete("/logs/clear");

// === FEEDBACK ===
export const getFeedback = () => api.get("/feedback");
export const createFeedback = (data) => api.post("/feedback", data);

export default api;
