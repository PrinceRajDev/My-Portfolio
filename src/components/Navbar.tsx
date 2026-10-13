import { Briefcase, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  activeSection: string;
}

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certificates', id: 'certifications' },
  { name: 'Journey', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  isScrolled,
  scrollToSection,
  isRecruiterMode,
  toggleRecruiterMode,
  activeSection,
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? 'border-slate-200 bg-stone-50/90 shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#08111f]/90'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white dark:bg-cyan-300 dark:text-slate-950">
              PR
            </span>
            <span className="hidden text-sm font-semibold text-slate-800 sm:block dark:text-slate-100">
              Prince Raj
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${
                  activeSection === item.id
                    ? 'bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleRecruiterMode}
              className={`hidden items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition md:inline-flex ${
                isRecruiterMode
                  ? 'border-cyan-400 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200'
              }`}
              aria-pressed={isRecruiterMode}
              aria-label="Toggle recruiter mode"
            >
              <Briefcase className="h-4 w-4" />
              Recruiter Mode
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              aria-label="Toggle color theme"
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="mb-3 grid gap-1 rounded-xl border border-slate-200 bg-white/95 p-2 shadow-lg shadow-slate-950/10 backdrop-blur md:hidden dark:border-white/10 dark:bg-slate-950/95">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={toggleRecruiterMode}
              className={`mt-1 flex items-center gap-2 rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${
                isRecruiterMode
                  ? 'bg-cyan-300 text-slate-950'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'
              }`}
              aria-pressed={isRecruiterMode}
            >
              <Briefcase className="h-4 w-4" />
              Recruiter Mode
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
