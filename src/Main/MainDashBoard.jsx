import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";

const MainDashBoard = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <Dashboard></Dashboard>
      <div className="flex-1 p-8">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainDashBoard;
