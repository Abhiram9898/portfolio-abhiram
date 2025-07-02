// Contact.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.2,  
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const socialIconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } },
    hover: { scale: 1.2, y: -5, transition: { type: "spring", stiffness: 300 } }, 
    tap: { scale: 0.9 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert("Thank you for your message! I'll get back to you soon."); 
    e.target.reset(); 
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 relative overflow-hidden" 
    >
      {/* Background circles/blobs for visual interest */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700 leading-tight tracking-tight" 
        >
          Let's <span className="text-indigo-600">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto" 
        >
          Have a project idea, an opportunity, or just want to say hi? I'm always open to new collaborations and discussions. Feel free to reach out!
        </motion.p>

        <motion.form
          variants={containerVariants} // Apply container variants for staggered form elements
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full bg-white shadow-md rounded-xl p-6 grid gap-4 max-w-md mx-auto border border-blue-100 relative overflow-hidden"
          onSubmit={handleSubmit} 
        >
          <motion.input
            variants={itemVariants}
            name='name'
            type="text"
            placeholder="Your Name"
            className="border-2 border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300 placeholder-gray-500 text-gray-800" 
            required
          />
          <motion.input
            variants={itemVariants}
            name='email'
            type="email"
            placeholder="Your Email"
            className="border-2 border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300 placeholder-gray-500 text-gray-800"
            required
          />
          <motion.textarea
            variants={itemVariants}
            name='message'
            placeholder="Your Message"
            rows={5} 
            className="border-2 border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition-all duration-300 placeholder-gray-500 text-gray-800 resize-y" // Allow vertical resize
            required
          ></motion.textarea>
          <motion.button
            variants={itemVariants}
            type="submit"
            className="group relative inline-flex items-center justify-center
                       px-6 py-2.5 rounded-full overflow-hidden
                       bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold text-base
                       shadow-md hover:shadow-xl transition-all duration-300 ease-out
                       transform hover:scale-102 mt-4" // Consistent button styling from Hero
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          variants={containerVariants} // Stagger social icons as well
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex justify-center gap-8 text-blue-600 text-3xl" // Larger icons, more gap
        >
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            href="mailto:abhiramkumar2000@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email Me"
          >
            <FaEnvelope className="hover:text-blue-800 transition-colors" />
          </motion.a>

          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://instagram.com/ig_maahi"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Profile"
          >
            <FaInstagram className="hover:text-pink-600 transition-colors" />
          </motion.a>
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://twitter.com/Abhiram_9898"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="hover:text-sky-500 transition-colors" />
          </motion.a>
          <motion.a
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
            href="https://facebook.com/abhiram.kumar.5439"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Profile"
          >
            <FaFacebook className="hover:text-blue-700 transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}