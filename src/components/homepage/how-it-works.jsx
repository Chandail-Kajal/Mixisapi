"use client";
import React from "react";
import { motion } from "framer-motion";

const visible = (e) => ({
  opacity: 1,
  y: 0,
  transition: {
    delay: e * 0.1,
    duration: 0.5,
    ease: "easeOut",
  },
});

const Icon = ({ type }) => (
  <div
    className={`w-8 h-8 rounded-full flex items-center justify-center ${
      type === "before" ? "bg-red-100" : "bg-green-100"
    }`}
  >
    {type === "before" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-xcircle text-red-500"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m15 9-6 6"></path>
        <path d="m9 9 6 6"></path>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-check-circle text-green-500"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <path d="m9 11 3 3L22 4"></path>
      </svg>
    )}
  </div>
);

const Card = ({ text, index, type }) => (
  <motion.div
    animate="visible"
    initial="hidden"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible,
    }}
    custom={index}
    whileHover={{
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      scale: 1.02,
    }}
    className={`bg-white rounded-xl border ${
      type === "before" ? "border-red-100" : "border-green-100"
    } shadow-sm flex gap-4 transition-all duration-300 group`}
  >
    <div className="flex-shrink-0">
      <Icon type={type} />
    </div>
    <p className="text-gray-600 text-md group-hover:text-gray-900 transition-colors">
      {text}
    </p>
  </motion.div>
);

const Column = ({ title, color, items, type }) => (
  <motion.div
    className="relative"
    animate={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: type === "before" ? -30 : 30 }}
    transition={{ duration: 0.6, delay: type === "before" ? 0.2 : 0.4 }}
  >
    <div className="sticky top-6">
      <div
        className={`bg-gradient-to-r from-${color}-500 to-${
          color === "red" ? "orange" : "emerald"
        }-500 p-1 rounded-t-xl`}
      >
        <div className="bg-white rounded-t-lg py-4 px-6 flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-gray-900 flex items-center gap-2">
            <div
              className={`w-3 h-3 ${
                color === "red" ? "bg-red-500" : "bg-green-500"
              } rounded-full`}
            ></div>
            {title}
          </h3>
        </div>
      </div>
      <div className="space-y-4 mt-2 text-lg">
        {items.map((text, i) => (
          <Card key={i} text={text} index={i} type={type} />
        ))}
      </div>
    </div>
  </motion.div>
);

function HowItWorks() {
  const beforeItems = [
    "No. get blocked When send bulk messages",
    "Wasting time on manual replies",
    "No messages delivery or read tracking",
    "Customer Messages missed by team",
    "Broadcast limit 256 contacts only",
    "No followup messages",
    "No proper customer data management system",
    "Missed appointments or booking reminders",
    "No link click or purchase tracking",
    "No system to integrate with lead source",
  ];

  const afterItems = [
    "Send 100000+ bulk messages without getting banned",
    "With auto-replies and chatbot, every lead gets instant response",
    "API dashboard shows full delivery, read and reply tracking report",
    "Multi-agent login to manage replies from one number",
    "With API, send 10000+ personalized messages in one click",
    "API allows scheduled follow-ups on day1, day3, day5, etc.",
    "AI-powered CRM to manage all leads in one place",
    "Automated reminders via API to reduce cancellations",
    "Track link clicks and conversions",
    "Integrate with any lead source like Facebook, Google, etc.",
  ];

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
            transition={{ duration: 0.6 }}
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
            <Column
              title="Before Mittos API"
              color="red"
              items={beforeItems}
              type="before"
            />
            <Column
              title="After Mittos API"
              color="green"
              items={afterItems}
              type="after"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
