import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const projectsList = [
  {
    category: 'Web Development',
    title: 'Logistics Tracking Platform',
    description: 'Real-time shipment tracking system with GPS integration for fleet management and delivery optimization.',
    image: '/Screenshot 2025-05-15 181824.png'
  },
  {
    category: 'Mobile App',
    title: 'Healthcare Mobile App',
    description: 'Patient management mobile application for healthcare providers with telemedicine capabilities.',
    image: '/healthcare-mobile-app.jpeg'
  },
  {
    category: 'AI & Machine Learning',
    title: 'Financial Platform',
    description: 'Comprehensive financial management system with secure transactions, automated reporting, and client portfolio management.',
    image: '/fintech-platform.jpeg'
  },
  {
    category: 'DevOps & Automation',
    title: 'Enterprise CI/CD Pipeline',
    description: 'Robust continuous integration and deployment pipelines for a Fortune 500 client, resulting in 70% faster deployment cycles.',
    image: '/projects/Atlassian Bitbucket_ Code & CI_CD on the Atlassian Platform.jpeg'
  },
  {
    category: 'Cloud Solutions',
    title: 'Cloud Migration Project',
    description: 'Strategic migration of on-premise infrastructure to cloud-based solutions for improved scalability and cost efficiency.',
    image: '/projects/SaaS - Cloud File management Dashboard.jpeg'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered for clients across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-[#693bb8] font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button
              className="bg-[#693bb8] text-white hover:bg-[#693bb8]/90 inline-flex items-center"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
