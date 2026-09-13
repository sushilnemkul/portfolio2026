import { useState, useEffect, useRef } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ROLES = [
  "BCA Student @ DAV College",
  "Full-Stack Web Developer",
  "AI & ML Project Builder",
  "Hackathon Organizer",
  "Networking & IT Enthusiast"
];

export default function Hero() {
  const floatRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(() => (shouldReduceMotion ? ROLES[0] : ''));
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, shouldReduceMotion]);

  useGSAP(() => {
    if (shouldReduceMotion) return;
    gsap.to(floatRef.current, {
      y: -14,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      force3D: true
    });
  }, [shouldReduceMotion]);

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/sushilnemkul', icon: Github, label: "Visit Sushil Nemkul's GitHub profile" },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sushil-nemkul-7868b2261/', icon: Linkedin, label: "Visit Sushil Nemkul's LinkedIn profile" },
    { name: 'Email', href: 'mailto:namecoolsusil@gmail.com', icon: Mail, label: "Send email to Sushil Nemkul" },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-between pt-28 pb-8 bg-transparent text-gray-900 dark:text-white transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left: Text & Actions */}
        <div className="flex-1 text-center md:text-left z-10">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" aria-hidden="true" />
              Available for Internships & Projects
            </div> */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sushil Nemkul</span>
            </h1>

            {/* Typewriter Dynamic Tagline */}
            <div className="min-h-[2.5rem] flex items-center justify-center md:justify-start mb-6">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-semibold flex items-center">
                <span>{displayText}</span>
                <span className="inline-block w-0.5 h-6 ml-1 bg-blue-600 dark:bg-blue-400 animate-pulse" aria-hidden="true" />
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Passionate and self-driven IT student with experience in full-stack web development, AI/ML computer vision, and event leadership through hackathons and academic initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
              >
                View Projects <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </Motion.a>
              <Motion.a
                href="/Sushil_CV_2026.pdf"
                download="Sushil_Nemkul_CV.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-slate-800/80 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Download CV <Download className="ml-2" size={20} aria-hidden="true" />
              </Motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200"
                    aria-label={item.label}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </Motion.div>
        </div>

        {/* Right: Clean Portrait */}
        <div className="flex-1 relative flex justify-center">
          <div ref={floatRef}>
            <Motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.04 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto cursor-pointer"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center">
                  <img
                    src="DSC_9687-Enhanced-NR.jpg.jpeg"
                    alt="Portrait of Sushil Nemkul, BCA Student and Aspiring Software Developer"
                    width="384"
                    height="384"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Motion.div>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator to About */}
      <Motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-col items-center justify-center pt-6 pb-2"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll down</span>
          <Motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-blue-500 dark:text-blue-400" />
          </Motion.div>
        </a>
      </Motion.div>
    </section>
  );
}
