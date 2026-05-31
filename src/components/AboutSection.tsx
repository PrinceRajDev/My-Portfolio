import type { Skill } from '../App';

interface AboutSectionProps {
  skillCategories: Record<string, Skill[]>;
}

const stats = [
  { value: '5+', label: 'Internship projects' },
  { value: '7.48', label: 'Current CGPA' },
  { value: 'MERN', label: 'Core stack' },
];

const AboutSection = ({ skillCategories }: AboutSectionProps) => {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
              Full-stack builder with a practical product mindset.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                I am pursuing B.Tech Computer Science and Engineering at Lovely Professional University,
                with a focus on object-oriented programming, data structures, and MERN full-stack development.
              </p>
              <p>
                My recent work includes AI career guidance, rural e-commerce, food delivery, and internship
                projects where I handled responsive interfaces, API integration, authentication, and backend logic.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-2xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div
                key={category}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{category}</h3>
                <div className="mt-4 space-y-3">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="flex gap-3">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                        <skill.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{skill.name}</p>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
