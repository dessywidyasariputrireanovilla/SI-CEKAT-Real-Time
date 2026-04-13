export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-body text-sm text-teal-900 dark:text-teal-100 font-semibold opacity-80 hover:opacity-100 transition-opacity">
          SI-CEKAT+ Maternal Care Monitoring
        </span>
        <span className="font-body text-xs text-slate-500 dark:text-slate-400">
          © 2024 SI-CEKAT+ Maternal Care Monitoring. Emergency Contact: +62 21 555 0123
        </span>
      </div>
      <div className="flex gap-8">
        <a
          href="#"
          className="font-body text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
        >
          Hospital Policy
        </a>
        <a
          href="#"
          className="font-body text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
        >
          Privacy
        </a>
        <a
          href="#"
          className="font-body text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
        >
          Support
        </a>
      </div>
    </footer>
  );
}
