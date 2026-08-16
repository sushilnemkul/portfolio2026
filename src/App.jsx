import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Preloader from './components/ui/preloader';
import InteractiveBackground from './components/ui/InteractiveBackground';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <Router>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="relative bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
        <InteractiveBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Photography />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
