import React from 'react';

const Faq = () => {
    return (
        <section className="bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
            <div className="space-y-4">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why are you using firebase??</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. </p>
                </details>
               
            </div>
        </div>
    </section>
    );
};

export default Faq;