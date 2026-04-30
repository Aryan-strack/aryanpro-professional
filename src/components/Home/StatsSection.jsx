import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiUsers, FiCpu } from 'react-icons/fi';

const StatsSection = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      id: 1,
      value: 50,
      suffix: "+",
      title: "Projects Built",
      icon: <FiBriefcase className="text-blue-500" size={32} />,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      id: 2,
      value: 5,
      suffix: "+",
      title: "Years in Tech",
      icon: <FiAward className="text-purple-500" size={32} />,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      id: 3,
      value: 12,
      suffix: "+",
      title: "AI Models",
      icon: <FiCpu className="text-pink-500" size={32} />,
      color: "text-pink-600 dark:text-pink-400",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] glass border border-gray-100 dark:border-gray-800 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col items-center">
                <motion.div 
                  className="mb-6 p-5 rounded-3xl bg-gray-50 dark:bg-gray-900 group-hover:scale-110 transition-transform duration-300"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.div>
                
                <h3 className="text-5xl font-black mb-3 flex items-center justify-center">
                  {mounted && (
                    <CountUp 
                      end={stat.value} 
                      duration={3} 
                      className={stat.color}
                    />
                  )}
                  <span className={stat.color}>{stat.suffix}</span>
                </h3>
                
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">
                  {stat.title}
                </p>
                
                {/* Decorative bar */}
                <div className="w-10 h-1 bg-gray-100 dark:bg-gray-800 mt-6 rounded-full group-hover:w-20 group-hover:bg-blue-500 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
};

export default StatsSection;