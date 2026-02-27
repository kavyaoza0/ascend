
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="min-h-[70vh] flex flex-col px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 pt-16 sm:pt-20 md:pt-24 pb-8 relative overflow-hidden bg-[#FBFBFB]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* 3D Floating Element */}
      <motion.div 
        style={{ y: y2, rotateZ: rotate }}
        className="absolute top-1/4 right-10 md:right-32 w-32 h-32 md:w-64 md:h-64 border border-black/[0.03] rounded-2xl bg-white/40 backdrop-blur-3xl -z-10 hidden lg:block"
        animate={{ 
          rotateX: [0, 15, 0],
          rotateY: [0, 25, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-px bg-black/10"></div>
          <div className="h-1/2 w-px bg-black/10"></div>
        </div>
      </motion.div>

      {/* Subtle Scanning Line */}
      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-1/3 bg-gradient-to-b from-transparent via-black/[0.01] to-transparent pointer-events-none -z-10"
      />

      {/* Large Background Text */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-sans font-black uppercase tracking-tighter text-black/[0.01] pointer-events-none -z-20 select-none"
      >
        LaunchLayer
      </motion.div>

      <div className="max-w-screen-2xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
        
        {/* Intro Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end mb-4 sm:mb-6 md:mb-8"
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.5em] opacity-30">Independent Design Studio</span>
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-12 sm:w-16 md:w-24 bg-black/10 origin-left"
            ></motion.div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 sm:gap-2 text-[8px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] opacity-30 text-right">
            <span>Ahmedabad // Global Delivery</span>
            <span>Digital Craftsmanship // EST 2025</span>
          </div>
        </motion.div>
        
        {/* Main Headline */}
        <div className="mb-4 sm:mb-6 md:mb-8 perspective-[1000px]">
          <h1 className="text-[11vw] sm:text-[14vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5vw] font-serif italic font-light tracking-tighter leading-[0.85] md:leading-[0.8] lg:leading-[0.75] text-[#0A0A0A]">
            <motion.span 
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block origin-bottom"
            >
              Better
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 100, rotateX: -45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-transparent not-italic font-sans font-black uppercase tracking-[-0.02em] block leading-none mt-2 sm:mt-0 origin-top" 
              style={{ WebkitTextStroke: '1px rgba(0,0,0,0.15)' }}
            >
              Experiences.
            </motion.span>
          </h1>
        </div>

        {/* Short Bio & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-8"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black/40 font-extralight leading-[1.3] md:leading-[1.2] lg:leading-[1.05] tracking-tighter max-w-4xl">
              I build <span className="text-black italic font-serif">premium websites</span> that help brands look professional, load instantly, and <span className="text-black">sell more.</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col pt-2 sm:pt-4 md:pt-6 lg:pt-8"
          >
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})}
              className="group flex items-center gap-6 sm:gap-8 md:gap-10 self-start outline-none"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full border border-black/10 flex items-center justify-center transition-all duration-1000 group-hover:bg-black group-hover:border-black group-active:scale-95">
                <motion.svg 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 transition-colors duration-700 group-hover:text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.6em] opacity-20 mb-1 md:mb-2">View Projects</span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-serif italic leading-none group-hover:translate-x-4 transition-transform duration-1000">The Archive</span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Visual Accent */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.015, 0.03, 0.015],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[-15vw] md:right-[-10vw] lg:right-[-5vw] w-[80vw] md:w-[60vw] lg:w-[45vw] h-[80vw] md:h-[60vw] lg:h-[45vw] bg-black/[0.015] rounded-full blur-[70px] md:blur-[110px] lg:blur-[140px] pointer-events-none -z-10"
      ></motion.div>
    </section>
  );
};

export default Hero;
