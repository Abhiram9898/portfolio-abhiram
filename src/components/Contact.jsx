import { useState } from 'react';
import { FiArrowUpRight, FiCopy, FiMail } from 'react-icons/fi';
import DepthCard from './DepthCard';

const email = 'abhiramkumar2000@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="pb-8 pt-20 sm:pt-28">
      <DepthCard intensity={2.5} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="section-wrap relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0b1119] px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <div className="absolute -right-36 -top-36 h-96 w-96 rounded-full bg-cyan-300/10 blur-[90px]" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-lime-300/5 blur-[80px]" />
        <div className="relative z-10 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="section-kicker">05 / Contact</div>
            <h2 className="text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.085em]">Let&apos;s make something <span className="text-[#70f1ff]">matter.</span></h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-base leading-7 text-slate-400">Have a role, project, or ambitious idea? Tell me what you are building and where I can help.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${email}`} className="button-primary"><FiMail /> Start a conversation <FiArrowUpRight /></a>
              <button type="button" onClick={copyEmail} className="button-secondary"><FiCopy /> {copied ? 'Copied' : 'Copy email'}</button>
            </div>
            <p className="mono mt-6 break-all text-[9px] uppercase tracking-[0.15em] text-slate-600">{email}</p>
          </div>
        </div>
      </DepthCard>
    </section>
  );
}
