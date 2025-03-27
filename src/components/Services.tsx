import React from 'react';
import { BookOpen, FileText, Users, Compass } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mocha mb-4">Our Services</h2>
          <p className="text-mocha-light max-w-2xl mx-auto">
            We provide comprehensive education consulting services to help you achieve your international education goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-ivory p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-mocha" />
            </div>
            <h3 className="text-xl font-semibold text-mocha mb-2">Course Selection</h3>
            <p className="text-mocha-light">Expert guidance in choosing the right course and university aligned with your career goals.</p>
          </div>
          <div className="bg-ivory p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <FileText className="w-12 h-12 text-mocha" />
            </div>
            <h3 className="text-xl font-semibold text-mocha mb-2">Visa Assistance</h3>
            <p className="text-mocha-light">Complete support for student visa applications and documentation requirements.</p>
          </div>
          <div className="bg-ivory p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-mocha" />
            </div>
            <h3 className="text-xl font-semibold text-mocha mb-2">Test Preparation</h3>
            <p className="text-mocha-light">Comprehensive coaching for IELTS, TOEFL, GRE, and other required tests.</p>
          </div>
          <div className="bg-ivory p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Compass className="w-12 h-12 text-mocha" />
            </div>
            <h3 className="text-xl font-semibold text-mocha mb-2">Career Guidance</h3>
            <p className="text-mocha-light">Professional counseling to help you make informed decisions about your future.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;