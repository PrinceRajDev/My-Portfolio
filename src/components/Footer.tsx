import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
  className?: string; // Optional custom class for additional styling
  showYear?: boolean; // Optionally show the year
  additionalText?: string; // Optional additional text
}

const Footer: React.FC<FooterProps> = ({
  isDarkMode,
  className = '',
  showYear = true,
  additionalText = '',
}) => {
  return (
    <footer
      className={`relative ${
        isDarkMode ? 'bg-black/30 text-gray-400' : 'bg-white/30 text-gray-600'
      } py-12 px-4 ${className}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p>
          {showYear && `© ${new Date().getFullYear()} `}
          Prince Raj. {additionalText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;