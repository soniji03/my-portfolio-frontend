import React from 'react'
import { FcTodoList } from "react-icons/fc";
import { SiCanva } from "react-icons/si";
import { MdQueueMusic } from "react-icons/md";
import { FcCalculator } from "react-icons/fc";
import { LuUserCheck } from "react-icons/lu";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Projects() {

  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    }
  };

  return (

    <div style={font} className='bg-[#D0D8FF] -my-6 min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20'>

      <div className='flex justify-center flex-wrap mb-8 sm:mb-12'> 
      <h1 className='relative text-center text-2xl sm:text-3xl font-bold'>PROJECTS
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 sm:w-56 h-1 bg-gradient-to-r from-white via-blue-900 to-white"></span>
      </h1>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mx-auto max-w-7xl'>

      <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
        <div className='flex flex-col items-center h-full'>
          <div className='h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 sm:mb-10 transition duration-300 ease-in-out group-hover:bg-[#e7e561]'>
            <FcTodoList className='h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
          </div>
          <div className='text-center'>
            <Link to=' '><h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>Todo-List</h2></Link>
            <p className='text-base sm:text-lg'>In this website, what we do daily, we can write everything in the form of a list.</p>
          </div>
        </div>
      </div>

 <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
        <div className='flex flex-col items-center h-full'>
          <div className='h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 sm:mb-10 transition duration-300 ease-in-out group-hover:bg-[#fb8d8d]'>
            <SiCanva className='h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
          </div>
          <div className='text-center'>
            <Link to=' '><h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>Canva Clone</h2></Link>
            <p className='text-base sm:text-lg'>A Canva clone website mimics Canva's features, enabling users to design graphics, presentations, and posts with an intuitive interface..</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
        <div className='flex flex-col items-center h-full'>
          <div className='h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 sm:mb-10 transition duration-300 ease-in-out group-hover:bg-[#74e7bd]'>
            <FaAmericanSignLanguageInterpreting className='h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
          </div>
          <div className='text-center'>
            <Link to=' '><h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>Sign Recognition</h2></Link>
            <p className='text-base sm:text-lg'>Sign language recognition with Python uses machine learning and computer vision to interpret gestures, facilitating communication between deaf individuals and others....</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
        <div className='flex flex-col items-center h-full'>
          <div className='h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 sm:mb-10 transition duration-300 ease-in-out group-hover:bg-[#5ebdf5]'>
            <FcCalculator className='h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
          </div>
          <div className='text-center'>
            <Link to=' '><h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>Calculator</h2></Link>
            <p className='text-base sm:text-lg'>A React calculator is a web app that uses components for arithmetic operations, offering an interactive, user-friendly interface for calculations....</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
        <div className='flex flex-col items-center h-full'>
          <div className='h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 sm:mb-10 transition duration-300 ease-in-out group-hover:bg-[#f98d77]'>
            <MdQueueMusic className='h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
          </div>
          <div className='text-center'>
            <Link to=' '><h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>Music System</h2></Link>
            <p className='text-base sm:text-lg'>A React music system is a web app for playing, pausing, and managing music, with interactive controls and playlist management....</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg h-full w-full flex justify-center bg-white transition duration-300 ease-in-out hover:shadow-2xl hover:bg-white group p-6">
        <div className='flex flex-col items-center h-full'>
          <div className='h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gray-200 flex items-center justify-center mb-6 sm:mb-10 transition duration-300 ease-in-out group-hover:bg-[#79ec9e]'>
            <LuUserCheck className='h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 ease-in-out transform group-hover:rotate-12' />
          </div>
          <div className='text-center'>
            <Link to=' '>
            <h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>User-Authentication</h2></Link>
            <p className='text-base sm:text-lg'>User authentication verifies identities through credentials like passwords or biometrics, ensuring secure access and protecting sensitive data from unauthorized users....</p>
          </div>
        </div>
      </div>

     
    </div>

  

<div className='text-center p-12'>
            <h2 className='text-xl text-[#ef6b74] sm:text-2xl font-bold mb-1 sm:mb-8'>Detailed description of the project.</h2>
            <Link to='/login'>  
            <p className='text-base text-blue-950 lg:text-xl sm:text-lg'>To inspect the project code, click here.</p>
            </Link>
          </div>

  </div>

  )
}

export default Projects