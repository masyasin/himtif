import { motion } from 'framer-motion';

const DigitalLibrary = () => {
  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            HIMTIF Digital <span className="text-brand-secondary">Library</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Pusat repositori ilmu pengetahuan. Temukan ebook, modul pemrograman, jurnal, dan skripsi untuk referensi belajar Anda.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari judul buku, modul, atau topik..." 
              className="w-full px-6 py-4 rounded-2xl border-2 border-slate-700 focus:border-brand-secondary focus:ring-0 outline-none text-lg shadow-sm transition-colors"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-brand-primary text-white p-2.5 rounded-xl hover:bg-slate-800 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['Ebook', 'Modul Pemrograman', 'Jurnal Ilmiah', 'Repository Skripsi'].map((cat, idx) => (
            <button 
              key={idx}
              className="px-6 py-3 bg-slate-900 rounded-xl font-bold text-slate-300 shadow-sm border border-slate-800 hover:border-brand-secondary hover:text-brand-secondary transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Library Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {libraryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="h-48 bg-slate-800 relative flex items-center justify-center">
                {/* Book cover placeholder */}
                <div className="w-24 h-32 bg-slate-600 rounded shadow-2xl flex items-center justify-center p-2 text-center text-xs text-white/50 group-hover:scale-105 transition-transform">
                  COVER
                </div>
                <div className="absolute top-3 right-3 bg-slate-900/10 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded">
                  {item.type}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-white mb-1 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{item.author}</p>
                <div className="mt-auto pt-4 flex justify-between items-center border-t border-slate-800">
                  <span className="text-xs font-bold text-brand-secondary">{item.size}</span>
                  <button className="flex items-center gap-1 text-sm font-bold text-slate-300 hover:text-brand-primary transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Unduh
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

const libraryItems = [
  { title: 'Dasar Pemrograman Web dengan React 19', author: 'Tim Akademik HIMTIF', type: 'Modul', size: '2.4 MB' },
  { title: 'Pengenalan Machine Learning dengan Python', author: 'Dr. Budi Utomo', type: 'Ebook', size: '5.1 MB' },
  { title: 'Analisis Keamanan Jaringan IoT Menggunakan Metode X', author: 'Ahmad Fauzi', type: 'Skripsi', size: '1.8 MB' },
  { title: 'Panduan UI/UX Design System', author: 'HIMTIF Design Team', type: 'Modul', size: '8.4 MB' },
];

export default DigitalLibrary;
