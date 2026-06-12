import { motion } from 'framer-motion';

const AlumniKarir = () => {
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
            Alumni & <span className="text-brand-secondary">Karir</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Jejaring profesional alumni HIMTIF dan informasi lowongan kerja, internship, serta peluang freelance.
          </motion.p>
        </div>

        {/* Info Loker & Internship */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-display font-bold text-white">Peluang Karir Terkini</h2>
            <button className="text-brand-secondary font-semibold hover:text-brand-primary transition-colors text-sm">Lihat Semua &rarr;</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-800 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-400">
                    {job.company.substring(0, 1)}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    job.type === 'Internship' ? 'bg-green-900/50 text-green-400' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{job.company} • {job.location}</p>
                <div className="mt-auto pt-4 border-t border-slate-800">
                  <button className="w-full bg-slate-950 hover:bg-brand-primary hover:text-white text-slate-300 font-semibold py-2 rounded-xl transition-colors">
                    Lamar Sekarang
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Database Alumni Preview */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-display font-bold text-white">Kisah Sukses Alumni</h2>
            <p className="text-slate-400 mt-2">Inspirasi karir dari para lulusan Teknik Informatika Universitas Raharja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumni.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-center sm:items-start"
              >
                <div className="w-24 h-24 rounded-full bg-slate-200 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-brand-secondary font-medium text-sm mb-3">{person.role} at {person.company}</p>
                  <p className="text-slate-400 italic text-sm">"{person.quote}"</p>
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
  { title: 'Frontend Developer', company: 'TechNova Solutions', location: 'Jakarta Selatan', type: 'Full-Time' },
  { title: 'UI/UX Design Intern', company: 'CreativeHub', location: 'Tangerang', type: 'Internship' },
  { title: 'Backend Engineer (Node.js)', company: 'Startup Indo', location: 'Remote', type: 'Full-Time' },
];

const alumni = [
  { name: 'Budi Santoso', role: 'Senior Software Engineer', company: 'Gojek', quote: 'HIMTIF telah memberikan saya pondasi kepemimpinan dan problem solving yang sangat relevan dengan dunia kerja profesional.' },
  { name: 'Siti Aminah', role: 'Data Scientist', company: 'Tokopedia', quote: 'Banyak wawasan teknologi baru yang saya dapatkan dari divisi akademik HIMTIF, sangat membantu karir saya.' },
];

export default AlumniKarir;
