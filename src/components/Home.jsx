import { lazy, Suspense } from 'react';
import {
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiCode, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import heroImg from '../assets/Abhiram.jpg';

const SpatialScene = lazy(() => import('./SpatialScene'));

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

function InteractivePortrait() {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [7, -7]), { stiffness: 130, damping: 20 });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-9, 9]), { stiffness: 130, damping: 20 });
  const shineX = useTransform(pointerX, [0, 1], ['10%', '90%']);
  const shineY = useTransform(pointerY, [0, 1], ['10%', '90%']);
  const shineBackground = useTransform(
    [shineX, shineY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(112,241,255,.38), transparent 32%)`,
  );

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const resetPointer = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.92, x: 30 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="portrait-stage relative mx-auto w-full max-w-[580px]"
    >
      <div className="absolute -inset-[8%] opacity-75">
        <Suspense fallback={<div className="h-full w-full rounded-full bg-cyan-300/5 blur-3xl" />}>
          <SpatialScene />
        </Suspense>
      </div>

      <div className="portrait-orbit absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/20">
        <span className="absolute left-[8%] top-[13%] h-2 w-2 rounded-full bg-[#c7ff67] shadow-[0_0_18px_rgba(199,255,103,.9)]" />
      </div>
      <div className="absolute left-1/2 top-1/2 aspect-square w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

      <Motion.div
        style={{ rotateX, rotateY, transformPerspective: 1100 }}
        className="relative mx-auto aspect-[4/5] w-[72%] rounded-[2.2rem] border border-white/15 bg-[#0b1119] p-2 shadow-[0_45px_100px_rgba(0,0,0,.55)]"
      >
        <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-[#080c12]">
          <img
            src={heroImg}
            alt="Abhiram Kumar"
            className="h-full w-full object-cover object-[48%_center] grayscale-[18%] contrast-[1.05] transition duration-700 hover:scale-[1.025] hover:grayscale-0"
          />
          <Motion.div
            className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
            style={{ background: shineBackground }}
          />
          <div className="portrait-scan pointer-events-none absolute inset-x-0 h-px bg-cyan-200/70 shadow-[0_0_18px_rgba(112,241,255,.8)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b]/90 via-transparent to-cyan-200/5" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
            <div>
              <p className="text-lg font-semibold tracking-[-0.04em]">Abhiram Kumar</p>
              <p className="mono mt-1 text-[8px] uppercase tracking-[0.18em] text-cyan-200">Software Engineer / SDE-1</p>
            </div>
            <span className="mono rounded-full border border-white/15 bg-black/30 px-2.5 py-1.5 text-[7px] uppercase tracking-widest text-white/60">AK / 01</span>
          </div>
          <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-cyan-200/60" />
          <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-cyan-200/60" />
          <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-cyan-200/60" />
          <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-cyan-200/60" />
        </div>
      </Motion.div>

      <Motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        className="glass absolute left-0 top-[18%] hidden rounded-2xl p-4 sm:block"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200"><FiCode /></div>
          <div>
            <p className="mono text-[7px] uppercase tracking-[0.18em] text-slate-600">Current focus</p>
            <p className="mt-1 text-xs font-semibold">Fintech systems</p>
          </div>
        </div>
      </Motion.div>

      <Motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut' }}
        className="glass absolute bottom-[19%] right-0 rounded-2xl p-4"
      >
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#c7ff67] shadow-[0_0_16px_rgba(199,255,103,.7)]" />
          <div>
            <p className="mono text-[7px] uppercase tracking-[0.18em] text-slate-600">Status</p>
            <p className="mt-1 text-xs font-semibold">Open to opportunities</p>
          </div>
        </div>
      </Motion.div>

      <div className="mono absolute bottom-[4%] left-[5%] hidden items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-slate-500 sm:flex">
        <FiMapPin className="text-cyan-300" /> Noida / India
      </div>
    </Motion.div>
  );
}

export default function Home() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute left-[16%] top-24 h-[520px] w-[520px] rounded-full bg-cyan-400/[0.035] blur-[110px]" />
      <div className="section-wrap grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-5">
        <div className="relative z-10 pt-8 lg:pt-0">
          <Motion.div custom={0} variants={reveal} initial="hidden" animate="visible" className="mono mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-[#c7ff67]" />
            SDE-1 / Building fintech at scale
          </Motion.div>

          <Motion.p custom={0.06} variants={reveal} initial="hidden" animate="visible" className="mono mb-5 text-[10px] uppercase tracking-[0.24em] text-[#70f1ff]">
            Full-stack engineer / Product-minded builder
          </Motion.p>

          <Motion.h1 custom={0.12} variants={reveal} initial="hidden" animate="visible" className="max-w-3xl text-[clamp(4.2rem,9vw,8.2rem)] font-semibold leading-[0.84] tracking-[-0.085em]">
            Logic that <span className="text-slate-500">moves.</span> Products that matter.
          </Motion.h1>

          <Motion.p custom={0.2} variants={reveal} initial="hidden" animate="visible" className="mt-8 max-w-xl border-l border-cyan-300/40 pl-5 text-base leading-7 text-slate-400 sm:pl-7 sm:text-lg">
            I&apos;m Abhiram, a software engineer crafting secure fintech systems and memorable web experiences from interface to infrastructure.
          </Motion.p>

          <Motion.div custom={0.26} variants={reveal} initial="hidden" animate="visible" className="mt-9 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {[['30%', 'faster queries'], ['25%', 'higher engagement'], ['07+', 'projects built']].map(([value, label]) => (
              <div key={label} className="bg-[#090d14]/95 px-3 py-4 sm:px-5">
                <div className="text-xl font-semibold tracking-tight text-cyan-200 sm:text-2xl">{value}</div>
                <div className="mono mt-2 text-[7px] uppercase leading-3 tracking-[0.13em] text-slate-600 sm:text-[8px]">{label}</div>
              </div>
            ))}
          </Motion.div>

          <Motion.div custom={0.32} variants={reveal} initial="hidden" animate="visible" className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="button-primary">Explore my work <FiArrowDownRight /></a>
            <a href="/Abhiram_SDE1.pdf" target="_blank" rel="noreferrer" className="button-secondary">View resume <FiArrowUpRight /></a>
            <div className="ml-1 flex gap-2">
              <a href="https://github.com/Abhiram9898" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"><FaGithub /></a>
              <a href="https://linkedin.com/in/abhiram-kumar9898" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"><FaLinkedinIn /></a>
            </div>
          </Motion.div>
        </div>

        <InteractivePortrait />
      </div>

      <div className="border-y border-white/[0.07] py-4">
        <div className="mono flex w-max animate-[marquee_24s_linear_infinite] gap-12 text-[10px] uppercase tracking-[0.24em] text-slate-500">
          {[0, 1].map((group) => (
            <div key={group} className="flex gap-12">
              <span>Full-stack engineering</span><span className="text-[#70f1ff]">+</span><span>Fintech systems</span><span className="text-[#70f1ff]">+</span><span>Secure APIs</span><span className="text-[#70f1ff]">+</span><span>Ideas to production</span><span className="text-[#70f1ff]">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
