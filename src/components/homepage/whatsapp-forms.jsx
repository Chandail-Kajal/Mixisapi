"use client";
import React from "react";
import { motion } from "framer-motion";

const whatsappButtons = [
  "Lead Generation",
  "Feedback Collection",
  "Surveys & Polls",
  "Event Registrations",
  "Appointment Booking",
  "Support Ticket Creation",
  "Placing Orders",
  "Restaurant Reservations",
];

function WhatsAppForms() {
  return (
    <>
      <motion.div
        className="w-full min-h-[400px] bg-green-50 flex flex-col justify-center items-center px-6 py-14"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="w-full text-3xl md:text-5xl font-extrabold text-center text-green-900 mb-8"
        >
          WhatsApp Forms
        </motion.h1>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 text-lg text-gray-800 w-full max-w-screen-xl mb-8"
        >
          <li>
            WhatsApp API forms let you capture leads instantly and send automated
            replies to boost conversion rates.
          </li>
        </motion.ul>

        <div className="flex flex-wrap justify-center gap-4 w-full max-w-screen-xl">
          {whatsappButtons.map((label, index) => (
            <motion.button
              key={index}
              className="flex justify-center items-center gap-2 px-6 py-4 border border-green-300 rounded-lg text-green-800 font-medium shadow-md bg-white
                       transform transition-all duration-300 hover:text-white hover:scale-[1.03]"
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: "#22C55E",
                boxShadow: "0 0 10px #22C55E",
                scale: 1.03,
                transition: { duration: 0.15 },
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
              </svg>
              {label}
            </motion.button>
          ))}
        </div>

      </motion.div>

      <div className="w-full max-w-5xl mx-auto px-4 my-6">
        <div className="w-full h-full aspect-video rounded-lg shadow-lg object-cover border-4 border-green-500">
          <video
            src="https://mittosapi.com/assets/MittosAPI%20(2)-CpjgQq6d.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </>
  );
}

export default WhatsAppForms;
