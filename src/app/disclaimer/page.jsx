import React from "react";
import { FaQ } from "react-icons/fa6";

const DisclaimerPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <div className="flex-grow">
        {/* Disclaimer Section */}
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-alert-triangle"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Disclaimer
                </h1>
                <p className="text-gray-500">Last Updated: October 07, 2025</p>
              </div>

              {/* Disclaimer Content */}
              <div className="prose max-w-none text-gray-700">
                <p>
                  The information provided by{" "}
                  <span className="font-semibold">MittosAPI</span> ("we," "our,"
                  or "us") on this website is for general informational and
                  educational purposes only.
                </p>
                <p className="mt-4">
                  While we make every effort to ensure the accuracy of the
                  information shared, we do not guarantee specific business
                  outcomes, earnings, or sales results.
                </p>
                <p className="mt-4">
                  Your success depends on various factors including your
                  business model, marketing efforts, and implementation of
                  strategies.{" "}
                  <span className="font-semibold">
                    MittosAPI does not provide financial, legal, or investment
                    advice.
                  </span>
                </p>
                <p className="mt-4">
                  We are not liable for any direct or indirect loss resulting
                  from the use of our services or information provided.
                </p>
                <p className="mt-4">
                  All tools, APIs, or automation solutions are provided on an
                  "as-is" basis without any warranty of performance or
                  profitability.
                </p>

                <p className="mt-6">
                  By using this website and our services, you acknowledge and
                  agree to this disclaimer and our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-green-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  ,{" "}
                  <a
                    href="/refund-policy"
                    className="text-green-600 hover:underline"
                  >
                    Refund Policy
                  </a>
                  , and{" "}
                  <a
                    href="/terms"
                    className="text-green-600 hover:underline"
                  >
                    Terms of Service
                  </a>
                  .
                </p>

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <p className="font-medium text-gray-900">
                    For any queries, contact:
                  </p>
                  <p className="mt-2 text-green-600">📧 support@mittosapi.com</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-left mr-2"
                  >
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You can import and reuse your Founders component here */}
      {/* <Founders /> */}

      {/* Footer */}
      <FaQ/>
     
    </div>
  );
};

export default DisclaimerPage;
