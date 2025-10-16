import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../mock';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = `Hello, I'm ${portfolioData.name}`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-30"></div>
      
      {/* Floating Code Blocks */}
      <div className="absolute top-20 left-10 text-emerald-400/20 font-mono text-sm animate-pulse">
        {`{ code: 'clean' }`}
      </div>
      <div className="absolute bottom-32 right-16 text-blue-400/20 font-mono text-sm animate-pulse" style={{ animationDelay: '1s' }}>
        {`function build() {}`}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-mono mb-4">
            {portfolioData.currentFocus ? `Current Focus: ${portfolioData.currentFocus}` : 'Available for opportunities'}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
          {displayText}
          <span className="inline-block w-1 h-12 md:h-16 bg-emerald-400 ml-1 animate-pulse"></span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-4">
          {portfolioData.role}
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {portfolioData.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-emerald-400 text-slate-900 rounded-lg font-mono font-semibold hover:bg-emerald-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-400/50"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 rounded-lg font-mono font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <ArrowDown className="text-emerald-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;