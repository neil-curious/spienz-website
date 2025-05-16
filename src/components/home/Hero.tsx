import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Function to handle smooth scroll
  const scrollToContent = () => {
    const contentSection = document.getElementById('services-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden h-screen flex items-center pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/15 z-10"></div>
        <img 
          src="/hero-background.jpg" 
          alt="Background" 
          className="w-full h-full object-cover animate-fadeIn animate-zoom"
        />
      </div>

      {/* Background abstract shapes */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <svg className="absolute right-0 top-0 h-full w-2/3 opacity-50 animate-pulse" style={{ animationDuration: '20s' }} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M400,985Q214,1170,114,985T14,615Q14,430,114,245T400,60Q586,60,686,245T786,615Q786,800,686,985T400,985Z" 
            fill="#00ff7f" 
            opacity="0.3"
          />
        </svg>
        <svg className="absolute right-0 top-0 h-full w-2/3 opacity-50 animate-pulse" style={{ animationDuration: '15s' }} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M430,985Q244,1170,129,985T14,615Q14,430,129,245T430,60Q616,60,731,245T846,615Q846,800,731,985T430,985Z" 
            fill="#00cc66" 
            opacity="0.2"
          />
        </svg>
        <svg className="absolute -left-1/4 top-1/4 h-full w-2/3 opacity-40 animate-pulse" style={{ animationDuration: '18s' }} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M320,895Q134,1080,29,895T-76,525Q-76,340,29,155T320,-30Q506,-30,611,155T716,525Q716,710,611,895T320,895Z" 
            fill="#0066cc" 
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in text-white">
          Innovative Software Solutions for Your Business
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-10 opacity-90 animate-fade-in text-white">
          We transform ideas into powerful digital experiences. Let's build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Link to="/services">
            <Button className="bg-[#693bb8] text-white hover:bg-[#693bb8]/80 px-8 py-6 text-lg">
              Our Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-white text-[#693bb8] hover:bg-gray-100 px-8 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll down indicator - moved outside of content */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-fadeIn z-30"
        onClick={scrollToContent}
        style={{ animationDelay: '1s' }}
      >
        <span className="text-white text-sm mb-2 drop-shadow-md">Scroll Down</span>
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2 shadow-md">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce delay-75"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
