import React from "react";

const ContactSection = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-10 font-inter bg-white text-center relative">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Let's Get in <span className="text-green-600">Touch</span>
      </h2>
      <p className="text-gray-600 text-lg mb-8">
        We'd love to know your WhatsApp use-case and help your business grow
        using WhatsApp!
      </p>

      {/* Form */}
      <div className="max-w-3xl mx-auto mb-10">
        <form className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 capitalize">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 capitalize">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 capitalize">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your phone"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 capitalize">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your company name"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-10 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">
        Connect with <span className="text-green-600">Us</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {/* Address */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="bg-red-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
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
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h4 className="font-bold text-lg text-gray-900">We're at</h4>
          <p className="text-gray-700 leading-relaxed">
            1207, 12th Floor, Paradise Tower, Thane, Maharashtra, 400602
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="bg-red-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h4 className="font-bold text-lg text-gray-900">Call Us</h4>
          <p className="text-gray-700">(10 AM - 7 PM)</p>
          <p className="font-medium text-gray-800">Sales: +91 9594686906</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="bg-red-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </div>
          <h4 className="font-bold text-lg text-gray-900">Email Us</h4>
          <p className="text-gray-700">support@mittosapi.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
