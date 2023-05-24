import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CheckOut from "../Components/CheckOut/CheckOut";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/Profile";
import SignUp from "../Components/SignUp/SignUp";
import Main from "../Main/Main";
import MainDashBoard from "../Main/MainDashBoard";
import AddCourse from "../Pages/Dashboard/AddCourse/AddCourse";
import AllCourses from "../Pages/Dashboard/AllCourses/AllCourses";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // errorElement: <ErrorPage></ErrorPage>,
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
            return fetch(`${process.env.REACT_APP_SERVER_URL}`);
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
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) => {
            return fetch(
              `${process.env.REACT_APP_SERVER_URL}/courses/${params.id}`
            );
          },
        },
        {
          path: "/profile",
          element: (
            <PrivateRoutes>
              <Profile></Profile>
            </PrivateRoutes>
          ),
        },
        {
          path: "/checkout/:id",
          loader: ({ params }) => {
            return fetch(
              `${process.env.REACT_APP_SERVER_URL}/courses/${params.id}`
            );
          },
          element: (
            <PrivateRoutes>
              <CheckOut></CheckOut>
            </PrivateRoutes>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          {" "}
          <MainDashBoard></MainDashBoard>
        </PrivateRoutes>
      ),
      children: [
        {
          path: "/dashboard/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/dashboard/allusers",
          element: <Allusers></Allusers>,
        },
        {
          path: "/dashboard/mycart",
          element: <MyCart></MyCart>,
        },
        {
          path: "/dashboard/addcourse",
          element: <AddCourse></AddCourse>,
        },
        {
          path: "/dashboard/allcourses",
          element: <AllCourses />,
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
