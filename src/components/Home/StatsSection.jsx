import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiUsers } from 'react-icons/fi';

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
      title: "Projects Completed",
      icon: <FiBriefcase className="text-blue-500" size={24} />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      id: 2,
      value: 2,
      suffix: "+",
      title: "Years Experience",
      icon: <FiAward className="text-emerald-500" size={24} />,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      id: 3,
      value: 5,
      suffix: "+",
      title: "Happy Clients",
      icon: <FiUsers className="text-amber-500" size={24} />,
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover="hover"
              className={`p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 ${stat.bg}`}
            >
              <div className="flex flex-col items-center">
                <div className={`mb-4 p-3 rounded-full bg-white shadow-sm ${stat.bg}`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 flex items-center">
                  {mounted && (
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      separator=","
                      className={stat.color}
                    />
                  )}
                  <span className={stat.color}>{stat.suffix}</span>
                </h3>
                <p className="text-gray-600 font-medium">{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;