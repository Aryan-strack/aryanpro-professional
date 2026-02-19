import { FaGithub, FaLinkedin, FaBehance, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const SocialIcons = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const socialLinks = [
    {
      icon: <FaGithub size={isMobile ? 18 : 20} />,
      href: "https://github.com/Aryan-strack",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
      name: "GitHub",
      bg: "hover:bg-gray-100 dark:hover:bg-gray-700/50"
    },
    {
      icon: <FaLinkedin size={isMobile ? 18 : 20} />,
      href: "https://linkedin.com/in/aryan-ahmad-a5185133b",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      name: "LinkedIn",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <FaBehance size={isMobile ? 18 : 20} />,
      href: "https://www.behance.net/aryanahmed478",
      color: "hover:text-blue-800 dark:hover:text-blue-300",
      name: "Behance",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <FaWhatsapp size={isMobile ? 18 : 20} />,
      href: "#",
      color: "hover:text-green-600 dark:hover:text-green-400",
      name: "WhatsApp",
      bg: "hover:bg-green-50 "
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? 20 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? 20 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      x: isMobile ? 0 : 5,
      y: isMobile ? -2 : 0,
      transition: { duration: 0.2 }
    }
  };

  // Mobile bottom bar variant
  if (isMobile) {
    return (
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-center space-x-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm py-3 shadow-lg border-t border-gray-200 dark:border-gray-700"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${link.bg} ${link.color}`}
            aria-label={link.name}
          >
            {link.icon}
            <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    );
  }

  // Tablet/Desktop vertical sidebar variant
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed ${isTablet ? 'left-4' : 'left-6'} top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-700`}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          variants={itemVariants}
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${link.bg} ${link.color} group`}
          aria-label={link.name}
        >
          <div className="relative flex items-center">
            {link.icon}
            <motion.span 
              className="absolute left-full ml-2 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-700/90 px-2 py-1 rounded-md shadow-sm"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {link.name}
              <FaArrowRight className="inline ml-1 text-xs" />
            </motion.span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;