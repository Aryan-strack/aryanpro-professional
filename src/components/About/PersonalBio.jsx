import { FiCoffee, FiCode, FiBook, FiActivity, FiUser, FiAward, FiLayers, FiGlobe } from "react-icons/fi";
import { motion } from 'framer-motion';

const PersonalBio = () => {
  const funFacts = [
    { icon: <FiCoffee className="text-amber-500" size={20} />, text: "Coffee enthusiast" },
    { icon: <FiActivity className="text-emerald-500" size={20} />, text: "Competitive gamer" },
    { icon: <FiBook className="text-blue-500" size={20} />, text: "Avid reader" },
    { icon: <FiCode className="text-violet-500" size={20} />, text: "Open-source contributor" },
    { icon: <FiUser className="text-rose-500" size={20} />, text: "Mentor to juniors" },
    { icon: <FiAward className="text-yellow-500" size={20} />, text: "Hackathon winner" },
    { icon: <FiLayers className="text-cyan-500" size={20} />, text: "Full-stack developer" },
    { icon: <FiGlobe className="text-indigo-500" size={20} />, text: "Tech community speaker" }
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Behind the Code
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-indigo-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* Left Text Content */}
        <div className="space-y-5">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            As a Software Engineering graduate with 3+ years of professional experience, 
            I combine technical expertise with creative problem-solving to build impactful digital solutions.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            My passion extends beyond writing code — I actively contribute to open-source projects, 
            mentor aspiring developers, and stay at the forefront of emerging technologies through 
            continuous learning and community engagement.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
            {["React.js", "Node.js", "TypeScript", "AWS"].map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Fun Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -4,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"
            >
              <span className="text-xl p-2 bg-gray-50 rounded-lg">{fact.icon}</span>
              <span className="text-sm sm:text-base font-medium text-gray-700">{fact.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalBio;
