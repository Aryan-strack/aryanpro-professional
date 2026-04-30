import { FaGithub, FaLinkedin, FaBehance, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Aryan-strack",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://linkedin.com/in/aryan-ahmad-a5185133b",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      name: "LinkedIn",
    },
    {
      icon: <FaBehance size={20} />,
      href: "https://www.behance.net/aryanahmed478",
      color: "hover:text-pink-600 dark:hover:text-pink-400",
      name: "Behance",
    },
    {
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/yournumber",
      color: "hover:text-green-600 dark:hover:text-green-400",
      name: "WhatsApp",
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col gap-6"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl glass border border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 ${link.color} transition-all duration-300 shadow-xl shadow-black/5 hover:shadow-blue-500/20`}
          aria-label={link.name}
        >
          {link.icon}
          
          {/* Tooltip */}
          <span className="absolute left-full ml-4 px-3 py-1.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
            {link.name}
          </span>
        </motion.a>
      ))}

      {/* Connection Line */}
      <div className="w-[1px] h-24 bg-gradient-to-b from-gray-200 dark:from-gray-800 to-transparent mx-auto mt-4"></div>
    </motion.div>
  );
};


export default SocialIcons;