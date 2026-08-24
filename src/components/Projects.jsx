import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  X,
  Image as ImageIcon,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Maximize2,
  Info
} from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const headerLineRef = useRef(null);
  const showcaseRef = useRef(null);

  const SLIDE_DURATION = 6000; // 6 seconds per slide

  useGSAP(() => {
    gsap.fromTo(
      headerLineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerLineRef.current,
          start: 'top 85%'
        }
      }
    );
  }, []);

  // Prevent background scrolling when modal or lightbox is open
  useEffect(() => {
    if (selectedProject || activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, activeImageIndex]);

  // Handle keyboard events (Esc to close, Left/Right for gallery navigation)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeImageIndex !== null) {
          setActiveImageIndex(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      } else if (activeImageIndex !== null && selectedProject?.gallery) {
        if (e.key === 'ArrowLeft') {
          setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.gallery.length - 1));
        } else if (e.key === 'ArrowRight') {
          setActiveImageIndex((prev) => (prev < selectedProject.gallery.length - 1 ? prev + 1 : 0));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, selectedProject]);

  const categories = ["All", "Web Apps", "AI & ML", "Mobile App", "Events"];

  const projects = [
    {
      id: "01",
      title: "Bird Species Identification System",
      category: "AI & ML",
      type: "Deep Learning",
      year: "2024",
      highlight: "Convolutional Neural Networks (CNNs) & TensorFlow",
      description: "Deep learning application using CNNs and TensorFlow to classify bird species from images. Features comprehensive data preprocessing, augmentation, and high-accuracy species classification.",
      detailedDescription: "A comprehensive deep learning project designed to identify various bird species accurately. It involves collecting image datasets, preprocessing, data augmentation to handle overfitting, and training a Convolutional Neural Network (CNN) using TensorFlow and Keras. The system is designed to provide high accuracy predictions and can be integrated into a larger web application.",
      tech: ["Python", "TensorFlow", "CNN", "Keras", "NumPy", "OpenCV"],
      links: { github: "https://github.com/sushilnemkul/bird_species_identification", demo: "" },
      image: "/b1.jpg",
      gallery: ["/b1.jpg", "/b2.jpg", "/b3.jpg", "/b4.jpg", "/b5.jpg", "/b6.jpg.png", "/b7.jpg", "/b8.jpg", "/b9.jpg", "/b10.jpg", "/b11.jpg"]
    },
    {
      id: "02",
      title: "Fishtopia",
      category: "Web Apps",
      type: "Full Stack E-Commerce",
      year: "2024",
      highlight: "Khalti Payment Integration & Agile Workflows",
      description: "An interactive E-Commerce platform for aquatic enthusiasts. Features full-stack catalog management, authenticated shopping carts, and seamless Khalti API payment checkout.",
      detailedDescription: "Fishtopia is an e-commerce platform specifically tailored for aquatic enthusiasts. Built using React.js for the frontend and Flask for the backend, it provides a seamless shopping experience. It includes user authentication, a shopping cart, and integrates with the Khalti API for secure payment processing. The project was developed following Agile methodologies to ensure continuous iteration and improvement.",
      tech: ["React.js", "Flask", "Khalti API", "Agile", "Tailwind CSS", "REST API"],
      links: { github: "https://github.com/sushilnemkul/project5thsem/tree/master", demo: "" },
      image: "/f1.png",
      gallery: ["/f1.png", "/f2.png", "/f3.png", "/f4.png", "/f5.png", "/f6.png"]
    },
    {
      id: "03",
      title: "Adopt a Buddy",
      category: "Web Apps",
      type: "Web Application",
      year: "2023",
      highlight: "Animal Rescue & Direct Shelter Adoption Matching",
      description: "Animal adoption and rescue platform connecting shelters and rescued pets with future loving owners. Built with PHP & MySQL using structured Waterfall methodology.",
      detailedDescription: "Adopt a Buddy is a platform aimed at reducing the number of stray animals by connecting shelters and current owners with potential adopters. Developed using traditional web technologies like PHP, MySQL, and HTML/CSS following the Waterfall methodology. It features a robust database schema to track pet medical histories, adoption statuses, and user profiles.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Responsive UI"],
      links: { github: "https://github.com/sushilnemkul/pet-adoption", demo: "" },
      image: "/ad3.jpg",
      gallery: ["/ad3.jpg", "/ad1.jpg", "/ad2.jpg", "/ad4.jpg", "/ad5.jpg", "/ad6.jpg", "/ad7.jpg", "/ad8.jpg", "/ad9.jpg", "/ad10.jpg", "/ad11.jpg.png", "/ad12.jpg.png"]
    },
    {
      id: "04",
      title: "Weather App",
      category: "Mobile App",
      type: "Android App",
      year: "2023",
      highlight: "Real-Time GPS Location & Forecast API Streaming",
      description: "Real-time mobile weather forecasting application for Android. Features live GPS location services, animated weather condition telemetry, and modern clean mobile UX.",
      detailedDescription: "A beginner-friendly Android application that fetches real-time weather data based on the user's current GPS location. Built with Java/Kotlin, it utilizes a third-party Weather API to display current temperature, humidity, and forecasts. The project emphasizes clean UI design and understanding asynchronous network requests in mobile development.",
      tech: ["Android", "Java/Kotlin", "Weather API", "GPS Geolocation", "JSON"],
      links: { github: "https://github.com/sushilnemkul/WeatherApp", demo: "" },
      image: "/weather1.jpg",
      gallery: ["/weather1.jpg", "/weather2.jpg"]
    },
    {
      id: "05",
      title: "DAV Codefest 2026",
      category: "Events",
      type: "National Hackathon",
      year: "2026",
      highlight: "72-Hour National Level Hackathon with 150+ Developers",
      description: "Organized a premier 72-hour National Level Hackathon bringing together 150+ developers and students across Nepal. Managed industry sponsors, mentors, and end-to-end logistics.",
      detailedDescription: "Led the organization of DAV Codefest 2026. This was a massive 72-hour event featuring over 150+ participants from all over Nepal. My role involved cross-functional leadership, securing and managing sponsors, coordinating with faculty, and overseeing event logistics. The hackathon produced incredible and interesting projects from various teams, and it was a great experience managing the entire workflow, from sponsors to presenting the winners.",
      tech: ["Event Management", "Leadership", "Technical Mentorship", "Sponsorships"],
      links: { github: "", demo: "" },
      image: "/cod1.jpg",
      gallery: ["/cod1.jpg", "/cod2.jpg", "/cod3.jpg", "/cod4.jpg", "/cod5.jpg"]
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const activeProject = filteredProjects[currentIndex % (filteredProjects.length || 1)] || filteredProjects[0] || projects[0];

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    setProgress(0);
  }, [filteredProjects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    setProgress(0);
  }, [filteredProjects.length]);

  const selectProjectIndex = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Auto-slide countdown timer
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;

    const intervalTime = 50;
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextProject();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, filteredProjects.length, nextProject]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
    setProgress(0);
  };

  const openGalleryImage = (project, imageIndex) => {
    setSelectedProject(project);
    setActiveImageIndex(imageIndex);
  };

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-28 bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50/80 dark:bg-cyan-950/60 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-cyan-500/30 mb-4 shadow-sm backdrop-blur-md">
            <Sparkles size={14} className="animate-pulse" />
            <span>Featured Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div ref={headerLineRef} className="w-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters with Glassmorphism */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105 ring-2 ring-blue-400/50'
                    : 'bg-white/70 dark:bg-slate-900/60 text-gray-600 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-slate-800/80 border border-gray-200/80 dark:border-white/10 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* CINEMATIC BILLBOARD SHOWCASE WITH GLOWING EFFECT & GLASSMORPHISM */}
        <div className="relative rounded-2xl sm:rounded-3xl p-[1px] border border-gray-200/80 dark:border-white/10 shadow-2xl">
          {/* Glowing Border Hover Effect */}
          <GlowingEffect
            spread={45}
            glow={true}
            disabled={false}
            proximity={70}
            inactiveZone={0.01}
            borderWidth={2.5}
          />

          <div
            ref={showcaseRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950/90 backdrop-blur-2xl text-white min-h-[460px] sm:min-h-[500px] md:min-h-[540px] flex flex-col justify-end transition-all duration-500"
          >
            {/* Backdrop Image with Crossfade */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Glassmorphic Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent sm:w-3/4 z-[1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-[1]" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-transparent h-28 z-[1]" />
              <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-[1]" />
            </div>

            {/* Foreground Billboard Content */}
            <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-end max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Clean Professional Metadata Badges with Glassmorphism */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold tracking-wide bg-blue-600/90 text-white shadow-lg shadow-blue-600/30 backdrop-blur-md border border-blue-400/30">
                      {activeProject.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/10 text-slate-200 border border-white/20 backdrop-blur-md shadow-sm">
                      {activeProject.type}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-300/90 flex items-center gap-1.5 pl-1">
                      <span>{activeProject.year}</span>
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                    {activeProject.title}
                  </h3>

                  {/* Synopsis with Highlight Accent */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-4 drop-shadow">
                    {activeProject.description}
                  </p>

                  {/* Glassmorphism Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-cyan-200 border border-white/15 backdrop-blur-md shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons with Glowing Glass Effects */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2 sm:pt-4">
                    {/* Primary CTA: "Show Details ->" */}
                    <button
                      onClick={() => setSelectedProject(activeProject)}
                      className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-[#00a2ed] hover:bg-[#008fcf] text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/30 hover:shadow-sky-500/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer backdrop-blur-md border border-cyan-300/30"
                    >
                      <span>Show Details</span>
                      <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </button>

                    {/* Secondary CTA: GitHub */}
                    {activeProject.links.github && (
                      <a
                        href={activeProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 hover:border-cyan-400 backdrop-blur-xl transition-all duration-200 cursor-pointer shadow-lg hover:shadow-cyan-500/20"
                      >
                        <Github size={18} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* BOTTOM CONTROLS BAR: Progress Bar, Pagination Dots & Nav Arrows */}
            <div className="relative z-20 px-6 sm:px-10 pb-6 pt-3 flex items-center justify-between gap-4 bg-slate-950/40 backdrop-blur-md border-t border-white/10">
              {/* Left: Auto-Play Progress Bar */}
              <div className="w-24 sm:w-36 md:w-48 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Center: Pagination Dots with Glowing Active Pill */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {filteredProjects.map((_, idx) => {
                  const isActive = (currentIndex % filteredProjects.length) === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => selectProjectIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`transition-all duration-300 cursor-pointer rounded-full ${
                        isActive
                          ? 'w-6 sm:w-8 h-2 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]'
                          : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Right: Circular Prev / Next Glass Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevProject}
                  aria-label="Previous project"
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan-400 backdrop-blur-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-lg hover:shadow-cyan-500/30"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextProject}
                  aria-label="Next project"
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan-400 backdrop-blur-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-lg hover:shadow-cyan-500/30"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BROWSE ALL PROJECTS ROW WITH GLOWING EFFECT & GLASSMORPHISM */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Layers size={18} className="text-blue-600 dark:text-cyan-400" />
              <span>Project Collection</span>
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                ({filteredProjects.length} {filteredProjects.length === 1 ? 'item' : 'items'})
              </span>
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline-block">
              Hover to preview • Click card to spotlight
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {filteredProjects.map((project, idx) => {
              const isSelected = (currentIndex % filteredProjects.length) === idx;
              return (
                <div
                  key={project.id}
                  className="relative rounded-2xl border border-gray-200/80 dark:border-white/10 shadow-lg"
                >
                  {/* Glowing Effect Border per Card */}
                  <GlowingEffect
                    spread={35}
                    glow={true}
                    disabled={false}
                    proximity={60}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />

                  <div
                    onClick={() => selectProjectIndex(idx)}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl h-full flex flex-col justify-between ${
                      isSelected
                        ? 'ring-2 ring-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                        : 'hover:-translate-y-1'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Active Indicator Pulse */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-400 text-black text-[10px] font-black shadow-lg shadow-cyan-400/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                          ACTIVE
                        </div>
                      )}
                    </div>

                    {/* Card Content with Frosted Glass styling */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                            {project.category}
                          </span>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">
                            {project.year}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h4>
                      </div>

                      <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-gray-200/60 dark:border-white/10">
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 truncate max-w-[110px]">
                          {project.tech[0]} • {project.tech[1]}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="text-[11px] font-semibold text-blue-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-0.5"
                        >
                          Details <ChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PROJECT DETAILS MODAL WITH GLASSMORPHISM */}
      <AnimatePresence>
        {selectedProject && activeImageIndex === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-gray-200/80 dark:border-white/15 shadow-2xl text-gray-900 dark:text-gray-100 p-5 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-200 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all z-10 cursor-pointer shadow-md border border-gray-200 dark:border-white/10"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                {/* Header Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-md shadow-blue-600/20">
                      {selectedProject.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-white/10">
                      {selectedProject.type}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white pr-10">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50/80 dark:bg-slate-800/80 text-blue-700 dark:text-cyan-300 border border-blue-200/70 dark:border-white/10 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Info size={18} className="text-blue-600 dark:text-cyan-400" />
                    <span>Project Overview & Architecture</span>
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Gallery */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <ImageIcon size={18} className="text-blue-600 dark:text-cyan-400" />
                      <span>Project Gallery ({selectedProject.gallery.length} Images)</span>
                    </h4>
                    <span className="text-xs text-blue-600 dark:text-cyan-400 font-medium">
                      Click image for full view
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => openGalleryImage(selectedProject, idx)}
                        className="group relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-white/10 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:border-cyan-400 hover:scale-[1.02]"
                      >
                        <img
                          src={img}
                          alt={`${selectedProject.title} screenshot ${idx + 1}`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-xs">
                          <span className="px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5 shadow-md">
                            <Maximize2 size={14} /> Full View
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
                    >
                      <Github size={18} className="mr-2" /> View GitHub Repository
                    </a>
                  )}
                  {selectedProject.links.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-slate-800/80 text-gray-800 dark:text-gray-200 font-semibold text-sm hover:bg-white dark:hover:bg-slate-700 transition-all cursor-pointer shadow-sm"
                    >
                      <ExternalLink size={18} className="mr-2" /> Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="sm:w-32 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL SCREEN GALLERY LIGHTBOX MODAL WITH GLASSMORPHISM */}
      <AnimatePresence>
        {activeImageIndex !== null && selectedProject?.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-between p-3 sm:p-6 bg-black/95 backdrop-blur-2xl select-none"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Top Bar with Clear Prominent Close (Cross) Button */}
            <div
              className="w-full flex items-center justify-between z-[110] max-w-6xl py-2 px-3 sm:px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-base font-bold text-white drop-shadow">
                  {selectedProject.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold border border-white/15 backdrop-blur-md">
                  {activeImageIndex + 1} / {selectedProject.gallery.length}
                </span>
              </div>

              {/* Main Cross / Close Button */}
              <button
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close full view"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-red-600 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-xl transition-all duration-200 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Close</span>
                <X size={18} className="transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Central Image Area with Previous / Next Arrows */}
            <div
              className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Image Arrow */}
              {selectedProject.gallery.length > 1 && (
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev > 0 ? prev - 1 : selectedProject.gallery.length - 1
                    )
                  }
                  aria-label="Previous image"
                  className="absolute left-1 sm:left-4 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:border-cyan-400 backdrop-blur-xl transition-all hover:scale-110 active:scale-90 cursor-pointer shadow-2xl hover:shadow-cyan-500/30"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Active Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-w-full max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center"
                >
                  <img
                    src={selectedProject.gallery[activeImageIndex]}
                    alt={`${selectedProject.title} full view`}
                    className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Image Arrow */}
              {selectedProject.gallery.length > 1 && (
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev < selectedProject.gallery.length - 1 ? prev + 1 : 0
                    )
                  }
                  aria-label="Next image"
                  className="absolute right-1 sm:right-4 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:border-cyan-400 backdrop-blur-xl transition-all hover:scale-110 active:scale-90 cursor-pointer shadow-2xl hover:shadow-cyan-500/30"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Bottom Helper Bar with Quick Thumbnail Selector & Close Hint */}
            <div
              className="w-full max-w-4xl flex flex-col items-center gap-2 pb-2 z-[110]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1.5 px-3 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 no-scrollbar shadow-xl">
                {selectedProject.gallery.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 sm:w-16 h-9 sm:h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-400/40'
                        : 'border-white/20 opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={thumb}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <span className="text-[11px] text-white/50 tracking-wider">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono">Esc</kbd> or click outside to close • Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono">→</kbd> keys to navigate
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
