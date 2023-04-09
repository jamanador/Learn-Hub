import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Dashboard from "../Pages/Dashboard/Dashboard";

const MainDashBoard = () => {
  const {user} = useContext(authContext)
  return (
    <div className="md:flex relative ">
      <Dashboard></Dashboard>
      <div className="flex-1 p-8">
      <h3 className="font-bold my-2">Hey <span className="text-purple-700">{user?.displayName}</span> Welcome your Dashboard</h3>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainDashBoard;
