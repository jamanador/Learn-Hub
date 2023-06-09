import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
console.log(stripePromise);

const Payment = () => {
  const paymentData = useLoaderData();
  // const navigation = useNavigation();
  // if (navigation.state === "loading") {
  //   return <LoadingSpinner></LoadingSpinner>;
  // }
  return (
    <div className="px-12">
      <h3 className="font-bold py-3">Payement for your Course</h3>
      <div className="text-white card w-96  bg-gray-900 shadow-2xl h-96">
        <figure>
          <img src={paymentData?.courseImage} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">
            Course : {paymentData?.courseName}
          </h2>
          <p>Price : {paymentData?.price}</p>
          <button
          type="submit"
          className="my-6 rounded-md py-1 px-6 bg-black text-white font-medium"
        >
          Confirm Now
        </button>
        </div>
        {/* <div className="px-4">
        <Elements stripe={stripePromise}>
          <CheckOutForm paymentData={paymentData}></CheckOutForm>
        </Elements>
        </div> */}
      </div>
    </div>
  );
};

export default Payment;
