import React from 'react'

function Skills() {
  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    }
  };
  const backgroundImageStyle = {
    backgroundImage: 'url(/bg-6.avif)', // Correct the URL syntax
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
    width: '100%',
    // style={backgroundImageStyle}
  };
  return (

<div id="skills"  style={font} className='bg-[#D0D8FF] section min-h-[91vh] px-4 sm:px-6 lg:px-8 lg:py-12'>
  <div className='py-8 sm:py-12 flex justify-center'>
    <h1 className='relative text-center text-2xl sm:text-3xl font-bold'>SKILLS
      <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 sm:w-56 h-1 bg-gradient-to-r from-white via-blue-900 to-white"></span>
    </h1>
  </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 sm:gap-x-8 lg:gap-x-16 mx-auto max-w-7xl'>
    {[
      { skill: "HTML", percentage: 70 },
      { skill: "CSS", percentage: 60 },
      { skill: "TAILWIND CSS", percentage: 60 },
      { skill: "JAVASCRIPT", percentage: 50 },
      { skill: "REACT", percentage: 50 },
      { skill: "NODE JS", percentage: 60 },
      { skill: "NEXT JS", percentage: 60 },
      { skill: "TYPESCRIPT", percentage: 40 },
      { skill: "MONGODB", percentage: 50 },
      { skill: "PYTHON", percentage: 30 },
      { skill: "SQL", percentage: 30 },
    ].map((item, index) => (
      <div key={index} className='rounded-lg h-16'>
      <div className='flex justify-between mb-2'>
        <span className='font-bold text-sm sm:text-base'>{item.skill}</span>
        <span className='font-bold text-sm sm:text-base'>{item.percentage}%</span>
      </div>
      <div className="relative h-4 sm:h-5 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
          style={{ width: `${item.percentage}%` }}
        ></div>
      </div>
    </div>
    ))}
  </div>
</div>

  )
}

export default Skills

