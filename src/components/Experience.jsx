import { motion as Motion } from 'framer-motion';
import {
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiMapPin,
} from 'react-icons/fi';
import DepthCard from './DepthCard';

const roles = [
  {
    company: 'Opas Bizz Private Limited',
    role: 'Software Engineer',
    period: 'May 2025 - Sep 2026',
    location: 'Noida, Uttar Pradesh',
    current: false,

    summary:
      'Worked on a company-wide CRM platform supporting purchase, logistics, sales, HR, leave management, warehouse operations, and related business workflows. Contributed across frontend and backend development with a focus on reliable APIs, secure access, maintainable features, and smooth business operations.',

    achievements: [
      'Developed and maintained CRM features across Purchase, Logistics, Sales, HR, Leave Management, and Warehouse modules.',
      'Built and integrated REST APIs using Node.js and Express.js for business workflows, data management, and frontend-backend communication.',
      'Implemented authentication and role-based authorization to control access across different CRM users and modules.',
      'Worked with MongoDB for application data modeling, querying, updates, and business workflow management.',
      'Used Redis caching and database optimization techniques where required to improve API and data access performance.',
      'Collaborated on Angular/React-based interfaces to build reusable components, dashboards, forms, tables, and operational workflows.',
      'Worked on leave application and personal leave history functionality while preserving existing CRM functionality.',
      'Contributed to warehouse and logistics dashboards designed around day-to-day import, export, inventory, and operational activities.',
    ],

    metrics: [
      ['CRM', 'Business platform'],
      ['06+', 'Core modules'],
      ['E2E', 'Feature ownership'],
    ],

    stack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'REST APIs',
      'React',
      'Angular',
      'Git',
    ],
  },

  {
    company: 'GeeksforGeeks',
    role: 'MERN Stack Intern',
    period: 'Dec 2024 - Apr 2025',
    location: 'Noida, Uttar Pradesh',
    current: false,

    summary:
      'Completed hands-on MERN stack training and internship, working on full-stack applications while building practical experience with frontend development, backend APIs, authentication, databases, and collaborative development practices.',

    achievements: [
      'Developed full-stack features using MongoDB, Express.js, React, and Node.js.',
      'Built REST APIs and connected frontend applications with backend services and databases.',
      'Implemented JWT-based authentication and protected application routes.',
      'Worked with React Hooks and reusable components to create maintainable frontend interfaces.',
      'Practiced database operations with MongoDB including schema design, queries, updates, and data management.',
      'Participated in code reviews and followed modern JavaScript and React development practices.',
    ],

    metrics: [
      ['MERN', 'Full-stack development'],
      ['REST', 'API development'],
      ['JWT', 'Authentication'],
    ],

    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'JavaScript',
    ],
  },
];

