
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll reveal logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (!loading) {
      setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      }, 100);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[2000] bg-[#F9F8F6] flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl md:text-5xl font-serif italic tracking-tighter opacity-0 animate-fade-in">Ascend.</h1>
        <div className="mt-12 h-px w-32 bg-black/5 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-black w-full origin-left animate-loading-line"></div>
        </div>
        <div className="mt-6 opacity-20 text-[9px] font-mono uppercase tracking-[0.5em] animate-pulse">Initializing System</div>
        <style>{`
          @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
          @keyframes loading-line { 0% { transform: scaleX(0); transform-origin: left; } 50% { transform: scaleX(1); transform-origin: left; } 50.1% { transform: scaleX(1); transform-origin: right; } 100% { transform: scaleX(0); transform-origin: right; } }
          .animate-fade-in { animation: fade-in 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-loading-line { animation: loading-line 2s cubic-bezier(0.76, 0, 0.24, 1) infinite; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative text-[#0A0A0A] bg-[#F9F8F6]">
      <Navbar />
      <main>
        <Hero />
        <Portfolio onProjectClick={setSelectedProject} />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default App;
