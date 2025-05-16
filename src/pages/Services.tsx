import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/home/CTA';
import { Card, CardContent } from '@/components/ui/card';

const servicesList = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'We build tailored software solutions that address your specific business challenges and requirements. Our development team uses the latest technologies and methodologies to deliver high-quality, scalable applications that drive your business forward.',
    features: [
      'Business analysis and requirements gathering',
      'UX/UI design and prototyping',
      'Full-stack development',
      'Quality assurance and testing',
      'Deployment and maintenance'
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'We create engaging, high-performance mobile applications for iOS and Android platforms. Our mobile development team focuses on delivering intuitive user experiences, robust functionality, and seamless performance across all devices.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions using React Native or Flutter',
      'Progressive Web Apps (PWAs)',
      'App Store optimization',
      'Ongoing support and updates'
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud Solutions',
    description: 'We help businesses leverage the power of cloud computing to improve scalability, reduce costs, and enhance security. Our cloud experts will guide you through the process of migrating to the cloud or optimizing your existing cloud infrastructure.',
    features: [
      'Cloud migration strategies',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Cloud security and compliance'
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'DevOps Services',
    description: 'We implement DevOps practices to streamline your software development lifecycle, improve collaboration between development and operations teams, and accelerate your time to market.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code (IaC)',
      'Containerization and orchestration',
      'Monitoring and logging',
      'Performance optimization'
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    description: 'We harness the power of artificial intelligence and machine learning to help businesses automate processes, gain insights from data, and create intelligent applications that drive innovation.',
    features: [
      'Data analysis and preparation',
      'ML model development and training',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Predictive analytics'
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'IT Consulting',
    description: 'Our experienced consultants provide strategic guidance to help you align your IT initiatives with your business goals. We offer practical advice and solutions to address your technology challenges and drive digital transformation.',
    features: [
      'IT strategy development',
      'Technology assessment and selection',
      'Digital transformation roadmaps',
      'IT governance and compliance',
      'Project management'
    ]
  }
];

const Services = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">Our Services</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              We offer a comprehensive range of software development and IT services to meet your unique business needs.
            </p>
          </div>
        </div>

        {/* Services List */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our team of experts delivers cutting-edge solutions tailored to your business requirements. Explore our services below.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12">
              {servicesList.map((service, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="text-[#693bb8] flex justify-center md:justify-start">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        
                        <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Service Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure the successful delivery of all our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#693bb8]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#693bb8] text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Consultation</h3>
                <p className="text-gray-600">We discuss your needs and identify the best solutions for your business.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#693bb8]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#693bb8] text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                <p className="text-gray-600">We create a detailed roadmap and strategy for implementing the solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#693bb8]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#693bb8] text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Execution</h3>
                <p className="text-gray-600">Our expert team delivers high-quality solutions on time and within budget.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#693bb8]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#693bb8] text-3xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Support</h3>
                <p className="text-gray-600">We provide ongoing support and maintenance to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
