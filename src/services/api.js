import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 20000
});

// Add auth token to all requests
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.token) {
    config.headers['Authorization'] = `Bearer ${user.token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const registerUser = (userData) => api.post('/auth/register', userData);

// User endpoints
export const getUsers = () => api.get('/users');
export const toggleUserStatus = (userId) => api.put(`/users/${userId}/toggle`);

// Research endpoints
export const getResearchData = () => api.get('/research/data');

// Analytics endpoints
export const getAnalytics = () => api.get('/analytics');
export const getReportsSummary = () => api.get('/admin/reports/summary');

// Logs endpoints
export const getLogs = () => api.get('/logs');

// Feedback endpoints
export const getFeedback = () => api.get('/feedback');
export const createFeedback = (data) => api.post('/feedback', data);

export default api;
