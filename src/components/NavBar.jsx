// Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Abhiram.dev</div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Abhiram_resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-xl"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Abhiram_resume.pdf"
            download
            className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-2 rounded-xl"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
