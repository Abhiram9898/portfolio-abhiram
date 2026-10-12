import { lazy, Suspense } from 'react';
import {
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiMapPin,
  FiServer,
} from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SpatialScene = lazy(() => import('./SpatialScene'));

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const wordReveal = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: 'blur(8px)',
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function InteractivePortrait() {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [7, -7]),
    {
      stiffness: 140,
      damping: 22,
      mass: 0.7,
    }
  );

  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-9, 9]),
    {
      stiffness: 140,
      damping: 22,
      mass: 0.7,
    }
  );

  const shineX = useTransform(
    pointerX,
    [0, 1],
    ['10%', '90%']
  );

  const shineY = useTransform(
    pointerY,
    [0, 1],
    ['10%', '90%']
  );

  const shineBackground = useTransform(
    [shineX, shineY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(112,241,255,.42), transparent 32%)`
  );

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;

    const bounds =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - bounds.left) / bounds.width;

    const y =
      (event.clientY - bounds.top) / bounds.height;

    pointerX.set(Math.max(0, Math.min(1, x)));
    pointerY.set(Math.max(0, Math.min(1, y)));
  };

  const resetPointer = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <Motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        x: 35,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1.15,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="portrait-stage relative mx-auto w-full max-w-[580px] lg:-translate-y-24 xl:-translate-y-28"
    >
      {/* 3D Background */}
      <Motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -inset-[8%] opacity-75"
      >
        <Suspense
          fallback={
            <div className="h-full w-full rounded-full bg-cyan-300/5 blur-3xl" />
          }
        >
          <SpatialScene />
        </Suspense>
      </Motion.div>

      {/* Outer Orbit */}
      <Motion.div
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="portrait-orbit absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-200/20"
      >
        <Motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[8%] top-[13%] h-2 w-2 rounded-full bg-[#c7ff67] shadow-[0_0_18px_rgba(199,255,103,.9)]"
        />
      </Motion.div>

      {/* Inner Orbit */}
      <Motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-1/2 top-1/2 aspect-square w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
      />

      {/* Main Video Card */}
      <Motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1100,
        }}
        className="relative mx-auto aspect-[4/5] w-[72%] rounded-[2.2rem] border border-white/15 bg-[#0b1119] p-2 shadow-[0_45px_100px_rgba(0,0,0,.55)]"
      >
        <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-[#080c12]">

          <video
            src="/Abhiram_intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-[48%_center]"
          />

          {/* Dynamic Shine */}
          <Motion.div
            className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
            style={{
              background: shineBackground,
            }}
          />

          {/* Scan Line */}
          <div className="portrait-scan pointer-events-none absolute inset-x-0 h-px bg-cyan-200/70 shadow-[0_0_18px_rgba(112,241,255,.8)]" />

          {/* Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b]/95 via-transparent to-cyan-200/5" />

          {/* Video Label */}
          <Motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
            className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md"
          >
            <div className="mono flex items-center gap-2 text-[7px] uppercase tracking-[0.18em] text-cyan-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c7ff67]" />
              Software Engineer
            </div>
          </Motion.div>

          {/* Profile Information */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
            <div>
              <p className="text-lg font-semibold tracking-[-0.04em]">
                Abhiram Kumar
              </p>

              <p className="mono mt-1 text-[8px] uppercase tracking-[0.18em] text-cyan-200">
                Full-Stack / Backend Engineer
              </p>
            </div>

            <span className="mono rounded-full border border-white/15 bg-black/30 px-2.5 py-1.5 text-[7px] uppercase tracking-widest text-white/60">
              AK / 01
            </span>
          </div>

          {/* Corner Decorations */}
          <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-cyan-200/60" />
          <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-cyan-200/60" />
          <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-cyan-200/60" />
          <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-cyan-200/60" />
        </div>
      </Motion.div>

      {/* Current Focus */}
      <Motion.div
        initial={{
          opacity: 0,
          x: -20,
          y: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: {
            delay: 0.8,
            duration: 0.7,
          },
          x: {
            delay: 0.8,
            duration: 0.7,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="glass absolute left-0 top-[18%] hidden rounded-2xl p-4 sm:block"
      >
        <div className="flex items-center gap-3">
          <Motion.div
            animate={{
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200"
          >
            <FiServer />
          </Motion.div>

          <div>
            <p className="mono text-[7px] uppercase tracking-[0.18em] text-slate-600">
              Current focus
            </p>

            <p className="mt-1 text-xs font-semibold">
              CRM & backend systems
            </p>
          </div>
        </div>
      </Motion.div>

      {/* Status */}
      <Motion.div
        animate={{
          y: [0, 9, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.2,
          ease: 'easeInOut',
        }}
        className="glass absolute bottom-[19%] right-0 rounded-2xl p-4"
      >
        <div className="flex items-center gap-3">
          <Motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-2.5 w-2.5 rounded-full bg-[#c7ff67] shadow-[0_0_16px_rgba(199,255,103,.7)]"
          />

          <div>
            <p className="mono text-[7px] uppercase tracking-[0.18em] text-slate-600">
              Status
            </p>

            <p className="mt-1 text-xs font-semibold">
              Open to opportunities
            </p>
          </div>
        </div>
      </Motion.div>

      {/* Location */}
      <div className="mono absolute bottom-[4%] left-[5%] hidden items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-slate-500 sm:flex">
        <FiMapPin className="text-cyan-300" />
        Noida / India
      </div>
    </Motion.div>
  );
}

export default function Home() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24"
    >
      {/* Main background glow */}
      <Motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[16%] top-24 h-[520px] w-[520px] rounded-full bg-cyan-400/[0.035] blur-[110px]"
      />

      {/* Secondary glow */}
      <Motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute right-[-10%] top-[25%] h-[400px] w-[400px] rounded-full bg-[#c7ff67]/[0.02] blur-[120px]"
      />

      <div className="section-wrap grid min-h-[calc(100vh-6rem)] items-center gap-8 pb-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-2">

        {/* Left Content */}
        <div className="relative z-10 pt-6 lg:pt-0">

          {/* Availability Badge */}
          <Motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mono mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-300 backdrop-blur-sm"
          >
            <Motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[#c7ff67]"
            />

            Software Engineer / Open to opportunities
          </Motion.div>

          {/* Subtitle */}
          <Motion.p
            custom={0.06}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mono mb-4 text-[10px] uppercase tracking-[0.24em] text-[#70f1ff]"
          >
            Full-stack engineer / Backend-focused builder
          </Motion.p>

          {/* Main Heading */}
          <Motion.h1
            custom={0.12}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-[clamp(3.7rem,8.2vw,7.8rem)] font-semibold leading-[0.84] tracking-[-0.085em]"
          >
            I build{' '}
            <Motion.span
              variants={wordReveal}
              custom={0.2}
              initial="hidden"
              animate="visible"
              className="text-slate-500"
            >
              systems.
            </Motion.span>{' '}
            <br />
            Products that matter.
          </Motion.h1>

          {/* Description */}
          <Motion.p
            custom={0.2}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-7 max-w-xl border-l border-cyan-300/40 pl-5 text-base leading-7 text-slate-400 sm:pl-7 sm:text-lg"
          >
            I&apos;m Abhiram, a software engineer building full-stack
            applications, backend APIs, and business systems with a focus
            on clean architecture, performance, and real-world usability.
          </Motion.p>

          {/* Stats */}
          <Motion.div
            custom={0.26}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-7 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10"
          >
            {[
              ['01+', 'year engineering'],
              ['06+', 'CRM modules'],
              ['07+', 'projects built'],
            ].map(([value, label]) => (
              <Motion.div
                key={label}
                whileHover={{
                  y: -3,
                  backgroundColor: 'rgba(255,255,255,0.035)',
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group bg-[#090d14]/95 px-3 py-3.5 sm:px-5"
              >
                <div className="text-xl font-semibold tracking-tight text-cyan-200 sm:text-2xl">
                  {value}
                </div>

                <div className="mono mt-1.5 text-[7px] uppercase leading-3 tracking-[0.13em] text-slate-600 sm:text-[8px]">
                  {label}
                </div>
              </Motion.div>
            ))}
          </Motion.div>

          {/* Buttons */}
          <Motion.div
            custom={0.32}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Motion.a
              href="#projects"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="button-primary"
            >
              Explore my work
              <FiArrowDownRight />
            </Motion.a>

            <Motion.a
              href="/Abhiram_SDE1.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="button-secondary"
            >
              View resume
              <FiArrowUpRight />
            </Motion.a>

            <div className="ml-1 flex gap-2">
              <Motion.a
                href="https://github.com/Abhiram9898"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                <FaGithub />
              </Motion.a>

              <Motion.a
                href="https://linkedin.com/in/abhiram-kumar9898"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                <FaLinkedinIn />
              </Motion.a>
            </div>
          </Motion.div>
        </div>

        {/* Right Side */}
        <InteractivePortrait />
      </div>

      {/* Bottom Marquee */}
      <div className="border-y border-white/[0.07] py-4">
        <div className="mono flex w-max animate-[marquee_24s_linear_infinite] gap-12 text-[10px] uppercase tracking-[0.24em] text-slate-500">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex gap-12"
            >
              <span>Full-stack engineering</span>

              <span className="text-[#70f1ff]">
                +
              </span>

              <span>CRM systems</span>

              <span className="text-[#70f1ff]">
                +
              </span>

              <span>Node.js backends</span>

              <span className="text-[#70f1ff]">
                +
              </span>

              <span>Secure APIs</span>

              <span className="text-[#70f1ff]">
                +
              </span>

              <span>Ideas to production</span>

              <span className="text-[#70f1ff]">
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}