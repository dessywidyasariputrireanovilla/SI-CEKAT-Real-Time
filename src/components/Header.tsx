import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Patient Status', path: '/patient-status' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Alerts', path: '/alerts' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,96,103,0.08)] h-20 flex justify-between items-center px-8">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-black text-teal-900 dark:text-teal-50 italic font-headline tracking-tight">
          SI-CEKAT+
        </span>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium font-headline tracking-tight transition-colors ${
                  isActive
                    ? 'text-teal-700 dark:text-teal-300 font-bold border-b-2 border-teal-600'
                    : 'text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-200'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-teal-800 dark:text-teal-400 font-headline tracking-tight font-medium">
          Patient ID: #88291
        </span>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-slate-500 hover:text-teal-600 transition-colors cursor-pointer">
            notifications
          </span>
          <span className="material-symbols-outlined text-slate-500 hover:text-teal-600 transition-colors cursor-pointer">
            help
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-high">
            <img
              alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3aF9H4zV4-EhRsRRZunD44WTtmCMLA8Rm68FCLmyXUCVJiAL_dPCG7IiAXQUSjQh_vGjyX4Y9WvnlPmId-olyL9Oq4KrX3I-ajabEFU1871bizt-yCLTMcL4i4S-5QUegdzjG5uZZjx-isE8BM4Y_c0HStPChhPG4LG1kuyq5qtuPBNBpq9U5gBE0BVAm8nDy9f_SSYHwt1v4Mh5xAo4KasEG2-08W99DzY8TkcrieYI8UNTS9rIj-9snk4qeiZWFTD1EVCaCi4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
