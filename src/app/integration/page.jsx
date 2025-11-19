import React from "react";

export default function Integration() {
  return (
    <section className="py-6 px-6 bg-gray-50">
           <div className="w-full text-white text-center py-3 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-semibold tracking-wide shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-700 to-black bg-[length:300%_300%] animate-gradient"></div>
          <div className="relative z-10 text-2xl">
            Convert{" "}
            <span className="font-extrabold text-yellow-300">Marketing</span>{" "}
            <span className="text-white">Templates into</span>{" "}
            <span className="text-yellow-300 font-extrabold">Utility</span>={" "}
            <span className="font-extrabold text-yellow-300 relative text-2xl sm:text-3xl md:text-4xl">
              Save 7 -8x
            </span>{" "}
            on Broadcasting
          </div>
        </div>
      <div className="text-center mb-14 mt-6">
        
        <h3 className="text-3xl font-bold uppercase text-green-600 tracking-wide">
          Seamless Integrations
        </h3>
        <h2 className="text-4xl md:text-6xl font-extrabold mt-3 text-green-800">
          Connect Your Business Ecosystem
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-xl">
          Integrate WhatsApp Business with your favorite platforms and enhance
          your customer communication with powerful, ready-to-use connectors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[
          {
            title: "Zoom",
            img: "https://mittosapi.com/assets/Logos/zoom.png",
            desc: "Save all your Zoom meeting registrants to Mitos API. Send updates, alerts and meeting reminders to them on WhatsApp.",
          },
          {
            title: "Gsheet",
            img: "https://mittosapi.com/assets/Logos/gsheet.jpg",
            desc: "Sync your google sheet data changes with Mitos API attributes in real time.",
          },
          {
            title: "Indiamart",
            img: "https://mittosapi.com/assets/Logos/indiamart.jpg",
            desc: "Save your India mart enquiries to Mitos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Google Calendar",
            img: "https://mittosapi.com/assets/Logos/googlecalender.png",
            desc: "Sync all your customers and leads appointments with your personal Google Calendar.",
          },
          {
            title: "Facebook Lead",
            img: "https://mittosapi.com/assets/Logos/facebook.jpg",
            desc: "Sync all your Facebook Leads to Mitos API.",
          },
          {
            title: "TradeIndia",
            img: "https://mittosapi.com/assets/Logos/tradeindia.png",
            desc: "Save your TradeIndia enquiries to Mitos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Justdial",
            img: "https://mittosapi.com/assets/Logos/jd.png",
            desc: "Save your Justdial enquiries to Mitos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "ExportIndia",
            img: "https://mittosapi.com/assets/Logos/exportindia.png",
            desc: "Save your ExportIndia enquiries to Mitos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Razorpay",
            img: "https://mittosapi.com/assets/Logos/razorpay.jpg",
            desc: "Save your Razorpay enquiries to Mitos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Zapier",
            img: "https://mittosapi.com/assets/Logos/zapier.png",
            desc: "Save your Zapier leads to Mitos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Gmail",
            img: "https://mittosapi.com/assets/Logos/gmail.jpg",
            desc: "Sync your Gmail leads with Mittos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Shopify",
            img: "https://mittosapi.com/assets/Logos/shopify.png",
            desc: "Save your Shopify enquiries to Mitos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Woocommerce",
            img: "https://mittosapi.com/assets/Logos/woocommerce.jpg",
            desc: "Save your Woocommerce enquiries to Mitos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Zoho CRM",
            img: "https://mittosapi.com/assets/Logos/zoho.jpg",
            desc: "Deploy Zoho CRM enquiries to Mitos API. Send Campaign on WhatsApp.",
          },
          {
            title: "Zoho Booking",
            img: "https://mittosapi.com/assets/Logos/zoho.jpg",
            desc: "Sync your Zoho Booking leads with Mittos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Pabbly",
            img: "https://mittosapi.com/assets/Logos/pabbly.png",
            desc: "Sync your Pabbly leads with Mittos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Pipeline",
            img: "https://mittosapi.com/assets/Logos/pipeline.png",
            desc: "Save your Pipeline leads to Mittos API. Send updates, alerts and quotations to them on WhatsApp.",
          },
          {
            title: "Leadsquared",
            img: "https://mittosapi.com/assets/Logos/leadsquread.png",
            desc: "Connect Leadsquared CRM with Mittos API to get all your Chat leads on the platform.",
          },
          {
            title: "Payment Gateway",
            img: "https://mittosapi.com/assets/Logos/Payment.png",
            desc: "Integrate your favorite payment gateway with Mittos API to send custom Payment links on WhatsApp.",
          },
          {
            title: "Judge Me",
            img: "https://mittosapi.com/assets/Logos/judgeme.jpg",
            desc: "Mittos API integrates with Judge Me allowing you to post positive customer feedback to your store.",
          },
          {
            title: "OpenAI",
            img: "https://mittosapi.com/assets/Logos/AI.png",
            desc: "Empower your WhatsApp chatbot with GPT-4o and create a 24x7 business assistant.",
          },
          {
            title: "Active Campaign",
            img: "https://mittosapi.com/assets/Logos/active.png",
            desc: "Save your leads from Active campaign to Mittos API and engage them on WhatsApp.",
          },
          {
            title: "Facebook Catalog",
            img: "https://mittosapi.com/assets/Logos/catalog.jpg",
            desc: "Connect Facebook Catalog with Mittos API to send and display products on WhatsApp.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group  rounded-2xl p-6 shadow-sm bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-blue-50 transition">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <h3 className="font-semibold text-xl text-gray-800">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 text-lg flex-grow leading-relaxed">
              {item.desc}
            </p>
            <button className="mt-5 w-fit bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors shadow-sm hover:shadow">
              Configure
            </button>
          </div>
        ))}
      </div>

      <div>
        <div className="text-center mb-14">
          <h3 className="text-3xl font-bold mt-10 uppercase text-black-600 tracking-wide">
            Integrate With any Softwares/Apps using Mittos REST API &amp;
            webhooks
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-green-600">
            Connect Your Business Ecosystem
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-xl">
            Integrate WhatsApp Business with your favorite platforms and enhance
            your customer communication with powerful, ready-to-use connectors.
          </p>
          <a href="/forms">
            <button
              className="bg-green-600 text-white font-semibold text-2xl md:text-3xl rounded-3xl w-64 py-4 m-5
              items-center justify-center shadow-lg transform transition duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-2xl"
            >
              Start Now{" "}
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </a>
        </div>
        
      </div>
    </section>
  );
}
