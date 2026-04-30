import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '/assets/Logo5.png'; 

const Navbar = () => {
  const links = ["Home", "About", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-white/10' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center group space-x-3"
            onClick={closeMenu}
          >
            <motion.div 
              className="p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-md group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 10 }}
            >
              <img src={logoImg} alt="Logo" className="h-10 w-10 rounded-full object-cover border-2 border-white/50" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Aryan<span className="text-blue-600 dark:text-blue-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
              >
                {link}
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </Link>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md hover:shadow-blue-500/30 transition-all"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex flex-col justify-center items-center group"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {links.map((link, index) => (
                <motion.div
                  key={link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg">
                  Hire Me
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;