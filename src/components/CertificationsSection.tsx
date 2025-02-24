import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl: string;
  previewImage: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="relative py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Certifications
        </h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certification.previewImage}
                  alt={certification.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
  
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
                <p className="text-gray-400 mb-1">{certification.issuer}</p>
                <p className="text-sm text-purple-400 mb-3">{certification.date}</p>
                <p className="text-gray-300 mb-4">{certification.description}</p>
  
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;