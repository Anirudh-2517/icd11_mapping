import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Send all three fields to backend
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
        userType
      });

      console.log('Login response:', res.data); // Debug log

      // Store user data in context using login function
      const userData = {
        id: res.data._id,
        username: res.data.username,
        name: res.data.name,
        email: res.data.email,
        role: res.data.role || userType, // Fallback to userType if role is not in response
        specialization: res.data.specialization,
        token: res.data.token
      };

      console.log('User data to store:', userData); // Debug log
      login(userData);

      // Navigate based on userType (since that's what we sent to the server)
      console.log('Navigating based on user type:', userType); // Debug log
      
      if (userType === "admin") {
        navigate("/admin-dashboard");
      } else if (userType === "doctor") {
        navigate("/doctor-dashboard");
      } else if (userType === "researcher") {
        navigate("/researcher-dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Invalid username or password");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Login</h1>
        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full mb-3 p-2 border rounded text-gray-700"
          required
        >
          <option value="">Select User Type</option>
          <option value="doctor">Doctor</option>
          <option value="researcher">Researcher</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;