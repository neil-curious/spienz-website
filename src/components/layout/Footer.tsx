import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 px-6 md:px-0">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-md flex items-center justify-center shadow-sm">
                <img 
                  src="/logo-2.png" 
                  alt="Sapienz Technologies Logo" 
                  className="h-10 w-auto object-contain" 
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#4b114f]">SAPIENZ TECHNOLOGIES</span>
            </div>
            <p className="mt-4 text-gray-600">
              Innovative software solutions tailored to transform your business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 hover:text-[#693bb8] transition-colors">Home</Link>
              <Link to="/services" className="text-gray-600 hover:text-[#693bb8] transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-600 hover:text-[#693bb8] transition-colors">Projects</Link>
              <Link to="/careers" className="text-gray-600 hover:text-[#693bb8] transition-colors">Careers</Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#693bb8] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#693bb8] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">
                  5th Main Road, Indira Nagar<br />
                  Bengaluru, Karnataka 560038, IN
                </span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#693bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@sapienztechnologies.site" className="text-gray-600 hover:text-[#693bb8] transition-colors">
                  support@sapienztechnologies.site
                </a>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#693bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="text-gray-600 hover:text-[#693bb8] transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500">
          <p>© 2025 Sapienz Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
