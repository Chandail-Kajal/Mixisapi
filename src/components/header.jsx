"use client"
import Link from "next/link";
import React, { useState } from "react";

function Header() {
    const [openedMenu, setOpenedMenu] = useState(null)

    const handleOpenMenu = (menu) => {
        setOpenedMenu((prevMenu) => {
            if (prevMenu === menu) {
                return null
            }
            return menu
        })
    }

    return (
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link className="h-12 flex items-center" href="/" >
                        <img src="https://mittosapi.com/assets/logo-olsw2ZoW.webp" alt="logo" className="h-full object-contain" />
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-6">
                        <div className="relative">
                            <button onClick={() => handleOpenMenu("features")} className="flex items-center gap-2 text-gray-700 hover:text-green-500 font-medium text-sm">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
                                8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                <span>Features</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 transition "><path d="m6 9 6 6 6-6"></path></svg>
                            </button>
                            {openedMenu === "features" && <div className="absolute left-0 mt-3 w-[950px] bg-white shadow-2xl rounded-lg p-4 grid grid-cols-4 gap-3 border border-gray-200" >
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/salespipeline" >

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list w-5 h-5 text-green-600 mt-1 flex-shrink-0">
                                        <line x1="8" x2="21" y1="6" y2="6"></line>
                                        <line x1="8" x2="21" y1="12" y2="12"></line>
                                        <line x1="8" x2="21" y1="18" y2="18"></line>
                                        <line x1="3" x2="3.01" y1="6" y2="6"></line>
                                        <line x1="3" x2="3.01" y1="12" y2="12"></line>
                                        <line x1="3" x2="3.01" y1="18" y2="18"></line>
                                    </svg>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">Sales Pipeline</h4>
                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">New</span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Harness the power of AI within WhatsApp</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/broadcasting" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone w-5 h-5 text-green-600 mt-1 flex-shrink-0">
                                        <path d="m3 11 18-5v12L3 14v-3z"></path>
                                        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                                    </svg><div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">WhatsApp Broadcasting</h4></div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Collaborate with team members effectively</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/automatedmessage" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-5 h-5 text-green-600 mt-1 flex-shrink-0">
                                        <path d="m22 2-7 20-4-9-9-4Z"></path><
                                            path d="M22 2 11 13"></path>
                                    </svg><div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">Automated Messages</h4>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Send sequence of messages at intervals</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/whatsappflow" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list w-5 h-5 text-green-600 mt-1 flex-shrink-0">
                                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                        <path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path>
                                        <path d="M8 16h.01"></path>
                                    </svg>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">WhatsApp Forms/Flows</h4>
                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">New</span></div><p className="text-xs text-gray-600 leading-relaxed">Convert leads to deals using CTWA</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/appointment" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-5 h-5 text-green-600 mt-1 flex-shrink-0">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg><div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">Appointment Bookings</h4>
                                        </div><p className="text-xs text-gray-600 leading-relaxed">Setup product catalogs and start selling</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/whatsappinbox" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-inbox w-5 h-5 text-green-600 mt-1 flex-shrink-0">
                                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg><div className="flex-1"><div className="flex items-center gap-2 mb-1"><h4 className="font-semibold text-gray-900 text-sm">Shared Team Inbox</h4></div><p className="text-xs text-gray-600 leading-relaxed">Reach customers on messaging channel</p>
                                    </div></a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/chatbot" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot w-5 h-5 text-green-600 mt-1 flex-shrink-0"><path d="M12 8V4H8"></path>
                                    <rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg><div className="flex-1"><div className="flex items-center gap-2 mb-1"><h4 className="font-semibold text-gray-900 text-sm">No Code Chatbot Builder</h4></div><p className="text-xs text-gray-600 leading-relaxed">Scale customer experiences</p>
                                    </div></a><a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/nocode" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-5 h-5 text-green-600 mt-1 flex-shrink-0"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg><div className="flex-1"><div className="flex items-center gap-2 mb-1"><h4 className="font-semibold text-gray-900 text-sm">AI Advanced Chatbot Builder</h4><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">New</span></div><p className="text-xs text-gray-600 leading-relaxed">Satisfy customers with ChatGPT support</p></div></a><a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/keyword" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key w-5 h-5 text-green-600 mt-1 flex-shrink-0"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg><div className="flex-1"><div className="flex items-center gap-2 mb-1"><h4 className="font-semibold text-gray-900 text-sm">Keyword Chatbot Builder</h4><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">New</span></div><p className="text-xs text-gray-600 leading-relaxed">Provided by Mittos API</p></div></a><a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/dripcampaign" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-5 h-5 text-green-600 mt-1 flex-shrink-0"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg><div className="flex-1"><div className="flex items-center gap-2 mb-1"><h4 className="font-semibold text-gray-900 text-sm">Drip Campaign/Sequence</h4><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">New</span></div><p className="text-xs text-gray-600 leading-relaxed">Launch campaigns at scale</p></div></a><a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/catalog" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-5 h-5 text-green-600 mt-1 flex-shrink-0"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg><div className="flex-1"><div className="flex items-center gap-2 mb-1"><h4 className="font-semibold text-gray-900 text-sm">Catalog Ordering</h4><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">New</span></div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Automate payments on WhatsApp</p></div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/calltracker" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call w-5 h-5 text-green-600 mt-1 flex-shrink-0">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                                        <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                                    </svg>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">Calls Tracking</h4>
                                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Free</span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Track calls with ease</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/whatsappcarousel" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-5 h-5 text-green-600 mt-1 flex-shrink-0"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">Click to WhatsApp Ads</h4>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Increase 10X your sales</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/payment" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-5 h-5 text-green-600 mt-1 flex-shrink-0">
                                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                        <line x1="2" x2="22" y1="10" y2="10"></line></svg>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">WhatsApp Payments</h4>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Collect Payments via UPI &amp; Card</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/whatsapplink" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link2 w-5 h-5 text-green-600 mt-1 flex-shrink-0"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                                        <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-semibold text-gray-900 text-sm">WhatsApp Link Generator</h4>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">Create links to connect customers</p>
                                    </div>
                                </a>
                                <a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/advanceaicrm" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-5 h-5 text-green-600 mt-1 flex-shrink-0"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg><div className="flex-1"><div className="flex items-center gap-2 mb-1"><h4 className="font-semibold text-gray-900 text-sm">Advance AI CRM Integrated</h4></div></div></a><a className="flex items-start gap-3 hover:bg-green-50 p-3 rounded-lg transition-colors duration-200" href="/widgets" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-5 h-5 text-green-600 mt-1 flex-shrink-0"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg><div className="flex-1"><div className="flex items-center gap-2 mb-1"><h4 className="font-semibold text-gray-900 text-sm">WhatsApp Chat Widgets</h4></div><p className="text-xs text-gray-600 leading-relaxed">Fastest way to connect visitors</p></div></a><div className="col-span-4 flex justify-center pt-2"><a className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200" href="/features" >See All Features →</a>
                                </div>
                            </div>}
                        </div>
                        <a className="flex items-center gap-2 text-gray-700 hover:text-green-500 font-medium text-sm transition-colors duration-200" href="/pricing" ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 288 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 
                        64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path></svg><span>PRICING</span></a>
                        <a className="flex items-center gap-2 text-gray-700 hover:text-green-500 font-medium text-sm transition-colors duration-200" href="/integration" ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 
                        46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"></path></svg><span>INTEGRATION</span></a>
                        <a href="https://youtube.com/@digitalkstar?si=y3f2cM_HZIESPlpn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-green-500 font-medium text-sm transition-colors duration-200"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 
                        11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg><span>TUTORIALS</span></a>
                        <a className="flex items-center gap-2 text-gray-700 hover:text-green-500 font-medium text-sm transition-colors duration-200" href="/reseller" ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 
                        48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg><span>BECOME RESELLER</span></a>
                        <div className="relative">
                            <button onClick={() => handleOpenMenu("mobile-app")} className="flex items-center gap-2 text-gray-700 hover:text-green-500 font-medium text-sm">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                </svg>
                                <span>MOBILE APP</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 transition ">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>
                            {openedMenu === "mobile-app" && <div className="absolute left-0 mt-3 w-64 bg-white shadow-2xl rounded-lg p-2 border border-gray-200" >
                                <a href="https://play.google.com/store/search?q=Mittos%20call%20tracker&amp;c=apps&amp;hl=en_IN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-green-50 p-3 rounded-md transition-colors duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call w-5 h-5 text-green-600">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                                        <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                                    </svg>
                                    <div>
                                        <h4 className="font-medium text-gray-900 text-sm">Call Tracker</h4>
                                    </div>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.soflers.mittosapi&amp;pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-green-50 p-3 rounded-md transition-colors duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-5 h-5 text-green-600">
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                    </svg>
                                    <div>
                                        <h4 className="font-medium text-gray-900 text-sm">WhatsApp API</h4>
                                    </div>
                                </a>
                            </div>
                            }

                        </div>
                    </nav>
                    <div className="hidden lg:flex items-center space-x-4"><a href="/forms" ><button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg 
                    font-medium transition-colors duration-200">START NOW →</button></a></div>
                    <button className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="lucide lucide-menu "><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button>
                </div>
            </div>
        </header>
    );
}

export default Header;