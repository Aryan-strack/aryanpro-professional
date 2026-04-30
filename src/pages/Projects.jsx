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
      title: "IntelliMart AI",
      description: "An AI-powered shopping assistant that uses computer vision to identify products and provide real-time pricing comparisons, nutritional information, and personalized recommendations.",
      tags: ["AI", "Python", "OpenCV", "TensorFlow"],
      category: "AI",
      thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aryanahmad/intellimart",
      live: "https://intellimart.demo",
      video: "https://youtube.com/watch?v=example",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio v4",
      description: "An interactive portfolio featuring glassmorphism, smooth animations, and advanced dark mode. Built with React and Framer Motion for a premium user experience.",
      tags: ["React", "Framer Motion", "Tailwind", "Vite"],
      category: "Web",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aryanahmad/portfolio-v4",
      live: "https://aryanahmad.dev",
      featured: true
    },
    {
      id: 3,
      title: "HealthTrack Pro",
      description: "A Flutter-based health tracking application that syncs with wearable devices to monitor fitness metrics, sleep patterns, and nutrition intake.",
      tags: ["Flutter", "Firebase", "Dart", "HealthKit"],
      category: "Mobile",
      thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aryanahmad/healthtrack",
      live: "https://healthtrack.app",
      featured: false
    },
    {
      id: 4,
      title: "E-Commerce Analytics",
      description: "A comprehensive admin dashboard for e-commerce businesses with predictive analytics, inventory management, and customer behavior insights.",
      tags: ["React", "Node.js", "MongoDB", "D3.js"],
      category: "Full-Stack",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aryanahmad/ecom-dashboard",
      live: "https://dashboard.shopdemo.com",
      featured: false
    },
    {
      id: 5,
      title: "NeuroAssistant SDK",
      description: "A developer toolkit for building custom voice assistants with advanced natural language processing and emotional intelligence capabilities.",
      tags: ["Python", "NLP", "Machine Learning", "FastAPI"],
      category: "AI",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aryanahmad/voice-sdk",
      live: "https://voice-sdk.dev",
      featured: true
    },
    {
      id: 6,
      title: "TaskFlow OS",
      description: "A productivity operating system within the browser, featuring Kanban boards, real-time collaboration, and deep tool integrations.",
      tags: ["React", "Express", "PostgreSQL", "Socket.io"],
      category: "Full-Stack",
      thumbnail: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=1200&q=80",
      github: "https://github.com/aryanahmad/taskflow",
      live: "https://taskflow.app",
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