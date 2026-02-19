import React from 'react'
import ProfileSection from '../components/About/ProfileSection';
import PersonalBio from '../components/About/PersonalBio';
import CareerTimeline from '../components/About/CareerTimeline';
import SkillsGrid from '../components/About/SkillsGrid';
import WhyMeSection from '../components/About/WhyMe';


const About = () => {
  return (
    <>
    <ProfileSection />
    <PersonalBio />
    <CareerTimeline />
    <SkillsGrid />
    <WhyMeSection />

    </>
  )
}

export default About