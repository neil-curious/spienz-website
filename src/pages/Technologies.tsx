import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/home/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code as ReactIcon,
  Code as TypescriptIcon,
  Code as HtmlIcon,
  Code as VueIcon,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Smartphone as SmartphoneIcon,
  CircuitBoard as AIIcon,
  Cloud as CloudIcon
} from 'lucide-react';

const techCategories = [
  {
    id: 'frontend',
    category: 'Frontend Engineering',
    description: 'Build seamless and engaging user experiences with responsive, intuitive, and visually stunning interfaces that keep users coming back.',
    technologies: [
      { name: 'React', icon: <ReactIcon className="h-8 w-8 text-blue-500" /> },
      { name: 'Next.js', icon: <div className="font-bold text-xl">NEXT.</div> },
      { name: 'Angular', icon: <div className="text-red-500 font-bold text-xl">angular</div> },
      { name: 'Vue.js', icon: <VueIcon className="h-8 w-8 text-green-500" /> },
      { name: 'TypeScript', icon: <TypescriptIcon className="h-8 w-8 text-blue-600" /> },
      { name: 'HTML5', icon: <HtmlIcon className="h-8 w-8 text-orange-500" /> },
      { name: 'CSS3', icon: <div className="text-blue-500 font-bold text-xl">CSS3</div> },
      { name: 'JavaScript', icon: <div className="text-yellow-500 font-bold text-xl">JS</div> }
    ]
  },
  {
    id: 'backend',
    category: 'Backend Engineering',
    description: 'We build robust, scalable and secure backend systems that power your applications with high performance and reliability.',
    technologies: [
      { name: 'Node.js', icon: <ServerIcon className="h-8 w-8 text-green-600" /> },
      { name: 'Python', icon: <div className="text-blue-500 font-bold text-xl">Py</div> },
      { name: 'Java', icon: <div className="text-red-600 font-bold text-xl">Java</div> },
      { name: 'Go', icon: <div className="text-blue-400 font-bold text-xl">Go</div> },
      { name: 'Ruby on Rails', icon: <div className="text-red-500 font-bold text-xl">Rails</div> },
      { name: '.NET', icon: <div className="text-purple-600 font-bold text-xl">.NET</div> }
    ]
  },
  {
    id: 'database',
    category: 'Database',
    description: 'Optimize your data storage and retrieval with our expertise in designing and implementing efficient database solutions.',
    technologies: [
      { name: 'PostgreSQL', icon: <DatabaseIcon className="h-8 w-8 text-blue-600" /> },
      { name: 'MongoDB', icon: <div className="text-green-700 font-bold text-xl">MongoDB</div> },
      { name: 'MySQL', icon: <div className="text-blue-500 font-bold text-xl">MySQL</div> },
      { name: 'Redis', icon: <div className="text-red-500 font-bold text-xl">Redis</div> },
      { name: 'Elasticsearch', icon: <div className="text-yellow-500 font-bold text-xl">ES</div> }
    ]
  },
  {
    id: 'mobile',
    category: 'Mobile',
    description: 'Create exceptional mobile experiences with our expertise in native and cross-platform development.',
    technologies: [
      { name: 'React Native', icon: <ReactIcon className="h-8 w-8 text-blue-500" /> },
      { name: 'Flutter', icon: <div className="text-blue-400 font-bold text-xl">Flutter</div> },
      { name: 'Swift', icon: <div className="text-orange-500 font-bold text-xl">Swift</div> },
      { name: 'Kotlin', icon: <div className="text-purple-500 font-bold text-xl">Kotlin</div> }
    ]
  },
  {
    id: 'devops',
    category: 'Cloud & DevOps',
    description: 'Streamline your development and deployment processes with our DevOps expertise and cloud infrastructure solutions.',
    technologies: [
      { name: 'Docker', icon: <CloudIcon className="h-8 w-8 text-blue-500" /> },
      { name: 'Kubernetes', icon: <div className="text-blue-600 font-bold text-xl">K8s</div> },
      { name: 'AWS', icon: <div className="text-yellow-600 font-bold text-xl">AWS</div> },
      { name: 'Azure', icon: <div className="text-blue-500 font-bold text-xl">Azure</div> },
      { name: 'Google Cloud', icon: <div className="text-red-400 font-bold text-xl">GCP</div> },
      { name: 'Jenkins', icon: <div className="text-gray-500 font-bold text-xl">Jenkins</div> }
    ]
  },
  {
    id: 'aiml',
    category: 'AI & ML',
    description: 'Leverage the power of artificial intelligence and machine learning to gain insights and automate processes.',
    technologies: [
      { name: 'TensorFlow', icon: <AIIcon className="h-8 w-8 text-orange-500" /> },
      { name: 'PyTorch', icon: <div className="text-red-500 font-bold text-xl">PyTorch</div> },
      { name: 'scikit-learn', icon: <div className="text-blue-500 font-bold text-xl">scikit</div> },
      { name: 'OpenAI API', icon: <div className="text-green-500 font-bold text-xl">OpenAI</div> }
    ]
  }
];

const Technologies = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">Technologies</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              "Empowering innovation through cutting-edge technology, we deliver scalable, secure, and future-ready solutions that help businesses transform, adapt, and lead in a rapidly evolving digital landscape."
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We focus on leveraging updated technology stacks that foster business growth. Our skill sets span diverse technological landscapes and platforms. From concept to development, testing to deployment, we deliver solutions that drive innovation and business success.
              </p>
            </div>
            
            {/* Tabs for Technology Categories */}
            <Tabs defaultValue="frontend" className="w-full">
              <div className="hidden md:block mb-8">
                <TabsList className="grid grid-cols-6 w-full bg-gray-100 p-1 rounded-xl">
                  {techCategories.map((cat) => (
                    <TabsTrigger 
                      key={cat.id} 
                      value={cat.id}
                      className="data-[state=active]:bg-[#693bb8] data-[state=active]:text-white py-3 rounded-lg"
                    >
                      {cat.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <div className="md:hidden mb-8">
                <TabsList className="flex flex-wrap gap-2 w-full bg-gray-100 p-2 rounded-xl">
                  {techCategories.map((cat) => (
                    <TabsTrigger 
                      key={cat.id} 
                      value={cat.id}
                      className="data-[state=active]:bg-[#693bb8] data-[state=active]:text-white py-2 px-3 flex-grow rounded-lg"
                    >
                      {cat.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {techCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6 animate-fade-in">
                  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm mb-8">
                    <div className="text-center mb-10">
                      <h3 className="text-3xl font-bold mb-4">{category.category}</h3>
                      <p className="text-gray-600 mb-6 max-w-3xl mx-auto">{category.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
                      {category.technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] text-center">
                          <div className="flex items-center justify-center h-16 w-full mb-4">
                            {tech.icon}
                          </div>
                          <span className="text-sm font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                      <button className="bg-[#693bb8] text-white px-8 py-3 rounded-lg hover:bg-[#693bb8]/90 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure the successful delivery of all our projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#693bb8]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#693bb8] text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600">We gather requirements, analyze your business needs, and define project scope.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#693bb8]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#693bb8] text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Planning</h3>
                <p className="text-gray-600">We create project roadmaps, select technologies, and establish development milestones.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#693bb8]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#693bb8] text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Development</h3>
                <p className="text-gray-600">Our team writes clean, efficient code following agile development methodologies.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#693bb8]/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#693bb8] text-3xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deployment</h3>
                <p className="text-gray-600">We test rigorously, deploy your solution, and provide ongoing support.</p>
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

export default Technologies;
