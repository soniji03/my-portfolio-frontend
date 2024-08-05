import React, { useState, useEffect } from 'react';
import { FcReadingEbook } from "react-icons/fc";
import { HiMenu } from 'react-icons/hi';
import SideMenu from './side-menu'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['dashboard', 'about', 'skills', 'facts', 'projects', 'contacts'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 50 && rect.bottom >= 50;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

  

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
      
  return (
    <div style={font} className='nav items-center text-black bg-white fixed top-0 w-full p-4 cursor-pointer z-50'>
      <div className='flex justify-between items-center w-full max-w-7xl mx-auto'>
        <div>
          <ul className='flex gap-1 items-center font-bold'>
            <li>
              <FcReadingEbook className="w-6 h-6 md:w-8 md:h-8" />
            </li>
            <li className='text-sm md:text-base'>PORTFOLIO</li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:block">
          <ul className='font-bold flex flex-row gap-8 lg:gap-12 items-center font-medium text-base'>
            {['dashboard', 'about', 'skills', 'facts', 'projects', 'contacts'].map((section) => (
              <li 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`cursor-pointer relative py-2 ${
                  activeSection === section ? 'text-[#778cf8]' : 'text-gray-600'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#778cf8] transform scale-x-0 transition-transform duration-300 ${
                  activeSection === section ? 'scale-x-100' : ''
                }`}></span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#778cf8] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Navbar;



