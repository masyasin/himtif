import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LiveVisitorChart = () => {
  const [unique, setUnique] = useState(17);
  const [access, setAccess] = useState(25);

  useEffect(() => {
    // Simulate real-time updates occasionally
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        setAccess(prev => prev + 1);
        if (Math.random() > 0.7) {
          setUnique(prev => prev + 1);
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-[#0D151A]/80 backdrop-blur-xl border border-slate-700/50 rounded-full px-5 py-2 shadow-lg mt-2 group hover:border-emerald-500/40 transition-colors">
      <svg className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)] group-hover:scale-105 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
      <div className="text-slate-400 text-sm tracking-wide">
        Statistik Pengunjung: <span className="text-white font-bold ml-1">{unique}</span> Unik / <span className="text-white font-bold ml-1">{access}</span> Akses
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden mt-20">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent"></div>
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-secondary to-emerald-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <img src="/HIMTIF.png" alt="Logo HIMTIF" className="w-16 h-auto relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 leading-none">
                  HIMTIF
                </h2>
                <span className="text-brand-secondary font-bold tracking-widest text-sm uppercase">Universitas Raharja</span>
              </div>
            </div>
            <div className="flex items-start gap-3 text-slate-400 text-sm max-w-sm mb-4">
              <svg className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <p>Jl. Jenderal Sudirman No.40, Modernland, Kec. Tangerang, Kota Tangerang, Banten 15117</p>
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-sm mt-3 mb-8">
              <svg className="w-5 h-5 text-brand-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:info@himtifraharja.ac.id" className="hover:text-emerald-400 transition-colors">info@himtifraharja.ac.id</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center flex-wrap gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-pink-500 hover:to-orange-400 hover:border-transparent transition-all duration-300 group shadow-lg" title="Instagram">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-transparent transition-all duration-300 group shadow-lg" title="YouTube">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M21.582 6.186a2.665 2.665 0 00-1.88-1.88C18.04 3.86 12 3.86 12 3.86s-6.04 0-7.702.446a2.665 2.665 0 00-1.88 1.88C1.97 7.848 1.97 12 1.97 12s0 4.152.448 5.814a2.665 2.665 0 001.88 1.88C5.96 20.14 12 20.14 12 20.14s6.04 0 7.702-.446a2.665 2.665 0 001.88-1.88c.448-1.662.448-5.814.448-5.814s0-4.152-.448-5.814zm-11.582 8.814V9l6 3-6 3z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-transparent transition-all duration-300 group shadow-lg" title="GitHub">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300 group shadow-lg" title="Facebook">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-zinc-800 hover:border-transparent transition-all duration-300 group shadow-lg" title="TikTok">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.39-2.92 5.72-1.74 1.3-4.04 1.74-6.17 1.13-2.07-.58-3.85-2.11-4.71-4.09-.85-1.92-.91-4.14-.15-6.09.73-1.89 2.3-3.41 4.17-4.14 1.13-.44 2.37-.58 3.56-.41v4.06c-1.07-.1-2.19.16-3.08.79-.89.62-1.45 1.63-1.57 2.71-.12 1.08.21 2.19.89 3.03.68.84 1.72 1.34 2.81 1.35 1.1.01 2.21-.42 3.03-1.17.81-.74 1.3-1.8 1.36-2.92.05-2.52.02-5.04.03-7.56V.02z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 hover:border-transparent transition-all duration-300 group shadow-lg" title="Twitter / X">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-secondary rounded-full"></span>
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Tentang Kami', path: '/profil' },
                { name: 'Program Kerja', path: '/proker' },
                { name: 'Event & Seminar', path: '/event' },
                { name: 'Berita Terkini', path: '/berita' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-400 hover:text-brand-secondary transition-all flex items-center gap-2 group">
                    <span className="text-brand-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Services */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-400 rounded-full"></span>
              Layanan Mahasiswa
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Aspirasi Mahasiswa', path: '/aspirasi' },
                { name: 'Digital Library', path: '/library' },
                { name: 'Karir & Magang', path: '/karir' },
                { name: 'Project Showcase', path: '/showcase' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-400 hover:text-emerald-400 transition-all flex items-center gap-2 group">
                    <span className="text-emerald-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Visitor Stats */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 flex flex-col gap-8">
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                Newsletter
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Dapatkan info event, berita, dan materi teknologi terbaru langsung ke inbox Anda.
              </p>
              <form className="relative group" onSubmit={(e) => { e.preventDefault(); alert('Terima kasih telah berlangganan!'); }}>
                <input 
                  type="email" 
                  placeholder="Alamat Email Anda..." 
                  required
                  className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-700/80 rounded-2xl py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all"
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-secondary text-white rounded-xl px-3 flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg group-hover:shadow-brand-secondary/30"
                  title="Berlangganan"
                >
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>

            {/* Stats */}
            <div className="mt-2">
              <LiveVisitorChart />
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-slate-300">HIMTIF Universitas Raharja.</span> All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-brand-secondary transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <Link to="/terms" className="hover:text-brand-secondary transition-colors">Terms of Service</Link>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <Link to="/sitemap" className="hover:text-brand-secondary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
