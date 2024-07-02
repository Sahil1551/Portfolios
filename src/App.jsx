import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
