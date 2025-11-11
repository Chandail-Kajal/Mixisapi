import React from "react";
import { FaMoneyBillWave, FaUsers, FaVideo } from "react-icons/fa";

const ComparisonSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="text-green-600">Ai</span>sensy VS Mittos
            <span className="text-green-600">API</span>
          </h2>
          <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto">
            The only automation platform with{" "}
            <span className="font-bold text-green-600">unlimited features</span>{" "}
            and <span className="font-bold text-green-600">Easy to use</span>{" "}
            for SMBs or Enterprises Businesses
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-8 items-stretch justify-center">
          {/* AiSensy Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full h-full flex flex-col max-w-md hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <img
                src="https://mittosapi.com/assets/Aisensy-DlxB96tQ.jpeg"
                alt="aisensy Logo"
                className="h-10 w-auto mr-4 object-contain"
              />
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-orange-500">
                  ₹80,000{" "}
                  <span className="text-sm sm:text-lg text-gray-500 font-normal">
                    /year
                  </span>
                </p>
                <p className="text-sm text-gray-500">Starter Plan</p>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Upto 100 Tags</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Upto 20 Custom Attributes</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>5 Chatbot Flow</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Chatbot 2500/Month</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Additional 10,620/User Access</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>2400 Messages/min</span>
              </li>
              <li className="flex items-center py-2 text-gray-400">
                <CrossIcon />
                <span>Dedicated Customer Success Manager</span>
              </li>
              <li className="flex items-center py-2 text-gray-400">
                <CrossIcon />
                <span>Calls Tracking</span>
              </li>
            </ul>
          </div>

          {/* VS Icon */}
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
              VS
            </div>
          </div>

          {/* MittosAPI Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full h-full flex flex-col max-w-md hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
            <div className="flex items-center mb-6">
              <img
                src="https://mittosapi.com/assets/mittoslogo-C5UnFXGx.png"
                alt="MittosAPI Logo"
                className="h-10 w-auto mr-4 object-contain"
              />
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-green-600">
                  ₹7,999{" "}
                  <span className="text-sm sm:text-lg text-gray-500 font-normal">
                    /year
                  </span>
                </p>
                <p className="text-sm text-gray-500">Basic Plan</p>
              </div>
            </div>

            <ul className="space-y-3 font-medium">
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Unlimited Tags</span>
                <TagLabel />
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Unlimited Custom Attributes</span>
                <TagLabel />
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Unlimited Chatbot Flow</span>
                <TagLabel />
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>No Cost For Chatbot</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Dedicated Customer Success Manager</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Call Tracking</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>Additional User Access 2999/Yearly</span>
              </li>
              <li className="flex items-center py-2">
                <CheckIcon />
                <span>4000 Messages/min</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-16 text-center">
          <a href="/forms">
            <button className="bg-gradient-to-r from-green-600 to-green-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              START YOUR FREE TRIAL{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="inline ml-2"
                height="1em"
                width="1em"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
              </svg>
            </button>
          </a>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <StatCard icon={<FaUsers className="text-green-500"/>} text="Trusted by 50,000+ Businesses" />
            <StatCard icon={<FaMoneyBillWave className="text-green-500"/>} text="7 - Days FREE TRIAL" />
            <StatCard icon={<FaVideo className="text-purple-600"/>} text="200+ Video Tutorials" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable Subcomponents
const CheckIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 512 512"
    className="text-green-500 mr-3 flex-shrink-0"
    height="1em"
    width="1em"
  >
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

const CrossIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 352 512"
    className="text-red-400 mr-3 flex-shrink-0"
    height="1em"
    width="1em"
  >
    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
  </svg>
);

const TagLabel = () => (
  <span className="ml-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
    Popular
  </span>
);

const StatCard = ({ icon, text }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center gap-3">
    <svg
      stroke="currentColor"
      fill="currentColor"
      className="text-green-500 text-lg sm:text-xl"
      height="1em"
      width="1em"
    >
      {icon}
    </svg>
    <span className="font-medium text-sm sm:text-base">{text}</span>
  </div>
);

export default ComparisonSection;
