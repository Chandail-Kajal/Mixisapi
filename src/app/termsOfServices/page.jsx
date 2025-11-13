import React from "react";

const TermsOfService = () => {
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
                className="lucide lucide-file-text"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Terms of Service
            </h1>
            <p className="text-gray-500">Last Updated: October 7, 2025</p>
          </div>

          {/* Content Section */}
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">
              Welcome to MittosAPI. These Terms of Service ("Terms", "Agreement")
              govern your access to and use of our website, products, and
              services ("Services"). By using our Services, you agree to comply
              with these Terms. If you do not agree, please do not use our
              platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              1. About MittosAPI
            </h2>
            <p className="mb-6">
              MittosAPI provides WhatsApp Official API, chatbot builder,
              automation tools, and related digital services that help
              businesses communicate efficiently with their customers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              2. Eligibility
            </h2>
            <p className="mb-6">
              You must be at least 18 years old to use MittosAPI Services. By
              using our Services, you confirm that you are legally capable of
              entering into a binding contract.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              3. Account Registration
            </h2>
            <p className="mb-4">
              To access certain features, you may be required to create an
              account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate and up-to-date information.</li>
              <li>Maintain the confidentiality of your login credentials.</li>
              <li>Be responsible for all activities under your account.</li>
            </ul>
            <p className="mb-6">
              MittosAPI reserves the right to suspend or terminate accounts
              found in violation of our policies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              4. Use of Services
            </h2>
            <p className="mb-4">
              You agree to use MittosAPI only for lawful business purposes and
              not for:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Sending spam, phishing, or unsolicited promotional messages.</li>
              <li>Sharing illegal, abusive, or misleading content.</li>
              <li>Violating WhatsApp, Meta, or any third-party platform policies.</li>
              <li>
                Reselling, redistributing, or cloning MittosAPI products without
                written permission.
              </li>
            </ul>
            <p className="mb-6">
              Violation of these terms may lead to account suspension or
              permanent termination.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              5. Payment and Billing
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>All payments are processed securely via our payment partners.</li>
              <li>
                Prices and features of plans are subject to change with prior
                notice.
              </li>
              <li>
                Once a paid plan or WhatsApp credit is purchased, it is
                non-refundable as per our Refund Policy.
              </li>
              <li>Users are responsible for any taxes applicable to their purchases.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              6. Data Privacy and Security
            </h2>
            <p className="mb-6">
              We prioritize your data security. All user data is handled
              according to our{" "}
              <a
                className="text-green-600 hover:underline"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              . By using MittosAPI, you consent to our collection and processing
              of data for service improvement and analytics.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              7. Intellectual Property
            </h2>
            <p className="mb-6">
              All content, designs, software, and trademarks available on
              MittosAPI are the intellectual property of MittosAPI. You may not
              copy, modify, distribute, or use any part of our platform for
              commercial purposes without prior written consent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              8. Third-Party Integrations
            </h2>
            <p className="mb-6">
              MittosAPI integrates with third-party platforms such as Meta,
              WhatsApp, and payment gateways. We are not responsible for any
              downtime, data issues, or policy violations caused by these
              third-party services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="mb-4">MittosAPI and its team shall not be liable for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                Any loss of data, business, or profits resulting from use or
                inability to use our services.
              </li>
              <li>Errors, delays, or interruptions beyond our control.</li>
            </ul>
            <p className="mb-6">
              Our total liability shall not exceed the amount you paid for the
              service within the last 30 days.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              10. Termination
            </h2>
            <p className="mb-4">We may suspend or terminate your access without notice if:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You violate our Terms,</li>
              <li>Engage in fraudulent or abusive activity,</li>
              <li>Misuse our brand or technology.</li>
            </ul>
            <p className="mb-6">
              Upon termination, your right to use our Services will immediately
              cease.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              11. Modifications
            </h2>
            <p className="mb-6">
              MittosAPI reserves the right to modify or update these Terms at
              any time. Updated versions will be posted on our website with the
              new "Last Updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              12. Governing Law
            </h2>
            <p className="mb-6">
              These Terms are governed by and construed in accordance with the
              laws of India. Any disputes will be subject to the jurisdiction of
              the courts located in Thane, Maharashtra, India.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              13. Contact Information
            </h2>
            <p className="mb-6">
              If you have questions about these Terms, please contact us at:
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

          {/* Footer Button */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <a
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              href="/"
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

export default TermsOfService;
