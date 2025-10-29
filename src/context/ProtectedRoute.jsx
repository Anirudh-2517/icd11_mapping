import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

// Context-based protected route (used by some parts of the app)
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  const userType = auth?.userType;
  const username = auth?.username;

  if (!username) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(userType)) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
