import { Typewriter } from 'react-simple-typewriter';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../../assets/aryan.png';
import { useEffect, useState } from 'react'

const HeroSection = () => {

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);


  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for smooth motion
      }
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 pt-20 px-6 sm:px-12 lg:px-24"
    >
      {/* Dynamic Background Particles */}
      <Particles
        id="tsparticles"
        // init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
            },
          },
          particles: {
            color: { value: "#3b82f6" },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800"
            >
              Available for Hire
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Aryan Ahmad
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 text-gray-600 dark:text-gray-300 h-12"
            >
              <Typewriter
                words={['Full Stack Developer', 'Mobile App Expert', 'AI Engineer', 'Software Engineer']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Transforming complex problems into elegant digital solutions with a focus on
              performance, scalability, and user-centric design.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-800 rounded-2xl font-bold hover:border-blue-500 transition-all"
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image with Animations */}
          <motion.div
            className="flex-1 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 rounded-full blur-[60px] animate-pulse"></div>

              {/* Floating Container */}
              <motion.div
                className="relative w-full h-full rounded-full border-4 border-white/50 dark:border-white/10 shadow-2xl overflow-hidden glass"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={img1}
                  alt="Aryan Ahmad"
                  className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                />
              </motion.div>

              {/* Orbital Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl z-20 border border-gray-100 dark:border-gray-800"
                animate={{ rotate: [0, 5, -5, 0], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="text-center">
                  <span className="block text-2xl font-bold text-blue-600">3+</span>
                  <span className="text-[10px] uppercase tracking-tighter text-gray-400">Years Exp.</span>
                </div>
              </motion.div>
            </div>

            {/* Rotating border elements */}
            <div className="absolute w-[110%] h-[110%] border-2 border-dashed border-blue-500/30 rounded-full animate-spin-slow"></div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;