
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Projects />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
