import React from "react";

const FormsPage = () => {
    return (
        <div className="flex-grow">
            <div className="w-full bg-white text-gray-900 relative">
                <div className="max-w-7xl mx-auto px-8 py-5 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <h1
                            className="text-3xl md:text-4xl font-bold leading-tight"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            Experience the future of{" "}
                            <span className="text-green-600">WhatsApp Marketing</span>
                        </h1>

                        <div className="mt-5 flex flex-col gap-5">
                            {/* Feature 1 */}
                            <div
                                className="flex items-start gap-4 bg-green-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition"
                                style={{ opacity: 1, transform: "none" }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-7 h-7 mt-1"
                                >
                                    <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                                    <path d="M12 8v13"></path>
                                    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                                    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Get WhatsApp API Just in 1 Hour
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        I will verify your account with Meta in 1 hour
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-4 bg-green-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-7 h-7 mt-1"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                                    <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Call Tracker App FREE FREE FREE
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Track all incoming and outgoing calls of your team members
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start gap-4 bg-green-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-7 h-7 mt-1"
                                >
                                    <path d="m3 11 18-5v12L3 14v-3z"></path>
                                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        Advanced AI Ads Manager
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        AI-powered ad campaign optimisation & targeting
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex items-start gap-4 bg-green-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-7 h-7 mt-1"
                                >
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        FREE Blue Tick Assistance
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Apply for BLUE TICK & get a verified WhatsApp Business
                                        Account
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Trusted Brands */}
                        <div className="mt-8 border-t pt-6">
                            <div className="text-center mb-4">
                                <span className="inline-block px-3 py-1 text-sm font-medium text-green-600 bg-green-50 rounded-full">
                                    Trusted by <span className="font-bold">70,000+ Brands</span>
                                </span>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-6 mt-4 opacity-90">
                                <img
                                    src="https://mittosapi.com/assets/Angel-BDiGVoif.jpg"
                                    alt="brand"
                                    className="h-10 w-auto object-contain hover:scale-105 transition-transform"
                                />
                                <img
                                    src="https://mittosapi.com/assets/Sobha-nIhhCZlk.jpg"
                                    alt="brand"
                                    className="h-10 w-auto object-contain hover:scale-105 transition-transform"
                                />
                                <img
                                    src="https://mittosapi.com/assets/Growth-DpJfyku8.jpg"
                                    alt="brand"
                                    className="h-10 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div
                        className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Get Started With{" "}
                                <span className="text-green-600">MittosAPI</span>
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Fill in the details to start your{" "}
                                <span className="text-green-600 font-semibold">FREE TRIAL</span>
                                .
                            </p>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    WhatsApp Number <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-3">
                                    <input
                                        type="tel"
                                        name="countryCode"
                                        className="w-24 px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                                        placeholder="+91"
                                        maxLength={5}
                                        required
                                        defaultValue="+91"
                                    />
                                    <input
                                        type="tel"
                                        name="number"
                                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                                        placeholder="9594686906"
                                        maxLength={10}
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg font-semibold text-white transition bg-green-600 hover:bg-green-700"
                            >
                                Get Started Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormsPage;
