import type { TimelineItem } from '../App';

interface EducationSectionProps {
  timeline: TimelineItem[];
}

const EducationSection = ({ timeline }: EducationSectionProps) => {
  return (
    <section id="education" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
            Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Experience, training, and education
          </h2>
        </div>

        <div className="relative space-y-5 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200 dark:before:bg-white/10">
          {timeline.map((item) => (
            <article key={`${item.title}-${item.period}`} className="relative pl-16">
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-cyan-700 shadow-sm dark:border-white/10 dark:bg-slate-950 dark:text-cyan-300">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-1 font-medium text-cyan-700 dark:text-cyan-300">{item.organization}</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.period}</p>
                </div>
                <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{item.description}</p>
                {item.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-white/10 dark:text-slate-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
