import { motion } from 'framer-motion';
import { useState } from 'react';

const ProgramKerja = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = [
    'Semua', 'Akademik', 'Penelitian', 'Pengabdian Masyarakat', 
    'Teknologi', 'Kewirausahaan', 'Kompetisi', 'Kemahasiswaan'
  ];

  const filteredProker = activeCategory === 'Semua' 
    ? prokerList 
    : prokerList.filter(p => p.category === activeCategory);

  const getStatusStyle = (status: string) => {
    if (status === 'Selesai') return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', gradient: 'from-emerald-400 to-green-500' };
    if (status === 'Berjalan') return { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', gradient: 'from-blue-400 to-cyan-500' };
    return { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', gradient: 'from-amber-400 to-orange-500' };
  };

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 relative overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Program <span className="text-brand-secondary">Kerja</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Agenda dan inisiatif HIMTIF Universitas Raharja dalam mewujudkan visi misi organisasi.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-brand-primary to-indigo-600 text-white shadow-lg shadow-brand-primary/25 scale-105 border border-transparent' 
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Proker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProker.map((item, idx) => {
            const statusStyle = getStatusStyle(item.status);
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-slate-900/60 backdrop-blur-sm p-7 rounded-3xl border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-600 hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative overflow-hidden group"
              >
                {/* Accent Top Border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${statusStyle.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Card Header (Category & Status) */}
                <div className="flex justify-between items-start mb-5 mt-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shadow-sm">
                    {item.category}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border shadow-sm ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}>
                    {item.status}
                  </span>
                </div>
                
                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-brand-secondary transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">{item.desc}</p>

                {/* Details (Jadwal, PJ) */}
                <div className="space-y-4 mb-8 bg-slate-950/80 p-5 rounded-2xl border border-slate-800/50 shadow-inner">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">Jadwal Pelaksanaan</div>
                      <div className="text-slate-200 font-semibold">{item.jadwal}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">Penanggung Jawab</div>
                      <div className="text-slate-200 font-semibold">{item.pj}</div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-auto">
                  <div className="flex justify-between text-xs font-bold text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      Progress
                    </span>
                    <span className={statusStyle.text}>{item.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-800/80 rounded-full h-2.5 overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${statusStyle.gradient} shadow-sm relative`}
                    >
                      <div className="absolute inset-0 bg-white/20" />
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {filteredProker.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="text-5xl mb-4 opacity-50">📂</div>
            <p className="text-slate-400 font-medium text-lg">Belum ada program kerja untuk kategori ini.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
};

const prokerList = [
  {
    title: 'IT Bootcamp & Sertifikasi',
    category: 'Akademik',
    desc: 'Pelatihan intensif pengembangan web dan data science bersertifikat resmi.',
    status: 'Berjalan',
    jadwal: '10 Ags - 15 Sep 2026',
    pj: 'Divisi Akademik',
    progress: 45
  },
  {
    title: 'Jurnal Inovasi Mahasiswa',
    category: 'Penelitian',
    desc: 'Penerbitan jurnal internal yang memuat hasil penelitian tugas akhir mahasiswa.',
    status: 'Rencana',
    jadwal: 'November 2026',
    pj: 'Divisi Penelitian',
    progress: 10
  },
  {
    title: 'HIMTIF Goes to School',
    category: 'Pengabdian Masyarakat',
    desc: 'Mengadakan pelatihan literasi digital dasar di SMA/SMK se-Tangerang.',
    status: 'Selesai',
    jadwal: 'Mei 2026',
    pj: 'Divisi Humas',
    progress: 100
  },
  {
    title: 'HIMTIF Smart Campus Platform',
    category: 'Teknologi',
    desc: 'Pengembangan portal digital HIMTIF yang terintegrasi dengan fitur AI.',
    status: 'Berjalan',
    jadwal: 'Juni - Agustus 2026',
    pj: 'Divisi TI',
    progress: 80
  },
  {
    title: 'Bazar Digital Creative',
    category: 'Kewirausahaan',
    desc: 'Pameran produk wirausaha mahasiswa yang berbasis pada teknologi digital.',
    status: 'Rencana',
    jadwal: 'Oktober 2026',
    pj: 'Divisi Kewirausahaan',
    progress: 0
  },
  {
    title: 'Internal Coding Challenge',
    category: 'Kompetisi',
    desc: 'Kompetisi coding antar angkatan untuk mencari bibit unggul perwakilan kampus.',
    status: 'Berjalan',
    jadwal: 'Agustus 2026',
    pj: 'BPH & Akademik',
    progress: 30
  },
  {
    title: 'Makrab Mahasiswa Baru',
    category: 'Kemahasiswaan',
    desc: 'Malam keakraban untuk menyambut keluarga baru mahasiswa Teknik Informatika.',
    status: 'Selesai',
    jadwal: 'Februari 2026',
    pj: 'Divisi PSDM',
    progress: 100
  }
];

export default ProgramKerja;
