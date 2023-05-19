import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import PaymentModal from "../PaymentModal/PaymentModal";
import TableRow from "./TableRow/TableRow";
import './myCart.css';
const MyCart = () => {
  const {user} = useContext(authContext)
  const [bookOrders, setBookOrders] = useState(null);
  const { data: orders = [],isLoading } = useQuery({
    queryKey: ["orders",user?.email],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/orders?email=${user?.email}`,{
        headers:{
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
if(isLoading){
  return <LoadingSpinner></LoadingSpinner>
}
  return (
    <div>
      <h3 className="font-bold py-4 dark:text-white">My Cart {orders.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full dark:text-black">
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
                setBookOrders={setBookOrders}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
     { bookOrders &&  <PaymentModal
        bookOrders={bookOrders}
        setBookOrders={setBookOrders}
      ></PaymentModal>}
    </div>
  );
};

export default MyCart;
