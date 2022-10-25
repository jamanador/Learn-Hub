import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import './CourseDetails.css';
const CourseDetails = () => {
  const coursesdetails = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="card w-10/12 course_details flex justify-between mx-auto bg-base-100 shadow-sm border border-gray-400 mt-8 rounded-xl">
      <img
          src={coursesdetails?.image}
          alt="/"
          className="w-96 h-auto"
        />
        <div className="card-body pl-8 py-6">
        <h2 className="font-bold" style={{ fontSize: "14px" }}>
             Course Name:  {coursesdetails?.name}
            </h2>
            <p style={{ fontSize: "12px" }}>
              Rating: <small>{coursesdetails?.rating}</small>
            </p>
            <p>
              Price : <small>{coursesdetails?.price}</small>
            </p>
            <p className="font-medium pr-2">
              Lectures: <small>{coursesdetails?.lectures}</small>
            </p>
            <p className="font-medium py-2">
              Description: <small>{coursesdetails?.description}</small>
            </p>
            <p className="font-medium py-2">
              Feature: <small>{coursesdetails?.feature}</small>
            </p>
          <Link to='/courses'>
            <button className="px-8 py-1 my-3 bg-purple-600 text-white">
              Back Now
            </button>
          </Link>
        </div>
       
       </div>
      </div>
  );
};

export default CourseDetails;
