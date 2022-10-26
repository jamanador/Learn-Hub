import React from "react";
import { Link } from "react-router-dom";
import './CourseCard';
const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div className="container mx-auto">
      <div className="card bg-base-100 shadow-xl ">
      <img src={course?.image} alt="/" className="rounded-t-3xl w-full" />
        <div className="card-body flex justify-between p-4">
          <div className="">
            <h2 className="font-bold" style={{fontSize:'14px'}}>{course?.name}</h2>
            <p style={{fontSize:'12px'}}><small>{course?.rating}</small></p>
          </div>
          <div className="">
            <p>Price : <small>{course?.price}</small>
            </p>
            <p className="flex items-center pr-2">Lectures: <small>{course?.lectures}</small></p>
          </div>
        </div>
        <div className="text-center bottom-2 btn-item">
            <Link to={`/courses/${course.id}`}><button className="px-8 py-1 bg-purple-600 text-white">Purchase Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
