import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TechCommunity = () => {
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);

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
            HIMTIF Tech <span className="text-brand-secondary">Community</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Pilih komunitas spesialisasi yang sesuai dengan minatmu. Belajar bersama, diskusi, dan bangun portofolio dengan mentor yang ahli di bidangnya.
          </motion.p>
        </div>

        {/* Community Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {communities.map((comm, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-800 hover:shadow-xl hover:border-brand-secondary transition-all flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {comm.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{comm.title}</h3>
                  <p className="text-sm font-bold text-brand-secondary">{comm.members} Members</p>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow">{comm.desc}</p>
              
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
                <div className="text-xs font-bold text-slate-500 mb-1">Topik Pembahasan:</div>
                <div className="flex flex-wrap gap-2">
                  {comm.topics.map((topic, tIdx) => (
                    <span key={tIdx} className="bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setSelectedCommunity(comm.title)}
                className="w-full bg-slate-900 hover:bg-brand-primary text-white font-bold py-3 rounded-xl transition-colors shadow-md flex justify-center items-center gap-2"
              >
                Join Community
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Join Community Modal */}
        <AnimatePresence>
          {selectedCommunity && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                onClick={() => setSelectedCommunity(null)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-slate-900 rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-700 z-10"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-display text-white pr-8">
                    Join <span className="text-brand-secondary">{selectedCommunity}</span>
                  </h3>
                  <button onClick={() => setSelectedCommunity(null)} className="text-slate-500 hover:text-rose-500 transition-colors absolute top-8 right-8 bg-slate-800 hover:bg-rose-500/10 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <form className="space-y-5" onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert(`Pendaftaran ke komunitas ${selectedCommunity} berhasil dikirim! Silakan tunggu email konfirmasi dari kami.`); 
                  setSelectedCommunity(null); 
                }}>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Nama Lengkap</label>
                    <input type="text" required placeholder="Masukkan nama Anda..." className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all bg-slate-950 focus:bg-slate-900 text-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">NIM</label>
                      <input type="text" required placeholder="Contoh: 2601001" className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all bg-slate-950 focus:bg-slate-900 text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-300 mb-2">Angkatan</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all bg-slate-950 focus:bg-slate-900 text-slate-300">
                        <option value="">Pilih...</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Alasan Bergabung</label>
                    <textarea rows={3} required placeholder="Ceritakan motivasi Anda..." className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all bg-slate-950 focus:bg-slate-900 text-white resize-none"></textarea>
                  </div>
                  
                  <div className="flex gap-3 pt-6 border-t border-slate-800">
                    <button type="button" onClick={() => setSelectedCommunity(null)} className="flex-1 py-3.5 px-4 rounded-xl font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700">
                      Batal
                    </button>
                    <button type="submit" className="flex-1 py-3.5 px-4 rounded-xl font-bold text-white bg-brand-secondary hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30">
                      Kirim Formulir
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const communities = [
  { 
    title: 'Web Development', 
    icon: '💻', 
    members: 245, 
    desc: 'Fokus pada pengembangan website modern dari frontend hingga backend. Termasuk arsitektur, database, dan web performance.', 
    topics: ['React', 'Node.js', 'Next.js', 'Tailwind'] 
  },
  { 
    title: 'Mobile Development', 
    icon: '📱', 
    members: 180, 
    desc: 'Belajar membuat aplikasi native maupun cross-platform untuk platform Android dan iOS.', 
    topics: ['Flutter', 'Kotlin', 'React Native'] 
  },
  { 
    title: 'UI/UX Design', 
    icon: '🎨', 
    members: 156, 
    desc: 'Merancang antarmuka pengguna yang estetis dan menciptakan pengalaman pengguna yang intuitif.', 
    topics: ['Figma', 'Wireframing', 'Prototyping'] 
  },
  { 
    title: 'AI & Machine Learning', 
    icon: '🤖', 
    members: 120, 
    desc: 'Eksplorasi kecerdasan buatan, pemrosesan bahasa alami (NLP), dan computer vision.', 
    topics: ['Python', 'TensorFlow', 'PyTorch'] 
  },
  { 
    title: 'Cyber Security', 
    icon: '🛡️', 
    members: 95, 
    desc: 'Komunitas yang mendalami ethical hacking, penetration testing, dan keamanan sistem informasi.', 
    topics: ['Kali Linux', 'PenTest', 'Cryptography'] 
  },
  { 
    title: 'Data Science', 
    icon: '📊', 
    members: 110, 
    desc: 'Menganalisis big data untuk menghasilkan insight berharga bagi pengambilan keputusan bisnis.', 
    topics: ['Pandas', 'SQL', 'Data Viz'] 
  },
  { 
    title: 'Internet of Things', 
    icon: '🔌', 
    members: 85, 
    desc: 'Menggabungkan perangkat keras (hardware) dengan perangkat lunak (software) untuk otomatisasi.', 
    topics: ['Arduino', 'Raspberry Pi', 'Sensors'] 
  }
];

export default TechCommunity;
