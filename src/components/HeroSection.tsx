import React from 'react';
import { FileDown, Mail, Github, Linkedin, ChevronDown, Volume2, VolumeX, ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  text: string;
  isComplete: boolean;
  toggleSound: () => void;
  isSoundEnabled: boolean;
  currentGradient: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ text, isComplete, toggleSound, isSoundEnabled, currentGradient }) => {
  return (
    <div 
      id="home" 
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden transition-colors duration-1000 bg-gradient-to-br ${currentGradient}`}
    >
      {/* Hero Section Content */}
      <div className="absolute top-24 left-0 right-0 flex justify-center">
        <a 
          href="#projects"
          className="group bg-black/20 backdrop-blur-lg rounded-full px-6 py-2 flex items-center gap-2 hover:bg-black/30 transition-all transform hover:scale-105"
        >
          <span className="text-sm font-medium">Latest Project: Food Delivery App</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <button
        onClick={toggleSound}
        className="absolute top-24 right-8 p-3 bg-black/20 backdrop-blur-lg rounded-full hover:bg-black/30 transition-all"
        aria-label={isSoundEnabled ? 'Disable sound' : 'Enable sound'}
      >
        {isSoundEnabled ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/20">
              <img
                src="/profile.jpg"
                alt="Prince Raj"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent"></div>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Hi, I'm Prince Raj
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">A Full-Stack Web Developer</p>
            <div className="h-8">
              <p className="text-lg text-purple-400">
                {text}
                {!isComplete && <span className="animate-pulse">|</span>}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="group relative px-6 py-3 bg-purple-600 rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              <FileDown className="w-5 h-5" />
              Download Resume
            </span>
          </button>
          <button className="group relative px-6 py-3 bg-transparent border-2 border-purple-500 rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </span>
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/vickyyadav12t" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/prince-raj2003/" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:praj01012003@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;