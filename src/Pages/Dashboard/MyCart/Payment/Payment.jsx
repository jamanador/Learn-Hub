import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const paymentData = useLoaderData();
  console.log(paymentData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const adress = form.adress.value;
    const phone = form.number.value;
    const courseName = paymentData.courseName;
    const customer = paymentData.customer;
    const customerEmail = paymentData.customerEmail;
    const coursesId = paymentData.coursesId;
    const _id = paymentData._id;
    const price = paymentData.price;
    const confirmorder = {
      courseName,
      customer,
      customerEmail,
      coursesId,
      _id,
      price,
      adress,
      phone,
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/confirmorders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(confirmorder),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url)
        console.log(data);
      });
  };

  return (
    <div className="px-12">
      <h3 className="font-bold py-3">Payement for your Course</h3>
      <form
        onSubmit={handleSubmit}
        className="text-white card w-96  bg-gray-900 shadow-2xl h-96"
      >
        <figure>
          <img src={paymentData?.courseImage} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">
            Course : {paymentData?.courseName}
          </h2>
          <p>Price : {paymentData?.price}</p>
          <div>
            <input
              type="text"
              name="adress"
              id=""
              placeholder="enter your adress"
              className="border  border-gray-800 py-1 px-8 w-full mb-2 bg-gray-900 text-white"
            />
            <input
              type="number"
              name="number"
              id=""
              placeholder="enter your phone number"
              className="border border-gray-800 py-1 px-8 w-full bg-gray-900 text-white"
            />
          </div>
          <button
            type="submit"
            className="my-6 rounded-md py-1 px-6 bg-black text-white font-medium"
          >
            Confirm Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
