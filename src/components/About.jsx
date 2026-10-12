import { motion as Motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiZap,
} from 'react-icons/fi';
import DepthCard from './DepthCard';

const facts = [
  { value: '07+', label: 'Projects shipped' },
  { value: '13', label: 'Core technologies' },
  { value: 'MCA', label: 'Computer applications' },
];

const principles = [
  {
    icon: FiZap,
    number: '01',
    title: 'Fast by default',
    text: 'Performance is a feature. I build experiences that feel immediate on every screen.',
  },
  {
    icon: FiLayers,
    number: '02',
    title: 'End-to-end thinking',
    text: 'From interface details to APIs and deployment, I care about the whole product.',
  },
  {
    icon: FiCode,
    number: '03',
    title: 'Built to evolve',
    text: 'Clear systems and maintainable code make the next version easier than the first.',
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
    y: 40,
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

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-[-12%] top-[12%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-10%] bottom-[8%] h-[360px] w-[360px] rounded-full bg-[#c7ff67]/[0.025] blur-[110px]" />

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="section-wrap relative z-10">

        {/* Section header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 flex items-center justify-between"
        >
          <div className="section-kicker">
            01 / Profile
          </div>

          <Motion.span
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mono hidden text-[9px] uppercase tracking-[0.2em] text-slate-600 sm:block"
          >
            About / 01
          </Motion.span>
        </Motion.div>

        {/* Main introduction */}
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          {/* Heading */}
          <Motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Motion.h2
              className="section-title"
            >
              Curious mind.
              <br />
              <span>Practical builder.</span>
            </Motion.h2>

            {/* Small accent */}
            <Motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.45,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 h-px bg-cyan-300/60"
            />
          </Motion.div>

          {/* Description */}
          <Motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col justify-between gap-8"
          >
            <p className="text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
              I specialize in the MERN stack and enjoy solving the complete
              problem, not just writing the code. My background in Java,
              Python, cloud tools, and DevOps helps me build reliable
              products with a wider technical view.
            </p>

            {/* Resume link */}
            <Motion.a
              href="/Abhiram_SDE1.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.97 }}
              className="group mono flex w-fit items-center gap-3 border-b border-cyan-300/50 pb-2 text-xs uppercase tracking-[0.18em] text-cyan-200"
            >
              <span>Read my resume</span>

              <Motion.span
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 4, y: -4 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 18,
                }}
              >
                <FiArrowUpRight className="text-sm" />
              </Motion.span>
            </Motion.a>
          </Motion.div>
        </div>

        {/* Stats */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3"
        >
          {facts.map((fact, index) => (
            <Motion.div
              key={fact.label}
              variants={revealUp}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }}
              className="group relative overflow-hidden"
            >
              <DepthCard
                intensity={4}
                className="relative h-full bg-[#090d14] px-7 py-9"
              >
                {/* Hover glow */}
                <Motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl"
                />

                {/* Number */}
                <div className="relative flex items-start justify-between">
                  <Motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + index * 0.1,
                      duration: 0.5,
                    }}
                    className="text-5xl font-semibold tracking-[-0.07em] text-[#c7ff67]"
                  >
                    {fact.value}
                  </Motion.div>

                  <span className="mono text-[8px] text-slate-700">
                    0{index + 1}
                  </span>
                </div>

                {/* Label */}
                <div className="mono relative mt-3 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  {fact.label}
                </div>

                {/* Bottom line */}
                <Motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.35 + index * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-7 h-px origin-left bg-white/10"
                />
              </DepthCard>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Principles */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-5 grid gap-5 md:grid-cols-3"
        >
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <Motion.div
                key={item.title}
                variants={revealUp}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                }}
                className="group relative"
              >
                <DepthCard
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="glass relative h-full overflow-hidden rounded-3xl p-7 transition duration-500 hover:border-cyan-300/30"
                >
                  {/* Background number */}
                  <Motion.span
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mono absolute right-6 top-6 text-[9px] tracking-[0.15em] text-slate-700"
                  >
                    {item.number}
                  </Motion.span>

                  {/* Icon container */}
                  <Motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="mb-14 grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.06] text-xl text-cyan-300 transition-colors duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10"
                  >
                    <Icon />
                  </Motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {item.text}
                  </p>

                  {/* Bottom accent */}
                  <Motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '42%' }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute bottom-0 left-7 h-px bg-cyan-300/60"
                  />

                  {/* Hover glow */}
                  <Motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="pointer-events-none absolute -bottom-24 -right-20 h-48 w-48 rounded-full bg-cyan-300/[0.04] blur-3xl"
                  />
                </DepthCard>
              </Motion.div>
            );
          })}
        </Motion.div>

        {/* Closing statement */}
        <Motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-cyan-300/40" />

          <p className="mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
            Building with intention
          </p>

          <Motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#c7ff67]"
          />
        </Motion.div>
      </div>
    </section>
  );
}