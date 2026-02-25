"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./header";
import FAQSection from "./homepage/faq";
import Footer from "./homepage/footer";
import SidebarMenu from "./sidebarMenu";
import { useRouter } from "next/navigation";
import ScrollToTopButton from "./scroll-to-top";

function CommonLayout({ children }) {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const onNavClick = (url) => {
    setMenu(false);
    console.log(url);
    router.push(url);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`md:hidden absolute top-0 left-0 right-0 h-screen bg-white z-99 ${
          menu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"
        } transition-all duration-700 overflow-hidden flex flex-col`}
      >
        <Header mobileMenu={menu} setMobileMenu={() => setMenu((p) => !p)} />
        <SidebarMenu onNavClick={onNavClick} />
      </div>
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 text-center font-bold text-sm sm:text-base"
        >
          Mixes API for Smart Businesses Automate.Broadcast.Convert.100% scalable & Ban-Safe Platform
        </motion.div>
        <Header mobileMenu={menu} setMobileMenu={() => setMenu((p) => !p)} />
      </div>
      <div className="">
        {children}
        <FAQSection />
        <Footer />
      </div>

      <div className="fixed bottom-7 right-7 flex flex-col items-center gap-1 z-50">
        <a
          className="bg-green-500 p-2 rounded-full  hover:scale-110 transition-transform duration-300 focus:outline-none"
          aria-label="Chat on WhatsApp"
          tabIndex="0"
          href="https://api.whatsapp.com/send/?phone=919594686906&text&type=phone_number&app_absent=0"
        >
          <img
            src="https://mittosapi.com/assets/wpsvg-Dgeggtsl.png"
            alt="WhatsApp"
            className="w-10 h-10"
          />
        </a>
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default CommonLayout;
