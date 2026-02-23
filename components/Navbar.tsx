
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 md:py-10 flex justify-between items-center pointer-events-none transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-5 md:py-6' : ''}`}>
        <div className="pointer-events-auto">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="text-xl sm:text-2xl font-serif italic tracking-tighter outline-none hover:opacity-60 transition-opacity"
          >
            Ascend Web Co.
          </motion.button>
        </div>

        <div className="hidden sm:flex gap-8 lg:gap-14 pointer-events-auto items-center">
          {['Work', 'Services', 'Contact'].map((label, idx) => (
            <motion.button 
              key={label} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => scrollTo(label.toLowerCase())}
              className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-black/30 hover:text-black transition-all duration-700 outline-none premium-link"
            >
              {label}
            </motion.button>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="h-4 w-px bg-black/10 mx-2"
          ></motion.div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.6 }}
            className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.2em]"
          >
            AMD, IN
          </motion.span>
        </div>
        
        {/* Mobile Menu Trigger */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden pointer-events-auto flex flex-col gap-1.5 p-2 outline-none"
        >
          <div className={`w-6 h-px bg-black transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-px bg-black transition-all duration-500 ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-px bg-black transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-white"
          >
            <div className="h-full flex flex-col justify-center px-12 gap-12">
              {['Work', 'Services', 'Contact'].map((label, idx) => (
                <motion.button 
                  key={label} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(label.toLowerCase())}
                  className="text-5xl font-serif italic text-left"
                >
                  {label}
                </motion.button>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-12 border-t border-black/5 flex flex-col gap-4"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-30">Get in touch</span>
                <a href="mailto:hello@ascendweb.co" className="text-xl font-serif italic">hello@ascendweb.co</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
