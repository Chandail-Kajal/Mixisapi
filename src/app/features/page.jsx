import React from "react";
import SalesPipeline from "../salespipeline/page";
import Broadcasting from "../broadcasting/page";
import AutomatedMessages from "../automatedmessage/page";
import WhatsAppFlows from "../whatsappflow/page";
import Appointment from "../appointment/page";
import WhatsAppInbox from "../whatsappinbox/page";
import AppChatBot from "@/components/homepage/appchatbot";
import NoCode from "../nocode/page";
import ChatBot from "../chatbot/page";
 
const HeroSection = () => {
  return (
    <div>
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-14 items-center">
       
        {/* LEFT SIDE */}
        <div>
          <h1 className="animated-gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-green-600">
            India’s{" "}
            <span>
              1
              <sup className="animated-gradient-text">st</sup>
            </span>{" "}
            All-in-One
            <span className="block mt-2">WhatsApp API + AI CRM to</span>
            <span className="animated-gradient-text lg:text-7xl block mt-4">
              10X Your Sales
            </span>
          </h1>
 
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Automate conversations, manage leads, collect payments, and scale your business — All Features at One Place.
          </p>
 
          <div className="mt-8 flex flex-wrap gap-5">
            <a href="/forms">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                Try Mittos API for FREE
              </button>
            </a>
 
            <a href="/pricing">
              <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold shadow-md transition-colors">
                🎁 Check Today’s Offers
              </button>
            </a>
          </div>
 
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 mb-7">
            <span>🔒</span>
            <span>No credit card required</span>
          </div>
 
          <div className="inline-flex items-center gap-2 rounded-full border border-green-300 px-4 py-1 text-xs sm:text-base text-black font-semibold bg-green-50 backdrop-blur-sm shadow-sm hover:border-green-500 w-fit">
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
              className="w-6 h-6 text-yellow-500 fill-current"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Best Alternative to Wati, AISensy, Double Tick and Interakt.
          </div>
 
          <div className="mt-4">
            <img
              src="data:image/webp;base64,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"
                  alt="Meta Business Partner"
              className="h-14"
            />
          </div>
        </div>
 
        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute -top-8 -right-6 w-72 h-72 md:w-96 md:h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
 
          <img
            src="https://mittosapi.com/assets/Assistant-C5tlHjWu.svg"
            alt="AI Assistant"
            className="relative z-10 w-[280px] md:w-[350px] lg:w-[420px] drop-shadow-2xl rounded-3xl"
          />
        </div>
      </div>
 
      {/* BOTTOM STATS SECTION */}
      <div className="shadow-inner py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
 
          <div className="p-8 bg-green-50 border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <h2 className="text-4xl font-extrabold text-green-600">
              <span>20</span>
            </h2>
            <p className="text-base text-gray-700 mt-1 font-semibold">EMPLOYEES</p>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Men and women, committed to develop a perfect technology.
            </p>
          </div>
 
          <div className="p-8 bg-green-50 border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <h2 className="text-4xl font-extrabold text-green-600">
              <span>50,000</span>+
            </h2>
            <p className="text-base text-gray-700 mt-1 font-semibold">BRANDS</p>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Daily average of 50 businesses choose Mittos to grow their business.
            </p>
          </div>
 
          <div className="p-8 bg-green-50 border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <h2 className="text-4xl font-extrabold text-green-600">
              <span>700</span>
            </h2>
            <p className="text-base text-gray-700 mt-1 font-semibold">PARTNERS</p>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Partnering with potential technology and marketing partners.
            </p>
          </div>
 
        </div>
      </div>
    </div>
    <SalesPipeline/>
    <Broadcasting/>
    <AutomatedMessages/>
    <WhatsAppFlows/>
    <Appointment/>
    <WhatsAppInbox/>
    <ChatBot/>
    <NoCode/>
    </div>
  );
};
 
export default HeroSection;