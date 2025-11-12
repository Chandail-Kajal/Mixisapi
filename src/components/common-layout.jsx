"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "./header";
import FAQSection from "./homepage/faq";
import Footer from "./homepage/footer";

function CommonLayout({ children }) {
    return (
        <>
            <div className="w-full">
                <div className="[background-image:linear-gradient(rgba(59,130,246,0.1)_1px,transparent_0),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_0)] [background-size:35px_35px]">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 text-center font-bold text-sm sm:text-base"
                    >
                        WhatsApp Official API – Broadcast Messages, Automate, Engage & Close
                        Deals Faster!
                    </motion.div>
                    <Header />
                </div>
            </div>
            {children}
            <FAQSection />
            <Footer />
        </>
    );
}

export default CommonLayout;
