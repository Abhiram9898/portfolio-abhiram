// Hero.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImg from '../assets/Abhiram.jpg';
import { gsap } from 'gsap';

const titles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React.js Enthusiast",
  "Backend with Node.js & Express",
  "MongoDB | MySQL | DevOps Learner",
];

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const heroRef = useRef(null); // Ref for the whole hero section
  const imageRef = useRef(null); // Ref for the image for GSAP
  const textContentRef = useRef(null); // Ref for the text content for GSAP
  const buttonsRef = useRef(null); // Ref for buttons
  const socialIconsRef = useRef(null); // Ref for social icons

  useEffect(() => {
    // Dynamic title animation (still good with Framer Motion)
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Main timeline for hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Image animation
      tl.fromTo(imageRef.current,
        { opacity: 0, scale: 0.7, rotate: -20, y: 50 },
        { opacity: 1, scale: 1, rotate: 0, y: 0, duration: 1.2, delay: 0.2,
          // Add a slight bounce with keyframes for more character
          keyframes: [
            { scale: 1.1, ease: "power2.out", duration: 0.3 },
            { scale: 1, ease: "bounce.out", duration: 0.6 }
          ]
        }, "<0.2") // Start slightly before text

      // Staggered text content animation
      tl.fromTo(textContentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        "<0.3" // Start 0.3 seconds after the previous animation ends
      );

      // Buttons animation
      tl.fromTo(buttonsRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
        "<0.2" // Start 0.2 seconds after previous
      );

      // Social icons animation
      tl.fromTo(socialIconsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "<0.2" // Start 0.2 seconds after previous
      );

    }, heroRef); // <- Scope all GSAP animations to the heroRef element

    return () => ctx.revert(); // Clean up GSAP animations on component unmount
  }, []);

  // Framer Motion Variants for smooth text transitions (still used for H2)
  const socialIconVariants = {
    hover: { scale: 1.2, color: "#3B82F6", transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.9 },
  };

  return (
    <section
      id="hero"
      ref={heroRef} // Assign ref to the main section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center
                 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900
                 px-6 py-16 md:py-0 gap-10 relative overflow-hidden"
    >
      


      {/* Text Content */}
      <div ref={textContentRef} className="flex-1 text-center md:text-left z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-2 leading-tight">
          Hi, I'm <span className="text-blue-700 tracking-wide">Abhiram Kumar</span>
        </h1>

        <AnimatePresence mode="wait">
          <motion.h2
            key={titles[currentTitleIndex]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl sm:text-3xl font-semibold text-blue-600 mb-6 italic"
          >
            {titles[currentTitleIndex]}
          </motion.h2>
        </AnimatePresence>

        <p className="text-lg sm:text-xl max-w-lg mx-auto md:mx-0 mb-8 text-gray-700 leading-relaxed">
          I'm a passionate Full Stack Developer with hands-on experience in building modern web applications using the MERN stack. I love creating clean, scalable, and high-performance solutions.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mb-8">
          <a
            href="/abhiram_resume_new.pdf"
            download
            className="group relative inline-flex items-center justify-center
                       px-8 py-3 rounded-full overflow-hidden
                       bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold
                       shadow-lg hover:shadow-xl transition-all duration-300 ease-out
                       transform hover:scale-105"
          >
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center
                       px-8 py-3 rounded-full overflow-hidden
                       border-2 border-blue-600 text-blue-600 font-bold
                       hover:bg-blue-600 hover:text-white transition-all duration-300 ease-out
                       transform hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>

          <a
            href="mailto:abhiramkumar2000@gmail.com"
            className="group relative inline-flex items-center justify-center
                       px-8 py-3 rounded-full overflow-hidden
                       bg-gray-200 text-gray-800 font-bold
                       shadow-md hover:shadow-lg hover:bg-gray-300 transition-all duration-300 ease-out
                       transform hover:scale-105"
          >
            <span className="relative z-10">Let’s Connect</span>
            <span className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        {/* Social Icons */}
        <div ref={socialIconsRef} className="mt-6 flex justify-center md:justify-start gap-6 text-2xl text-gray-500">
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://github.com/Abhiram9898"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://linkedin.com/in/abhiram-kumar-341ab5140"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            href="mailto:abhiramkumar2000@gmail.com"
            aria-label="Email Me"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex-1 flex justify-center relative z-0">
        <div ref={imageRef} className="relative p-2 md:p-4 rounded-full bg-blue-100 shadow-xl border-blue-300 border-opacity-70 border-4">
          <img
            src={heroImg}
            alt="Abhiram Kumar"
            className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover"
          />
          {/* Subtle animated ring around the image (Framer Motion) */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-400 border-dashed opacity-50 pointer-events-none"
            initial={{ scale: 1.05, rotate: 0 }}
            animate={{ scale: 1.1, rotate: 360 }} // Rotate 360 degrees
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }} // Slower rotation
          ></motion.div>
        </div>
      </div>
    </section>
  );
}