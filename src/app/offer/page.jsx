import React from "react";

const OffersPage = () => {
    return (
        <section>
            <div className="flex justify-center items-center py-10 p-6">
                <div className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900/80 via-emerald-900/60 to-gray-800/90 backdrop-blur-xl border
             border-emerald-600/40 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.4)] overflow-hidden p-10 text-center">
                    <div className="absolute inset-0 rounded-3xl border-[3px] border-transparent bg-gradient-to-r from-yellow-300 via-emerald-400 to-green-400 opacity-30 blur-md 
                animate-[spin_12s_linear_infinite]"></div>
                    <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-black font-extrabold px-5 py-2 
                rounded-full text-sm mb-8 shadow-lg uppercase tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-yellow-700"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                            <path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
                        Exclusive Offer — Limited Period
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        Switch to
                        <span className="bg-gradient-to-r from-emerald-400 to-green-300 text-transparent bg-clip-text px-1">
                            Mittos API
                        </span>
                        & Unlock Premium Savings
                    </h2>
                    <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        Upgrade your WhatsApp API experience and grab an
                        <span className="text-yellow-300 font-semibold px-1">unbelievable 50% OFF</span>
                        for the first
                        <span className="text-emerald-300 font-bold px-1">100 Members</span>
                        . Don’t wait — this exclusive offer won’t last long!
                    </p>
                    <div className="relative mx-auto my-10 max-w-md">
                        <div className="relative bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 text-white text-5xl font-extrabold py-8 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.6)] overflow-hidden">
                            <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">🔥 50% OFF NOW!</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shine_2s_infinite]"></span>
                        </div>
                    </div>
                    <button className="relative flex mx-auto bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 text-white font-bold py-4 px-12 rounded-full text-xl shadow-[0_8px_30px_rgba(34,197,94,0.6)]
             hover:shadow-[0_10px_40px_rgba(34,197,94,0.8)] transition-all duration-500 overflow-hidden uppercase tracking-wide">
                        <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"></span>
                        Switch Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shine_1.8s_infinite]"></span>
                    </button>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/20 blur-3xl rounded-full animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/20 blur-2xl rounded-full animate-pulse delay-1000"></div>
                </div>
            </div>
            <div className="w-full text-white text-center py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-semibold tracking-wide shadow-md relative overflow-hidden"></div>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Compare & Save with
                            <span className="text-green-600">MittosAPI</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get more value with our all-in-one platform at a fraction of the cost</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 relative">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="bg-gray-900 text-white p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold">Other Platforms</h3>
                                        <p className="text-gray-300">For the same features as MittosAPI</p>
                                    </div>
                                    <div className="flex items-center -space-x-4">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300">
                                            <img src="https://mittosapi.com/assets/Wati-logo-green-Xkgz8q6m.svg" alt="wati" className="w-7 h-7 object-contain" />
                                        </div>
                                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300">
                                            <img src="	https://mittosapi.com/assets/Aisensy-DlxB96tQ.jpeg " alt="aisensy" className="w-7 h-7 object-contain" />
                                        </div>
                                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgA…VSt9gy2KxWCwWi8Vikegf53VAjEhp9fgAAAAASUVORK5CYII=" alt="inerakt" className="w-7 h-7 object-contain" />
                                        </div>
                                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYA…iIiIiIiIiIiIiIiIiIkqiv+2LQ/FZM8E0AAAAAElFTkSuQmCC" alt="doubletick" className="w-7 h-7 object-contain" />
                                        </div>
                                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEA…gCIIgCIIgCIIgCIIgiCb8A2IDaQBd/TlqAAAAAElFTkSuQmCC" alt="gallabox" className="w-7 h-7 object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 text-sm font-medium text-gray-500 border-b pb-3 mb-4">
                                    <p>Platform</p>
                                    <p className="text-right"></p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <img src="https://mittosapi.com/assets/Wati-logo-green-Xkgz8q6m.svg" alt="WATI" className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow" />
                                                <span class="font-semibold text-gray-800 capitalize">Wati</span>
                                            </div>
                                            <p className="font-bold text-lg text-gray-900">
                                                ₹
                                                85,000
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <img src="	https://mittosapi.com/assets/Aisensy-DlxB96tQ.jpeg" />
                                                <span className="font-semibold text-gray-800 capitalize">AiSensy</span>
                                            </div>
                                            <p className="font-bold text-lg text-gray-900">
                                                ₹
                                                80,000
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgA…VSt9gy2KxWCwWi8Vikegf53VAjEhp9fgAAAAASUVORK5CYII=" />
                                                <span className="font-semibold text-gray-800 capitalize">Interakt</span>
                                            </div>
                                            <p className="font-bold text-lg text-gray-900">
                                                ₹
                                                48,000
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYA…iIiIiIiIiIiIiIiIiIkqiv+2LQ/FZM8E0AAAAAElFTkSuQmCC" alt="DOUBLETICK" className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow" />
                                                <span className="font-semibold text-gray-800 capitalize">DoubleTick</span>
                                            </div>
                                            <p className="font-bold text-lg text-gray-900">
                                                ₹
                                                50,000
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEA…gCIIgCIIgCIIgCIIgiCb8A2IDaQBd/TlqAAAAAElFTkSuQmCC" alt="GALLABOX" className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow" />
                                                <span className="font-semibold text-gray-800 capitalize">Gallabox</span>
                                            </div>
                                            <p class="font-bold text-lg text-gray-900">
                                                ₹
                                                2,12,000
                                            </p>

                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-500">Average Cost</p>
                                                <p className="text-2xl font-bold text-gray-900">₹56,800</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500">For Basic Features</p>
                                                <p className="text-sm text-red-500">+ Additional Costs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-green-200 animate-pulse">
                                    VS
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                                    MOST POPULAR
                                </div>

                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl overflow-hidden border border-green-500/30 h-full">
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">MittosAPI</h3>
                                                <p className="text-emerald-100">All-in-one solution</p>
                                            </div>
                                            <div className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</div>
                                        </div>
                                        <div className="mb-8">
                                            <div className="flex items-center justify-center rounded-full p-1 max-w-xs mx-auto mb-6">
                                                <button className="px-6 py-2 rounded-full text-sm font-medium bg-emerald-500 text-white">Yearly (Save 30%)</button>
                                            </div>
                                            <div className="text-center mb-6">
                                                <p className="text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                                                    <span className="text-gray-400 line-through text-3xl">₹7,999</span>
                                                    <span className="text-emerald-400 text-5xl font-extrabold">₹3,999</span>
                                                    <span className="text-lg font-normal text-gray-400">/year</span>
                                                </p>
                                                <p className="text-emerald-300 text-sm">
                                                    That’s just
                                                    <span className="font-semibold text-yellow-300">₹333/month</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 mb-8">
                                            <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                            </div>
                                            <div>
                                                <p className="font-medium text-white">User-friendly + affordable pricing</p>
                                                <p className="text-sm text-gray-400">Intuitive interface with cost-effective plans</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square w-5 h-5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>

                                            </div>
                                            <div>
                                                <p className="font-medium text-white">Unlimited No-code Automation + Chatbot</p>
                                                <p className="text-sm text-gray-400">Powerful automation without any coding required</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400">
                                                <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart2 w-5 h-5"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default OffersPage;
