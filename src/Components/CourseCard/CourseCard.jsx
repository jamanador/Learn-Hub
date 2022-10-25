import React from "react";
import './CourseCard';
const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div>
      <div className="card w-76 bg-base-100 shadow-xl h-96">
      <img src={course?.image} alt="/" className="rounded-t-3xl" />
        <div className="absolute card-body flex justify-between p-4">
          <div className="">
            <h2 className="font-bold" style={{fontSize:'17px'}}>{course?.name}</h2>
            <p style={{fontSize:'12px'}}><small>{course?.rating}</small></p>
          </div>
          <div className="">
            <p>Price : <small>{course?.price}</small>
            </p>
            <p className="flex items-center pr-2">Lectures: <small>{course?.lectures}</small></p>
          </div>
        </div>
        <div className="text-center relative top-20 btn-item">
            <button className="px-8 py-1 bg-purple-600 text-white">View More</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
