import React from 'react'

function Contacts() {
  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    }
  };
  return (


    <div id="contacts" style={font} className='section bg-[#D0D8FF] px-4 sm:px-6 py-8 lg:px-8 lg:py-16'>
      <div className='flex justify-center'>
      <h1 className='relative  text-center text-2xl sm:text-3xl font-bold py-5 '>
      CONTACTS
      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 sm:w-60 h-1 bg-gradient-to-r from-white via-blue-900 to-white"></span>
    </h1>
      </div>
    <div className='flex flex-col lg:flex-row gap-8  lg:py-15'>
      <div className='w-full lg:w-1/2'>
        <div className="text-white max-w-md mx-auto lg:float-right my-8 lg:my-40">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#e47463]'>Let's make something great together</h1>
          <p className="mb-6 text-base sm:text-lg text-[#0b1c5d]">
            "Let's create something amazing together! Reach out to discuss projects, collaborations, or any inquiries. Your vision is my priority. Let's connect and bring your ideas to life"....
          </p>
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center items-center'>
        <div className="w-full max-w-md rounded-lg p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl text-blue-950 font-bold mb-4">
            Contact Us
          </h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-base sm:text-lg font-medium text-blue-950">Your full name</label>
              <input type="name" name="name" id="name" className="border border-blue-950 mb-4 bg-gray-50 text-gray-900 text-base sm:text-lg rounded-lg block w-full p-2.5" placeholder="Enter your name" required="" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-base sm:text-lg font-medium text-blue-950">Your email</label>
              <input type="email" name="email" id="email" className="border border-blue-950 mb-4 bg-gray-50 text-gray-900 text-base sm:text-lg rounded-lg block w-full p-2.5" placeholder="name@company.com" required="" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-base sm:text-lg font-medium text-blue-950">Your Message</label>
              <textarea placeholder='message' rows="5" className="border border-blue-950 mb-4 bg-gray-50 text-gray-900 text-base sm:text-lg rounded-lg block w-full p-2.5">
              </textarea>
            </div>
            <button type="submit" className="w-full text-white bg-blue-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Contacts


{/* <div className='flex justify-center'>
      <h1 className='relative  text-center text-2xl sm:text-3xl font-bold py-5 shadow-2xl w-[17rem]'>
      CONTACTS
      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 sm:w-60 h-1 bg-gradient-to-r from-white via-blue-900 to-white"></span>
    </h1>
      </div> */}