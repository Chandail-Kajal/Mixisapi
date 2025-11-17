import React, { useState } from "react";
import {
  List,
  Megaphone,
  Send,
  ClipboardList,
  Calendar,
  Inbox,
  Bot,
  Brain,
  Key,
  FileText,
  ShoppingCart,
  PhoneCall,
  MessageCircle,
  CreditCard,
  Link2,
} from "lucide-react";

const featureItems = [
  {
    icon: List,
    title: "Sales Pipeline",
    description: "Harness the power of AI within WhatsApp",
    badge: { text: "New", color: "green" },
    href: "/salespipeline",
  },
  {
    icon: Megaphone,
    title: "WhatsApp Broadcasting",
    description: "Collaborate with team members effectively",
    href: "/broadcasting",
  },
  {
    icon: Send,
    title: "Automated Messages",
    description: "Send sequence of messages at intervals",
    href: "/automatedmessage",
  },
  {
    icon: ClipboardList,
    title: "WhatsApp Forms/Flows",
    description: "Convert leads to deals using CTWA",
    badge: { text: "New", color: "green" },
    href: "/whatsappflow",
  },
  {
    icon: Calendar,
    title: "Appointment Bookings",
    description: "Setup product catalogs and start selling",
    href: "/appointment",
  },
  {
    icon: Inbox,
    title: "Shared Team Inbox",
    description: "Reach customers on messaging channel",
    href: "/whatsappinbox",
  },
  {
    icon: Bot,
    title: "No Code Chatbot Builder",
    description: "Scale customer experiences",
    href: "/chatbot",
  },
  {
    icon: Brain,
    title: "AI Advanced Chatbot Builder",
    description: "Satisfy customers with ChatGPT support",
    badge: { text: "New", color: "green" },
    href: "/nocode",
  },
  {
    icon: Key,
    title: "Keyword Chatbot Builder",
    description: "Provided by Mittos API",
    badge: { text: "New", color: "green" },
    href: "/keyword",
  },
  {
    icon: FileText,
    title: "Drip Campaign/Sequence",
    description: "Launch campaigns at scale",
    badge: { text: "New", color: "green" },
    href: "/dripcampaign",
  },
  {
    icon: ShoppingCart,
    title: "Catalog Ordering",
    description: "Automate payments on WhatsApp",
    badge: { text: "New", color: "green" },
    href: "/catalog",
  },
  {
    icon: PhoneCall,
    title: "Calls Tracking",
    description: "Track calls with ease",
    badge: { text: "Free", color: "blue" },
    href: "/calltracker",
  },
  {
    icon: MessageCircle,
    title: "Click to WhatsApp Ads",
    description: "Increase 10X your sales",
    href: "/whatsappcarousel",
  },
  {
    icon: CreditCard,
    title: "WhatsApp Payments",
    description: "Collect Payments via UPI & Card",
    href: "/payment",
  },
  {
    icon: Link2,
    title: "WhatsApp Link Generator",
    description: "Create links to connect customers",
    href: "/whatsapplink",
  },
  {
    icon: Brain,
    title: "Advance AI CRM Integrated",
    href: "/advanceaicrm",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat Widgets",
    description: "Fastest way to connect visitors",
    href: "/widgets",
  },
];

const mobileApps = [
  {
    icon: PhoneCall,
    title: "Call Tracker",
    href: "https://play.google.com/store/search?q=Mittos%20call%20tracker&c=apps&hl=en_IN",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp API",
    href: "https://play.google.com/store/apps/details?id=com.soflers.mittosapi&pcampaignid=web_share",
  },
];

const SidebarMenu = ({ onNavClick }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="flex-1 px-6 py-4 flex flex-col space-y-4 overflow-scroll">
      <div className="flex-1 border-b border-boder">
        <button
          className="flex justify-between items-center w-full text-gray-700 font-medium py-2"
          onClick={() => setOpen((p) => (!p ? "features" : null))}
        >
          <div className="flex items-center gap-3">
            <span className="text-green-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            </span>
            <span>FEATURES</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-4 h-4 transition-transform duration-200 ${
              open === "features" ? "rotate-180" : ""
            }`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            open === "features"
              ? "max-h-[1000px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          {featureItems.map((item, index) => (
            <div
              onClick={() => onNavClick(item.href)}
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200 cursor-pointer"
            >
              <item.icon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  {item.badge && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full bg-${item.badge.color}-100 text-${item.badge.color}-700`}
                    >
                      {item.badge.text}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="text-xs text-gray-600">{item.description}</p>
                )}
              </div>
            </div>
          ))}
          <div className="pt-2" onClick={() => onNavClick("/features")}>
            <div className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
              See All Features →
            </div>
          </div>
        </div>
        <div
          onClick={() => onNavClick("/pricing")}
          className="flex items-center gap-3 py-3 cursor-pointer text-gray-700 hover:text-green-500"
        >
          <span className="text-green-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 288 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
            </svg>
          </span>
          <span>PRICING</span>
        </div>
        <div
          onClick={() => onNavClick("integration")}
          className="flex items-center gap-3 py-3 cursor-pointer text-gray-700 hover:text-green-500"
        >
          <span className="text-green-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"></path>
            </svg>
          </span>
          <span>INTEGRATION</span>
        </div>
        <div
          onClick={() =>
            onNavClick("https://youtube.com/@digitalkstar?si=y3f2cM_HZIESPlpn")
          }
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-700 font-medium py-3 hover:text-green-500 transition-colors duration-200"
        >
          <span className="text-green-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </span>
          <span>TUTORIALS</span>
        </div>
        <div
          onClick={() => onNavClick("/reseller")}
          className="flex items-center gap-3 py-3 font-medium transition-colors duration-200 cursor-pointer text-gray-700 hover:text-green-500"
        >
          <span className="text-green-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
            </svg>
          </span>
          <span>BECOME RESELLER</span>
        </div>
        <button
          className="flex justify-between items-center w-full text-gray-700 font-medium py-2"
          onClick={() => setOpen((p) => (!p ? "mobileapp" : null))}
        >
          <div className="flex items-center gap-3">
            <span className="text-green-600">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
              </svg>
            </span>
            <span>Mobile App</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-4 h-4 transition-transform duration-200 ${
              open === "mobileapp" ? "rotate-180" : ""
            }`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <div
          className={`mt-3 space-y-2 overflow-hidden transition-all duration-300 ${
            open === "mobileapp"
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mt-3 space-y-2 overflow-hidden transition-all duration-300 ${
              open === "mobileapp"
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {mobileApps.map((item, index) => (
              <div
                onClick={() => onNavClick(item.href)}
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200 cursor-pointer"
              >
                <item.icon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    {item.badge && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full bg-${item.badge.color}-100 text-${item.badge.color}-700`}
                      >
                        {item.badge.text}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-xs text-gray-600">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
