import React from 'react'

function About() {

  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    },
  }
  return (
    <div id="about" style={font} className='bg-[#D0D8FF] px-4  sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20'>
    <div className='max-w-4xl mx-auto sm:pt-[2.5rem] lg:pt-0'>
      <h1 className='relative text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12'>
        ABOUT ME
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 sm:w-60 h-1 bg-gradient-to-r from-white via-blue-900 to-white"></span>
      </h1>
      <div className='flex justify-center mb-6 sm:mb-10'>
        <img src="/PA.png" alt="Om Soni" className="rounded-full  shadow-2xl h-32 w-32 sm:h-48 sm:w-48 lg:h-60 lg:w-60 object-cover" />
      </div>
      <div className='space-y-4 sm:space-y-6'>
        <h2 className='text-center text-lg sm:text-xl mb-4'>Hi, I'm Om, nice to meet you!</h2>
        <p className='text-base sm:text-lg mb-2 indent-8 sm:indent-12'>
          I'm a full stack web developer currently living in Jabalpur (M.P.), India. As a recent postgraduate with an MCA (Master of Computer Applications), 
          I have a background in both front-end and back-end technologies, which allows me to bring a comprehensive approach to web development. 
          I am known for creating efficient, scalable, and user-friendly applications.
        </p>
        <p className='text-base sm:text-lg mb-2 indent-8 sm:indent-12'>
          In addition to my technical skills, I bring strong problem-solving abilities and a collaborative mindset to every project. 
          Whether working independently or as part of a team, I am dedicated to delivering high-quality results on time.
        </p>
        <p className='text-base sm:text-lg mb-2 indent-8 sm:indent-12'>
          I'm excited to start my professional journey in web development and look forward to contributing to innovative projects. 
          Feel free to check out my portfolio to see some of my work!
        </p>
      </div>
    </div>
  </div>
  )
}

export default About