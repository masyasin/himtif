import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const AIAssistant = () => {
  const [messages, setMessages] = useState<{sender: 'ai' | 'user', text: string}[]>([
    { sender: 'ai', text: 'Halo! Saya HIMTIF AI Assistant. Ada yang bisa saya bantu mengenai informasi organisasi, jadwal kegiatan, materi IT, atau rekomendasi karir?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    "Jadwal Event HIMTIF",
    "Cara Daftar Komunitas",
    "Struktur Organisasi",
    "Saran Akademik"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response logic
    setTimeout(() => {
      let reply = "Maaf, untuk saat ini sistem AI sedang dalam tahap pengembangan. Namun pesan Anda sudah dicatat!";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("event") || lowerText.includes("kegiatan") || lowerText.includes("jadwal")) {
        reply = "Ada beberapa event yang akan datang! Terdekat ada HIMTIF CodeCamp bulan Agustus dan Seminar TechTalks bulan September. Kamu bisa cek selengkapnya di menu Event ya!";
      } else if (lowerText.includes("komunitas") || lowerText.includes("daftar")) {
        reply = "HIMTIF memiliki berbagai komunitas seperti Web Dev, UI/UX, Mobile Dev, dan AI. Kamu bisa bergabung lewat menu Tech Community dan langsung mengisi formulir pendaftarannya di sana.";
      } else if (lowerText.includes("halo") || lowerText.includes("hai")) {
        reply = "Halo juga! Ada yang bisa HIMTIF AI bantu hari ini?";
      } else if (lowerText.includes("struktur") || lowerText.includes("pengurus")) {
        reply = "Struktur kepengurusan HIMTIF terdiri dari BPH (Badan Pengurus Harian) dan beberapa divisi seperti Ristek, Kominfo, PSDM, dan Kewirausahaan. Info detailnya bisa dilihat di menu Profil.";
      } else if (lowerText.includes("akademik") || lowerText.includes("saran")) {
        reply = "Jika kamu punya keluhan atau saran akademik (seperti SIAKAD error atau perbaikan fasilitas lab), kamu bisa langsung mengirimkannya melalui form di menu Aspirasi. Kami akan bantu teruskan ke pihak kampus!";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col h-[80vh] relative">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-primary to-indigo-700 p-6 text-white flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-inner">🤖</div>
              <div>
                <h2 className="text-xl font-bold font-display leading-tight flex items-center gap-2 text-white">
                  HIMTIF AI 
                  <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">Beta</span>
                </h2>
                <p className="text-sm text-indigo-100 font-semibold flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Online • Siap membantu
                </p>
              </div>
            </div>
            <button className="text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </button>
          </div>

          {/* Chat Container */}
          <div className="flex-grow p-6 overflow-y-auto bg-slate-950 flex flex-col gap-5 relative">
            
            {/* Background Logo Overlay (Optional decorative) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <span className="text-[20rem]">🤖</span>
            </div>

            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
                >
                  <div className={`max-w-[80%] md:max-w-[70%] p-4 rounded-2xl leading-relaxed text-sm shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-brand-primary text-white rounded-br-sm' 
                      : 'bg-slate-900 border border-slate-700 text-slate-300 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex justify-start relative z-10"
                >
                  <div className="bg-slate-900 border border-slate-700 p-4 rounded-2xl rounded-bl-sm flex gap-1.5 items-center h-[52px]">
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions & Input Area */}
          <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col gap-3">
            
            {/* Quick Actions Carousel */}
            {messages.length === 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
              >
                {quickActions.map((action, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(action)}
                    className="whitespace-nowrap px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-brand-secondary text-xs font-bold rounded-full transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </motion.div>
            )}

            <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanyakan sesuatu seputar HIMTIF..." 
                className="flex-grow px-5 py-3.5 rounded-xl border border-slate-700 bg-slate-950 text-white placeholder-slate-500 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all shadow-inner"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                className="bg-brand-primary hover:bg-blue-600 disabled:bg-slate-800 disabled:text-slate-500 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span className="hidden sm:inline">Kirim</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AIAssistant;
