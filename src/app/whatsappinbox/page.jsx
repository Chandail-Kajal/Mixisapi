import React from "react";

const WhatsAppInbox = () => {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <div className="flex-grow">
        {/* HERO SECTION */}
        <div className="bg-white py-10 px-6 lg:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Section */}
            <div>
              <div className="flex flex-wrap gap-6 mb-5">
                <div className="flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-base text-black font-semibold bg-green-200 backdrop-blur-sm shadow-sm hover:border-green-500">
                  ⚡ Manage Customer Conversations Easily.
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                WhatsApp API Live <span className="block">Shared Team Inbox</span>
              </h2>

              <ul className="space-y-3 text-lg text-gray-700 mb-8">
                {[
                  "Advanced Team Collaboration Tool.",
                  "Subscriber List Management.",
                  "Multilingual Support with Translation.",
                  "Follow-Up Notification System.",
                  "AI-Powered Response Automation.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600">🟢</span> {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="/forms">
                  <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-xl shadow-md">
                    Start FREE Trial
                  </button>
                </a>
                <a href="/pricing">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md">
                    ▶ Check Pricing
                  </button>
                </a>
              </div>

              <p className="text-sm text-gray-500 flex items-center gap-2">
                📦 No credit card required
              </p>

              <div className="mt-3">
                <img
                  src="http://data:image/webp;base64,UklGRkQMAABXRUJQVlA4WAoAAAA…AAAD//wAAAqAEAAEAAACbAAAAA6AEAAEAAABQAAAAAAAAAA=="
                  alt="Meta Business Partner"
                  className="h-14"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img
                src="https://mittosapi.com/assets/shareteam-DKiwP71W.png"
                alt="Girl with Megaphone"
                className="w-[300px] md:w-[390px] lg:w-[420px] rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-200 rounded-full blur-xl"></div>

          {/* Tutorial Section */}
          <div className="w-full max-w-4xl mx-auto my-12 px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
              Shared Team Tutorial
            </h2>
            <div className="relative w-full aspect-video">
              <div
                className="w-full h-full bg-black rounded-lg overflow-hidden cursor-pointer border-green-500 border-4"
                aria-label="Play video: Shared Team Tutorial"
              >
                <img
                  src="https://img.youtube.com/vi/1-3ooLY6YTM/hqdefault.jpg"
                  alt="Shared Team Tutorial"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300">
                  <div className="bg-green-500 rounded-full p-3 md:p-4 hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 md:w-10 md:h-10"
                    >
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
       
      </div>

    
    </div>
  );
};

export default WhatsAppInbox;
