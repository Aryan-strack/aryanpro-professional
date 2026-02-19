import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaAward } from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";

const timelineItems = [
  {
    year: "2022 - Present",
    icon: <FaGraduationCap />,
    title: "Bachelor of Science in Software Engineering",
    subtitle: "COMSATS University Islamabad , Vehari Campus",
    content: "Specializing in Artificial Intelligence and Full-Stack Development. Relevant coursework: Data Structures, Algorithms, Machine Learning, Web Development.",
    type: "education"
  },
  {
    year: "March 2025 - July 2025",
    icon: <FaLaptopCode />,
    title: "Frontend Development Intern",
    subtitle: "TheCodingBuzz (Remote)",
    content: "Developed responsive React-based dashboard that improved user productivity by 40%. Implemented Redux for state management and optimized API calls. Collaborated with UX team to implement Figma designs.",
    type: "work"
  },
  {
    year: "2020-2022",
    icon: <MdSchool />,
    title: "FSC Pre Engineering",
    subtitle: "Govt College Vehari",
    content: "Graduated with honors. Developed foundational programming skills in Python, Java, and JavaScript.",
    type: "education"
  },
  
  
];

const iconStyles = {
  education: { background: "#4f46e5", color: "#fff" },
  work: { background: "#10b981", color: "#fff" },
  achievement: { background: "#f59e0b", color: "#fff" }
};

const CareerTimeline = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Professional Journey
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Key milestones in my education and career development
        </p>
      </div>
      
      <VerticalTimeline 
        lineColor="#e5e7eb"
        className="before:bg-gray-300 dark:before:bg-gray-600"
      >
        {timelineItems.map((item, index) => {
          const style = iconStyles[item.type] || iconStyles.work;
          
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ 
                background: 'white',
                boxShadow: '0 4px 30px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.05)',
                borderRadius: '0.5rem'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
              date={item.year}
              dateClassName="text-gray-700 dark:text-gray-300 font-medium"
              iconStyle={style}
              icon={item.icon}
              visible={true}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-lg" style={{ color: style.background }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <h4 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {item.subtitle}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      
      <div className="mt-12 text-center">
       
      </div>
    </div>
  </section>
);

export default CareerTimeline;