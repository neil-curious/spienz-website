
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: 'Expertise',
    description: 'Our team consists of skilled developers, designers and project managers with extensive experience.'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the latest technologies and methodologies to deliver cutting-edge solutions.'
  },
  {
    title: 'Quality',
    description: 'We prioritize quality in every aspect of our work, from code to user experience design.'
  },
  {
    title: 'Client-Focused',
    description: 'We work closely with clients to understand their needs and deliver tailored solutions.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Sapienz Technologies?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering excellence in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
