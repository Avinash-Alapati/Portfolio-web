import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="text-gray-400 font-mono text-sm flex items-center gap-2 justify-center">
              Built with <Heart className="text-red-500 fill-red-500" size={16} /> by {portfolioData.name}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500 text-xs font-mono">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-gray-500 text-xs font-mono">Status: Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;