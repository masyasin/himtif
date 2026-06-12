import { motion } from 'framer-motion';

const TechCommunity = () => {
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

              <button className="w-full bg-slate-900 hover:bg-brand-primary text-white font-bold py-3 rounded-xl transition-colors shadow-md flex justify-center items-center gap-2">
                Join Community
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </motion.div>
          ))}
        </div>

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
