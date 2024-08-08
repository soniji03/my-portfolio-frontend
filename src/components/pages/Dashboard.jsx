import React, { useEffect, useState } from 'react';
import '../../App.css'

function Dashboard() {

  const backgroundImageStyle = {
    backgroundImage: 'url(/bg-3.avif)', // Correct the URL syntax
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
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

    <div id="dashboard" style={font} className="bg-[#D0D8FF] mt-16 lg:py-0">
      <div className="flex flex-col lg:flex-row justify-between mx-auto max-w-7xl w-full py-12 lg:py-24 px-4 lg:px-28">
        <div className="mb-8 lg:mb-0 lg:p-16">
          <div className="text-white max-w-md">
          <h6 className="mb-4 font-bold bounce text-[#ef6b74]">GET EVERY SINGLE SOLUTIONS.</h6>
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-blue-950 fade">
        <span className="block">I'm</span>
        <span className="block">Web Developer</span>
        <span className="block">Om Soni</span>
      </h1>
            <p className="mb-6 text-blue-950 text-sm lg:text-base">
              Transforming ideas into interactive, user-friendly web experiences.
              With a passion for clean code and innovative design,
              I bring your digital vision to life with precision and creativity.
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button className="bg-[#ee685b] text-white font-bold p-3 lg:p-4 w-full sm:w-32 px-4 rounded">
              Learn More </button>
            <button className="bg-white text-black font-medium p-3 lg:p-4 w-full sm:w-32 px-4 rounded">
              Hire Me</button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/demo.png" alt="Om Soni" className="shadow-2xl h-auto w-full max-w-[20rem] lg:max-w-[29rem] object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
