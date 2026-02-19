import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerWave from '../../pages/lottie/web-development.json'; // Corrected Lottie file path
import avatarPlaceholder from '../../assets/aryan1.png';

const ProfileSection = () => {
  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto py-16 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Avatar with Lottie animation */}
        <motion.div
          variants={itemVariants}
          className="relative w-56 h-56 rounded-full border-4 border-white shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full -z-10 transform group-hover:rotate-6 transition-transform duration-300"></div>
          <img 
            src={avatarPlaceholder} 
            alt="Aryan Ahmad" 
            className="w-full h-full bg-cover rounded-full border-4 border-white"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24">
            <Lottie 
              animationData={developerWave} 
              loop={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div 
          className="text-center md:text-left max-w-2xl"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Aryan Ahmad</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-6"
          >
            Full-stack developer passionate about crafting <span className="font-semibold text-indigo-600">scalable</span> and <span className="font-semibold text-blue-600">user-centric</span> applications
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium shadow-sm">React Specialist</span>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium shadow-sm">Node.js Expert</span>
            <span className="px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-medium shadow-sm">TypeScript</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;