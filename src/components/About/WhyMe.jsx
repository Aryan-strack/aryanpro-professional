import { motion } from 'framer-motion';
import { FiZap, FiCpu, FiCode, FiLayers, FiUsers, FiAward } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap className="text-indigo-600" size={28} />,
    title: "Fast Delivery",
    desc: "Agile development process with iterative deployments and continuous integration for rapid, high-quality results"
  },
  {
    icon: <FiCpu className="text-indigo-600" size={28} />,
    title: "Problem Solver",
    desc: "Analytical approach to complex challenges with optimized, scalable solutions"
  },
  {
    icon: <FiCode className="text-indigo-600" size={28} />,
    title: "Clean Code",
    desc: "Modular, well-documented code following best practices and design patterns"
  },
  {
    icon: <FiLayers className="text-indigo-600" size={28} />,
    title: "Full-Stack Expertise",
    desc: "End-to-end development capabilities from UI/UX to backend systems"
  }
];

const WhyMeSection = () => (
  <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why <span className="text-indigo-600">Work With Me</span>?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional strengths that deliver exceptional results
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
            }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
       
      </motion.div>
    </div>
  </section>
);

export default WhyMeSection;