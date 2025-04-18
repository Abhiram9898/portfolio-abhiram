// Contact.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mb-10"
        >
          Have a project idea, opportunity, or just want to say hi? I'm always open to connect.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-xl p-6 grid gap-4 max-w-xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (form not wired yet)");
          }}
          
        >
          <input
            name='name'
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name='email'
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name='message'
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center gap-6 text-blue-600 text-2xl"
        >
          <a href="mailto:abhiramkumar2000@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="hover:text-blue-800 transition" />
          </a>
          <a href="https://instagram.com/ig_maahi" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-600 transition" />
          </a>
          <a href="https://twitter.com/Abhiram_9898" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-sky-500 transition" />
          </a>
          <a href="https://facebook.com/abhiram.kumar.5439" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-700 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
