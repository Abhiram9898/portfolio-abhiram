import { motion as Motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiMapPin } from 'react-icons/fi';
import DepthCard from './DepthCard';

const roles = [
  {
    company: 'Opas Bizz Private Limited',
    role: 'Software Engineer (SDE-1)',
    period: 'Apr 2025 - Present',
    location: 'Noida, Uttar Pradesh',
    summary: 'Building and scaling secure fintech products across transaction management, payment workflows, financial reporting, and customer-facing account experiences.',
    achievements: [
      'Designed REST APIs for payment processing and transaction management with secure authentication and role-based authorization.',
      'Improved high-volume financial query response times by 30% using Redis caching, database indexing, and query optimization.',
      'Built reusable interfaces for statements, payment history, and real-time balance synchronization, increasing engagement by 25%.',
      'Implemented single active-session security with automatic token invalidation for suspicious concurrent logins.',
    ],
    metrics: [
      ['30%', 'faster queries'],
      ['25%', 'higher engagement'],
      ['15%', 'better satisfaction'],
    ],
    stack: ['React', 'Node.js', 'Express', 'Redis', 'MongoDB'],
    current: true,
  },
  {
    company: 'GeeksforGeeks',
    role: 'MERN Stack Intern',
    period: 'Dec 2024 - Apr 2025',
    location: 'Noida, Uttar Pradesh',
    summary: 'Developed production-grade MERN applications while strengthening authentication, frontend performance, reusable architecture, and team code quality.',
    achievements: [
      'Delivered full-stack features across MongoDB, Express, React, and Node.js applications.',
      'Implemented JWT authentication, role-based route protection, and session management, eliminating unauthorized access incidents.',
      'Used React Hooks and memoization strategies to achieve 40% faster load times and reduce code redundancy by 35%.',
      'Participated in peer reviews and applied ES6+ standards and React best practices across the development team.',
    ],
    metrics: [
      ['40%', 'faster load times'],
      ['35%', 'less redundancy'],
      ['100%', 'access incidents removed'],
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
];

const credentials = [
  {
    label: 'Education',
    title: 'Master of Computer Applications',
    detail: 'Graphic Era Hill University / 2022 - 2024',
  },
  {
    label: 'Education',
    title: 'Bachelor of Computer Applications',
    detail: 'Arcade Business School / 2019 - 2022',
  },
  {
    label: 'Certification',
    title: 'MERN Full-Stack Developer',
    detail: 'GeeksforGeeks / Apr 2024',
  },
  {
    label: 'Certification',
    title: 'Deloitte Technology Job Simulation',
    detail: 'Forage / Mar 2026',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/[0.07] bg-[#070a10] py-28 sm:py-36">
      <div className="section-wrap">
        <div className="section-kicker">02 / Experience</div>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="section-title">From learning fast to <span>shipping at scale.</span></h2>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Hands-on experience building fintech and full-stack products where performance, security, and user trust matter.
          </p>
        </div>

        <div className="relative mt-16 space-y-6">
          <div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-gradient-to-b from-cyan-300 via-white/15 to-transparent sm:block" />
          {roles.map((job, index) => (
            <Motion.article
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="relative sm:pl-16"
            >
              <div className={`absolute left-3 top-10 hidden h-4 w-4 rounded-full border-4 border-[#070a10] sm:block ${job.current ? 'bg-[#c7ff67] shadow-[0_0_22px_rgba(199,255,103,.6)]' : 'bg-slate-600'}`} />
              <DepthCard intensity={3.5} className="glass overflow-hidden rounded-[2rem]">
                <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:p-11">
                  <div>
                    <div className="mono flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] uppercase tracking-[0.18em] text-cyan-300">
                      <span className="flex items-center gap-2"><FiBriefcase /> {job.period}</span>
                      <span className="flex items-center gap-2 text-slate-600"><FiMapPin /> {job.location}</span>
                    </div>
                    <h3 className="mt-6 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">{job.role}</h3>
                    <p className="mt-2 text-base font-semibold text-[#c7ff67]">{job.company}</p>
                    <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">{job.summary}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {job.stack.map((tool) => (
                        <span key={tool} className="mono rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-wider text-slate-500">{tool}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                      {job.metrics.map(([value, label]) => (
                        <div key={label} className="bg-[#0a0f17] px-4 py-5">
                          <div className="text-2xl font-semibold tracking-tight text-cyan-200">{value}</div>
                          <div className="mono mt-2 text-[8px] uppercase leading-4 tracking-[0.14em] text-slate-600">{label}</div>
                        </div>
                      ))}
                    </div>
                    <ul className="mt-7 space-y-4">
                      {job.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3 text-sm leading-6 text-slate-400">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DepthCard>
            </Motion.article>
          ))}
        </div>

        <div className="mt-20 flex items-center gap-3">
          <FiAward className="text-[#c7ff67]" />
          <h3 className="mono text-[11px] uppercase tracking-[0.2em] text-slate-300">Foundation & credentials</h3>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {credentials.map((item) => (
            <DepthCard key={item.title} intensity={3} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mono text-[8px] uppercase tracking-[0.18em] text-cyan-300">{item.label}</div>
              <div className="mt-3 font-semibold tracking-tight text-slate-200">{item.title}</div>
              <div className="mono mt-2 text-[9px] uppercase tracking-[0.12em] text-slate-600">{item.detail}</div>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
}
