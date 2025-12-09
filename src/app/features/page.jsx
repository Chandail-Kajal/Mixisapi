import React from "react";
import SalesPipeline from "../salespipeline/page";
import Broadcasting from "../broadcasting/page";
import AutomatedMessages from "../automatedmessage/page";
import WhatsAppFlows from "../whatsappflow/page";
import Appointment from "../appointment/page";
import WhatsAppInbox from "../whatsappinbox/page";
import NoCode from "../nocode/page";
import ChatBot from "../chatbot/page";
import Keyword from "../keyword/page";
import Catalog from "../catalog/page";
import CallTracker from "../calltracker/page";
import WhatsAppCarousel from "../whatsappcarousel/page";
import Payment from "../payment/page";
import WhatsAppLink from "../whatsapplink/page";
import AdvanceAiCRM from "../advanceaicrm/page";
import Widgets from "@/components/widgets";
import Founders from "@/components/homepage/founders";

const FeaturesPage = () => {
  return (
    <div>
      <div className="w-full text-white text-center py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-semibold tracking-wide shadow-md relative ">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-700 to-black bg-[length:300%_300%] animate-gradient"></div>
        <div className="relative z-10 text-2xl">
          Same Features as
          <span className="font-extrabold text-white">
            Wati, Aisensy, Gallabox
          </span>{" "}
          and <span className="font-extrabold text-white">DoubleTick</span> ={" "}
          <span
            className="font-extrabold text-yellow-300 relative text-2xl sm:text-3xl md:text-4xl pr-1"
            style={{
              textShadow:
                "rgb(0, 0, 0) 3px 3px 0px, rgba(0, 0, 0, 0.5) 4px 4px 0px, rgba(0, 0, 0, 0.5) 6px 6px 8px",
            }}
          >
            MixisAPI
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="animated-gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-green-600">
              India’s{" "}
              <span>
                1<sup className="animated-gradient-text">st</sup>
              </span>{" "}
              All-in-One
              <span className="block mt-2">WhatsApp API + AI CRM to</span>
              <span className="animated-gradient-text lg:text-7xl block mt-4">
                10X Your Sales
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              Automate conversations, manage leads, collect payments, and scale
              your business — All Features at One Place.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <a href="/forms">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                  Try Mixis API for FREE
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
              <p className="text-base text-gray-700 mt-1 font-semibold">
                EMPLOYEES
              </p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Men and women, committed to develop a perfect technology.
              </p>
            </div>

            <div className="p-8 bg-green-50 border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <h2 className="text-4xl font-extrabold text-green-600">
                <span>50,000</span>+
              </h2>
              <p className="text-base text-gray-700 mt-1 font-semibold">
                BRANDS
              </p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Daily average of 50 businesses choose Mixis to grow their
                business.
              </p>
            </div>

            <div className="p-8 bg-green-50 border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <h2 className="text-4xl font-extrabold text-green-600">
                <span>700</span>
              </h2>
              <p className="text-base text-gray-700 mt-1 font-semibold">
                PARTNERS
              </p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Partnering with potential technology and marketing partners.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SalesPipeline />
      <Broadcasting />
      <AutomatedMessages />
      <WhatsAppFlows />
      <Appointment />
      <WhatsAppInbox />
      <ChatBot />
      <NoCode />
      <Keyword />
      <div className="w-full bg-white py-5 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Section */}
          <div>
            <div className="flex flex-wrap gap-6 mb-5">
              <div className="flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-base text-black font-semibold bg-green-200 backdrop-blur-sm shadow-sm hover:border-green-500">
                ⚡ Sequence
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900">
              Sequence or Drip Campaign
            </h2>

            <p className="text-lg text-gray-700 mt-6">
              Automate marketing strategy that sends a series of pre-scheduled,
              targeted messages to nurture leads or engage customers over time.
            </p>

            <ul className="mt-8 space-y-3 text-lg text-gray-700">
              <li>🟢 Consistent Engagement.</li>
              <li>🟢 Better Customer Retention.</li>
              <li>🟢 Higher Conversion Rates.</li>
              <li>🟢 Scalable for Large Audiences.</li>
              <li>🟢 Automated Lead Nurturing.</li>
              <li>🟢 Re-engage Old Leads.</li>
            </ul>

            <div className="flex items-center gap-3 mt-8">
              <a href="/forms" data-discover="true">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow">
                  Start FREE Trial
                </button>
              </a>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg shadow">
                Watch Now
              </button>
            </div>

            <p className="text-sm text-gray-500 flex items-center gap-1 mt-4">
              <span className="text-orange-600">▢</span> No credit card required
            </p>

            <div className="mt-3">
              <img
                src="data:image/webp;base64,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"
                alt="Meta Business Partner"
                className="h-14"
              />
            </div>
          </div>

          {/* Right Section (Time cards) */}
          <div className="space-y-4 mt-48">
            {[
              "After 2 hours",
              "4 hours later",
              "12 hours later",
              "24 hours later",
              "After 7 days",
              "Keep Adding as many steps you need",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2 rounded-full shadow cursor-pointer transition-all duration-300 bg-white text-gray-700 hover:bg-green-100"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="text-xl text-green-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span className="font-medium text-sm">{text}</span>
              </div>
            ))}
          </div>
          <div
            className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[260px] sm:h-[600px] sm:w-[300px] shadow-xl"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
              {/* Header */}
              <div className="bg-teal-700 p-3 flex items-center justify-between text-white">
                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                  >
                    <path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path>
                  </svg>

                  <div className="w-8 h-8 mr-4 flex items-center justify-center font-bold text-lg ml-2">
                    Travelog
                  </div>

                  <div className="ml-3">
                    <div className="flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-blue-400 text-sm m-5 ml-8"
                        height="1em"
                        width="1em"
                      >
                        <path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path>
                        <path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"></path>
                  </svg>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                  </svg>
                </div>
              </div>

              {/* Body */}
              <div
                className="h-[calc(100%-56px)] bg-gray-100 p-4 overflow-y-auto"
                style={{
                  backgroundImage:
                    'url("https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg")',
                  backgroundSize: "cover",
                }}
              >
                <div
                  className="bg-white rounded-lg shadow-md p-3"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="mb-2">
                    <img
                      src="/assets/ad1-B5dbr-Yt.png"
                      alt="Keep adding as many steps you need"
                      className="rounded-lg w-full"
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-2 space-y-2">
                    {/* Book Site Visit */}
                    <button className="w-full flex items-center justify-center text-blue-500 font-semibold py-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="mr-2"
                        height="1em"
                        width="1em"
                      >
                        <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"></path>
                        <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"></path>
                      </svg>
                      Book Site Visit
                    </button>

                    {/* Call Now */}
                    <button className="w-full flex items-center justify-center text-blue-500 font-semibold py-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="mr-2 scale-x-[-1]"
                        height="1em"
                        width="1em"
                      >
                        <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></path>
                      </svg>
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Catalog />
      <CallTracker />
      <WhatsAppCarousel />
      <Payment />
      <WhatsAppLink />
      <AdvanceAiCRM />
      <Widgets />
      <Founders />
      <section className="py-10 bg-white">
        <div className="max-w-7xl px-8 mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why WhatsApp?
          </h2>
          <p className="text-gray-600 mt-2">
            WhatsApp is the One Platform that brings together Actionable
            Notifications &amp; Customer Support!
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border rounded-xl shadow-sm p-6 bg-white hover:shadow-md transition">
              <p className="text-2xl font-bold text-green-600">98%</p>
              <p className="text-gray-500 mt-1">Open Rates</p>
            </div>
            <div className="border rounded-xl shadow-sm p-6 bg-white hover:shadow-md transition">
              <p className="text-2xl font-bold text-green-600">45-60%</p>
              <p className="text-gray-500 mt-1">Click Rates</p>
            </div>
            <div className="border rounded-xl shadow-sm p-6 bg-white hover:shadow-md transition">
              <p className="text-2xl font-bold text-green-600">2.60Bn+</p>
              <p className="text-gray-500 mt-1">Active Users</p>
            </div>
            <div className="border rounded-xl shadow-sm p-6 bg-white hover:shadow-md transition">
              <p className="text-2xl font-bold text-green-600">70%</p>
              <p className="text-gray-500 mt-1">Engagement Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
