import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import DarkLight from "../DarkLight/DarkLight";
import "./Header.css";

const Header = () => {
  const { user, logOut,} = useContext(authContext);
  const [open, setOpen] = useState(false);

  const userSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header className="sticky top-0 p-4 dark:text-white justify-center">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <h5 className="font-bold"> LEARN HUB</h5>
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink
              onClick={({ isActive }) => (isActive ? "active" : undefined)}
              to="/home"
              className={`flex items-center px-4 -mb-1 `}
            >
              Home{" "}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/courses"
              className="flex items-center px-4 -mb-1"
            >
              Courses
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/faq" className="flex items-center px-4 -mb-1 ">
              FAQ
            </NavLink>
          </li>

          <li className="flex">
            <NavLink to="/blog" className="flex items-center px-4 -mb-1">
              Blog
            </NavLink>
          </li>
          
          {user && user.uid ? (
            <>
              
              <div className="dropdown dropdown-end dark:text-white">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 mt-4 rounded-full">
              {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      title={user.displayName}
                      className="w-11 rounded-full"
                    />
                  ) : (
                    <FaUserCircle
                      title={user.displayName}
                      className="border border-purple-800 w-8 h-8 rounded"
                    ></FaUserCircle>
                  )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content  p-2 shadow border border-gray-500 rounded-box w-36"
            >
              <li>
                <Link href="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link
                  onClick={userSignOut}
                 
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
              {/* <li className="flex">
                <Link to="/dashboard" className="flex items-center px-2 -mb-1">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      title={user.displayName}
                      className="w-11 rounded-full"
                    />
                  ) : (
                    <FaUserCircle
                      title={user.displayName}
                      className="border border-purple-800 w-8 h-8 rounded"
                    ></FaUserCircle>
                  )}
                </Link>
              </li> */}
            </>
          ) : (
            <>
              <li className="flex">
                <NavLink
                  rel="noopener noreferrer"
                  to="/login"
                  className="flex items-center px-4 -mb-1"
                >
                  Login{" "}
                </NavLink>
              </li>
            
            </>
          )}
          <DarkLight></DarkLight>
        </ul>
        <div className="md:hidden flex">
            <DarkLight></DarkLight>
          {open ? (
            <XMarkIcon
              onClick={() => setOpen(!open)}
              className="w-7 mt-4 h-7 font-bold bg-red-700 text-white px-2 py-1 text-2xl"
            ></XMarkIcon>
          ) : (
            <Bars3Icon
              onClick={() => setOpen(!open)}
              className="w-7 h-7 mt-4 font-bold"
            ></Bars3Icon>
          )}
        </div>
      </div>
      <div
        className={`list_menu md:hidden absolute duration-500 ease-linear  w-full ${
          open
            ? "top-16 w-full left-0 h-auto border-0 bg-purple-700"
            : "top-[-350px]"
        }`}
      >
        <ul className="pl-6">
          <NavLink
            onClick={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
            className={`flex items-center px-4 -mb-1 `}
          >
            Home{" "}
          </NavLink>
          <NavLink
            rel="noopener noreferrer"
            to="/courses"
            className="flex items-center px-4 -mb-1"
          >
            Courses
          </NavLink>
          <NavLink to="/faq" className="flex items-center px-4 -mb-1 ">
            FAQ
          </NavLink>

          <NavLink to="/blog" className="flex items-center px-4 -mb-1">
            Blog
          </NavLink>

          {user && user.uid ? (
            <>
              <Link
                onClick={userSignOut}
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1"
              >
                Log Out
              </Link>

              <Link to="/dashboard/profile" className="flex items-center px-2 -mb-1">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt=""
                    title={user.displayName}
                    className="w-11 rounded-full"
                  />
                ) : (
                  <FaUserCircle
                    title={user.displayName}
                    className="border border-purple-800 w-8 h-8 rounded"
                  ></FaUserCircle>
                )}
              </Link>
            </>
          ) : (
            <>
              <NavLink
                rel="noopener noreferrer"
                to="/login"
                className="flex items-center px-4 -mb-1"
              >
                Login{" "}
              </NavLink>
              <NavLink
                rel="noopener noreferrer"
                to="/signup"
                className="flex items-center px-4 -mb-1"
              >
                Sign up
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
