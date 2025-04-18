// Hero.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImg from '../assets/Abhiram.jpg'; 


const titles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React.js Enthusiast",
  "Backend with Node.js & Express",
  "MongoDB | MySQL | DevOps Learner",
];

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-white text-gray-900 px-6 gap-10"
    >
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold mb-2"
        >
          Hi, I'm <span className="text-blue-600">Abhiram Kumar</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4"
        >
          {titles[currentTitle]}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl max-w-lg mx-auto md:mx-0 mb-6 text-gray-600"
        >
          I'm a passionate Full Stack Developer with hands-on experience in building modern web applications using the MERN stack. I love creating clean, scalable, and high-performance solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4"
        >
          <a
            href="/Abhiram_resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-xl transition duration-300"
          >
            Let’s Connect
          </a>
          <a
  href="mailto:abhiramkumar2000@gmail.com"
  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
>
  Hire Me
</a>


        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="mt-6 flex justify-center md:justify-start gap-6 text-xl text-gray-600"
        >
          <a href="https://github.com/Abhiram9898" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abhiram-kumar-341ab5140" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:abhiramkumar2000@gmail.com">
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={heroImg}
          alt="Abhiram Kumar"
          className="rounded-full w-64 h-64 mx-auto mt-15  md:w-72 md:h-72 object-cover shadow-lg border-4 border-blue-500"
        />
      </motion.div>
    </section>
  );
}
