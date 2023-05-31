import React from "react";
import { Link } from "react-router-dom";
import access from "../../../images/HERO33.png";
const AccessCourses = () => {
    const acceses = ["Get unlimited access to 4,000+ of our top courses","Explore a variety of fresh topics","Find the right instructor for you"]
  return (
    <div className="container mx-auto lg:my-18 my-10">
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex justify-center">
          <img src={access} alt="" className="w-4/5 shadow-inner" />
        </div>
        <div className="mt-6">
          <button className="px-8 py-1 lg:mt-7 font-medium bg-gray-400 text-white rounded-full">$69.99 /month</button>
          <h3 className="font-bold py-2 lg:text-3xl md:text-lg lg:my-4 my-1 dark:text-white">Access to all 100+ online courses</h3>
          {
            acceses?.map((access,index) => <li className="list-none py-1 text-black font-medium  dark:text-white" key={index} access={access}><span className="text-green-500 font-bold pr-2">✔</span> {access}</li>)
          }
          <Link to='/courses'><button className="py-1 lg:mt-7 my-2 px-3 decoration-slice text-red-500 underline dark:no-underline dark:border dark:border-gray-400 dark:text-white">Get Started Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AccessCourses;
