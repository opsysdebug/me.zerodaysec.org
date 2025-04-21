import React, { useEffect, useRef } from 'react';
import { Shield, Lock, FileCode, Hash } from 'lucide-react';
import TypewriterComponent from '../utils/Typewriter';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      container.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h4 className="text-cyan-500 font-mono mb-2 text-lg tracking-wider">CYBERSECURITY EXPERT</h4>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Andri
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 h-12">
              <TypewriterComponent 
                texts={[
                  "Penetration Tester", 
                  "Reverse Engineer", 
                  "Cybersecurity Intelligence", 
                  "Digital Forensics Expert"
                ]} 
              />
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Specialized in securing digital infrastructures through advanced penetration testing, 
              threat intelligence analysis, and custom security solutions since 2012.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md shadow hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a 
                href="#expertise" 
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-center"
              >
                Explore Skills
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div 
              ref={containerRef}
              className="relative w-72 h-72 md:w-96 md:h-96 transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute top-0 left-0 bg-cyan-500/80 p-6 rounded-2xl shadow-lg transform -translate-x-8 -translate-y-8 rotate-6">
                <Shield size={40} className="text-white" />
              </div>
              <div className="absolute top-1/2 right-0 bg-blue-600/80 p-6 rounded-2xl shadow-lg transform translate-x-4 -translate-y-1/2 -rotate-6">
                <Lock size={40} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-1/2 bg-indigo-500/80 p-6 rounded-2xl shadow-lg transform -translate-x-1/2 translate-y-6 rotate-12">
                <FileCode size={40} className="text-white" />
              </div>
              <div className="absolute top-1/4 left-1/4 bg-purple-500/80 p-6 rounded-2xl shadow-lg">
                <Hash size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;