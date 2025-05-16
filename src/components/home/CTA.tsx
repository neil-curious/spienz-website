
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="bg-sapienz-purple text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Get in touch with our team to discuss how we can help bring your ideas to life.
        </p>
        <Link to="/contact">
          <Button className="bg-white text-sapienz-purple hover:bg-gray-100 px-8 py-6 text-lg">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
