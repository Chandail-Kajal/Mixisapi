import React from "react";

const RefundPolicy = () => {
  return (
    <div className="flex-grow">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Cancellation &amp; Refund Policy
              </h1>
              <p className="text-gray-500">Last Updated: October 8, 2025</p>
            </div>

            {/* Content Section */}
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                This policy is designed to be fair and reasonable, ensuring that
                customers feel secure in their transactions with MixisAPI,
                while also protecting the company from potential abuse of the
                refund process.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                1. Trial Period
              </h2>
              <p className="mb-6">
                MixisAPI offers a free trial for new users, during which they
                can explore the Basic Plan features available on the platform
                along with a free trial of Chatbot Flows. Since no credit card
                is required to start the trial, users are not charged.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                2. Subscription Services
              </h2>
              <p className="mb-6">
                Following the free trial, if a user subscribes to any of
                MixisAPI's paid services, they are ineligible to receive a
                refund. The FREE trial is provided to ensure that the users try
                out all the services and decide whether to continue with the
                MixisAPI platform. If the user feels unsatisfied, they can
                cancel their FREE Trial anytime and they will not be charged. If
                the user has subscribed to any MixisAPI plan, they are not
                eligible for a refund. They can cancel their subscription to
                ensure they are not charged the next Year.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                3. Non-Refundable Services
              </h2>
              <p className="mb-6">
                All MixisAPI services, such as the charges for a MixisAPI
                Plan, WhatsApp Conversation Credits (WCCs), Add-ons or any
                third-party integrations, are non-refundable due to the nature
                of the service and the costs incurred by MixisAPI to provide
                these services. This includes one-time setup payments.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                4. Technical Issues
              </h2>
              <p className="mb-6">
                If a user experiences continuous technical issues that prevent
                them from using the service effectively, and if these issues are
                verified by MixisAPI's support team, a partial or full refund
                may be granted at MixisAPI's discretion.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                5. Cancellation Policy
              </h2>
              <p className="mb-6">
                A user may cancel their subscription at any time. However, the
                cancellation will be effective at the end of the current billing
                cycle, and users will not receive a refund for the remaining
                period of the subscription.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                6. Contact and Support
              </h2>
              <p className="mb-6">
                For any Support-related queries, users are encouraged to contact
                MixisAPI's customer support team, which is committed to
                providing efficient and personalized assistance.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                7. Refund Process
              </h2>
              <p className="mb-6">
                To request a refund, users should write to us at{" "}
                <a
                  href="mailto:support@mittosapi.com"
                  className="text-green-600 hover:underline"
                >
                  support@mittosapi.com
                </a>
                . The request must include the transaction details and a clear
                explanation of the reason for the refund request.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                8. Policy Amendments
              </h2>
              <p className="mb-6">
                MixisAPI reserves the right to modify this refund policy at any
                time, and the changes will be effective immediately upon posting
                the updated policy on the MixisAPI website.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                9. Legal Compliance
              </h2>
              <p className="mb-6">
                This refund policy complies with the local laws and regulations
                where MixisAPI operates. Users are also encouraged to review
                the{" "}
                <a
                  className="text-green-600 hover:underline"
                  href="/terms-of-service"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="text-green-600 hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>{" "}
                for a comprehensive understanding of their rights and
                obligations.
              </p>
            </div>

            {/* Footer Section */}
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
    </div>
  );
};

export default RefundPolicy;
