"use client";
import React, { useEffect, useMemo, useState } from "react";

export function FloatingDots({ count = 30, intervalMs = 2000 }) {
  const generateDots = () =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random().toFixed(3)}s`,
      duration: `${(1 + Math.random() * 2).toFixed(3)}s`,
    }));

  const [dots, setDots] = useState(generateDots);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(generateDots());
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse transition-opacity duration-1000 ease-in-out"
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  );
}

function Revenue() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        <FloatingDots />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-green-400">5X</span> YOUR REVENUE
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            with the Power of <span className="text-green-400">AI</span> &amp;{" "}
            <span className="text-green-400">WhatsApp</span>
          </p>
          <div className="relative">
            <div className="flex justify-center gap-6 md:gap-8 md:mb-16 mb-12">
              <div className="relative">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white border-2 border-blue-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300 text-blue-500 shadow-xl relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook w-4 h-4 md:w-8 md:h-8"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div className="absolute  md:top-16  left-1/2 transform -translate-x-1/2">
                  <div className="md:w-[5px] w-[3px] md:h-16 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative overflow-hidden shadow-lg">
                    <div
                      className="absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full"
                      style={{ animation: "2s linear infinite flowDown" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white border-2 border-pink-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300 text-pink-500 shadow-xl relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram w-4 h-4 md:w-8 md:h-8"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
                <div className="absolute  md:top-16  left-1/2 transform -translate-x-1/2">
                  <div className="md:w-[5px] w-[3px] md:h-16 h-12 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full relative overflow-hidden shadow-lg">
                    <div
                      className="absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full"
                      style={{ animation: "2s linear infinite flowDown" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white border-2 border-yellow-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300 text-yellow-300 shadow-xl relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-messages-square w-4 h-4 md:w-8 md:h-8"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                  </svg>
                </div>
                <div className="absolute  md:top-16  left-1/2 transform -translate-x-1/2">
                  <div className="md:w-[5px] w-[3px] md:h-16 h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full relative overflow-hidden shadow-lg">
                    <div
                      className="absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full"
                      style={{ animation: "2s linear infinite flowDown" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white border-2 border-green-400/50 flex items-center justify-center hover:scale-110 transition-all duration-300 text-green-500 shadow-xl relative z-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="w-4 h-4 md:w-8 md:h-8"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                  </svg>
                </div>
                <div className="absolute  md:top-16  left-1/2 transform -translate-x-1/2">
                  <div className="md:w-[5px] w-[3px] md:h-16 h-12 bg-gradient-to-b from-green-300 to-green-500 rounded-full relative overflow-hidden shadow-lg">
                    <div
                      className="absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full"
                      style={{ animation: "2s linear infinite flowDown" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white border-2 border-red-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300 text-red-500 shadow-xl relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail w-4 h-4 md:w-8 md:h-8"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="absolute  md:top-16  left-1/2 transform -translate-x-1/2">
                  <div className="md:w-[5px] w-[3px] md:h-16 h-12 bg-gradient-to-b from-red-400 to-red-600 rounded-full relative overflow-hidden shadow-lg">
                    <div
                      className="absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full"
                      style={{ animation: "2s linear infinite flowDown" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:w-96 w-56 md:h-[5px] h-[3px] bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full relative overflow-hidden shadow-lg">
                <div
                  className="absolute left-0 h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-30"
                  style={{
                    animation: "2.5s linear 0.3s infinite fromLeftToCenter1",
                  }}
                ></div>
                <div
                  className="absolute right-0 h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-30"
                  style={{
                    animation: "2.5s linear 0.3s infinite fromRightToCenter1",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-gray-400 via-purple-500 to-purple-600 rounded-full relative overflow-hidden shadow-lg">
                <div
                  className="absolute w-full h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"
                  style={{ animation: "2s linear infinite flowDown" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-center relative">
              <div
                className="relative md:w-96 md:h-20 h-16 w-56 bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-xl transition-all duration-500"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
                  border: "2px solid rgba(192, 132, 252, 0.5)",
                  transform: "scale(1.05)",
                  boxShadow: "0 0 30px rgba(192, 132, 252, 0.5)",
                }}
              >
                <span className="font-bold md:text-xl text-base relative z-10">
                  Lead Capture
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full relative overflow-hidden shadow-lg">
            <div
              className="absolute w-full h-8 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-100"
              style={{ animation: "2s linear infinite flowDown" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10 rounded-full"></div>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div
            className="relative md:w-64 md:h-20 h-16 w-44 bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-xl transition-all duration-500"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
              border: "2px solid rgba(192, 132, 252, 0.5)",
              transform: "scale(1.05)",
              boxShadow: "0 0 30px rgba(192, 132, 252, 0.5)",
            }}
          >
            <span className="font-bold md:text-[16px] text-[11px] relative z-10 ">
              Mittos API Automation{" "}
            </span>
            <span className="ml-1 bg-white">
              <img
                src="https://mittosapi.com/assets/mittoslogo-C5UnFXGx.png"
                alt="teas"
                className="w-3 md:w-5"
              />
            </span>
          </div>
        </div>

        <div className="flex justify-center md:mb-14 mb-4">
          <div className="relative w-[82%] md:h-20 h-20">
            <div className="absolute top-0 left-1/2  md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-cyan-500 to-green-500 transform -translate-x-1/2 rounded-full shadow-lg">
              <div
                className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.5s linear 1s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:top-16 top-12 left-0 right-0 md:h-[5px] h-[3px] bg-green-500 rounded-full shadow-lg overflow-hidden">
              <div
                className="absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{
                  animation: "2s linear 0.2s infinite flowRight",
                  transform: "translateX(-50%)",
                }}
              ></div>
              <div
                className="absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{
                  animation: "2s linear 0.2s infinite flowLeft",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
            <div className="absolute md:top-[70px] top-[50px] left-[0%]  md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.8s linear 1.5s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:top-[70px] top-[50px]  left-[25%] md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.8s linear 1.7s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:top-[70px] top-[50px] left-[50%]  md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.8s linear 1.9s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:top-[70px] top-[50px] left-[75%]  md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.8s linear 2.1s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:top-[70px] top-[50px] left-[100%] md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.8s linear 2.3s infinite flowDown" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 md:grid-cols-5 md:gap-4 gap-2 md:mb-16 mb-12">
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 md:p-4 rounded-xl border-2 border-green-400/50 text-center hover:border-white transition-all duration-500 shadow-lg relative overflow-hidden ">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bot w-4 h-4 md:w-8 md:h-8 mx-auto md:mb-2 mt-2 md:mt-0 text-white relative z-10"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
              <span className="text-[8px] md:text-sm font-bold relative z-10 ">
                AI Chat
              </span>
            </div>
            <div className="absolute md:-bottom-16 left-1/2 transform -translate-x-1/2">
              <div className=" md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full shadow-lg">
                <div
                  className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-30"
                  style={{ animation: "2s linear 2s infinite flowDown" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-green-600 to-green-700 md:p-4 rounded-xl border-2 border-green-400/50 text-center hover:border-white transition-all duration-500 shadow-lg relative overflow-hidden ">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone w-4 h-4 md:w-8 md:h-8 mx-auto md:mb-2 mt-2 md:mt-0 text-white relative z-10"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-[8px] md:text-sm font-bold relative z-10 ">
                AI Calling
              </span>
            </div>
            <div className="absolute md:-bottom-16 left-1/2 transform -translate-x-1/2">
              <div className=" md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full shadow-lg">
                <div
                  className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-30"
                  style={{ animation: "2s linear 2.3s infinite flowDown" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 md:p-4 rounded-xl border-2 border-green-400/50 text-center hover:border-white transition-all duration-500 shadow-lg relative overflow-hidden ">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-messages-square w-4 h-4 md:w-8 md:h-8 mx-auto md:mb-2 mt-2 md:mt-0 text-white relative z-10"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
              </svg>
              <span className="text-[8px] md:text-sm font-bold relative z-10 ">
                Chatbot
              </span>
            </div>
            <div className="absolute md:-bottom-16 left-1/2 transform -translate-x-1/2">
              <div className=" md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full shadow-lg">
                <div
                  className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-30"
                  style={{ animation: "2s linear 2.6s infinite flowDown" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 md:p-4 rounded-xl border-2 border-green-400/50 text-center hover:border-white transition-all duration-500 shadow-lg relative overflow-hidden ">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl"></div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="w-4 h-4 md:w-8 md:h-8 mx-auto md:mb-2 mt-2 md:mt-0 text-white relative z-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
              </svg>
              <span className="text-[8px] md:text-sm font-bold relative z-10 ">
                WhatsApp
              </span>
            </div>
            <div className="absolute md:-bottom-16 left-1/2 transform -translate-x-1/2">
              <div className=" md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full shadow-lg">
                <div
                  className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-30"
                  style={{ animation: "2s linear 2.9s infinite flowDown" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-red-600 to-red-700 md:p-4 rounded-xl border-2 border-green-400/50 text-center hover:border-white transition-all duration-500 shadow-lg relative overflow-hidden ">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail w-4 h-4 md:w-8 md:h-8 mx-auto md:mb-2 mt-2 md:mt-0 text-white relative z-10"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span className="text-[8px] md:text-sm font-bold relative z-10 ">
                Email
              </span>
            </div>
            <div className="absolute md:-bottom-16 left-1/2 transform -translate-x-1/2">
              <div className=" md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full shadow-lg">
                <div
                  className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full transition-opacity duration-500 opacity-30"
                  style={{ animation: "2s linear 3.2s infinite flowDown" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="md:w-[82%] md:h-[5px] h-[3px] w-[82%] bg-teal-500 rounded-full relative overflow-hidden shadow-lg">
            <div
              className="absolute left-0 h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-30"
              style={{
                animation: "2.5s linear 0.3s infinite fromLeftToCenter",
              }}
            ></div>
            <div
              className="absolute right-0 h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-30"
              style={{
                animation: "2.5s linear 0.3s infinite fromRightToCenter",
              }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className=" md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-teal-500 to-green-600 rounded-full relative overflow-hidden shadow-lg">
            <div
              className="absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-100"
              style={{ animation: "1.8s linear 3s infinite flowDown" }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div
            className="relative md:w-52 md:h-20 h-16 bg-gradient-to-r px-4 md:px-0 from-green-600 to-emerald-600 text-white flex items-center justify-center shadow-xl transition-all duration-500"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
              border: "2px solid rgba(192, 132, 252, 0.5)",
              transform: "scale(1.05)",
              boxShadow: "0 0 30px rgba(192, 132, 252, 0.5)",
            }}
          >
            <span className="font-bold md:text-lg text-sm relative z-10">
              Auto Qualify Lead
            </span>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-green-500 to-yellow-500 rounded-full relative overflow-hidden shadow-lg">
            <div
              className="absolute w-full h-6 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-100"
              style={{ animation: "1.8s linear 3.5s infinite flowDown" }}
            ></div>
          </div>
        </div>

        <div className="text-center ">
          <div className="flex justify-center md:gap-8 gap-2 items-center relative">
            <div className="relative">
              <div className="flex justify-center items-start mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className=" text-green-500"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                </svg>
              </div>
              <span className="md:px-4 px-2 md:py-2 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full md:text-sm text-[8px] font-semibold transition-all duration-300 block ">
                Day 01
              </span>
            </div>
            <div className="relative">
              <div className="flex justify-center items-start mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className=" text-green-500"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                </svg>
              </div>
              <span className="md:px-4 px-2 md:py-2 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full md:text-sm text-[8px] font-semibold transition-all duration-300 block ">
                Day 03
              </span>
            </div>
            <div
              className="relative md:w-36 md:h-16 w-32 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 text-white flex items-center justify-center shadow-xl transition-all duration-500"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
                border: "2px solid rgba(192, 132, 252, 0.5)",
                transform: "scale(1.05)",
                boxShadow: "0 0 30px rgba(192, 132, 252, 0.5)",
              }}
            >
              <span className="font-bold md:text-base text-sm relative z-10">
                Auto Nurture
              </span>
            </div>
            <div className="relative">
              <div className="flex justify-center items-start mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className=" text-green-500"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                </svg>
              </div>
              <span className="md:px-4 px-2 md:py-2 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full md:text-sm text-[8px] font-semibold transition-all duration-300 block ">
                Day 05
              </span>
            </div>
            <div className="relative">
              <div className="flex justify-center items-start mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className=" text-green-500"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                </svg>
              </div>
              <span className="md:px-4 px-2 md:py-2 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-400/30 rounded-full md:text-sm text-[8px] font-semibold transition-all duration-300 block ">
                Day 07
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:mb-16 mb-12">
          <div className="relative md:w-64 w-52 md:h-16 h-12">
            <div className="absolute top-0 left-1/2 md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-orange-500 to-red-500 transform -translate-x-1/2 rounded-full shadow-lg">
              <div
                className="absolute w-full h-4 bg-gradient-to-b from-transparent via-white/60 to-transparent rounded-full transition-opacity duration-500 opacity-30"
                style={{ animation: "1.5s linear 4.5s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:top-16 top-12 left-0 right-0  md:h-[5px]  h-[3px] rounded-full shadow-lg overflow-hidden flex">
              <div className="w-1/2 h-full bg-green-500"></div>
              <div className="w-1/2 h-full bg-red-500"></div>
              <div
                className="absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{
                  animation: "2s linear 0.2s infinite flowRight",
                  transform: "translateX(-50%)",
                }}
              ></div>
              <div
                className="absolute left-1/2 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transition-opacity duration-500 opacity-100"
                style={{
                  animation: "2s linear 0.2s infinite flowLeft",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
            <div className="absolute md:top-[70px] top-[50px] left-[0%] md:w-[5px] md:h-16 w-[3px] h-12 bg-green-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 opacity-30"
                style={{ animation: "1.5s linear 5.2s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:top-[70px]  left-[100%] top-[50px] md:w-[5px] md:h-16 w-[3px] h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 opacity-30"
                style={{ animation: "1.5s linear 5.4s infinite flowDown" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:gap-28 gap-20 mt-12">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 md:px-8 px-4 md:py-4 py-2 rounded-xl border-2 border-green-400/50 shadow-xl shadow-green-500/25 transition-all duration-500 relative overflow-hidden scale-105 shadow-green-500/50 border-green-400">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl animate-pulse"></div>
              <span className="font-bold text-lg relative z-10">Positive</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-red-800 to-red-700 md:px-8 px-4 md:py-4 py-2 rounded-xl border-2 border-red-400/50 shadow-xl shadow-red-500/25 transition-all duration-500 relative overflow-hidden scale-105 shadow-lg shadow-red-500/25 border-red-400">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-emerald-600/20 rounded-xl animate-pulse"></div>
              <span className="font-bold text-lg relative z-10">Negative</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="relative md:w-64 w-52">
            <div className="absolute md:w-[5px] top-0 left-[0%] md:h-16 w-[3px] h-12 bg-green-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.5s linear 5.2s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:w-[5px] md:h-16 w-[3px] top-0 left-[100%] h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.5s linear 5.4s infinite flowDown" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="relative md:w-64 w-52">
            <div className="left-[0%] top-0 absolute md:w-[5px] md:h-16 w-[3px] h-12 bg-green-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.5s linear 5.2s infinite flowDown" }}
              ></div>
            </div>
            <div className="absolute md:w-[5px] left-[100%] top-0 md:h-16 w-[3px] h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full shadow-lg">
              <div
                className="absolute w-full h-2 bg-white/50 rounded-full transition-opacity duration-500 opacity-100"
                style={{ animation: "1.5s linear 5.4s infinite flowDown" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-28 mt-12">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 md:px-4 px-1 md:py-2 py-1 rounded-xl border-2 border-green-400/50 shadow-xl shadow-green-500/25 transition-all duration-500 relative overflow-hidden ">
              <div className="absolute  bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl animate-pulse"></div>
              <span className="font-bold md:text-lg text-sm relative z-10">
                Lead Won
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-red-800 to-red-700 md:px-4 px-1 md:py-2 py-1 rounded-xl border-2 border-red-400/50 shadow-xl shadow-red-500/25 transition-all duration-500 relative overflow-hidden ">
              <div className="absolute  bg-gradient-to-r from-red-600/20 to-emerald-600/20 rounded-xl animate-pulse"></div>
              <span className="font-bold md:text-base text-sm relative z-10">
                Long Nuture
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
