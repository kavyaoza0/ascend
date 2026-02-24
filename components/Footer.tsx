
import React from 'react';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 sm:py-24 md:py-28 bg-[#F9F8F6] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 border-t border-black/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20 md:mb-32">
          <div className="lg:col-span-6 flex flex-col gap-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif italic tracking-tighter leading-none"
            >
              Ascend.
            </motion.h2>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-30">Get in touch</span>
              <a href="mailto:hello@ascendweb.co" className="text-2xl sm:text-3xl md:text-4xl font-serif italic hover:opacity-60 transition-all premium-link self-start">
                hello@ascendweb.co
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-between items-start lg:items-end gap-12">
            <div className="flex flex-col lg:items-end gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-30">Social Presence</span>
              <div className="flex flex-wrap gap-8 sm:gap-12 text-[11px] font-mono uppercase tracking-[0.4em]">
                 {['LinkedIn', 'Twitter', 'Instagram', 'Dribbble'].map((link, idx) => (
                   <motion.a 
                     key={link} 
                     href="#" 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 0.4 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="hover:text-black hover:opacity-100 transition-all relative group"
                   >
                      {link}
                      <div className="absolute -bottom-1 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-700"></div>
                   </motion.a>
                 ))}
              </div>
            </div>
            
            <div className="text-left lg:text-right space-y-4">
               <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.4em]">Ahmedabad, IND // Global</span>
               <p className="text-base sm:text-lg font-serif italic text-black/40 max-w-xs lg:ml-auto">
                 Crafting high-performance digital experiences for forward-thinking brands.
               </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 gap-8">
           <div className="flex items-center gap-4">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
             <span className="text-[10px] font-mono uppercase tracking-[0.6em] opacity-20">Interface Engineering Studio // 2025</span>
           </div>
           <button 
             onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
             className="text-[10px] font-mono uppercase tracking-[0.6em] opacity-30 hover:opacity-100 transition-opacity group flex items-center gap-4"
           >
             Back to top
             <svg className="w-4 h-4 group-hover:-translate-y-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 15l7-7 7 7" />
             </svg>
           </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
