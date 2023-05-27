import React from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {
  return (
    <div>
      <h3 className="text-center font-bold py-6 dark:text-white">
        All Courses Here
      </h3>
      <div className="lg:px-12 w-full">
        <table className="table w-full dark:text-black px-4 customtable">
          <thead className="text-left">
            <tr>
              <th></th>
              <th>Course</th>
              <th>Customer Name</th>
              <th>CourseId</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr className="text-sm">
              <th>4</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Coursename</span>
                    <br></br>
                    <small className="font-semibold">Price : </small>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <div>
                  <span>Customer</span>
                  <br></br>
                  <small>email</small>
                </div>
              </td>
              <td>
                <Link to="/">
                  {" "}
                  <button className="btn btn-ghost btn-xs">Pay</button>
                </Link>
              </td>
              <td>
                <button>
                  <label htmlFor="confirmation-modal" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8  hover:bg-red-500 p-1 hover:text-white font-medium rounded-full text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </label>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCourses;