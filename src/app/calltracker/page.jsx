import VideoPlayer from "@/components/video-player";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";

const CallTracker = () => {
  const iconsArr = [
    <FaUserAlt size={36} key={1} />,
    <MdAddCall size={36} key={2} />,
    <BsDownload size={36} key={2} />,
    <IoCall size={36} key={4} />,
  ];

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <div className="flex-grow">
        {/* Section 1: Hero + Features */}
        <section className="w-full bg-white py-10">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-6 mb-5">
                <div className="flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-base text-black font-semibold bg-green-200 backdrop-blur-sm shadow-sm hover:border-green-500">
                  ⚡ Call Tracker
                </div>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Mixis Call Tracker
              </h2>
              <p className="text-gray-600 mb-6 text-md leading-relaxed">
                Mixis API call tracker is an android based mobile app that
                helps you track all incoming, outgoing and missed calls. The
                tracker app auto-save the phone number, call details with person
                name and other details to the audience management system. With
                the tracker app, you can also manage the client details and add
                important notes for future reference. The application can be
                used on multiple phones for a business.
              </p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-md text-gray-800 mb-6">
                <div className="flex items-center gap-2">
                  <i className="text-xl">📱</i> Android app
                </div>
                <div className="flex items-center gap-2">
                  <i className="text-xl">👥</i> Multiple agent
                </div>
                <div className="flex items-center gap-2">
                  <i className="text-xl">📊</i> Detailed Report
                </div>
                <div className="flex items-center gap-2">
                  <i className="text-xl">🗂️</i> Audience Management
                </div>
                <div className="flex items-center gap-2">
                  <i className="text-xl">⏰</i> Follow Up reminders
                </div>
              </div>

              <button className="bg-green-600 text-white font-semibold px-6 py-5 rounded-full shadow hover:bg-gray-900">
                Set up your call tracker
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="https://mittosapi.com/assets/phoneUI-Ivg7ugWb.png"
                alt="Call Tracker UI"
                className="max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Video Tutorial */}
          <div className="w-full max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
              Call Tracker Tutorial
            </h2>
            <VideoPlayer
              thumbnail="https://img.youtube.com/vi/ARk-mS5K7xI/hqdefault.jpg"
              video="https://www.youtube.com/embed/ARk-mS5K7xI?start=0&autoplay=1"
            />
          </div>
        </section>

        {/* Section 2: Steps */}
        <section className="w-full bg-green-50 py-10">
          <div className="max-w-7xl px-6 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              How to setup Your Call Tracker
            </h2>

            {/* Step indicators */}
            <div className="relative flex items-center justify-between w-full max-w-3xl mx-auto mb-12">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -z-0" />
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-200 text-green-800 font-bold">
                    {n}
                  </div>
                </div>
              ))}
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                "Create your free account",
                "Add your phone number",
                "Install the app",
                "Make first call and view it",
              ].map((step, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl shadow-sm border ${
                    i === 1 ? "border-purple-500" : "border-gray-200"
                  } flex flex-col items-center justify-center gap-4`}
                >
                  <div className="text-4xl text-gray-800">{iconsArr[i]}</div>
                  <p className="text-sm font-medium text-gray-800 text-center">
                    {i + 1}. {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CallTracker;
