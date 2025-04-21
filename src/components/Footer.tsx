import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-cyan-500 mr-2" />
            <span className="text-xl font-bold font-mono tracking-tight">
              Andri<span className="text-cyan-500">.</span>sec
            </span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="#about" 
              className="hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#expertise" 
              className="hover:text-cyan-400 transition-colors"
            >
              Expertise
            </a>
            <a 
              href="#experience" 
              className="hover:text-cyan-400 transition-colors"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Andri. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            Cybersecurity expert specializing in penetration testing, 
            reverse engineering, and digital forensics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;