import { motion } from 'framer-motion';
import { useState } from 'react';

const AIAssistant = () => {
  const [messages, setMessages] = useState<{sender: 'ai' | 'user', text: string}[]>([
    { sender: 'ai', text: 'Halo! Saya HIMTIF AI Assistant. Ada yang bisa saya bantu mengenai informasi organisasi, jadwal kegiatan, materi IT, atau rekomendasi karir?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: 'Maaf, untuk saat ini sistem AI sedang dalam tahap pengembangan integrasi backend. Namun saya mencatat pertanyaan Anda!' }]);
    }, 1000);
  };

  return (
    <div className="pt-40 pb-16 min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-700 flex flex-col h-[80vh]">
          {/* Header */}
          <div className="bg-brand-primary p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900/20 rounded-full flex items-center justify-center text-2xl">🤖</div>
              <div>
                <h2 className="text-xl font-bold font-display leading-tight">HIMTIF AI Assistant</h2>
                <p className="text-sm text-brand-secondary font-semibold">Online • Siap membantu</p>
              </div>
            </div>
            <button className="text-slate-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </button>
          </div>

          {/* Chat Container */}
          <div className="flex-grow p-6 overflow-y-auto bg-slate-950 flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[75%] p-4 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-brand-secondary text-white rounded-br-sm' 
                    : 'bg-slate-900 border border-slate-700 text-slate-300 shadow-sm rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <form onSubmit={handleSend} className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanyakan sesuatu..." 
                className="flex-grow px-4 py-3 rounded-xl border border-slate-600 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all"
              />
              <button 
                type="submit" 
                className="bg-brand-primary hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md flex items-center justify-center"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIAssistant;
