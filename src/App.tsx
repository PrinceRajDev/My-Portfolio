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
    title: 'Food Delivery',
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
    title: 'QA Tester Intern',
    organization: 'Zealthix Technologies',
    period: 'September 2026 - Present',
    description:
      'Testing Java-based backend modules and REST APIs through manual, functional, regression, and Postman-based API testing.',
    highlights: ['Test case design', 'Bug tracking', 'Postman', 'SQL validation'],
    icon: Briefcase,
  },
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
      'CGPA 7.61 with coursework in Object Oriented Programming, Database Management Systems, and Web Development.',
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
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-28% 0px -58%', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleRecruiterMode = () => {
    setIsRecruiterMode((active) => {
      const nextValue = !active;
      if (!active) {
        window.setTimeout(() => scrollToSection('home'), 0);
      }
      return nextValue;
    });
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
    <div className="min-h-screen overflow-x-hidden bg-[#f5f2ea] text-[#171717] transition-colors duration-300 dark:bg-[#17191f] dark:text-[#f5f2ea]">
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
        isRecruiterMode={isRecruiterMode}
        toggleRecruiterMode={toggleRecruiterMode}
        activeSection={activeSection}
      />

      <main>
        <HeroSection scrollToSection={scrollToSection} isRecruiterMode={isRecruiterMode} />
        <AboutSection skillCategories={skillCategories} isRecruiterMode={isRecruiterMode} />
        <ProjectsSection projects={projects} isRecruiterMode={isRecruiterMode} />
        <CertificationsSection certifications={certifications} />
        <EducationSection timeline={timeline} />
        <ContactSection formStatus={formStatus} handleSubmit={handleSubmit} isRecruiterMode={isRecruiterMode} />
      </main>

      <Footer />

      {isRecruiterMode && (
        <aside className="fixed bottom-5 left-4 right-4 z-40 border border-[#171717]/15 bg-[#171717] p-4 text-[#f5f2ea] shadow-[8px_8px_0_0_rgba(49,85,231,0.9)] sm:left-auto sm:right-6 sm:w-80 dark:border-white/15 dark:bg-[#f5f2ea] dark:text-[#171717]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8aa0ff] dark:text-[#3155e7]">Recruiter Mode</p>
              <p className="mt-1 text-xs leading-5 text-white/70 dark:text-[#171717]/70">
                Fast path to the most relevant hiring signals.
              </p>
            </div>
            <button
              onClick={() => setIsRecruiterMode(false)}
              className="px-2 py-1 text-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white dark:text-[#171717]/70 dark:hover:bg-black/5 dark:hover:text-[#171717]"
            >
              Close
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {[
              { label: 'Resume', id: 'home' },
              { label: 'Skills', id: 'about' },
              { label: 'Top projects', id: 'projects' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="border border-white/15 px-3 py-2 text-left font-semibold transition hover:border-[#3155e7] hover:bg-[#3155e7] hover:text-white dark:border-[#171717]/15"
              >
                {item.label}
              </button>
            ))}
          </div>
        </aside>
      )}

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center border border-[#171717]/20 bg-[#f5f2ea] text-[#171717] shadow-[4px_4px_0_0_#3155e7] transition hover:-translate-y-1 dark:border-white/20 dark:bg-[#17191f] dark:text-[#f5f2ea]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;
