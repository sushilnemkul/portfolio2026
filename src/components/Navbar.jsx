import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, Mail, Phone, Github, Linkedin, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
  const toggleButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const wasOpenRef = useRef(false);

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

  // Lock body scroll for mobile menu; release scroll lock and close drawer when widening past md (768px)
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'unset';
      return;
    }

    if (window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const checkBreakpoint = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = 'unset';
        setIsOpen(false);
      } else {
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('resize', checkBreakpoint);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', checkBreakpoint);
    };
  }, [isOpen]);

  // Focus management: move focus inside drawer on open, restore to toggle button on close
  useEffect(() => {
    if (isOpen) {
      const focusable = drawerRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      } else if (drawerRef.current) {
        drawerRef.current.focus();
      }
    } else if (wasOpenRef.current) {
      toggleButtonRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // Focus trap & Escape handling for mobile drawer
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || !drawerRef.current.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last || !drawerRef.current.contains(document.activeElement)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

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

  const handleLogoClick = (e) => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
      setActiveSection('home');
    }
    setIsOpen(false);
  };

  const handleNavClick = (e, href) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
        setActiveSection(targetId);
      }
    }
  };

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className="fixed top-0 left-0 right-0 w-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md z-50 border-b border-gray-200/80 dark:border-gray-800/80 transition-colors duration-300"
      >
        <div
          ref={progressRef}
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 origin-left transform scale-x-0 z-50"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Clickable Brand Logo */}
            <div className="flex-shrink-0">
              <a
                href="/#home"
                onClick={handleLogoClick}
                aria-label="Sushil Nemkul Homepage - Back to Top"
                className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
              >
                <div className="p-1.5 rounded-xl bg-slate-900/5 dark:bg-white/10 border border-slate-900/10 dark:border-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 shadow-sm">
                  <img
                    src="/logo.png"
                    alt="Sushil Nemkul Logo"
                    width="32"
                    height="32"
                    className="w-8 h-8 object-contain dark:invert-0 invert transition-all duration-300"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                  Sushil Nemkul
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 dark:text-cyan-400 bg-blue-50/80 dark:bg-slate-800/80 font-semibold shadow-xs'
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
                className="inline-flex items-center gap-1.5 ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20 active:scale-95"
              >
                <span>Resume</span>
                <Download size={15} />
              </a>

              <div className="pl-1">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                ref={toggleButtonRef}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu-drawer"
                className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop & Menu (Mobile Menu Implementation) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div
            ref={drawerRef}
            tabIndex={-1}
            id="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-800 shadow-2xl transition-all outline-none"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {/* Navigation Links */}
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? 'text-blue-600 dark:text-cyan-400 bg-blue-50/80 dark:bg-slate-800/90 font-bold border-l-4 border-blue-600 dark:border-cyan-400'
                          : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight size={16} className={isActive ? 'opacity-100' : 'opacity-40'} />
                    </a>
                  );
                })}
              </div>

              {/* Action Buttons in Mobile Menu */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                <a
                  href="/Sushil_CV_2026.pdf"
                  download="Sushil_Nemkul_CV.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 active:scale-98"
                >
                  <Download size={18} />
                  <span>Download Resume (CV)</span>
                </a>

                {/* Direct quick contact links */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+9779843432401"
                    aria-label="Call Sushil Nemkul"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-xs font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors border border-gray-200/80 dark:border-slate-700/80"
                  >
                    <Phone size={14} className="text-blue-600 dark:text-cyan-400" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:namecoolsusil@gmail.com"
                    aria-label="Send Email to Sushil Nemkul"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-xs font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors border border-gray-200/80 dark:border-slate-700/80"
                  >
                    <Mail size={14} className="text-blue-600 dark:text-cyan-400" />
                    <span>Email Me</span>
                  </a>
                </div>

                {/* Social media quick icons */}
                <div className="flex items-center justify-center gap-4 pt-2 text-gray-500 dark:text-gray-400">
                  <a
                    href="https://github.com/sushilnemkul"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sushil Nemkul GitHub profile"
                    className="p-2 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sushil-nemkul-7868b2261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sushil Nemkul LinkedIn profile"
                    className="p-2 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
