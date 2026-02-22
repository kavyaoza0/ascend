
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 sm:py-32 bg-[#FCFAF7] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-48 border-t border-black/5">
      <div className="max-w-7xl mx-auto reveal">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-24 mb-24 md:mb-32">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic tracking-tighter leading-none">Ascend.</h2>
            <div className="flex flex-wrap gap-10 sm:gap-12 text-[10px] font-bold uppercase tracking-[0.4em] opacity-30">
               {['LinkedIn', 'Twitter', 'Instagram'].map(link => (
                 <a key={link} href="#" className="hover:text-black transition-colors relative group">
                    {link}
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-700"></div>
                 </a>
               ))}
            </div>
          </div>
          <div className="text-left md:text-right space-y-2">
             <span className="text-[10px] font-mono opacity-20 uppercase tracking-[0.4em]">Ahmedabad, IND</span>
             <p className="text-[11px] font-serif italic text-black/40">Crafting digital spaces since 2018.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-black/5 gap-8">
           <span className="text-[9px] font-bold uppercase tracking-[0.8em] opacity-10">Interface Engineering Studio</span>
           <button 
             onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
             className="text-[10px] font-bold uppercase tracking-[1em] opacity-20 hover:opacity-100 transition-opacity group flex items-center gap-4"
           >
             Top
             <svg className="w-4 h-4 group-hover:-translate-y-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
           </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
