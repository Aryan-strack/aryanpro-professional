import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import SocialIcons from '../components/Home/SocialIcons';
import ProjectsSection from '../components/Home/ProjectsSection';
import TechStack from '../components/Home/TechStack';
import Testimonials from '../components/Home/Testimonials';
import StatsSection from '../components/Home/StatsSection';

const Home = () => {
  return (
    <>
    <HeroSection />
    <SocialIcons />
    <ProjectsSection />
    <TechStack />
    <Testimonials />
    <StatsSection />
    </>
  )
}

export default Home;