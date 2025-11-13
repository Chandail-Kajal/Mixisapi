import React from "react";

const WhatsAppAutoMessages = () => {
  

 

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      {/* Section: Intro */}
      <div className="bg-white py-10 px-6 lg:px-10 relative overflow-hidden flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 mb-5">
            <div className="flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-base text-black font-semibold bg-green-200 backdrop-blur-sm shadow-sm">
              ⚡ WhatsApp Automated Messages
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center lg:text-left">
            WhatsApp Auto Messages
          </h1>

          <ul className="space-y-4 text-lg text-gray-800 leading-relaxed mb-8">
            {[
              {
                title: "Saves Time and Effort",
                desc: "No need to send manual follow-up messages; everything happens automatically.",
              },
              {
                title: "Consistent Communication",
                desc: "Customers receive messages regularly, improving engagement and trust.",
              },
              {
                title: "Better Customer Retention",
                desc: "Automated reminders keep customers active and connected with your business.",
              },
              {
                title: "Increased Conversions",
                desc: "Regular follow-ups help convert more leads into paying customers.",
              },
              {
                title: "Personalized Marketing",
                desc: "You can send targeted, scheduled messages based on customer behavior or purchase cycle.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-semibold text-green-600">•</span>
                <div>
                  <span className="font-semibold">{item.title}</span> –{" "}
                  {item.desc}
                </div>
              </li>
            ))}
          </ul>

          {/* Meta Partner */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 mb-2">Official Partner</p>
            <img
              src="	data:image/webp;base64,UklGRkQMAABXRUJQVlA4WAoAAAA…AAAD//wAAAqAEAAEAAACbAAAAA6AEAAEAAABQAAAAAAAAAA=="
              alt="Meta Partner"
              className="h-8 mx-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Tutorial */}
          <div className="w-full max-w-4xl mx-auto px-4 mt-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-center md:text-left">
              WhatsApp Auto Message Tutorial
            </h2>
            <div className="relative w-full aspect-video">
              <a
                href="https://www.youtube.com/watch?v=zyGZnRXZ7ZM"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full bg-black rounded-lg overflow-hidden border-4 border-green-500"
              >
                <img
                  src="https://img.youtube.com/vi/zyGZnRXZ7ZM/hqdefault.jpg"
                  alt="WhatsApp Auto Message Tutorial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300">
                  <div className="bg-green-500 rounded-full p-4 hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-10 h-10"
                    >
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      
    </div>
  );
};

export default WhatsAppAutoMessages;