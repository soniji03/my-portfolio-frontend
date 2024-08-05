import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function footer() {
  return (

    <footer className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">Om Soni</h1>
    
    <ul className="flex justify-center mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-4xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      <Link to='https://www.instagram.com/omsoni6325?igsh=MTI1dnNnYzFxcHV2MQ=='>
        <li className="text-[#f43658] rounded-full hover:scale-110 hover:shadow-xl transition-transform hover:shadow-[#f43658]">
          <FaSquareInstagram />
        </li>
      </Link>
      <Link to='https://join.skype.com/invite/uBIknWSQPcIq'>
        <li className="rounded-full text-blue-600 hover:scale-110 hover:shadow-xl transition-transform hover:shadow-blue-600">
          <FaSkype />
        </li>
      </Link>
      <Link to='https://x.com/soniji_29'>
        <li className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black flex items-center justify-center text-xl sm:text-2xl text-white hover:scale-110 hover:shadow-xl transition-transform hover:shadow-black">
          <BsTwitterX />
        </li>
      </Link>
      <Link to='https://www.linkedin.com/in/om-soni-90872a301/'>
        <li className="rounded-full text-blue-900 hover:scale-110 hover:shadow-xl transition-transform hover:shadow-blue-900">
          <FaLinkedin />
        </li>
      </Link>
      <Link to='https://www.facebook.com/om.soni.75873'>
        <li className="rounded-full text-blue-800 hover:scale-110 hover:shadow-xl transition-transform hover:shadow-blue-800">
          <FaFacebook />
        </li>
      </Link>
      <Link to='https://wa.me/qr/DAHR5HU7O2AJD1'>
        <li className="rounded-full text-green-500 hover:scale-110 hover:shadow-xl transition-transform hover:shadow-green-500">
          <FaSquareWhatsapp />
        </li>
      </Link>
    </ul>
    
    <p className="text-sm sm:text-base md:text-lg lg:text-xl">
      © Copyright MyResume. All Rights Reserved <br />
      Designed by Om soni
    </p>
  </footer>
  )
}

export default footer
