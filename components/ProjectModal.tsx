
import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps { project: Project | null; onClose: () => void; }

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = 'auto';
      setIsVisible(false);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-8 lg:p-12 overflow-hidden">
      <div className={`absolute inset-0 bg-[#F9F8F6]/95 backdrop-blur-xl transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      
      <div className={`relative w-full max-w-[1600px] h-full bg-[#F9F8F6] border border-black/5 overflow-y-auto rounded-[2rem] md:rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] custom-scrollbar ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
        
        {/* Nav Bar */}
        <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-6 md:px-16 md:py-10 bg-[#F9F8F6]/80 backdrop-blur-xl border-b border-black/5">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-30">PROJECT // 0{project.id}</span>
            <div className="w-8 md:w-12 h-px bg-black/10"></div>
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-30 hidden sm:inline">{project.category}</span>
          </div>
          <button onClick={onClose} className="group flex items-center gap-4 md:gap-8 outline-none">
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-30 group-hover:opacity-100 transition-opacity hidden sm:inline">Close</span>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>

        <div className="px-6 py-12 md:px-16 md:py-24 lg:px-32 lg:py-32">
          {/* Header */}
          <header className="mb-16 md:mb-32">
            <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] font-serif italic tracking-tighter leading-[0.85] mb-12 text-[#0A0A0A]">{project.title}</h2>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {project.techStack?.map(tech => (
                <span key={tech} className="px-4 md:px-6 py-2 bg-black/[0.02] rounded-full text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-black/50 border border-black/5">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Image */}
          <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden mb-16 md:mb-32 shadow-xl aspect-video md:aspect-[21/9] bg-black/5">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-[1.5s] md:hover:scale-105 ease-out" 
            />
          </div>

          {/* Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 lg:gap-32 mb-16 md:mb-32">
            <div className="lg:col-span-8">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] leading-[1.2] md:leading-[1.1] mb-16 md:mb-24 font-light tracking-tight font-serif italic border-l border-black/10 pl-6 md:pl-12">
                {project.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <div className="space-y-6 md:space-y-8">
                  <h4 className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] opacity-30">The Vision</h4>
                  <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed">{project.challenge}</p>
                </div>
                <div className="space-y-6 md:space-y-8">
                  <h4 className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] opacity-30">The Result</h4>
                  <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
               <div className="p-8 md:p-12 border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] bg-white shadow-xl space-y-10 md:space-y-12">
                  <div className="space-y-6 md:space-y-8">
                    <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] opacity-30 block">Live Interface</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl font-serif italic border-b border-black/10 pb-6 md:pb-8 hover:border-black transition-all flex items-center justify-between group">
                      Visit Site 
                      <svg className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-700 md:group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                  <div className="pt-6 md:pt-8 border-t border-black/5 flex items-center gap-4">
                     <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                     <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">Status: Production Active</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
