
import React from 'react';
import HeroSection from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import PackagesSection from '@/components/PackagesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DestinationsSection />
      <PackagesSection />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
