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
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 text-white relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
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
        <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-7 mb-14 shadow-2xl border border-slate-800 relative z-20">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            
            {/* Filter Kategori */}
            <div className="flex-1">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Pilih Kategori</label>
              <div className="flex flex-wrap gap-2.5">
                {['Semua', 'Foto', 'Video', 'Dokumentasi Event'].map((cat, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                      activeCategory === cat 
                        ? 'bg-gradient-to-r from-brand-primary to-indigo-600 text-white shadow-lg shadow-brand-primary/30 scale-105 border-transparent' 
                        : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Dropdowns (Tahun & Event) */}
            <div className="flex flex-col sm:flex-row gap-5 flex-1">
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Filter Tahun</label>
                <div className="relative">
                  <select 
                    value={activeYear}
                    onChange={(e) => setActiveYear(e.target.value)}
                    className="w-full bg-slate-800/80 border border-slate-700 text-white font-semibold text-sm rounded-2xl px-5 py-3.5 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none cursor-pointer appearance-none shadow-inner transition-colors hover:border-slate-500"
                  >
                    {years.map(year => <option key={year} value={year} className="bg-slate-900">{year}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Filter Event</label>
                <div className="relative">
                  <select 
                    value={activeEvent}
                    onChange={(e) => setActiveEvent(e.target.value)}
                    className="w-full bg-slate-800/80 border border-slate-700 text-white font-semibold text-sm rounded-2xl px-5 py-3.5 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none cursor-pointer appearance-none shadow-inner transition-colors hover:border-slate-500"
                  >
                    {events.map(ev => <option key={ev} value={ev} className="bg-slate-900">{ev}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid (Masonry-like layout using standard columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative group break-inside-avoid rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800/60"
              >
                {/* Image Container with Dynamic Height */}
                <div className={`w-full ${item.heightClass} relative overflow-hidden bg-slate-800`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Video Play Icon Overlay */}
                  {item.category === 'Video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-brand-primary/90 backdrop-blur-md flex items-center justify-center text-white pl-1 shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-brand-primary text-white text-[9px] font-bold px-2.5 py-1 rounded shadow-sm uppercase tracking-widest pointer-events-auto">
                        {item.category}
                      </span>
                      <span className="text-brand-secondary text-[10px] font-extrabold bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700/50">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1.5 leading-snug drop-shadow-md">{item.title}</h3>
                    <p className="text-slate-300 text-xs font-semibold mb-4 drop-shadow-md">Event: <span className="text-slate-100">{item.event}</span></p>
                    
                    <button className="w-full bg-white/10 hover:bg-brand-primary backdrop-blur-md border border-white/20 hover:border-transparent text-white py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 pointer-events-auto shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-slate-900/50 rounded-3xl border border-slate-800/50 mt-8 backdrop-blur-sm"
          >
            <div className="text-5xl mb-6 opacity-40">📸</div>
            <h3 className="text-2xl font-bold text-white mb-2">Tidak ada media ditemukan</h3>
            <p className="text-slate-400">Silakan ubah kombinasi filter kategori, tahun, atau event.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
};

const years = ['Semua Tahun', '2026', '2025', '2024'];
const events = ['Semua Event', 'Tech Fest', 'Makrab Maba', 'Hackathon HIMTIF', 'Kunjungan Industri', 'Seminar IT'];

const galleryItems = [
  { id: 1, title: 'Keseruan Makrab 2026', category: 'Foto', year: '2026', event: 'Makrab Maba', heightClass: 'h-96', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80' },
  { id: 2, title: 'Aftermovie Tech Fest 2025', category: 'Video', year: '2025', event: 'Tech Fest', heightClass: 'h-72', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
  { id: 3, title: 'Sesi Foto Bersama Pemateri', category: 'Dokumentasi Event', year: '2026', event: 'Seminar IT', heightClass: 'h-80', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80' },
  { id: 4, title: 'Tim Juara 1 Hackathon', category: 'Foto', year: '2026', event: 'Hackathon HIMTIF', heightClass: 'h-[28rem]', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80' },
  { id: 5, title: 'Kunjungan ke Google Indonesia', category: 'Dokumentasi Event', year: '2025', event: 'Kunjungan Industri', heightClass: 'h-72', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80' },
  { id: 6, title: 'Vlog Perjalanan Industri', category: 'Video', year: '2025', event: 'Kunjungan Industri', heightClass: 'h-96', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80' },
  { id: 7, title: 'Suasana Kompetisi CTF', category: 'Foto', year: '2024', event: 'Tech Fest', heightClass: 'h-80', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80' },
  { id: 8, title: 'Penyerahan Sertifikat Maba', category: 'Dokumentasi Event', year: '2026', event: 'Makrab Maba', heightClass: 'h-[26rem]', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80' },
  { id: 9, title: 'Highlight Seminar AI', category: 'Video', year: '2026', event: 'Seminar IT', heightClass: 'h-64', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80' },
];

export default Galeri;
