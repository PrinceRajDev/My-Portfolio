import React from 'react';
import { Code2, Github, Edit3, Brain, Minus, Plus } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number;
  color: string;
  description: string;
}

interface AboutSectionProps {
  funFacts: string[];
  funFactIndex: number;
  showMoreAbout: boolean;
  setShowMoreAbout: (value: boolean) => void;
  programmingSkills: Skill[];
  webSkills: Skill[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  funFacts,
  funFactIndex,
  showMoreAbout,
  setShowMoreAbout,
  programmingSkills,
  webSkills,
}) => {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-xl text-gray-300 italic mb-6">
              "Turning Ideas into Code, One Line at a Time"
            </p>
            <div className="space-y-4">
              <p className="text-gray-300">
                Currently pursuing B.Tech in Computer Science Engineering at Lovely Professional University,
                I'm passionate about creating scalable web applications that solve real-world problems.
              </p>
              <p className="text-gray-300">
                During my internship at Prodigy Infotech, I gained valuable experience in full-stack development,
                working with modern technologies and agile methodologies.
              </p>
              <p className="text-gray-300">
                I specialize in building robust web applications using the MERN stack and have a keen interest
                in creating intuitive user experiences.
              </p>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-6 mt-8">
              <div className="h-16 flex items-center justify-center">
                <p className="text-lg text-purple-400 text-center animate-fade-in">
                  {funFacts[funFactIndex]}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="w-full mt-4 px-6 py-3 bg-purple-500/10 rounded-lg flex items-center justify-between hover:bg-purple-500/20 transition-colors"
              aria-expanded={showMoreAbout}
            >
              <span>More About Me</span>
              {showMoreAbout ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </button>

            {showMoreAbout && (
              <div className="space-y-4 animate-fade-in">
                <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Hobbies & Interests
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { text: 'Competitive Programming', icon: Code2 },
                    { text: 'Open Source Contributing', icon: Github },
                    { text: 'Tech Blogging', icon: Edit3 },
                    { text: 'AI/ML Exploration', icon: Brain }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg"
                    >
                      <item.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Programming Skills
              </h3>
              <div className="space-y-6">
                {programmingSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg p-4 hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                        <skill.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{skill.name}</h4>
                          <span className="text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute left-0 right-0 -bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <div className="bg-gray-800 text-sm p-2 rounded-lg text-center shadow-lg">
                        {skill.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Web Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {webSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-lg p-4 hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                        <skill.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium">{skill.name}</h4>
                        <div className="h-1.5 w-24 bg-gray-700 rounded-full mt-1 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute left-0 right-0 -bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <div className="bg-gray-800 text-xs p-2 rounded-lg text-center shadow-lg">
                        {skill.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/Princecv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
          >
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;