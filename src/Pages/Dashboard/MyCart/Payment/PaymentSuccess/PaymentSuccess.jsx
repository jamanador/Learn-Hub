import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div>
      <div className=" dark:bg-slate-900">
        <div className="bg-white p-6  md:mx-auto dark:bg-slate-900">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-black dark:text-white font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-black my-2 text-sm dark:text-white">
              Thank you for choosing us! We’re dedicated to giving you the best
              courses possible.<br></br> If you have any questions, feel free to get in
              touch.
            </p>
            <p className="dark:text-white text-black"> Have a great day! </p>
            <div className="py-10 text-center">
              <Link
                to="/"
                className="px-12 text-white bg-indigo-600 hover:bg-indigo-500 font-semibold py-3"
              >
                GO BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
