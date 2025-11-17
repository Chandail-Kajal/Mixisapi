"use client";
import { useState } from "react";

const faqData = [
  {
    question: "What does Mittos API do?",
    answer:
      "Mittos API provides businesses with a WhatsApp marketing software they can use to Broadcast & automate messages, run Click to WhatsApp Ads, build Chatbots, showcase catalogues, provide multi-agent Live chat support, collect payments within WhatsApp and much more.",
  },
  {
    question: "Is Mittos API an Official WhatsApp Marketing Software?",
    answer:
      "Yes, Mittos API is an Official WhatsApp Business Solution Partner (BSP) built on WhatsApp Business APIs.",
  },
  {
    question: "How do I Get Started with Mittos API?",
    answer:
      "To get started, simply visit our website https://whinta.com/signup, sign up for an account, and follow the setup instructions. Our support team is also available to assist you with the onboarding process.",
  },
  {
    question: "Can I Integrate Mittos API With My Existing System?",
    answer:
      "Yes, Mittos API offers API integration, allowing you to connect with your existing systems and applications for a unified workflow.",
  },
  {
    question: "Is Mittos API Secure?",
    answer:
      "Absolutely. Mittos API is built with robust security features to protect your data and ensure privacy in all communications.",
  },
  {
    question: "Can I Use an Existing Number With Mittos API?",
    answer:
      "Yes, you can use your existing WhatsApp application number or existing WhatsApp API number with Mittos API.",
  },
  {
    question: "How to Add/Recharge WhatsApp Credit Balance?",
    answer:
      "You can add a balance through Mittos API Official App by yourself.",
  },
  {
    question: "How Can I See My Credit Usages?",
    answer:
      "You can view your WhatsApp API credit usage in your dashboard under App Settings > WhatsApp credits. In the section you may see credits usage every month by conversation type & country wise.",
  },
  {
    question: "What is The Minimum Credit Balance to be Maintained?",
    answer:
      "There is no such minimum balance required, but your WhatsApp API will stop working once the credit balance reaches amount 0.",
  },
  {
    question: "Can I See The Demo of Mittos API?",
    answer:
      "Yes, we offer demos to showcase the features and benefits of Whinta. Please contact us to schedule a demo.",
  },
  {
    question: "Can I Manage Multiple Teams and Users in Mittos API?",
    answer:
      "Mittos API provides robust organization, user, and team management features, allowing you to assign roles, set permissions, and ensure efficient collaboration across your business.",
  },
  {
    question: "Can I Get a Refund?",
    answer:
      "Subscription charges and WhatsApp conversation charges are non-refundable. You are eligible to request a refund only if the WhatsApp API fails to start on the dashboard.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ques = faqData.map((q, id) => ({ ...q, id }));
  const leftFaqs = ques.filter((_, index) => index % 2 === 0);
  const rightFaqs = ques.filter((_, index) => index % 2 !== 0);

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-14">
          Want To Know More?
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-[50%] flex flex-col gap-8">
            {leftFaqs.map((item, index) => (
              <div
                key={item.id}
                className="border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex justify-between items-center px-5 py-4 font-semibold text-left text-gray-800 transition-all duration-300 group bg-white hover:bg-gradient-to-r hover:from-green-50 hover:to-white"
                >
                  <span className="pr-6">{item.question}</span>
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
                    className={`lucide lucide-chevron-down h-6 w-6 text-green-600 transform transition-transform duration-300 ${
                      openIndex === item.id ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`px-5 overflow-hidden transition-all duration-500 ease-in-out bg-white ${
                    openIndex === item.id ? "max-h-[500px] py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-[50%] flex flex-col gap-8">
            {rightFaqs.map((item, index) => (
              <div
                key={item.id}
                className="border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex justify-between items-center px-5 py-4 font-semibold text-left text-gray-800 transition-all duration-300 group bg-white hover:bg-gradient-to-r hover:from-green-50 hover:to-white"
                >
                  <span className="pr-6">{item.question}</span>
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
                    className={`lucide lucide-chevron-down h-6 w-6 text-green-600 transform transition-transform duration-300 ${
                      openIndex === item.id ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`px-5 overflow-hidden transition-all duration-500 ease-in-out bg-white ${
                    openIndex === item.id ? "max-h-[500px] py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
