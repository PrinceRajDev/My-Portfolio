import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps { isDarkMode: boolean; setIsDarkMode: (value: boolean) => void; isScrolled: boolean; scrollToSection: (sectionId: string) => void; isRecruiterMode: boolean; toggleRecruiterMode: () => void; activeSection: string; }
const navItems = [{ name: 'Work', id: 'projects' }, { name: 'Profile', id: 'about' }, { name: 'Chronology', id: 'education' }, { name: 'Contact', id: 'contact' }];

const Navbar = ({ isDarkMode, setIsDarkMode, isScrolled, scrollToSection, isRecruiterMode, toggleRecruiterMode, activeSection }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const go = (id: string) => { scrollToSection(id); setIsMobileMenuOpen(false); };
  const navClass = isScrolled ? 'border-[#171717]/15 bg-[#f5f2ea]/95 dark:border-white/15 dark:bg-[#17191f]/95' : 'border-transparent bg-transparent';
  return <nav aria-label="Primary navigation" className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${navClass}`}>
    <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10"><div className="flex h-[4.5rem] items-center justify-between">
      <button onClick={() => go('home')} className="text-left font-display text-2xl leading-none tracking-[-0.05em]">Prince Raj<span className="text-[#3155e7]">.</span></button>
      <div className="hidden items-center gap-6 md:flex">{navItems.map((item) => <button key={item.id} onClick={() => go(item.id)} aria-current={activeSection === item.id ? 'page' : undefined} className={`font-mono text-[10px] uppercase tracking-[0.13em] transition hover:text-[#3155e7] ${activeSection === item.id ? 'text-[#3155e7]' : 'text-[#171717]/65 dark:text-white/65'}`}>{item.name}</button>)}</div>
      <div className="flex items-center gap-3">
        <button onClick={toggleRecruiterMode} aria-pressed={isRecruiterMode} className={`hidden border-b text-[11px] font-bold uppercase tracking-[0.1em] transition md:block ${isRecruiterMode ? 'border-[#3155e7] text-[#3155e7]' : 'border-transparent hover:border-[#171717] dark:hover:border-white'}`}>Recruiter view</button>
        <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle colour theme" aria-pressed={isDarkMode} className="grid h-9 w-9 place-items-center border border-[#171717]/15 transition hover:border-[#3155e7] hover:text-[#3155e7] dark:border-white/15">{isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation menu" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" className="grid h-9 w-9 place-items-center border border-[#171717]/15 md:hidden dark:border-white/15">{isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
      </div>
    </div>{isMobileMenuOpen && <div id="mobile-navigation" className="border-t border-[#171717]/15 py-4 dark:border-white/15"><div className="grid gap-1">{navItems.map((item) => <button key={item.id} onClick={() => go(item.id)} className="py-3 text-left font-display text-3xl tracking-[-0.04em] hover:text-[#3155e7]">{item.name}</button>)}<button onClick={toggleRecruiterMode} className="mt-2 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-[#3155e7]">Toggle recruiter view</button></div></div>}</div>
  </nav>;
};
export default Navbar;
