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
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            HIMTIF <span className="text-brand-secondary">E-Certificate</span>
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
        <div className="flex justify-center mb-8">
          <div className="bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-700 inline-flex">
            <button 
              onClick={() => setActiveTab('Validasi')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'Validasi' ? 'bg-slate-900 text-white shadow' : 'text-slate-400 hover:bg-slate-950'}`}
            >
              Cek Validasi
            </button>
            <button 
              onClick={() => setActiveTab('Generate')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'Generate' ? 'bg-slate-900 text-white shadow' : 'text-slate-400 hover:bg-slate-950'}`}
            >
              Penerbitan (Panitia)
            </button>
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
              className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-800"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-display text-white">Cek Keaslian Sertifikat</h2>
                <p className="text-slate-500 text-sm mt-2">Masukkan ID Sertifikat yang tertera di sudut kiri bawah sertifikat Anda.</p>
              </div>

              <form onSubmit={handleValidate} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="Contoh: HIMTIF-26-1024" 
                  className="flex-grow px-6 py-4 rounded-xl border-2 border-slate-700 focus:border-brand-secondary focus:ring-0 outline-none text-lg text-center sm:text-left transition-colors uppercase"
                />
                <button 
                  type="submit" 
                  className="bg-brand-secondary hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Validasi
                </button>
              </form>

              {/* Validation Result */}
              {isValidated !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-8 p-6 rounded-2xl border ${isValidated ? 'bg-green-900/20 border-green-800' : 'bg-red-900/20 border-red-800'}`}
                >
                  {isValidated ? (
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                      <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-green-900/50 text-green-500 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-xl font-bold text-green-300 mb-1">Sertifikat Valid!</h3>
                          <p className="text-green-400 text-sm">Dokumen ini resmi diterbitkan oleh HIMTIF Universitas Raharja.</p>
                          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-green-900 bg-slate-900/50 p-4 rounded-xl border border-green-800">
                            <div><span className="font-bold text-green-400 block text-[10px] uppercase">Nama Peserta</span> Budi Santoso</div>
                            <div><span className="font-bold text-green-400 block text-[10px] uppercase">Event Kegiatan</span> Tech Fest 2026</div>
                            <div><span className="font-bold text-green-400 block text-[10px] uppercase">Nomor ID</span> {certId.toUpperCase()}</div>
                            <div><span className="font-bold text-green-400 block text-[10px] uppercase">Tanggal Terbit</span> 20 Agu 2026</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                          Unduh PDF
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="w-16 h-16 bg-red-900/50 text-red-500 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-red-300 mb-1">Sertifikat Tidak Ditemukan</h3>
                        <p className="text-red-400 text-sm">Pastikan ID Sertifikat yang Anda masukkan sudah benar dan sesuai format.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Tab Content: Generate */}
          {activeTab === 'Generate' && (
            <motion.div 
              key="generate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-800"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-display text-white">Penerbitan Sertifikat</h2>
                <p className="text-slate-500 text-sm mt-2">Generate ID unik dan QR Code untuk sertifikat peserta (Khusus Akses Panitia).</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
                {/* Form Input */}
                <form onSubmit={handleGenerate} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Nama Peserta</label>
                    <input 
                      type="text" 
                      value={genName}
                      onChange={(e) => setGenName(e.target.value)}
                      placeholder="Masukkan nama lengkap..." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 outline-none bg-slate-950 focus:bg-slate-900 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Event / Kegiatan</label>
                    <select 
                      value={genEvent}
                      onChange={(e) => setGenEvent(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 outline-none bg-slate-950 focus:bg-slate-900 transition-all"
                    >
                      <option value="Tech Fest 2026">Tech Fest 2026</option>
                      <option value="Seminar AI For Gen Z">Seminar AI For Gen Z</option>
                      <option value="Lomba Web Design Nasional">Lomba Web Design Nasional</option>
                      <option value="Makrab HIMTIF 2026">Makrab HIMTIF 2026</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 hover:bg-brand-primary text-white font-bold py-4 rounded-xl transition-all shadow-md mt-4"
                  >
                    Generate Sertifikat
                  </button>
                </form>

                {/* Preview / Result Area */}
                <div className="bg-slate-950 border-2 border-dashed border-slate-700 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[300px] text-center">
                  {!generatedId ? (
                    <div className="text-slate-400">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <p className="font-medium">Isi form di samping untuk<br/>menghasilkan sertifikat</p>
                    </div>
                  ) : (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full">
                      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-sm mb-6 w-full text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-bl-full -mr-10 -mt-10"></div>
                        
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Preview Data</div>
                        <div className="text-xl font-bold text-white mb-4">{genName}</div>
                        
                        <div className="flex gap-4 items-end justify-between">
                          <div>
                            <div className="text-sm font-bold text-slate-300">{genEvent}</div>
                            <div className="text-xs font-mono text-brand-secondary bg-brand-secondary/10 px-2 py-1 rounded inline-block mt-2">
                              ID: {generatedId}
                            </div>
                          </div>
                          {/* Fake QR Code */}
                          <div className="w-20 h-20 bg-slate-900 border-2 border-slate-700 p-1 shrink-0 rounded-lg shadow-sm">
                            <div className="w-full h-full bg-slate-800" style={{ backgroundImage: 'radial-gradient(circle, white 20%, transparent 20%)', backgroundSize: '6px 6px' }}></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl text-sm transition-colors shadow flex justify-center items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                          Download PDF
                        </button>
                        <button className="flex-1 bg-slate-900 border border-slate-600 hover:bg-slate-950 text-slate-300 font-bold py-3 rounded-xl text-sm transition-colors shadow-sm flex justify-center items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          Kirim Email
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
