import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiMail,
} from 'react-icons/fi';
import DepthCard from './DepthCard';

const email = 'abhiramkumar2000@gmail.com';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-8 pt-20 sm:pt-28"
    >
      {/* Ambient background glow */}
      <Motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute right-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-cyan-300/[0.045] blur-[130px]"
      />

      <Motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute bottom-[-15%] left-[15%] h-[420px] w-[420px] rounded-full bg-[#c7ff67]/[0.025] blur-[120px]"
      />

      <DepthCard
        intensity={3}
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="section-wrap relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0b1119] px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
      >
        {/* Technical grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:70px_70px]" />

        {/* Main glow */}
        <Motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute -right-36 -top-36 h-96 w-96 rounded-full bg-cyan-300/10 blur-[90px]"
        />

        <Motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-lime-300/5 blur-[80px]"
        />

        {/* Decorative corner */}
        <div className="pointer-events-none absolute right-7 top-7 hidden h-12 w-12 border-r border-t border-cyan-300/20 sm:block" />

        <div className="pointer-events-none absolute bottom-7 left-7 hidden h-12 w-12 border-b border-l border-cyan-300/20 sm:block" />

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="relative z-10 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          {/* Left side */}
          <div>
            <Motion.div variants={revealUp}>
              <div className="section-kicker">
                05 / Contact
              </div>
            </Motion.div>

            <Motion.h2
              variants={revealUp}
              className="mt-5 max-w-4xl text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.085em]"
            >
              Let&apos;s make something{' '}
              <Motion.span
                initial={{
                  opacity: 0,
                  filter: 'blur(8px)',
                }}
                whileInView={{
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="text-[#70f1ff]"
              >
                matter.
              </Motion.span>
            </Motion.h2>

            {/* Animated line */}
            <Motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 110,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-10 h-px bg-cyan-300/50"
            />
          </div>

          {/* Right side */}
          <Motion.div
            variants={revealUp}
            className="lg:pb-2"
          >
            <p className="max-w-md text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Have a role, project, or ambitious idea?
              Tell me what you are building and where I
              can help.
            </p>

            {/* Availability indicator */}
            <Motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
              }}
              className="mt-6 flex items-center gap-2"
            >
              <Motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="h-2 w-2 rounded-full bg-[#c7ff67] shadow-[0_0_14px_rgba(199,255,103,.7)]"
              />

              <span className="mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
                Open to opportunities
              </span>
            </Motion.div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              {/* Email */}
              <Motion.a
                href={`mailto:${email}`}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 18,
                }}
                className="button-primary group"
              >
                <FiMail />

                <span>
                  Start a conversation
                </span>

                <Motion.span
                  initial={{
                    x: 0,
                    y: 0,
                  }}
                  whileHover={{
                    x: 4,
                    y: -4,
                  }}
                >
                  <FiArrowUpRight />
                </Motion.span>
              </Motion.a>

              {/* Copy email */}
              <Motion.button
                type="button"
                onClick={copyEmail}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 18,
                }}
                className="button-secondary"
              >
                <Motion.span
                  key={copied ? 'check' : 'copy'}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: -15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </Motion.span>

                {copied ? 'Copied' : 'Copy email'}
              </Motion.button>
            </div>

            {/* Email */}
            <Motion.div
              variants={revealUp}
              className="mt-7"
            >
              <p className="mono break-all text-[9px] uppercase tracking-[0.15em] text-slate-600 transition-colors duration-300 hover:text-cyan-300/70">
                {email}
              </p>
            </Motion.div>
          </Motion.div>
        </Motion.div>

        {/* Bottom metadata */}
        <Motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="relative z-10 mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
            Available for meaningful work
          </span>

          <span className="mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
            Delhi NCR / India
          </span>
        </Motion.div>
      </DepthCard>
    </section>
  );
}