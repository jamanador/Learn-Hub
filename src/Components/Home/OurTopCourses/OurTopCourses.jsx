import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../../CourseCard/CourseCard';

const OurTopCourses = () => {
 const [courses,setCourses]= useState([])
 useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_URL}/showservices`)
    .then(res => res.json())
    .then(data =>{
        setCourses(data)
    })
 },[])

    return (
        <div>
            <h4 className='text-center font-bold lg:text-2xl text-s lg:py-8 md:py-4 dark:text-white'>Choose From <br></br>
 <span className='text-purple-700'>Our Top Courses </span></h4>
            <div className='container mx-auto my-5 px-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 sm:gap-y-16'>
                {
                    courses?.map(course => <CourseCard course={course} key={course._id}></CourseCard>)
                }
             
            </div>
           <div className='text-center lg:py-8 md:py-4'>
           <Link to='/courses'><button className="lg:px-16 px-8 py-2 border border-purple-600 text-black dark:text-white hover:bg-black hover:text-white hover:border-gray-300">All Courses</button></Link>
           </div>
        </div>
    );
};

export default OurTopCourses;