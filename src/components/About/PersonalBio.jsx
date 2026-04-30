import { FiCoffee, FiCode, FiBook, FiActivity, FiUser, FiAward, FiLayers, FiGlobe } from "react-icons/fi";
import { motion } from 'framer-motion';

const PersonalBio = () => {
  const funFacts = [
    { icon: <FiCoffee className="text-amber-500" />, text: "Coffee enthusiast" },
    { icon: <FiActivity className="text-emerald-500" />, text: "Competitive gamer" },
    { icon: <FiBook className="text-blue-500" />, text: "Avid reader" },
    { icon: <FiCode className="text-violet-500" />, text: "Open-source contributor" },
    { icon: <FiUser className="text-rose-500" />, text: "Mentor to juniors" },
    { icon: <FiAward className="text-yellow-500" />, text: "Hackathon winner" },
    { icon: <FiLayers className="text-cyan-500" />, text: "Full-stack developer" },
    { icon: <FiGlobe className="text-indigo-500" />, text: "Tech community speaker" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Lifestyle</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-gray-900 dark:text-white">
            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Code</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              As a Software Engineering graduate with 3+ years of professional experience, 
              I combine technical expertise with creative problem-solving to build impactful digital solutions.
            </motion.p>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              My passion extends beyond writing code — I actively contribute to open-source projects, 
              mentor aspiring developers, and stay at the forefront of emerging technologies through 
              continuous learning and community engagement.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              {["React.js", "Node.js", "TypeScript", "AWS", "Python", "Docker"].map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-6 py-2 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-2xl text-xs font-black uppercase tracking-widest border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Fun Facts */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-3xl glass border border-gray-100 dark:border-white/5 flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 text-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {fact.icon}
                </div>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">{fact.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBio;
