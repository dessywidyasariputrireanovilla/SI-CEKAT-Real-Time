export default function Dashboard() {
  return (
    <>
      <section className="relative min-h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQq6rZtEfWvUkK56YZkVrYWoN-LSWEAMLksb6kSjOJ6n9wdbTJnkOj2ZtyWPhvsD1TBbTNGfWIjckzFLjWu_LRjD5ITLV8iFsxuszYSqinVpaMQwivROjKhwoZtPZpiaKdU7FTTK4RIRG9bn807D-saS3H3eJM10GbTRuuV3V3rMKQD7qstCETLoZTx3A53ml1d02QqIyGJISA6UxfR25KWgm98_KcES4KBi2HYOAxZHVt55rxHNJPxnWHXcj5DslzPMTctHosRXE"
            alt="blurred bright modern hospital interior"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/95 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold uppercase tracking-widest mb-8 self-start">
              The Digital Sanctuary
            </div>
            <h1 className="text-6xl lg:text-7xl font-extrabold text-on-surface leading-tight tracking-tighter mb-8">
              Real-time peace <br />
              for <span className="text-primary italic">every heartbeat.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl mb-12">
              SI-CEKAT+ provides families with a steady, transparent window into the C-section journey. From surgery updates to recovery milestones, we stay vigilant so you can focus on the welcome.
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-lg">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-primary">24/7</span>
                <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                  Live Monitoring
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                  Data Transparency
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-md bg-surface-container-lowest rounded-[2rem] p-10 shadow-[0_12px_40px_rgba(0,96,103,0.08)] border border-outline-variant/10">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-on-surface mb-2 tracking-tight">Family Access</h2>
                <p className="text-on-surface-variant text-sm">Enter the patient ID provided by the hospital</p>
              </div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">
                    Patient Identifier
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                      badge
                    </span>
                    <input
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container focus:bg-surface-bright transition-all placeholder:text-outline/50"
                      placeholder="e.g. #88291"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-1">
                    Passcode
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                      lock
                    </span>
                    <input
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container focus:bg-surface-bright transition-all"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </div>
                <button
                  className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] flex justify-center items-center gap-2"
                  type="button"
                >
                  Access Portal
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-outline-variant/20 text-center">
                <p className="text-xs text-on-surface-variant">Having trouble accessing?</p>
                <a className="text-primary text-xs font-bold hover:underline mt-1 inline-block" href="#">
                  Contact Nurse Station
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-on-surface mb-6 tracking-tight">
                The Vital Pulse Dashboard
              </h2>
              <p className="text-lg text-on-surface-variant">
                Experience a new standard of care visibility. Our interface is designed to keep you informed without the
                overwhelming complexity of clinical monitors.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary">chevron_left</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary-fixed-dim/20">
              <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">vital_signs</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">Live Status</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Real-time updates on surgery progress, from "Anesthesia Prepared" to "In Recovery."
              </p>
              <div className="h-1.5 w-12 bg-primary rounded-full"></div>
            </div>
            <div className="group bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary-fixed-dim/20">
              <div className="w-14 h-14 bg-tertiary-container/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary text-3xl">notifications_active</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">Instant Alerts</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                Receive critical milestones directly on your device. Never miss the first moment of welcome.
              </p>
              <div className="h-1.5 w-12 bg-tertiary rounded-full"></div>
            </div>
            <div className="group bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-primary-fixed-dim/20">
              <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">Patient Timeline</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                A chronological digital scrapbook of medical milestones and recovery progress notes.
              </p>
              <div className="h-1.5 w-12 bg-primary-container rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 container mx-auto px-8">
        <div className="bg-primary overflow-hidden rounded-[3rem] relative">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxyJgObcg9WITxvwIy49RWDMhoXpjM0qegW0BmTaISKO8p7DPqaDaWXtdOtPkBnpFCzDwWPziWn2xRy7t4iIThR7wzRTdLMuR5zxL29Z06uDxw-wGqyPFkYhnZ0B0cUF9NqHlTMkAq5pI1u9vjyCU1OdktCfuSWW7Y-brV4eV_ZwrSDhAXDkY9t1GaAPLn3h_OigUbkim-ZJDGdgVyNvjCCqzyGwFYZiCg5FoWpE-G8A1_3gyOGTwLj4r-P6QHsQS5wsIv3ApfM9I"
              alt="macro close-up of soft blue fabric"
            />
          </div>
          <div className="relative z-10 px-12 py-20 flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="text-on-primary-container text-sm font-bold uppercase tracking-[0.2em] mb-6">
              Partners in Care
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight italic">
              Empowering families with surgical precision and human warmth.
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-container-low transition-colors shadow-xl">
                Request Hospital Setup
              </button>
              <button className="px-10 py-4 bg-primary-container text-white font-bold rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                Learn About Security
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
