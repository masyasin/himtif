import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Berita from './pages/Berita';
import Event from './pages/Event';
import ProgramKerja from './pages/ProgramKerja';
import Galeri from './pages/Galeri';
import AlumniKarir from './pages/AlumniKarir';
import Aspirasi from './pages/Aspirasi';
import DigitalLibrary from './pages/DigitalLibrary';
import ProjectShowcase from './pages/ProjectShowcase';
import AIAssistant from './pages/AIAssistant';
import CodingArena from './pages/CodingArena';
import ECertificate from './pages/ECertificate';
import Prestasi from './pages/Prestasi';
import DownloadCenter from './pages/DownloadCenter';
import TechCommunity from './pages/TechCommunity';
import TechBlog from './pages/TechBlog';

const TitleUpdater = () => {
  const location = useLocation();
  
  useEffect(() => {
    const routeTitles: Record<string, string> = {
      '/': 'Beranda | HIMTIF',
      '/profil': 'Profil | HIMTIF',
      '/berita': 'Berita | HIMTIF',
      '/event': 'Event | HIMTIF',
      '/proker': 'Program Kerja | HIMTIF',
      '/galeri': 'Galeri | HIMTIF',
      '/karir': 'Alumni & Karir | HIMTIF',
      '/aspirasi': 'Aspirasi Mahasiswa | HIMTIF',
      '/library': 'Digital Library | HIMTIF',
      '/showcase': 'Project Showcase | HIMTIF',
      '/ai': 'AI Assistant | HIMTIF',
      '/arena': 'Coding Arena | HIMTIF',
      '/certificate': 'E-Certificate | HIMTIF',
      '/prestasi': 'Prestasi | HIMTIF',
      '/download': 'Download Center | HIMTIF',
      '/community': 'Tech Community | HIMTIF',
      '/blog': 'Tech Blog | HIMTIF',
    };
    
    document.title = routeTitles[location.pathname] || 'HIMTIF Universitas Raharja';
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <TitleUpdater />
      <div className="min-h-screen flex flex-col bg-slate-950 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/event" element={<Event />} />
            <Route path="/proker" element={<ProgramKerja />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/karir" element={<AlumniKarir />} />
            <Route path="/aspirasi" element={<Aspirasi />} />
            <Route path="/library" element={<DigitalLibrary />} />
            <Route path="/showcase" element={<ProjectShowcase />} />
            <Route path="/ai" element={<AIAssistant />} />
            <Route path="/arena" element={<CodingArena />} />
            <Route path="/certificate" element={<ECertificate />} />
            <Route path="/prestasi" element={<Prestasi />} />
            <Route path="/download" element={<DownloadCenter />} />
            <Route path="/community" element={<TechCommunity />} />
            <Route path="/blog" element={<TechBlog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
