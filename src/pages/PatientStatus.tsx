export default function PatientStatus() {
  return (
    <div className="px-4 md:px-12 max-w-7xl mx-auto pb-20">
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-on-surface-variant font-label font-medium uppercase tracking-widest text-xs mb-2">
              Real-time C-Section Monitoring
            </p>
            <h1 className="font-headline font-extrabold text-5xl text-on-surface tracking-tight">Post-Op Recovery</h1>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-lowest p-2 pr-6 rounded-full shadow-sm">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center pulse-glow">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
            <div>
              <span className="block text-xs font-label text-on-surface-variant">Current Status</span>
              <span className="text-xl font-headline font-bold text-secondary">Stable</span>
            </div>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          {/* Health Indicators */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_40px_rgba(0,96,103,0.04)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 vitals-gradient opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-headline font-bold text-2xl">Health Indicators</h2>
              <span className="text-sm font-label text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">
                Updated 1m ago
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-surface-container-high" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="100" strokeWidth="10"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-headline font-black">72</span>
                    <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">BPM</span>
                  </div>
                </div>
                <h3 className="font-headline font-bold text-lg">Heart Rate</h3>
                <p className="text-sm text-on-surface-variant">Calm & Regular</p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-surface-container-high" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-tertiary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="18" strokeWidth="10"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-headline font-black">98%</span>
                    <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">SpO2</span>
                  </div>
                </div>
                <h3 className="font-headline font-bold text-lg">Oxygen</h3>
                <p className="text-sm text-on-surface-variant">Optimal Level</p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-surface-container-high" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-secondary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="140" strokeWidth="10"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-headline font-black">118/76</span>
                    <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-tighter">mmHg</span>
                  </div>
                </div>
                <h3 className="font-headline font-bold text-lg">Pressure</h3>
                <p className="text-sm text-on-surface-variant">Perfect Range</p>
              </div>
            </div>
          </section>
          {/* Surgical Journey Timeline */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_40px_rgba(0,96,103,0.04)]">
            <h2 className="font-headline font-bold text-2xl mb-10">Surgical Journey Timeline</h2>
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute top-5 left-0 w-full h-1 bg-surface-container-high hidden md:block"></div>
              <div className="absolute top-5 left-0 w-full h-1 bg-primary rounded-full hidden md:block" style={{ width: '100%' }}></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Step 1 */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shrink-0">
                    <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div className="text-left md:text-center">
                    <h4 className="font-headline font-bold text-on-surface">Persiapan Operasi</h4>
                    <span className="text-xs text-on-surface-variant font-label">07:30 AM</span>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shrink-0">
                    <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div className="text-left md:text-center">
                    <h4 className="font-headline font-bold text-on-surface">Operasi Dimulai</h4>
                    <span className="text-xs text-on-surface-variant font-label">08:15 AM</span>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shrink-0">
                    <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div className="text-left md:text-center">
                    <h4 className="font-headline font-bold text-on-surface">Bayi Lahir</h4>
                    <span className="text-xs text-on-surface-variant font-label">08:42 AM</span>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 shrink-0 pulse-glow">
                    <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div className="text-left md:text-center">
                    <h4 className="font-headline font-bold text-on-surface">Selesai Operasi</h4>
                    <span className="text-xs text-on-surface-variant font-label">09:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Messages */}
          <section className="bg-surface-container-low rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline font-bold text-2xl flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">forum</span>
                Messages from Medical Team
              </h2>
              <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2">
                Reply to Team
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      alt="Dr. Sarah"
                      className="w-8 h-8 rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuACe44GRYjmZQQwkpO7VwWnHDFW4TuuSTVjw1k62iBP9WQ-WyEwmMSRbpqBDWH-MNXticPHdQPnpJcWv0WNQREjWqRvNrQ4JsyPo74ZTbWoKFX3Mpas7ELEOm0HbwVLudaurWfj9Ia-dhCHRaaM8Kb0KU0S0rodRlrgpfoWQRFvbLTO9lT7aYpPzGw7Vamp5IZg7vy2daEv0XtRIOKrJjgLWi5Q9NrxT4X1rBYsRmY_RQx72EyHfPerqMq7Npws5srgymQqFVW14KI"
                    />
                    <span className="font-headline font-bold">Dr. Sarah Lazuardi</span>
                    <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">
                      Chief Surgeon
                    </span>
                  </div>
                  <span className="text-xs font-label text-on-surface-variant italic">10:45 AM</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  The surgery was very successful. Patient is now in recovery and responding well to the initial monitoring. We expect her to be fully awake within the next hour. Rest assured, everything is going according to plan.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-white text-xs font-bold">
                      NS
                    </div>
                    <span className="font-headline font-bold">Nurse Satria</span>
                    <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">
                      Recovery Unit
                    </span>
                  </div>
                  <span className="text-xs font-label text-on-surface-variant italic">09:15 AM</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Pain management protocol has been initiated. Patient is resting comfortably. Vital signs are incredibly steady. I will update you if there are any changes.
                </p>
              </div>
            </div>
          </section>
        </div>
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/10">
            <h3 className="font-headline font-bold text-xl mb-6">Patient Overview</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <span className="block text-xs font-label text-on-surface-variant">Full Name</span>
                  <span className="font-headline font-bold">Ny. Anindita Putri</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                </div>
                <div>
                  <span className="block text-xs font-label text-on-surface-variant">Birth Date</span>
                  <span className="font-headline font-bold">12 August 1994</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">medical_information</span>
                </div>
                <div>
                  <span className="block text-xs font-label text-on-surface-variant">Procedure</span>
                  <span className="font-headline font-bold">C-Section (Lower)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative h-64 group">
            <img
              alt="Maternity ward"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASsstB9WxkvCplG1CCJxTmqwL4ZYqtJH3xksnsuaKpubFq3S5NKxK0XTldWFcHJU8gvdXYOKKTn0G7gvPmDdc9HZj2oJ9F1bxBMC8gwpHcMRhPKnGG5KkebS3BL94_tiIPhrcKdBKxsMM27iGzj_LRJX7OA96dZgQdrsK4ghlpX4MVan2hocHMEWKJFzu1maPcqQmUXs0q9nkSqp9OqcwbY59Hfzi2I_bH0JvmhxcGr09qyxiu_IFiswshVwmTp7kAmzhDKdBXjgY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-headline font-bold text-lg mb-1">Maternity Suite 402</h4>
              <p className="text-primary-fixed text-sm">North Wing, Floor 4</p>
            </div>
          </div>
          <div className="bg-tertiary/10 rounded-xl p-6 border-l-4 border-tertiary">
            <h4 className="font-headline font-bold text-tertiary mb-2">Next Scheduled Check</h4>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-headline font-black text-tertiary">11:30</span>
              <span className="text-sm font-label text-tertiary mb-1">AM</span>
            </div>
            <p className="text-xs text-on-tertiary-fixed-variant mt-2">Nurse Round & Vital Log Update</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
