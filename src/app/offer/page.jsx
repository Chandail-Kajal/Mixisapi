import Founders from "@/components/homepage/founders";
import PlatformComparison from "@/components/homepage/platform-comparison";
import Terminologie from "@/components/homepage/terminologie";
import AffordablePlans from "@/components/pricing/affordable-plans";
import CompareSection from "@/components/pricing/compare";
import TutorialVideos from "@/components/pricing/tutorial-videos";
import React from "react";

const OffersPage = () => {
  return (
    <section>
      <div className="flex justify-center items-center py-10 p-6">
        <div
          className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900/80 via-emerald-900/60 to-gray-800/90 backdrop-blur-xl border
             border-emerald-600/40 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.4)] overflow-hidden p-10 text-center"
        >
          <div
            className="absolute inset-0 rounded-3xl border-[3px] border-transparent bg-gradient-to-r from-yellow-300 via-emerald-400 to-green-400 opacity-30 blur-md 
                animate-[spin_12s_linear_infinite]"
          ></div>
          <div
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-black font-extrabold px-5 py-2 
                rounded-full text-sm mb-8 shadow-lg uppercase tracking-wide"
          >
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
              className="lucide lucide-sparkles w-4 h-4 text-yellow-700"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              <path d="M5 3v4"></path>
              <path d="M19 17v4"></path>
              <path d="M3 5h4"></path>
              <path d="M17 19h4"></path>
            </svg>
            Exclusive Offer — Limited Period
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Switch to
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 text-transparent bg-clip-text px-1">
              Mittos API
            </span>
            & Unlock Premium Savings
          </h2>
          <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Upgrade your WhatsApp API experience and grab an
            <span className="text-yellow-300 font-semibold px-1">
              unbelievable 50% OFF
            </span>
            for the first
            <span className="text-emerald-300 font-bold px-1">100 Members</span>
            . Don’t wait — this exclusive offer won’t last long!
          </p>
          <div className="relative mx-auto my-10 max-w-md">
            <div className="relative bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 text-white text-5xl font-extrabold py-8 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.6)] overflow-hidden">
              <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                🔥 50% OFF NOW!
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shine_2s_infinite]"></span>
            </div>
          </div>
          <button
            className="relative flex mx-auto bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 text-white font-bold py-4 px-12 rounded-full text-xl shadow-[0_8px_30px_rgba(34,197,94,0.6)]
             hover:shadow-[0_10px_40px_rgba(34,197,94,0.8)] transition-all duration-500 overflow-hidden uppercase tracking-wide"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"></span>
            Switch Now
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
              className="lucide lucide-arrow-right w-6 h-6"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shine_1.8s_infinite]"></span>
          </button>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/20 blur-2xl rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
      <div className="w-full text-white text-center py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-semibold tracking-wide shadow-md relative overflow-hidden"></div>
      <CompareSection />
      <AffordablePlans />
      <TutorialVideos />
      <PlatformComparison />
      <Founders />
      <Terminologie />
    </section>
  );
};
export default OffersPage;
