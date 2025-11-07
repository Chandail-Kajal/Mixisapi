import React from "react";

const LeadCaptureFeatures = () => {
  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Instantly capture and assign every lead, both online or offline
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Connect Mittos API Directly To Your Lead Sources To Receive Instant
          New Lead Alerts. Contact Them In Just One Tap Via WhatsApp, Text,
          Call, And More—Taking Seconds Instead Of Days To Start New
          Conversations.
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full flex flex-col items-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
          ⚡ Powerful Features for{" "}
          <span className="text-green-600">Smarter Lead Management</span>
        </h2>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl">
          {[
            { label: "No-code Integrations", active: true },
            { label: "Instant Lead Alerts", active: true },
            { label: "Automatic Lead Distribution" },
            { label: "Duplicate Lead Handling" },
            { label: "Offline Lead Capture", muted: true },
            { label: "Mittos Lead Forms", muted: true },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-md ${
                feature.active
                  ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg"
                  : feature.muted
                  ? "bg-gray-100 text-gray-600 shadow-sm"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              <span>✅</span>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Capture Visualization */}
      <div className="bg-green-50 py-8 md:py-12 px-4 sm:px-6 rounded-xl">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Side: Visualization */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] md:h-[380px] w-full mb-8">
              <svg
                className="absolute top-0 left-0 w-full h-full z-0"
                preserveAspectRatio="none"
              >
                <line
                  x1="50%"
                  y1="22"
                  x2="15%"
                  y2="100"
                  stroke="#16A34A"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="22"
                  x2="35%"
                  y2="200"
                  stroke="#16A34A"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="22"
                  x2="50%"
                  y2="320"
                  stroke="#16A34A"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="22"
                  x2="65%"
                  y2="200"
                  stroke="#16A34A"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="22"
                  x2="85%"
                  y2="100"
                  stroke="#16A34A"
                  strokeWidth="2"
                />
              </svg>

              <h2 className="absolute top-0 left-[33%] text-base md:text-lg font-bold text-green-600 bg-green-100 rounded-full py-2 px-6 inline-block whitespace-nowrap">
                Your lead sources
              </h2>

              {[1, 2, 3, 4, 5].map((num, idx) => (
                <div
                  key={idx}
                  className="absolute bg-green-200 p-2 rounded-full"
                  style={{
                    top: [65, 160, 270, 160, 74][idx],
                    left: ["15%", "29%", "44%", "59%", "80%"][idx],
                    transform: "translateX(-50%)",
                  }}
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${num}`}
                    alt={`Lead ${num}`}
                    className="w-14 md:w-16 h-14 md:h-16 rounded-full border-4 border-white shadow-md"
                  />
                </div>
              ))}
            </div>

            {/* Settings Checkboxes */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-green-500"
                  defaultChecked
                />
                <span className="text-gray-700 text-sm md:text-base">
                  Round Robin
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5 accent-green-500" />
                <span className="text-gray-700 text-sm md:text-base">
                  Any Custom Rules
                </span>
              </label>
            </div>

            <div className="flex justify-center mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-green-500"
                  defaultChecked
                />
                <span className="text-gray-700 text-sm md:text-base">
                  Fastest Fingers First
                </span>
              </label>
            </div>
            <div
              className="flex justify-center gap-4 md:gap-6"
              // style="opacity: 1; transform: none;"
            >
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="w-10 h-10 text-green-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-green-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path>
                  <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                </svg>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-10 h-10 text-green-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-red-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Timeline */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="space-y-8 w-full">
              {[
                {
                  day: "Day 1",
                  title: "New lead alert",
                  desc: "You have a new lead from Facebook. Tap to follow up.",
                  color: "text-red-500",
                },
                {
                  day: "Day 2",
                  title: "Send brochure",
                  desc: "Send PDF file",
                  color: "text-red-500",
                },
                {
                  day: "Day 3",
                  title: "Follow-up reminder",
                  desc: "Follow-up with client",
                  color: "text-green-500",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="z-10 bg-green-600 text-white rounded-full px-3 py-2 text-center text-sm">
                    {item.day}
                  </div>
                  <div className="ml-4 bg-white p-4 rounded-lg shadow-md w-full">
                    <div className="flex items-center text-sm mb-2">
                      <span className={`${item.color} mr-2`}>●</span>
                      <span className="font-bold">{item.title}</span>
                    </div>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureFeatures;
