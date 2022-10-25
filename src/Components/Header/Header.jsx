import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  const userSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <header className="sticky top-0 p-4 bg-white text-gray-800">
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
                    <FaUserCircle title={user.displayName}></FaUserCircle>
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
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
