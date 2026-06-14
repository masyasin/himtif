import { motion } from 'framer-motion';

const DigitalLibrary = () => {
  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 relative overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            HIMTIF Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">Library</span>
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
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-indigo-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Cari judul buku, modul, atau topik..." 
                className="w-full px-8 py-5 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 focus:border-brand-secondary/50 focus:ring-0 outline-none text-white text-lg shadow-2xl transition-all"
              />
              <button className="absolute right-3 bg-gradient-to-r from-brand-primary to-blue-600 text-white p-3 rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-brand-primary/30">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {['Ebook', 'Modul Pemrograman', 'Jurnal Ilmiah', 'Repository Skripsi'].map((cat, idx) => (
            <button 
              key={idx}
              className="px-6 py-2.5 bg-slate-900/50 backdrop-blur-md rounded-full font-bold text-slate-300 text-sm shadow-sm border border-slate-800/60 hover:border-brand-secondary/50 hover:text-brand-secondary hover:bg-brand-secondary/5 transition-all"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Library Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {libraryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-md rounded-3xl shadow-xl border border-slate-800/50 overflow-hidden hover:border-brand-primary/30 transition-all duration-300 group flex flex-col relative hover:-translate-y-2"
            >
              <div className="h-56 bg-slate-800/50 relative flex items-center justify-center overflow-hidden p-6">
                {/* Background Blur */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 blur-md scale-110 group-hover:scale-125 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.cover})` }}
                />
                
                {/* Book cover */}
                <div className="w-28 h-40 bg-slate-800 rounded-lg shadow-2xl relative z-10 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-white/10 flex-shrink-0">
                  <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-brand-secondary text-[10px] font-extrabold px-3 py-1 rounded-full border border-slate-700/50 z-20 shadow-lg">
                  {item.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-slate-900/0 to-slate-900/80">
                <h3 className="font-bold text-white mb-2 line-clamp-2 text-lg leading-snug group-hover:text-brand-secondary transition-colors">{item.title}</h3>
                <p className="text-xs font-semibold text-slate-400 mb-6 flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  {item.author}
                </p>
                <div className="mt-auto pt-4 flex justify-between items-center border-t border-slate-800/60">
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">{item.size}</span>
                  <button className="flex items-center gap-2 text-xs font-bold text-white bg-slate-800 hover:bg-brand-primary px-4 py-2 rounded-lg transition-colors shadow-sm group-hover:shadow-brand-primary/20">
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
  { title: 'Dasar Pemrograman Web dengan React 19', author: 'Tim Akademik HIMTIF', type: 'Modul', size: '2.4 MB', cover: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&q=80' },
  { title: 'Pengenalan Machine Learning dengan Python', author: 'Dr. Budi Utomo', type: 'Ebook', size: '5.1 MB', cover: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=200&q=80' },
  { title: 'Analisis Keamanan Jaringan IoT Menggunakan Metode X', author: 'Ahmad Fauzi', type: 'Skripsi', size: '1.8 MB', cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&q=80' },
  { title: 'Panduan UI/UX Design System', author: 'HIMTIF Design Team', type: 'Modul', size: '8.4 MB', cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80' },
];

export default DigitalLibrary;
