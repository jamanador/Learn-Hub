import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../CustomHook/UseTitle";

const CheckOut = () => {
  const { user } = useContext(authContext);
  useTitle("Checkout");
  const navigate = useNavigate();
  const courses = useLoaderData();
  console.log(courses);
  const product = {
    customer: user.displayName,
    customerEmail: user.email,
    courseName: courses.name,
    price: parseFloat(courses.price),
    courseImage: courses.image,
    coursesId: courses._id,
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged > 0) {
          toast.success(`${product.courseName} Added to your Cart`);
          navigate("/dashboard/mycart");
        } else {
          toast.error(data.message);
          navigate("/courses")
        }
      });
  };

  return (
    <div className="mx-auto container flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:text-white text-gray-900">
      <div>
        <h2 className="text-xl font-bold">Cart Items</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 pr-4 p-4 sm:space-x-4 border">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                src={courses.image}
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {courses?.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      Lectures : {courses?.lectures}
                    </p>
                    <p className="text-sm text-gray-400">
                      Rating: {courses.rating}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{courses.price}</p>
                    <p className="text-sm line-through text-gray-600">750€</p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">{courses?.price}</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to="/courses">
            <button
              type="button"
              className="px-6 py-2 border rounded-md hover:bg-violet-600 hover:text-white"
            >
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
          </Link>
          <button
            onClick={handleCheckOut}
            className="px-6 py-2 border rounded-md bg-violet-800 text-white border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to </span>Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
