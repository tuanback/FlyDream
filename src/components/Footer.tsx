import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mocha text-ivory">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">EduConsult</h3>
            <p className="text-beige mb-4">
              Your trusted partner in international education consulting since 2000.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gold"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-beige hover:text-gold">About Us</a></li>
              <li><a href="#" className="text-beige hover:text-gold">Services</a></li>
              <li><a href="#" className="text-beige hover:text-gold">Countries</a></li>
              <li><a href="#" className="text-beige hover:text-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-beige hover:text-gold">USA</a></li>
              <li><a href="#" className="text-beige hover:text-gold">UK</a></li>
              <li><a href="#" className="text-beige hover:text-gold">Canada</a></li>
              <li><a href="#" className="text-beige hover:text-gold">Australia</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-beige">+1 234 567 8900</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-beige">contact@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-beige">123 Business Street, City, Country</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-mocha-light mt-12 pt-8 text-center text-beige">
          <p>&copy; {new Date().getFullYear()} EduConsult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;