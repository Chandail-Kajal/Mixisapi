import React from "react";

const ComplianceSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto border-t-4 border-green-500 pt-12 z-10">
        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 flex flex-col md:flex-row items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              className="size-6 text-green-600 mr-0 md:mr-3 mb-3 md:mb-0 text-3xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
            </svg>
            MittosAPI is{" "}
            <span className="ml-0 md:ml-2 bg-gradient-to-r from-green-600 to-green-600 text-transparent bg-clip-text">
              Enterprise Ready!
            </span>
          </h2>

          <div className="h-1 w-3/4 md:w-1/2 lg:w-2/5 bg-gradient-to-r from-green-600 to-green-600 mx-auto mt-3 rounded-full"></div>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {`To ensure seamless operations, security, privacy and compliance
            needs to be coherent. MittosAPI is SOC2 Type 2, ISO 27001:2022, GST,
            and MSME certified. We ensure that customers’ data is protected
            without any lapses in security. You're safe with us.`}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              img: "https://mittosapi.com/assets/SOClogo-Clj2nWT2.jpg",
              title: "SOC2 Type 2 Compliant",
              color: "text-yellow-500",
              desc: "We take pride in our SOC2 Type 2 Compliance, showcasing our dedication to rigorous audits, stringent controls, and comprehensive risk management. Your trust is our top priority.",
            },
            {
              img: "https://mittosapi.com/assets/ISOlogo-BEb8dqMU.webp",
              title: "ISO 27001:2022 Certified",
              color: "text-green-500",
              desc: "Our steadfast commitment is backed by ISO 27001:2022 Certification — a globally recognized framework ensuring world-class data protection and continuous improvement in security.",
            },
            {
              img: "https://mittosapi.com/assets/OIP-VhGKavqO.webp",
              title: "GST Registered",
              color: "text-yellow-500",
              desc: "Being GST Registered reflects our transparent business practices and legal authenticity, ensuring every transaction follows Indian tax laws and builds customer trust.",
            },
            {
              img: "https://mittosapi.com/assets/MSME.webp",
              title: "MSME Registered",
              color: "text-green-500",
              desc: "MSME Registration reflects our commitment to empowering growth while adhering to Indian enterprise standards for credibility and operational excellence.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-8 hover:shadow-xl transition-all"
            >
              <img src={item.img} alt={item.title} className="h-28 w-auto" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className={`${item.color} size-5 mr-2`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                  </svg>
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed text-sm md:text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="relative mt-20 z-10">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10">
            {[
              {
                label1: "Momentum",
                label2: "Leader",
                color: "from-yellow-400 to-red-500",
              },
              {
                label1: "Best",
                label2: "Support",
                color: "from-teal-400 to-blue-400",
              },
              {
                label1: "High",
                label2: "Performer",
                extra: "MID-MARKET",
                color: "from-pink-500 to-purple-500",
              },
              {
                label1: "High",
                label2: "Performer",
                color: "from-yellow-400 to-red-500",
              },
            ].map((award, i) => (
              <div
                key={i}
                className="relative bg-white border-2 border-gray-200 w-40 sm:w-48 h-48 sm:h-56 rounded-xl shadow-md hover:shadow-2xl transition-all"
              >
                <div className="absolute top-0 left-0 right-0 bg-gray-100 p-1 text-center text-xs sm:text-sm font-semibold border-b-2 border-gray-200 rounded-t-lg">
                  SPRING 2025
                </div>
                <div className="absolute top-1 right-1 bg-red-500 text-white font-bold text-sm sm:text-lg rounded-md px-2">
                  G
                </div>
                <div className="flex flex-col items-center justify-center h-full pt-8">
                  <p className="text-lg sm:text-xl font-bold">{award.label1}</p>
                  <p className="text-lg sm:text-xl font-bold">{award.label2}</p>
                  {award.extra && (
                    <p className="text-xs font-semibold text-gray-600">
                      {award.extra}
                    </p>
                  )}
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r ${award.color}`}
                  style={{
                    clipPath: "polygon(0px 0px, 100% 0px, 50% 100%)",
                  }}
                ></div>
              </div>
            ))}

            {/* Meta Partner Badge */}
            <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 rounded-xl flex items-center justify-center w-52 sm:w-64 h-28 sm:h-32 shadow-md hover:shadow-xl transition-all">
              <img
                src="data:image/webp;base64,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"
                alt="Meta Logo"
                className="h-10 sm:h-28"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
