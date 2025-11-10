"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBell, FaBullhorn, FaEnvelopeOpenText, FaImages, FaReply, FaTag, FaTicketAlt, FaTools } from "react-icons/fa";
import { RiCursorFill } from "react-icons/ri";

const MotionBox = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

function BulkMessaging() {
  const features = [
    {
      title: "Automatic WhatsApp Messages",
      desc: "Send same messages multiple times every day without manual effort.",
      icon: (
        <path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path>
      ),
    },
    {
      title: "Schedule Your Messages",
      desc: "Plan broadcasts up to 2 months in advance with precision.",
      icon: (
        <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
      ),
    },
    {
      title: "Drip Campaigns",
      desc: "Convert leads into customers with timed follow-ups.",
      icon: (
        <path d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"></path>
      ),
    },
  ];

  const buttons = [
    {label:"Send Promotions",icon:<FaBullhorn/>},
    {label:"Offers",icon:<FaTag/>},
    {label:"Coupon Codes",icon:<FaTicketAlt/>},
    {label:"Carousels",icon:<FaImages/>},
    {label:"Call to Action",icon:<RiCursorFill/>},
    {label:"Marketing Messages",icon:<FaEnvelopeOpenText/>},
    {label:"Utility Messages",icon:<FaTools/>},
    {label:"Order Notifications",icon:<FaBell/>},
    {label:"Quick Reply",icon:<FaReply/>},
  ];

  return (
    <>
      <div className="w-full p-6 sm:p-10">
        <header className="bg-white/60 backdrop-blur-md shadow-md py-4 px-6 rounded-xl flex justify-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            WhatsApp Bulk Messaging
          </h1>
        </header>

        {/* HERO SECTION */}
        <MotionBox delay={0.1}>
          <section className="text-center py-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Send <span className="text-green-600">Unlimited Messages</span>{" "}
              just in One Click
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The Ultimate Tool To Automate, Schedule, And Optimize Your
              WhatsApp Marketing.
            </p>
          </section>
        </MotionBox>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <MotionBox
              className="group p-6 rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 border border-white/20"
              key={i}
              delay={i * 0.1}
            >
              <div>
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white text-2xl shadow-md mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </MotionBox>
          ))}
        </div>

        {/* MESSAGE BUTTONS */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {buttons.map((btn, i) => (
            <motion.button
              key={i}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="flex items-center justify-center gap-3 px-7 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-400 text-white font-medium shadow-md hover:shadow-lg transition-transform"
            >
              <span className="text-lg">{btn.icon}</span>
               <span className="text-base">{btn.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full max-w-5xl mx-auto px-4 my-6">
        <img
          src="https://mittosapi.com/assets/100%20Ban%20Proof%20API%20(2)-C7SsEfdA.gif"
          alt="Ban Proof API"
          className="w-full h-auto object-contain rounded-lg shadow-md border-4 border-green-500"
        />
      </div>
    </>
  );
}

export default BulkMessaging;
