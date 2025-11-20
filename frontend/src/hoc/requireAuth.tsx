import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../store/storeFile";

const requireAuth = (Component: React.FC) => {
  const Protected: React.FC = (props) => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    if (!isLoggedIn) {
      return <Navigate to="/home" replace />;
    }

    return <Component {...props} />;
  };

  return Protected;
};

export default requireAuth;
