
import React, { useState, useEffect } from 'react';
import { generateProjectInsights } from '../services/geminiService';

const Contact: React.FC = () => {
  const [description, setDescription] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [auditState, setAuditState] = useState<'idle' | 'analyzing' | 'preparing'>('idle');
  const [auditMessage, setAuditMessage] = useState('');
  
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [sendingMessage, setSendingMessage] = useState('');

  const auditSteps = [
    "Exploring your idea...",
    "Brainstorming tools...",
    "Refining the strategy...",
    "Preparing advice..."
  ];

  const transmissionSteps = [
    "Establishing link...",
    "Encrypting message...",
    "Sending...",
    "Success."
  ];

  const handleGetInsight = async () => {
    if (!description || description.length < 10) return;
    setAuditState('analyzing');
    setInsight(null);
    
    let step = 0;
    const interval = setInterval(() => {
      setAuditMessage(auditSteps[step]);
      step++;
      if (step >= auditSteps.length) clearInterval(interval);
    }, 450);

    try {
      const res = await generateProjectInsights(description);
      setTimeout(() => {
        setAuditState('preparing');
        setTimeout(() => {
          setInsight(res);
          setAuditState('idle');
          setAuditMessage('');
        }, 500);
      }, 1800);
    } catch (e) {
      setAuditState('idle');
      setAuditMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    let step = 0;
    const interval = setInterval(() => {
      setSendingMessage(transmissionSteps[step]);
      step++;
      if (step >= transmissionSteps.length) clearInterval(interval);
    }, 600);

    setTimeout(() => {
      setFormStatus('success');
      setDescription('');
      setInsight(null);
      setSendingMessage('');
    }, 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 md:py-48 bg-[#F9F8F6] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-48 border-t border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 reveal">
            <div className="lg:sticky lg:top-40">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-30 mb-6 md:mb-8 block">Inquiry</span>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter leading-[0.8] mb-8 md:mb-12">Start a <br /> Dialogue.</h2>
              <div className="space-y-10 md:space-y-12">
                 <div className="space-y-3">
                   <span className="text-[10px] font-bold uppercase tracking-widest opacity-20 block">Contact Information</span>
                   <a href="mailto:hello@ascendweb.co" className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-serif italic hover:opacity-60 transition-all premium-link pb-1">hello@ascendweb.co</a>
                 </div>
                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/40 font-light leading-snug max-w-sm border-l-2 border-black/5 pl-6 md:pl-8">
                   Tell me about your business. I'll help you plan the tech, design the interface, and build the final site.
                 </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal stagger-2">
            {formStatus === 'success' ? (
              <div className="py-20 md:py-32 flex flex-col items-center justify-center bg-white border border-black/5 rounded-[2rem] md:rounded-[4rem] animate-in fade-in zoom-in duration-1000">
                <div className="mb-8 relative">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif italic mb-4">Message Sent.</h3>
                <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.4em]">Talk soon.</p>
                <button 
                  onClick={() => setFormStatus('idle')} 
                  className="mt-10 text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 hover:opacity-100 transition-all premium-link"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12 sm:space-y-14 md:space-y-16 relative">
                
                {formStatus === 'sending' && (
                  <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#F9F8F6]/80 backdrop-blur-sm rounded-3xl animate-in fade-in">
                    <div className="w-10 h-px bg-black/10 relative overflow-hidden mb-6">
                      <div className="absolute inset-y-0 left-0 bg-black w-full origin-left animate-loading-line"></div>
                    </div>
                    <p className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-60">{sendingMessage}</p>
                  </div>
                )}

                <div className="group border-b border-black/10 focus-within:border-black transition-colors pb-6">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-20 mb-4 block group-focus-within:opacity-100 transition-opacity">Identity</label>
                  <input required type="text" className="w-full bg-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic outline-none placeholder:text-black/[0.04]" placeholder="Name or Brand" />
                </div>
                
                <div className="group border-b border-black/10 focus-within:border-black transition-colors pb-6 relative">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-20 group-focus-within:opacity-100 transition-opacity">The Vision</label>
                    <div className="flex items-center gap-4">
                      {auditState !== 'idle' && (
                        <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest opacity-40 animate-pulse">
                          {auditMessage}
                        </span>
                      )}
                      <button 
                        type="button" 
                        onClick={handleGetInsight} 
                        disabled={auditState !== 'idle' || description.length < 10}
                        className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest px-4 md:px-6 py-2 rounded-full transition-all ${auditState !== 'idle' ? 'bg-black text-white' : 'bg-black/5 hover:bg-black hover:text-white disabled:opacity-20'}`}
                      >
                        {auditState === 'idle' ? 'AI Project Insight' : 'Thinking...'}
                      </button>
                    </div>
                  </div>
                  <textarea 
                    required 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={2} 
                    className="w-full bg-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light outline-none resize-none placeholder:text-black/[0.04] leading-snug" 
                    placeholder="Describe your project briefly..." 
                  />
                  
                  {insight && (
                    <div className="mt-8 p-6 md:p-10 bg-[#0A0A0A] text-white rounded-[1.5rem] md:rounded-[2.5rem] animate-in fade-in slide-in-from-top-4 duration-1000">
                       <div className="flex items-center gap-3 mb-4">
                         <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
                         <span className="text-[8px] md:text-[9px] font-mono text-white/40 uppercase tracking-[0.4em]">Expert Advice</span>
                       </div>
                       <p className="text-base sm:text-lg md:text-xl lg:text-2xl italic font-serif leading-snug text-white/90">{insight}</p>
                    </div>
                  )}
                </div>

                <button type="submit" className="group flex items-center gap-6 md:gap-8 outline-none pt-4">
                  <div className="w-12 h-12 md:w-14 lg:w-18 md:h-14 lg:h-18 rounded-full flex items-center justify-center transition-all duration-1000 bg-black lg:group-hover:scale-110 shadow-lg shrink-0">
                    <svg className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-30 mb-1">Confirm</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic leading-none lg:group-hover:translate-x-2 transition-transform duration-700">Send Inquiry</span>
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
