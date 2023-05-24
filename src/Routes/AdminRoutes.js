import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import UseAdmin from "../CustomHook/UseAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <LoadingSpinner />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
