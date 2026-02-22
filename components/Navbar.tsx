
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 md:py-10 flex justify-between items-center pointer-events-none transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-5 md:py-6' : ''}`}>
      <div className="pointer-events-auto">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="text-xl sm:text-2xl font-serif italic tracking-tighter outline-none hover:opacity-60 transition-opacity"
        >
          Ascend Web Co.
        </button>
      </div>

      <div className="hidden sm:flex gap-8 lg:gap-14 pointer-events-auto items-center">
        {['Work', 'Services', 'Contact'].map((label) => (
          <button 
            key={label} 
            onClick={() => scrollTo(label.toLowerCase())}
            className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-black/30 hover:text-black transition-all duration-700 outline-none premium-link"
          >
            {label}
          </button>
        ))}
        <div className="h-4 w-px bg-black/10 mx-2"></div>
        <span className="text-[8px] md:text-[9px] font-mono opacity-20 uppercase tracking-[0.2em]">AMD, IN</span>
      </div>
      
      {/* Mobile Menu Trigger Placeholder (optional visual only) */}
      <div className="sm:hidden pointer-events-auto">
        <div className="w-6 h-px bg-black/40 mb-1.5"></div>
        <div className="w-6 h-px bg-black/40"></div>
      </div>
    </nav>
  );
};

export default Navbar;
