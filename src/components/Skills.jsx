import { motion as Motion } from 'framer-motion';
import {
  FaAws,
  FaDocker,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import DepthCard from './DepthCard';

const groups = [
  {
    number: '01',
    title: 'Front-end craft',
    text: 'Responsive, accessible interfaces with motion that supports the story.',
    tools: [
      'React',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
    icons: [FaReact, SiTypescript, SiTailwindcss],
    color: '#70f1ff',
  },
  {
    number: '02',
    title: 'Back-end systems',
    text: 'Secure APIs, authentication, data modeling, and real-time product features.',
    tools: [
      'Node.js',
      'Express',
      'REST APIs',
      'Redis',
      'FastAPI',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
    ],
    icons: [FaNodeJs, SiRedis, SiFastapi, SiPostgresql],
    color: '#c7ff67',
  },
  {
    number: '03',
    title: 'Engineering toolkit',
    text: 'A broad foundation for solving problems and shipping reliably.',
    tools: [
      'Java',
      'Python',
      'Docker',
      'AWS',
      'Git',
      'Linux',
      'Vercel',
    ],
    icons: [FaJava, FaPython, FaDocker, FaAws, FaLinux],
    color: '#b9a7ff',
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/[0.07] bg-[#070a10] py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <Motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-300/[0.025] blur-[120px]"
      />

      <Motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#b9a7ff]/[0.025] blur-[120px]"
      />

      <div className="section-wrap relative z-10">

        {/* Header */}
        <Motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <div className="section-kicker">
            03 / Capabilities
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="section-title">
              Tools change.{' '}
              <span>Good judgment scales.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              My stack is a toolkit, not a boundary. I choose
              technologies around the problem and the people using
              the product.
            </p>
          </div>
        </Motion.div>

        {/* Skill Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Motion.div
              key={group.title}
              custom={index * 0.08}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >
              <DepthCard
                intensity={2.5}
                glow={`${group.color}18`}
                className="group relative min-h-[410px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1018] p-6 sm:p-7"
              >
                {/* Background glow */}
                <Motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.08, 0.14, 0.08],
                  }}
                  transition={{
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                  style={{
                    background: group.color,
                  }}
                />

                {/* Top line */}
                <div className="relative flex items-center justify-between">
                  <span className="mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                    {group.number}
                  </span>

                  <span className="mono flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-slate-600">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: group.color,
                        boxShadow: `0 0 10px ${group.color}`,
                      }}
                    />
                    Core system
                  </span>
                </div>

                {/* Icons */}
                <div className="relative mt-9 flex gap-2.5">
                  {group.icons.map((Icon, iconIndex) => (
                    <Motion.div
                      key={iconIndex}
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
                        delay: index * 0.08 + iconIndex * 0.06,
                        duration: 0.45,
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.06,
                        rotate: 2,
                      }}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.025] text-lg transition-colors duration-300 group-hover:border-white/[0.14]"
                      style={{
                        color: group.color,
                      }}
                    >
                      <Icon />
                    </Motion.div>
                  ))}
                </div>

                {/* Title */}
                <Motion.h3
                  whileHover={{
                    x: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="relative mt-7 text-2xl font-semibold tracking-[-0.045em]"
                >
                  {group.title}
                </Motion.h3>

                {/* Description */}
                <p className="relative mt-3 min-h-[48px] max-w-sm text-sm leading-6 text-slate-500">
                  {group.text}
                </p>

                {/* Divider */}
                <div className="relative mt-6 h-px bg-white/10">
                  <Motion.div
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.25 + index * 0.08,
                    }}
                    className="absolute inset-y-0 left-0 w-1/3"
                    style={{
                      background: group.color,
                      boxShadow: `0 0 10px ${group.color}`,
                    }}
                  />
                </div>

                {/* Technologies */}
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool, toolIndex) => (
                    <Motion.span
                      key={tool}
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          0.3 +
                          index * 0.06 +
                          toolIndex * 0.025,
                        duration: 0.3,
                      }}
                      whileHover={{
                        y: -2,
                        borderColor: `${group.color}55`,
                        color: '#e2e8f0',
                      }}
                      className="mono rounded-full border border-white/10 px-2.5 py-1.5 text-[8px] uppercase tracking-wider text-slate-500 transition-colors"
                    >
                      {tool}
                    </Motion.span>
                  ))}
                </div>

                {/* Bottom accent */}
                <Motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="absolute bottom-0 left-7 right-7 h-px origin-left"
                  style={{
                    background: group.color,
                    boxShadow: `0 0 12px ${group.color}`,
                  }}
                />
              </DepthCard>
            </Motion.div>
          ))}
        </div>

        {/* Bottom micro statement */}
        <Motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px w-10 bg-cyan-300/40" />

          <span className="mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
            Build with the right tool / not the loudest tool
          </span>
        </Motion.div>
      </div>
    </section>
  );
}