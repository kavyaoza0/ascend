
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#0A0A0A] text-[#F9F8F6] rounded-[2rem] md:rounded-[4rem] lg:rounded-[6rem] relative z-10 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 md:gap-8 mb-8"
          >
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.6em] text-white/30">Expertise</span>
            <div className="h-px w-16 md:w-20 bg-white/10"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] font-serif italic tracking-tighter leading-[0.85] font-light"
          >
            Digital <br />
            <span className="text-white/40 not-italic font-sans font-medium tracking-tight block mt-2">Capabilities.</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {SERVICES.map((service, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border-b border-white/10 flex flex-col"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
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
                  <motion.div 
                    animate={{ rotate: isActive ? 45 : 0 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ${isActive ? 'border-white text-white' : 'border-white/10 text-white/30 group-hover:border-white/40 group-hover:text-white/80'}`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 sm:pb-16 md:pb-20 pl-0 md:pl-[80px] lg:pl-[120px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                        <div className="lg:col-span-5 flex flex-col gap-8">
                          <p className="text-xl sm:text-2xl md:text-3xl text-white/70 font-light leading-relaxed text-balance">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Image Preview (Desktop Only) */}
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-0">
        {SERVICES.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ 
              opacity: hoveredIndex === idx ? 0.2 : 0,
              scale: hoveredIndex === idx ? 1 : 1.1,
              filter: hoveredIndex === idx ? "blur(4px)" : "blur(20px)"
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[30vw] aspect-[4/5] rounded-[3rem] overflow-hidden"
          >
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-full object-cover grayscale brightness-50"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
