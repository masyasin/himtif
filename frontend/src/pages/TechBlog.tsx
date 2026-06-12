import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TechBlog = () => {
  const [activeTab, setActiveTab] = useState('Explore');
  const [showCompose, setShowCompose] = useState(false);
  const [articleState, setArticleState] = useState<'Draft' | 'Review' | 'Publish'>('Draft');

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
            Tech <span className="text-brand-secondary">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Platform publikasi tulisan dari mahasiswa Teknik Informatika. Bagikan pengetahuan, *tutorial*, atau opini tentang teknologi terbaru.
          </motion.p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-slate-900 p-2 rounded-2xl shadow-sm border border-slate-700">
          <div className="flex gap-2 w-full sm:w-auto">
            <button 
              onClick={() => setActiveTab('Explore')}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'Explore' ? 'bg-slate-900 text-white shadow' : 'text-slate-400 hover:bg-slate-100'}`}
            >
              Explore Artikel
            </button>
            <button 
              onClick={() => setActiveTab('MyArticles')}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'MyArticles' ? 'bg-slate-900 text-white shadow' : 'text-slate-400 hover:bg-slate-100'}`}
            >
              Tulisan Saya
            </button>
          </div>
          <button 
            onClick={() => setShowCompose(true)}
            className="w-full sm:w-auto bg-brand-secondary hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md flex justify-center items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            Tulis Artikel
          </button>
        </div>

        {/* Tab Content: Explore */}
        {activeTab === 'Explore' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedArticles.map((article, idx) => (
              <div key={idx} className="bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-800 hover:shadow-xl transition-shadow group">
                <div className="h-48 bg-slate-200 w-full relative overflow-hidden">
                  <div className="w-full h-full bg-slate-300 transform group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/90 backdrop-blur rounded-full text-xs font-bold text-brand-primary">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-secondary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-400">
                        {article.author.charAt(0)}
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-white">{article.author}</div>
                        <div className="text-slate-500">{article.date}</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab Content: My Articles */}
        {activeTab === 'MyArticles' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900 rounded-3xl shadow-sm border border-slate-700 p-8">
            <h2 className="text-xl font-bold font-display text-white mb-6">Status Artikel Anda</h2>
            <div className="space-y-4">
              <div className="p-4 border border-slate-700 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="font-bold text-white text-lg">Membangun API Cepat dengan Hono.js</h3>
                  <div className="text-sm text-slate-500 mt-1">Terakhir diedit: 1 hari yang lalu</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-amber-50 text-amber-600 border border-amber-200 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    Menunggu Review BEM
                  </span>
                  <button className="text-brand-secondary font-bold text-sm hover:underline">Lihat</button>
                </div>
              </div>
              <div className="p-4 border border-slate-700 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-950">
                <div>
                  <h3 className="font-bold text-white text-lg">Konsep Dasar Git untuk Pemula</h3>
                  <div className="text-sm text-slate-500 mt-1">Dipublikasikan pada: 10 Mei 2026</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-900/20 text-green-600 border border-green-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Published
                  </span>
                  <button className="text-brand-secondary font-bold text-sm hover:underline">Statistik</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Modal Compose / Tulis Artikel */}
        <AnimatePresence>
          {showCompose && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-slate-900 rounded-3xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
              >
                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-950">
                  <h2 className="text-xl font-bold font-display text-white">Tulis Artikel Baru</h2>
                  <button onClick={() => setShowCompose(false)} className="text-slate-400 hover:text-slate-300 bg-slate-900 p-2 rounded-full shadow-sm border border-slate-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                {/* Workflow Progress Bar */}
                <div className="px-8 py-6 bg-slate-900 border-b border-slate-800 flex justify-center">
                  <div className="flex items-center w-full max-w-md">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${articleState === 'Draft' || articleState === 'Review' || articleState === 'Publish' ? 'bg-brand-secondary text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
                      <div className="text-xs font-bold text-slate-400 mt-2">Draft</div>
                    </div>
                    <div className={`flex-grow h-1 mx-2 rounded ${articleState === 'Review' || articleState === 'Publish' ? 'bg-brand-secondary' : 'bg-slate-200'}`}></div>
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${articleState === 'Review' || articleState === 'Publish' ? 'bg-brand-secondary text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
                      <div className="text-xs font-bold text-slate-400 mt-2">Review</div>
                    </div>
                    <div className={`flex-grow h-1 mx-2 rounded ${articleState === 'Publish' ? 'bg-brand-secondary' : 'bg-slate-200'}`}></div>
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${articleState === 'Publish' ? 'bg-green-900/200 text-white' : 'bg-slate-200 text-slate-500'}`}>3</div>
                      <div className="text-xs font-bold text-slate-400 mt-2">Publish</div>
                    </div>
                  </div>
                </div>

                {/* Editor Content */}
                <div className="flex-grow overflow-y-auto p-6 md:p-8 bg-slate-950">
                  {articleState === 'Draft' && (
                    <div className="space-y-6">
                      <input type="text" placeholder="Judul Artikel..." className="w-full text-3xl font-display font-bold bg-transparent border-none focus:ring-0 outline-none placeholder-slate-300" />
                      <div className="flex gap-4">
                        <select className="bg-slate-900 border border-slate-700 text-slate-400 rounded-lg px-4 py-2 text-sm outline-none">
                          <option>Pilih Tag/Kategori</option>
                          <option>Web Development</option>
                          <option>AI & Machine Learning</option>
                          <option>Cyber Security</option>
                        </select>
                        <button className="bg-slate-900 border border-slate-700 hover:bg-slate-100 text-slate-400 rounded-lg px-4 py-2 text-sm font-bold flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Tambah Cover Image
                        </button>
                      </div>
                      <textarea rows={10} placeholder="Mulai menulis cerita Anda di sini..." className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 text-slate-300 focus:border-brand-secondary outline-none resize-none leading-relaxed"></textarea>
                    </div>
                  )}

                  {articleState === 'Review' && (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">⏳</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Artikel Sedang Direview</h3>
                      <p className="text-slate-400 max-w-md mx-auto">
                        Artikel Anda telah dikirim ke tim kurator BEM/HIMTIF untuk diproses. Pengecekan mencakup kesesuaian bahasa, validitas teknis, dan etika penulisan.
                      </p>
                    </div>
                  )}

                  {articleState === 'Publish' && (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-900/50 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">🎉</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Artikel Berhasil Dipublikasikan!</h3>
                      <p className="text-slate-400 max-w-md mx-auto mb-6">
                        Selamat! Artikel Anda sekarang sudah dapat dibaca oleh seluruh mahasiswa dan umum di halaman Tech Blog.
                      </p>
                      <button onClick={() => {setShowCompose(false); setActiveTab('Explore');}} className="bg-brand-primary text-white px-6 py-3 rounded-xl font-bold">
                        Lihat Artikel
                      </button>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex justify-between items-center">
                  <div className="text-sm text-slate-500">
                    {articleState === 'Draft' ? 'Otomatis tersimpan beberapa detik yang lalu' : ''}
                  </div>
                  <div className="flex gap-3">
                    {articleState === 'Draft' && (
                      <>
                        <button onClick={() => setShowCompose(false)} className="px-6 py-3 rounded-xl font-bold text-slate-400 bg-slate-100 hover:bg-slate-200 transition-colors">Simpan Draft</button>
                        <button onClick={() => setArticleState('Review')} className="px-6 py-3 rounded-xl font-bold text-white bg-brand-secondary hover:bg-blue-600 transition-colors flex items-center gap-2">
                          Kirim untuk Review <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                      </>
                    )}
                    {articleState === 'Review' && (
                      <button onClick={() => setArticleState('Publish')} className="px-6 py-3 rounded-xl font-bold text-white bg-brand-primary hover:bg-slate-800 transition-colors tooltip" title="[Simulasi] Tombol ini biasanya hanya untuk Admin">
                        Simulasi Admin Approve
                      </button>
                    )}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

const publishedArticles = [
  {
    title: 'Berkenalan dengan React Server Components di Next.js 15',
    excerpt: 'Perubahan paradigma dari client-side rendering menuju server components secara default telah merevolusi cara kita membangun aplikasi web modern. Mari kita bahas implementasinya.',
    author: 'Fauzan Hakim',
    date: '10 Jun 2026',
    readTime: '5 min read',
    tag: 'Web Dev'
  },
  {
    title: 'Roadmap Belajar Data Science dari Nol',
    excerpt: 'Bingung harus mulai dari mana belajar Data Science? Artikel ini membahas tahapan belajar dari Python dasar, Statistik, hingga Machine Learning.',
    author: 'Siti Rahma',
    date: '08 Jun 2026',
    readTime: '8 min read',
    tag: 'Data Science'
  },
  {
    title: 'Mendeteksi Phishing Menggunakan Machine Learning',
    excerpt: 'Studi kasus implementasi algoritma klasifikasi sederhana menggunakan Scikit-Learn untuk mendeteksi URL phishing secara otomatis.',
    author: 'Budi Santoso',
    date: '05 Jun 2026',
    readTime: '10 min read',
    tag: 'Cyber Sec'
  }
];

export default TechBlog;
