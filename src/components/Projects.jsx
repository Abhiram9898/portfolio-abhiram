import { motion as Motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiLayers,
} from 'react-icons/fi';
import DepthCard from './DepthCard';

const featuredProjects = [
  {
    number: '01',
    title: 'SkillSwap',
    type: 'Full-stack platform',
    description:
      'A peer-learning ecosystem where people can teach, learn, book sessions, and communicate in real time.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.IO'],
    code: 'https://github.com/Abhiram9898/SkillSwap-client',
    secondary: 'https://github.com/Abhiram9898/skillswap-server',
    accent: '#70f1ff',
    visual: 'exchange',
  },
  {
    number: '02',
    title: 'DevConnect',
    type: 'Developer discovery',
    description:
      'A focused interface for exploring GitHub developers through a clean, paginated profile grid.',
    tech: ['React', 'GitHub API', 'Axios', 'Tailwind'],
    live: 'https://dev-connect-gray.vercel.app',
    code: 'https://github.com/Abhiram9898/DevConnect',
    accent: '#c7ff67',
    visual: 'profiles',
  },
  {
    number: '03',
    title: 'Secure Auth',
    type: 'Identity system',
    description:
      'A production-minded authentication flow with Google OAuth, JWT security, and cookie-based refresh tokens.',
    tech: ['React', 'Node.js', 'JWT', 'OAuth 2.0'],
    code: 'https://github.com/Abhiram9898/auth-system-react-node',
    accent: '#b9a7ff',
    visual: 'auth',
  },
  {
    number: '04',
    title: 'Drowsiness Detection',
    type: 'Computer vision',
    description:
      'A real-time safety system that detects signs of driver fatigue and triggers an immediate alert.',
    tech: ['Python', 'OpenCV', 'CNN', 'NumPy'],
    code: 'https://github.com/Abhiram9898/Driver-Drowsiness-Detection-And-Alert-system',
    accent: '#ffb86c',
    visual: 'vision',
  },
];

