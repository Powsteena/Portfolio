import React from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Copyright Text */}
        <p className="mb-4">
          © {new Date().getFullYear()} Mary Powsteena. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/powsteenaj/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <Facebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;