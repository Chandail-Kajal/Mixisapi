"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Founders = () => {
  const [number, setNumber] = useState(100.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        const next = prev > 0 ? prev - 0.1 : 100;
        return parseFloat(next.toFixed(3));
      });
    }, 1);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(number);
  }, [number]);
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
          <h2>
            Founders &amp; Marketers <span className="text-red-500">Love</span>{" "}
            us
          </h2>
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
      <div className="relative mb-6 overflow-hidden">
        <motion.div
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          animate={{ x: ["0%", "-100%"] }}
          className="flex gap-4 whitespace-nowrap"
        >
          <div className="flex bg-white border-2 border-red-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140px] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Prop%20Chk-UzIQCbNe.jpg"
                alt="PROPCHK"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140px] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/CalByte-DoE3QarD.jpg"
                alt="CAL BYTE"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-green-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Neet-BjNpQSHF.jpg"
                alt="NEET"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-yellow-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/hindi-BfD7QHcP.jpg"
                alt="hindi BLOGGER"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Suzlon-hroXCK9K.jpg"
                alt="SUZLON"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-pink-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Changi-DdKymiYv.jpg"
                alt="CHANGI"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-indigo-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Welspun-BWJq2OaZ.jpg"
                alt="WELLSPUN"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-teal-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Maruti-tEd3_QV1.jpg"
                alt="MARUTI SUZUKI"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-red-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/Licious-Bnhf9n8_.jpg"
                alt="Licious"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-blue-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Prop%20Chk-UzIQCbNe.jpg"
                alt="PROPCHK"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-green-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/CalByte-DoE3QarD.jpg"
                alt="CAL BYTE"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-yellow-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Neet-BjNpQSHF.jpg"
                alt="NEET"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-yellow-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/hindi-BfD7QHcP.jpg"
                alt="hindi BLOGGER"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Suzlon-hroXCK9K.jpg"
                alt="SUZLON"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-pink-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Changi-DdKymiYv.jpg"
                alt="CHANGI"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-indigo-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Welspun-BWJq2OaZ.jpg"
                alt="WELLSPUN"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-teal-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Maruti-tEd3_QV1.jpg"
                alt="MARUTI SUZUKI"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-red-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/Licious-Bnhf9n8_.jpg"
                alt="Licious"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative mb-6 overflow-hidden">
        <motion.div
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          animate={{ x: ["-100%", "0%"] }}
          className="flex gap-4 whitespace-nowrap"
        >
          <div className="flex gap-4 whitespace-nowrap">
            <div className="flex bg-white border-2 border-green-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Syngenta-BP1HbZBA.jpg"
                  alt="syngeta"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-yellow-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Growth-DpJfyku8.jpg"
                  alt="GrowthX"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Sobha-nIhhCZlk.jpg"
                  alt="SOBHA"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-pink-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Angel-BDiGVoif.jpg"
                  alt="AngelOne"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-indigo-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="	https://mittosapi.com/assets/Express-DPkwetRv.jpg"
                  alt="The Indian EXPRESS"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-teal-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Iskcon-BFNsD51x.jpg"
                  alt="ISKCON"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-red-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Skull-MCSlYmVL.jpg"
                  alt="Skullcandy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-blue-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="	https://mittosapi.com/assets/WeLend-CWe1I9id.jpg"
                  alt="WeLend"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-green-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/ZA-C9AmZ14g.jpg"
                  alt="ZA Insure"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-green-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="	https://mittosapi.com/assets/Syngenta-BP1HbZBA.jpg"
                  alt="syngeta"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-yellow-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Growth-DpJfyku8.jpg"
                  alt="GrowthX"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Sobha-nIhhCZlk.jpg"
                  alt="SOBHA"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-pink-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Angel-BDiGVoif.jpg"
                  alt="AngelOne"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-indigo-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="	https://mittosapi.com/assets/Express-DPkwetRv.jpg"
                  alt="The Indian EXPRESS"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-teal-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Iskcon-BFNsD51x.jpg"
                  alt="ISKCON"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-red-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/Skull-MCSlYmVL.jpg"
                  alt="Skullcandy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-blue-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="	https://mittosapi.com/assets/WeLend-CWe1I9id.jpg"
                  alt="WeLend"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="flex bg-white border-2 border-green-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
              <div className="h-16 w-full flex items-center justify-center p-2">
                <img
                  src="https://mittosapi.com/assets/ZA-C9AmZ14g.jpg"
                  alt="ZA Insure"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative mb-6 overflow-hidden">
        <motion.div
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          animate={{ x: ["0%", "-100%"] }}
          className="flex gap-4 whitespace-nowrap"
        >
          <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140px] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/hindi-BfD7QHcP.jpg"
                alt="hindi BLOGGER"
                className="max-h-full maxc-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Suzlon-hroXCK9K.jpg"
                alt="SUZLON"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-pink-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Changi-DdKymiYv.jpg"
                alt="CHANGI"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-indigo-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Welspun-BWJq2OaZ.jpg"
                alt="WELLSPUN"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-teal-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Maruti-tEd3_QV1.jpg"
                alt="MARUTI SUZUKI"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-red-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/Licious-Bnhf9n8_.jpg"
                alt="Licious"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-green-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/Syngenta-BP1HbZBA.jpg"
                alt="syngeta"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-yellow-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Growth-DpJfyku8.jpg"
                alt="GrowthX"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Sobha-nIhhCZlk.jpg"
                alt="SOBHA"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140px] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/hindi-BfD7QHcP.jpg"
                alt="hindi BLOGGER"
                className="max-h-full maxc-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Suzlon-hroXCK9K.jpg"
                alt="SUZLON"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-pink-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Changi-DdKymiYv.jpg"
                alt="CHANGI"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-indigo-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Welspun-BWJq2OaZ.jpg"
                alt="WELLSPUN"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-teal-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Maruti-tEd3_QV1.jpg"
                alt="MARUTI SUZUKI"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-red-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/Licious-Bnhf9n8_.jpg"
                alt="Licious"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-green-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="	https://mittosapi.com/assets/Syngenta-BP1HbZBA.jpg"
                alt="syngeta"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-yellow-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Growth-DpJfyku8.jpg"
                alt="GrowthX"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="flex bg-white border-2 border-purple-500 rounded-lg shadow duration-200 min-w-[140] shrink-0">
            <div className="h-16 w-full flex items-center justify-center p-2">
              <img
                src="https://mittosapi.com/assets/Sobha-nIhhCZlk.jpg"
                alt="SOBHA"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Founders;
