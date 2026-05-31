const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-stone-50 px-4 py-8 text-slate-600 dark:border-white/10 dark:bg-[#08111f] dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm sm:flex-row">
        <p>Copyright {new Date().getFullYear()} Prince Raj.</p>
        <p>Built with React, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
