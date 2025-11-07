import React from "react";

function WhatsappAds() {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div
            className="flex-1 text-center md:text-left"
            // style="opacity: 1; transform: none;"
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              // style="opacity: 1; transform: none;"
            >
              Skyrocket Lead Generation With{" "}
              <span className="text-green-600">Click To WhatsApp Ads</span>
            </h1>
            <p
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              // style="opacity: 1; transform: none;"
            >
              Never miss leads, even without phone numbers! Engage customers
              directly on WhatsApp, nurture leads affordably, sell in real time,
              and shorten your sales funnel effortlessly with CTWA marketing.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              // style="opacity: 1; transform: none;"
            >
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
          <div
            className="flex-1 flex justify-center"
            // style="opacity: 1; transform: none;"
          >
            <div className="relative">
              <img
                src="https://mittosapi.com/assets/CTWA-Dsmx2V_-.png"
                alt="Click to WhatsApp Ads Example"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsappAds;
