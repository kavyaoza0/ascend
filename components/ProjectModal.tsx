
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps { project: Project | null; onClose: () => void; }

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-12 lg:p-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#F9F8F6]/95 backdrop-blur-3xl transition-opacity animate-in fade-in duration-1000" onClick={onClose} />
      
      <div className="relative w-full max-w-[1440px] h-full bg-[#F9F8F6] border border-black/5 overflow-y-auto rounded-[2.5rem] md:rounded-[6rem] shadow-[0_100px_250px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom-32 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Nav Bar */}
        <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-6 md:px-24 md:py-16 bg-[#F9F8F6]/80 backdrop-blur-2xl border-b border-black/5">
          <div className="flex items-center gap-4 md:gap-10">
            <span className="text-[9px] md:text-[11px] font-mono uppercase tracking-[0.4em] md:tracking-[0.7em] opacity-20">PROJECT // 0{project.id}</span>
            <div className="w-8 md:w-16 h-px bg-black/10"></div>
            <span className="text-[9px] md:text-[11px] font-mono uppercase tracking-[0.4em] md:tracking-[0.7em] opacity-20 hidden sm:inline">{project.category}</span>
          </div>
          <button onClick={onClose} className="group flex items-center gap-4 md:gap-10 outline-none">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-20 group-hover:opacity-100 transition-opacity">Dismiss</span>
            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-1000 group-hover:scale-110">
              <svg className="w-4 h-4 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>

        <div className="px-6 py-10 md:px-32 md:py-32 lg:px-48 lg:py-40">
          {/* Header */}
          <header className="mb-16 md:mb-48">
            <h2 className="text-5xl md:text-9xl lg:text-[11vw] font-serif italic tracking-tighter leading-[0.8] md:leading-[0.75] mb-12 md:mb-20 text-[#0A0A0A]">{project.title}</h2>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {project.techStack?.map(tech => (
                <span key={tech} className="px-4 md:px-8 py-1.5 md:py-3 bg-black/[0.03] rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-black/50 border border-black/5">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Image */}
          <div className="relative rounded-[2rem] md:rounded-[6rem] overflow-hidden mb-16 md:mb-56 shadow-2xl aspect-video md:aspect-[21/9] bg-black/5">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale md:hover:grayscale-0 transition-all duration-[2s] md:duration-[2.5s] md:hover:scale-105 ease-out" 
            />
          </div>

          {/* Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-40 mb-16 md:mb-56">
            <div className="lg:col-span-8">
              <p className="text-2xl md:text-6xl text-[#0A0A0A] leading-[1.1] md:leading-[1] mb-16 md:mb-24 font-light tracking-tight font-serif italic border-l-4 md:border-l-8 border-black/5 pl-6 md:pl-20">
                {project.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
                <div className="space-y-6 md:space-y-10">
                  <h4 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.6em] md:tracking-[0.8em] opacity-20">The Vision</h4>
                  <p className="text-lg md:text-2xl text-black/40 font-light leading-relaxed">{project.challenge}</p>
                </div>
                <div className="space-y-6 md:space-y-10">
                  <h4 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.6em] md:tracking-[0.8em] opacity-20">The Result</h4>
                  <p className="text-lg md:text-2xl text-black/40 font-light leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 lg:sticky lg:top-48 h-fit">
               <div className="p-8 md:p-24 border border-black/5 rounded-[2rem] md:rounded-[5rem] bg-white shadow-2xl space-y-10 md:space-y-16">
                  <div className="space-y-6 md:space-y-10">
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] md:tracking-[0.8em] opacity-20 block">Live Interface</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-5xl font-serif italic border-b border-black/10 pb-6 md:pb-10 hover:border-black transition-all flex items-center justify-between group">
                      Visit Site 
                      <svg className="w-6 h-6 md:w-10 md:h-10 transition-transform duration-1000 md:group-hover:translate-x-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                  <div className="pt-6 md:pt-12 border-t border-black/5 flex items-center gap-4 md:gap-6">
                     <div className="w-2 md:w-3 h-2 md:h-3 bg-black rounded-full animate-pulse"></div>
                     <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-30 uppercase">Status: Production Active</span>
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
