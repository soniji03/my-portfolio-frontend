import React from 'react'
import AuthenticatedLayout from './layouts/AuthenticatedLayout'
import { useState } from 'react'
import { FcTodoList } from "react-icons/fc";
import { SiCanva } from "react-icons/si";
import { MdQueueMusic } from "react-icons/md";
import { FcCalculator } from "react-icons/fc";
import { LuUserCheck } from "react-icons/lu";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { Link } from 'react-router-dom'


function Home() {

  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    }
  };

  return (
    <AuthenticatedLayout>
<div style={font} className='bg-[#D0D8FF] min-h-screen px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-12'>
<div className='flex justify-center md:py-20 flex-wrap mb-2 md:mb-2'>
  <h1 className='relative text-center text-2xl md:text-3xl font-bold'>PROJECTS
    <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 md:w-56 h-1 bg-gradient-to-r from-white via-blue-900 to-white"></span>
  </h1>
</div>

<div className='grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mx-auto max-w-7xl'>

<div className='flex group flex-col gap-4 w-full md:w-[24.5rem] md:h-[30rem]'>
  <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
    <div className='flex flex-col items-center h-full'>
      <div className='h-24 w-24 md:h-32 md:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 md:mb-10 transition duration-300 ease-in-out group-hover:bg-[#e7e561]'>
        <FcTodoList className='h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-8'>Todo-List</h2>
        <p className='text-base md:text-lg'>In this website, what we do daily, we can write everything in the form of a list.</p>
      </div>
    </div>
  </div>
  <div className='text-center bottom-0'>
    <button className='p-3 w-full md:w-[24.5rem] rounded-lg font-bold bg-[#657cef] hover:shadow-2xl hover:bg-[#e7e561] '>DOWNLOAD</button>
  </div>
</div>

<div className='flex group flex-col gap-4 w-full md:w-[24.5rem] md:h-[30rem]'>
  <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
    <div className='flex flex-col items-center h-full'>
      <div className='h-24 w-24 md:h-32 md:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 md:mb-10 transition duration-300 ease-in-out group-hover:bg-[#fb8d8d]'>
        <SiCanva className='h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-8'>Canva Clone</h2>
        <p className='text-base md:text-lg'>A Canva clone website mimics Canva's features, enabling users to design graphics, presentations, and posts with an intuitive interface...</p>
      </div>
    </div>
  </div>
  <div className='text-center bottom-0'>
    <button className='p-3 w-full md:w-[24.5rem] rounded-lg font-bold bg-[#657cef] hover:shadow-2xl hover:bg-[#fb8d8d]'>DOWNLOAD</button>
  </div>
</div>

<div className='flex group flex-col gap-4 w-full md:w-[24.5rem] md:h-[30rem]'>
  <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
    <div className='flex flex-col items-center h-full'>
      <div className='h-24 w-24 md:h-32 md:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 md:mb-10 transition duration-300 ease-in-out group-hover:bg-[#74e7bd]'>
        <FaAmericanSignLanguageInterpreting className='h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-8'>Sign Recognition</h2>
        <p className='text-base md:text-lg'>Sign language recognition with Python uses machine learning and computer vision to interpret gestures, facilitating communication between deaf individuals and others....</p>
      </div>
    </div>
  </div>
  <div className='text-center bottom-0'>
    <button className='p-3 w-full md:w-[24.5rem] rounded-lg font-bold bg-[#657cef] hover:shadow-2xl hover:bg-[#74e7bd]'>DOWNLOAD</button>
  </div>
</div>

<div className='flex group flex-col gap-4 w-full md:w-[24.5rem] md:h-[30rem]'>
  <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
    <div className='flex flex-col items-center h-full'>
      <div className='h-24 w-24 md:h-32 md:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 md:mb-10 transition duration-300 ease-in-out group-hover:bg-[#5ebdf5]'>
        <FcCalculator className='h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-8'>Calculator</h2>
        <p className='text-base md:text-lg'>A React calculator is a web app that uses components for arithmetic operations, offering an interactive, user-friendly interface for calculations.....</p>
      </div>
    </div>
  </div>
  <div className='text-center bottom-0'>
    <button className='p-3 w-full md:w-[24.5rem] rounded-lg font-bold bg-[#657cef] hover:shadow-2xl hover:bg-[#5ebdf5]'>DOWNLOAD</button>
  </div>
</div>

<div className='flex group flex-col gap-4 w-full md:w-[24.5rem] md:h-[30rem]'>
  <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
    <div className='flex flex-col items-center h-full'>
      <div className='h-24 w-24 md:h-32 md:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 md:mb-10 transition duration-300 ease-in-out group-hover:bg-[#f98d77]'>
        <MdQueueMusic className='h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-8'>Music System</h2>
        <p className='text-base md:text-lg'>A React music system is a web app for playing, pausing, and managing music, with interactive controls and playlist management.....</p>
      </div>
    </div>
  </div>
  <div className='text-center bottom-0'>
    <button className='p-3 w-full md:w-[24.5rem] rounded-lg font-bold bg-[#657cef] hover:shadow-2xl hover:bg-[#f98d77]'>DOWNLOAD</button>
  </div>
</div>

<div className='flex group flex-col gap-4 w-full md:w-[24.5rem] md:h-[30rem]'>
  <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
    <div className='flex flex-col items-center h-full'>
      <div className='h-24 w-24 md:h-32 md:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 md:mb-10 transition duration-300 ease-in-out group-hover:bg-[#79ec9e]'>
        <LuUserCheck className='h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-2xl font-bold mb-4 md:mb-8'>User-Authentication</h2>
        <p className='text-base md:text-lg'>User authentication verifies identities through credentials like passwords or biometrics, ensuring secure access and protecting sensitive data from unauthorized users.....</p>
      </div>
    </div>
  </div>
  <div className='text-center bottom-0'>
    <button className='p-3 w-full md:w-[24.5rem] rounded-lg font-bold bg-[#657cef] hover:shadow-2xl hover:bg-[#79ec9e]'>DOWNLOAD</button>
  </div>
</div>

        </div>
      </div>

    </AuthenticatedLayout>
  )
}

export default Home