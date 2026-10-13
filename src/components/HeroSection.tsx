import { ArrowDown, ExternalLink, FileDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  isRecruiterMode: boolean;
}

const highlights = ['MERN Stack', 'AI Integration', '5 Internship Projects', 'B.Tech CSE'];

const HeroSection = ({ scrollToSection, isRecruiterMode }: HeroSectionProps) => {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pt-24 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_32%),radial-gradient(circle_at_75%_20%,rgba(251,146,60,0.18),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_75%_20%,rgba(251,191,36,0.12),transparent_30%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 pb-14 sm:gap-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:pb-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200 sm:mb-6 sm:px-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="truncate">MERN Stack Developer open to opportunities</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            Prince Raj
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700 sm:mt-5 sm:text-xl dark:text-slate-300">
            Computer Science student and full-stack developer building practical MERN applications,
            AI-assisted products, and responsive interfaces that feel clear from the first click.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-lg border border-slate-200 bg-white/75 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 sm:px-4"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-wrap gap-3 rounded-xl transition ${
              isRecruiterMode ? 'ring-4 ring-cyan-300/40 ring-offset-4 ring-offset-stone-50 dark:ring-offset-[#08111f]' : ''
            }`}
          >
            <a
              href="/Princecv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              <FileDown className="h-5 w-5" />
              Download CV
            </a>
            <a
              href="/Princecv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              <ExternalLink className="h-5 w-5" />
              View CV
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              <ArrowDown className="h-5 w-5" />
              View Projects
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
            <a className="inline-flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-300" href="mailto:princeroy6371@gmail.com">
              <Mail className="h-4 w-4" />
              princeroy6371@gmail.com
            </a>
            <a className="inline-flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-300" href="tel:+916203135782">
              <Phone className="h-4 w-4" />
              +91 6203135782
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Bihar, India
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-sm lg:max-w-md">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-300/30 via-transparent to-amber-300/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 sm:p-4">
            <img
              src="/profile.webp"
              alt="Prince Raj"
              className="aspect-square w-full rounded-xl object-cover object-top sm:aspect-[4/5]"
            />
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <a
                href="https://github.com/PrinceRajDev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-3 font-semibold text-slate-800 transition hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/prince-raj2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-3 font-semibold text-slate-800 transition hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
