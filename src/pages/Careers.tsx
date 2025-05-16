import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/home/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const jobOpenings = [
  {
    title: 'Full Stack Developer',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-Time',
    description: 'Join our core development team to build innovative solutions using cutting-edge technologies.',
    requirements: [
      '3+ years of experience with React and Node.js',
      'Strong TypeScript skills and experience with modern frameworks',
      'Understanding of database design and optimization',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of CI/CD pipelines and DevOps practices'
    ],
   
  },
  {
    title: 'AI/ML Engineer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Help build our next generation of AI-powered solutions that transform how businesses operate.',
    requirements: [
      'Advanced degree in Computer Science, AI, or related field',
      'Experience with machine learning frameworks (TensorFlow, PyTorch)',
      'Strong programming skills in Python',
      'Knowledge of NLP, computer vision, or predictive analytics',
      'Experience deploying ML models in production environments'
    ],
    
  },
  {
    title: 'DevOps Engineer',
    location: 'Bengaluru, India',
    type: 'Full-Time',
    description: 'Build and maintain our cloud infrastructure and deployment pipelines to ensure reliability and scalability.',
    requirements: [
      '3+ years of experience in DevOps or Site Reliability Engineering',
      'Strong knowledge of containerization (Docker, Kubernetes)',
      'Experience with infrastructure as code (Terraform, CloudFormation)',
      'Proficiency with CI/CD tools (Jenkins, GitHub Actions, GitLab CI)',
      'Understanding of monitoring and observability principles'
    ],
   
  }
];

const faqItems = [
  {
    question: 'What is the hiring process like at Sapienz Technologies?',
    answer: 'Our hiring process typically involves an initial screening, technical assessment, panel interview, and final interview with a team lead or manager. We aim to make the process as smooth and transparent as possible, keeping candidates informed at each stage.'
  },
  {
    question: 'Does Sapienz Technologies offer remote work options?',
    answer: 'Yes, we offer both hybrid and fully remote positions depending on the role and team requirements. We believe in providing flexibility to our employees while maintaining collaboration and productivity.'
  },
  {
    question: 'What benefits does Sapienz Technologies offer?',
    answer: 'We offer competitive salaries, health insurance, retirement plans, professional development opportunities, flexible working hours, and an inclusive work environment that values diversity and innovation.'
  },
  {
    question: 'How does Sapienz Technologies support professional growth?',
    answer: 'We support our employees\' professional growth through continuous learning opportunities, mentorship programs, conference attendance, workshops, and clear career progression paths tailored to individual goals.'
  },
  {
    question: 'What is the company culture like at Sapienz Technologies?',
    answer: 'Our culture is built on innovation, collaboration, and excellence. We foster an environment where ideas are valued, diversity is celebrated, work-life balance is respected, and individuals are empowered to make significant contributions.'
  }
];

const Careers = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">Careers at Sapienz Technologies</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              "Join our team of talented professionals and work on exciting projects that make a difference. We foster a culture of innovation, growth, and collaboration."
            </p>
          </div>
        </div>

        {/* Why Join Us */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Join Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At Sapienz Technologies, we offer a dynamic work environment where innovation thrives and your career growth is prioritized. We believe in empowering our team members to reach their full potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#693bb8]/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#693bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovative Projects</h3>
                  <p className="text-gray-500">Work on cutting-edge technologies and challenging projects that push the boundaries of innovation.</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#693bb8]/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#693bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Professional Growth</h3>
                  <p className="text-gray-500">Continuous learning opportunities, mentorship, and clear career progression paths tailored to your goals.</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#693bb8]/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#693bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Collaborative Culture</h3>
                  <p className="text-gray-500">A supportive environment where teamwork flourishes, diverse perspectives are valued, and everyone can contribute.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join our talented team and work on exciting projects that make a real impact. We're looking for passionate individuals who are eager to learn and grow with us.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <div className="flex items-center text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="mr-4">{job.location}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <Button className="bg-[#693bb8] text-white hover:bg-[#693bb8]/90 mt-4 md:mt-0">
                        Apply Now
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Requirements</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3">About This Role</h4>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* General Application */}
        <section className="py-16 px-6 bg-[#693bb8] border-y border-[#693bb8]/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Don't See What You're Looking For?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              We're always on the lookout for exceptional talent. If you don't see a role that matches your skills and experience, 
              but believe you could add value to our team, we encourage you to submit your resume for future opportunities.
            </p>
            <Button className="bg-white text-[#693bb8] hover:bg-gray-100 px-8 py-6 h-auto text-lg font-medium">
              Submit Your Resume
            </Button>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about working at Sapienz Technologies. If you don't see your question here, feel free to contact us.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold py-4">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
