import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu mobile & dropdown saat pindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navGroups = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '/profil' },
    { 
      name: 'Kegiatan', 
      items: [
        { name: 'Program Kerja', href: '/proker' },
        { name: 'Event', href: '/event' },
        { name: 'Galeri', href: '/galeri' },
      ] 
    },
    { 
      name: 'Akademik', 
      items: [
        { name: 'Prestasi Mahasiswa', href: '/prestasi' },
        { name: 'Alumni & Karir', href: '/karir' },
        { name: 'Berita', href: '/berita' },
      ] 
    },
    { 
      name: 'Layanan', 
      items: [
        { name: 'Aspirasi', href: '/aspirasi' },
        { name: 'Download Center', href: '/download' },
        { name: 'Digital Library', href: '/library' },
        { name: 'E-Certificate', href: '/certificate' },
      ] 
    },
    { 
      name: 'Inovasi TI', 
      items: [
        { name: 'Tech Community', href: '/community' },
        { name: 'Tech Blog', href: '/blog' },
        { name: 'Coding Arena', href: '/arena' },
        { name: 'Project Showcase', href: '/showcase' },
        { name: 'AI Assistant', href: '/ai' },
      ] 
    },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-800' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50 group">
            <img src="/HIMTIF.png" alt="Logo HIMTIF" className="w-12 h-auto group-hover:scale-105 transition-transform drop-shadow-md" />
            <span className="font-display font-bold text-xl tracking-tight text-white drop-shadow-sm">
              HIM<span className="text-brand-secondary">TIF</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navGroups.map((group, idx) => (
              <div 
                key={idx} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {group.href ? (
                  <Link 
                    to={group.href}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      location.pathname === group.href 
                        ? 'text-brand-secondary bg-brand-secondary/10' 
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {group.name}
                  </Link>
                ) : (
                  <button 
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1 ${
                      activeDropdown === group.name
                        ? 'text-brand-secondary bg-brand-secondary/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {group.name}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === group.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                )}

                {/* Dropdown Menu (Desktop) */}
                {group.items && (
                  <AnimatePresence>
                    {activeDropdown === group.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 bg-slate-900 rounded-2xl shadow-xl border border-slate-700 py-2 overflow-hidden"
                      >
                        {group.items.map((item, iIdx) => (
                          <Link 
                            key={iIdx}
                            to={item.href}
                            className={`block px-5 py-2.5 text-sm font-bold transition-colors ${
                              location.pathname === item.href 
                                ? 'text-brand-secondary bg-brand-secondary/10 border-l-2 border-brand-secondary' 
                                : 'text-slate-400 hover:text-white hover:bg-slate-800 border-l-2 border-transparent'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Link to="/login" className="ml-4 bg-brand-primary hover:bg-brand-secondary border border-brand-primary hover:border-brand-secondary text-white px-6 py-2 rounded-xl text-sm font-bold transition-colors shadow-md">
              Login Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4 z-50">
            <Link to="/login" className="bg-brand-primary text-white px-4 py-2 rounded-lg text-xs font-bold">Login</Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden"
            >
              <div className="py-2 flex flex-col">
                {navGroups.map((group, idx) => (
                  <div key={idx} className="border-b border-slate-800 last:border-0">
                    {group.href ? (
                      <Link 
                        to={group.href}
                        className={`block px-6 py-4 text-sm font-bold ${
                          location.pathname === group.href ? 'text-brand-secondary bg-slate-800' : 'text-slate-300'
                        }`}
                      >
                        {group.name}
                      </Link>
                    ) : (
                      <div className="flex flex-col">
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === group.name ? null : group.name)}
                          className="flex justify-between items-center px-6 py-4 text-sm font-bold text-slate-300 bg-slate-800/50"
                        >
                          {group.name}
                          <svg className={`w-4 h-4 transition-transform ${activeDropdown === group.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === group.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-slate-900 flex flex-col overflow-hidden"
                            >
                              {group.items?.map((item, iIdx) => (
                                <Link 
                                  key={iIdx}
                                  to={item.href}
                                  className={`px-8 py-3 text-sm font-semibold border-l-2 ${
                                    location.pathname === item.href 
                                      ? 'text-brand-secondary border-brand-secondary bg-brand-secondary/10' 
                                      : 'text-slate-500 border-transparent hover:bg-slate-800 hover:text-white'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
