import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.png";
const Banner = () => {
  return (
    <div className="container mx-auto dark:text-white flex justify-center items-center px-8">
      <div className="flex-1 px-4 md:px-0">
        <h1 className="font-bold lg:text-4xl md:text-3xl text-xl">
          Build Skills with <span className="text-purple-600">Online Courses</span> <br /> from expert instructor
        </h1>
        <p className="py-3">
          Start streaming on-demand video lectures today from top level <br />
          instructors Attention heatmaps.
        </p>
        <Link to="/courses">
          <button className="py-1 px-4 md:py-2 md:px-8 text-purple-600 mt-5 rounded-full border border-purple-600 hover:bg-purple-800 hover:shadow-2xl hover:border-white hover:text-white">
            Explore Courses
          </button>
        </Link>
      </div>
      <img src={banner} alt="" className="hidden md:block w-5/12" />
    </div>
  );
};

export default Banner;
