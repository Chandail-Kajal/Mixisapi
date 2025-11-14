"use client";
import Founders from "@/components/homepage/founders";
import React from "react";

export default function Reseller
() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <div className="flex-grow">
        <div className="overflow-x-hidden">
          <section className="w-full bg-gradient-to-br from-green-50 via-white to-green-100 overflow-x-hidden">

            {/* TOP BANNER */}
            <div className="w-full bg-gradient-to-r from-green-600 via-green-700 to-black text-white text-center py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-semibold tracking-wide shadow-md">
              Start Selling → <span className="font-extrabold">WhatsApp API + Call Tracker</span> = 
              <span
                className="font-extrabold text-yellow-300 relative text-2xl sm:text-3xl md:text-4xl"
                style={{
                  textShadow:
                    "rgb(0, 0, 0) 3px 3px 0px, rgba(0, 0, 0, 0.5) 4px 4px 0px, rgba(0, 0, 0, 0.5) 6px 6px 8px",
                }}
              >
                2X Profits
              </span>
              {" "}only with <span className="font-extrabold">MittosAPI</span>
            </div>

            {/* HERO SECTION */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-12 gap-8">
              <div className="grid lg:grid-cols-2 gap-2 items-center">
                <div className="lg:col-span-6 flex flex-col justify-center space-y-4 text-center lg:text-left">
                  <h1 className="text-4xl sm:text-4xl lg:text-8xl font-extrabold leading-tight">
                    <br />
                    <span className="animated-gradient-text">
                      Become a <span className="text-green-600">MittosAPI <br /> Reseller</span>
                    </span>
                  </h1>

                  <h2 className="text-3xl sm:text-6xl font-semibold text-green-600">
                    Build Your New Revenue Stream
                  </h2>

                  <p className="text-lg sm:text-2xl text-gray-600 font-normal">
                    Add the Smartest WhatsApp Engagement Platform to your offerings and start scaling your business with confidence. Easy to start, powerful to grow.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2">
                    <button className="px-8 sm:px-10 py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 hover:shadow-xl transition text-lg sm:text-xl md:text-2xl">
                      Become a Reseller →
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-center relative mt-10 lg:mt-0">
                <div className="relative rounded-2xl shadow-[0_0_60px_rgba(34,197,94,0.6)]">
                  <img
                    src="https://mittosapi.com/assets/Aimage-NQ-vx0ky.png"
                    alt="Reseller Handshake"
                    className="relative w-44 sm:w-56 md:w-80 lg:w-80 xl:w-96 object-contain rounded-2xl"
                    style={{ transform: "none", opacity: 1 }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
            <div className="text-center mb-14">
              <h1 className="text-5xl font-extrabold text-gray-900">
                Deep dive into <span className="text-green-600">Mittos API</span> Partner Models
              </h1>
              <p className="mt-3 text-lg text-gray-600 font-medium">MittosAPI Reseller Plan</p>
              <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* CARD 1 */}
              {[
                { count: "5", price: "9,999", link: "https://u.payu.in/eIVlRUuYWr4p" },
                { count: "10", price: "14,999", link: "https://u.payu.in/GIURdPijRoU0" },
                { count: "25", price: "24,999", link: "https://u.payu.in/1JA7SQ9tJI0P" },
                { count: "50", price: "29,999", link: "https://u.payu.in/dIPM7a3zeuIJ" },
                { count: "100", price: "39,999", link: "https://u.payu.in/DI6bc95ZYWK9" },
                { count: "Unlimited", price: "49,999", link: "https://u.payu.in/3IXRIPQjgMZD" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-8 text-center border border-gray-200 bg-white shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    <span className="text-green-600">{item.count}</span> Accounts
                  </h2>
                  <p className="text-2xl font-semibold text-gray-800 mb-4">Rs. {item.price}</p>
                  <p className="text-gray-600 text-sm mb-6">All Accounts Yearly Access</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition inline-block"
                  >
                    Get Access
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* WHY PARTNER */}
          <section className="bg-white py-4 px-6 lg:px-20">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
                Why Partner with{" "}
                <span className="bg-gradient-to-r from-green-600 to-black bg-clip-text text-transparent">
                  Mittos Api ?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto text-center mb-16">
              <div>
                <p className="text-4xl text-green-600 font-extrabold">700+</p>
                <p className="mt-2 text-gray-600 font-medium">Resellers</p>
              </div>

              <div>
                <p className="text-4xl text-green-600 font-extrabold">50 Cr+</p>
                <p className="mt-2 text-gray-600 font-medium">API Credits Used</p>
              </div>

              <div>
                <p className="text-4xl text-green-600 font-extrabold">50000+</p>
                <p className="mt-2 text-gray-600 font-medium">Accounts Sold</p>
              </div>

              <div>
                <p className="text-4xl text-green-600 font-extrabold">30+</p>
                <p className="mt-2 text-gray-600 font-medium">Tech Partners</p>
              </div>
            </div>
          </section>

          {/* FINAL CTA SECTION */}
          <section className="bg-white py-8 px-6 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
                Become a Mittos<span className="text-green-600">API</span> Reseller
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto text-center">
              {/* Wallet */}
              <div className="flex flex-col items-center md:items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-wallet w-8 h-8 text-green mb-3"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
                <h4 className="text-lg font-semibold text-gray-900">No Price Bondation</h4>
                <p className="text-sm text-gray-600">Sell WhatsApp API at Your Price</p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center md:items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone-call w-8 h-8 text-black mb-3"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                  <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>
                <h4 className="text-lg font-semibold text-gray-900">Onboarding Support</h4>
                <p className="text-sm text-gray-600">Our team helps you onboard customers easily</p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center md:justify-end">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center space-x-2 transition">
                  <span>Start Now</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </section>

          {/* FOUNDERS LOVE US */}
          <section className="py-6 bg-[#EBFFF1] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                <h2>Founders &amp; Marketers <span className="text-red-500">Love</span> us</h2>
              </h2>
              <p className="text-base text-gray-600">
                Trusted by 50,000+ Businesses across 20+ Countries
              </p>
            </div>

            <div className="relative mb-6 overflow-hidden"></div>
          </section>

        </div>
        <Founders/>
      </div>
    </div>
  );
}
