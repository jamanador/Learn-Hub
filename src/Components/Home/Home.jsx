import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
const Home = () => {
  const {myStyle} = useContext(authContext)
    return (
        <div className="md:px-16 py-8 bg-gray-100" style={myStyle}>
      <div className="flex flex-col justify-center h-[80vh] items-center">
        <div className="flex justify-center items-center">
          <h1 className=" font-mono text-xl md:text-5xl pr-4">
            Welcome to{" "}
            <span className="font-bold text-purple-600">LEARN HUB</span>
          </h1>
         
        </div>
        <Link to="/courses">
          <button className=" py-2 px-8 text-purple-600 mt-5 rounded-full border border-purple-600 hover:bg-purple-800 hover:shadow-2xl hover:border-white hover:text-white">
            Explore Courses
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Home;