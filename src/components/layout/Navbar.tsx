import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#693bb8] shadow-md' 
        : 'bg-transparent backdrop-blur-sm bg-black/5'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Sapienz Technologies Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tight text-white drop-shadow-sm">SAPIENZ TECHNOLOGIES</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-white hover:text-gray-200 transition-colors drop-shadow-sm">Home</Link>
          <Link to="/services" className="font-medium text-white hover:text-gray-200 transition-colors drop-shadow-sm">Services</Link>
          <Link to="/technologies" className="font-medium text-white hover:text-gray-200 transition-colors drop-shadow-sm">Technologies</Link>
          <Link to="/projects" className="font-medium text-white hover:text-gray-200 transition-colors drop-shadow-sm">Projects</Link>
          <Link to="/careers" className="font-medium text-white hover:text-gray-200 transition-colors drop-shadow-sm">Careers</Link>
          <Link to="/contact">
            <Button className="bg-white text-[#693bb8] hover:bg-gray-100 ml-4">Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#693bb8] text-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-gray-200" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/services" className="font-medium hover:text-gray-200" onClick={toggleMobileMenu}>Services</Link>
            <Link to="/technologies" className="font-medium hover:text-gray-200" onClick={toggleMobileMenu}>Technologies</Link>
            <Link to="/projects" className="font-medium hover:text-gray-200" onClick={toggleMobileMenu}>Projects</Link>
            <Link to="/careers" className="font-medium hover:text-gray-200" onClick={toggleMobileMenu}>Careers</Link>
            <Link to="/contact" onClick={toggleMobileMenu}>
              <Button className="bg-white text-[#693bb8] hover:bg-gray-100 w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
