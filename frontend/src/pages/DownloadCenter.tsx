import { motion } from 'framer-motion';
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
      case 'PDF': return 'text-red-500 bg-red-900/20 border-red-800';
      case 'DOCX': return 'text-blue-500 bg-blue-50 border-blue-200';
      case 'PPTX': return 'text-orange-500 bg-orange-50 border-orange-200';
      case 'ZIP': return 'text-amber-500 bg-amber-50 border-amber-200';
      default: return 'text-slate-500 bg-slate-950 border-slate-700';
    }
  };

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Download <span className="text-brand-secondary">Center</span>
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
        <div className="bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-700 mb-8 flex gap-4">
          <div className="relative flex-grow">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama dokumen, template, atau materi..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-950 border-none focus:ring-2 focus:ring-brand-secondary outline-none transition-all"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="bg-slate-900 rounded-3xl shadow-sm border border-slate-700 overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-slate-100">
            {filteredDocs.map((doc, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={doc.id}
                className="p-4 sm:p-6 hover:bg-slate-950 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                
                {/* Left side: Icon + Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center font-bold text-xs shrink-0 ${getIconColor(doc.type)}`}>
                    {doc.type}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-secondary transition-colors line-clamp-1">{doc.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 font-medium">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-400">{doc.category}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Button */}
                <button className="w-full sm:w-auto bg-slate-900 border border-slate-700 hover:border-brand-secondary hover:text-brand-secondary text-slate-300 font-bold px-6 py-2.5 rounded-xl transition-all shadow-sm shrink-0 flex items-center justify-center gap-2 group-hover:bg-brand-secondary group-hover:text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Unduh
                </button>

              </motion.div>
            ))}

            {filteredDocs.length === 0 && (
              <div className="p-12 text-center text-slate-500">
                Dokumen tidak ditemukan.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DownloadCenter;
