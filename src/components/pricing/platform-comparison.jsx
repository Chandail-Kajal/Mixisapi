import React from "react";

function PlatformComparison() {
  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform Feature Comparison
          </h1>
          <p className="text-gray-600 text-lg">
            Compare the most popular WhatsApp Business API providers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition duration-200">
            <div className="bg-green-600 px-4 py-4 flex items-center justify-center space-x-3">
              <img
                src="https://mittosapi.com/assets/mittoslogo-C5UnFXGx.png"
                alt="MittosAPI logo"
                className="h-10 w-auto object-contain bg-white rounded p-1"
              />
              <h2 className="text-lg font-semibold text-white">MittosAPI</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Unlimited Audience Management
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Standard / Custom Attributes, Advanced Filters,
                    Segmentation, Tags, Notes, Orders
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Unlimited Broadcasting
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Mittos API Scheduler, Bulk Campaign APIs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">20 Users Access</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Additional User @ Rs. 2500/year
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Advance Chatflow Builder
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Collect data, trigger automation, route chats, integrate
                    CRM, get alerts
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Auto Message Campaigns &amp; Trigger Based Campaigns
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Chat Inbox with Role Based / Round Robin Chats
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Catalog Ordering with WhatsApp Catalog &amp; Shopify
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    WhatsApp Charges: Marketing ₹0.80, Utility &amp;
                    Authentication ₹0.13
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Standard Promotions (Multi-media campaigns, Open &amp; Read
                    Rate Tracking)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Acquire Leads via CTWA ads
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Dedicated Customer Success Manager
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Integrations: Facebook, Instagram, Shopify, WooCommerce,
                    Indiamart, JustDial, Zoom, Google Sheets +25 more
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Calls Tracking (Upto 20 Phones)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Zero-fee WhatsApp Setup
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Official WhatsApp API + Blue Tick Verification Help
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    AI Automation (Answer queries, reminders, info collection,
                    etc.)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Drip Campaigning, Advanced Messaging API, Campaign Scheduler
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Campaign Analytics, Smart Agent Routing, Budget Analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Project APIs, Custom Agent Rules
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Broadcasting &amp; Retargeting with Higher Rate Limits
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition duration-200">
            <div className="bg-green-600 px-4 py-4 flex items-center justify-center space-x-3">
              <img
                src="https://mittosapi.com/assets/Aisensy-DlxB96tQ.jpeg"
                alt="Aisensy logo"
                className="h-10 w-auto object-contain bg-white rounded p-1"
              />
              <h2 className="text-lg font-semibold text-white">Aisensy</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Per Template Message Charges
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Marketing: ₹0.88, Utility: ₹0.125, Authentication: ₹0.125
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Unlimited Free Service Conversations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    1 Owner + 5 FREE Agents (extra @ ₹750/month)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Smart Audience Segregation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Broadcasting &amp; Retargeting
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Template Message APIs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Multi-Agent Live Chat
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Agent Transfer &amp; Manager Monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    AiSensy Marketplace Integrations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    2400 Messages/min
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Shopify &amp; WooCommerce Integrations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Dialogflow Chatbot Integration
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Shared Team Inbox
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Click-to-WhatsApp Ads Manager
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Upto 100 Tags, 20 Custom Attributes
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Campaign Scheduler &amp; Click Tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Smart Agent Routing, Custom Agent Rules
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Carousel Template Click Tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    User Access Control, Automatic Retry
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Chatbot Flows (5 Flows ≈ 2500 messages separately charged)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition duration-200">
            <div className="bg-green-600 px-4 py-4 flex items-center justify-center space-x-3">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAY1BMVEX///8ApouJzL6u29Ly+/oAn4IAooY0sZoAm3v4/Pyn2c5buqbU7Ofq9/Xf8e3a7uqExrYsrJRnwK5EtJ6Sz8K14NdwwbBUtaBRuaVOsZo6rJOd1Mgrp4weqpDI6OF+yLkAk3DKtKhUAAAEHElEQVR4nO2cbXuqMAyGV6ERyosDBd9l//9XHrCw4xQK9UpaP+T5smuj6+6FNk0g8euLxWKxWCwWi8WaV5jnm02ehb45zNqo73JbXK/FtvxWG980U4qrwwVaiVbd18u+in0zjSgMrvLO+F8gRfBxS+CWPGNq1OTmm+yvFIxg6jWgfLM9KG7kA5nW7w9k8zkrtRyw2lWZrFQQqF0ifpcClL75Bq0Ge8JaZb354kytB1K58ss3SPVAcAz+Xgi2w5WPWKebYliL2fOlbFi7xSc4/95scjd2cadJYeua6lVVpFFGOVtS/W9ElVuqV8VHzVlP+KC41qRH3z6q6nf25FEZ9gM8m7Q3mDRgVNJockfKC71XDLFHeN9tUOTuqEaUanOdTWPO2uh+oxPtforUNCYtpt2XMyV3a+1fXP2jsv3d6okrplEtijp6D+WGaEI675gJOlZ6lBuiCf1EneZA74N+nAC9KA5TVR+KsFOsrmuDrkHcDcqLQ63S0K07TVUJURsZR9rnHCbykD7IO9wHKdnG1RGUgdFF4GI2xZBqrLv47SxNnK1n6sLRtI8GAYrGDWqWPCZykNQnoz3vg07No9EBEqM/Q1GsxF+uqfTzCfX5W0W8VuNyEdcC8pKUND8icXYZFmGUks4vRwvSE9meyjA5O1KiLZXtUTlbUnMw87YaZM6WtKHgrNA5W1KCTCom4GxJ8Z3UigYU/bFUfqLgFOKE7U3PJAadywvtFW6pQE2Z9htKZyK59yVxz6eGDhTXl16pOIUoMDlDMoO2JsVcpCnRVuoEmIs0oAQN5v/+Yp3pOIXA9KQ056cW6inKoAzKoAzKoAzKoAzKoAzKoAzKoAzKoAzqBxSktbyAQvMVWurLC6is7ecZvTHkFn2jxnrs3tODrq2nySIfoG9UXN38gEbWL912Xm69rhKyUjIyi4tbb7vtx9+nOjiZjpYFDNXYJC5ALRsWhgJyD6Cl1buszahBnQQlYFW3XI+//nMCavMeMx9zoo5AhVz+1m1ihbqKR0+L22rU1BRuQCFZuJ/SiQmcRfgLa6zC6Wo5V6nIokaALJmewFnOBKvZIqvcwCkEZsuDMbmbPfPNVaeoBUXmLBQSY8BXFebfxux2mUmXQajJzZ/PFfhIzFqy2bweknHXH+5mi2NRWzPmH0AArIPsaVfF+eoy/4sHt6CtpKiDW657LOJsczsfYEEVksUpjAV6r8nfJvV3qzo5La3QRy0ftnj29NINPjMct2mQ8CEZbvEwGSjscasyyUCxexupQNE/I4AIFK7YFc5UoOhl+DSg9s+E/IDKb3ROElDYEbRe4YMSfdAKOihcaT4YABkUoCbquUIFbcNBsl57PFCIoEnpGhhXgCAhLqdtfSNts0wDBFVVSt9gy2KxWCwWi8Vikegf53VAjEhp9fgAAAAASUVORK5CYII="
                alt="Interakt logo"
                className="h-10 w-auto object-contain bg-white rounded p-1"
              />
              <h2 className="text-lg font-semibold text-white">Interakt</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Advanced chatbot flows with branching &amp; API calls
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Data Auto-assignment, Advanced Webhooks
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">RCS channel</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Higher Rate Limits &amp; Better Campaign Speeds
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    No Template Markups
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Personalised Support
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Unlimited Messages (per WhatsApp number)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Unlimited Contacts
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Custom Fields, Tags, Events (varies by plan)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Template Charges: Marketing ₹0.882, Auth ₹0.129, Utility
                    ₹0.160, Service FREE
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition duration-200">
            <div className="bg-green-600 px-4 py-4 flex items-center justify-center space-x-3">
              <img
                src="data:image/png;base64,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"
                alt="Gallabox logo"
                className="h-10 w-auto object-contain bg-white rounded p-1"
              />
              <h2 className="text-lg font-semibold text-white">Gallabox</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Chatbot builder with drag-and-drop connectors
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Connectors include Google Sheets, Razorpay &amp; Shopify
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Messaging &amp; chatbot analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Broadcast to segmented contacts
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Shared team inbox with collaboration
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    WhatsApp Flows/Forms
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Basic messaging API
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    30+ Native integrations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    WhatsApp catalogs &amp; Drip campaigns
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Advanced messaging API
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    Multiple WhatsApp numbers/channels
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">
                    AI Rewrite using Gallabox GPT
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformComparison;
