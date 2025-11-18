import Founders from "@/components/homepage/founders";
import Popup from "@/components/popup";
import AffordablePlans from "@/components/pricing/affordable-plans";
import CompareSection from "@/components/pricing/compare";
import Last from "@/components/pricing/last";
import PlatformComparison from "@/components/pricing/platform-comparison";
import Terminologie from "@/components/pricing/terminologie";
import TutorialVideos from "@/components/pricing/tutorial-videos";
import React from "react";

function PricingPage() {
  return (
    <div className="flex-grow">
      <Popup>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Congratulations
        </h2>
        <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-4">
          <span className="text-yellow-600 animate-pulse">Save 7-8X</span>
        </p>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-green-600 mb-4 bg-green-50 py-2 px-4 rounded-lg inline-block">
          on Broadcasting
        </p>
      </Popup>
      <div>
        <div className="w-full text-white text-center py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-semibold tracking-wide shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-700 to-black bg-[length:300%_300%] animate-gradient"></div>
          <div className="relative z-10 text-2xl">
            Convert{" "}
            <span className="font-extrabold text-yellow-300">Marketing</span>{" "}
            <span className="text-white">Templates into</span>{" "}
            <span className="text-yellow-300 font-extrabold">Utility</span>={" "}
            <span className="font-extrabold text-yellow-300 relative text-2xl sm:text-3xl md:text-4xl">
              Save 7 -8x
            </span>{" "}
            on Broadcasting
          </div>
        </div>
        <CompareSection />
        <AffordablePlans />
        <TutorialVideos />
        <PlatformComparison />
        <Founders />
        <Terminologie />
        <Last />
      </div>
    </div>
  );
}

export default PricingPage;
