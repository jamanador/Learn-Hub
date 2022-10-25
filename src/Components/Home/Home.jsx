import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="md:px-16 py-8 bg-gray-100">
      <div className="flex flex-col justify-center h-[80vh] items-center">
        <div className="flex justify-center items-center">
          <h1 className=" font-mono text-xl md:text-5xl pr-4">
            Welcome to{" "}
            <span className="font-bold text-purple-600">LEARN HUB</span>
          </h1>
          <span className="text-9xl">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.196 2.196 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 0 0-1.038 3.446 6.22 6.22 0 0 0 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.978 1.978 0 0 0-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207z" />
            </svg>
          </span>
        </div>
        <Link to="/courses">
          <button className=" py-2 px-8 text-black mt-5 rounded-full border border-purple-600 hover:bg-purple-800 hover:shadow-2xl hover:border-white hover:text-white">
            Explore Courses
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Home;