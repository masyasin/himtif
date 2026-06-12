import { motion } from 'framer-motion';

const Profil = () => {
  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950">
      
      {/* 1. Header Profil HIMTIF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Tentang <span className="text-brand-secondary">HIMTIF</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto"
          >
            Himpunan Mahasiswa Teknik Informatika <br/> Universitas Raharja
          </motion.p>
        </div>
      </section>

      {/* 2. Sejarah, Visi, Misi, Tujuan, Nilai */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Sejarah & Nilai */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
              <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-brand-secondary">📖</span> Sejarah HIMTIF
              </h2>
              <p className="text-slate-400 leading-relaxed">
                HIMTIF didirikan sebagai wadah pemersatu mahasiswa Teknik Informatika Universitas Raharja. Sejak awal berdirinya, HIMTIF terus berkomitmen untuk menjadi motor penggerak inovasi digital dan pengembangan karakter mahasiswa IT yang adaptif terhadap perkembangan zaman.
              </p>
            </div>

            <div className="bg-brand-primary p-8 rounded-3xl shadow-xl text-white">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                <span className="text-brand-secondary">⭐</span> Nilai Organisasi
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start"><span className="text-brand-accent font-bold">1.</span><span className="text-slate-300"><strong>Integritas</strong>: Menjunjung tinggi kejujuran dan etika akademik.</span></li>
                <li className="flex gap-3 items-start"><span className="text-brand-accent font-bold">2.</span><span className="text-slate-300"><strong>Kolaborasi</strong>: Mengutamakan kerja sama tim dan sinergi lintas angkatan.</span></li>
                <li className="flex gap-3 items-start"><span className="text-brand-accent font-bold">3.</span><span className="text-slate-300"><strong>Inovasi</strong>: Berani menciptakan solusi teknologi yang berdampak.</span></li>
                <li className="flex gap-3 items-start"><span className="text-brand-accent font-bold">4.</span><span className="text-slate-300"><strong>Empati</strong>: Peduli terhadap sesama dan masyarakat luas.</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Visi, Misi, Tujuan */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Visi</h2>
              <p className="text-slate-400">
                Menjadikan HIMTIF Universitas Raharja sebagai organisasi yang unggul, inovatif, dan adaptif dalam pengembangan teknologi informasi yang berdaya saing global, serta berlandaskan pada nilai-nilai Tridharma Perguruan Tinggi.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Misi</h2>
              <ul className="space-y-2 text-slate-400 list-disc list-inside">
                <li>Meningkatkan kualitas akademik dan *skill* praktis mahasiswa.</li>
                <li>Membangun ekosistem kolaborasi antar mahasiswa, dosen, dan industri.</li>
                <li>Menyelenggarakan kegiatan inovatif pendukung teknologi terkini.</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
              <h2 className="text-2xl font-display font-bold text-white mb-4">Tujuan</h2>
              <p className="text-slate-400">
                Mencetak lulusan Teknik Informatika yang tidak hanya cerdas secara teknis (Hard Skill), tetapi juga memiliki jiwa kepemimpinan, kemampuan komunikasi yang baik (Soft Skill), dan kesiapan menghadapi dunia profesional nyata.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Struktur Organisasi */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white">Struktur Organisasi</h2>
            <p className="text-slate-400 mt-2">Bagan hierarki kepengurusan inti HIMTIF.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-center">
            {struktur.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-950 border border-slate-800 p-6 rounded-2xl w-full sm:w-[45%] lg:w-[30%] hover:border-brand-secondary hover:shadow-md transition-all"
              >
                <div className="text-sm font-bold text-brand-secondary uppercase mb-2">Posisi</div>
                <h3 className="text-xl font-bold text-white">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Kepengurusan */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">Kepengurusan</h2>
            <p className="text-slate-400 mt-2">Mengenal lebih dekat wajah-wajah penggerak HIMTIF Periode 2026/2027.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pengurus.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-brand-secondary transition-colors group"
              >
                {/* Foto Placeholder */}
                <div className="h-64 bg-slate-700 w-full relative overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-slate-600 transform group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold opacity-50">FOTO</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-brand-secondary font-semibold text-sm mb-3">{person.jabatan}</p>
                  <p className="text-xs text-slate-400 mb-4 bg-slate-900 px-2 py-1 rounded inline-block border border-slate-700">Periode: {person.periode}</p>
                  <p className="text-slate-300 text-sm line-clamp-3 mb-6">
                    {person.profil}
                  </p>
                  
                  {/* Social Media */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700">
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-brand-secondary hover:text-white transition-colors">
                      {/* IG Icon placeholder */}
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-brand-secondary hover:text-white transition-colors">
                      {/* LinkedIn Icon placeholder */}
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

const struktur = [
  'Pembina HIMTIF', 
  'Ketua Umum', 
  'Wakil Ketua', 
  'Sekretaris', 
  'Bendahara', 
  'Divisi Akademik', 
  'Divisi Penelitian', 
  'Divisi Teknologi', 
  'Divisi Kewirausahaan',
  'Divisi Humas'
];

const pengurus = [
  { name: 'Dr. Budi Susanto', jabatan: 'Pembina', periode: '2025-2030', profil: 'Dosen tetap Teknik Informatika Universitas Raharja yang aktif mendampingi kegiatan mahasiswa.' },
  { name: 'Rakan', jabatan: 'Ketua Umum', periode: '2026/2027', profil: 'Mahasiswa semester 6 yang memiliki passion tinggi di bidang organisasi dan Cyber Security.' },
  { name: 'Siti Rahmawati', jabatan: 'Wakil Ketua', periode: '2026/2027', profil: 'Berpengalaman dalam manajemen event dan menjabat sebagai ketua pelaksana Tech Fest 2025.' },
  { name: 'Nadia Putri', jabatan: 'Sekretaris', periode: '2026/2027', profil: 'Mengelola seluruh administrasi organisasi dengan rapi dan sistematis menggunakan teknologi digital.' },
];

export default Profil;
