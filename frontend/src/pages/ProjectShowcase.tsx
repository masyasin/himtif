import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const categories = ['Semua', 'Tugas Akhir', 'Project Kuliah', 'Startup Mahasiswa'];

  const filteredProjects = projects.filter(item => 
    activeCategory === 'Semua' || item.category === activeCategory
  );

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Repository <span className="text-brand-secondary">Project</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Menampilkan inovasi Tugas Akhir, Project Kuliah, dan Startup dari mahasiswa Teknik Informatika Universitas Raharja.
          </motion.p>
        </div>

        {/* Top Bar: Categories & Upload Button */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  activeCategory === cat 
                    ? 'bg-brand-secondary text-white shadow-md' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setShowUploadModal(true)}
            className="bg-brand-primary hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2 shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Upload Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-brand-secondary/20 transition-all border border-slate-700 flex flex-col group"
              >
                {/* Thumbnail */}
                <div className="h-48 bg-slate-700 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                  <div className="w-full h-full flex items-center justify-center text-slate-500 font-bold tracking-widest text-lg bg-slate-600">
                    THUMBNAIL
                  </div>
                  <span className="absolute top-4 left-4 z-20 bg-brand-primary/90 backdrop-blur text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg border border-brand-secondary/30">
                    {project.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow z-20 relative -mt-4 bg-slate-800 rounded-t-3xl">
                  <h3 className="text-xl font-bold text-white mb-1 leading-tight">{project.title}</h3>
                  <p className="text-brand-secondary font-semibold text-sm mb-4">Oleh: {project.author}</p>
                  <p className="text-slate-300 text-sm mb-6 flex-grow line-clamp-3">{project.desc}</p>
                  
                  {/* Footer Links */}
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-700">
                    {project.github ? (
                      <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        GitHub
                      </a>
                    ) : (
                      <span className="text-slate-500 text-sm italic">No Source</span>
                    )}

                    {project.demo ? (
                      <a href={project.demo} className="flex items-center gap-1 text-sm font-bold text-brand-secondary hover:text-white transition-colors bg-brand-secondary/10 px-3 py-1.5 rounded-lg border border-brand-secondary/20 hover:bg-brand-secondary hover:border-brand-secondary">
                        Demo Web
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    ) : (
                      <span className="text-slate-500 text-sm italic">No Demo</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Upload Dokumentasi */}
        <AnimatePresence>
          {showUploadModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-xl w-full shadow-2xl relative"
              >
                <button 
                  onClick={() => setShowUploadModal(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-700 p-2 rounded-full"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                <h2 className="text-2xl font-bold font-display text-white mb-6">Upload Project Baru</h2>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Judul Project</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="Masukkan judul..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">Kategori</label>
                      <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-brand-secondary outline-none">
                        <option>Tugas Akhir</option>
                        <option>Project Kuliah</option>
                        <option>Startup Mahasiswa</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">Pembuat (NIM/Nama)</label>
                      <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="Nama..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Deskripsi Singkat</label>
                    <textarea rows={3} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-brand-secondary outline-none resize-none" placeholder="Jelaskan fungsionalitas utama..."></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">Link GitHub</label>
                      <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="https://github.com/..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">Link Demo (Opsional)</label>
                      <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="https://..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Upload File Dokumentasi/Paper (.pdf)</label>
                    <div className="w-full bg-slate-900 border-2 border-dashed border-slate-700 rounded-xl px-4 py-6 text-center text-slate-400 hover:border-brand-secondary hover:text-brand-secondary cursor-pointer transition-colors">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                      Klik atau Drag file PDF ke sini
                    </div>
                  </div>
                  <button type="button" onClick={() => setShowUploadModal(false)} className="w-full mt-6 bg-brand-secondary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
                    Kirim untuk Review
                  </button>
                </form>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

const projects = [
  { title: 'Siperkasa: Sistem Presensi Kuliah Berbasis Face Recognition', author: 'Budi Santoso', category: 'Tugas Akhir', desc: 'Sistem presensi terintegrasi menggunakan model deep learning untuk mendeteksi wajah mahasiswa secara real-time di kelas.', github: '#', demo: '#' },
  { title: 'LearnTech Edu', author: 'Nadia & Tim', category: 'Startup Mahasiswa', desc: 'Platform e-learning interaktif yang gamified untuk anak SMA, memenangkan pendanaan KemenkopUKM 2026.', github: null, demo: '#' },
  { title: 'Aplikasi Inventaris Barang Lab TI', author: 'Kelompok 4 (Web Dev)', category: 'Project Kuliah', desc: 'Tugas besar mata kuliah Pemrograman Web Lanjut. Menggunakan React, Express, dan MySQL.', github: '#', demo: null },
  { title: 'IoT Smart Farming System', author: 'Ahmad Fauzan', category: 'Tugas Akhir', desc: 'Implementasi IoT untuk penyiraman tomat otomatis berdasarkan sensor kelembapan tanah dan suhu udara yang bisa dipantau lewat mobile app.', github: '#', demo: '#' },
];

export default ProjectShowcase;
