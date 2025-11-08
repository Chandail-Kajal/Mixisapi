"use client";
import React from "react";
import { motion } from "framer-motion";

const LogoCard = ({ src, alt, border }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`flex bg-white border-2 border-${border}-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140px] shrink-0`}
  >
    <div className="h-16 w-full flex items-center justify-center p-2">
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  </motion.div>
);

const MarqueeRow = ({ items, reverse }) => (
  <div className="relative mb-6 overflow-hidden">
    <motion.div
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
      className="flex gap-4 whitespace-nowrap"
    >
      {[...items, ...items].map((item, i) => (
        <LogoCard key={i} {...item} />
      ))}
    </motion.div>
  </div>
);

const Founders = () => {
  const row1 = [
    {
      src: "https://mittosapi.com/assets/Prop%20Chk-UzIQCbNe.jpg",
      alt: "PROPCHK",
      border: "red",
    },
    {
      src: "https://mittosapi.com/assets/CalByte-DoE3QarD.jpg",
      alt: "CAL BYTE",
      border: "blue",
    },
    {
      src: "https://mittosapi.com/assets/Neet-BjNpQSHF.jpg",
      alt: "NEET",
      border: "green",
    },
    {
      src: "https://mittosapi.com/assets/hindi-BfD7QHcP.jpg",
      alt: "Hindi Blogger",
      border: "yellow",
    },
    {
      src: "https://mittosapi.com/assets/Suzlon-hroXCK9K.jpg",
      alt: "SUZLON",
      border: "purple",
    },
    {
      src: "https://mittosapi.com/assets/Changi-DdKymiYv.jpg",
      alt: "CHANGI",
      border: "pink",
    },
    {
      src: "https://mittosapi.com/assets/Welspun-BWJq2OaZ.jpg",
      alt: "WELSPUN",
      border: "indigo",
    },
    {
      src: "https://mittosapi.com/assets/Maruti-tEd3_QV1.jpg",
      alt: "MARUTI SUZUKI",
      border: "teal",
    },
    {
      src: "https://mittosapi.com/assets/Licious-Bnhf9n8_.jpg",
      alt: "Licious",
      border: "red",
    },
  ];

  const row2 = [
    {
      src: "https://mittosapi.com/assets/Syngenta-BP1HbZBA.jpg",
      alt: "Syngenta",
      border: "green",
    },
    {
      src: "https://mittosapi.com/assets/Growth-DpJfyku8.jpg",
      alt: "GrowthX",
      border: "yellow",
    },
    {
      src: "https://mittosapi.com/assets/Sobha-nIhhCZlk.jpg",
      alt: "SOBHA",
      border: "purple",
    },
    {
      src: "https://mittosapi.com/assets/Angel-BDiGVoif.jpg",
      alt: "AngelOne",
      border: "pink",
    },
    {
      src: "https://mittosapi.com/assets/Express-DPkwetRv.jpg",
      alt: "The Indian EXPRESS",
      border: "indigo",
    },
    {
      src: "https://mittosapi.com/assets/Iskcon-BFNsD51x.jpg",
      alt: "ISKCON",
      border: "teal",
    },
    {
      src: "https://mittosapi.com/assets/Skull-MCSlYmVL.jpg",
      alt: "Skullcandy",
      border: "red",
    },
    {
      src: "https://mittosapi.com/assets/WeLend-CWe1I9id.jpg",
      alt: "WeLend",
      border: "blue",
    },
    {
      src: "https://mittosapi.com/assets/ZA-C9AmZ14g.jpg",
      alt: "ZA Insure",
      border: "green",
    },
  ];

  const row3 = [
    {
      src: "https://mittosapi.com/assets/hindi-BfD7QHcP.jpg",
      alt: "Hindi Blogger",
      border: "purple",
    },
    {
      src: "https://mittosapi.com/assets/Suzlon-hroXCK9K.jpg",
      alt: "SUZLON",
      border: "purple",
    },
    {
      src: "https://mittosapi.com/assets/Changi-DdKymiYv.jpg",
      alt: "CHANGI",
      border: "pink",
    },
    {
      src: "https://mittosapi.com/assets/Welspun-BWJq2OaZ.jpg",
      alt: "WELSPUN",
      border: "indigo",
    },
    {
      src: "https://mittosapi.com/assets/Maruti-tEd3_QV1.jpg",
      alt: "MARUTI SUZUKI",
      border: "teal",
    },
    {
      src: "https://mittosapi.com/assets/Licious-Bnhf9n8_.jpg",
      alt: "Licious",
      border: "red",
    },
    {
      src: "https://mittosapi.com/assets/Syngenta-BP1HbZBA.jpg",
      alt: "Syngenta",
      border: "green",
    },
    {
      src: "https://mittosapi.com/assets/Growth-DpJfyku8.jpg",
      alt: "GrowthX",
      border: "yellow",
    },
    {
      src: "https://mittosapi.com/assets/Sobha-nIhhCZlk.jpg",
      alt: "SOBHA",
      border: "purple",
    },
  ];

  // Reusable animated row

  return (
    <section className="py-6 bg-[#EBFFF1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
        >
          Founders &amp; Marketers <span className="text-red-500">Love</span> us
        </motion.h2>
        <motion.p
          className="text-base text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Trusted by 50,000+ Businesses across 20+ Countries
        </motion.p>
      </div>

      {/* Animated marquee rows */}
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
      <MarqueeRow items={row3} />
    </section>
  );
};

export default Founders;
