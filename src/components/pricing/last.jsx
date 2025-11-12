import React from "react";

function Last() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Countrywise per WhatsApp Message Pricing
          </h2>
          <p className="text-gray-600 mb-6">
            Messaging costs vary depending on your user's country. Check the
            exact per-message charges for sending WhatsApp messages across
            different regions worldwide.
          </p>
          <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-md shadow-sm font-medium">
            Explore Pricing →
          </button>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Create your account for free and start exploring all our features
              without any commitments.
            </p>
          </div>
          <div className="flex gap-4 mt-auto">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition font-medium">
              Book a Demo
            </button>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-sm transition font-medium">
              Talk to Sales →
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-green-50 border border-green-300 rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Start Your Free Trial Now
          </h2>
          <p className="text-green-600 text-5xl font-extrabold mb-2">₹0.00</p>
          <p className="text-gray-500 mb-8">7 Days Free Trail</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle text-green-600 w-5 h-5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="text-base">400 Messages</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle text-green-600 w-5 h-5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="text-base">5 Campaigns</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle text-green-600 w-5 h-5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="text-base">100 Contacts</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle text-green-600 w-5 h-5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="text-base">25 Automated Replies</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle text-green-600 w-5 h-5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="text-base">3 Users</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle text-green-600 w-5 h-5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span className="text-base">Unlimited Flow Builder</span>
            </div>
          </div>
          <a href="/forms" data-discover="true">
            <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition font-medium text-lg">
              Start Free Trial →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Last;
