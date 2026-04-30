import { motion } from 'framer-motion';
import { FiZap, FiCpu, FiCode, FiLayers } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap size={28} />,
    title: "Fast Delivery",
    desc: "Agile development process with iterative deployments and continuous integration for rapid, high-quality results."
  },
  {
    icon: <FiCpu size={28} />,
    title: "Problem Solver",
    desc: "Analytical approach to complex challenges with optimized, scalable solutions and performance-first architecture."
  },
  {
    icon: <FiCode size={28} />,
    title: "Clean Code",
    desc: "Modular, well-documented code following SOLID principles and industry-standard design patterns."
  },
  {
    icon: <FiLayers size={28} />,
    title: "Full-Stack Mastery",
    desc: "End-to-end development capabilities from pixel-perfect UI/UX to robust cloud-native backend systems."
  }
];

const WhyMeSection = () => {
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
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Value Proposition</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-gray-900 dark:text-white">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Work With Me</span>?
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] glass border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-widest text-[12px]">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyMeSection;