import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: "Sept 2022 - June 2026",
    icon: <FaGraduationCap />,
    title: "Bachelor of Science in Software Engineering",
    subtitle: "COMSATS University Islamabad , Vehari Campus",
    content: "Specializing in Artificial Intelligence and Full-Stack Development. Relevant coursework: Data Structures, Algorithms, Machine Learning, Web Development.",
    type: "education"
  },
  {
    year: "March 2025 - November 2025",
    icon: <FaLaptopCode />,
    title: "Web Developer",
    subtitle: "TheCodingBuzz (Remote)",
    content: "Developed responsive React-based dashboard that improved user productivity by 40%. Implemented Redux for state management and optimized API calls. Collaborated with UX team to implement Figma designs.",
    type: "work"
  },
  {
    year: "2020 - 2022",
    icon: <MdSchool />,
    title: "FSC Pre Engineering",
    subtitle: "Govt College Vehari",
    content: "Graduated with honors. Developed foundational programming skills in Python, Java, and JavaScript.",
    type: "education"
  },
];

const iconStyles = {
  education: { background: "#3b82f6", color: "#fff" },
  work: { background: "#8b5cf6", color: "#fff" },
};

const CareerTimeline = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/30 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-gray-900 dark:text-white">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <VerticalTimeline
          lineColor="rgba(59, 130, 246, 0.2)"
        >
          {timelineItems.map((item, index) => {
            const style = iconStyles[item.type] || iconStyles.work;

            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '2rem',
                  padding: '2.5rem'
                }}
                contentArrowStyle={{
                  borderRight: '10px solid rgba(255, 255, 255, 0.7)',
                }}
                date={item.year}
                dateClassName="text-gray-900 dark:text-gray-100 font-black tracking-widest text-sm"
                iconStyle={{
                  ...style,
                  boxShadow: `0 0 0 4px rgba(59, 130, 246, 0.1), inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)`
                }}
                icon={item.icon}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-gray-800">{item.title}</h3>
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                    {item.subtitle}
                  </h4>
                  <p className="!text-gray-600 !font-medium !leading-relaxed !mt-4">
                    {item.content}
                  </p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default CareerTimeline;