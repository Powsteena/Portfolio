import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4 pt-20">
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: "-4s"}}></div>
    
      {/* Floating particles */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <div 
          key={num} 
          className={`floating-particle particle-${num} animate-float`}
        ></div>
      ))}
    
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
    
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Hi, I'm Mary Powsteena
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Full Stack Web Developer based in Jaffna, crafting digital experiences with passion and precision.
        </p>
        <div className="flex justify-center gap-6">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity text-white font-medium"
          >
            Contact Me
          </Link>
          <Link 
            to="/skills"
            className="px-8 py-4 border border-gray-700 rounded-lg hover:border-indigo-600 transition-colors text-white font-medium backdrop-blur-sm"
          >
            View Skills
          </Link>
        </div>
      </div>
    </section>
  );
};


export default Hero;
