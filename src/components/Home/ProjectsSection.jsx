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
      title: 'AI-Powered E-commerce',
      description: 'Integrated recommendation engine with Django backend and React frontend.',
      tags: ['React', 'Django', 'ML'],
      image: 'https://images.unsplash.com/photo-1581092334115-1acb839bffb5?auto=format&fit=crop&w=800&q=80',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Fitness Tracking Ecosystem',
      description: 'Built with Flutter for cross-platform performance and real-time data.',
      tags: ['Flutter', 'Firebase', 'Dart'],
      image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Smart Home IoT Platform',
      description: 'Real-time monitoring and voice control integration for modern homes.',
      tags: ['IoT', 'Node.js', 'React Native'],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Blockchain Voting Solution',
      description: 'Decentralized voting platform with Ethereum smart contracts and Web3.',
      tags: ['Solidity', 'Web3', 'Ethereum'],
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
      demoLink: '#',
      githubLink: '#'
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
                      src={project.image} 
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
                          href={project.githubLink}
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