import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import ResearcherDashboard from "./pages/ResearcherDashboard";

const ProtectedRoute = ({ children, roles }) => {
  const { user, isAuthenticated } = useContext(AuthContext);
  
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/doctor-dashboard" 
          element={
            <ProtectedRoute roles={["doctor"]}>
              <DoctorDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/researcher-dashboard" 
          element={
            <ProtectedRoute roles={["researcher"]}>
              <ResearcherDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};
export default App;