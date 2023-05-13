import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
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
              console.log(data);
              toast.success(`${data.name} is Added Successfully`);
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
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: "name is required" })}
                  className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 "
                />
              </div>
            </li>
            <li>
              <div>
                {" "}
                <label htmlFor="price" className="block text-gray-600">
                  price
                </label>
                <input
                  type="number"
                  placeholder="price"
                  {...register("price", { required: "price is required" })}
                  className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 "
                />
              </div>
            </li>
            <li>
              <div>
                {" "}
                <label htmlFor="lectures" className="block text-gray-600">
                  Lectures
                </label>
                <input
                  type="number"
                  placeholder="lectures"
                  {...register("lectures", {
                    required: "Lectures is required",
                  })}
                  className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 "
                />
              </div>
            </li>
          </ul>

          <label htmlFor="feature" className="block text-gray-600">
            Feature
          </label>
          <textarea
            {...register("feature", {
              required: "Feature is required",
            })}
            className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 "
            id=""
            cols="44"
            rows="2"
          ></textarea>
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "description is required",
            })}
            className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 "
            id=""
            cols="44"
            rows="4"
          ></textarea>
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full focus:outline-0 px-4 py-2 rounded-md border-gray-200 border dark:text-white  text-gray-800 "
          />
          {errors.email && (
            <span className="text-red-600 font-medium pt-2">
              {errors.email?.message}
            </span>
          )}
          <label htmlFor="email" className="block text-gray-600">
            Specialty
          </label>
          <label htmlFor="name" className="block text-gray-600">
            Photo
          </label>
          <input
            type="file"
            placeholder="name"
            accept="image/*"
            {...register("image", { required: "photo is required" })}
            className="text-center w-full px-4 py-2 rounded-md border-gray-200 border dark:text-white text-gray-800 "
          />
          <input
            type="submit"
            value="Add"
            className="block py-2 px-36 text-center rounded-xl text-white bg-purple-700"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
