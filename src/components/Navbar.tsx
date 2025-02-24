import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode, isScrolled, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-lg shadow-lg`
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text hover:glow-effect transition-all"
          >
            PR
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Me', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Education', id: 'education' },
              { name: 'Contact Me', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link-underline py-2 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-purple-400'
                    : 'text-gray-600 hover:text-purple-600'
                } transition-colors hover:glow-effect`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Me', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Education', id: 'education' },
              { name: 'Contact Me', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`block w-full text-left py-2 px-4 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-purple-400'
                    : 'text-gray-600 hover:text-purple-600'
                } transition-colors hover:bg-gray-100/10`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;