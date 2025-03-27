import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-mocha text-ivory py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail size={16} className="mr-2" />
              <span>contact@example.com</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gold">Student Login</a>
            <a href="#" className="hover:text-gold">Partner Login</a>
          </div>
        </div>
      </div>
      <nav className="bg-ivory shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-mocha">EduConsult</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-mocha-light hover:text-mocha">Home</a>
              <a href="#" className="text-mocha-light hover:text-mocha">About Us</a>
              <a href="#" className="text-mocha-light hover:text-mocha">Services</a>
              <a href="#" className="text-mocha-light hover:text-mocha">Countries</a>
              <a href="#" className="text-mocha-light hover:text-mocha">Contact</a>
              <button className="bg-mocha text-ivory px-6 py-2 rounded-md hover:bg-mocha-light">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-mocha">
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-ivory">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-mocha-light hover:text-mocha">Home</a>
              <a href="#" className="block px-3 py-2 text-mocha-light hover:text-mocha">About Us</a>
              <a href="#" className="block px-3 py-2 text-mocha-light hover:text-mocha">Services</a>
              <a href="#" className="block px-3 py-2 text-mocha-light hover:text-mocha">Countries</a>
              <a href="#" className="block px-3 py-2 text-mocha-light hover:text-mocha">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;