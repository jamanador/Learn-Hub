import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Dashboard from "../Pages/Dashboard/Dashboard";

const MainDashBoard = () => {
  const { user } = useContext(authContext);
  return (
    <div className="md:flex  dark:text-white dark:bg-slate-900">
      <Dashboard></Dashboard>
      <div className="flex-1 p-8 dark:bg-slate-900">
        <div className="flex flex-wrap">
          <div className="flex items-center">
            <p className="text-lg font-bold">Welc</p>
            <div className="w-5 h-5 border-4 border-dashed rounded-full animate-spin mx-1 border-green-400"></div>
            <p className="text-lg font-bold mr-2">me</p>
            <p className="text-lg font-bold">Back 👏</p>
          </div>
          <h3 className="font-bold m-2 dark:text-white border border-stone-300 p-1">
            <span className="text-purple-700">{user?.displayName}</span>
          </h3>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainDashBoard;
