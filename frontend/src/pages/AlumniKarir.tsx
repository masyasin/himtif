import { motion } from 'framer-motion';

const AlumniKarir = () => {
  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-sm rounded-full mb-6"
          >
            Karir & Alumni Hub
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Bangun Masa Depanmu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-emerald-400">Bersama Jaringan HIMTIF</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Temukan lowongan kerja, peluang magang, proyek freelance, serta inspirasi langsung dari para alumni sukses Teknik Informatika.
          </motion.p>
        </div>

        {/* Info Loker & Internship */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-2">Peluang Karir Terkini</h2>
              <p className="text-slate-400 text-sm">Update lowongan terbaru dari mitra perusahaan dan alumni.</p>
            </div>
            <button className="text-brand-secondary font-bold hover:text-brand-primary transition-colors text-sm flex items-center gap-2 group">
              Lihat Semua 
              <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="bg-slate-900/50 backdrop-blur-lg p-7 rounded-3xl shadow-xl hover:shadow-brand-primary/10 transition-all duration-300 border border-slate-800/60 hover:border-brand-primary/30 flex flex-col group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Subtle top accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${job.type === 'Internship' ? 'from-emerald-400 to-green-600' : 'from-brand-primary to-blue-600'} opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-md">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain rounded-xl" />
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm ${
                    job.type === 'Internship' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                  }`}>
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-secondary transition-colors">{job.title}</h3>
                <p className="text-slate-400 text-sm mb-1 font-medium">{job.company}</p>
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-8">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  {job.location}
                </div>
                <div className="mt-auto pt-5 border-t border-slate-800/50">
                  <button className="w-full bg-slate-800/80 hover:bg-gradient-to-r hover:from-brand-primary hover:to-indigo-600 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-brand-primary/40">
                    Lamar Sekarang
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Database Alumni Preview */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/5 to-transparent pointer-events-none" />

          <div className="text-center mb-14 relative z-10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Kisah Sukses Alumni</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Inspirasi perjalanan karir dari para lulusan Teknik Informatika yang kini telah sukses berkarya di industri teknologi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {alumni.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-slate-950/50 p-8 rounded-3xl flex flex-col sm:flex-row gap-8 items-center sm:items-start border border-slate-800/50 hover:border-brand-secondary/30 transition-colors group"
              >
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-brand-secondary transition-colors duration-300 z-10 relative">
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-brand-secondary/20 rounded-full blur-xl group-hover:bg-brand-secondary/40 transition-colors duration-300" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                  <div className="inline-block bg-brand-secondary/10 px-3 py-1 rounded-lg mb-4">
                    <p className="text-brand-secondary font-bold text-xs uppercase tracking-wider">{person.role} at <span className="text-white">{person.company}</span></p>
                  </div>
                  <div className="relative">
                    <span className="absolute -top-4 -left-3 text-4xl text-slate-700 opacity-50 font-serif">"</span>
                    <p className="text-slate-300 italic text-sm leading-relaxed relative z-10 pl-2">
                      {person.quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const jobs = [
  { title: 'Frontend Developer', company: 'TechNova Solutions', location: 'Jakarta Selatan', type: 'Full-Time', logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&q=80' },
  { title: 'UI/UX Design Intern', company: 'CreativeHub', location: 'Tangerang', type: 'Internship', logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&q=80' },
  { title: 'Backend Engineer (Node.js)', company: 'Startup Indo', location: 'Remote', type: 'Full-Time', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80' },
];

const alumni = [
  { name: 'Budi Santoso', role: 'Senior Software Engineer', company: 'Gojek', quote: 'HIMTIF telah memberikan saya pondasi kepemimpinan dan problem solving yang sangat relevan dengan dunia kerja profesional saat ini.', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
  { name: 'Siti Aminah', role: 'Data Scientist', company: 'Tokopedia', quote: 'Banyak wawasan teknologi baru yang saya dapatkan dari divisi akademik HIMTIF, sangat membantu karir saya dalam pengolahan data.', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
];

export default AlumniKarir;
