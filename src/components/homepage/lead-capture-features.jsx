"use client";
import React from "react";
import { motion } from "framer-motion";

const LeadCaptureFeatures = () => {
  const visible = (e = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: e * 0.15, duration: 0.7, type: "spring" },
  });
  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible,
        }}
        whileInView="visible"
        viewport={{ amount: 0.7, once: true }}
        className="text-center max-w-4xl mx-auto mb-10"
      >
        <motion.h1
          custom={1}
          variants={{ hidden: { opacity: 0, y: 40 }, visible }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Instantly capture and assign every lead, both online or offline
        </motion.h1>
        <motion.p
          custom={2}
          variants={{ hidden: { opacity: 0, y: 40 }, visible }}
          className="text-gray-600 text-base md:text-lg"
        >
          Connect Mittos API Directly To Your Lead Sources To Receive Instant
          New Lead Alerts. Contact Them In Just One Tap Via WhatsApp, Text,
          Call, And More—Taking Seconds Instead Of Days To Start New
          Conversations.
        </motion.p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        custom={3}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.7, once: true }}
        variants={{ hidden: { opacity: 0, y: 40 }, visible }}
        className="w-full flex flex-col items-center mb-14"
      >
        <motion.h2
          custom={4}
          variants={{ hidden: { opacity: 0, y: 40 }, visible }}
          className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center"
        >
          ⚡ Powerful Features for{" "}
          <span className="text-green-600">Smarter Lead Management</span>
        </motion.h2>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl">
          {[
            {
              label: "No-code Integrations",
              active: true,
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.5.5 0 0 0-.115.118l-.012.025L6.5 4.5v.003l.003.01q.005.015.036.053a.9.9 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.9.9 0 0 0 .271-.194.2.2 0 0 0 .039-.063v-.009l-.012-.025a.5.5 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.5.5 0 0 0 .115-.118l.012-.025.001-.006v-.003a.2.2 0 0 0-.039-.064.9.9 0 0 0-.27-.193C8.91 11.1 8.49 11 8 11s-.912.1-1.19.24a.9.9 0 0 0-.271.194.2.2 0 0 0-.039.063v.003l.001.006.012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238zM4.605 3a.5.5 0 0 0-.498.55l.001.007.29 3.4A.5.5 0 0 1 3.9 7.5h-.782c-.696 0-1.182-.497-1.469-.872a.5.5 0 0 0-.118-.115l-.025-.012L1.5 6.5h-.003a.2.2 0 0 0-.064.039.9.9 0 0 0-.193.27C1.1 7.09 1 7.51 1 8s.1.912.24 1.19c.07.14.14.225.194.271a.2.2 0 0 0 .063.039H1.5l.006-.001.025-.012a.5.5 0 0 0 .118-.115c.287-.375.773-.872 1.469-.872H3.9a.5.5 0 0 1 .498.542l-.29 3.408a.5.5 0 0 0 .497.55h1.878c-.048-.166-.195-.352-.463-.557-.274-.21-.52-.528-.52-.943 0-.568.447-.947.862-1.154C6.807 10.123 7.387 10 8 10s1.193.123 1.638.346c.415.207.862.586.862 1.154 0 .415-.246.733-.52.943-.268.205-.415.39-.463.557h1.878a.5.5 0 0 0 .498-.55l-.001-.007-.29-3.4A.5.5 0 0 1 12.1 8.5h.782c.696 0 1.182.497 1.469.872.05.065.091.099.118.115l.025.012.006.001h.003a.2.2 0 0 0 .064-.039.9.9 0 0 0 .193-.27c.14-.28.24-.7.24-1.191s-.1-.912-.24-1.19a.9.9 0 0 0-.194-.271.2.2 0 0 0-.063-.039H14.5l-.006.001-.025.012a.5.5 0 0 0-.118.115c-.287.375-.773.872-1.469.872H12.1a.5.5 0 0 1-.498-.543l.29-3.407a.5.5 0 0 0-.497-.55H9.517c.048.166.195.352.463.557.274.21.52.528.52.943 0 .568-.447.947-.862 1.154C9.193 5.877 8.613 6 8 6s-1.193-.123-1.638-.346C5.947 5.447 5.5 5.068 5.5 4.5c0-.415.246-.733.52-.943.268-.205.415-.39.463-.557z"></path>
                </svg>
              ),
            },
            {
              label: "Instant Lead Alerts",
              active: true,
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path>
                </svg>
              ),
            },
            {
              label: "Automatic Lead Distribution",
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"></path>
                </svg>
              ),
            },
            {
              label: "Duplicate Lead Handling",
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"></path>
                  <path d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"></path>
                  <path d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"></path>
                </svg>
              ),
            },
            {
              label: "Offline Lead Capture",
              muted: true,
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M633.8 458.1L362.3 248.3C412.1 230.7 448 183.8 448 128 448 57.3 390.7 0 320 0c-67.1 0-121.5 51.8-126.9 117.4L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3zM96 422.4V464c0 26.5 21.5 48 48 48h350.2L207.4 290.3C144.2 301.3 96 356 96 422.4z"></path>
                </svg>
              ),
            },
            {
              label: "Mittos Lead Forms",
              muted: true,
              icon: (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path>
                </svg>
              ),
            },
          ].map((feature, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0, type: "spring" }}
              viewport={{ amount: 0.7, once: true }}
              whileHover={{ rotate: 1, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              key={idx}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-md ${
                feature.active
                  ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg"
                  : feature.muted
                  ? "bg-gray-100 text-gray-600 shadow-sm"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              <span>{feature.icon}</span>
              <span>{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lead Capture Visualization */}
      <div className="bg-green-50 py-8 md:py-12 px-4 sm:px-6 rounded-xl">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <motion.div className="w-full lg:w-1/2">
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

              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, type: "spring" },
                  },
                }}
                viewport={{ amount: 0.5, once: true }}
                class="absolute top-0 left-[33%] flex justify-center mb-6"
              >
                <h2 class="text-base md:text-lg font-bold text-green-600 bg-green-100 rounded-full py-2 px-6 inline-block whitespace-nowrap ">
                  Your lead sources
                </h2>
              </motion.div>

              {[1, 2, 3, 4, 5].map((num, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="absolute z-10 bg-green-200 p-2 rounded-full"
                  style={{
                    top: [65, 160, 270, 160, 74][idx],
                    left: ["15%", "29%", "44%", "59%", "80%"][idx],
                    transform: "translateX(-25%)",
                  }}
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${num}`}
                    alt={`Lead ${num}`}
                    className="w-14 md:w-16 h-14 md:h-16 rounded-full border-4 border-white shadow-md"
                  />
                </motion.div>
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
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible,
                }}
              >
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
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible,
                }}
              >
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
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible,
                }}
              >
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
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible,
                }}
              >
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
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Timeline */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ amount: 0.5, once: true }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, type: "spring" },
              },
            }}
            className="w-full lg:w-1/2 flex items-center"
          >
            <div className="space-y-8 w-full">
              {[
                {
                  day: "Day 1",
                  title: "New lead alert",
                  desc: "You have a new lead from Facebook. Tap to follow up.",
                  color: "text-red-500",
                  icon: (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="text-red-500 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path>
                    </svg>
                  ),
                  special: true,
                },
                {
                  day: "Day 2",
                  title: "Send brochure",
                  desc: "Send PDF file",
                  color: "text-red-500",
                  icon: (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 384 512"
                      class="text-red-500 text-2xl mr-3"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path>
                    </svg>
                  ),
                },
                {
                  day: "Day 3",
                  title: "Follow-up reminder",
                  desc: "Follow-up with client",
                  color: "text-green-500",
                  icon: (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="text-green-500 text-2xl mr-3"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path>
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  key={idx}
                  className="flex items-center"
                >
                  <div className="z-10 bg-green-600 text-white rounded-full px-3 py-2 text-center text-sm">
                    {item.day}
                  </div>
                  {item.special ? (
                    <div className="ml-4 bg-white p-4 rounded-lg shadow-md w-full">
                      <div className="flex items-center text-sm mb-2">
                        <span className={`mr-1`}>{item.icon}</span>
                        <div className="">
                          <span className="font-bold">{item.title}</span>
                        </div>
                      </div>
                      <div className="rounded-xl bg-gray-300/20 p-2 flex flex-col">
                        <span className="text-gray-500 text-sm">MITTOS</span>
                        <span className="text-gray-900 font-bold mt-1 text-sm">
                          New Lead - Katherine Lim
                        </span>
                        <p className="text-xs text-gray-800">{item.desc}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="ml-4 bg-white p-4 rounded-lg shadow-md w-full">
                      <div className="flex items-center text-sm mb-2">
                        <span className={`mr-1`}>{item.icon}</span>
                        <span className="font-bold">{item.title}</span>
                      </div>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureFeatures;
