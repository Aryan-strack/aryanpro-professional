import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const ProjectsSection = () => {
  const projects = [
  {
    id: 1,
    title: "Ajaia Docs",
    description: "Real-time collaborative document editor with multi-user editing, <200ms sync latency, and Supabase Row Level Security securing 100% of per-user queries.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Tiptap", "Vercel"],
    category: "Full-Stack",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/ajaia-docs",
    live: "https://ajaia-docs.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "IntelliMart",
    description: "AI-powered e-commerce platform with OpenAI chatbot, voice & image search cutting manual browse time ~50%, Stripe checkout, and 15+ REST API endpoints.",
    tags: ["React.js", "Node.js", "MongoDB", "OpenAI API", "Stripe", "Railway"],
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/intellimart",
    live: "https://intellimart.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "TravelMate",
    description: "Full-stack travel booking system for 100+ destinations with dynamic pricing engine. Streamlined booking flow from 6 steps to 3, increasing completion rate by 40%.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT"],
    category: "Full-Stack",
    thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/travelmate",
    live: "https://travelmate.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    description: "OpenAI-powered CV screening tool with 95% text extraction accuracy, reducing recruiter screening time by ~60% through automated analysis and feedback.",
    tags: ["React.js", "Node.js", "OpenAI API", "PDF-Parse"],
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/ai-resume-analyzer",
    live: "https://ai-resume-analyzer.vercel.app",
    featured: true
  },
  {
    id: 5,
    title: "DevDesign",
    description: "AI-driven UI layout generator using Google Gemini API. Generate full UI components from text prompts with versioning across 10+ iterations per session.",
    tags: ["React.js", "Node.js", "Gemini API", "MongoDB"],
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/devdesign",
    live: "https://devdesign.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "Gold Bazaar",
    description: "Jewelry management system with 200+ SKU inventory, live gold rate auto-pricing, 50+ daily billing transactions, and 100% elimination of manual calculation errors.",
    tags: ["React.js", "Node.js", "MongoDB", "React Native", "Live Rate API"],
    category: "Mobile",
    thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/gold-bazaar",
    live: "https://gold-bazaar.vercel.app",
    featured: false
  },
  {
    id: 7,
    title: "Ambrosia",
    description: "Full-stack restaurant management system with reservations, online ordering, and dynamic menu filtering using Redux Toolkit for real-time state management.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Redux Toolkit"],
    category: "Full-Stack",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/ambrosia",
    live: "https://ambrosia.vercel.app",
    featured: false
  },
  {
    id: 8,
    title: "Talent IQ",
    description: "AI-powered talent assessment platform with skill evaluation, analytics dashboard, and RBAC. Leverages OpenAI API to generate personalized learning roadmaps.",
    tags: ["React.js", "Node.js", "MongoDB", "OpenAI API", "TailwindCSS"],
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/talent-iq",
    live: "https://talent-iq.vercel.app",
    featured: false
  },
  {
    id: 9,
    title: "Sales & Revenue Predictor",
    description: "ML-powered sales forecasting model built with Python and Scikit-learn, achieving R²=0.88 accuracy for revenue prediction and business trend analysis.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Flask"],
    category: "AI",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/sales-predictor",
    live: "https://sales-predictor.vercel.app",
    featured: false
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden min-h-[600px]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-gray-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of my recent works where design meets code to solve real-world problems.
          </p>
        </motion.div>
        
        {/* Projects Swiper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative px-4"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-24 !overflow-visible"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div 
                  variants={itemVariants}
                  className="group relative h-full rounded-[2.5rem] overflow-hidden glass border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/10 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Floating Tags */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-lg border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 line-clamp-2 leading-relaxed font-medium">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex space-x-3">
                        <motion.a 
                          href={project.github}
                          whileHover={{ y: -3, scale: 1.1 }}
                          className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                        >
                          <FiGithub size={18} />
                        </motion.a>
                        <motion.a 
                          href={project.demoLink}
                          whileHover={{ y: -3, scale: 1.1 }}
                          className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                        >
                          <FiExternalLink size={18} />
                        </motion.a>
                      </div>
                      
                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 group/btn"
                      >
                        Details <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <a href="/projects" className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-2xl">
            Explore All Projects <FiArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;