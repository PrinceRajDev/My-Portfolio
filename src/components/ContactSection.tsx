import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import type React from 'react';

interface ContactSectionProps {
  formStatus: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ContactSection = ({ formStatus, handleSubmit }: ContactSectionProps) => {
  return (
    <section id="contact" className="bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let us build something useful.</h2>
          <p className="mt-5 leading-7 text-slate-300">
            I am available for internships, entry-level full-stack roles, and project collaborations.
            The fastest way to reach me is email or phone.
          </p>

          <div className="mt-8 space-y-4 text-slate-200">
            <a className="flex items-center gap-3 hover:text-cyan-200" href="mailto:princeroy6371@gmail.com">
              <Mail className="h-5 w-5 text-cyan-300" />
              princeroy6371@gmail.com
            </a>
            <a className="flex items-center gap-3 hover:text-cyan-200" href="tel:+916203135782">
              <Phone className="h-5 w-5 text-cyan-300" />
              +91 6203135782
            </a>
            <a
              className="flex items-center gap-3 hover:text-cyan-200"
              href="https://github.com/PrinceRajDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-cyan-300" />
              github.com/PrinceRajDev
            </a>
            <a
              className="flex items-center gap-3 hover:text-cyan-200"
              href="https://linkedin.com/in/prince-raj2003/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-cyan-300" />
              linkedin.com/in/prince-raj2003
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Name</span>
              <input
                required
                name="name"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-300">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              placeholder="Tell me about the role, project, or idea."
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            <Send className="h-5 w-5" />
            Send Message
          </button>
          {formStatus === 'success' && (
            <p className="mt-4 rounded-lg bg-emerald-400/10 px-4 py-3 text-center text-sm font-medium text-emerald-200">
              Your email app is opening with the message ready to send.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
