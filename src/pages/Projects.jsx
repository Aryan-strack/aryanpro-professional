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
  FiLayers
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  // Project data with Unsplash images
  const projects = [
    {
      id: 1,
      title: "IntelliMart AI",
      description: "An AI-powered shopping assistant that uses computer vision to identify products and provide real-time pricing comparisons, nutritional information, and personalized recommendations.",
      tags: ["AI", "Python", "OpenCV", "TensorFlow"],
      category: "AI",
      thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      github: "https://github.com/aryanahmad/intellimart",
      live: "https://intellimart.demo",
      video: "https://youtube.com/watch?v=example",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio v3",
      description: "An interactive portfolio featuring 3D elements, smooth animations, and a dark/light mode toggle. Built with modern web technologies for optimal performance.",
      tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
      category: "Web",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      github: "https://github.com/aryanahmad/portfolio-v3",
      live: "https://aryanahmad.dev",
      featured: true
    },
    {
      id: 3,
      title: "HealthTrack Pro",
      description: "A Flutter-based health tracking application that syncs with wearable devices to monitor fitness metrics, sleep patterns, and nutrition intake.",
      tags: ["Flutter", "Firebase", "Dart", "HealthKit"],
      category: "Flutter",
      thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/aryanahmad/healthtrack",
      live: "https://healthtrack.app",
      featured: false
    },
    {
      id: 4,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce businesses with analytics, inventory management, and customer insights.",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Full-Stack",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/aryanahmad/ecom-dashboard",
      live: "https://dashboard.shopdemo.com",
      featured: false
    },
    {
      id: 5,
      title: "Voice Assistant SDK",
      description: "A developer toolkit for building custom voice assistants with natural language processing capabilities.",
      tags: ["Python", "NLP", "Machine Learning", "API"],
      category: "AI",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/aryanahmad/voice-sdk",
      live: "https://voice-sdk.dev",
      featured: true
    },
    {
      id: 6,
      title: "TaskFlow Productivity",
      description: "A kanban-style productivity app with team collaboration features, time tracking, and integrations with popular tools.",
      tags: ["React", "Express", "PostgreSQL", "WebSockets"],
      category: "Full-Stack",
      thumbnail: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      github: "https://github.com/aryanahmad/taskflow",
      live: "https://taskflow.app",
      featured: false
    }
  ];

  const categories = ["All", "Web", "AI", "Flutter", "Full-Stack"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const loadMore = () => setVisibleProjects(prev => prev + 4);

  // Get icon for each tag
  const getTagIcon = (tag) => {
    switch(tag) {
      case 'React':
      case 'Web':
        return <FiGlobe className="mr-1" />;
      case 'AI':
      case 'Python':
      case 'TensorFlow':
      case 'Machine Learning':
        return <FiCpu className="mr-1" />;
      case 'Flutter':
      case 'Dart':
      case 'Mobile':
        return <FiSmartphone className="mr-1" />;
      case 'Node.js':
      case 'Express':
      case 'API':
        return <FiCode className="mr-1" />;
      case 'MongoDB':
      case 'PostgreSQL':
      case 'Database':
        return <FiDatabase className="mr-1" />;
      default:
        return <FiLayers className="mr-1" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A curated collection of my professional and personal projects showcasing my skills across different technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProjects(4);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Featured
                  </div>
                )}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <motion.span 
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-gray-800 px-5 py-2 rounded-lg font-medium flex items-center gap-2"
                  >
                    View Details
                  </motion.span>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <motion.span 
                      key={tag} 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1.5 rounded-full flex items-center"
                    >
                      {getTagIcon(tag)}
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a 
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  )}
                  {project.video && (
                    <motion.a 
                      href={project.video} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="Video demo"
                    >
                      <FiYoutube size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleProjects < filteredProjects.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30 font-medium flex items-center gap-2 mx-auto"
            >
              Load More Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.button>
          </motion.div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <FiX size={24} />
                </button>

                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src={selectedProject.thumbnail} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <motion.span 
                            key={tag} 
                            whileHover={{ scale: 1.05 }}
                            className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm flex items-center"
                          >
                            {getTagIcon(tag)}
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    {selectedProject.featured && (
                      <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                        Featured Project
                      </span>
                    )}
                  </div>

                  <div className="prose dark:prose-invert max-w-none mb-10">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Video Embed */}
                  {selectedProject.video && (
                    <div className="mb-10">
                      <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                        <FiYoutube />
                        Demo Walkthrough
                      </h4>
                      <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                        <iframe 
                          src={`https://www.youtube.com/embed/${selectedProject.video.split('v=')[1]}`}
                          className="w-full h-96"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Project demo video"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 mt-10">
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow-md"
                      >
                        <FiGithub size={20} />
                        View Code
                      </motion.a>
                    )}
                    {selectedProject.live && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                      >
                        <FiExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.button 
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                    >
                      <FiCode size={20} />
                      Case Study (Coming Soon)
                    </motion.button>
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

export default ProjectsSection;