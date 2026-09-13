import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Photography', href: '#photography' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const progressRef = useRef(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });
  }, []);

  // Scrollspy: update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Offset for navbar
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const id = NAV_ITEMS[i].href.slice(1);
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main Navigation" className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div ref={progressRef} className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 origin-left transform scale-x-0 z-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" aria-label="Sushil Nemkul Homepage" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-xl bg-slate-900/5 dark:bg-white/10 border border-slate-900/10 dark:border-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <img src="logo.png" alt="Sushil Nemkul Logo" width="32" height="32" className="w-8 h-8 object-contain dark:invert-0 invert transition-all duration-300" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hidden sm:inline-block">

              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-slate-800/80 font-semibold shadow-xs'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-slate-800/50'
                      }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="/Sushil_CV_2026.pdf"
                download="Sushil_Nemkul_CV.pdf"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20"
              >
                Resume
              </a>
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 shadow-xl animate-in fade-in duration-200">
          <div className="px-3 pt-2 pb-4 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="/Sushil_CV_2026.pdf"
              download="Sushil_Nemkul_CV.pdf"
              className="block w-full text-center mt-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
