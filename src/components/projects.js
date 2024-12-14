import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "wayX - Ridesharing",
      description: "Full-stack web application with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Powsteena/wayX",
      liveLink: "https://wayx.vercel.app/"
    },
    {
      title: "E-Commerce website",
      description: "Productivity tool with project tracking features",
      technologies: ["React", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Getting Users",
      description: "Getting user details using the API",
      technologies: ["JavaScript", "API Integration", "Responsive Design"],
      githubLink: "https://github.com/Powsteena/employeee",
      liveLink: " https://powsteena.github.io/employeee/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">My Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 rounded-xl p-6 transform hover:scale-105 transition-transform"
            >
              <h4 className="text-xl font-semibold text-indigo-400 mb-4">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-indigo-500/10 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600"
                >
                  <Github />
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;