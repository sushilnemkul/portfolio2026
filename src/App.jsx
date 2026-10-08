import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import NotFound from './pages/NotFound';
import './App.css';

// Component to handle GitHub Pages SPA query redirect (e.g. /?/contact -> /contact)
function SpaRedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search.startsWith('?/')) {
      const [rawPath, ...rawQueryParts] = location.search.slice(1).split('&');
      const path = rawPath.replace(/~and~/g, '&');
      const query = rawQueryParts.length > 0 ? '?' + rawQueryParts.join('&').replace(/~and~/g, '&') : '';
      const redirectPath = path + query + (location.hash || '');
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function HomePage() {
  return (
    <>
      <main id="main-content" role="main" tabIndex={-1} className="relative z-10 outline-none w-full max-w-full overflow-x-hidden">
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
    </>
  );
}

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
      <SpaRedirectHandler />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="relative bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300 w-full max-w-full overflow-x-hidden">
        <InteractiveBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
