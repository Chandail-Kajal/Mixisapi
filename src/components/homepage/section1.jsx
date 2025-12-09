import Link from "next/link";
import React from "react";
import { GiClick } from "react-icons/gi";
import AnimatedBackground from "../animatedbackground";

function Section1() {
  return (
    <div>
      <div className="w-full text-white text-center py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-semibold tracking-wide shadow-md relative ">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-700 to-black bg-[length:300%_300%] animate-gradient"></div>
        <div className="relative z-10 text-yellow-300 text-2xl">
          Buy →{" "}
          <span className="font-extrabold text-white">
            WhatsApp API and Get
          </span>{" "}
          ={" "}
          <span
            className="font-extrabold text-yellow-300 relative text-2xl sm:text-3xl md:text-4xl pr-1"
            style={{
              textShadow:
                "rgb(0, 0, 0) 3px 3px 0px, rgba(0, 0, 0, 0.5) 4px 4px 0px, rgba(0, 0, 0, 0.5) 6px 6px 8px",
            }}
          >
            Call Tracker
          </span>
          <span className="font-extrabold underline text-white ">
            FREE FREE FREE
          </span>
        </div>
      </div>
      <div className="w-full">
        <div className="relative overflow-hidden align-middle">
          <div className="absolute inset-0">
            <AnimatedBackground />
          </div>

          <section className="relative py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-wrap justify-center gap-10 mb-10">
                <div className="flex items-center gap-2 rounded-full border border-green-300 px-4 py-1 text-xs sm:text-base text-black font-semibold bg-gray-100 backdrop-blur-sm shadow-sm hover:border-green-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 text-green-700"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3
                      0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5
                      4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    ></path>
                  </svg>
                  Powered by Official WhatsApp Business API
                </div>
                <div className="flex items-center gap-2 rounded-full border border-green-300 px-4 py-1 text-xs sm:text-base text-black font-semibold bg-gray-100 backdrop-blur-sm shadow-sm hover:border-green-500">
                  <img
                    src="https://mittosapi.com/assets/metalogohero-D7d0DTBg.jpg"
                    alt="Meta Logo"
                    className="w-6 h-6 object-contain"
                  />
                  Meta Business Partners
                </div>
                
              </div>
              <div className="flex flex-col  items-center mx-auto">
                <div className="flex flex-col justify-center items-center space-y-4 text-center">
                  <h1 className="text-6xl sm:text-5xl lg:text-9xl font-extrabold">
                    <span className="animated-gradient-text mr-2">
                      100% Ban Proof Meta Verified API
                    </span>
                  </h1>
                  <h2 className="text-3xl sm:text-6xl font-semibold text-gray-900">
                    Send Unlimited WhatsApp Messages
                  </h2>
                  <p className="text-xl flex gap-2 items-center sm:text-xl bg-green-500 text-white w-fit px-4 py-2 rounded-xl font-bold">
                    Just in One Click <GiClick size={20} />
                  </p>
                  <p className="text-gray-600 text-base sm:text-2xl max-w-xl mx-auto lg:mx-0">
                    {"World's"} most trusted and affordable complete business
                    automation API platform
                  </p>
                  <p className="text-sm text-gray-500 flex sm:text-xl items-center justify-center lg:justify-start">
                    Powered by Official WhatsApp APIs 🔥
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
                    <Link href="/forms">
                      <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2">
                        Try Mixis API for FREE{" "}
                        <span className="text-xl">→</span>
                      </button>
                    </Link>
                    <Link href="/offer">
                      <button className="relative w-full sm:w-auto overflow-hidden rounded-xl border-2 border-green-500 bg-white px-8 py-3.5 text-lg font-semibold text-green-700 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group flex flex-col items-center justify-center">
                        <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></span>
                        <div className="relative z-10 flex items-center gap-2 text-lg font-bold tracking-wide group-hover:text-white transition-colors duration-300">
                          Switch and Save{" "}
                          <span className="text-xl group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                        <p className="relative z-10 mt-1 text-xs text-gray-600 italic group-hover:text-green-100 transition-colors duration-300">
                          only for existing API users
                        </p>
                        <span className="absolute -top-2 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-[10px] font-bold text-black px-2 py-0.5 rounded-full shadow-md border border-yellow-300">
                          OFFER
                        </span>
                        <span className="absolute inset-0 rounded-xl border-2 border-green-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></span>
                      </button>
                    </Link>
                  </div>
                  <p className="text-xl text-green-600 flex items-center justify-center lg:justify-start gap-2 mt-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="w-8 h-6 text-blue-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path>
                    </svg>
                    No credit card required
                  </p>
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
                      className="lucide lucide-star w-6 h-6 text-yellow-500 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    Best Alternative to Wati, AISensy, Double Tick and Interakt.
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center gap-2 p-6 rounded-2xl">
                      <div className="flex text-yellow-400 align-center">
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 text-center font-medium">
                        Never going back to any others
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-6 rounded-2xl">
                      <div className="flex text-yellow-400">
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 text-center font-medium">
                        MixisAPI is an absolute must have!
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-6 rounded-2xl">
                      <div className="flex text-yellow-400">
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
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
                          className="lucide lucide-star w-5 h-5 fill-current"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 text-center font-medium">
                        MixisAPI is best in industry
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Section1;
