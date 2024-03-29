import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import "./Allusers.css";
const Allusers = () => {
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteUser = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/users/admin/${id}`, {
      method: "DELETE",
      headers:{
        authorization:`Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount>0){
          toast.success(`User Deleted Successfully`)
          refetch()
        }
      })
  };

  return (
    <div className="container mx-auto dark:text-black dark:customColor">
      <h3 className="text-center font-bold py-6 dark:text-white">All Users</h3>
      <div className="md:px-12 ">
        <table className="table w-full dark:customColor">
          <thead>
            <tr>
              <th></th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="dark:bg-red-500">
            {users?.map((user, index) => (
              <tr key={index} className="dark:bg-red-500">
                <th className="text-sm">{index + 1}</th>
                <td>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </td>
                <td>
                  <h5 className="font-bold text-sm">{user?.name}</h5>
                </td>
                <td className="text-sm">{user?.email}</td>
                <td>
                  <button onClick={()=>handleDeleteUser(user?._id)}>
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

export default Allusers;
