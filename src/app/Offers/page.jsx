import React from "react";

const OffersPage = () => {
  return (
    <div className="flex justify-center items-center py-10 p-6">                    
        <div className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900/80 via-emerald-900/60 to-gray-800/90 backdrop-blur-xl border
             border-emerald-600/40 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.4)] overflow-hidden p-10 text-center">
            <div className="absolute inset-0 rounded-3xl border-[3px] border-transparent bg-gradient-to-r from-yellow-300 via-emerald-400 to-green-400 opacity-30 blur-md 
                animate-[spin_12s_linear_infinite]"></div>
            <div class="relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-black font-extrabold px-5 py-2 
                rounded-full text-sm mb-8 shadow-lg uppercase tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-yellow-700"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    <path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
                Exclusive Offer — Limited Period
            </div>
        </div>
        </div>
  )
};
export default OffersPage;
