import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFlutter, SiDjango, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const SkillsGrid = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" size={24} />, level: 92 },
    { name: "Next.js", icon: <SiNextdotjs className="dark:text-white" size={22} />, level: 88 },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={22} />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" size={24} />, level: 87 },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#38BDF8]" size={22} />, level: 90 },
    { name: "UI/UX Design", icon: <FaFigma className="text-[#A259FF]" size={24} />, level: 82 },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" size={22} />, level: 78 },
    { name: "React Native", icon: <TbBrandReactNative className="text-[#61DAFB]" size={24} />, level: 80 },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" size={24} />, level: 85 },
    { name: "Django", icon: <SiDjango className="text-[#092E20] dark:text-[#092E20]" size={22} />, level: 75 },
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
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Abilities</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-gray-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
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
              whileHover={{ y: -5, scale: 1.02 }}
              className="group flex flex-col items-center p-8 rounded-[2rem] glass border border-gray-100 dark:border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="w-24 h-24 mb-6 relative">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    pathColor: '#3b82f6',
                    textColor: '#3b82f6',
                    trailColor: 'rgba(59, 130, 246, 0.1)',
                    textSize: '22px',
                    pathTransitionDuration: 1.5,
                  })}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg">
                    {skill.icon}
                  </div>
                </div>
              </div>
              <div className="group-hover:translate-y-[-4px] transition-transform duration-300">
                <div className="mb-2 flex justify-center">{skill.icon}</div>
                <h3 className="font-black text-gray-900 dark:text-gray-100 text-center uppercase tracking-widest text-[10px]">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;