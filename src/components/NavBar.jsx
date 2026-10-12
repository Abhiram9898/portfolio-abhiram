import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiChevronRight,
  FiMenu,
  FiX,
} from 'react-icons/fi';

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
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = [
        'about',
        'experience',
        'skills',
        'projects',
        'contact',
      ];

      let current = 'hero';

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);

    const element = document.querySelector(href);

    if (!element) return;

    const offset = 90;
    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <nav
          className={`section-wrap flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled
              ? 'glass border border-white/[0.08] shadow-[0_15px_50px_rgba(0,0,0,.2)]'
              : 'border border-transparent'
          }`}
        >
          {/* Logo */}
          <Motion.a
            href="#hero"
            onClick={(event) => {
              event.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });

              setOpen(false);
            }}
            whileHover="hover"
            className="group flex items-center gap-3"
            aria-label="Abhiram home"
          >
            <Motion.span
              variants={{
                hover: {
                  rotate: -6,
                  scale: 1.06,
                },
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 18,
              }}
              className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-[#70f1ff] text-sm font-extrabold text-[#071015] shadow-[0_0_25px_rgba(112,241,255,.18)]"
            >
              <span className="relative z-10">AK</span>

              <Motion.span
                initial={{
                  x: '-120%',
                }}
                variants={{
                  hover: {
                    x: '120%',
                  },
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-white/60 blur-sm"
              />
            </Motion.span>

            <span className="mono hidden text-[11px] uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 group-hover:text-white sm:block">
              Abhiram / Dev
            </span>
          </Motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">
            {links.map(([label, href], index) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <Motion.a
                  key={href}
                  href={href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(href);
                  }}
                  whileHover={{
                    y: -1,
                  }}
                  className={`mono group relative py-2 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-500 hover:text-white'
                  }`}
                >
                  <span
                    className={`mr-1 transition-colors duration-300 ${
                      isActive
                        ? 'text-[#70f1ff]'
                        : 'text-slate-700 group-hover:text-slate-500'
                    }`}
                  >
                    0{index + 1}
                  </span>

                  {label}

                  {/* Active indicator */}
                  <Motion.span
                    initial={false}
                    animate={{
                      width: isActive ? '100%' : '0%',
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute bottom-0 left-0 h-px bg-[#70f1ff] shadow-[0_0_8px_rgba(112,241,255,.7)]"
                  />
                </Motion.a>
              );
            })}

            {/* Resume */}
            <Motion.a
              href="/Abhiram_SDE1.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="button-secondary min-h-10 px-5 text-[11px]"
            >
              Resume
              <Motion.span
                whileHover={{
                  x: 2,
                  y: -2,
                }}
              >
                <FiArrowUpRight />
              </Motion.span>
            </Motion.a>
          </div>

          {/* Mobile Menu Button */}
          <Motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setOpen((value) => !value)}
            className={`relative grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 lg:hidden ${
              open
                ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-200'
                : 'border-white/10 text-slate-300'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <Motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FiX />
                </Motion.span>
              ) : (
                <Motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FiMenu />
                </Motion.span>
              )}
            </AnimatePresence>
          </Motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <Motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="section-wrap glass mt-2 rounded-[1.75rem] border border-white/[0.08] p-3 shadow-[0_25px_80px_rgba(0,0,0,.4)] lg:hidden"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-3">
                <div>
                  <p className="mono text-[8px] uppercase tracking-[0.2em] text-cyan-200">
                    Navigation
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Explore the portfolio
                  </p>
                </div>

                <span className="mono text-[8px] uppercase tracking-widest text-slate-700">
                  05 sections
                </span>
              </div>

              {/* Links */}
              <div className="mt-2">
                {links.map(([label, href], index) => {
                  const sectionId = href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <Motion.a
                      key={href}
                      href={href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavClick(href);
                      }}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className={`group flex items-center justify-between border-b border-white/[0.07] px-3 py-4 transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`mono text-[9px] tracking-widest ${
                            isActive
                              ? 'text-[#70f1ff]'
                              : 'text-slate-700'
                          }`}
                        >
                          0{index + 1}
                        </span>

                        <span className="mono text-sm uppercase tracking-[0.16em]">
                          {label}
                        </span>
                      </div>

                      <Motion.span
                        animate={{
                          x: isActive ? 2 : 0,
                          opacity: isActive ? 1 : 0.35,
                        }}
                        className={
                          isActive
                            ? 'text-cyan-200'
                            : 'text-slate-600'
                        }
                      >
                        <FiChevronRight />
                      </Motion.span>
                    </Motion.a>
                  );
                })}
              </div>

              {/* Mobile Resume */}
              <Motion.a
                href="/Abhiram_SDE1.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="button-primary mt-4 w-full"
                onClick={() => setOpen(false)}
              >
                Open resume
                <FiArrowUpRight />
              </Motion.a>

              {/* Mobile Status */}
              <div className="mono mt-4 flex items-center justify-center gap-2 py-2 text-[8px] uppercase tracking-[0.18em] text-slate-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c7ff67]" />
                Open to opportunities
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.header>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {open && (
          <Motion.button
            type="button"
            aria-label="Close navigation"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}