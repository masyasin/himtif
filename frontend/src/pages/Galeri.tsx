import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Galeri = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeYear, setActiveYear] = useState('Semua Tahun');
  const [activeEvent, setActiveEvent] = useState('Semua Event');

  // Filter Data
  const filteredGallery = galleryItems.filter(item => {
    const matchCategory = activeCategory === 'Semua' || item.category === activeCategory;
    const matchYear = activeYear === 'Semua Tahun' || item.year === activeYear;
    const matchEvent = activeEvent === 'Semua Event' || item.event === activeEvent;
    return matchCategory && matchYear && matchEvent;
  });

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Galeri <span className="text-brand-secondary">HIMTIF</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Dokumentasi berbagai momen, keseruan, dan memori tak terlupakan dalam setiap kegiatan Teknik Informatika.
          </motion.p>
        </div>

        {/* Filters Panel */}
        <div className="bg-slate-800 rounded-3xl p-6 mb-12 shadow-xl border border-slate-700">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            
            {/* Filter Kategori */}
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Kategori</label>
              <div className="flex flex-wrap gap-2">
                {['Semua', 'Foto', 'Video', 'Dokumentasi Event'].map((cat, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      activeCategory === cat 
                        ? 'bg-brand-secondary text-white' 
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Dropdowns (Tahun & Event) */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Tahun</label>
                <select 
                  value={activeYear}
                  onChange={(e) => setActiveYear(e.target.value)}
                  className="w-full bg-slate-700 border-none text-slate-200 text-sm rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-secondary outline-none cursor-pointer"
                >
                  {years.map(year => <option key={year} value={year}>{year}</option>)}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Event</label>
                <select 
                  value={activeEvent}
                  onChange={(e) => setActiveEvent(e.target.value)}
                  className="w-full bg-slate-700 border-none text-slate-200 text-sm rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-secondary outline-none cursor-pointer"
                >
                  {events.map(ev => <option key={ev} value={ev}>{ev}</option>)}
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid (Masonry-like layout with standard grid) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative group break-inside-avoid rounded-2xl overflow-hidden bg-slate-800"
              >
                {/* Simulated Image/Media Height (varying heights for masonry effect) */}
                <div 
                  className="w-full bg-slate-700 relative flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
                  style={{ height: `${Math.floor(Math.random() * (400 - 250 + 1) + 250)}px` }}
                >
                  <span className="text-slate-500 font-bold opacity-50 text-xl tracking-widest">{item.category.toUpperCase()}</span>
                  
                  {/* Video Play Icon Overlay */}
                  {item.category === 'Video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-16 h-16 rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center text-white pl-1 shadow-lg border border-white/30">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest">
                        {item.category}
                      </span>
                      <span className="text-brand-secondary text-xs font-bold bg-slate-900/50 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">Event: {item.event}</p>
                    
                    <button className="w-full bg-slate-900/10 hover:bg-slate-900/20 backdrop-blur border border-white/20 text-white py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                      {item.category === 'Video' ? 'Tonton Video' : 'Lihat Penuh'}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-32 text-slate-500">
            <div className="text-5xl mb-4 opacity-50">📸</div>
            <h3 className="text-xl font-bold text-slate-300">Tidak ada media ditemukan</h3>
            <p className="mt-2">Silakan ubah kombinasi filter Anda.</p>
          </div>
        )}

      </div>
    </div>
  );
};

const years = ['Semua Tahun', '2026', '2025', '2024'];
const events = ['Semua Event', 'Tech Fest', 'Makrab Maba', 'Hackathon HIMTIF', 'Kunjungan Industri', 'Seminar IT'];

const galleryItems = [
  { id: 1, title: 'Keseruan Makrab 2026', category: 'Foto', year: '2026', event: 'Makrab Maba' },
  { id: 2, title: 'Aftermovie Tech Fest 2025', category: 'Video', year: '2025', event: 'Tech Fest' },
  { id: 3, title: 'Sesi Foto Bersama Pemateri', category: 'Dokumentasi Event', year: '2026', event: 'Seminar IT' },
  { id: 4, title: 'Tim Juara 1 Hackathon', category: 'Foto', year: '2026', event: 'Hackathon HIMTIF' },
  { id: 5, title: 'Kunjungan ke Google Indonesia', category: 'Dokumentasi Event', year: '2025', event: 'Kunjungan Industri' },
  { id: 6, title: 'Vlog Perjalanan Industri', category: 'Video', year: '2025', event: 'Kunjungan Industri' },
  { id: 7, title: 'Suasana Kompetisi CTF', category: 'Foto', year: '2024', event: 'Tech Fest' },
  { id: 8, title: 'Penyerahan Sertifikat Maba', category: 'Dokumentasi Event', year: '2026', event: 'Makrab Maba' },
  { id: 9, title: 'Highlight Seminar AI', category: 'Video', year: '2026', event: 'Seminar IT' },
];

export default Galeri;
