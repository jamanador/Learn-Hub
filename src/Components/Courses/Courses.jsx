import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../CustomHook/UseTitle";
import CourseCard from "../CourseCard/CourseCard";
import "./Courses.css";
const Courses = () => {
  const courses = useLoaderData();
  useTitle('Courses')
  return (
    <div className="main_container container mx-auto" >
      <div className="course_name px-4 py-5">
        <h3 className="font-bold border border-b-4 p-4 dark:text-white">Course Name</h3> {courses.map(course => <li className="list-none my-4 font-medium hover:text-purple-800 hover:font-bold duration-1000 dark:text-white" key={course._id}><Link to={`/courses/${course._id}`}>{course.name}</Link></li>)}
       
      </div>
      <div>
        <div className="container mx-auto my-5 px-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 sm:gap-y-16">
          {courses.map((course) => (
            <CourseCard course={course} key={course._id}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
