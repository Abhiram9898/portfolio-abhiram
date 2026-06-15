import { motion as Motion } from 'framer-motion';
import { FiArrowUpRight, FiCode, FiLayers, FiZap } from 'react-icons/fi';
import DepthCard from './DepthCard';

const facts = [
  { value: '07+', label: 'Projects shipped' },
  { value: '13', label: 'Core technologies' },
  { value: 'MCA', label: 'Computer applications' },
];

const principles = [
  { icon: FiZap, title: 'Fast by default', text: 'Performance is a feature. I build experiences that feel immediate on every screen.' },
  { icon: FiLayers, title: 'End-to-end thinking', text: 'From interface details to APIs and deployment, I care about the whole product.' },
  { icon: FiCode, title: 'Built to evolve', text: 'Clear systems and maintainable code make the next version easier than the first.' },
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="section-wrap">
        <div className="section-kicker">01 / Profile</div>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <Motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">
            Curious mind. <span>Practical builder.</span>
          </Motion.h2>
          <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col justify-between gap-8">
            <p className="text-lg leading-8 text-slate-400">
              I specialize in the MERN stack and enjoy solving the complete problem, not just writing the code. My background in Java, Python, cloud tools, and DevOps helps me build reliable products with a wider technical view.
            </p>
            <a href="/Abhiram_SDE1.pdf" target="_blank" rel="noreferrer" className="mono flex w-fit items-center gap-3 border-b border-cyan-300/50 pb-2 text-xs uppercase tracking-[0.18em] text-cyan-200">
              Read my resume <FiArrowUpRight />
            </a>
          </Motion.div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {facts.map((fact) => (
            <DepthCard key={fact.label} intensity={3} className="bg-[#090d14] px-7 py-9">
              <div className="text-5xl font-semibold tracking-[-0.07em] text-[#c7ff67]">{fact.value}</div>
              <div className="mono mt-3 text-[10px] uppercase tracking-[0.18em] text-slate-500">{fact.label}</div>
            </DepthCard>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <DepthCard key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass group rounded-3xl p-7 transition duration-300 hover:border-cyan-300/30">
                <Icon className="mb-14 text-xl text-cyan-300" />
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
              </DepthCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
