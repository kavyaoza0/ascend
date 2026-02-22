
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 md:py-48 lg:py-64 bg-[#0A0A0A] text-[#F9F8F6] rounded-t-[2.5rem] md:rounded-t-[5rem] lg:rounded-t-[8rem] overflow-hidden relative z-10">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 xl:gap-40 items-start">
          
          {/* Section Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 reveal">
             <div className="flex items-center gap-6 md:gap-8 mb-10 md:mb-16">
               <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/20">How I Help</span>
               <div className="h-px w-16 md:w-20 bg-white/10"></div>
             </div>
             <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10vw] font-serif italic tracking-tighter mb-8 md:mb-12 lg:mb-20 leading-[0.85] md:leading-[0.8] lg:leading-[0.7] font-light">
               Creative <br />
               <span className="text-white/5 not-italic font-sans font-black uppercase tracking-tight block">Strategy.</span>
             </h2>
             <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/30 font-extralight leading-relaxed max-w-lg tracking-tight border-l border-white/10 pl-6 md:pl-10 lg:pl-12">
               I build <span className="text-white">stunning sites</span> with <span className="text-white">smart technology</span> to help your business grow fast.
             </p>
          </div>

          {/* Service Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className={`group p-8 sm:p-12 md:p-16 lg:p-20 border border-white/5 rounded-[2rem] md:rounded-[4rem] lg:rounded-[6rem] bg-white/[0.015] hover:bg-white/[0.04] transition-all duration-1000 reveal stagger-${idx + 1} lg:hover:scale-[1.01] shadow-2xl shadow-black/60`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 lg:gap-24">
                  <div className="flex-1">
                    <div className="flex items-center gap-6 mb-8 md:mb-12 opacity-20">
                       <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.4em] md:tracking-[0.5em]">Option 0{idx + 1}</span>
                       <div className="h-px w-16 md:w-24 bg-white/20"></div>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic mb-6 md:mb-8 lg:mb-10 transition-transform duration-1000 leading-none">
                      {service.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/30 font-light max-w-xl leading-relaxed mb-10 md:mb-12 lg:mb-16">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 lg:gap-y-8">
                      {service.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                           <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/10 rounded-full group-hover:bg-white transition-all duration-1000"></div>
                           <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/70 transition-colors duration-1000">
                            {f}
                           </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end justify-between pt-4">
                    <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif italic opacity-40 group-hover:opacity-100 transition-all duration-1000 lg:group-hover:scale-105 origin-left md:origin-right">
                      {service.price}
                    </div>
                    <div className="hidden md:flex flex-col items-end gap-3 opacity-0 group-hover:opacity-20 transition-all duration-1000 mt-auto">
                       <span className="text-[10px] font-mono uppercase tracking-[0.6em]">Premium Standard</span>
                       <div className="w-20 h-px bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 md:mt-16 px-4 md:px-12 lg:px-16 opacity-10 flex items-center gap-6 md:gap-12 reveal stagger-4">
              <span className="text-[9px] md:text-[11px] font-mono uppercase tracking-widest">Built for performance and conversion</span>
              <div className="h-px flex-1 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
