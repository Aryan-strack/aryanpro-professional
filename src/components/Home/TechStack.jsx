import { motion } from 'framer-motion';
import { SiReact, SiTailwindcss, SiFlutter, SiDjango, SiMongodb, SiPython, SiTensorflow, SiNextdotjs, SiDocker, SiPostgresql, SiFirebase, SiFigma } from 'react-icons/si';

const TechStack = () => {
  const techStack = [
    { icon: <SiReact size={32} />, name: 'React', color: 'text-[#61DAFB]' },
    { icon: <SiNextdotjs size={32} />, name: 'Next.js', color: 'text-gray-900 dark:text-white' },
    { icon: <SiFlutter size={32} />, name: 'Flutter', color: 'text-[#02569B]' },
    { icon: <SiPython size={32} />, name: 'Python', color: 'text-[#3776AB]' },
    { icon: <SiDjango size={32} />, name: 'Django', color: 'text-[#092E20]' },
    { icon: <SiTailwindcss size={32} />, name: 'Tailwind', color: 'text-[#06B6D4]' },
    { icon: <SiMongodb size={32} />, name: 'MongoDB', color: 'text-[#47A248]' },
    { icon: <SiFirebase size={32} />, name: 'Firebase', color: 'text-[#FFCA28]' },
    { icon: <SiPostgresql size={32} />, name: 'PostgreSQL', color: 'text-[#4169E1]' },
    { icon: <SiDocker size={32} />, name: 'Docker', color: 'text-[#2496ED]' },
    { icon: <SiTensorflow size={32} />, name: 'TensorFlow', color: 'text-[#FF6F00]' },
    { icon: <SiFigma size={32} />, name: 'Figma', color: 'text-[#F24E1E]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
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
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-gray-900 dark:text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Arsenal</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                borderColor: 'rgba(59, 130, 246, 0.3)'
              }}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 transition-all duration-300"
            >
              <motion.div 
                className={`${tech.color} mb-4 transition-transform duration-300 group-hover:scale-110`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {tech.icon}
              </motion.div>
              <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Animation Elements */}
        <div className="mt-20 flex justify-center gap-8 opacity-20">
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="w-3 h-3 bg-blue-500 rounded-full"
          ></motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="w-3 h-3 bg-purple-500 rounded-full"
          ></motion.div>
          <motion.div 
            animate={{ y: [0, -12, 0] }} 
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            className="w-3 h-3 bg-pink-500 rounded-full"
          ></motion.div>
        </div>

      </div>
    </section>

  );
};

export default TechStack;