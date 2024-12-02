import React from 'react';
import { ArrowRight } from 'lucide-react';
import ImageFrame from './image';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 bg-gray-900/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="relative mb-16 text-center">
          <h3 className="text-4xl font-bold text-gradient">About Me</h3>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Container */}
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:opacity-75 transition-opacity image-glow"></div>
            
            {/* Image Frame
            <div className="gradient-border">
              <div className="relative bg-gray-900 rounded-2xl p-2">
                <picture className="block relative rounded-xl overflow-hidden">
                  <img 
                    src={img}
                    alt="Mary Powsteena - Full Stack Developer"
                    className="w-full h-full object-cover rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </picture>
              </div>
            </div> */}
            <ImageFrame />

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
          </div>

          {/* Content Container */}
          <div className="relative space-y-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-3xl opacity-50"></div>
            
            <div className="relative space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Highly motivated second-year Bachelor of Information Technology student with a passion for web development
                and project management. Adept at teamwork and enjoy exploring new technologies.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-indigo-400 mb-1">Experience</h4>
                  <p className="text-gray-400">1+ Year Coding</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold text-purple-400 mb-1">Projects</h4>
                  <p className="text-gray-400">3+ Ongoing</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  View My Work
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;