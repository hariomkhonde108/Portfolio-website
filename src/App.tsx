import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import { usePageTracking } from './hooks/useAnalytics';
import { useScrollTracking } from './hooks/useScrollTracking';
import { registerServiceWorker } from './utils/serviceWorker';

function App() {
  usePageTracking();
  useScrollTracking();

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;