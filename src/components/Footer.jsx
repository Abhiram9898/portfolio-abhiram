import { FiArrowUp } from 'react-icons/fi';

const socials = [
  ['GitHub', 'https://github.com/Abhiram9898'],
  ['LinkedIn', 'https://linkedin.com/in/abhiram-kumar9898'],
  ['Instagram', 'https://instagram.com/ig_maahi'],
];

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="section-wrap flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="mono text-[9px] uppercase tracking-[0.18em] text-slate-600">© {new Date().getFullYear()} Abhiram Kumar / Built with intent</div>
        <div className="flex flex-wrap items-center gap-5">
          {socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="mono text-[9px] uppercase tracking-[0.18em] text-slate-500 transition hover:text-cyan-300">{label}</a>)}
          <a href="#hero" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:border-cyan-300 hover:text-cyan-300"><FiArrowUp /></a>
        </div>
      </div>
    </footer>
  );
}
