"use client";
import React from "react";
import { motion } from "framer-motion";

function WhatsappAds() {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            viewport={{ amount: 0.3, once: true }}
            // style="opacity: 1; transform: none;"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              // style="opacity: 1; transform: none;"
            >
              Skyrocket Lead Generation With{" "}
              <span className="text-green-600">Click To WhatsApp Ads</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              // style="opacity: 1; transform: none;"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, transition: { duration: 0.7 }, y: 0 },
              }}
            >
              Never miss leads, even without phone numbers! Engage customers
              directly on WhatsApp, nurture leads affordably, sell in real time,
              and shorten your sales funnel effortlessly with CTWA marketing.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, transition: { duration: 0.7 }, y: 0 },
              }}
              // style="opacity: 1; transform: none;"
            >
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Get Started
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
            // style="opacity: 1; transform: none;"
          >
            <div className="relative">
              <img
                src="https://mittosapi.com/assets/CTWA-Dsmx2V_-.png"
                alt="Click to WhatsApp Ads Example"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhatsappAds;
