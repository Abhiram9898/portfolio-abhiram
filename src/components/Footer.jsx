// Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto flex flex-col items-center gap-4">
        {/* Footer Text */}
        <p className="text-lg font-semibold">
          © 2025 Abhiram Kumar. All Rights Reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Abhiram9898"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abhiram-kumar-341ab5140"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abhiramkumar2000@gmail.com"
            className="hover:text-gray-200 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/Abhiram_9898"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/ig_maahi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
