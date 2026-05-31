import type { Certification } from '../App';

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <section id="certifications" className="bg-white px-4 py-20 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
              Certifications
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
              Proof of continuous learning
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
            Courses and certifications from NPTEL, Coursera, and Cipher School across cloud,
            MERN, PHP, Node.js, and AI-assisted coding.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={`${certification.title}-${certification.date}`}
              className="rounded-xl border border-slate-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-cyan-500 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-300/10 dark:text-amber-300">
                <certification.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{certification.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{certification.issuer}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-700 dark:text-cyan-300">{certification.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
