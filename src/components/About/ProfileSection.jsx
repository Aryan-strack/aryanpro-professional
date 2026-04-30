import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerWave from '../../pages/lottie/web-development.json';
import avatarPlaceholder from '../../assets/aryan.png';

const ProfileSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-24 px-6 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500">

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>

      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Avatar with Floating Effect */}
        <motion.div
          variants={itemVariants}
          className="relative group"
        >
          <motion.div
            className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[3rem] border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden glass"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={avatarPlaceholder}
              alt="Aryan Ahmad"
              className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
            />
          </motion.div>

          {/* Lottie Overlay */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 z-20">
            <Lottie
              animationData={developerWave}
              loop={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="text-center md:text-left max-w-2xl"
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800"
          >
            Full-Stack Maestro
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Aryan Ahmad
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium"
          >
            I architect digital ecosystems that are <span className="text-gray-900 dark:text-white underline decoration-blue-500/30 decoration-4">scalable</span>,
            <span className="text-gray-900 dark:text-white underline decoration-purple-500/30 decoration-4">performant</span>, and
            unapologetically <span className="text-gray-900 dark:text-white underline decoration-pink-500/30 decoration-4">elegant</span>.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            {['React Native', 'Node.js', 'Python', 'AI/ML'].map((skill, i) => (
              <span key={i} className="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-2xl text-xs font-black uppercase tracking-widest border border-gray-100 dark:border-gray-800 shadow-sm hover:border-blue-500 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;