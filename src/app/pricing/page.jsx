import Founders from "@/components/homepage/founders";
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
