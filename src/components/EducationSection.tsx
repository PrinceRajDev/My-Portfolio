import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  type: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  ongoing: boolean;
  icon: any;
}

interface EducationSectionProps {
  timeline: TimelineItem[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ timeline }) => {
  return (
    <section id="education" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Experience & Education
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-2 md:-translate-x-3 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900"></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-gray-800/50 rounded-lg p-6 transform hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-purple-400" />
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-purple-400 mb-2">{item.organization}</p>
                    <p className="text-gray-400 mb-3">{item.period}</p>
                    <p className="text-gray-300">{item.description}</p>
                    {item.ongoing && (
                      <div className="mt-4">
                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                        </div>
                        <p className="text-sm text-purple-400 mt-1">In Progress</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;