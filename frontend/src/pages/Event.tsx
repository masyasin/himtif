import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Event = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = [
    'Semua', 'Seminar', 'Workshop', 'Webinar', 
    'Bootcamp', 'Pelatihan', 'Lomba', 'Hackathon'
  ];

  const filteredEvents = events.filter(item => 
    activeCategory === 'Semua' || item.type === activeCategory
  );

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
            Event & <span className="text-brand-secondary">Kegiatan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Ikuti berbagai kegiatan seru dari HIMTIF. Dapatkan ilmu baru, bangun relasi, dan klaim e-certificate di setiap acara.
          </motion.p>
        </div>

        {/* Categories Filter */}
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

        {/* Event List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={event.id}
                className="bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-800 hover:shadow-xl transition-all flex flex-col md:flex-row gap-6 relative overflow-hidden group"
              >
                {/* Left Date / Icon Box */}
                <div className="flex flex-row md:flex-col items-center justify-between md:justify-start bg-slate-950 border border-slate-800 rounded-2xl p-4 md:min-w-[120px] shrink-0 gap-4 md:gap-0 shadow-inner">
                  <div className="text-center">
                    <span className="text-sm font-bold text-slate-300 uppercase block tracking-wider">{event.month}</span>
                    <span className="text-4xl font-display font-bold text-white block my-1 drop-shadow-md">{event.day}</span>
                  </div>
                  <div className="md:mt-4 bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/20 text-xs font-extrabold px-3 py-1.5 rounded-lg w-full text-center tracking-wide shadow-sm">
                    {event.type}
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col flex-grow">
                  {event.registered >= event.quota && (
                    <div className="mb-2 w-max bg-red-500/10 text-red-500 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-red-500/20 uppercase tracking-wider">
                      Kuota Penuh
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
                  
                  {/* Waktu & Lokasi */}
                  <div className="flex flex-col gap-2 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {event.location}
                    </span>
                  </div>

                  {/* Badges: Sertifikat & QR */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.hasCertificate && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-green-400 bg-green-900/50 px-2 py-1 rounded">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        E-Certificate
                      </span>
                    )}
                    {event.hasQrPresence && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                        QR Absensi
                      </span>
                    )}
                  </div>

                  {/* Kuota */}
                  <div className="mb-6 mt-auto">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-500">Kuota Peserta</span>
                      <span className={event.registered >= event.quota ? 'text-red-500' : 'text-brand-secondary'}>
                        {event.registered} / {event.quota}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${event.registered >= event.quota ? 'bg-red-900/200' : 'bg-brand-secondary'}`} 
                        style={{ width: `${Math.min((event.registered / event.quota) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-800">
                    <button 
                      disabled={event.registered >= event.quota}
                      className={`flex-grow font-bold py-2.5 rounded-xl transition-all flex justify-center items-center gap-2 ${
                        event.registered >= event.quota 
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                          : 'bg-brand-primary hover:bg-slate-800 text-white shadow-md hover:shadow-lg'
                      }`}
                    >
                      Pendaftaran Online
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                    
                    <button className="w-12 h-12 flex items-center justify-center shrink-0 rounded-xl border border-slate-700 text-slate-500 hover:text-amber-500 hover:border-amber-200 hover:bg-amber-50 transition-all tooltip-trigger" title="Set Reminder Email">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-white mb-2">Belum ada Event</h3>
            <p className="text-slate-500">Tidak ada agenda untuk kategori ini pada waktu dekat.</p>
          </div>
        )}

      </div>
    </div>
  );
};

const events = [
  {
    id: 1,
    type: 'Bootcamp',
    month: 'Ags',
    day: '15',
    title: 'HIMTIF CodeCamp: Master Modern Web Development with React & Node.js',
    time: '09:00 - 15:00 WIB',
    location: 'Lab Terpadu Fakultas Teknik',
    quota: 50,
    registered: 50,
    hasCertificate: true,
    hasQrPresence: true
  },
  {
    id: 2,
    type: 'Seminar',
    month: 'Sep',
    day: '10',
    title: 'TechTalks: Peran AI dalam Membentuk Masa Depan Industri Teknologi',
    time: '13:00 - 16:00 WIB',
    location: 'Auditorium Utama Universitas',
    quota: 250,
    registered: 250,
    hasCertificate: true,
    hasQrPresence: true
  },
  {
    id: 3,
    type: 'Hackathon',
    month: 'Okt',
    day: '20',
    title: 'HIMTIF Innovation Hackathon 2026: Solusi Cerdas untuk Smart City',
    time: '24 Jam (Menginap)',
    location: 'Coworking Space Inovasi',
    quota: 40,
    registered: 25,
    hasCertificate: true,
    hasQrPresence: false
  },
  {
    id: 4,
    type: 'Workshop',
    month: 'Nov',
    day: '05',
    title: 'Hands-on Workshop: Data Analytics Fundamental with Python',
    time: '10:00 - 14:00 WIB',
    location: 'Google Meet (Online)',
    quota: 150,
    registered: 120,
    hasCertificate: true,
    hasQrPresence: true
  },
  {
    id: 5,
    type: 'Lomba',
    month: 'Nov',
    day: '15',
    title: 'National IT Competition: UI/UX Design & Competitive Programming',
    time: 'Batas Pengumpulan 23:59 WIB',
    location: 'Online Submission',
    quota: 500,
    registered: 340,
    hasCertificate: true,
    hasQrPresence: false
  },
  {
    id: 6,
    type: 'Webinar',
    month: 'Des',
    day: '01',
    title: 'DevOps & Cloud Computing 101: Membangun Infrastruktur Skalabel',
    time: '19:00 - 21:00 WIB',
    location: 'Zoom Meeting',
    quota: 300,
    registered: 290,
    hasCertificate: true,
    hasQrPresence: true
  }
];

export default Event;
