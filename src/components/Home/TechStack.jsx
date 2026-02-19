import { motion } from 'framer-motion';
import { SiReact, SiTailwindcss, SiFlutter, SiDjango, SiMongodb, SiPython, SiTensorflow, SiNextdotjs } from 'react-icons/si';
import { Tooltip } from 'react-tooltip';

const TechStack = () => {
  const techStack = [
    { icon: <SiReact size={28} />, name: 'React', description: 'Frontend Framework', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: <SiNextdotjs size={28} />, name: 'Next.js', description: 'React Framework', color: 'text-gray-800', bg: 'bg-gray-100' },
    { icon: <SiTailwindcss size={28} />, name: 'Tailwind CSS', description: 'Utility-first CSS', color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { icon: <SiFlutter size={28} />, name: 'Flutter', description: 'Cross-platform Mobile', color: 'text-blue-400', bg: 'bg-blue-50' },
    { icon: <SiDjango size={28} />, name: 'Django', description: 'Python Web Framework', color: 'text-green-800', bg: 'bg-green-50' },
    { icon: <SiMongodb size={28} />, name: 'MongoDB', description: 'NoSQL Database', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: <SiPython size={28} />, name: 'Python', description: 'Programming Language', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: <SiTensorflow size={28} />, name: 'TensorFlow', description: 'ML Library', color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">My Tech Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I've worked with and mastered throughout my projects
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              data-tooltip-id={`tech-tooltip`}
              data-tooltip-content={`${tech.name} - ${tech.description}`}
              className={`flex flex-col items-center p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-default ${tech.bg} border border-gray-100`}
            >
              <div className={`p-4 rounded-full ${tech.bg} mb-3`}>
                <span className={tech.color}>{tech.icon}</span>
              </div>
              <span className="font-medium text-gray-700">{tech.name}</span>
              <Tooltip 
                id="tech-tooltip" 
                place="top" 
                effect="solid" 
                className="z-50 !bg-gray-800 !text-white !py-2 !px-3 !rounded-lg !text-sm"
                offset={10}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;