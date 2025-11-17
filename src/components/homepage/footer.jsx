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
            <span><FaMapMarkerAlt/></span> 1207, 12th Floor, Paradise Tower, Thane, Maharashtra
            400602
          </p>
          <p className="flex items-center gap-2 mt-3 text-gray-300">
            <span className="text-gray-500"><FaPhone /></span>Sales: +91 90046 45256
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <span className="text-gray-500"><FaPhone /></span> Support: +91 9594 6869 06
          </p>
          <p className="flex items-center gap-2 mt-3 text-gray-300">
            <span><IoMdMail/>
            </span> sales@mittosapi.com
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <span>📧</span> support@mittosapi.com
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
