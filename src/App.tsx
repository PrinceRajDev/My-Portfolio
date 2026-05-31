import { useEffect, useMemo, useState } from 'react';
import type React from 'react';
import {
  ArrowUp,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  GraduationCap,
  Layout,
  Server,
  Terminal,
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  category: 'Language' | 'Framework' | 'Database' | 'Tool';
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  date: string;
  accent: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type TimelineItem = {
  type: 'experience' | 'training' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
  icon: React.ComponentType<{ className?: string }>;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
};

const skills: Skill[] = [
  {
    name: 'C++',
    icon: Terminal,
    description: 'Data structures, problem solving, and core programming fundamentals.',
    category: 'Language',
  },
  {
    name: 'Java',
    icon: Code2,
    description: 'Object-oriented programming and application logic.',
    category: 'Language',
  },
  {
    name: 'JavaScript',
    icon: Layout,
    description: 'Interactive UI, browser APIs, and full-stack development.',
    category: 'Language',
  },
  {
    name: 'React.js',
    icon: Layout,
    description: 'Responsive interfaces, reusable components, and client-side flows.',
    category: 'Framework',
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'Server-side JavaScript, REST APIs, and backend integration.',
    category: 'Framework',
  },
  {
    name: 'Express.js',
    icon: Server,
    description: 'Authentication, routes, middleware, and API architecture.',
    category: 'Framework',
  },
  {
    name: 'MongoDB',
    icon: Database,
    description: 'Schema design, document data models, and MERN persistence.',
    category: 'Database',
  },
  {
    name: 'MySQL',
    icon: Database,
    description: 'Relational data modeling and query fundamentals.',
    category: 'Database',
  },
  {
    name: 'GitHub',
    icon: Code2,
    description: 'Version control, collaboration, and project delivery.',
    category: 'Tool',
  },
  {
    name: 'Bootstrap',
    icon: Layout,
    description: 'Fast responsive layouts and production-friendly UI patterns.',
    category: 'Framework',
  },
];

const projects: Project[] = [
  {
    title: 'AI Enhanced Career Guidance System',
    subtitle: 'AI-powered career guidance platform',
    description:
      'Built a MERN platform with JWT authentication and Groq Llama 3.3 integration for personalized career recommendations.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Groq AI', 'JWT'],
    date: 'Feb 2026',
    accent: 'from-cyan-400 to-emerald-400',
    image: '/career-guide-ai.webp',
    liveUrl: 'https://ai-enhanced-career-gidance.vercel.app/',
    githubUrl: 'https://github.com/PrinceRajDev/Ai-enhanced-career-gidance',
  },
  {
    title: 'GaonBazaar',
    subtitle: 'Rural e-commerce platform',
    description:
      'Created a marketplace connecting farmers and local vendors with buyers through secure auth, product listings, and responsive interfaces.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    date: 'Jan 2026',
    accent: 'from-lime-400 to-amber-300',
    image: '/gaon-bazaar.webp',
    liveUrl: 'https://gaon-bazaar.vercel.app/',
    githubUrl: 'https://github.com/PrinceRajDev/GaonBazaar',
  },
  {
    title: 'Food del',
    subtitle: 'Full-stack food delivery website',
    description:
      'Developed a mobile-first food delivery platform with order tracking, real-time availability, secure authentication, and payment-ready flows.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    date: 'Sept 2024',
    accent: 'from-orange-400 to-rose-400',
    image: '/food-del-preview.svg',
    githubUrl: 'https://github.com/PrinceRajDev/food-del-website',
  },
  {
    title: 'Weather App',
    subtitle: 'Interactive forecast application',
    description:
      'Built a responsive weather experience focused on live forecast lookup, clear UI states, and simple user interaction.',
    tech: ['React', 'JavaScript', 'Weather API'],
    date: 'Internship project',
    accent: 'from-sky-400 to-indigo-400',
    image: '/weather-app-preview.svg',
    liveUrl: 'https://vickyyadav12t.github.io/PRODIGY_WD_05/',
    githubUrl: 'https://github.com/vickyyadav12t/PRODIGY_WD_05',
  },
];

const timeline: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Web Development Intern',
    organization: 'Prodigy Infotech',
    period: 'Jan 2025',
    description:
      'Developed five dynamic web applications using HTML, CSS, JavaScript, and React with a focus on responsive design and smooth user experience.',
    highlights: ['Responsive landing page', 'Stopwatch app', 'Portfolio', 'Tic Tac Toe', 'Weather app'],
    icon: Briefcase,
  },
  {
    type: 'training',
    title: 'Summer Training in Full Stack Development MERN',
    organization: 'Cipher School',
    period: 'July 2024',
    description:
      'Completed intensive MERN training and built an LMS with authentication, real-time updates, and a content editor.',
    highlights: ['RESTful API design', 'Backend integration', 'Scalable deployment', 'Performance optimization'],
    icon: BookOpen,
  },
  {
    type: 'education',
    title: 'B.Tech Computer Science and Engineering',
    organization: 'Lovely Professional University, Punjab',
    period: 'Since August 2022',
    description:
      'CGPA 7.48 with coursework in Object Oriented Programming, Data Structures, and MERN full-stack development.',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'Intermediate',
    organization: 'Ram Krishna College, Madhubani, Bihar',
    period: 'April 2019 - March 2021',
    description: 'Completed intermediate studies with 80% in Physics, Chemistry, and Mathematics.',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'Matriculation',
    organization: 'Harrow English School, Darbhanga, Bihar',
    period: 'April 2018 - March 2019',
    description: 'Completed matriculation with 73.4%.',
    icon: GraduationCap,
  },
];

const certifications: Certification[] = [
  { title: 'Cloud Computing', issuer: 'NPTEL Certification', date: 'Nov 2024', icon: Award },
  { title: 'Building Web Application in PHP', issuer: 'Coursera', date: 'Nov 2024', icon: Award },
  { title: 'Full Stack Development Using MERN Stack', issuer: 'Cipher School', date: 'July 2024', icon: Award },
  { title: 'Server-side JavaScript With Node.js', issuer: 'Coursera', date: 'May 2024', icon: Award },
  { title: 'Learn to Code With AI', issuer: 'Coursera', date: 'April 2024', icon: Award },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const skillCategories = useMemo(() => {
    return skills.reduce<Record<string, Skill[]>>((groups, skill) => {
      groups[skill.category] = [...(groups[skill.category] || []), skill];
      return groups;
    }, {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
      setShowScrollTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = encodeURIComponent(`Portfolio message from ${name || 'a visitor'}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, '', message].join('\n')
    );

    window.location.href = `mailto:princeroy6371@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus('success');
    window.setTimeout(() => setFormStatus(''), 3200);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-950 transition-colors duration-300 dark:bg-[#08111f] dark:text-slate-50">
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection skillCategories={skillCategories} />
        <ProjectsSection projects={projects} />
        <CertificationsSection certifications={certifications} />
        <EducationSection timeline={timeline} />
        <ContactSection formStatus={formStatus} handleSubmit={handleSubmit} />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:border-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;
