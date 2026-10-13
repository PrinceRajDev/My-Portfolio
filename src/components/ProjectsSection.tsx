import { ArrowUpRight, Code2, Globe } from 'lucide-react';
import type { Project } from '../App';

interface ProjectsSectionProps {
  projects: Project[];
  isRecruiterMode: boolean;
}

const ProjectsSection = ({ projects, isRecruiterMode }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected work from my CV</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-300">
            These projects show my range across MERN architecture, authentication, AI integration,
            marketplaces, and responsive user interfaces.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.07] ${
                isRecruiterMode && index < 2 ? 'ring-4 ring-amber-300/35' : ''
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <div className={`absolute left-5 top-5 h-2 w-24 rounded-full bg-gradient-to-r ${project.accent}`} />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-400">{project.date}</p>
                    <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                    <p className="mt-1 text-cyan-200">{project.subtitle}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-slate-500 transition group-hover:text-cyan-300" />
                </div>

                <p className="mt-5 leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-200 hover:text-white"
                      >
                        <Globe className="h-4 w-4" />
                        Live demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-200 hover:text-white"
                      >
                        <Code2 className="h-4 w-4" />
                        Source code
                      </a>
                    )}
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

export default ProjectsSection;
