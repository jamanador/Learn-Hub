import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/Profile";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../Main/Main";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          loader: () => {
            return fetch(
              "https://elearning-platform-learn-hub-server.vercel.app"
            );
          },
          element: <Courses></Courses>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/courses/:id",
          loader: ({ params }) => {
            return fetch(
              `https://elearning-platform-learn-hub-server.vercel.app/courses/${params.id}`
            );
          },
          element: <CourseDetails></CourseDetails>,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
