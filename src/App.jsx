import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Home />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
     
     <Footer />
      

    </>
  );
}
export default App;