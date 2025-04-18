// Skills.jsx
import { motion } from 'framer-motion';
import { FaReact,FaNodeJs, FaHtml5,FaCss3Alt,FaJava,FaPython,FaGitAlt,FaAws,} from 'react-icons/fa';
import { SiMongodb,SiJavascript,SiTailwindcss,SiDocker,SiMysql,} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
  { name: 'AWS', icon: <FaAws className="text-yellow-700" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-blue-600"
        >
          Tech Stack & Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow hover:shadow-md p-6 transition"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-gray-800 font-medium">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
