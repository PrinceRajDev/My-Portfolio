import React, { useEffect, useState, useRef } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Import the Navbar component

import { ArrowUp, Sun, Moon, Terminal, Coffee, Brain, Code2, Globe, Database, Server, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoundEnabled, setSoundEnabled] = useState(false);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [currentGradient, setCurrentGradient] = useState(0);
  const [funFactIndex, setFunFactIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const fullText = 'Web Developer | MERN Stack Enthusiast | React Expert | Problem Solver';

  const gradients = [
    'from-purple-600 via-pink-600 to-blue-600',
    'from-blue-600 via-green-600 to-purple-600',
    'from-pink-600 via-yellow-600 to-purple-600',
    'from-green-600 via-blue-600 to-pink-600'
  ];

  const funFacts = [
    "I've written over 10,000 lines of code! 🚀",
    "I debug in my dreams! 💭",
    "Coffee is my fuel! ☕",
    "I love solving algorithmic puzzles! 🧩"
  ];

  const programmingSkills = [
    {
      name: 'Python',
      level: 85,
      icon: Terminal,
      description: 'Used for Data Analysis, AI/ML, and Automation',
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Java',
      level: 80,
      icon: Coffee,
      description: 'Enterprise Applications and Android Development',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'C++',
      level: 75,
      icon: Brain,
      description: 'System Programming and Competitive Coding',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'C',
      level: 70,
      icon: Terminal,
      description: 'Low-level Programming and Embedded Systems',
      color: 'from-gray-500 to-blue-500'
    }
  ];

  const webSkills = [
    {
      name: 'HTML/CSS',
      level: 90,
      icon: Code2,
      description: 'Modern, Responsive Web Design',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'JavaScript',
      level: 85,
      icon: Terminal,
      description: 'ES6+, TypeScript, Modern JS Features',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      name: 'React.js',
      level: 88,
      icon: Globe,
      description: 'Modern React with Hooks, Context, Redux',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Node.js',
      level: 82,
      icon: Terminal,
      description: 'Server-side Development, APIs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'MongoDB',
      level: 80,
      icon: Database,
      description: 'Database Design, Aggregation, Indexing',
      color: 'from-green-600 to-teal-500'
    },
    {
      name: 'Express.js',
      level: 78,
      icon: Server,
      description: 'RESTful APIs, Middleware, Authentication',
      color: 'from-gray-500 to-slate-600'
    }
  ];

  const certifications = [
    {
      title: 'Cloud Computing Certification',
      issuer: 'NPTEL',
      date: '2024',
      description: 'Elite Certificate in Cloud Computing.',
      verifyUrl: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS118S95690064804211260',
      previewImage: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop'
    },
    {
      title: 'MERN Stack Full-Stack Development',
      issuer: 'Cipher School',
      date: '2024',
      description: 'Certification in MERN Stack Development.',
      verifyUrl: 'https://www.cipherschools.com/certificate/preview?id=66a7aee32963b5cdb3a52da3',
      previewImage: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop'
    },
  ];

  const projects = [
    {
      title: 'Food Delivery App',
      description: 'A full-stack food delivery application with real-time order tracking and payment integration.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Blogging Website',
      description: 'A modern blogging platform with markdown support and user authentication.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'OpenWeather API'],
      liveUrl: 'https://vickyyadav12t.github.io/PRODIGY_WD_05/',
      githubUrl: 'https://github.com/vickyyadav12t/PRODIGY_WD_05'
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'Interactive Tic-Tac-Toe game with AI opponent and multiplayer support.',
      image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=400&fit=crop',
      tech: ['React', 'Socket.io', 'Node.js'],
      liveUrl: 'https://tic-game-gules.vercel.app/',
      githubUrl: 'https://github.com/vickyyadav12t/PRODIGY_WD_03'
    }
  ];

  const timeline = [
    {
      type: 'experience',
      title: 'Web Development Intern',
      organization: 'Prodigy Infotech',
      period: 'Jan 2025 - Present',
      description: 'Working on full-stack web development projects using MERN stack.',
      ongoing: true,
      icon: Briefcase
    },
    {
      type: 'education',
      title: 'Full-Stack MERN Training',
      organization: 'Cipher School',
      period: 'May 2024 - July 2024',
      description: 'Intensive training in MERN Stack development and modern web technologies.',
      ongoing: false,
      icon: GraduationCap
    },
    {
      type: 'education',
      title: 'B.Tech Computer Science',
      organization: 'Lovely Professional University',
      period: '2022 - Present',
      description: 'Pursuing Bachelor\'s degree with focus on software development and computer science fundamentals.',
      ongoing: true,
      icon: GraduationCap
    },
    {
      type: 'education',
      title: 'Intermediate (12th Grade)',
      organization: 'Ram Krishna College, Bihar',
      period: '2019 - 2021',
      description: 'Scored 80% in 12th grade with a focus on Science and Mathematics.',
      ongoing: false,
      icon: GraduationCap
    },
    {
      type: 'education',
      title: 'Matriculation (10th Grade)',
      organization: 'Harrow English School, Bihar',
      period: '2018 - 2019',
      description: 'Scored 73.4% in 10th grade.',
      ongoing: false,
      icon: GraduationCap
    }
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://example.com/ambient.mp3');
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFunFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(intervalId);
      }
    }, 50);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isSoundEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setSoundEnabled(!isSoundEnabled);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${
      isDarkMode 
        ? 'from-gray-900 via-black to-gray-900 text-white' 
        : 'from-gray-100 via-white to-gray-100 text-gray-900'
    } transition-colors duration-300`}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <HeroSection
        text={text}
        isComplete={isComplete}
        toggleSound={toggleSound}
        isSoundEnabled={isSoundEnabled}
        currentGradient={gradients[currentGradient]}
      />

      <AboutSection
        funFacts={funFacts}
        funFactIndex={funFactIndex}
        showMoreAbout={showMoreAbout}
        setShowMoreAbout={setShowMoreAbout}
        programmingSkills={programmingSkills}
        webSkills={webSkills}
      />

      <CertificationsSection certifications={certifications} />

      <ProjectsSection projects={projects} />

      <EducationSection timeline={timeline} />

      <ContactSection formStatus={formStatus} handleSubmit={handleSubmit} />

      <Footer isDarkMode={isDarkMode} />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;