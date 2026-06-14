import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const DownloadCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const documents = [
    { id: 1, title: 'AD/ART HIMTI Periode 2026', type: 'PDF', size: '1.2 MB', category: 'Organisasi', date: '10 Jan 2026' },
    { id: 2, title: 'Template Proposal Kegiatan Mahasiswa', type: 'DOCX', size: '450 KB', category: 'Administrasi', date: '05 Feb 2026' },
    { id: 3, title: 'Format Laporan Pertanggungjawaban (LPJ)', type: 'DOCX', size: '380 KB', category: 'Administrasi', date: '05 Feb 2026' },
    { id: 4, title: 'Kumpulan Template Surat Resmi', type: 'ZIP', size: '2.1 MB', category: 'Administrasi', date: '12 Mar 2026' },
    { id: 5, title: 'SOP Pelaksanaan Event Online & Offline', type: 'PDF', size: '890 KB', category: 'SOP', date: '20 Apr 2026' },
    { id: 6, title: 'Materi Seminar: Tech Fest 2026', type: 'PPTX', size: '15.4 MB', category: 'Akademik', date: '15 Jun 2026' },
    { id: 7, title: 'Materi Workshop: React 19 Fundamental', type: 'PDF', size: '4.5 MB', category: 'Akademik', date: '01 Jun 2026' },
  ];

  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIconColor = (type: string) => {
    switch(type) {
      case 'PDF': return 'text-red-400 bg-red-500/10 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]';
      case 'DOCX': return 'text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]';
      case 'PPTX': return 'text-orange-400 bg-orange-500/10 border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]';
      case 'ZIP': return 'text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]';
      default: return 'text-slate-400 bg-slate-800/50 border-slate-700 shadow-sm';
    }
  };

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-secondary/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-800 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">Portal Unduhan Resmi</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-blue-400">Center</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Pusat unduhan dokumen resmi, template administrasi, SOP, dan materi akademik HIMTIF.
          </motion.p>
        </div>

        {/* Search */}
        <div className="mb-12 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-secondary/30 to-brand-primary/30 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-xl p-3 rounded-2xl border border-slate-700/50 flex items-center shadow-2xl">
            <div className="pl-4 text-slate-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama dokumen, template, atau materi..." 
              className="w-full bg-transparent border-none text-white px-4 py-3 focus:ring-0 outline-none text-lg placeholder-slate-500"
            />
          </div>
        </div>

        {/* Document List */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-xl border border-slate-800/60 overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-slate-800/50">
            <AnimatePresence>
              {filteredDocs.map((doc, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.05 }}
                  key={doc.id}
                  className="p-5 sm:p-6 hover:bg-slate-800/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
                >
                  
                  {/* Left side: Icon + Info */}
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-extrabold text-[10px] shrink-0 border transition-transform group-hover:scale-110 ${getIconColor(doc.type)}`}>
                      <svg className="w-5 h-5 mb-0.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      {doc.type}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-secondary transition-colors line-clamp-1">{doc.title}</h3>
                      <div className="flex items-center flex-wrap gap-2 sm:gap-3 text-xs text-slate-400 mt-1.5 font-medium">
                        <span className="bg-slate-800/80 border border-slate-700/50 text-brand-secondary px-2.5 py-0.5 rounded-md shadow-sm">{doc.category}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>{doc.size}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{doc.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side: Button */}
                  <button className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-brand-primary hover:text-white text-slate-300 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-md shrink-0 flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-blue-600 group-hover:shadow-brand-primary/20">
                    <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Unduh
                  </button>

                </motion.div>
              ))}
            </AnimatePresence>

            {filteredDocs.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-16 text-center text-slate-500">
                <div className="text-4xl mb-4 opacity-50">📁</div>
                <h3 className="text-xl font-bold text-white mb-2">Dokumen Tidak Ditemukan</h3>
                <p>Coba gunakan kata kunci pencarian yang lain.</p>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DownloadCenter;
