import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];
  
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: "https://github.com/aryanahmad", name: "GitHub" },
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/aryan-ahmad-a5185133b/", name: "LinkedIn" },
    { icon: <FaTwitter size={20} />, url: "https://twitter.com/aryantweets", name: "Twitter" },
    { icon: <FaEnvelope size={20} />, url: "mailto:aryanahmad478@gmail.com", name: "Email" }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Bio Section */}
          <motion.div className="space-y-6" variants={item}>
            <div>
              <motion.h2 
                className="text-2xl font-bold  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Aryan Ahmad
              </motion.h2>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Full Stack & AI Developer passionate about building impactful digital experiences.
              </p>
            </div>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r from-blue-600 to-purple-600"
                  whileHover={{ 
                    y: -3,
                    scale: 1.1,
                    boxShadow: "0 5px 15px rgba(99, 102, 241, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                  variants={item}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={item}>
            <motion.h3 
              className="text-xl font-semibold text-white"
              whileHover={{ x: 5 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6" variants={item}>
            <motion.h3 
              className="text-xl font-semibold text-white"
              whileHover={{ x: 5 }}
            >
              Get In Touch
            </motion.h3>
            <address className="not-italic text-gray-300 space-y-3">
              <motion.p 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="mr-3 text-blue-400" />
                aryanahmad478@gmail.com
              </motion.p>
              <motion.p 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Vehari, Pakistan
              </motion.p>
              <motion.p 
                className="mt-4 p-3 bg-gray-800 rounded-lg border-l-4 border-blue-500"
                whileHover={{ scale: 1.02 }}
              >
                Available for freelance & collaborations
              </motion.p>
            </address>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Aryan Ahmad. All rights reserved.</p>
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;