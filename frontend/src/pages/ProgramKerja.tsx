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

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-primary text-white shadow-md' 
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-100 border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Proker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProker.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col"
            >
              {/* Card Header (Category & Status) */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-400 border border-slate-700">
                  {item.category}
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  item.status === 'Selesai' ? 'bg-green-900/20 text-green-600 border-green-800' :
                  item.status === 'Berjalan' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                  'bg-amber-50 text-amber-600 border-amber-200'
                }`}>
                  {item.status}
                </span>
              </div>
              
              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">{item.desc}</p>

              {/* Details (Jadwal, PJ) */}
              <div className="space-y-3 mb-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                    📅
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold">Jadwal Pelaksanaan</div>
                    <div className="text-white font-medium">{item.jadwal}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    👤
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold">Penanggung Jawab</div>
                    <div className="text-white font-medium">{item.pj}</div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>Progress Pencapaian</span>
                  <span className="text-brand-secondary">{item.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full rounded-full ${
                      item.progress === 100 ? 'bg-green-900/200' : 'bg-brand-secondary'
                    }`}
                  ></motion.div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {filteredProker.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium">
            Belum ada program kerja untuk kategori ini.
          </div>
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
