import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-4">
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
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            <p className="text-gray-500">Effective Date: March 20, 2018</p>
          </div>

          {/* Main Content */}
          <div className="prose max-w-none text-gray-700">
            <p>
              This Privacy Policy describes how{" "}
              <span className="font-semibold">MixisAPI</span> collects, uses,
              and protects your data when you use our website and services.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect the following types of information from you when you
              use our services:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Account details like Name, Email, Phone, and Business information</li>
              <li>Usage data such as API logs, chat history, and device information</li>
              <li>Billing information handled securely via third-party payment systems</li>
              <li>Cookies and analytics data for performance and personalization</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              2. How We Use Information
            </h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To operate and improve our services</li>
              <li>To process payments and manage billing</li>
              <li>To personalize user experience and send updates</li>
              <li>To ensure security and prevent fraud</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              3. Data Sharing &amp; Retention
            </h2>
            <p className="mb-4">
              We take your privacy seriously and handle your data with care:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Shared only with trusted partners (hosting, analytics, payments)</li>
              <li>Data retained only as long as needed to provide services</li>
              <li>
                You can request data deletion via{" "}
                <a
                  href="mailto:support@mittosapi.com"
                  className="text-green-600 hover:underline"
                >
                  support@mittosapi.com
                </a>
              </li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              4. Security
            </h2>
            <p className="mb-6">
              We implement industry-standard security measures including
              encryption, firewalls, and access controls to protect your
              information. However, please be aware that no method of electronic
              storage is 100% secure.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              5. Your Rights
            </h2>
            <p className="mb-6">
              You have the right to access, correct, or delete your personal
              data. To exercise these rights, please contact us at{" "}
              <a
                href="mailto:support@mittosapi.com"
                className="text-green-600 hover:underline"
              >
                support@mittosapi.com
              </a>
              .
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              6. Changes to This Policy
            </h2>
            <p className="mb-6">
              We may update this policy from time to time. Any changes will be
              posted on our website at{" "}
              <a
                href="https://www.mittosapi.com"
                className="text-green-600 hover:underline"
              >
                www.mittosapi.com
              </a>
              .
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              7. Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:support@mittosapi.com"
                  className="text-green-600 hover:underline"
                >
                  support@mittosapi.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🌐</span>
                <a
                  href="https://www.mittosapi.com"
                  className="text-green-600 hover:underline"
                >
                  www.mittosapi.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
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
  );
};

export default PrivacyPolicy;
