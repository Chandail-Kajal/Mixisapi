"use client";
import React, { useState } from "react";

function Popup({ visible = true, children }) {
    const [isVisible, setIsVisible] = useState(visible);
    return (
        <div
            className={`fixed ${isVisible ? "" : "hidden"
                } inset-0 flex items-center justify-center bg-black/60 z-[100] p-4`}
        >
            <div
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-64 sm:max-w-md text-center border-4 border-green-300 transform scale-100 transition-all duration-300 p-6"
                style={{
                    zIndex: 1001,
                    background:
                        "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(240, 253, 244) 100%)",
                }}
            >
                <button
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl sm:text-3xl font-bold transition-colors duration-200"
                    aria-label="Close"
                    onClick={() => setIsVisible(false)}
                >
                    ×
                </button>
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-tr from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg mb-6 animate-bounce">
                    <span className="text-white text-3xl sm:text-4xl">🎉</span>
                </div>
                <div>{children}</div>
                <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full opacity-70"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full opacity-70"></div>
            </div>
        </div>
    );
}

export default Popup;
