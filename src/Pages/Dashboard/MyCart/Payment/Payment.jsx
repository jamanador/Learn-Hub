import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const paymentData = useLoaderData()
    console.log(paymentData);
    return (
        <div className="px-12">
      <h3 className="font-bold py-3">Payement for your Course</h3>
      <div className="text-white card w-96  bg-gray-900 shadow-2xl h-96">
        <figure><img src={paymentData?.courseImage} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-lg">Course : {paymentData?.courseName}</h2>
    <p>Price : {paymentData?.price}</p>
   
  </div>
      </div>
    </div>
    );
};

export default Payment;