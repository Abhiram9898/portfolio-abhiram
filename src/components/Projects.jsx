import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import DepthCard from './DepthCard';

const featuredProjects = [
  {
    number: '01',
    title: 'SkillSwap',
    type: 'Full-stack platform',
    description: 'A peer-learning ecosystem where people can teach, learn, book sessions, and communicate in real time.',
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
    description: 'A focused interface for exploring GitHub developers through a clean, paginated profile grid.',
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
    description: 'A production-minded authentication flow with Google OAuth, JWT security, and cookie-based refresh tokens.',
    tech: ['React', 'Node.js', 'JWT', 'OAuth 2.0'],
    code: 'https://github.com/Abhiram9898/auth-system-react-node',
    accent: '#b9a7ff',
    visual: 'auth',
  },
  {
    number: '04',
    title: 'Drowsiness Detection',
    type: 'Computer vision',
    description: 'A real-time safety system that detects signs of driver fatigue and triggers an immediate alert.',
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
    description: 'A spatial, motion-led developer portfolio that presents my experience, capabilities, and selected work.',
    tech: ['React', 'Three.js', 'Tailwind', 'Framer Motion'],
    live: 'https://portfolio-abhiram.vercel.app',
    code: 'https://github.com/Abhiram9898/portfolio-abhiram',
  },
  {
    number: '06',
    title: 'Medi Chatbot',
    type: 'NLP desktop application',
    description: 'A medicine suggestion chatbot that uses natural-language processing to provide fast, relevant responses.',
    tech: ['Python', 'Tkinter', 'NLTK'],
    code: 'https://github.com/Abhiram9898/Medi-Chatbot',
  },
  {
    number: '07',
    title: 'Fertilizer Shop Management',
    type: 'Inventory & billing system',
    description: 'A desktop application for streamlining inventory, billing, record management, and data retrieval.',
    tech: ['Visual Basic 6.0', 'Oracle 10g'],
    code: 'https://github.com/Abhiram9898/Fertilizer-Shop-Management-System',
  },
];

function ProjectVisual({ project }) {
  if (project.visual === 'profiles') {
    return (
      <div className="grid h-full grid-cols-3 gap-3 p-5">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-2">
            <div className="mx-auto aspect-square w-3/4 rounded-full border border-white/10 bg-white/[0.07]" />
            <div className="mx-auto mt-3 h-1 w-3/4 rounded bg-white/10" />
            <div className="mx-auto mt-2 h-1 w-1/2 rounded bg-white/5" />
          </div>
        ))}
      </div>
    );
  }

  if (project.visual === 'auth') {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <div className="w-3/4 rounded-2xl border border-white/10 bg-black/30 p-5 shadow-2xl">
          <div className="mb-6 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /></div>
          <div className="mb-3 h-7 rounded-lg border border-white/10 bg-white/[0.04]" />
          <div className="mb-5 h-7 rounded-lg border border-white/10 bg-white/[0.04]" />
          <div className="h-8 rounded-lg" style={{ background: project.accent }} />
        </div>
      </div>
    );
  }

  if (project.visual === 'vision') {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden">
        <div className="absolute h-52 w-52 rounded-full border border-dashed border-white/20" />
        <div className="absolute h-36 w-36 rounded-full border border-white/10" />
        <div className="h-3 w-3 rounded-full shadow-[0_0_32px_12px_rgba(255,184,108,.45)]" style={{ background: project.accent }} />
        <span className="mono absolute bottom-5 left-5 text-[8px] uppercase tracking-widest text-white/40">Live vision scan / active</span>
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <div className="absolute left-[20%] h-36 w-36 rounded-full border border-white/10 bg-black/20" />
      <div className="absolute right-[20%] h-36 w-36 rounded-full border border-white/10 bg-black/20" />
      <div className="z-10 grid h-20 w-20 place-items-center rounded-3xl border border-white/20 bg-[#101923] text-2xl font-bold shadow-2xl">S</div>
      <div className="absolute h-px w-2/5" style={{ background: project.accent }} />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36">
      <div className="section-wrap">
        <div className="section-kicker">04 / Selected work</div>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="section-title">Proof over <span>promises.</span></h2>
          <p className="max-w-sm text-sm leading-6 text-slate-500">Selected projects across full-stack development, product interfaces, security, and machine learning.</p>
        </div>

        <div className="mt-16 space-y-6">
          {featuredProjects.map((project, index) => (
            <DepthCard
              key={project.title}
              intensity={3.5}
              glow={`${project.accent}20`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="group grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d14] lg:grid-cols-[0.86fr_1.14fr]"
            >
              <div className={`relative min-h-[270px] overflow-hidden border-b border-white/10 lg:min-h-[390px] lg:border-b-0 ${index % 2 ? 'lg:order-2 lg:border-l' : 'lg:border-r'}`} style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}18, transparent 60%)` }}>
                <ProjectVisual project={project} />
                <div className="mono absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/50">Project / {project.number}</div>
              </div>
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.2em]" style={{ color: project.accent }}>{project.type}</div>
                  <h3 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">{project.title}</h3>
                  <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tool) => <span key={tool} className="mono rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-wider text-slate-500">{tool}</span>)}
                  </div>
                </div>
                <div className="mt-12 flex flex-wrap gap-3">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="button-primary">View live <FiArrowUpRight /></a>}
                  <a href={project.code} target="_blank" rel="noreferrer" className="button-secondary"><FiGithub /> Source code</a>
                  {project.secondary && <a href={project.secondary} target="_blank" rel="noreferrer" className="button-secondary">Server <FiArrowUpRight /></a>}
                </div>
              </div>
            </DepthCard>
          ))}
        </div>

        <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-end">
          <div>
            <div className="mono text-[9px] uppercase tracking-[0.2em] text-cyan-300">Complete archive / 07 total</div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">Every project, <span className="text-slate-500">one place.</span></h3>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">Additional builds that show the range of problems, platforms, and technologies I have explored.</p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {archiveProjects.map((project, index) => (
            <DepthCard
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex min-h-[320px] flex-col justify-between rounded-[1.7rem] border border-white/10 bg-[#090d14] p-7 transition duration-300 hover:border-cyan-300/30"
            >
              <div>
                <div className="mono flex items-center justify-between text-[8px] uppercase tracking-[0.18em] text-slate-600">
                  <span>Project / {project.number}</span><span>{project.type}</span>
                </div>
                <h4 className="mt-12 text-2xl font-semibold tracking-[-0.045em]">{project.title}</h4>
                <p className="mt-4 text-sm leading-6 text-slate-500">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tool) => <span key={tool} className="mono rounded-full border border-white/10 px-2.5 py-1 text-[8px] uppercase tracking-wider text-slate-600">{tool}</span>)}
                </div>
              </div>
              <div className="mt-9 flex gap-5">
                {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="mono flex items-center gap-2 text-[9px] uppercase tracking-widest text-cyan-300">Live <FiArrowUpRight /></a>}
                <a href={project.code} target="_blank" rel="noreferrer" className="mono flex items-center gap-2 text-[9px] uppercase tracking-widest text-slate-400 transition hover:text-white">Code <FiGithub /></a>
              </div>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
}
