export default function Alerts() {
  return (
    <div className="px-8 max-w-7xl mx-auto pb-20">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2">Patient Recovery Update</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Staying connected to every step of the post-operative journey. Your reassurance is our priority.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Notifications Feed (Bento Style) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history</span>
              Recent Updates
            </h2>
            <span className="px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">
              Live Feed
            </span>
          </div>
          <div className="space-y-6">
            {/* Notification Card 1 */}
            <div className="bento-card bg-surface-container-lowest p-6 rounded-xl flex gap-6 items-start relative overflow-hidden transition-transform hover:-translate-y-0.5">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
              <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded-full shrink-0">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bed
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-surface">Patient has entered recovery room</h3>
                  <span className="text-xs font-medium text-on-surface-variant">2 mins ago</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-3">
                  Monitoring vitals are stable. Patient is resting comfortably under nursing supervision.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs font-bold text-primary">Vitals: Normal</span>
                </div>
              </div>
            </div>
            {/* Notification Card 2 */}
            <div className="bento-card bg-surface-container-lowest p-6 rounded-xl flex gap-6 items-start transition-transform hover:-translate-y-0.5">
              <div className="w-12 h-12 bg-secondary-container/20 flex items-center justify-center rounded-full shrink-0">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-surface">Surgery Successfully Completed</h3>
                  <span className="text-xs font-medium text-on-surface-variant">45 mins ago</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  The procedure was successful without complications. Surgical team has transitioned care to the recovery unit.
                </p>
              </div>
            </div>
            {/* Notification Card 3 */}
            <div className="bento-card bg-surface-container-lowest p-6 rounded-xl flex gap-6 items-start opacity-70 transition-transform hover:-translate-y-0.5">
              <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-full shrink-0">
                <span className="material-symbols-outlined text-outline">medical_services</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-surface">Anesthesia Administered</h3>
                  <span className="text-xs font-medium text-on-surface-variant">1 hour ago</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Pre-operative preparations complete. Patient is under medical care.
                </p>
              </div>
            </div>
          </div>
          {/* Video Tips Perawatan Pasca-Operasi */}
          <div className="mt-12 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">play_circle</span>
              Video Tips Perawatan Pasca-Operasi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden group cursor-pointer border border-surface-container-highest/50 hover:border-primary/30 transition-all">
                <div className="relative aspect-video bg-slate-200">
                  <img
                    alt="Early mobilization"
                    className="w-full h-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoGz2dCwGx8_CN1dy98pO_Xo6XSXw2MwxjyiEahuGK9R1M2e0T69M1E-jrB63RPwqdd1jRyV4pWYZwxML7MtG3N4lAwqwuy-kcVfFB6Y7w9x2E3-EbGefsk7VPBT-q7ohflcOZImRn3eoXtUBa2RhA-IDEPf9MYcjq3NTzPW8CRLaVq3dhhCaob8QFkDSpmWcmQhEtcZD6Ftvn5qupzo9CAZYWxHKQGYic9AUE1jVWtu6THVeus4FAr4RzXdmmMkxfexFdxP90y4k"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-on-surface mb-1">Cara Mobilisasi Dini</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2">
                    Langkah awal bergerak secara bertahap untuk mempercepat pemulihan sirkulasi.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden group cursor-pointer border border-surface-container-highest/50 hover:border-primary/30 transition-all">
                <div className="relative aspect-video bg-slate-200">
                  <img
                    alt="Post-op nutrition"
                    className="w-full h-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhyLSmvjR7SCPma_YIVSrEDSslMebidbhXxwyLDHtw4iddFgcGTfOjBSP-sI8NhzCcQj7k2g88BQthQyXqIqusGkj6EjEhcBDwoWIBxJSQQggdNYv3lKdREW2QQEVjBj1LZhTP8RYreXNO7cQGWSKNF3yPYFXy9NvxfAB9XCxjCqwo1Hm-WWi0ulKEU5jHblRH897lTs2mh8S62QXGOxMAFJlVI_yuJe9sduf-Bmr4RSqXGKBvsv82vbHGUy_0jtA6_LzeyolQP-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-on-surface mb-1">Nutrisi Pasca SC</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2">
                    Daftar makanan bergizi tinggi protein untuk penyembuhan jaringan yang optimal.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden group cursor-pointer border border-surface-container-highest/50 hover:border-primary/30 transition-all">
                <div className="relative aspect-video bg-slate-200">
                  <img
                    alt="Wound care"
                    className="w-full h-full object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB45yI9K9HxGTFMfL4MbCSuiCd4LinzFWyfj8PG20gQz5ZfAJ-PmazVxlIf_G4Y3FscBmsa-MlzD0Tgm12P53o0VZQIRPXJMvfbcvbtm1t3s_cxGMhZFiOkCbZoBgjGMLuSUQkTV58UumbEIpv1SBd9vLzUsE2SMdRMDHNrvnJOik5ItIOedELcHnBytDAxD-hQfxBwo6PJw0OQKko49a1jdrxaizkVgfF_ErAiICwrsC-0WlYnzE4OoS1ty7yqZAM2KeocF3PiSQ"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-on-surface mb-1">Perawatan Luka Jahitan</h4>
                  <p className="text-xs text-on-surface-variant line-clamp-2">
                    Teknik menjaga kebersihan area luka agar terhindar dari resiko infeksi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Education & Support Section */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-primary p-8 rounded-2xl text-on-primary relative overflow-hidden shadow-[0_12px_40px_rgba(0,96,103,0.15)]">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 font-headline leading-tight">Family Care Guide</h2>
              <p className="text-on-primary-container/80 mb-6">
                How you can support your loved one during the first 24 hours of recovery.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-sm">energy_savings_leaf</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Encourage Rest</h4>
                    <p className="text-sm text-on-primary-container">
                      Limit visitors to ensure the mother gets adequate sleep between monitoring.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-sm">water_drop</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Hydration Support</h4>
                    <p className="text-sm text-on-primary-container">
                      Once cleared by nurses, help her stay hydrated with small sips of water.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-sm">baby_changing_station</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Assisted Bonding</h4>
                    <p className="text-sm text-on-primary-container">
                      Help position the baby for skin-to-skin contact while the mother is reclining.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-8 w-full py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-bright transition-all flex items-center justify-center gap-2">
                View Full Recovery Plan
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            {/* Background Glow Decoration */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary-container/40 rounded-full blur-3xl"></div>
          </div>
          {/* Resources Card */}
          <div className="bg-surface-container-low p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-4 text-on-surface">Essential Resources</h3>
            <div className="grid grid-cols-1 gap-3">
              <a className="p-4 bg-surface-container-lowest rounded-xl flex items-center justify-between group" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">menu_book</span>
                  <span className="font-medium text-on-surface">Wound Care Guide</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                  chevron_right
                </span>
              </a>
              <a className="p-4 bg-surface-container-lowest rounded-xl flex items-center justify-between group" href="#">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">restaurant</span>
                  <span className="font-medium text-on-surface">Post-Op Nutrition Tips</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                  chevron_right
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Vital Pulse Component */}
      <div className="mt-12 bg-surface-container-lowest p-12 rounded-[2rem] text-center relative overflow-hidden shadow-[0_12px_40px_rgba(0,96,103,0.05)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-fixed-dim/20 via-transparent to-transparent opacity-40"></div>
        <div className="relative z-10">
          <span className="px-6 py-2 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">
            Real-time Status
          </span>
          <h2 className="text-6xl font-extrabold text-primary mb-4 font-headline tracking-tighter">In Recovery</h2>
          <p className="text-xl text-on-surface-variant font-medium">Stage 4 of 5: Active Monitoring</p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-on-surface">98%</span>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">SpO2</span>
            </div>
            <div className="w-[1px] bg-outline-variant/30 h-12 self-center"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-on-surface">74</span>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">BPM</span>
            </div>
            <div className="w-[1px] bg-outline-variant/30 h-12 self-center"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-on-surface">118/76</span>
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">BP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
