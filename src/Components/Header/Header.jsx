import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut,myStyle,toggoleStyle } = useContext(authContext);
  const [open, setOpen] = useState(false);

  const userSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header className="sticky top-0 p-4 bg-white text-gray-800 justify-center" style={myStyle}>
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
          <li className="flex">
            <button onClick={toggoleStyle} to="/" className="flex text-purple-700 items-center px-4 -mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

            </button>
          </li>
          {user && user.uid ? (
            <>
              <li className="flex">
                <Link
                  onClick={userSignOut}
                  rel="noopener noreferrer"
                  className="flex items-center px-4 -mb-1"
                >
                  Log Out
                </Link>
              </li>

              <li className="flex">
                <Link to="/profile" className="flex items-center px-2 -mb-1">
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
              </li>
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
              <li className="flex">
                <NavLink
                  rel="noopener noreferrer"
                  to="/signup"
                  className="flex items-center px-4 -mb-1"
                >
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="md:hidden flex">
        <li className="flex">
            <button onClick={toggoleStyle} to="/" className="flex text-purple-700 items-center px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

            </button>
          </li>
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

              <Link to="/profile" className="flex items-center px-2 -mb-1">
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
