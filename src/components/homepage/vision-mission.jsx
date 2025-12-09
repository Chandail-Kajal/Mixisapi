import React from "react";

const VisionMission = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-10 text-center">
      <h2 className="max-w-xl mx-auto text-4xl md:text-5xl font-extrabold text-gray-900">
        Vision &amp; Mission <span className="text-green-600">Statements</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-10">
        {/* Vision Card */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col items-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500 w-14 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              To empower businesses to grow their revenues through seamless
              communication with their users. We aim to drive revenue for our
              clients globally and continue building tools that help them grow
              the chunk of revenue they drive because of our existence.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col items-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-14 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
            <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Becoming market leaders by empowering 5 Million+ businesses via
              MixisAPI. Let's build the most amazing, mission-driven, and loved
              brands in history!
            </p>
          </div>
        </div>
      </div>

      {/* Join Team Section */}
      <div className="mt-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Wish to Join our <span className="text-green-600">Team?</span>
        </h3>
        <p className="text-gray-600 mb-3">We're hiring across multiple roles.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default VisionMission;
