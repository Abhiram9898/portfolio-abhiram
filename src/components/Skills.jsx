import { FaAws, FaDocker, FaJava, FaLinux, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiFastapi, SiPostgresql, SiRedis, SiTailwindcss, SiTypescript } from 'react-icons/si';
import DepthCard from './DepthCard';

const groups = [
  {
    number: '01',
    title: 'Front-end craft',
    text: 'Responsive, accessible interfaces with motion that supports the story.',
    tools: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icons: [FaReact, SiTypescript, SiTailwindcss],
    color: '#70f1ff',
  },
  {
    number: '02',
    title: 'Back-end systems',
    text: 'Secure APIs, authentication, data modeling, and real-time product features.',
    tools: ['Node.js', 'Express', 'REST APIs', 'Redis', 'FastAPI', 'MongoDB', 'PostgreSQL', 'MySQL'],
    icons: [FaNodeJs, SiRedis, SiFastapi, SiPostgresql],
    color: '#c7ff67',
  },
  {
    number: '03',
    title: 'Engineering toolkit',
    text: 'A broad foundation for solving problems and shipping reliably.',
    tools: ['Java', 'Python', 'Docker', 'AWS', 'Git', 'Linux', 'Vercel'],
    icons: [FaJava, FaPython, FaDocker, FaAws, FaLinux],
    color: '#b9a7ff',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/[0.07] bg-[#070a10] py-28 sm:py-36">
      <div className="section-wrap">
        <div className="section-kicker">03 / Capabilities</div>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="section-title">Tools change. <span>Good judgment scales.</span></h2>
          <p className="max-w-sm text-sm leading-6 text-slate-500">My stack is a toolkit, not a boundary. I choose technologies around the problem and the people using the product.</p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {groups.map((group, index) => (
            <DepthCard
              key={group.title}
              glow={`${group.color}20`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1018] p-7 sm:p-8"
            >
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-10 blur-3xl" style={{ background: group.color }} />
              <div className="mono flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-600">
                <span>{group.number}</span><span>Core system</span>
              </div>
              <div className="mt-20 flex gap-3">
                {group.icons.map((Icon, iconIndex) => (
                  <div key={iconIndex} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.025] text-lg" style={{ color: group.color }}><Icon /></div>
                ))}
              </div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight">{group.title}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-slate-500">{group.text}</p>
              <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {group.tools.map((tool) => <span key={tool} className="mono rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-wider text-slate-400">{tool}</span>)}
              </div>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
}
