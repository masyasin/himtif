import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-brand-secondary selection:text-white">
      
      {/* 1. Hero Section (Tech, Modern, Cyber Vibe) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Mesh/Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 via-slate-950 to-slate-950 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/30 rounded-full blur-[120px] opacity-50 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md mb-8 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-bold text-slate-300 tracking-wider">HIMPUNAN MAHASISWA TEKNIK INFORMATIKA</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl"
          >
            Shaping Tomorrow's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-blue-400 to-purple-500">
              Tech Leaders
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Building an innovative digital ecosystem at Raharja University through <strong className="text-white">Coding, Leadership,</strong> and <strong className="text-white">Global Collaboration</strong>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/community" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-bold text-lg transition-all shadow-lg shadow-brand-primary/30 flex items-center justify-center gap-2">
              Explore Community
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link to="/showcase" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-white font-bold text-lg backdrop-blur-md transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Project Showcase
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Statistik Organisasi */}
      <section className="py-12 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
            {[
              { label: 'Mahasiswa Aktif', value: 1200, suffix: '+' },
              { label: 'Project Inovasi', value: 450, suffix: '+' },
              { label: 'Event Tahunan', value: 24, suffix: '' },
              { label: 'Alumni Sukses', value: 3000, suffix: '+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Program Kerja Unggulan */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Core <span className="text-brand-secondary">Initiatives</span></h2>
              <p className="text-slate-400 max-w-xl text-lg">Program kerja strategis yang dirancang untuk meningkatkan kompetensi teknis dan soft skill mahasiswa TI.</p>
            </div>
            <Link to="/proker" className="hidden md:flex items-center gap-2 text-brand-secondary font-bold hover:text-white transition-colors">
              Lihat Semua Program <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Tech Fest 2026', icon: '🚀', desc: 'Festival teknologi terbesar di kampus meliputi seminar AI, pameran inovasi IT, dan bursa kerja khusus startup teknologi.', tag: 'Event Organizer' },
              { title: 'HIMTIF Hackathon', icon: '💻', desc: 'Kompetisi coding 48 jam nonstop untuk memecahkan masalah nyata menggunakan teknologi web dan mobile.', tag: 'Akademik' },
              { title: 'IT Bootcamp', icon: '📚', desc: 'Pelatihan intensif 3 bulan menguasai Fullstack Web Development (MERN) dan UI/UX Design secara gratis.', tag: 'PSDM' }
            ].map((proker, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-brand-secondary hover:shadow-2xl hover:shadow-brand-secondary/20 transition-all group">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">{proker.icon}</div>
                <span className="text-xs font-bold text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">{proker.tag}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{proker.title}</h3>
                <p className="text-slate-400 leading-relaxed">{proker.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Fitur Spesial HIMTIF (Platform Ekosistem) */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">HIMTIF <span className="text-brand-secondary">Ecosystem</span></h2>
            <p className="text-slate-400 text-lg">Platform digital terintegrasi untuk mendukung seluruh aktivitas akademis dan non-akademis mahasiswa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Coding Arena', link: '/arena', desc: 'Asah logika algoritmamu', icon: '🏆' },
              { name: 'Tech Community', link: '/community', desc: 'Gabung klub riset IT', icon: '🌐' },
              { name: 'Project Showcase', link: '/showcase', desc: 'Repositori Inovasi', icon: '📂' },
              { name: 'Digital Library', link: '/library', desc: 'Akses modul & jurnal', icon: '📖' },
            ].map((feat, idx) => (
              <Link key={idx} to={feat.link} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:bg-brand-primary hover:border-brand-primary transition-colors group flex flex-col items-center text-center">
                <div className="text-4xl mb-4 group-hover:-translate-y-2 transition-transform">{feat.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.name}</h3>
                <p className="text-sm text-slate-500 group-hover:text-slate-300">{feat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sambutan Ketua */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-primary to-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-800 border-4 border-slate-700 overflow-hidden shrink-0 shadow-xl z-10">
              <img 
                src="https://instagram.fcgk27-2.fna.fbcdn.net/v/t51.75761-15/486545609_18308104570229906_6944442348093282696_n.webp?_nc_cat=103&ig_cache_key=MzU5NDc4MDUxNTY2MjAyMTk5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=OqrKVmGjxUYQ7kNvwHhYW0Z&_nc_oc=AdpgBXCnIcshOU12ljO0NvN5ZPznDCRiwDMbKQXlO0iAW0D4tzI9xxTrUTAkA42FYnZMgkFnhXy2joHifv4bDCY4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk27-2.fna&_nc_gid=uXPcnbcVqAWfl84ZLuZLpA&_nc_ss=7a22e&oh=00_Af_S112MjT3OE8FtJ7VgSuBI4HyxhgejzY6i_mXjxVseUg&oe=6A34BCAB" 
                alt="Foto Ketua Umum HIMTIF Rakan" 
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="z-10 text-center md:text-left">
              <svg className="w-12 h-12 text-brand-secondary/50 mb-6 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-xl md:text-2xl text-white font-medium italic mb-8 leading-relaxed">
                "Di era disrupsi digital, mahasiswa Teknik Informatika bukan lagi sekadar penonton, melainkan kreator dan inovator yang akan menentukan arah masa depan bangsa."
              </p>
              <div>
                <h4 className="text-2xl font-bold font-display text-brand-secondary">Rakan</h4>
                <p className="text-slate-400">Ketua Umum HIMTIF 2026/2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partner & Sponsor (Ticker) */}
      <section className="py-16 bg-slate-900 border-y border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Didukung Oleh Mitra Strategis Industri</h4>
        </div>
        <div className="flex w-[200%] animate-[slide_20s_linear_infinite]">
          {/* Ticker Content duplicated for smooth infinite scroll effect */}
          {[1, 2].map((group) => (
            <div key={group} className="flex justify-around w-1/2 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="text-2xl font-bold font-display">TECH CORP</div>
              <div className="text-2xl font-bold font-display">CODE.ID</div>
              <div className="text-2xl font-bold font-display">STARTUP INC</div>
              <div className="text-2xl font-bold font-display">DEV STUDIO</div>
              <div className="text-2xl font-bold font-display">CLOUD NET</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
