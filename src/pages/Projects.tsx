import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/home/CTA';
import { Card, CardContent } from '@/components/ui/card';

const projectsList = [
  {
    category: 'Web Development',
    title: 'Logistics Tracking Platform',
    description: 'Real-time shipment tracking system with GPS integration for fleet management and delivery optimization.',
    image: '/Screenshot 2025-05-15 181824.png',
    challenges: [
      'Integrating real-time GPS tracking',
      'Handling large volumes of tracking data',
      'Ensuring mobile responsiveness for drivers'
    ],
    solutions: [
      'Implemented WebSocket for real-time updates',
      'Designed scalable database architecture',
      'Created responsive UI with Tailwind CSS'
    ]
  },
  {
    category: 'Mobile App',
    title: 'Healthcare Mobile App',
    description: 'Patient management mobile application for healthcare providers with telemedicine capabilities.',
    image: '/healthcare-mobile-app.jpeg',
    challenges: [
      'Ensuring HIPAA compliance and data security',
      'Integrating video conferencing capabilities',
      'Creating intuitive UX for both patients and doctors'
    ],
    solutions: [
      'Implemented end-to-end encryption protocols',
      'Integrated WebRTC for secure video calls',
      'Conducted extensive user testing with both user groups'
    ]
  },
  {
    category: 'AI & Machine Learning',
    title: 'Financial Platform',
    description: 'Comprehensive financial management system with secure transactions, automated reporting, and client portfolio management.',
    image: '/fintech-platform.jpeg',
    challenges: [
      'Creating accurate predictive models for financial forecasting',
      'Ensuring regulatory compliance across multiple regions',
      'Handling sensitive financial data securely'
    ],
    solutions: [
      'Developed custom ML algorithms for predictive analytics',
      'Implemented configurable compliance rule engine',
      'Created bank-grade security infrastructure'
    ]
  },
  {
    category: 'DevOps & Automation',
    title: 'Enterprise CI/CD Pipeline Implementation',
    description: 'Complete design and implementation of robust continuous integration and deployment pipelines for a Fortune 500 client, resulting in 70% faster deployment cycles and 45% reduction in production issues.',
    image: '/projects/Atlassian Bitbucket_ Code & CI_CD on the Atlassian Platform.jpeg',
    challenges: [
      'Integrating with complex legacy systems and existing tools',
      'Ensuring zero downtime during deployments across multiple regions',
      'Managing security compliance requirements in a highly regulated industry',
      'Standardizing build processes across diverse technology stacks'
    ],
    solutions: [
      'Implemented Bitbucket-based version control with custom branch policies and automated code reviews',
      'Designed containerized build environments with Docker for consistent deployments',
      'Created comprehensive test automation suite with 92% code coverage',
      'Implemented blue-green deployment strategy with automated rollback capabilities'
    ]
  },
  {
    category: 'Cloud Solutions',
    title: 'Cloud Migration Project',
    description: 'Strategic migration of on-premise infrastructure to cloud-based solutions for improved scalability and cost efficiency.',
    image: '/projects/SaaS - Cloud File management Dashboard.jpeg',
    challenges: [
      'Minimizing downtime during migration',
      'Ensuring data integrity during transfer',
      'Optimizing costs while maintaining performance'
    ],
    solutions: [
      'Implemented phased migration approach',
      'Created comprehensive data validation procedures',
      'Developed auto-scaling infrastructure based on usage patterns'
    ]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-[#693bb8] text-white py-20 px-6 pt-28 relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/15 z-10"></div>
            <img 
              src="/hero-background.jpg" 
              alt="Background" 
              className="w-full h-full object-cover animate-zoom opacity-25"
            />
          </div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">Our Projects</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              "Delivering innovative solutions across industries, our projects showcase our expertise in creating impactful digital experiences that drive business growth and technological advancement."
            </p>
          </div>
        </div>

        {/* Projects List */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of successful projects delivered for clients across various industries. Each project demonstrates our commitment to excellence and innovative problem-solving.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {projectsList.map((project, index) => (
                <Card key={index} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8">
                      <div className="text-sm text-[#693bb8] font-medium mb-2">{project.category}</div>
                      <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <h3 className="font-semibold text-lg mb-2">Challenges:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                        {project.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex}>{challenge}</li>
                        ))}
                      </ul>
                      
                      <h3 className="font-semibold text-lg mb-2">Solutions:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {project.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex}>{solution}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
