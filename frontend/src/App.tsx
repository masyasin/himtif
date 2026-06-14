import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import PageWrapper from './components/PageWrapper';
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
import Login from './pages/Login';
import FloatingActionButtons from './components/FloatingActionButtons';

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
      '/login': 'Login | HIMTIF',
    };
    
    document.title = routeTitles[location.pathname] || 'HIMTIF Universitas Raharja';
  }, [location]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/profil" element={<PageWrapper><Profil /></PageWrapper>} />
        <Route path="/berita" element={<PageWrapper><Berita /></PageWrapper>} />
        <Route path="/event" element={<PageWrapper><Event /></PageWrapper>} />
        <Route path="/proker" element={<PageWrapper><ProgramKerja /></PageWrapper>} />
        <Route path="/galeri" element={<PageWrapper><Galeri /></PageWrapper>} />
        <Route path="/karir" element={<PageWrapper><AlumniKarir /></PageWrapper>} />
        <Route path="/aspirasi" element={<PageWrapper><Aspirasi /></PageWrapper>} />
        <Route path="/library" element={<PageWrapper><DigitalLibrary /></PageWrapper>} />
        <Route path="/showcase" element={<PageWrapper><ProjectShowcase /></PageWrapper>} />
        <Route path="/ai" element={<PageWrapper><AIAssistant /></PageWrapper>} />
        <Route path="/arena" element={<PageWrapper><CodingArena /></PageWrapper>} />
        <Route path="/certificate" element={<PageWrapper><ECertificate /></PageWrapper>} />
        <Route path="/prestasi" element={<PageWrapper><Prestasi /></PageWrapper>} />
        <Route path="/download" element={<PageWrapper><DownloadCenter /></PageWrapper>} />
        <Route path="/community" element={<PageWrapper><TechCommunity /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><TechBlog /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <TitleUpdater />
      <CustomCursor />
      <div className="min-h-screen flex flex-col bg-slate-950 font-sans selection:bg-brand-secondary/30 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <FloatingActionButtons />
      </div>
    </Router>
  );
}

export default App;
