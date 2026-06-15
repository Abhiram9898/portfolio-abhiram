import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Stack', '#skills'],
  ['Work', '#projects'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <nav className={`section-wrap flex items-center justify-between rounded-full px-4 py-2 transition-all ${scrolled ? 'glass' : ''}`}>
        <a href="#hero" className="flex items-center gap-3" aria-label="Abhiram home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#70f1ff] text-sm font-extrabold text-[#071015]">AK</span>
          <span className="mono hidden text-[11px] uppercase tracking-[0.18em] text-slate-300 sm:block">Abhiram / Dev</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href], index) => (
            <a key={href} href={href} className="mono group text-[11px] uppercase tracking-[0.15em] text-slate-400 transition hover:text-white">
              <span className="mr-1 text-slate-600">0{index + 1}</span> {label}
            </a>
          ))}
          <a href="/Abhiram_SDE1.pdf" target="_blank" rel="noreferrer" className="button-secondary min-h-10 px-5 text-[11px]">
            Resume <FiArrowUpRight />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden" aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="section-wrap glass mt-2 rounded-3xl p-4 lg:hidden"
          >
            {links.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="mono flex justify-between border-b border-white/10 px-2 py-4 text-sm uppercase tracking-widest text-slate-300">
                {label}<span className="text-slate-600">0{index + 1}</span>
              </a>
            ))}
            <a href="/Abhiram_SDE1.pdf" target="_blank" rel="noreferrer" className="button-primary mt-4 w-full">Open resume <FiArrowUpRight /></a>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  );
}
