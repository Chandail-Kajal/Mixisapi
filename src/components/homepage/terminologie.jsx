import React from "react";

function Terminologie() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 via-green-100 to-green-200 py-20 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-transparent to-green-100 opacity-50 blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className="text-center mb-14"
          // style="opacity: 1; transform: none;"
        >
          <h2 className="text-4xl font-extrabold text-green-900">
            Important Pricing Terminologie
          </h2>
          <p className="text-green-800 mt-3 text-lg">
            Let's make WhatsApp Conversational Pricing easy to understand for
            you!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform-gpu transition-all duration-300"
            // style="opacity: 1; transform: none;"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-400/50 mb-5"
              //   style="transform: translateY(-7.83199px);"
            >
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
                className="lucide lucide-message-square w-6 h-6 text-white"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Conversations
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              WhatsApp Conversation is a{" "}
              <strong>24-hour messaging window</strong> initiated only when a
              business messages a user. A <strong>Conversation</strong> here
              starts when a business messages the user (thus initiates the
              Conversation).
            </p>
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform-gpu transition-all duration-300"
            // style="opacity: 1; transform: none;"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-400/50 mb-5"
              //   style="transform: translateY(-7.83199px);"
            >
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
                className="lucide lucide-users w-6 h-6 text-white"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Unlimited Free Service Conversations
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Each business using Mixis API receives{" "}
              <strong>Unlimited FREE service conversations</strong>. Businesses
              can reply to user messages without incurring any charges; it's
              completely FREE.
            </p>
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform-gpu transition-all duration-300"
            // style="opacity: 1; transform: none;"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg shadow-teal-400/50 mb-5"
              //   style="transform: translateY(-7.83199px);"
            >
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
                className="lucide lucide-megaphone w-6 h-6 text-white"
              >
                <path d="m3 11 18-5v12L3 14v-3z"></path>
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Marketing Conversation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Marketing Conversations include all promotional messages, offers,
              product updates. These Conversations cost{" "}
              <strong>₹0.82 / Conversation</strong> (for Indian users).
            </p>
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform-gpu transition-all duration-300"
            // style="opacity: 1; transform: none;"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-lime-600 shadow-lg shadow-lime-400/50 mb-5"
              //   style="transform: translateY(-7.83199px);"
            >
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
                className="lucide lucide-shopping-cart w-6 h-6 text-white"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Utility Conversation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Utility Conversations are transactional in nature and include
              messages for delivery updates, transaction receipts, reminders and
              more. These Conversations cost{" "}
              <strong>₹0.125 / Conversation</strong> (for Indian users).
            </p>
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform-gpu transition-all duration-300"
            // style="opacity: 1; transform: none;"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-700 to-green-800 shadow-lg shadow-green-500/50 mb-5"
              //   style="transform: translateY(-7.83199px);"
            >
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
                className="lucide lucide-eye w-6 h-6 text-white"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Authentication Conversation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Authentication Conversations include messages used for
              verification purposes such as OTP, account registration and
              account recovery. These Conversations cost{" "}
              <strong>₹0.125 / Conversation</strong> (for Indian users).
            </p>
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform-gpu transition-all duration-300"
            // style="opacity: 1; transform: none;"
          >
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-700 to-emerald-800 shadow-lg shadow-emerald-500/50 mb-5"
              //   style="transform: translateY(-7.83199px);"
            >
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
                className="lucide lucide-headphones w-6 h-6 text-white"
              >
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Service Conversation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Service Conversations include all user-initiated conversations
              related to customer support, Chatbot support &amp; queries asked
              by users. Service conversations are <strong>FREE</strong> for all
              businesses using AiSensy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminologie;
