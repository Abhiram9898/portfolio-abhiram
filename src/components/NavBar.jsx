// Navbar.jsx
import { useState, useEffect } from 'react'; // Import useEffect
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll detection

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  // Effect to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Framer Motion variants for individual nav links (optional, for staggering)
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  };

  return (
    <motion.nav
      initial={false} // Prevents initial animation on mount
      animate={isScrolled ? "scrolled" : "top"} // Animate based on scroll state
      variants={{
        top: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly transparent white
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)', // Lighter shadow
          paddingTop: '12px', // py-3 (3 * 4px = 12px)
          paddingBottom: '12px',
        },
        scrolled: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // More transparent when scrolled
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', // Deeper shadow when scrolled
          backdropFilter: 'blur(8px)', // Glassmorphism effect
          WebkitBackdropFilter: 'blur(8px)', // For Safari support
          paddingTop: '8px', // Smaller padding when scrolled
          paddingBottom: '8px',
        },
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50" // Base classes
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold text-blue-700 hover:text-blue-900 transition-colors"
          >
            Abhiram.<span className="text-indigo-600">dev</span> {/* Subtle color split */}
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center space-x-6"> {/* items-center for resume button alignment */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true} // Activate spy scrolling
              hashSpy={true} // Activate hash scrolling for URL updates
              activeClass="text-blue-600 border-b-2 border-blue-600 pb-1" // Class for active link
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Abhiram_resume.pdf"
            download
            className="group relative inline-flex items-center justify-center
                       px-5 py-2 rounded-full overflow-hidden
                       bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold
                       shadow-md hover:shadow-lg transition-all duration-300 ease-out
                       transform hover:scale-105"
          >
            <span className="relative z-10">Resume</span>
            <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 transition-colors">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />} {/* Slightly larger icons */}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-lg border-t border-gray-100" // Deeper shadow, border-top
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={navItemVariants}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  activeClass="text-blue-600 font-bold" // Active class for mobile links
                  className="block text-gray-700 hover:text-blue-600 text-lg py-2 transition-colors" // Larger text, more padding
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={navItemVariants}>
              <a
                href="/Abhiram_resume.pdf"
                download
                className="block bg-gradient-to-r from-blue-600 to-indigo-700 hover:opacity-90
                           text-white font-semibold text-center py-3 rounded-full transition-all duration-300 shadow-md"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}