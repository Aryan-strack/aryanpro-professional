import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../../assets/aryan1.png'; // Example image, replace with actual path

const HeroSection = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative h-[850px] sm:h-[800px] md:h-[600px] flex flex-col justify-start items-center sm:items-start sm:justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:py-16 sm:pl-32 transition-colors duration-500"
      ref={ref}
    >
      {/* Enhanced Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { 
                enable: true, 
                mode: "repulse",
                parallax: { enable: true, force: 60, smooth: 10 }
              },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { 
                distance: 100, 
                duration: 0.8,
                speed: 0.5
              },
            },
          },
          particles: {
            color: { 
              value: ["#3B82F6", "#8B5CF6", "#EC4899"] 
            },
            links: {
              color: "#9CA3AF",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
              triangles: {
                enable: true,
                color: "#3B82F6",
                opacity: 0.1
              }
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 1.5,
              straight: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            number: { 
              density: { 
                enable: true,
                area: 800
              }, 
              value: 80 // Reduced for mobile performance
            },
            opacity: { 
              value: { min: 0.1, max: 0.5 },
              animation: {
                enable: true,
                speed: 1,
                sync: false
              }
            },
            shape: { 
              type: ["circle", "triangle", "polygon"],
              options: {
                polygon: {
                  sides: 5
                }
              }
            },
            size: { 
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 4,
                minimumValue: 0.3,
                sync: false
              }
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 3
            }
          },
          detectRetina: true,
        }}
      />
      
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-between relative z-10 gap-8 md:gap-0">
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">Aryan Ahmad</span>
          </motion.h1>

          <motion.div 
            className="text-xl sm:text-2xl md:text-2xl h-10 sm:h-12 mb-4 sm:mb-6 text-gray-700 dark:text-gray-200"
            variants={itemVariants}
          >
            <Typewriter
              words={[
                'Full Stack Developer', 
                'Mobile App Developer', 
                'AI Integrator', 
                'Python Expert', 
                'UI/UX Enthusiast'
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              cursorBlinking={true}
            />
          </motion.div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed"
            variants={itemVariants}
          >
            I build exceptional digital experiences with cutting-edge technologies and AI integration.
            Focused on creating scalable, performant solutions that drive business growth.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#"
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-white dark:text-white shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ 
                y: -3,
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href='/assets/Aryan.pdf' download="Aryan_Ahmad.pdf" className="relative z-10">View Resume</a>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
            </motion.a>
            <motion.a 
              href="#"
              className="relative overflow-hidden border-2 border-blue-400 text-blue-400 hover:text-white dark:border-blue-300 dark:text-blue-300 dark:hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 bg-transparent dark:bg-transparent group text-sm sm:text-base"
              whileHover={{ 
                y: -3,
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-blue-400 dark:bg-blue-300 w-0 group-hover:w-full transition-all duration-500 -z-1"></span>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <div className="relative">
            <img 
              src={img1} 
              alt="Aryan Ahmad" 
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-contain rounded-full border-4 border-white shadow-2xl relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 dark:opacity-30 -z-1 animate-pulse"></div>
            <div className="absolute -inset-2 sm:-inset-4 border-4 border-blue-400/30 dark:border-blue-300/30 rounded-full animate-spin-slow -z-1"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-full flex flex-col items-center justify-end -pb-4 mt-2 sm:pb-0">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 sm:mb-2">Scroll Down</span>
          <div className="mx-auto w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex items-start justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-1 h-2 bg-gray-400 dark:bg-gray-300 rounded-full mt-1 sm:mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;