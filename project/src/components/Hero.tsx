import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tighter">
            <span className="block">Hello, I'm</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
              Jayanto Mahato
            </span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl text-slate-300 leading-relaxed">
            A passionate Computer Science Engineering student and full-stack developer creating impactful digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium shadow-lg shadow-blue-800/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white/20 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-white/70" />
      </a>
    </section>
  );
};

export default Hero;