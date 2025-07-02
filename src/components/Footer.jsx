// Footer.jsx
import { motion } from 'framer-motion'; // Import motion
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  // Framer Motion variants for social icons
  const iconVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.2, y: -3, transition: { type: "spring", stiffness: 300, damping: 10 } },
    tap: { scale: 0.9 },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-10 shadow-lg" 
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"> {/* Added md:flex-row and justify-between for larger screens */}
        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl font-semibold text-blue-100" // Slightly lighter text for contrast
        >
          © 2025 <span className="font-extrabold text-white">Abhiram.</span><span className="text-indigo-200">dev</span>. All Rights Reserved. {/* Consistent branding */}
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1, delayChildren: 0.6 }} // Staggered animation for icons
          className="flex gap-7 text-2xl md:text-3xl" // Larger icons, increased gap
        >
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://github.com/Abhiram9898"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-white hover:text-gray-300 transition-colors duration-200" 
          >
            <FaGithub />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://linkedin.com/in/abhiram-kumar-341ab5140"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white hover:text-blue-300 transition-colors duration-200" 
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            href="mailto:abhiramkumar2000@gmail.com"
            aria-label="Email Me"
            className="text-white hover:text-orange-300 transition-colors duration-200" 
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://twitter.com/Abhiram_9898"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="text-white hover:text-sky-300 transition-colors duration-200" 
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://instagram.com/ig_maahi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-white hover:text-pink-300 transition-colors duration-200" 
          >
            <FaInstagram />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}