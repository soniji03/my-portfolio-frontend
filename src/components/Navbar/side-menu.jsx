import React from 'react';

export const SideMenu = ({ isOpen, setIsOpen }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-64 bg-[#D0D8FF] border-8 border-white text-xl font-bold  shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
      `}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-500"
      >
        X
      </button>
      <nav className="mt-16 p-4">
        <ul className="space-y-4">
          <li onClick={() => scrollToSection('dashboard')}>Dashboard</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('facts')}>Facts</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contacts')}>Contacts</li>
        </ul>
      </nav>
    </div>
  );
};


export default SideMenu;