import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Berita = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const categories = [
    'Semua', 'Berita HIMTI', 'Teknologi', 'Artificial Intelligence', 
    'Cyber Security', 'Programming', 'Data Science', 'Cloud Computing', 'Event Kampus'
  ];

  const filteredNews = news.filter(item => {
    const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Berita & <span className="text-brand-secondary">Artikel</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Pusat informasi, insight teknologi terkini, dan publikasi kegiatan mahasiswa Teknik Informatika.
          </motion.p>
        </div>

        {/* Pencarian (Search) */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul berita atau topik bahasan..." 
              className="w-full px-6 py-4 rounded-2xl border border-slate-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none text-base shadow-sm transition-all bg-slate-900"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Filter Kategori */}
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredNews.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-800 group flex flex-col"
              >
                <div className="h-52 bg-slate-200 relative overflow-hidden">
                  <div className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 bg-slate-300" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-bold text-brand-secondary shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-slate-500 mb-3 flex items-center gap-2">
                    <span>📅 {item.date}</span>
                    <span>•</span>
                    <span>✍️ {item.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-secondary transition-colors leading-snug">
                    {item.title}
                  </h2>
                  
                  <p className={`text-slate-400 text-sm mb-6 flex-grow ${expandedArticle === item.id ? '' : 'line-clamp-3'}`}>
                    {item.excerpt}
                  </p>
                  
                  {/* Footer Card: Komentar & Share */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                    {/* Share Buttons */}
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-slate-950 hover:bg-blue-100 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-colors tooltip-trigger relative group" title="Share ke Twitter/X">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-slate-950 hover:bg-green-900/50 text-slate-400 hover:text-green-600 flex items-center justify-center transition-colors tooltip-trigger relative group" title="Share via WhatsApp">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.335.101 11.895c-.002 2.09.544 4.133 1.587 5.93L.044 24l6.357-1.657c1.724.945 3.666 1.442 5.638 1.444h.004c6.582 0 11.942-5.337 11.945-11.898.001-3.176-1.229-6.166-3.468-8.44zm-8.473 18.23h-.003c-1.77 0-3.504-.474-5.021-1.37l-.36-.214-3.731.972.993-3.618-.235-.373C2.658 14.887 2.15 12.923 2.15 10.957c.002-5.433 4.453-9.851 9.923-9.851 2.651 0 5.143 1.026 7.018 2.887s2.912 4.341 2.91 6.969c-.002 5.435-4.453 9.851-9.882 9.851h-.069v.001zm5.436-7.425c-.298-.149-1.761-.864-2.034-.962-.273-.099-.472-.149-.671.149-.199.298-.769.962-.943 1.16-.174.199-.348.223-.646.075-.298-.149-1.258-.461-2.395-1.474-.885-.788-1.483-1.762-1.657-2.06-.174-.298-.018-.461.131-.61.134-.134.298-.347.447-.521.149-.174.199-.298.298-.497.099-.199.05-.373-.025-.521-.075-.149-.671-1.603-.918-2.193-.242-.577-.487-.499-.671-.508-.174-.009-.373-.009-.572-.009-.199 0-.522.075-.795.373-.273.298-1.043 1.018-1.043 2.482s1.068 2.877 1.217 3.076c.149.199 2.096 3.181 5.077 4.457.71.305 1.264.487 1.696.623.712.224 1.36.192 1.872.116.574-.084 1.761-.716 2.009-1.408.248-.691.248-1.284.174-1.408-.074-.124-.273-.199-.571-.348z"/></svg>
                      </button>
                    </div>

                    <div className="flex gap-4">
                      {/* Komentar Button */}
                      <button className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-brand-secondary transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        {item.comments}
                      </button>
                      
                      <button 
                        onClick={() => setExpandedArticle(expandedArticle === item.id ? null : item.id)}
                        className="text-brand-secondary font-bold text-xs hover:text-brand-primary transition-colors flex items-center gap-1"
                      >
                        {expandedArticle === item.id ? 'Tutup' : 'Baca Artikel'}
                        <svg className={`w-3 h-3 transition-transform ${expandedArticle === item.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Fake Comments Section (only shows when expanded) */}
                  <AnimatePresence>
                    {expandedArticle === item.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-slate-800 overflow-hidden"
                      >
                        <h4 className="text-sm font-bold text-white mb-3">Kolom Komentar</h4>
                        <div className="space-y-3 mb-4">
                          <div className="bg-slate-950 p-3 rounded-lg text-sm">
                            <span className="font-bold text-brand-primary">Mahasiswa_TI:</span> Info yang sangat bermanfaat! Terima kasih.
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <input type="text" placeholder="Tulis komentar..." className="w-full text-sm px-3 py-2 rounded-lg border border-slate-700 focus:border-brand-secondary outline-none" />
                          <button className="bg-brand-primary text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-slate-800">Kirim</button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">Pencarian Tidak Ditemukan</h3>
            <p className="text-slate-500">Coba gunakan kata kunci lain atau pilih kategori "Semua".</p>
          </div>
        )}

      </div>
    </div>
  );
};

const news = [
  {
    id: 1,
    title: 'Perkembangan Artificial Intelligence di Dunia Industri 2026',
    excerpt: 'AI tidak lagi menjadi sekadar teori, melainkan telah diimplementasikan dalam berbagai lini industri. Berikut ulasannya...',
    category: 'Artificial Intelligence',
    date: '12 Jun 2026',
    author: 'Tim Penulis AI',
    comments: 12
  },
  {
    id: 2,
    title: 'HIMTIF Sukses Menggelar Tech Fest 2026',
    excerpt: 'Pameran teknologi tahunan Universitas Raharja sukses mendatangkan lebih dari 500 peserta dan puluhan narasumber ahli.',
    category: 'Berita HIMTI',
    date: '10 Jun 2026',
    author: 'Humas HIMTIF',
    comments: 24
  },
  {
    id: 3,
    title: 'Mengenal React 19 dan Ekosistem Modern Web Development',
    excerpt: 'Sebuah ulasan mendalam mengenai fitur-fitur terbaru di React 19, server components, dan dampaknya pada performa aplikasi.',
    category: 'Programming',
    date: '05 Jun 2026',
    author: 'Divisi TI',
    comments: 8
  },
  {
    id: 4,
    title: 'Pentingnya Cyber Security Awareness bagi Mahasiswa',
    excerpt: 'Dalam dunia yang serba digital, pemahaman dasar tentang keamanan siber sangat penting untuk melindungi data pribadi dan sistem.',
    category: 'Cyber Security',
    date: '02 Jun 2026',
    author: 'Budi (CyberSec Club)',
    comments: 5
  },
  {
    id: 5,
    title: 'Road to Data Science: Tools yang Wajib Dikuasai',
    excerpt: 'Bagi Anda yang berminat berkarir sebagai Data Scientist, berikut adalah kumpulan tools, library, dan bahasa pemrograman esensial.',
    category: 'Data Science',
    date: '28 Mei 2026',
    author: 'DataLab UR',
    comments: 15
  },
  {
    id: 6,
    title: 'Workshop Pengenalan Cloud Computing dengan AWS',
    excerpt: 'Jangan lewatkan workshop gratis pengenalan infrastruktur cloud computing menggunakan layanan Amazon Web Services akhir bulan ini.',
    category: 'Event Kampus',
    date: '25 Mei 2026',
    author: 'Divisi Akademik',
    comments: 32
  }
];

export default Berita;
