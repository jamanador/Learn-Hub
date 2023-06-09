import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllCourses = () => {
  const { data: courses = [],refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/courses`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleDeleteItem = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/courses/${id}`, {
      method: "DELETE",
      headers:{
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount > 0){
          toast.success("Successfullly Deleted")
          refetch()
        }
      })
  };

  return (
    <div>
      <h3 className="text-center font-bold py-6 dark:text-white">
        All Courses Here {courses.length}
      </h3>
      <div className="lg:px-12 w-full">
        <table className="table w-full overflow-x-auto scroll-auto dark:text-black px-4">
          <thead className="text-left">
            <tr>
              <th></th>
              <th>Course</th>
              <th>Course Info</th>
              <th>CourseId</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {courses.map((course, index) => (
              <tr course={course} key={index} className="text-sm">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={course?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">{course?.name}</span>
                      <br></br>
                      <small className="font-semibold">
                        Price : {course?.price}{" "}
                      </small>
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  <div>
                    <span>lectures: {course?.lectures}</span>
                    <br></br>
                    <small>Rating : {course?.rating}</small>
                  </div>
                </td>
                <td>
                  <small>CourseId: {course?._id}</small>
                </td>
                <td>
                  <button onClick={() => handleDeleteItem(course._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8  hover:bg-red-500 p-1 hover:text-white font-medium rounded-full text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCourses;
