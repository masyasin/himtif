import { motion } from 'framer-motion';
import { useState } from 'react';

const Aspirasi = () => {
  const [aspirasiType, setAspirasiType] = useState('Kritik');
  const [isAnonymous, setIsAnonymous] = useState(false);

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
            Aspirasi <span className="text-brand-secondary">Mahasiswa</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Suaramu sangat berarti! Sampaikan kritik, saran, atau keluhan terkait perkuliahan dan himpunan dengan aman dan transparan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Formulir Aspirasi */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-800 h-fit"
          >
            <h2 className="text-2xl font-bold font-display text-white mb-6">Kirim Aspirasi Baru</h2>
            
            <form className="space-y-6">
              {/* Jenis Aspirasi */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-3">Jenis Aspirasi</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Kritik', 'Saran', 'Keluhan Akademik'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAspirasiType(type)}
                      className={`py-3 px-2 rounded-xl text-sm font-bold border transition-all ${
                        aspirasiType === type 
                          ? 'bg-brand-primary text-white border-brand-primary shadow-md' 
                          : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-600 hover:bg-slate-950'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Opsi Identitas */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-3">Opsi Identitas</label>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setIsAnonymous(false)}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${!isAnonymous ? 'bg-slate-900 shadow text-brand-primary' : 'text-slate-500'}`}
                  >
                    Terbuka (Nama Asli)
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAnonymous(true)}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${isAnonymous ? 'bg-slate-800 shadow text-white' : 'text-slate-500'}`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Anonim
                  </button>
                </div>
              </div>

              {/* Input Nama (hanya jika Terbuka) */}
              {!isAnonymous && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Nama Lengkap</label>
                    <input type="text" placeholder="Masukkan nama Anda..." className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all bg-slate-950 focus:bg-slate-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">NIM (Opsional)</label>
                    <input type="text" placeholder="Masukkan NIM Anda..." className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all bg-slate-950 focus:bg-slate-900" />
                  </div>
                </div>
              )}

              {/* Text Area */}
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Pesan Aspirasi</label>
                <textarea 
                  rows={5} 
                  placeholder="Tuliskan detail kritik, saran, atau keluhan Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all bg-slate-950 focus:bg-slate-900 resize-none"
                ></textarea>
              </div>

              <button type="button" className="w-full bg-brand-secondary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex justify-center items-center gap-2">
                Kirim Aspirasi Sekarang
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </motion.div>

          {/* Publikasi Tracking Aspirasi */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl font-bold font-display text-white">Papan Aspirasi</h2>
                <p className="text-sm text-slate-500">Tracking transparansi status tindak lanjut aspirasi.</p>
              </div>
            </div>

            <div className="space-y-4">
              {trackingList.map((item, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* Header Card: Status & Tipe */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-700">
                      {item.type}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1 ${
                      item.status === 'Selesai' ? 'bg-green-900/20 text-green-600 border-green-800' :
                      item.status === 'Diproses' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                      'bg-amber-50 text-amber-600 border-amber-200'
                    }`}>
                      {item.status === 'Selesai' && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {item.status === 'Diproses' && <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
                      {item.status === 'Diterima' && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                      Status: {item.status}
                    </span>
                  </div>

                  {/* Isi Pesan */}
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    "{item.message}"
                  </p>

                  {/* Footer Card: Sender & Response */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${item.isAnonymous ? 'bg-slate-800 text-slate-300' : 'bg-brand-secondary/20 text-brand-secondary'}`}>
                        {item.isAnonymous ? '🕵️' : item.sender.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{item.sender}</div>
                        <div className="text-[10px] text-slate-500">{item.date}</div>
                      </div>
                    </div>
                    
                    {item.response && (
                      <div className="bg-slate-950 border border-slate-800 p-2 rounded-lg text-xs text-slate-400 flex items-start gap-2 max-w-[200px]">
                        <span className="font-bold text-brand-primary shrink-0">BEM:</span> 
                        <span className="line-clamp-1 italic">{item.response}</span>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-4 border-2 border-slate-700 border-dashed rounded-2xl text-slate-500 font-bold hover:bg-slate-100 hover:border-slate-600 transition-colors">
              Lihat Aspirasi Terdahulu
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const trackingList = [
  {
    type: 'Keluhan Akademik',
    status: 'Diproses',
    message: 'Server SIAM/SIAKAD sering down pada saat masa pengisian KRS, mohon untuk HIMTIF bisa menjembatani ke pihak IT kampus agar servernya diperbesar kapasitasnya.',
    sender: 'Mahasiswa Anonim',
    isAnonymous: true,
    date: '12 Jun 2026',
    response: 'Sedang didiskusikan dengan pihak BAAK dan Puskom.'
  },
  {
    type: 'Saran',
    status: 'Selesai',
    message: 'Adakan lebih banyak kompetisi internal seperti e-sport atau coding ringan agar keakraban antar angkatan semakin terjalin di luar acara formal.',
    sender: 'Andi Pratama',
    isAnonymous: false,
    date: '05 Jun 2026',
    response: 'Terima kasih, sudah dijadwalkan pada proker bulan depan.'
  },
  {
    type: 'Kritik',
    status: 'Diterima',
    message: 'Kondisi kebersihan di ruang sekre HIMTIF terkadang kurang terjaga setelah selesai rapat besar. Mohon ketegasan aturan piket harian.',
    sender: 'Mahasiswa Anonim',
    isAnonymous: true,
    date: '14 Jun 2026',
    response: null
  }
];

export default Aspirasi;
