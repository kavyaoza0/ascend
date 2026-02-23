
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0A0A0A] text-[#F9F8F6] rounded-[2.5rem] md:rounded-[5rem] lg:rounded-[8rem] relative z-10 my-4 sm:my-8 md:my-12">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 reveal">
          <div className="flex items-center gap-6 md:gap-8 mb-8">
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.6em] text-white/30">Expertise</span>
            <div className="h-px w-16 md:w-20 bg-white/10"></div>
          </div>
          <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] font-serif italic tracking-tighter leading-[0.85] font-light">
            Digital <br />
            <span className="text-white/40 not-italic font-sans font-medium tracking-tight block mt-2">Capabilities.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {SERVICES.map((service, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={service.id}
                className="group border-b border-white/10 flex flex-col reveal stagger-1"
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => setActiveIndex(isActive ? -1 : idx)}
                  className="w-full py-8 sm:py-12 md:py-16 flex items-center justify-between text-left outline-none"
                >
                  <div className="flex items-center gap-6 md:gap-12 lg:gap-16">
                    <span className={`text-lg sm:text-2xl font-serif italic transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/20 group-hover:text-white/50'}`}>
                      0{idx + 1}
                    </span>
                    <h3 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight transition-all duration-500 ${isActive ? 'text-white lg:translate-x-4' : 'text-white/40 group-hover:text-white/80 lg:group-hover:translate-x-4'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ${isActive ? 'border-white text-white rotate-45' : 'border-white/10 text-white/30 group-hover:border-white/40 group-hover:text-white/80'}`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${isActive ? 'max-h-[1000px] opacity-100 pb-12 sm:pb-16 md:pb-20' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pl-0 md:pl-[80px] lg:pl-[120px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                    <div className="lg:col-span-5 flex flex-col gap-8">
                      <p className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light leading-relaxed">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 w-fit">
                        <span className="w-2 h-2 rounded-full bg-white/40"></span>
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">Starting at {service.price}</span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-7">
                      <h4 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.4em] text-white/30 border-b border-white/10 pb-4 mb-6">
                        Deliverables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-4 text-base sm:text-lg text-white/60 font-light">
                            <span className="text-white/20 mt-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
