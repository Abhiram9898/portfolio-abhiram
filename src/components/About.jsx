// About.jsx
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'; // Import icons

export default function About() {
  // Framer Motion Variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger children by 0.15 seconds
        delayChildren: 0.2, // Delay before children start animating
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } },
  };

  const factCards = [
    { title: "Education", content: "MCA, Graphic Era Hill University (2022-2024)", icon: <FaGraduationCap /> },
    { title: "Experience", content: "MERN Stack Internship at GeeksforGeeks", icon: <FaBriefcase /> },
    { title: "Key Technologies", content: "React, Node.js, Express, MongoDB, Java, Python", icon: <FaCode /> },
  ];

  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 relative overflow-hidden" // Subtle gradient background
    >
      {/* Optional: Add subtle background shapes/gradients if you want more visual flair */}
      <div className="absolute top-10 left-1/2 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center z-10 relative"> {/* Added z-10, relative */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation once when 50% in view
          className="text-3xl md:text-5xl font-extrabold mb-6 text-blue-700 leading-tight tracking-tight" // Larger, bolder title, tighter tracking
        >
          About <span className="text-indigo-600">Me</span>
        </motion.h2>

        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation once
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed mb-10" // Darker text, more margin-bottom
        >
          I'm <span className="font-bold text-blue-600">Abhiram Kumar</span>, a passionate and driven Full Stack Developer specialized in the MERN stack.
          With a strong foundation in Java, Python, and a keen interest in DevOps practices, I thrive on building robust, scalable, and high-performance web applications.
          Currently, my focus is on mastering advanced React patterns, optimizing Node.js and MongoDB solutions, and deploying full-stack projects seamlessly using cloud platforms like AWS and containerization with Docker. I am committed to continuous learning and crafting impactful digital experiences.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants} // Apply container variants for stagger
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% in view
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto z-10 relative" // Increased gap, added z-10
      >
        {factCards.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants} // Apply item variants to each card
            className="group bg-white rounded-2xl p-7 shadow-lg border border-blue-100
                       hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out
                       flex flex-col items-center text-center transform" // Added flex for icon, transform for hover
          >
            <div className="text-blue-600 text-4xl mb-4 group-hover:text-indigo-700 transition-colors duration-300">
              {item.icon} {/* Render the icon */}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}