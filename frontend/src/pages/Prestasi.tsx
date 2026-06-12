import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Prestasi = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeMedia, setActiveMedia] = useState<Record<number, string>>({}); // Tracks active tab for each card

  const categories = [
    'Semua', 'Akademik', 'Nasional', 'Internasional', 
    'Kompetisi IT', 'Startup', 'Penelitian'
  ];

  const filteredPrestasi = achievements.filter(item => 
    activeCategory === 'Semua' || item.category === activeCategory
  );

  const toggleMedia = (cardId: number, mediaType: string) => {
    setActiveMedia(prev => ({ ...prev, [cardId]: mediaType }));
  };

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Prestasi <span className="text-brand-secondary">Mahasiswa</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Daftar penghargaan dan pencapaian membanggakan dari mahasiswa Teknik Informatika Universitas Raharja di berbagai tingkat.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-primary text-white shadow-md' 
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-100 border border-slate-700 hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievements List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredPrestasi.map((item, idx) => {
              const currentMedia = activeMedia[item.id] || 'Foto';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-800 group flex flex-col"
                >
                  {/* Media Viewer Area */}
                  <div className="h-64 bg-slate-900 relative overflow-hidden flex flex-col">
                    {/* The Media */}
                    <div className="flex-grow flex items-center justify-center bg-slate-800 relative">
                      {currentMedia === 'Foto' && (
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-slate-300 font-bold text-2xl tracking-widest">FOTO BERSAMA</div>
                      )}
                      {currentMedia === 'Sertifikat' && (
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-800 to-amber-600 flex items-center justify-center text-amber-200 font-bold text-2xl tracking-widest">SERTIFIKAT PENGHARGAAN</div>
                      )}
                      {currentMedia === 'Dokumentasi' && (
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 to-blue-600 flex items-center justify-center text-blue-200 font-bold text-2xl tracking-widest">VIDEO / DOKUMENTASI LOMBA</div>
                      )}
                    </div>
                    
                    {/* Media Tabs */}
                    <div className="bg-slate-900/80 backdrop-blur-md px-4 py-3 flex gap-2 justify-center absolute bottom-0 w-full">
                      {['Foto', 'Sertifikat', 'Dokumentasi'].map((media) => (
                        <button
                          key={media}
                          onClick={() => toggleMedia(item.id, media)}
                          className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${
                            currentMedia === media ? 'bg-brand-secondary text-white' : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                          }`}
                        >
                          {media}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-bold px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-lg">
                        {item.year}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-brand-secondary font-semibold mb-4 text-sm">Oleh: {item.students}</p>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">{item.desc}</p>

                    {/* Footer / Link */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <div className="text-sm font-bold text-slate-400">Penyelenggara: <span className="text-slate-300">{item.organizer}</span></div>
                      <button className="text-brand-secondary hover:text-brand-primary transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredPrestasi.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium">
            Belum ada data prestasi untuk kategori ini.
          </div>
        )}

      </div>
    </div>
  );
};

const achievements = [
  {
    id: 1,
    title: 'Juara 1 Gemastik Divisi Pengembangan Perangkat Lunak',
    category: 'Nasional',
    year: '2025',
    students: 'Tim CodeX (Budi, Siti, Anton)',
    desc: 'Berhasil mengalahkan lebih dari 100 tim dari universitas seluruh Indonesia dengan inovasi aplikasi deteksi stunting.',
    organizer: 'Puspresnas Kemdikbudristek'
  },
  {
    id: 2,
    title: 'Gold Medal di International Youth Invention Award',
    category: 'Internasional',
    year: '2026',
    students: 'Andi & Team',
    desc: 'Meraih medali emas melalui penelitian "Smart Agriculture System" berbasis Internet of Things yang mampu menghemat air hingga 40%.',
    organizer: 'IYIA'
  },
  {
    id: 3,
    title: 'Pendanaan Startup Mahasiswa Terpilih',
    category: 'Startup',
    year: '2026',
    students: 'Nadia Putri (Founder LearnTech)',
    desc: 'Startup edutech bentukan mahasiswa HIMTIF mendapatkan pendanaan tahap awal sebesar Rp 50 Juta dari program inkubasi.',
    organizer: 'KemenkopUKM'
  },
  {
    id: 4,
    title: 'Juara 2 Capture The Flag (CTF) Competition',
    category: 'Kompetisi IT',
    year: '2025',
    students: 'HIMTIF Cyber Team',
    desc: 'Menunjukkan kemampuan penetration testing dan keamanan sistem terbaik kedua se-Pulau Jawa.',
    organizer: 'CyberSec Indo'
  },
  {
    id: 5,
    title: 'Publikasi Jurnal Terindeks Scopus (Q2)',
    category: 'Penelitian',
    year: '2026',
    students: 'Fauzan Hakim',
    desc: 'Berhasil mempublikasikan hasil tugas akhir mengenai "Optimization of Deep Learning Model for Image Recognition" di jurnal internasional bereputasi.',
    organizer: 'IEEE Access'
  },
  {
    id: 6,
    title: 'Lulusan Terbaik (Cum Laude) Fakultas IT',
    category: 'Akademik',
    year: '2026',
    students: 'Rina Wijayanti',
    desc: 'Meraih predikat mahasiswa lulusan terbaik Fakultas Teknik Informasi dengan IPK sempurna 4.00.',
    organizer: 'Universitas Raharja'
  }
];

export default Prestasi;
