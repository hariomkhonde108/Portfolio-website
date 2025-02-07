import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;