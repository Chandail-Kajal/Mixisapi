import Header from '@/components/header';
import Founders from '@/components/homepage/founders';
import Section1 from '@/components/homepage/section1';
import React from 'react'

function Home() {
  return (
    <div className='w-full'>
      <div className='bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 text-center font-bold text-sm sm:text-base'>
        WhatsApp Official API – Broadcast Messages, Automate, Engage & Close Deals Faster!
      </div>
      <Header/>
      <Section1/>
      <Founders/>
    </div>
  )
}

export default Home;