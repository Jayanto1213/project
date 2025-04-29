import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, duration, description, technologies }) => {
  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <span className="mt-2 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">{duration}</span>
        </div>
        
        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-6 flex gap-4">
          <a 
            href="#" 
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
          <a 
            href="#" 
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Woofey – Online Food Delivery Website",
      duration: "September 2024 - November 2024",
      description: [
        "Developed an online food delivery platform for ordering, tracking, and payments.",
        "Integrated bill payment features using Razor pay.",
        "Built the frontend using React, Tailwind CSS, and JavaScript.",
        "Designed a backend with Node.js and MongoDB for database management.",
        "Created RESTful APIs for seamless platform-database interaction."
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "MongoDB", "PHP", "MySQL", "Node.js"]
    },
    {
      title: "Vehicle Parking Management System",
      duration: "October 2024 - December 2024",
      description: [
        "Designed a system for managing vehicle parking, reducing manual errors by 90%.",
        "Designed a user-friendly interface for recording vehicle details, tracking parking duration.",
        "Implemented PHP and MySQL for efficient data handling, handling up to 500 transactions daily."
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;