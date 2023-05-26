import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import Confrimation from "../../../Components/Modal/Confrimation";
import TableRow from "./TableRow/TableRow";
import './myCart.css';
const MyCart = () => {
  const {user} = useContext(authContext)
  const [deleteOrder,setDeleteOrders] = useState(null)
  const closeModal = ()=>{
    setDeleteOrders(null)
  }
  const { data: orders = [],isLoading,refetch } = useQuery({
    queryKey: ["orders",user?.email],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/orders?email=${user?.email}`,{
        headers:{
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

const handleDelete = id =>{
  fetch(`${process.env.REACT_APP_SERVER_URL}/orders/${id}`,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(data =>{
    if(data.data.deletedCount >0){
      refetch()
      closeModal()
    }
  console.log(data);
  })
}



if(isLoading){
  return <LoadingSpinner></LoadingSpinner>
}
  return (
    <div>
      <h3 className="text-center font-bold py-6 dark:text-white">You're already {orders.length} Course Added in Cart</h3>
      <div className="lg:px-12 w-full">
        <table className="table w-full dark:text-black px-4 customtable">
          <thead className="text-left">
            <tr>
              <th></th>
              <th>Course</th>
              <th>Customer Name</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {orders?.map((order, index) => (
              <TableRow
                key={order._id}
                booking={order}
                index={index}
                setDeleteOrders={setDeleteOrders}
              ></TableRow>
            ))}
          </tbody>
        </table>
        {
          deleteOrder && <Confrimation modalData={deleteOrder}
          successAction={handleDelete}
          ></Confrimation>
        }
      </div>
    </div>
  );
};

export default MyCart;
