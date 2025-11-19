"use client";
import React from "react";
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      {/* Top Green Bar */}
      <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-white shadow-lg">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1041/1041883.png"
            alt="Payment"
            className="w-8 h-8"
          />
          <div>
            <p className="font-bold text-lg">ONLINE PAYMENT</p>
            <p className="text-sm opacity-90">Payment methods</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt="Support"
            className="w-8 h-8"
          />
          <div>
            <p className="font-bold text-lg">24/7 SUPPORT</p>
            <p className="text-sm opacity-90">Unlimited help desk</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1041/1041902.png"
            alt="Safe"
            className="w-8 h-8"
          />
          <div>
            <p className="font-bold text-lg">100% SAFE</p>
            <p className="text-sm opacity-90">Safe And Secure</p>
          </div>
        </div>

        <button className="px-8 py-3 mt-4 sm:mt-0 rounded-xl font-semibold shadow-md bg-gradient-to-r from-green-400 via-green-500 to-green-700 hover:from-green-500 hover:to-green-400 transition duration-300 transform hover:scale-105">
          Book Demo
        </button>
      </div>

      {/* Main Footer Grid */}
      <div className="px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-green-400 text-3xl font-bold tracking-wide">
            Mittos API
          </h2>
          <p className="text-sm mt-3 leading-relaxed text-gray-300">
            Broadcast Messages, Automate, Engage, Sell – Do Everything with
            India’s No.1 WhatsApp Official API Platform.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Powered by Official WhatsApp APIs ⚡
          </p>
          <p className="mt-2 text-sm text-gray-400">
            India | Singapore | UAE | USA
          </p>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="mt-5 w-40 hover:scale-105 transition"
          />

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-2xl">
            <a
              href="#"
              className="hover:text-green-400 transition transform hover:scale-110"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition transform hover:scale-110"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition transform hover:scale-110"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Column 2 - Contact */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-green-400">
            📞 Contact Us
          </h3>
          <p className="flex items-center gap-2 text-gray-300">
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            1207, 12th Floor, Paradise Tower, Thane, Maharashtra 400602
          </p>
          <p className="flex items-center gap-2 mt-3 text-gray-300">
            <span className="text-gray-300">
              <FaPhone />
            </span>
            Sales: +91 90046 45256
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <span className="text-gray-300">
              <FaPhone />
            </span>{" "}
            Support: +91 9594 6869 06
          </p>
          <p className="flex items-center gap-2 mt-3 text-gray-300">
            <span>
              <IoMdMail />
            </span>{" "}
            sales@mittosapi.com
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <span>
              <IoMdMail />
            </span>{" "}
            support@mittosapi.com
          </p>
          <p className="mt-4 text-gray-400 italic">Made with ❤️ in India</p>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-green-400">
            ⚡ Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-green-400 transition">
              <a href="/">
                Features{" "}
                <span className="bg-green-600 text-xs px-2 py-1 rounded ml-2 animate-pulse">
                  LOWEST PRICING
                </span>
              </a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/pricing">
                › Pricing{" "}
                <span className="bg-green-600 text-xs px-2 py-1 rounded ml-2 animate-pulse">
                  150+ PARTNERS
                </span>
              </a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/partner">› Partner With Us</a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/demo">› Request Demo</a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/blog">› Blog</a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/contact">› Contact Us</a>
            </li>
          </ul>
          <div className="rounded-xl flex items-center justify-start w-50 m-4 shadow-md hover:shadow-xl transition-all">
          <img src="data:image/webp;base64,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"
                  alt="Meta Logo" className="h-26"/>
      </div>

        </div>
        
        {/* Column 4 - Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-green-400">
            🔗 Important Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-green-400 transition">
              <a href="/privacy-policy">› Privacy Policy</a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/terms-of-service">› Terms of Service</a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/cancellation-refund-policy">
                › Cancellation & Refund Policy
              </a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/aboutus">› About Us</a>
            </li>
            <li className="hover:text-green-400 transition">
              <a href="/disclaimer">› Disclaimer</a>
            </li>
            <li className="hover:text-green-400 transition">› Login</li>
          </ul>
        </div>
      </div>
      

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 px-6 py-5 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex justify-center gap-4 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
            alt="American Express"
            className="h-6"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/visa-electron-logo-png-transparent.png"
            alt="Visa Electron"
            className="h-6"
          />
        </div>
        <p className="text-sm text-gray-400 text-center sm:text-right">
          © 2025 Soflers India Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
