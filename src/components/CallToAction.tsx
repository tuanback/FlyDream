import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-mocha py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-ivory">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Book a free consultation with our education experts and take the first step towards your international education goals.
          </p>
          <button className="bg-gold text-mocha px-8 py-3 rounded-md font-semibold hover:bg-ivory">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;