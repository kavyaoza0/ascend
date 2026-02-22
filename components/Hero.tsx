
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-32 pt-40 pb-24 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        
        {/* Intro Tag */}
        <div className="flex justify-between items-end mb-12 sm:mb-20 md:mb-24 lg:mb-28 reveal stagger-1">
          <div className="flex flex-col gap-3">
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.5em] opacity-30">Independent Design Studio</span>
            <div className="h-px w-16 md:w-24 bg-black/10 origin-left scale-x-100 transition-transform duration-1000"></div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-2 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] opacity-30 text-right">
            <span>Ahmedabad // Global Delivery</span>
            <span>2024 Protocol Active</span>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[9vw] font-serif italic font-light tracking-tighter leading-[0.9] md:leading-[0.8] lg:leading-[0.75] text-[#0A0A0A] reveal stagger-2">
            Better <br />
            <span className="text-black/5 not-italic font-sans font-black uppercase tracking-[-0.05em] block leading-none">Experiences.</span>
          </h1>
        </div>

        {/* Short Bio & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 xl:gap-24 items-start">
          <div className="lg:col-span-7 xl:col-span-8 reveal stagger-3">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-black/40 font-extralight leading-[1.25] md:leading-[1.1] lg:leading-[1.05] tracking-tighter max-w-4xl">
              I build <span className="text-black italic font-serif">premium websites</span> that help brands look professional, load instantly, and <span className="text-black">sell more.</span>
            </p>
          </div>
          
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col pt-4 md:pt-8 lg:pt-12 reveal stagger-4">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})}
              className="group flex items-center gap-6 sm:gap-8 md:gap-10 self-start outline-none"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full border border-black/10 flex items-center justify-center transition-all duration-1000 group-hover:bg-black group-hover:border-black group-active:scale-95">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-10 xl:h-10 transition-colors duration-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.6em] opacity-20 mb-1 md:mb-2">View Projects</span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-serif italic leading-none group-hover:translate-x-4 transition-transform duration-1000">The Archive</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute top-1/2 right-[-15vw] md:right-[-10vw] lg:right-[-5vw] w-[80vw] md:w-[60vw] lg:w-[45vw] h-[80vw] md:h-[60vw] lg:h-[45vw] bg-black/[0.015] rounded-full blur-[70px] md:blur-[110px] lg:blur-[140px] pointer-events-none -z-10 animate-pulse"></div>
    </section>
  );
};

export default Hero;
