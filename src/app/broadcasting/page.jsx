import React from "react";
import { FaQ } from "react-icons/fa6";

const WhatsAppBroadcast = () => {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="bg-white py-10 px-6 lg:px-10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Section */}
            <div>
              <div className="flex flex-wrap gap-6 mb-5">
                <div className="flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-base text-black font-semibold bg-green-200 backdrop-blur-sm shadow-sm">
                  ⚡ Broadcast Messages With WhatsApp Official API
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Broadcast Unlimited Messages on WhatsApp{" "}
                <span className="text-green-600">Just in 1 Click</span>
              </h1>

              <ul className="mt-8 space-y-3 text-lg text-gray-700">
                <li>🟢 Create enticing message templates.</li>
                <li>🟢 Manage unlimited customer list.</li>
                <li>🟢 Broadcast message templates.</li>
                <li>🟢 Drive engagements in the inbox.</li>
                <li>🟢 Reduce risk of banning.</li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/forms">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md">
                    Start FREE Trial
                  </button>
                </a>
                <a href="/pricing">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md">
                    ▶ Check Pricing
                  </button>
                </a>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  🔒 No credit card required
                </p>
                <div className="mt-3">
                  <img
                    src="http://data:image/webp;base64,UklGRkQMAABXRUJQVlA4WAoAAAA…AAAD//wAAAqAEAAEAAACbAAAAA6AEAAEAAABQAAAAAAAAAA=="
                    alt="Meta Business Partner"
                    className="h-14"
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative flex flex-col items-center lg:flex-row lg:gap-8">
              <img
                src="https://mittosapi.com/assets/girlMeghaphone-BRckkwhD.jpeg"
                alt="Girl with Megaphone"
                className="w-[280px] md:w-[340px] rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-200 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Video Tutorial Section */}
          <div className="w-full max-w-4xl mx-auto my-12 px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
              WhatsApp Broadcasting Tutorial
            </h2>
            <div className="relative w-full aspect-video">
              <div className="w-full h-full bg-black rounded-lg overflow-hidden cursor-pointer border-green-500 border-4">
                <iframe
                     className="w-full h-full rounded-lg border-4 border-green-500"
                     src="https://www.youtube.com/embed/oqZdEWW3jBk"
                     title="WhatsApp Broadcasting Tutorial"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                    ></iframe>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300">
                  <div className="bg-green-500 rounded-full p-3 md:p-4 hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 md:w-10 md:h-10"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-20 bg-gradient-to-b from-white to-green-50">
       
        <FaQ/>
      </div>

      {/* Footer Section */}
     
    </div>
  );
};

export default WhatsAppBroadcast;
