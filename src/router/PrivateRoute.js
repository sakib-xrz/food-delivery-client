import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LargeSpinner from "../components/Spinner/LargeSpinner/LargeSpinner";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LargeSpinner />;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
