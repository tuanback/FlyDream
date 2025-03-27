import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-mocha text-ivory">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Students studying"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Your Gateway to Global Education
          </h1>
          <p className="text-xl mb-8">
            Expert guidance for international education opportunities. Transform your future with our personalized consulting services.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gold text-mocha px-8 py-3 rounded-md font-semibold hover:bg-ivory flex items-center">
              Get Started <ChevronRight className="ml-2" />
            </button>
            <button className="border-2 border-ivory px-8 py-3 rounded-md font-semibold hover:bg-ivory hover:text-mocha">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;