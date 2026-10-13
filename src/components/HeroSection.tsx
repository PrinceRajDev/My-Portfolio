import { ArrowDownRight, FileDown, Github, Linkedin, MapPin } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  isRecruiterMode: boolean;
}

const HeroSection = ({ scrollToSection, isRecruiterMode }: HeroSectionProps) => (
  <section id="home" className="px-4 pb-14 pt-28 sm:px-6 sm:pt-36 lg:px-10 lg:pb-20">
    <div className="mx-auto grid max-w-[88rem] border-y border-[#171717]/15 pt-6 dark:border-white/15 lg:grid-cols-12">
      <div className="flex items-center justify-between border-b border-[#171717]/15 pb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#171717]/60 dark:border-white/15 dark:text-white/55 lg:col-span-12">
        <span>Portfolio / 2026</span><span>Bihar, India</span>
      </div>
      <div className="relative py-10 lg:col-span-8 lg:border-r lg:border-[#171717]/15 lg:py-16 dark:lg:border-white/15">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#3155e7]">Full stack developer</p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(4rem,10vw,9.8rem)] leading-[0.79] tracking-[-0.065em] text-[#171717] dark:text-[#f5f2ea]">Prince<br />Raj<span className="text-[#3155e7]">.</span></h1>
        <div className="mt-9 grid max-w-2xl gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="text-base leading-7 text-[#171717]/75 dark:text-white/70">I build practical web applications across the MERN stack, from responsive interfaces to API-connected products and AI-assisted tools.</p>
          <div className="flex gap-2 text-sm">
            <a aria-label="Prince Raj on GitHub" href="https://github.com/PrinceRajDev" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-[#171717]/20 transition hover:bg-[#3155e7] hover:text-white dark:border-white/20"><Github className="h-4 w-4" /></a>
            <a aria-label="Prince Raj on LinkedIn" href="https://linkedin.com/in/prince-raj2003/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-[#171717]/20 transition hover:bg-[#3155e7] hover:text-white dark:border-white/20"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
        <div className={`mt-10 flex flex-wrap gap-x-6 gap-y-4 ${isRecruiterMode ? 'outline outline-4 outline-[#3155e7]/30 outline-offset-8' : ''}`}>
          <button onClick={() => scrollToSection('projects')} className="group inline-flex items-center gap-3 border-b-2 border-[#171717] pb-2 text-sm font-bold uppercase tracking-[0.08em] transition hover:border-[#3155e7] hover:text-[#3155e7] dark:border-[#f5f2ea]">View selected work <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></button>
          <a href="/Princecv.pdf" download className="group inline-flex items-center gap-3 border-b-2 border-transparent pb-2 text-sm font-bold uppercase tracking-[0.08em] text-[#3155e7] transition hover:border-[#3155e7]">Download CV <FileDown className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="relative flex flex-col justify-between py-8 lg:col-span-4 lg:py-16 lg:pl-8">
        <div className="ml-auto w-full max-w-[21rem]"><div className="relative overflow-hidden bg-[#d9d4ca] p-3 dark:bg-[#282b33]"><span className="absolute left-3 top-3 z-10 bg-[#3155e7] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white">Open to work</span><img src="/profile.webp" alt="Prince Raj" className="aspect-[4/5] w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0" /></div><div className="mt-3 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-[#171717]/60 dark:text-white/55"><span>PR / 01</span><span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> Bihar</span></div></div>
        <p className="mt-12 max-w-xs border-l-2 border-[#3155e7] pl-4 text-sm leading-6 text-[#171717]/70 dark:text-white/65">B.Tech CSE student. Building with React, Node.js, Express, MongoDB, and a careful testing mindset.</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
