
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-gray-300 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
            <span>by Arshdeep Singh Virdi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;