
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface PortfolioProps {
  onProjectClick: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick }) => {
  const [hovered, setHovered] = useState<Project | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);

    const handleMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };

    let animationId: number;
    const lerp = () => {
      setPos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.12,
        y: prev.y + (targetPos.y - prev.y) * 0.12
      }));
      animationId = requestAnimationFrame(lerp);
    };

    window.addEventListener('mousemove', handleMove);
    lerp();

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animationId);
    };
  }, [targetPos]);

  const handleEnter = (p: Project) => {
    if (isLargeScreen) setHovered(p);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <section id="work" className="py-24 sm:py-32 md:py-48 lg:py-64 bg-[#F9F8F6] relative z-10">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-48">
        
        <header className="mb-16 sm:mb-24 md:mb-32 lg:mb-48 xl:mb-56 reveal">
          <div className="flex items-center gap-6 md:gap-10 mb-8 md:mb-10">
            <span className="text-[9px] md:text-[11px] font-mono uppercase tracking-[0.5em] md:tracking-[0.7em] opacity-30">Archive // VOL. 01</span>
            <div className="h-px w-16 md:w-24 bg-black/10"></div>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] xl:text-[12vw] font-serif italic tracking-tighter leading-[0.85] md:leading-[0.8] lg:leading-[0.7] text-[#0A0A0A]">
            Selected <br />
            <span className="text-black/5 not-italic font-sans font-black uppercase tracking-tight block">Stories.</span>
          </h2>
        </header>

        <div className="flex flex-col border-t border-black/10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative border-b border-black/10 py-10 sm:py-16 md:py-20 lg:py-28 flex flex-col md:flex-row items-baseline gap-4 md:gap-16 lg:gap-24 cursor-pointer reveal stagger-${(idx % 4) + 1} transition-all duration-1000 lg:hover:pl-12`}
              onMouseEnter={() => handleEnter(project)}
              onMouseLeave={handleLeave}
              onClick={() => onProjectClick(project)}
            >
              {/* Index */}
              <div className="min-w-[40px] md:min-w-[60px] lg:min-w-[80px] opacity-10 text-[9px] md:text-[10px] lg:text-[12px] font-mono pt-2 md:pt-4 lg:pt-6 transition-all duration-700 group-hover:text-black group-hover:opacity-100">
                /0{idx + 1}
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9vw] font-serif italic tracking-tighter leading-[1] md:leading-[0.9] lg:leading-[0.8] transition-all duration-1000 lg:group-hover:translate-x-12">
                  {project.title}
                </h3>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between w-full md:w-auto gap-8 md:gap-10 lg:gap-12 md:self-center">
                <span className="text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] text-black/20 group-hover:text-black transition-all duration-1000 whitespace-nowrap">
                  {project.category}
                </span>
                <div className="relative w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full border border-black/5 flex items-center justify-center overflow-hidden transition-all duration-1000 lg:group-hover:bg-black lg:group-hover:text-white lg:group-hover:scale-110">
                  <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Preview Portal - Only on Laptop/Desktop */}
      {hovered && isLargeScreen && (
        <div 
          className="fixed pointer-events-none z-50 overflow-hidden rounded-[2.5rem] transition-all duration-1000 shadow-[0_60px_160px_rgba(0,0,0,0.12)] bg-white"
          style={{
            top: pos.y,
            left: pos.x,
            width: '320px',
            height: '420px',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img 
            src={hovered.imageUrl} 
            alt={hovered.title} 
            className="w-full h-full object-cover grayscale brightness-[1.1] contrast-[1.05] animate-in fade-in zoom-in duration-1000 scale-110"
          />
          <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
          <div className="absolute bottom-10 left-10 flex flex-col gap-1">
             <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.4em]">Project Preview</span>
             <span className="text-white text-xs font-serif italic">{hovered.title}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
