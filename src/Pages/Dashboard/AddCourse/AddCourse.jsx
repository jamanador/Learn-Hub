import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SmallSpinner from "../../../Components/LoadingSpinner/SmallSpinner";

const AddCourse = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_HOST_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          setLoading(true);
          const course = {
            name: data.name,
            price: data.price,
            lectures: data.lectures,
            description: data.description,
            feature: data.feature,
            image: imageData.data.url,
          };
          fetch(`${process.env.REACT_APP_SERVER_URL}/courses`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(course),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success(`Course Added Successfully`);
              navigate("/dashboard/allcourses");
            });
        }
      });
  };
  return (
    <div>
      <h1 className="font-bold py-4">Add Course</h1>
      <div className="w-full p-8 space-y-3 rounded-xl shadow-md dark:text-white">
        <form
          onSubmit={handleSubmit(handleAddDoctor)}
          className="space-y-2 ng-untouched ng-pristine ng-valid"
        >
          <ul className="flex justify-between flex-wrap">
            <li>
              <div>
                <label htmlFor="name" className="block text-gray-600 dark:text-white py-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: "name is required" })}
                  className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 dark:bg-slate-800 dark:border-slate-600"
                />
              </div>
            </li>
            <li>
              <div>
                {" "}
                <label htmlFor="price" className="block text-gray-600 dark:text-white py-1">
                  price
                </label>
                <input
                  type="number"
                  placeholder="price"
                  {...register("price", { required: "price is required" })}
                  className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 dark:bg-slate-800 dark:border-slate-600 "
                />
              </div>
            </li>
            <li>
              <div>
                {" "}
                <label htmlFor="lectures" className="block text-gray-600 dark:text-white py-1">
                  Lectures
                </label>
                <input
                  type="number"
                  placeholder="lectures"
                  {...register("lectures", {
                    required: "Lectures is required",
                  })}
                  className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 dark:bg-slate-800 dark:border-slate-600"
                />
              </div>
            </li>
          </ul>

          <label htmlFor="feature" className="block text-gray-600 dark:text-white py-1">
            Feature
          </label>
          <textarea
            {...register("feature", {
              required: "Feature is required",
            })}
            className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 dark:bg-slate-800 dark:border-slate-600"
            id=""
            cols="44"
            rows="2"
          ></textarea>
          <label htmlFor="description" className="block text-gray-600 dark:text-white py-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "description is required",
            })}
            className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 dark:bg-slate-800 dark:border-slate-600"
            id=""
            cols="44"
            rows="4"
          ></textarea>
          <label htmlFor="email" className="block text-gray-600 dark:text-white py-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 dark:bg-slate-800 dark:border-slate-600"
          />
          {errors.email && (
            <span className="text-red-600 font-medium pt-2">
              {errors.email?.message}
            </span>
          )}
          <label htmlFor="email" className="block text-gray-600 dark:text-white py-1">
            Specialty
          </label>
          <label htmlFor="name" className="block text-gray-600 dark:text-white py-1">
            Photo
          </label>
          <input
            type="file"
            placeholder="name"
            accept="image/*"
            {...register("image", { required: "photo is required" })}
            className="text-center w-full px-4 py-2 rounded-md border-gray-200 border dark:text-white text-gray-800 "
          />
          <button
            type="submit"
            className="block py-2 px-36 text-center rounded-xl text-white bg-purple-700"
          >
            {loading ? <SmallSpinner /> : "Addd"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