const archiveProjects = [
  {
    number: '05',
    title: 'Portfolio Website',
    type: 'Interactive portfolio',
    description:
      'A spatial, motion-led developer portfolio that presents my experience, capabilities, and selected work.',
    tech: ['React', 'Three.js', 'Tailwind', 'Framer Motion'],
    live: 'https://portfolio-abhiram.vercel.app',
    code: 'https://github.com/Abhiram9898/portfolio-abhiram',
  },
  {
    number: '06',
    title: 'Medi Chatbot',
    type: 'NLP desktop application',
    description:
      'A medicine suggestion chatbot that uses natural-language processing to provide fast, relevant responses.',
    tech: ['Python', 'Tkinter', 'NLTK'],
    code: 'https://github.com/Abhiram9898/Medi-Chatbot',
  },
  {
    number: '07',
    title: 'Fertilizer Shop Management',
    type: 'Inventory & billing system',
    description:
      'A desktop application for streamlining inventory, billing, record management, and data retrieval.',
    tech: ['Visual Basic 6.0', 'Oracle 10g'],
    code: 'https://github.com/Abhiram9898/Fertilizer-Shop-Management-System',
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

function TechPills({ tech, compact = false }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((tool) => (
        <Motion.span
          key={tool}
          whileHover={{
            y: -2,
            borderColor: 'rgba(112,241,255,.3)',
            color: 'rgba(255,255,255,.8)',
          }}
          className={`mono rounded-full border border-white/10 uppercase tracking-wider text-slate-500 ${
            compact
              ? 'px-2.5 py-1 text-[8px]'
              : 'px-3 py-1.5 text-[9px]'
          }`}
        >
          {tool}
        </Motion.span>
      ))}
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.visual === 'profiles') {
    return (
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid h-full grid-cols-3 gap-2.5 p-5"
      >
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <Motion.div
            key={item}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.9,
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: item * 0.05,
                  duration: 0.4,
                },
              },
            }}
            whileHover={{
              y: -4,
              scale: 1.03,
            }}
            className="rounded-xl border border-white/10 bg-black/20 p-2"
          >
            <div className="mx-auto aspect-square w-3/4 rounded-full border border-white/10 bg-white/[0.07]" />
            <div className="mx-auto mt-2 h-1 w-3/4 rounded bg-white/10" />
            <div className="mx-auto mt-1.5 h-1 w-1/2 rounded bg-white/5" />
          </Motion.div>
        ))}
      </Motion.div>
    );
  }

  if (project.visual === 'auth') {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <Motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          className="w-[72%] rounded-2xl border border-white/10 bg-black/30 p-5 shadow-2xl"
        >
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>

          <div className="mb-3 h-7 rounded-lg border border-white/10 bg-white/[0.04]" />

          <div className="mb-4 h-7 rounded-lg border border-white/10 bg-white/[0.04]" />

          <Motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
            }}
            className="h-8 rounded-lg"
            style={{
              background: project.accent,
              boxShadow: `0 0 25px ${project.accent}30`,
            }}
          />
        </Motion.div>
      </div>
    );
  }

  if (project.visual === 'vision') {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden">
        <Motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute h-48 w-48 rounded-full border border-dashed border-white/20"
        />

        <Motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute h-32 w-32 rounded-full border border-white/10"
        />

        <Motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-3 w-3 rounded-full"
          style={{
            background: project.accent,
            boxShadow: `0 0 30px 10px ${project.accent}45`,
          }}
        />

        <span className="mono absolute bottom-5 left-5 text-[8px] uppercase tracking-widest text-white/40">
          Live vision scan / active
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <Motion.div
        animate={{
          x: [-12, 12, -12],
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-[17%] h-32 w-32 rounded-full border border-white/10 bg-black/20"
      />

      <Motion.div
        animate={{
          x: [12, -12, 12],
          y: [4, -4, 4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-[17%] h-32 w-32 rounded-full border border-white/10 bg-black/20"
      />

      <Motion.div
        whileHover={{
          scale: 1.08,
          rotate: 4,
        }}
        className="z-10 grid h-[72px] w-[72px] place-items-center rounded-2xl border border-white/20 bg-[#101923] text-2xl font-bold shadow-2xl"
      >
        S
      </Motion.div>

      <Motion.div
        animate={{
          scaleX: [0.8, 1.15, 0.8],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute h-px w-2/5"
        style={{
          background: project.accent,
        }}
      />
    </div>
  );
}

function ProjectButton({
  href,
  children,
  primary = false,
  icon,
}) {
  return (
    <Motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={
        primary ? 'button-primary' : 'button-secondary'
      }
    >
      {icon}
      {children}
      <FiArrowUpRight />
    </Motion.a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background atmosphere */}
      <Motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-cyan-300/[0.025] blur-[120px]"
      />

      <div className="section-wrap">

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
            04 / Selected work
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="section-title">
              Proof over <span>promises.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Selected projects across full-stack development,
              product interfaces, security, and machine learning.
            </p>
          </div>
        </Motion.div>

        {/* Featured projects */}
        <div className="mt-12 space-y-5">
          {featuredProjects.map((project, index) => (
            <Motion.div
              key={project.title}
              custom={index * 0.06}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
            >
              <DepthCard
                intensity={3}
                glow={`${project.accent}18`}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090d14]"
              >
                <div className="grid lg:grid-cols-[0.82fr_1.18fr]">

                  {/* Visual */}
                  <div
                    className={`relative h-[300px] overflow-hidden lg:h-[430px] ${
                      index % 2
                        ? 'lg:order-2 lg:border-l'
                        : 'lg:border-r'
                    } border-b border-white/10 lg:border-b-0`}
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.accent}15, transparent 62%)`,
                    }}
                  >
                    <ProjectVisual project={project} />

                    <div className="mono absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
                      Project / {project.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex min-h-[430px] flex-col justify-center p-7 sm:p-9 lg:p-11">
                    <div>

                      <div
                        className="mono text-[9px] uppercase tracking-[0.2em]"
                        style={{
                          color: project.accent,
                        }}
                      >
                        {project.type}
                      </div>

                      <Motion.h3
                        whileHover={{
                          x: 4,
                        }}
                        className="mt-4 text-4xl font-semibold tracking-[-0.065em] sm:text-5xl"
                      >
                        {project.title}
                      </Motion.h3>

                      <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400 sm:text-[15px]">
                        {project.description}
                      </p>

                      <div className="mt-5">
                        <TechPills tech={project.tech} />
                      </div>

                      {/* Buttons immediately after content */}
                      <div className="mt-7 flex flex-wrap gap-3">
                        {project.live && (
                          <ProjectButton
                            href={project.live}
                            primary
                          >
                            View live
                          </ProjectButton>
                        )}

                        <ProjectButton
                          href={project.code}
                          icon={<FiGithub />}
                        >
                          Source code
                        </ProjectButton>

                        {project.secondary && (
                          <ProjectButton
                            href={project.secondary}
                          >
                            Server
                          </ProjectButton>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </DepthCard>
            </Motion.div>
          ))}
        </div>

        {/* Archive */}
        <Motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mt-20 border-t border-white/10 pt-9"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mono text-[9px] uppercase tracking-[0.2em] text-cyan-300">
                Complete archive / 07 total
              </div>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Every project,{' '}
                <span className="text-slate-500">
                  one place.
                </span>
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Additional builds showing the range of problems,
              platforms, and technologies explored.
            </p>
          </div>
        </Motion.div>

        {/* Archive cards */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {archiveProjects.map((project, index) => (
            <Motion.div
              key={project.title}
              variants={reveal}
              custom={index * 0.06}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >
              <DepthCard
                intensity={2}
                glow="rgba(112,241,255,.07)"
                className="group flex min-h-[285px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#090d14] p-6 transition-colors duration-300 hover:border-cyan-300/25"
              >
                <div>
                  <div className="mono flex items-center justify-between text-[8px] uppercase tracking-[0.16em] text-slate-600">
                    <span>
                      Project / {project.number}
                    </span>

                    <span>
                      {project.type}
                    </span>
                  </div>

                  <Motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.05,
                    }}
                    className="mt-7 grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-200"
                  >
                    <FiLayers />
                  </Motion.div>

                  <h4 className="mt-5 text-xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h4>

                  <p className="mt-3 text-sm leading-5 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <TechPills
                      tech={project.tech}
                      compact
                    />
                  </div>
                </div>

                <div className="mt-7 flex gap-5">
                  {project.live && (
                    <Motion.a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        x: 3,
                      }}
                      className="mono flex items-center gap-2 text-[9px] uppercase tracking-widest text-cyan-300"
                    >
                      Live
                      <FiExternalLink />
                    </Motion.a>
                  )}

                  <Motion.a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      x: 3,
                    }}
                    className="mono flex items-center gap-2 text-[9px] uppercase tracking-widest text-slate-400 transition hover:text-white"
                  >
                    Code
                    <FiGithub />
                  </Motion.a>
                </div>
              </DepthCard>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}