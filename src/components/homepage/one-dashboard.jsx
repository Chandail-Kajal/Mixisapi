"use client";
import React from "react";
import { motion } from "framer-motion";

function OneDashboard() {
  const visible = (e) => ({
    opacity: 1,
    y: 0,
    transition: { delay: e * 0.15, duration: 0.7, type: "spring" },
  });

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100">
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-20">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.6, once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible,
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Coordinate your sales team <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
              from one dashboard
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            Automatically assign leads to the right person, share resources, and
            track performance in real-time with beautiful charts and interactive
            team insights.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.nav
        custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{amount:0.6, once:true}}
          variants={{hidden:{opacity:0, y:40}, visible}}
          className="bg-white shadow-lg rounded-full px-4 sm:px-8 py-3 flex items-center justify-center mt-8 sm:mt-12 overflow-x-auto"
        >
          <ul className="flex space-x-2 sm:space-x-6 text-gray-600 font-medium whitespace-nowrap">
            {["Clients", "Follow Ups", "Team", "Content", "Integrations"].map(
              (item) => (
                <motion.li  variants={{hidden:{opacity:0, y:40}, visible}} key={item}>
                  <button
                    className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full transition text-sm sm:text-base hover:bg-gray-100 ${
                      item === "Team"
                        ? "bg-gradient-to-r from-green-300 to-green-500 text-white shadow"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                </motion.li>
              )
            )}
          </ul>
        </motion.nav>

        {/* Dashboard Cards */}
        <motion.div 
        custom={3}
        initial="hidden"
        whileInView="visible"
         variants={{hidden:{opacity:0, y:40}, visible}}
         viewport={{amount:0.4, once:true}}
        className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Chart + Stats */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.div  variants={{hidden:{opacity:0, y:40}, visible}} custom={5} className="flex-1 shadow-2xl border rounded-3xl p-4 sm:p-6 bg-white hover:shadow-green-200 transition">
              <h3 className="text-green-500 font-bold text-lg sm:text-xl">
                98.5%
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4">
                Leads contacted
              </p>

              {/* Placeholder for chart */}
              <div className="h-48 sm:h-56 flex items-center justify-center text-gray-400 text-sm border border-dashed rounded-lg">
                Chart placeholder
              </div>
            </motion.div>

            {/* Avg Response */}
            <motion.div  variants={{hidden:{opacity:0, y:40}, visible}} custom={6} className="w-full sm:w-44 shadow-xl border rounded-3xl p-4 sm:p-6 bg-green-600 text-center text-white flex flex-col justify-center hover:scale-105 transition">
              <p className="text-xs sm:text-sm opacity-90">
                Avg. response time
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 sm:mt-2">
                13 mins
              </h3>
              <p className="text-xs opacity-80 mt-1">for contacted clients</p>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div  variants={{hidden:{opacity:0, y:40}, visible}} custom={7} className="relative flex flex-col items-center mt-8 sm:mt-0">
            {/* Admin */}
            <motion.div  variants={{hidden:{opacity:0, y:40}, visible}} custom={8} className="bg-gradient-to-r from-green-100 to-green-100 border-2 border-green-300 rounded-2xl p-4 sm:p-5 shadow-lg text-center w-36 sm:w-44 hover:shadow-xl transition">
              <img
                src="https://i.pravatar.cc/100?img=1"
                alt="Full Team Admin"
                className="mx-auto h-12 sm:h-14 w-12 sm:w-14 rounded-full object-cover shadow-md"
              />
              <p className="mt-2 sm:mt-3 font-semibold text-gray-800 text-sm sm:text-base">
                Full Team Admin
              </p>
            </motion.div>

            {/* Vertical Connection */}
            <div className="relative w-1 h-8 sm:h-12 bg-green-300 rounded-full overflow-hidden">
              <span className="absolute left-0 w-2 h-2 bg-green-500 rounded-full animate-moveDotY"></span>
            </div>

            {/* Subteams */}
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-10">
              <div className="hidden sm:block absolute top-16 left-0 right-0 h-1 bg-green-300 rounded-full overflow-hidden">
                <span className="absolute top-0 h-2 w-2 bg-green-500 rounded-full animate-moveDotX"></span>
              </div>

              {[
                { img: 10, name: "Subteam 1" },
                { img: 11, name: "Subteam 2" },
                { img: 12, name: "Subteam 3" },
              ].map(({ img, name },i) => (
                <motion.div
                 variants={{hidden:{opacity:0, y:40}, visible}}
                 custom={9+i}
                  key={name}
                  className="relative z-10 bg-white border-2 border-green-200 rounded-2xl p-3 sm:p-5 shadow-md text-center w-28 sm:w-32 hover:scale-105 hover:shadow-green-200 transition"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${img}`}
                    alt={name}
                    className="mx-auto h-10 sm:h-12 w-10 sm:w-12 rounded-full object-cover shadow-sm"
                  />
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-700">
                    {name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Animations */}
        <style>{`
          @keyframes moveDotY {
            0% { transform: translateY(0); opacity: 0; }
            30% { opacity: 1; }
            70% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          @keyframes moveDotX {
            0% { transform: translateX(0); opacity: 0; }
            30% { opacity: 1; }
            70% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .animate-moveDotY { animation: moveDotY 1.5s linear infinite; }
          .animate-moveDotX { animation: moveDotX 2s linear infinite; }
        `}</style>
      </div>
    </section>
  );
}

export default OneDashboard;
