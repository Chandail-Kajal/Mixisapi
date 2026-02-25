"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const text = ["Marketing", "Automation", "AI Chatbots", "Broadcasts"];
const items = [{ label: "Marketing", className: "bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-6xl font-black text-transparent uppercase tracking-tighter " },
{ label: "Automation", className: "bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-6xl font-black text-transparent uppercase tracking-tighter " },
{ label: "AI Chatbots", className: "bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-6xl font-black text-transparent uppercase tracking-tighter " },
{ label: "Broadcasts", className: "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-6xl font-black text-transparent uppercase tracking-tighter " }
]

export function AutoscrollMarquee() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 3000); // "Stay" duration (3 seconds)
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-center overflow-hidden ">
            <AnimatePresence mode="popLayout" >
                <motion.div
                    key={index} // Unique key triggers the animation on change
                    initial={{ y: 50, opacity: 0 }}   // Start at bottom
                    animate={{ y: 0, opacity: 1 }}    // Pop to center
                    exit={{ y: -50, opacity: 0 }}     // Pop out to top
                    transition={{
                        duration: 0.6,
                        ease: [0.32, 0.72, 0, 1] // Custom "pop" ease
                    }}
                    className={items[index].className}
                >
                    {items[index].label}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
