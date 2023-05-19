import React from 'react';
import useTitle from '../../CustomHook/UseTitle';
import AdmissionGoing from './AdmissionGoing/AdmissionGoing';
import Banner from './Banner/Banner';
import BannerBtm from './BannerBtm/BannerBtm';
import OurTopCourses from './OurTopCourses/OurTopCourses';
const Home = () => {
  useTitle('Home')
    return (
    //     <div className="md:px-16 py-8 dark:text-white">
    //   <div className="flex flex-col justify-center h-[80vh] items-center">
    //     <div className="flex justify-center items-center">
    //       <h1 className=" font-mono text-xl md:text-5xl pr-4">
    //         Welcome to{" "}
    //         <span className="font-bold text-purple-600">LEARN HUB</span>
    //       </h1>
         
    //     </div>
    //     <Link to="/courses">
    //       <button className=" py-2 px-8 text-purple-600 mt-5 rounded-full border border-purple-600 hover:bg-purple-800 hover:shadow-2xl hover:border-white hover:text-white">
    //         Explore Courses
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <div>
      <Banner></Banner>
      <BannerBtm></BannerBtm>
      <OurTopCourses/>
      <AdmissionGoing></AdmissionGoing>
    </div>
    );
};

export default Home;