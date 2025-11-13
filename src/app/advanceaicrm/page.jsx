import React from "react";

const AdvanceAiCRM = () => {
  return (
    <div>
      <div className="flex-grow">
        
        <div className="w-full bg-white py-12 px-6">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-6 mb-5">
                <div className="flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-base text-black font-semibold bg-green-200 backdrop-blur-sm shadow-sm hover:border-green-500">
                  ⚡ Advance Ai CRM
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advance Ai CRM</h2>
              <p className="text-gray-600 mb-6">
                Mittos API WhatsApp CRM helps businesses manage, organize, and
                segment contacts to improve customer engagement and run more
                effective WhatsApp campaigns. It also streamlines workflows by
                providing all the tools needed to build stronger customer
                relationships and scale outreach in one unified platform.
              </p>
              <h4 className="font-semibold text-gray-800 mb-3">
                With Mittos API WhatsApp CRM, you can:
              </h4>
              <ul className="mt-8 space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">🟢</span> Add contacts manually or in bulk using CSV/Excel files.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">🟢</span> Add or update contacts from third-party websites using our REST API.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">🟢</span> Segment your audience using lists, tags, and custom attributes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">🟢</span> Export contact data anytime for reporting or integrations.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">🟢</span> Automatically capture leads from ads and assign them to preferred lists.
                </li>
              </ul>
              <a href="/forms" data-discover="true">
                <button className="bg-green-600 mt-10 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
                  Create Your Free Account
                </button>
              </a>
            </div>

            <div className="flex justify-center">
              <img
                src="https://mittosapi.com/assets/crm-CkwF4ZCV.png"
                alt="Advance Ai CRM Dashboard"
                className="w-full max-w-lg rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        </div>
    </div>
  );
};

export default AdvanceAiCRM;
