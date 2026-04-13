export default function Timeline() {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto w-full">
      <header className="mb-12">
        <span className="text-tertiary font-semibold tracking-widest text-xs uppercase mb-2 block">
          Case #2024-0812
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
          Timeline Perjalanan Bedah
        </h1>
        <p className="text-on-surface-variant mt-4 text-lg max-w-2xl">
          Pelacakan real-time untuk setiap tahapan klinis prosedur bedah Patient Ny. Amanda S. yang dipantau melalui
          sistem Serene Sentinel.
        </p>
      </header>
      {/* The Vital Pulse (Hero Component) */}
      <section className="mb-12">
        <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_40px_rgba(0,96,103,0.08)] group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ad5dd] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#007B83]"></span>
                </span>
                <span className="text-sm font-bold text-primary tracking-wide uppercase">System Live</span>
              </div>
              <h2 className="text-3xl font-bold text-on-surface">Proses Pemulihan</h2>
              <p className="text-on-surface-variant mt-1">Surgical procedures have been successfully finalized.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-high rounded-full px-6 py-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">timer</span>
                <span className="font-bold text-on-surface">01:42:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <div className="space-y-6">
        {/* Stage 1 */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:bg-white group">
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary transition-colors group-hover:bg-primary-fixed">
                <span className="material-symbols-outlined">medical_information</span>
              </div>
              <div className="w-0.5 h-12 bg-surface-container-high mt-2"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-on-surface">1. Persiapan Operasi</h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Selesai
                </span>
                <span className="text-xs text-on-surface-variant font-medium">Standard Protocol v2.1</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 md:gap-12 pl-18 md:pl-0">
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Jam Mulai</p>
              <p className="text-lg font-bold text-on-surface">08:00</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Jam Selesai</p>
              <p className="text-lg font-bold text-on-surface">08:30</p>
            </div>
          </div>
        </div>
        {/* Stage 2 */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:bg-white group">
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary transition-colors group-hover:bg-primary-fixed">
                <span className="material-symbols-outlined">surgical</span>
              </div>
              <div className="w-0.5 h-12 bg-surface-container-high mt-2"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-on-surface">2. Operasi Dimulai</h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Selesai
                </span>
                <span className="text-xs text-on-surface-variant font-medium">Anesthesia Administered</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 md:gap-12 pl-18 md:pl-0">
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Jam Mulai</p>
              <p className="text-lg font-bold text-on-surface">08:35</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Jam Selesai</p>
              <p className="text-lg font-bold text-on-surface">09:15</p>
            </div>
          </div>
        </div>
        {/* Stage 3 */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl border-l-4 border-primary-container flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:bg-white group shadow-sm">
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  child_care
                </span>
              </div>
              <div className="w-0.5 h-12 bg-surface-container-high mt-2"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-on-surface">3. Bayi Lahir</h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="bg-tertiary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Berjalan
                </span>
                <span className="text-xs text-on-surface-variant font-medium">Neonatal Assessment</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 md:gap-12 pl-18 md:pl-0">
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Jam Mulai</p>
              <p className="text-lg font-bold text-on-surface">09:20</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Jam Selesai</p>
              <div className="flex items-center justify-center h-7">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-tertiary rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stage 4 */}
        <div className="bg-surface-container-low p-6 md:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-60">
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-on-surface">4. Selesai Operasi</h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="bg-surface-container-highest text-on-surface-variant px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Menunggu
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 md:gap-12 pl-18 md:pl-0">
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Jam Mulai</p>
              <p className="text-lg font-bold text-on-surface-variant">--:--</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Jam Selesai</p>
              <p className="text-lg font-bold text-on-surface-variant">--:--</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contextual Information Card */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-container-low p-6 rounded-xl border-l-2 border-primary-container/20">
          <h4 className="text-xs font-bold text-tertiary uppercase tracking-widest mb-3">Surgical Team</h4>
          <div className="flex -space-x-2">
            <img
              alt="Doctor 1"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAvhAhuINO15RGS_qm6XmzXxgOBX73yHBVRRXFoBOo17SpEGNjxG-2vLCsmlcsjbtfs-jBaCew2UnWqlPJKKjcJ0uA-Rx73tOnJ5l8rqprxB23YDnyD5eYvu3CbewdnZ_aq4kZmEqGHaXPdES_i388BARFoPen0-PF_MtWck1SKZl4TgJbUHmvN1gx5PDoVfHczPwL_5KjDGvaMTEPiJ_siFTJxYfdaotE2bNniTWN-VFoiKw4k17GGU0K0F3q5V3z8m6ONOioOS8"
            />
            <img
              alt="Doctor 2"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKwUKslbL6kqOftvDJouwkf-EhbsaQFMP3mT84Pvncsdb27C3XVlFTsnIOxufWdmeR65J97RbCMLS6X9miJExNTxLZ56hDLkq_f_BEY8AWyIOmJQQ1hKhLNbj3g10Pl4rsUHve-h_FlYRO2L7lihxFV4s2UnU9I9L8Fep8InouGsjdLtN6Vg1yYkIzcXXuaJMl-yzMOD-_GnDSGdHss2rrSnyGUP35QNZlfWvESRPNhDi8-X_hq5evWSeeyxI4dHKGjIFv8Id-qcQ"
            />
            <img
              alt="Doctor 3"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC96GqvSWTGDTGMXaLiTMkSfbmB13VwMJUNOdWTiQK4d5foK9wSkxDWjpNfOFVbe1n0T4tjwXMuG8joKF5TLEc5uKXOXSMxxC4EjKN1bmh8lARUhnAUvgXvJ5j-r0aZBPQ7V5muizEb68y_pgVi4RqQDrVdOGVCxc0jB82PdBvgtlSlLmc-N4z5ZEatggo-ZOHl77vHtPxZBuQpqI3qq-f16oRTYGF-DzjteFl9wdG1Xk1GZGJYC7D_8weDidk2uXxmztC0sfjSuCw"
            />
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
              +4
            </div>
          </div>
          <p className="text-sm text-on-surface-variant mt-4 font-medium">Lead: Dr. H. Wijaya, Sp.OG</p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border-l-2 border-primary-container/20">
          <h4 className="text-xs font-bold text-tertiary uppercase tracking-widest mb-3">Operating Room</h4>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">meeting_room</span>
            <span className="font-bold text-on-surface">Suite 04-A (Sterile)</span>
          </div>
          <p className="text-sm text-on-surface-variant mt-4 font-medium">Temp: 22°C | Humidity: 50%</p>
        </div>
      </div>
    </div>
  );
}
