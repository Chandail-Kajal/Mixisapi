import React from "react";

const IntegrationsShowcase = () => {
  // Left-side “trigger” integrations
  const triggers = [
    { id: 0, name: "Woocommerce", img: "/assets/Logos/woocommerce.jpg" },
    { id: 1, name: "Indiamart", img: "/assets/Logos/indiamart.jpg" },
    { id: 2, name: "Google Calendar", img: "/assets/Logos/googlecalender.png" },
    { id: 3, name: "Facebook Lead", img: "/assets/Logos/facebook.jpg" },
    { id: 4, name: "Razorpay", img: "/assets/Logos/razorpay.jpg" },
    { id: 5, name: "TradeIndia", img: "/assets/Logos/tradeindia.png" },
    { id: 6, name: "Justdial", img: "/assets/Logos/jd.png" },
    { id: 7, name: "ExportIndia", img: "/assets/Logos/exportindia.png" },
    { id: 8, name: "Pipeline", img: "/assets/Logos/pipeline.png" },
    { id: 9, name: "Leadsquared", img: "/assets/Logos/leadsquread.png" },
    { id: 10, name: "Openai", img: "/assets/Logos/AI.png" },
    { id: 11, name: "Facebook Catalog", img: "/assets/Logos/catalog.jpg" },
  ];

  // Right-side “action” integrations
  const actions = [
    { id: 0, name: "Gmail", img: "/assets/Logos/gmail.jpg" },
    { id: 1, name: "Gsheet", img: "/assets/Logos/gsheet.jpg" },
    { id: 2, name: "Zapier", img: "/assets/Logos/zapier.png" },
    { id: 3, name: "Shopify", img: "/assets/Logos/shopify.png" },
    { id: 4, name: "Zoom", img: "/assets/Logos/zoom.png" },
    { id: 5, name: "Zoho CRM", img: "/assets/Logos/zoho.jpg" },
    { id: 6, name: "Zoho Booking", img: "/assets/Logos/zoho.jpg" },
    { id: 7, name: "Pabbly", img: "/assets/Logos/pabbly.png" },
    { id: 8, name: "Payment Gateway", img: "/assets/Logos/Payment.png" },
    { id: 9, name: "Judge Me", img: "/assets/Logos/judgeme.jpg" },
    { id: 10, name: "Active campaign", img: "/assets/Logos/active.png" },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 bg-green-50 rounded-3xl min-h-[900px] shadow-lg flex justify-center items-center overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-evenly h-full absolute left-0 top-0 bottom-0">
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

      {/* CENTER LOGO */}
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

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-evenly h-full absolute right-0 top-0 bottom-0 py-8">
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

      {/* ANIMATED SVG CONNECTIONS */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* LEFT → CENTER PATHS */}
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

        {/* CENTER → RIGHT PATHS */}
        {[75, 150, 225, 300, 375, 450, 525, 600, 675, 750, 825].map((y, i) => (
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
        ))}
      </svg>
    </div>
  );
};

export default IntegrationsShowcase;
