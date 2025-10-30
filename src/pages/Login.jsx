import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn, setUserData }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userType: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("✅ Login success:", res.data);

      const user = res.data.user; // 👈 Extract user object
      setUserData(user);
      setIsLoggedIn(true);

      // ✅ Redirect based on role
      switch (user.role) {
        case "admin":
          navigate("/admin-dashboard");
          break;
        case "doctor":
          navigate("/doctor-dashboard");
          break;
        case "researcher":
          navigate("/researcher-dashboard");
          break;
        default:
          navigate("/login");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Login
        </h1>

        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
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
