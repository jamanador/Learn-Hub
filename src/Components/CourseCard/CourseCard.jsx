import React from "react";
import { Link } from "react-router-dom";
import './CourseCard.css';
const CourseCard = ({ course }) => {
  return (
    <div className="container mx-auto">
      <div className="card bg-base-100 shadow-xl rounded-xl dark:bg-slate-900 dark:border-gray-800 dark:shadow-sm dark:border">
      <img src={course?.image} alt="/" className=" w-full md:h-48" />
        <div className="card-body flex justify-between p-4 text-black dark:text-white">
          <div className="tablet">
            <h2 className="font-bold" style={{fontSize:'14px'}}>{course?.name}</h2>
            <p style={{fontSize:'12px'}}><small>{course?.rating}</small></p>
          </div>
          <div className="tablet">
            <p>Price : <small>{course?.price}</small>
            </p>
            <p className="flex items-center pr-2">Lectures: <small>{course?.lectures}</small></p>
          </div>
        </div>
        <div className="tablet text-center bottom-2 btn-item">
            <Link to={`/courses/${course._id}`}><button className="px-8 py-1 bg-purple-600 text-white">
              Read Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
