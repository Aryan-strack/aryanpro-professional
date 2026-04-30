import { useState } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiYoutube, 
  FiX,
  FiCode,
  FiCpu,
  FiSmartphone,
  FiGlobe,
  FiDatabase,
  FiLayers,
  FiArrowRight,
  FiFilter
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsPage = () => {
  // Project data with Unsplash images
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
    category: "Mobile ,Web",
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
    category: "AI,All",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Aryan-strack/sales-predictor",
    live: "https://sales-predictor.vercel.app",
    featured: false
  }
];
  const categories = ["All", "Web", "AI", "Mobile", "Full-Stack"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getTagIcon = (tag) => {
    const iconMap = {
      'React': <FiGlobe />,
      'Web': <FiGlobe />,
      'AI': <FiCpu />,
      'Python': <FiCpu />,
      'NLP': <FiCpu />,
      'Flutter': <FiSmartphone />,
      'Mobile': <FiSmartphone />,
      'Node.js': <FiCode />,
      'Full-Stack': <FiLayers />,
      'Database': <FiDatabase />
    };
    return iconMap[tag] || <FiLayers />;
  };

  return (
    <section className="py-32 bg-white dark:bg-gray-950 transition-colors duration-500 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs">Showcase</span>
          <h1 className="text-5xl md:text-7xl font-black mt-3 mb-8 text-gray-900 dark:text-white">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Universe</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            A deep dive into the projects that define my journey as a developer and problem solver.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-gray-100 dark:border-white/5 pb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                    : 'bg-gray-50 dark:bg-gray-900 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
            <FiFilter /> {filteredProjects.length} Projects Found
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[2.5rem] overflow-hidden glass border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/10"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60"></div>
                  
                  {project.featured && (
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      Featured
                    </div>
                  )}
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project)}
                      className="w-12 h-12 bg-white text-gray-900 rounded-2xl flex items-center justify-center shadow-xl hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FiArrowRight size={20} />
                    </motion.button>
                  </div>
                </div>

                {/* Content Peek */}
                <div className="p-8">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium line-clamp-2 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex gap-4 border-t border-gray-100 dark:border-white/5 pt-6">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <FiGithub size={18} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-950/90 z-[100] flex items-center justify-center p-6 backdrop-blur-xl"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-white dark:bg-gray-900 rounded-[3rem] max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 z-[110] w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <FiX size={24} />
                </button>

                {/* Modal Visual */}
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={selectedProject.thumbnail} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="md:w-1/2 p-12 overflow-y-auto">
                  <span className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase text-xs">
                    {selectedProject.category} Project
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mt-4 mb-8 leading-tight">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl text-[10px] font-black uppercase tracking-widest border border-gray-100 dark:border-white/5">
                        {getTagIcon(tag)} {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-100 dark:border-white/5">
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3"
                    >
                      <FiExternalLink size={18} /> Launch Project
                    </a>
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3"
                    >
                      <FiGithub size={18} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProjectsPage;
