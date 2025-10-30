// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import ResearcherDashboard from "./pages/ResearcherDashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />}
        />

        <Route
          path="/"
          element={
            isLoggedIn ? (
              userData?.role === "admin" ? (
                <Navigate to="/admin-dashboard" />
              ) : userData?.role === "doctor" ? (
                <Navigate to="/doctor-dashboard" />
              ) : userData?.role === "researcher" ? (
                <Navigate to="/researcher-dashboard" />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/admin-dashboard" element={<AdminDashboard setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/researcher-dashboard" element={<ResearcherDashboard setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
