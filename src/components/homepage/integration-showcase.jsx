import React from "react";

const IntegrationsShowcase = () => {
  const triggers = [
    {
      id: 0,
      name: "Woocommerce",
      img: "https://mittosapi.com/assets/Logos/woocommerce.jpg",
    },
    {
      id: 1,
      name: "Indiamart",
      img: "https://mittosapi.com/assets/Logos/indiamart.jpg",
    },
    {
      id: 2,
      name: "Google Calendar",
      img: "	https://mittosapi.com/assets/Logos/googlecalender.png",
    },
    {
      id: 3,
      name: "Facebook Lead",
      img: "https://mittosapi.com/assets/Logos/facebook.jpg",
    },
    {
      id: 4,
      name: "Razorpay",
      img: "	https://mittosapi.com/assets/Logos/razorpay.jpg",
    },
    {
      id: 5,
      name: "TradeIndia",
      img: "	https://mittosapi.com/assets/Logos/tradeindia.png",
    },
    {
      id: 6,
      name: "Justdial",
      img: "https://mittosapi.com/assets/Logos/jd.png",
    },
    {
      id: 7,
      name: "ExportIndia",
      img: "https://mittosapi.com/assets/Logos/exportindia.png",
    },
    {
      id: 8,
      name: "Pipeline",
      img: "https://mittosapi.com/assets/Logos/pipeline.png",
    },
    {
      id: 9,
      name: "Leadsquared",
      img: "https://mittosapi.com/assets/Logos/leadsquread.png",
    },
    {
      id: 10,
      name: "Openai",
      img: "https://mittosapi.com/assets/Logos/AI.png",
    },
    {
      id: 11,
      name: "Facebook Catalog",
      img: "https://mittosapi.com/assets/Logos/catalog.jpg",
    },
  ];

  // Right-side “action” integrations
  const actions = [
    {
      id: 0,
      name: "Gmail",
      img: "https://mittosapi.com/assets/Logos/gmail.jpg",
    },
    {
      id: 1,
      name: "Gsheet",
      img: "	https://mittosapi.com/assets/Logos/gsheet.jpg",
    },
    {
      id: 2,
      name: "Zapier",
      img: "https://mittosapi.com/assets/Logos/zapier.png",
    },
    {
      id: 3,
      name: "Shopify",
      img: "https://mittosapi.com/assets/Logos/shopify.png",
    },
    { id: 4, name: "Zoom", img: "	https://mittosapi.com/assets/Logos/zoom.png" },
    {
      id: 5,
      name: "Zoho CRM",
      img: "https://mittosapi.com/assets/Logos/zoho.jpg",
    },
    {
      id: 6,
      name: "Zoho Booking",
      img: "https://mittosapi.com/assets/Logos/zoho.jpg",
    },
    {
      id: 7,
      name: "Pabbly",
      img: "	https://mittosapi.com/assets/Logos/pabbly.png",
    },
    {
      id: 8,
      name: "Payment Gateway",
      img: "https://mittosapi.com/assets/Logos/Payment.png",
    },
    {
      id: 9,
      name: "Judge Me",
      img: "	https://mittosapi.com/assets/Logos/judgeme.jpg",
    },
    {
      id: 10,
      name: "Active campaign",
      img: "https://mittosapi.com/assets/Logos/active.png",
    },
  ];

  return (
    <div className="relative mb-6 lg:px-4 max-w-7xl mx-auto px-4 bg-green-50 rounded-3xl min-h-[900px] shadow-lg flex justify-center items-center overflow-hidden">
      <div className="hidden lg:block">
        <div className="flex flex-col justify-evenly h-full absolute left-2 top-0 bottom-0">
          {triggers.map((t) => (
            <div
              key={t.id}
              id={`trigger-${t.id}`}
              className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4 z-10 hover:scale-105 transition-transform"
            >
              <img src={t.img} alt={t.name} className="w-8 h-8" />
              <p className="font-medium">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="relative z-20 mx-8 flex-shrink-0">
          <div className="bg-green-600 p-6 rounded-full shadow-xl">
            <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center">
              <img
                src="https://mittosapi.com/assets/mittoslogo-C5UnFXGx.png"
                alt="Mittos Logo"
                className="w-24 h-24 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-evenly h-full absolute right-2 top-0 bottom-0 py-8">
          {actions.map((a) => (
            <div
              key={a.id}
              id={`action-${a.id}`}
              className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4 z-10 hover:scale-105 transition-transform"
            >
              <p className="font-medium">{a.name}</p>
              <img src={a.img} alt={a.name} className="w-8 h-8" />
            </div>
          ))}
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {[
            42.15, 116.3, 190.45, 264.6, 338.75, 412.9, 487.05, 561.2, 635.35,
            709.52, 783.68, 857.85,
          ].map((y, i) => (
            <g key={i}>
              <path
                d={`M640,450 C374.57,450 374.57,${y} 109.13,${y}`}
                stroke="#16a34a"
                strokeWidth="2"
                fill="transparent"
              />
              <circle r="5" fill="#16a34a">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path={`M640,450 C374.57,450 374.57,${y} 109.13,${y}`}
                />
              </circle>
            </g>
          ))}

          {[75, 150, 225, 300, 375, 450, 525, 600, 675, 750, 825].map(
            (y, i) => (
              <g key={`right-${i}`}>
                <path
                  d={`M640,450 C905.51,450 905.51,${y} 1171.03,${y}`}
                  stroke="#16a34a"
                  strokeWidth="2"
                  fill="transparent"
                />
                <circle r="5" fill="#16a34a">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path={`M640,450 C905.51,450 905.51,${y} 1171.03,${y}`}
                  />
                </circle>
              </g>
            )
          )}
        </svg>
      </div>

      <div className="lg:hidden py-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4 w-full md:w-1/4">
          {triggers.map((t) => (
            <div
              key={t.id}
              className="bg-white p-3 rounded-xl shadow-md flex items-center justify-start gap-2 hover:scale-105 transition-transform"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-8 h-8 object-contain"
              />
              <p className="text-sm md:text-base font-medium">{t.name}</p>
            </div>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="relative flex justify-center items-center my-2">
          <div className="bg-green-600 p-5 rounded-full shadow-xl">
            <div className="bg-white w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center">
              <img
                src="https://mittosapi.com/assets/mittoslogo-C5UnFXGx.png"
                alt="Mittos Logo"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4 w-full md:w-1/4">
          {actions.map((a) => (
            <div
              key={a.id}
              className="bg-white p-3 rounded-xl shadow-md flex items-center justify-start gap-2 hover:scale-105 transition-transform"
            >
              <p className="text-sm md:text-base font-medium">{a.name}</p>
              <img
                src={a.img}
                alt={a.name}
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsShowcase;