const credentials = [
  {
    label: 'Education',
    title: 'Master of Computer Applications',
    detail: 'Graphic Era Hill University / MCA',
  },
  {
    label: 'Education',
    title: 'Bachelor of Computer Applications',
    detail: 'Arcade Business College / BCA',
  },
  {
    label: 'Certification',
    title: 'MERN Full-Stack Developer',
    detail: 'GeeksforGeeks / Training & Internship',
  },
  {
    label: 'Certification',
    title: 'Deloitte Technology Job Simulation',
    detail: 'Forage / Mar 2026',
  },
];

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
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-white/[0.07] bg-[#070a10] py-28 sm:py-36"
    >
      {/* Ambient background */}
      <Motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.035] blur-[130px]"
      />

      <Motion.div
        animate={{
          x: [0, -25, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute bottom-0 left-[-10%] h-[400px] w-[400px] rounded-full bg-[#c7ff67]/[0.02] blur-[120px]"
      />

      {/* Technical grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="section-wrap relative z-10">

        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="section-kicker">
            02 / Experience
          </div>

          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="section-title max-w-4xl">
              From learning fast to{' '}
              <span>building real systems.</span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Experience building and maintaining business-focused CRM
              systems across sales, purchase, logistics, HR, warehouse,
              and operational workflows.
            </p>
          </div>
        </Motion.div>

        {/* Experience timeline */}
        <div className="relative mt-16 space-y-8">

          {/* Timeline */}
          <div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-gradient-to-b from-cyan-300/70 via-white/15 to-transparent sm:block" />

          {roles.map((job, index) => (
            <Motion.article
              key={`${job.company}-${job.role}`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative sm:pl-16"
            >
              {/* Timeline node */}
              <Motion.div
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12 + 0.2,
                  type: 'spring',
                  stiffness: 250,
                  damping: 18,
                }}
                className={`absolute left-3 top-10 hidden h-4 w-4 rounded-full border-4 border-[#070a10] sm:block ${
                  job.current
                    ? 'bg-[#c7ff67] shadow-[0_0_22px_rgba(199,255,103,.6)]'
                    : 'bg-cyan-300/70 shadow-[0_0_16px_rgba(112,241,255,.25)]'
                }`}
              />

              <DepthCard
                intensity={3.5}
                className="glass group overflow-hidden rounded-[2rem] border border-white/10 transition-colors duration-500 hover:border-cyan-300/20"
              >
                <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:p-11">

                  {/* Job information */}
                  <div>

                    <div className="mono flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] uppercase tracking-[0.18em] text-cyan-300">
                      <span className="flex items-center gap-2">
                        <FiBriefcase />
                        {job.period}
                      </span>

                      <span className="flex items-center gap-2 text-slate-600">
                        <FiMapPin />
                        {job.location}
                      </span>
                    </div>

                    <Motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2,
                        duration: 0.6,
                      }}
                      className="mt-6 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl"
                    >
                      {job.role}
                    </Motion.h3>

                    <p className="mt-2 text-base font-semibold text-[#c7ff67]">
                      {job.company}
                    </p>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
                      {job.summary}
                    </p>

                    {/* Technology stack */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {job.stack.map((tool, toolIndex) => (
                        <Motion.span
                          key={tool}
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: 0.2 + toolIndex * 0.04,
                          }}
                          whileHover={{
                            y: -2,
                          }}
                          className="mono rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[9px] uppercase tracking-wider text-slate-500 transition-colors duration-300 hover:border-cyan-300/30 hover:text-cyan-200"
                        >
                          {tool}
                        </Motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>

                    {/* Metrics */}
                    <Motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                      className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3"
                    >
                      {job.metrics.map(([value, label]) => (
                        <Motion.div
                          key={label}
                          variants={revealUp}
                          whileHover={{
                            backgroundColor:
                              'rgba(255,255,255,0.035)',
                          }}
                          className="bg-[#0a0f17] px-4 py-5 transition-colors duration-300"
                        >
                          <div className="text-2xl font-semibold tracking-tight text-cyan-200">
                            {value}
                          </div>

                          <div className="mono mt-2 text-[8px] uppercase leading-4 tracking-[0.14em] text-slate-600">
                            {label}
                          </div>
                        </Motion.div>
                      ))}
                    </Motion.div>

                    {/* Achievements list */}
                    <ul className="mt-7 space-y-4">
                      {job.achievements.map(
                        (achievement, achievementIndex) => (
                          <Motion.li
                            key={achievement}
                            initial={{
                              opacity: 0,
                              x: 15,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay:
                                0.15 +
                                achievementIndex * 0.07,
                              duration: 0.55,
                            }}
                            className="group/item flex gap-3 text-sm leading-6 text-slate-400"
                          >
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/10 bg-cyan-300/[0.04] text-cyan-300 transition-colors duration-300 group-hover/item:border-cyan-300/30">
                              <FiCheckCircle className="text-[11px]" />
                            </span>

                            <span className="transition-colors duration-300 group-hover/item:text-slate-300">
                              {achievement}
                            </span>
                          </Motion.li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* Card bottom accent */}
                <Motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-cyan-300/50 via-cyan-300/10 to-transparent"
                />
              </DepthCard>
            </Motion.article>
          ))}
        </div>

        {/* Credentials */}
        <Motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20 flex items-center gap-3"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#c7ff67]/10">
            <FiAward className="text-[#c7ff67]" />
          </div>

          <h3 className="mono text-[11px] uppercase tracking-[0.2em] text-slate-300">
            Foundation & credentials
          </h3>
        </Motion.div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          {credentials.map((item, index) => (
            <Motion.div
              key={item.title}
              variants={revealUp}
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <DepthCard
                intensity={3}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-cyan-300/20"
              >
                <div className="flex items-start justify-between">
                  <div className="mono text-[8px] uppercase tracking-[0.18em] text-cyan-300">
                    {item.label}
                  </div>

                  <span className="mono text-[8px] text-slate-700">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-3 font-semibold tracking-tight text-slate-200">
                  {item.title}
                </div>

                <div className="mono mt-2 text-[9px] uppercase tracking-[0.12em] text-slate-600">
                  {item.detail}
                </div>
              </DepthCard>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}