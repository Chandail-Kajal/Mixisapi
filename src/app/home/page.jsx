import Header from "@/components/header";
import AppChatBot from "@/components/homepage/Appchatbot";
import Founders from "@/components/homepage/founders";
import HowItWorks from "@/components/homepage/how-it-works";
import Revenue from "@/components/homepage/revenue";
import Section1 from "@/components/homepage/section1";
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
      <WhatsAppBulkMessages/>
      <AppChatBot/>
    </div>
  );
}

export default Home;
