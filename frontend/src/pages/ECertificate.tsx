import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ECertificate = () => {
  const [activeTab, setActiveTab] = useState<'Validasi' | 'Generate'>('Validasi');
  
  // State for Validasi
  const [certId, setCertId] = useState('');
  const [isValidated, setIsValidated] = useState<boolean | null>(null);

  // State for Generate
  const [genName, setGenName] = useState('');
  const [genEvent, setGenEvent] = useState('Tech Fest 2026');
  const [generatedId, setGeneratedId] = useState<string | null>(null);

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;
    
    // Simulate validation
    if (certId.toUpperCase().startsWith('HIMTIF')) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!genName.trim()) return;
    
    // Simulate ID generation
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setGeneratedId(`HIMTIF-26-${randomNum}`);
  };

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 flex flex-col items-center relative overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary font-bold text-xs tracking-widest rounded-full mb-6 uppercase"
          >
            Digital Credential
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            HIMTIF <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-indigo-400">E-Certificate</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Sistem penerbitan dan validasi sertifikat digital resmi untuk seluruh kegiatan HIMTIF Universitas Raharja.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900/80 backdrop-blur p-1.5 rounded-full shadow-lg border border-slate-700/50 inline-flex relative">
            <button 
              onClick={() => setActiveTab('Validasi')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all relative z-10 ${activeTab === 'Validasi' ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Cek Validasi
            </button>
            <button 
              onClick={() => setActiveTab('Generate')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all relative z-10 ${activeTab === 'Generate' ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Penerbitan (Panitia)
            </button>
            
            {/* Sliding Pill Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-brand-primary to-indigo-600 rounded-full transition-transform duration-300 ease-out shadow-lg z-0`}
              style={{ transform: activeTab === 'Validasi' ? 'translateX(0)' : 'translateX(100%)' }}
            ></div>
          </div>
        </div>

        {/* Tab Content: Validasi */}
        <AnimatePresence mode="wait">
          {activeTab === 'Validasi' && (
            <motion.div 
              key="validasi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-700/50"
            >
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-brand-primary/20">
                  <svg className="w-10 h-10 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h2 className="text-3xl font-bold font-display text-white">Cek Keaslian Sertifikat</h2>
                <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto">Masukkan ID Sertifikat yang tertera di sudut kiri bawah dokumen PDF Anda.</p>
              </div>

              <form onSubmit={handleValidate} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
                <input 
                  type="text" 
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="Contoh: HIMTIF-26-1024" 
                  className="flex-grow px-6 py-4 rounded-2xl border-2 border-slate-700/50 bg-slate-950/50 focus:border-brand-secondary focus:ring-0 outline-none text-lg text-center sm:text-left transition-colors uppercase text-white placeholder-slate-600 shadow-inner"
                />
                <button 
                  type="submit" 
                  className="bg-brand-primary hover:bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-brand-primary/40 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  Validasi
                </button>
              </form>

              {/* Validation Result */}
              <AnimatePresence>
                {isValidated !== null && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: 'auto', scale: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`overflow-hidden rounded-3xl border ${isValidated ? 'bg-emerald-900/20 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]' : 'bg-red-900/20 border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.1)]'}`}
                  >
                    <div className="p-8">
                      {isValidated ? (
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
                          <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div className="text-center sm:text-left">
                              <h3 className="text-2xl font-bold text-emerald-400 mb-2">Sertifikat Valid!</h3>
                              <p className="text-emerald-200/80 text-sm mb-6">Dokumen ini resmi diterbitkan oleh HIMTIF Universitas Raharja.</p>
                              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm bg-slate-950/40 p-5 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                                <div><span className="font-bold text-emerald-500/70 block text-[10px] uppercase tracking-widest mb-1">Nama Peserta</span><span className="text-white font-semibold">Budi Santoso</span></div>
                                <div><span className="font-bold text-emerald-500/70 block text-[10px] uppercase tracking-widest mb-1">Event / Kegiatan</span><span className="text-white font-semibold">Tech Fest 2026</span></div>
                                <div><span className="font-bold text-emerald-500/70 block text-[10px] uppercase tracking-widest mb-1">Nomor ID</span><span className="text-white font-mono">{certId.toUpperCase()}</span></div>
                                <div><span className="font-bold text-emerald-500/70 block text-[10px] uppercase tracking-widest mb-1">Tanggal Terbit</span><span className="text-white font-semibold">20 Agu 2026</span></div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="shrink-0 w-full sm:w-auto self-stretch flex items-end">
                            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-emerald-500/40 hover:-translate-y-1 flex items-center justify-center gap-2">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                              Unduh Dokumen
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                          </div>
                          <div className="text-center sm:text-left">
                            <h3 className="text-2xl font-bold text-red-400 mb-2">Sertifikat Tidak Ditemukan</h3>
                            <p className="text-red-200/80 text-sm">Pastikan ID Sertifikat yang Anda masukkan sudah benar dan persis sesuai yang tertera pada dokumen asli. Periksa kembali huruf besar dan angka.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Tab Content: Generate */}
          {activeTab === 'Generate' && (
            <motion.div 
              key="generate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-700/50"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold font-display text-white">Penerbitan Sertifikat</h2>
                <p className="text-slate-400 text-sm mt-3">Generate ID unik dan QR Code untuk sertifikat peserta (Khusus Akses Panitia).</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
                {/* Form Input */}
                <form onSubmit={handleGenerate} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Nama Peserta</label>
                    <input 
                      type="text" 
                      value={genName}
                      onChange={(e) => setGenName(e.target.value)}
                      placeholder="Masukkan nama lengkap..." 
                      className="w-full px-5 py-4 rounded-2xl border border-slate-700 focus:border-brand-secondary focus:ring-1 outline-none bg-slate-950/50 focus:bg-slate-900 transition-all text-white placeholder-slate-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Event / Kegiatan</label>
                    <div className="relative">
                      <select 
                        value={genEvent}
                        onChange={(e) => setGenEvent(e.target.value)}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-700 focus:border-brand-secondary focus:ring-1 outline-none bg-slate-950/50 focus:bg-slate-900 transition-all text-white appearance-none cursor-pointer"
                      >
                        <option value="Tech Fest 2026">Tech Fest 2026</option>
                        <option value="Seminar AI For Gen Z">Seminar AI For Gen Z</option>
                        <option value="Lomba Web Design Nasional">Lomba Web Design Nasional</option>
                        <option value="Makrab HIMTIF 2026">Makrab HIMTIF 2026</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-brand-primary to-indigo-600 hover:from-brand-secondary hover:to-brand-primary text-white font-bold py-4 rounded-2xl transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] mt-4"
                  >
                    Generate Certificate
                  </button>
                </form>

                {/* Preview / Result Area */}
                <div className="bg-slate-950/50 border-2 border-dashed border-slate-700/50 rounded-[2.5rem] p-6 flex flex-col items-center justify-center min-h-[350px] text-center relative overflow-hidden">
                  {!generatedId ? (
                    <div className="text-slate-500 z-10">
                      <svg className="w-20 h-20 mx-auto mb-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <p className="font-medium text-lg">Preview Sertifikat</p>
                      <p className="text-sm mt-2 opacity-70">Isi form untuk melihat hasilnya</p>
                    </div>
                  ) : (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full z-10">
                      
                      {/* Fake Certificate Card */}
                      <div className="bg-slate-100 rounded-2xl p-8 shadow-2xl mb-6 w-full text-left relative overflow-hidden aspect-[1.4/1] flex flex-col justify-center border-4 border-double border-slate-300">
                        {/* Cert Ornaments */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-primary/20 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-secondary/20 to-transparent rounded-tr-full"></div>
                        
                        <div className="text-center mb-6 relative z-10">
                          <h4 className="text-brand-primary font-bold tracking-widest text-sm uppercase">Certificate of Participation</h4>
                          <div className="w-16 h-1 bg-brand-secondary mx-auto mt-2 rounded-full"></div>
                        </div>

                        <div className="text-center relative z-10 mb-8">
                          <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Proudly presented to</p>
                          <h2 className="text-3xl font-display font-bold text-slate-800 border-b border-slate-300 pb-2 inline-block px-8">{genName}</h2>
                        </div>
                        
                        <div className="flex gap-4 items-end justify-between relative z-10 mt-auto">
                          <div>
                            <div className="text-sm font-bold text-slate-600 mb-1">{genEvent}</div>
                            <div className="text-[10px] font-mono text-slate-500 bg-slate-200 px-2 py-1 rounded inline-block">
                              ID: {generatedId}
                            </div>
                          </div>
                          {/* Fake QR Code */}
                          <div className="w-16 h-16 bg-white border border-slate-300 p-1 shrink-0 rounded shadow-sm">
                            <div className="w-full h-full bg-slate-800" style={{ backgroundImage: 'radial-gradient(circle, white 20%, transparent 20%)', backgroundSize: '4px 4px' }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 rounded-xl text-sm transition-colors shadow-lg flex justify-center items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                          Save PDF
                        </button>
                        <button className="flex-1 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-sm transition-colors shadow-lg flex justify-center items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          Email
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default ECertificate;
