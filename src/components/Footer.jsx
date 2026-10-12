import { motion as Motion } from 'framer-motion';
import { FiArrowUp, FiExternalLink } from 'react-icons/fi';

const socials = [
  ['GitHub', 'https://github.com/Abhiram9898'],
  ['LinkedIn', 'https://linkedin.com/in/abhiram-kumar9898'],
  ['Instagram', 'https://instagram.com/ig_maahi'],
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden py-8">
      {/* Ambient glow */}
      <Motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute bottom-[-120px] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/[0.025] blur-[100px]"
      />

      <div className="section-wrap relative">

        {/* Animated top line */}
        <Motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-px origin-left bg-gradient-to-r from-white/10 via-cyan-300/20 to-transparent"
        />

        <Motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-7 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >

          {/* Copyright / status */}
          <div className="flex flex-col gap-3">

            <div className="mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
              © {new Date().getFullYear()} Abhiram Kumar
            </div>

            <div className="flex items-center gap-2">
              <Motion.span
                animate={{
                  opacity: [0.45, 1, 0.45],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#c7ff67] shadow-[0_0_12px_rgba(199,255,103,.7)]"
              />

              <span className="mono text-[8px] uppercase tracking-[0.16em] text-slate-700">
                Built with intent
              </span>
            </div>
          </div>

          {/* Navigation / Socials */}
          <div className="flex flex-wrap items-center gap-5">

            {socials.map(([label, href]) => (
              <Motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group mono flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 hover:text-cyan-300"
              >
                <span>{label}</span>

                <Motion.span
                  initial={{
                    opacity: 0,
                    x: -3,
                    y: 3,
                  }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FiExternalLink className="text-[9px]" />
                </Motion.span>
              </Motion.a>
            ))}

            {/* Divider */}
            <span className="hidden h-5 w-px bg-white/10 sm:block" />

            {/* Back to top */}
            <Motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              whileHover={{
                y: -4,
                rotate: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18,
              }}
              className="group grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-500 transition-colors duration-300 hover:border-cyan-300/50 hover:text-cyan-300"
            >
              <Motion.span
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FiArrowUp />
              </Motion.span>
            </Motion.button>
          </div>
        </Motion.div>

        {/* Bottom micro text */}
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
            delay: 0.4,
            duration: 0.6,
          }}
          className="mt-7 flex items-center justify-between"
        >
          <span className="mono text-[7px] uppercase tracking-[0.2em] text-slate-800">
            Software Engineer
          </span>

          <span className="mono text-[7px] uppercase tracking-[0.2em] text-slate-800">
            Delhi NCR / India
          </span>
        </Motion.div>
      </div>
    </footer>
  );
}