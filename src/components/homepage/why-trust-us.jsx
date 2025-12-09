import React from "react";

const WhyTrustMittos = () => {
    return (
        <section className="bg-gradient-to-br from-green-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto items-center">
    
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">
                        Why Trust Mixis API
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        <span className="font-semibold bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
                            Awarded By CEO of Bharat Pay Mr. Ashneer Grover
                        </span>
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                  <div className="w-full lg:w-1/4">
                        </div>
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                            <p className="text-base xl:text-lg lg:text-xl text-gray-700 mb-4 leading-relaxed">
                                <span className="font-bold text-green-600">Mixis API</span> –
                                {`India's No.1 WhatsApp Official API Solutions Provider with a
                global presence for over 5 years.`}
                            </p>
                            <p className="text-base xl:text-lg lg:text-xl text-gray-700 leading-relaxed">
                                {"We've empowered"}
                                <span className="font-bold text-green-600">
                                    50,000+ businesses
                                </span>{" "}
                                worldwide and were honored to receive recognition from Bharat
                                Pay CEO Mr. Ashneer Grover in 2024.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard value="50,000+" label="Worldwide Clients" />
                            <StatCard
                                value={
                                    <>
                                        <span className="mr-2 text-yellow-500">
                                            <AwardIcon />
                                        </span>
                                        7+
                                    </>
                                }
                                label="Awards"
                            />
                            <StatCard
                                value={
                                    <>
                                        <span className="mr-2 text-green-500">
                                            <SupportIcon />
                                        </span>
                                        24/7
                                    </>
                                }
                                label="Support"
                            />
                            <StatCard
                                value={
                                    <>
                                        <span className="mr-2 text-red-600">
                                            <YouTubeIcon />
                                        </span>
                                        11,000+
                                    </>
                                }
                                label="YouTube Subscribers"
                            />
                        </div>
                    </div>
                </div>

            
                <div className="text-center">
                    <a href="/forms">
                        <button className="bg-gradient-to-r from-green-600 to-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl text-base md:text-lg hover:shadow-2xl transition-all">
                            {"START NOW — IT'S FREE!"}
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                                className="inline ml-2"
                                height="1em"
                                width="1em"
                            >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                            </svg>
                        </button>
                    </a>
                    <p className="mt-4 text-gray-500 text-xs md:text-sm">
                        No credit card required • 7 - Days free trial
                    </p>
                </div>
            </div>
        </section>
    );
};


const StatCard = ({ value, label }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 xl:p-10 text-center">
        <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2 flex justify-center items-center">
            {value}
        </div>
        <div className="text-gray-600 text-sm md:text-base font-medium">
            {label}
        </div>
    </div>
);

const AwardIcon = () => (
    <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em">
        <path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24z" />
    </svg>
);

const SupportIcon = () => (
    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
        <path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z" />
    </svg>
);

const YouTubeIcon = () => (
    <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em">
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
);

export default WhyTrustMittos;
