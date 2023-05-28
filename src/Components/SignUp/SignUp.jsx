import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import useToken from "../../CustomHook/UseToken";
import SmallSpinner from "../LoadingSpinner/SmallSpinner";

const SignUp = () => {
  const {
    createUser,
    updateUserProfile,
    providerLogin,
    gitHubSign,
    loading,
    setLoading,
  } = useContext(authContext);
  const [createdEmail, setCreatedEmail] = useState("");
  const [token] = useToken(createdEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // imageupload
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_HOST_KEY}`;
    fetch(uri, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("Successfully Registered");
            updateUserProfile(name, imageData.data.display_url)
              .then(() => {
                saveUserDb(user.displayName, user.email, user.photoURL);
                // verifyEmail()
                // .then(()=>{
                //   toast.success('Please before login verify the email address')
                // })
                // .catch(error =>{
                //   toast.error(error.message)
                // })
              })
              .catch(() => {});
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      });
    // console.log(name,email,password);
  };

  const userSignUpWithGoogle = () => {
    providerLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully log in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const userSignUpWithGithub = () => {
    gitHubSign()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Successfully Log in");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const saveUserDb = (name, email, photoURL) => {
    const user = { name, email, photoURL };
    fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedEmail(email);
      });
  };

  return (
    <div className="w-full mt-10 max-w-md mx-auto p-8 space-y-2 rounded-xl bg-gray-200 dark:bg-slate-800 dark:text-white">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <form
        onSubmit={handleSignUp}
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-slate-900"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="image" className="block">
            Select Image:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="w-full px-4 py-1 rounded-md border dark:border-gray-700 dark:bg-slate-900"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-slate-900"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="password" className="block text-gray-800 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-slate-900"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-white bg-gray-400 hover:bg-purple-600 hover:text-white dark:bg-slate-900">
          {loading ? <SmallSpinner></SmallSpinner> : " Submit"}
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-slate-700"></div>
        <p className="px-3 text-sm text-gray-800 dark:text-gray-300">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={userSignUpWithGoogle}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
          </svg>
        </button>
        <button
          onClick={userSignUpWithGithub}
          aria-label="Log in with GitHub"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-800 dark:text-gray-300">
        Already have an account?
        <Link
          rel="noopener noreferrer"
          to="/login"
          className="ml-2 underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
