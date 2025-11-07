import Header from "@/components/header";
import BulkMessaging from "@/components/homepage/bulk-messaging";
import Campaign from "@/components/homepage/campaign";
import ComparisonSection from "@/components/homepage/comparison";
import ComplianceSection from "@/components/homepage/compliance";
import FAQSection from "@/components/homepage/faq";
import Footer from "@/components/homepage/footer";
import Founders from "@/components/homepage/founders";
import HowItWorks from "@/components/homepage/how-it-works";
import IntegrationsShowcase from "@/components/homepage/integration-showcase";
import LeadCaptureFeatures from "@/components/homepage/lead-capture-features";
import NoCode from "@/components/homepage/no-code";
import OneDashboard from "@/components/homepage/one-dashboard";
import Revenue from "@/components/homepage/revenue";
import Section1 from "@/components/homepage/section1";
import WhatsappAds from "@/components/homepage/whatsapp-ads";
import WhatsAppForms from "@/components/homepage/whatsapp-forms";
import WhyTrustMittos from "@/components/homepage/why-trust-us";
import React from "react";

function Home() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 text-center font-bold text-sm sm:text-base">
        WhatsApp Official API – Broadcast Messages, Automate, Engage & Close
        Deals Faster!
      </div>
      <Header />
      <Section1 />
      <Founders />
      <HowItWorks />
      <Revenue />
      <BulkMessaging />
      <NoCode />
      <WhatsAppForms />
      <Campaign />
      <WhatsappAds />
      <OneDashboard />
      <LeadCaptureFeatures />
      <div>
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 flex flex-col md:flex-row items-center justify-center">
            <div className="text-green-600 mr-0 md:mr-3 mb-3 md:mb-0 text-3xl"></div>
            💡 Imagine The Possibilities of Automating Anything!
          </h2>
          <div
            className="h-1 w-3/4 md:w-1/2 lg:w-2/5 bg-gradient-to-r from-green-600 to-green-600 mx-auto mt-3 rounded-full"
            // style="transform: none;"
          ></div>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MittosAPI supports more than 2,000+ applications for seamless
            real-time data transfer. For example: When new sales happen on
            WooCommerce, Add customer details to&nbsp;Google&nbsp;Sheets
          </p>
        </div>
      </div>

      <IntegrationsShowcase />
      <ComparisonSection />
      <WhyTrustMittos />
      <ComplianceSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
