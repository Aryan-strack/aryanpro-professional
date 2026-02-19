import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '/assets/Logo5.png'; 

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-sm py-2' : 'bg-transparent py-4'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-12">
      {/* Logo and Name with smooth hover effect */}
      <div className="flex-shrink-0 flex items-center group">
        <div className="p-1 mt-1 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
          {/* Logo image */}
          <img src={logoImg} alt="Logo" className="h-10 w-10 rounded-full object-cover border-2 border-white shadow" />
        </div>
        <span className="ml-1 text-2xl font-bold text-gray-900 tracking-tight">
          Aryan <span className="text-blue-600 ">Dev</span>
        </span>
      </div>

      {/* Desktop Navigation with animated underline */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link}
              to={link === 'Home' ? '/home' : `/${link.toLowerCase()}`}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
              onClick={closeMenu}
            >
              {link}
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
            </Link>
          ))}
          
          {/* Optional CTA button */}
          
        </div>
      </div>

      {/* Mobile menu button with animation */}
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors duration-300"
          aria-expanded={isOpen}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <div className="relative w-6 h-6">
            <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
            <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation with slide-down animation */}
  <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
    <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-inner">
      {links.map((link) => (
        <Link
          key={link}
          to={link === 'Home' ? '/home' : `/${link.toLowerCase()}`}
          className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 transform hover:translate-x-1"
          onClick={closeMenu}
        >
          {link}
        </Link>
      ))}
      <div className="pt-2">
        
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;