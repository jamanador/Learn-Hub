import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
   const courses = useLoaderData();
    return (
        <div className='container mx-auto my-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12'>
            {
            courses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
            }
        </div>
    );
};

export default Courses;