"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./header";
import FAQSection from "./homepage/faq";
import Footer from "./homepage/footer";
import SidebarMenu from "./sidebarMenu";
import { useRouter } from "next/navigation";

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
        className={`absolute top-0 left-0 right-0 h-screen bg-white z-99 ${
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
          WhatsApp Official API – Broadcast Messages, Automate, Engage & Close
          Deals Faster!
        </motion.div>
        <Header mobileMenu={menu} setMobileMenu={() => setMenu((p) => !p)} />
      </div>
      <div className="[background-image:linear-gradient(rgba(59,130,246,0.1)_1px,transparent_0),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_0)] [background-size:35px_35px]">
        {children}
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default CommonLayout;
