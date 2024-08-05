import React from 'react'
import { FaRegSmile } from "react-icons/fa";
import { BsJournalRichtext } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { useEffect, useRef } from 'react';
import PureCounter from '@srexi/purecounterjs';

function Facts() {
  const backgroundImageStyle = {
    backgroundImage: 'url(/bg-6.avif)', // Correct the URL syntax
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
    width: '100%',
    // style={backgroundImageStyle}
  };
  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    }
  }
  return (

    <div id="fact" style={font} className='bg-[#D0D8FF] w-full section min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <div className='max-w-5xl mx-auto p-[4rem]'>
        <h1 className='relative text-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-12'>
          FACTS
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 sm:w-56 h-1 bg-gradient-to-r from-white via-blue-900 to-white"></span>
        </h1>
        <p className='text-base sm:text-lg lg:text-xl mb-8 sm:mb-12'>
          We tailor our approach to your specific needs, which may include creating a new website or 
          developing a targeted social media marketing strategy. Our focus is on building applications that
           are not only fast and secure but also deliver an exceptional user experience and scale effectively.
            We prioritize your satisfaction throughout the process. Our commitment is to ensure you are 
            completely delighted withthe final product before we consider our job complete and hand over 
            full control to you...
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto'>
        {[
          { icon: FaRegSmile, title: "Happy Clients" },
          { icon: BsJournalRichtext, title: "Projects" },
          { icon: BsHeadset, title: "Hours Of Support" },
          { icon: BsAward, title: "Awards" },
        ].map((item, index) => (
          <div key={index} className='w-36 sm:w-40 flex flex-col items-center justify-center'>
            <div className='h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-700 flex items-center justify-center mb-3 sm:mb-4'>
              <item.icon className='h-6 w-6 sm:h-8 sm:w-8 text-white' />
            </div>
            <span className="purecounter mb-2 sm:mb-4 text-2xl sm:text-3xl font-bold">100</span>
            <p className='text-center text-base sm:text-lg lg:text-xl'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Facts
