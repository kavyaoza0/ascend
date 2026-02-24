
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'motion/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface PortfolioProps {
  onProjectClick: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onProjectClick }) => {
  const [hovered, setHovered] = useState<Project | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('resize', checkScreen);
      window.removeEventListener('mousemove', handleMove);
    };
  }, [mouseX, mouseY]);

  const handleEnter = (p: Project) => {
    if (isLargeScreen) setHovered(p);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <section id="work" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#F9F8F6] relative z-10">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-48">
        
        <header className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 md:gap-10 mb-8 md:mb-10"
          >
            <span className="text-[9px] md:text-[11px] font-mono uppercase tracking-[0.5em] md:tracking-[0.7em] opacity-30">Archive // VOL. 01</span>
            <div className="h-px w-16 md:w-24 bg-black/10"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] xl:text-[12vw] font-serif italic tracking-tighter leading-[0.85] md:leading-[0.8] lg:leading-[0.7] text-[#0A0A0A]"
          >
            Selected <br />
            <span className="text-black/5 not-italic font-sans font-black uppercase tracking-tight block">Stories.</span>
          </motion.h2>
        </header>

        <div className="flex flex-col border-t border-black/10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-b border-black/10 py-10 sm:py-16 md:py-20 lg:py-28 flex flex-col md:flex-row items-baseline gap-4 md:gap-16 lg:gap-24 cursor-pointer transition-all duration-1000 lg:hover:pl-12"
              onMouseEnter={() => handleEnter(project)}
              onMouseLeave={handleLeave}
              onClick={() => onProjectClick(project)}
            >
              {/* Index */}
              <motion.div 
                whileHover={{ scale: 1.2, x: -5 }}
                className="min-w-[40px] md:min-w-[60px] lg:min-w-[80px] opacity-10 text-[9px] md:text-[10px] lg:text-[12px] font-mono pt-2 md:pt-4 lg:pt-6 transition-all duration-700 group-hover:text-black group-hover:opacity-100"
              >
                /0{idx + 1}
              </motion.div>

              {/* Title */}
              <div className="flex-1 overflow-hidden">
                <motion.h3 
                  whileHover={{ skewX: -2 }}
                  className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9vw] font-serif italic tracking-tighter leading-[1] md:leading-[0.9] lg:leading-[0.8] transition-all duration-1000 lg:group-hover:translate-x-12 text-balance"
                >
                  {project.title}
                </motion.h3>
                {/* Mobile Image Preview with subtle parallax-like entry */}
                <motion.div 
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 md:hidden w-full aspect-[16/10] rounded-2xl overflow-hidden border border-black/5"
                >
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.5 }}
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-[1.05]"
                  />
                </motion.div>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between w-full md:w-auto gap-8 md:gap-10 lg:gap-12 md:self-center mt-6 md:mt-0">
                <motion.span 
                  whileHover={{ x: 5 }}
                  className="text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] lg:tracking-[0.6em] text-black/20 group-hover:text-black transition-all duration-1000 whitespace-nowrap"
                >
                  {project.category}
                </motion.span>
                <motion.div 
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  className="relative w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full border border-black/5 flex items-center justify-center overflow-hidden transition-all duration-1000 lg:group-hover:bg-black lg:group-hover:text-white"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>

              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Preview Portal - Only on Laptop/Desktop */}
      <AnimatePresence>
        {hovered && isLargeScreen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed pointer-events-none z-50 overflow-hidden rounded-[2.5rem] shadow-[0_60px_160px_rgba(0,0,0,0.12)] bg-white"
            style={{
              top: springY,
              left: springX,
              width: '320px',
              height: '420px',
              x: '-50%',
              y: '-50%',
            }}
          >
            <motion.img 
              initial={{ scale: 1.2, filter: 'grayscale(100%)' }}
              animate={{ scale: 1, filter: 'grayscale(0%)' }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              src={hovered.imageUrl} 
              alt={hovered.title} 
              className="w-full h-full object-cover brightness-[1.1] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
            <div className="absolute bottom-10 left-10 flex flex-col gap-1">
               <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.4em]">Project Preview</span>
               <span className="text-white text-xs font-serif italic">{hovered.title}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
