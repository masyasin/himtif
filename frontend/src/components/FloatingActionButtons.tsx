import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 rounded-full flex items-center justify-center hover:bg-slate-800 hover:text-white hover:border-brand-secondary/50 shadow-xl hover:shadow-brand-secondary/20 transition-all group"
            title="Kembali ke atas"
          >
            <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/6281234567890" // Placeholder WA number
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_theme(colors.emerald.500/50)] text-white relative group"
        title="Hubungi Kami via WhatsApp"
      >
        {/* Pulse effect rings */}
        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.233-1.337a9.936 9.936 0 004.779 1.227h.004c5.505 0 9.988-4.478 9.989-9.985A9.957 9.957 0 0022 11.988c0-5.506-4.479-9.985-9.988-9.988zm0 16.892h-.003a8.28 8.28 0 01-4.255-1.171l-.306-.181-3.163.808.824-3.083-.199-.317a8.272 8.272 0 01-1.272-4.471c.001-4.57 3.723-8.291 8.296-8.291 2.214.001 4.296.865 5.86 2.43a8.27 8.27 0 012.43 5.861c-.001 4.568-3.722 8.29-8.292 8.29l.08-.005zm4.551-6.208c-.249-.125-1.474-.727-1.703-.81-.229-.083-.396-.125-.563.125-.167.25-.646.81-.792.977-.146.166-.292.187-.542.062-.25-.125-1.053-.388-2.006-1.238-.741-.662-1.241-1.48-1.387-1.73-.146-.25-.015-.386.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.563-1.354-.771-1.854-.203-.487-.41-.421-.563-.428-.146-.008-.312-.01-.479-.01-.167 0-.437.063-.666.313-.229.25-.875.854-.875 2.083 0 1.23.896 2.417 1.021 2.584.125.167 1.762 2.688 4.269 3.771.597.258 1.063.413 1.428.528.6.19 1.147.163 1.579.098.483-.072 1.474-.602 1.682-1.185.208-.583.208-1.083.146-1.185-.063-.102-.23-.165-.479-.29l-.001.002z" clipRule="evenodd" /></svg>
      </motion.a>
    </div>
  );
};

export default FloatingActionButtons;
