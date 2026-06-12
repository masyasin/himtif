import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/HIMTIF.png" alt="Logo HIMTIF" className="w-16 h-auto drop-shadow-md" />
              <h2 className="text-2xl font-display font-bold text-white leading-tight">HIMTIF <br/> Universitas Raharja</h2>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Innovate, Collaborate, Inspire - Membangun Generasi Informatika Berdaya Saing Global.
            </p>
            <p className="text-sm text-slate-500">
              Jl. Jenderal Sudirman No.40, Modernland, Kec. Tangerang, Kota Tangerang, Banten 15117
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/profil" className="hover:text-brand-secondary transition-colors">Tentang Kami</Link></li>
              <li><Link to="/proker" className="hover:text-brand-secondary transition-colors">Program Kerja</Link></li>
              <li><Link to="/event" className="hover:text-brand-secondary transition-colors">Event & Seminar</Link></li>
              <li><Link to="/berita" className="hover:text-brand-secondary transition-colors">Berita Terkini</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Layanan Mahasiswa</h3>
            <ul className="space-y-2">
              <li><Link to="/aspirasi" className="hover:text-brand-secondary transition-colors">Aspirasi Mahasiswa</Link></li>
              <li><Link to="/library" className="hover:text-brand-secondary transition-colors">Digital Library</Link></li>
              <li><Link to="/karir" className="hover:text-brand-secondary transition-colors">Karir & Magang</Link></li>
              <li><Link to="/kontak" className="hover:text-brand-secondary transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} HIMTIF Universitas Raharja. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Icons Placeholder */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
