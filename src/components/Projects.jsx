import { motion } from 'framer-motion';

const projects = [
  {
    title: "SkillSwap – Peer Learning Platform",
    description:
      "A full-stack MERN platform that connects learners and instructors for skill exchange, with secure JWT auth, real-time chat, booking system, and admin dashboard.",
    tech:
      "React, Tailwind CSS, Redux Toolkit, Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT, Bcrypt.js, Framer Motion",
    link: "#", 
    github: "https://github.com/Abhiram9898/SkillSwap-client",
    backend: "https://github.com/Abhiram9898/skillswap-server",
  },
  {
    title: "DevConnect - Developer Portfolio Hub",
    description:
      "DevConnect is a sleek and modern React application that showcases GitHub developer profiles in a beautifully paginated grid layout.",
    tech: "React, Tailwind CSS, Axios (for API requests), Lucide-react (icons)",
    link: "https://dev-connect-gray.vercel.app",
    github: "https://github.com/Abhiram9898/DevConnect",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and Tailwind CSS showcasing my skills and projects.",
    tech: "React, Tailwind CSS, Framer Motion",
    link: "https://portfolio-abhiram.vercel.app",
    github: "https://github.com/Abhiram9898/portfolio-abhiram",
  },
  {
    title: "Driver Drowsiness Detection",
    description:
      "Real-time drowsiness detection system using CNN model with OpenCV and Pygame achieving 90% accuracy.",
    tech: "Python, OpenCV, NumPy, CNN",
    link: "#",
    github:
      "https://github.com/Abhiram9898/Driver-Drowsiness-Detection-And-Alert-system",
  },
  {
    title: "Medi Chatbot",
    description:
      "Medicine suggestion chatbot using NLP for fast, intelligent responses.",
    tech: "Python, Tkinter, NLTK",
    link: "#",
    github: "https://github.com/Abhiram9898/Medi-Chatbot",
  },
  {
    title: "Full-Stack Auth System — React + Node.js + Google OAuth",
    description:
      "A modern authentication system with React frontend, JWT-secured Node.js backend, Google OAuth integration, and secure cookie-based refresh tokens.",
    tech:
      "React, Tailwind CSS, Framer Motion, GSAP, Node.js, JWT, Google OAuth 2.0",
    link: "#",
    github: "https://github.com/Abhiram9898/auth-system-react-node",
  },
  {
    title: "Fertilizer Shop Management System",
    description:
      "A desktop application to streamline shop inventory and billing operations, enabling fast data retrieval and improved record management.",
    tech: "VB 6.0, Oracle 10g",
    link: "#",
    github: "https://github.com/Abhiram9898/Fertilizer-Shop-Management-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          My Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 italic mb-4">{project.tech}</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-blue-600 hover:bg-blue-700 py-1 px-4 rounded-md"
                  >
                    Live
                  </a>
                )}
                {/* Special case for SkillSwap showing frontend + backend */}
                {project.title.includes("SkillSwap") ? (
                  <>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-100 py-1 px-4 rounded-md"
                    >
                      Frontend
                    </a>
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 border border-green-600 hover:bg-green-100 py-1 px-4 rounded-md"
                    >
                      Backend
                    </a>
                  </>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 border border-blue-600 hover:bg-blue-100 py-1 px-4 rounded-md"
                  >
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
