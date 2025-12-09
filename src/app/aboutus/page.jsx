import Founders from "@/components/homepage/founders";
import VisionMission from "@/components/homepage/vision-mission";
import React from "react";

const AboutMittosAPI = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-col items-center gap-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            About <span className="text-green-600">MixisAPI</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We're a team of <span className="font-semibold">35+ hustlers</span>,
            helping <span className="font-semibold">50,000+ businesses</span> 3x
            their revenue via WhatsApp.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We are an{" "}
            <span className="font-semibold">
              Official WhatsApp Tech Provider Partner
            </span>
            , recognized as the world’s most trusted and affordable complete
            business automation API platform. Awarded by{" "}
            <span className="font-semibold">Mr. Ashneer Grover</span> in 2024.
          </p>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
            Know More
          </button>
        </div>
        

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300">
            <img
              src="https://mittosapi.com/assets/Award-C0veRN4t.webp"
              alt="MittosAPI Award"
              className="w-80 h-full object-cover"
            />
          </div>
        </div>
        

      </div>
      <div>
        <Founders/>
        <VisionMission/>
      </div>
      </div>
    </section>
  );
};

export default AboutMittosAPI;
