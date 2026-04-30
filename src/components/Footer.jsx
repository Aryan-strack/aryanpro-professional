import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaYoutube, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];
  
  const socialLinks = [
    { icon: <FaGithub size={18} />, url: "https://github.com/aryanahmad", name: "GitHub" },
    { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/in/aryan-ahmad-a5185133b/", name: "LinkedIn" },
    { icon: <FaTwitter size={18} />, url: "https://twitter.com/aryantweets", name: "Twitter" },
    { icon: <FaEnvelope size={18} />, url: "mailto:aryanahmad478@gmail.com", name: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-gray-950 pt-24 pb-12 transition-colors duration-500 overflow-hidden border-t border-gray-100 dark:border-gray-900">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-black text-gray-900 dark:text-white mb-6 block">
              Aryan<span className="text-blue-600">.</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xs">
              Building the future of digital experiences through innovative code and AI-driven solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass border border-gray-100 dark:border-white/5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-8">Expertise</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'AI Integration', 'UI/UX Design', 'Cloud Solutions'].map((service, index) => (
                <li key={index} className="text-gray-500 dark:text-gray-400 font-medium cursor-default hover:text-gray-900 dark:hover:text-white transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-8">Newsletter</h4>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
              Subscribe to get the latest updates on projects and tech.
            </p>
            <div className="flex gap-2 p-1.5 rounded-2xl glass border border-gray-100 dark:border-white/5">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-transparent border-none focus:ring-0 px-4 py-2 w-full text-sm text-gray-900 dark:text-white outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all whitespace-nowrap shadow-lg shadow-blue-500/20">
                Join Now
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} Aryan Ahmad. Built with passion and code.
          </p>
          
          <div className="flex gap-8">
            <Link to="/privacy" className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Terms</Link>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-12 h-12 flex items-center justify-center rounded-2xl glass border border-gray-100 dark:border-white/5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-xl"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;