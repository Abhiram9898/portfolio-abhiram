import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
