import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certificates', id: 'certifications' },
  { name: 'Journey', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = ({ isDarkMode, setIsDarkMode, isScrolled, scrollToSection }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              aria-label="Toggle color theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mb-3 grid gap-1 rounded-xl border border-slate-200 bg-white/95 p-2 shadow-lg shadow-slate-950/10 backdrop-blur md:hidden dark:border-white/10 dark:bg-slate-950/95">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
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
