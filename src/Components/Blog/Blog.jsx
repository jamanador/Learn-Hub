import React from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div className="container mx-auto grid gap-6 md:grid-cols-2 sm:grid-cols-1">
        <div className="card bg-base-100 shadow-md my-4 py-4">
          <div className="card-body px-4">
            <h3 className='font-bold py-2'>What Is Cors ?</h3>
          <p className="">Lectures: <small>“CORS” stands for Cross-Origin Resource Sharing. CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access.</small></p>
          <div className="my-2">
              <Link to='/'><button className="px-8 py-1 bg-purple-600 text-white">Back Now</button></Link>
          </div>
          </div>

        </div>
        <div className="card bg-base-100 shadow-md my-4 py-4 ">
          <div className="card-body px-4">
            <h3 className='font-bold py-2'>Why are you using firebase? What other options do you have to implement authentication?</h3>
          <p className="">Lectures: <small>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</small></p>
          <div className="my-2">
              <Link to='/'><button className="px-8 py-1 bg-purple-600 text-white">Back Now</button></Link>
          </div>
          </div>

        </div>
        <div className="card bg-base-100 shadow-md my-4 py-4 ">
          <div className="card-body px-4">
            <h3 className='font-bold py-2'>How does the private route work?</h3>
          <p className="">Lectures: <small>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</small></p>
          <div className="my-2">
              <Link to='/'><button className="px-8 py-1 bg-purple-600 text-white">Back Now</button></Link>
          </div>
          </div>

        </div>
        <div className="card bg-base-100 shadow-md my-4 py-4 ">
          <div className="card-body px-4">
            <h3 className='font-bold py-2'>What is Node? How does Node work?</h3>
          <p className="">Lectures: <small>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</small></p>
          <div className="my-2">
              <Link to='/'><button className="px-8 py-1 bg-purple-600 text-white">Back Now</button></Link>
          </div>
          </div>

        </div>
      </div>
    );
};

export default Blog;