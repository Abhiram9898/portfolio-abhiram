// About.jsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed"
        >
          I'm <span className="font-semibold text-blue-500">Abhiram Kumar</span>, a Full Stack Developer specialized in the MERN stack.
          With a strong background in Java, Python, and DevOps practices, I enjoy building robust and scalable web applications.
          I'm currently focused on mastering React, Node.js, MongoDB, and deploying full-stack solutions using AWS and Docker.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {[
          { title: "Education", content: "MCA, Graphic Era Hill University (2022-2024)" },
          { title: "Experience", content: "MERN Stack Internship at GeeksforGeeks" },
          { title: "Technologies", content: "React, Node.js, Express, MongoDB, Java, Python" },
        ].map((item, index) => (
          <div key={index} className="bg-blue-50 rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
