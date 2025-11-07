"use client";
import React from "react";
import { motion } from "framer-motion";

function HowItWorks() {
  const visible = (e) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: e * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  });

  return (
    <section className="w-full px-4 py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="min-h-screen [background-image:linear-gradient(rgba(59,130,246,0.1)_1px,transparent_0),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_0)] [background-size:35px_35px]">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Mittos API Transforms Communication
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our solution transforms challenges into seamless
              experiences
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              className="relative"
              animate={{ opacity: 1, X: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-6">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-1 rounded-t-xl">
                  <div className="bg-white rounded-t-lg py-4 px-6 flex items-center justify-between">
                    <h3 className="text-3xl font-semibold text-gray-900 flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      Before Mittos API
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 mt-2 text-lg">
                  <motion.div
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        No. get blocked When send bulk messages
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        Wasting time on manual replies
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        No messages delivery or read tracking
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        Customer Messages missed by team
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        Broadcast limit 256 contacts only
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        No followup messages
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        No proper customer data management system
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        missed appointments or booking reminders
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        No link click or purchase tracking
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl border border-red-100 shadow-sm flex gap-4 transition-all duration-300 group "
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-xcircle text-red-500"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m15 9-6 6"></path>
                          <path d="m9 9 6 6"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        No system to integrate with lead source
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              animate={{ opacity: 1, X: 0 }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1 rounded-t-xl">
                  <div className="bg-white rounded-t-lg py-4 px-6 flex items-center justify-between">
                    <h3 className="text-3xl font-semibold text-gray-900 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      After Mittos API
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 mt-2 text-lg">
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        Send100000+ bulk messages without getting banned
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        With auto-replies and chatbot, every lead gets instant
                        response
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        API dashboard shows full delivery, read and reply
                        tracking report
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        Multi-agent login to manage replies from one number
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        With API, send 10000+ personalized messages in one click
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        API allows scheduled follow-ups on day1, day3, day5,
                        etc.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        AI-powered CRM to manage all leads in one place
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        Automated reminders via API to reduce cancellations
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        Track link clicks and conversions
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-xl  border border-green-100 shadow-sm flex gap-4 transition-all duration-300 group"
                    animate="visible"
                    initial="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible,
                    }}
                    transition={{ duration: 0.5 }}
                    custom={0}
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      scale: 1.02,
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeinejoin="round"
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
                        Integrate with any lead source like Facebook, Google,
                        etc.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
