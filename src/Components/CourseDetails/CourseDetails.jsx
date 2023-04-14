import React, { useContext, useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { authContext } from "../../AuthProvider/AuthProvider";
import './CourseDetails.css';
const CourseDetails = () => {
  const coursesdetails = useLoaderData();
  const {user} = useContext(authContext)
const downloadRef = useRef()
const handleDownload = useReactToPrint({
  content:()=>downloadRef.current
})

  return (
    <div className="container mx-auto">
      <div className="card w-10/12 course_details flex justify-between mx-auto bg-base-100 shadow-sm border border-gray-200 dark:border-slate-800 mt-8 rounded-xl dark:bg-slate-900" ref={downloadRef}>
      <img
          src={coursesdetails?.image}
          alt="/"
          className="w-full md:h-96"
        />
        <div className="card-body pl-8 py-6 text-black dark:text-white">
        <div className="pdf_dowonload flex justify-between items-center">
        <h2 className="font-bold" style={{ fontSize: "14px" }}>
             Course Name:  {coursesdetails?.name}
            </h2>
            <button onClick={handleDownload} className="px-4 py-1 m-3 bg-gray-300 text-black">
           DownLoad PDF
            </button>
        </div>
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
           {
            user && user.uid ? <Link to={`/checkout/${coursesdetails?._id}`}>
            <button className="px-8 py-1 my-3 bg-purple-600 text-white">
             Proceed to Checkout
             </button></Link>:<Link to={`/checkout/${coursesdetails?._id}`}>
            <button className="px-8 py-1 my-3 bg-purple-600 text-white">
             Get Premium Access
             </button></Link>
           }
                 </div>
       
       </div>
      </div>
  );
};

export default CourseDetails;
