import { BackwardIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
const Dashboard = () => {
  const { user } = useContext(authContext);
  return (
    <div className="dark:text-white">
      <div className="py-8 text-gray-900 dark:text-white bg-gray-300 lg:h-screen">
        <div className="flex justify-center">
          <img
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-full text-center"
          />
        </div>
        <div className="flex flex-col items-center mt-6 -mx-2">
          <h4 className="mx-2 mt-2 font-medium text-gray-900 dark:text-white  hover:underline">
            {user?.displayName}
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-900 dark:text-white  hover:underline">
            {user?.email}
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
          <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-900 dark:text-white first-letter:transition-colors duration-300 transform  "
              to="/dashboard/mycart"
            >
             <FaCartArrowDown></FaCartArrowDown>

              <span className="mx-4 font-medium">My Cart</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-900 dark:text-white first-letter:transition-colors duration-300 transform  "
              to="/dashboard/allusers"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">All Users</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-900 dark:text-white first-letter:transition-colors duration-300 transform  "
              to="/dashboard/addcourse"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">Add Course</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-900 dark:text-white first-letter:transition-colors duration-300 transform  "
              to="/"
            >
             <BackwardIcon className="w-4 h-4"/>

              <span className="mx-4 font-medium">Back to Home</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
