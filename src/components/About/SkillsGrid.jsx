import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFlutter, SiDjango, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const SkillsGrid = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" size={24} />, level: 92 },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" size={22} />, level: 88 },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={22} />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" size={24} />, level: 87 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" size={22} />, level: 90 },
    { name: "UI/UX Design", icon: <FaFigma className="text-[#A259FF]" size={24} />, level: 82 },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" size={22} />, level: 78 },
    { name: "React Native", icon: <TbBrandReactNative className="text-[#61DAFB]" size={24} />, level: 80 },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" size={24} />, level: 85 },
    { name: "Django", icon: <SiDjango className="text-[#092E20]" size={22} />, level: 75 },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={24} />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={24} />, level: 93 },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={24} />, level: 90 },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={22} />, level: 83 },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={22} />, level: 81 },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My proficiency across the full development stack
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-28 h-28 mb-4">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    pathColor: `rgba(79, 70, 229, ${0.5 + (skill.level / 200)})`,
                    textColor: '#4f46e5',
                    trailColor: '#e5e7eb',
                    textSize: '16px',
                    pathTransitionDuration: 1,
                  })}
                />
              </div>
              <div className="mb-2">{skill.icon}</div>
              <h3 className="font-semibold text-gray-800 text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;