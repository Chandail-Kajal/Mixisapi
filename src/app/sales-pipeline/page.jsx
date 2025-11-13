import React from "react";

const SalesPipeline = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full">
        {/* Tag Line */}
        <div className="flex flex-wrap justify-center gap-6 mb-5">
          <div className="flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-base text-black font-semibold bg-green-200 backdrop-blur-sm shadow-sm hover:border-green-500">
            ⚡ Broadcast Messages With WhatsApp Official API
          </div>
        </div>

        {/* Heading and Description */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-6">
          Sales Pipeline
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          A Sales Pipeline is a structured process that guides prospects from
          initial contact to final purchase. It helps businesses generate leads,
          qualify high-potential clients, nurture relationships, and close deals
          effectively. With clear visibility and automation, it ensures
          predictable revenue, faster conversions, and consistent business
          growth.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 text-center">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              1. Lead Generation
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Attracting leads through marketing efforts like ads, social media,
              and referrals.
            </p>
            <div className="mt-3 flex justify-center">
              <img
                src="data:image/webp;base64,UklGRkQMAABXRUJQVlA4WAoAAAAYAAAAmgAATwAAQUxQSHUAAAABf6CmkRQ4eh..."
                alt="Meta Business Partner"
                className="h-14"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 text-center">✅</div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              2. Qualification
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Evaluating leads based on budget, needs, and intent to identify
              high-potential prospects.
            </p>
            <div className="mt-3 flex justify-center">
              <img
                src="data:image/webp;base64,UklGRkQMAABXRUJQVlA4WAoAAAAYAAAAmgAATwAAQUxQSHUAAAABf6CmkRQ4eh..."
                alt="Meta Business Partner"
                className="h-14"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 text-center">💡</div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              3. Nurturing
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Engaging unready leads with personalized communication until
              they’re prepared to buy.
            </p>
            <div className="mt-3 flex justify-center">
              <img
                src="data:image/webp;base64,UklGRkQMAABXRUJQVlA4WAoAAAAYAAAAmgAATwAAQUxQSHUAAAABf6CmkRQ4eh..."
                alt="Meta Business Partner"
                className="h-14"
              />
            </div>
          </div>
          <div className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 text-center">🤝</div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              4. Closing
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Presenting solutions and addressing objections to convert leads into customers.
            </p>
            <div className="mt-3 flex justify-center">
              <img
                src="http://data:image/webp;base64,UklGRkQMAABXRUJQVlA4WAoAAAA…AAAD//wAAAqAEAAEAAACbAAAAA6AEAAEAAABQAAAAAAAAAA=="
                alt="Meta Business Partner"
                className="h-14"
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default SalesPipeline;
