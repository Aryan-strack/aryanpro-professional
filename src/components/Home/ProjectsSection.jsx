import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered E-commerce Platform',
      description: 'Integrated recommendation engine with Django backend and React frontend',
      tags: ['React', 'Django', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1581092334115-1acb839bffb5?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Cross-platform Fitness App',
      description: 'Built with Flutter for both iOS and Android with Firebase backend',
      tags: ['Flutter', 'Firebase', 'Dart'],
      image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Smart Home Automation System',
      description: 'IoT solution with real-time monitoring and voice control integration',
      tags: ['IoT', 'Node.js', 'React Native'],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform with Ethereum smart contracts',
      tags: ['Blockchain', 'Solidity', 'Web3.js'],
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'GPT-3 powered content creation tool with custom templates',
      tags: ['AI', 'Python', 'Next.js'],
      image: 'https://images.unsplash.com/photo-1642784353725-5bf4f9c6c908?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'AR Furniture App',
      description: 'Augmented reality app for visualizing furniture in your space',
      tags: ['AR', 'Unity', 'ARKit'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=400&q=80',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions across various technologies
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
              // Use default Swiper classes, style in CSS or Tailwind
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'opacity-30'
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16 relative group"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full mx-2 border border-gray-100">
                    <div className="overflow-hidden h-48">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 border-t pt-4">
                        <a 
                          href={project.demoLink} 
                          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          <FiExternalLink className="mr-1" /> Demo
                        </a>
                        <a 
                          href={project.githubLink} 
                          className="flex items-center text-gray-600 hover:text-gray-800 font-medium transition-colors"
                        >
                          <FiGithub className="mr-1" /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            
            {/* Custom navigation buttons */}
            <div className="swiper-button-next after:hidden bg-white p-3 rounded-full shadow-md text-blue-600 hover:text-blue-800 transition-colors opacity-0 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="swiper-button-prev after:hidden bg-white p-3 rounded-full shadow-md text-blue-600 hover:text-blue-800 transition-colors opacity-0 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;