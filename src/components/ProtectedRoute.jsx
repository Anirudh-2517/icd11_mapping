import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  const userType = auth?.userType;
  const username = auth?.username;

  // If no logged-in username → redirect to login
  if (!username) return <Navigate to="/login" replace />;

  // If roles specified and user's role not allowed → redirect
  if (allowedRoles && !allowedRoles.includes(userType)) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
