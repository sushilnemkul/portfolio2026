import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const headerLineRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(headerLineRef.current,
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

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject || activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, activeImage]);

  const categories = ["All", "Web Apps", "AI & ML", "Mobile App", "Events"];

  const projects = [
    {
      id: "01",
      title: "Bird Species Identification System",
      category: "AI & ML",
      description: "Deep learning application using CNNs and TensorFlow to classify bird species from images. Features data preprocessing and augmentation.",
      detailedDescription: "A comprehensive deep learning project designed to identify various bird species accurately. It involves collecting image datasets, preprocessing, data augmentation to handle overfitting, and training a Convolutional Neural Network (CNN) using TensorFlow and Keras. The system is designed to provide high accuracy predictions and can be integrated into a larger web application.",
      tech: ["Python", "TensorFlow", "CNN", "Keras"],
      links: { github: "https://github.com/sushilnemkul/bird_species_identification", demo: "#" },
      image: "/b1.jpg",
      gallery: ["/b1.jpg", "/b2.jpg", "/b3.jpg", "/b4.jpg", "/b5.jpg", "/b6.jpg.png", "/b7.jpg", "/b8.jpg", "/b9.jpg", "/b10.jpg", "/b11.jpg"]
    },
    {
      id: "02",
      title: "Fishtopia",
      category: "Web Apps",
      description: "An E-Commerce platform for aquatic products. Features Khalti payment integration and follows Agile methodology.",
      detailedDescription: "Fishtopia is an e-commerce platform specifically tailored for aquatic enthusiasts. Built using React.js for the frontend and Flask for the backend, it provides a seamless shopping experience. It includes user authentication, a shopping cart, and integrates with the Khalti API for secure payment processing. The project was developed following Agile methodologies to ensure continuous iteration and improvement.",
      tech: ["React.js", "Flask", "Khalti API", "Agile"],
      links: { github: "https://github.com/sushilnemkul/project5thsem/tree/master", demo: "#" },
      image: "/f1.png",
      gallery: ["/f1.png", "/f2.png", "/f3.png", "/f4.png", "/f5.png", "/f6.png"]
    },
    {
      id: "03",
      title: "Adopt a Buddy",
      category: "Web Apps",
      description: "Animal adoption platform connecting pets with future owners. Built with PHP & MySQL using Waterfall methodology.",
      detailedDescription: "Adopt a Buddy is a platform aimed at reducing the number of stray animals by connecting shelters and current owners with potential adopters. Developed using traditional web technologies like PHP, MySQL, and HTML/CSS following the Waterfall methodology. It features a robust database schema to track pet medical histories, adoption statuses, and user profiles.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      links: { github: "https://github.com/sushilnemkul/pet-adoption", demo: "#" },
      image: "/ad3.jpg",
      gallery: ["/ad3.jpg", "/ad1.jpg", "/ad2.jpg", "/ad4.jpg", "/ad5.jpg", "/ad6.jpg", "/ad7.jpg", "/ad8.jpg", "/ad9.jpg", "/ad10.jpg", "/ad11.jpg.png", "/ad12.jpg.png"]
    },
    {
      id: "04",
      title: "Weather App",
      category: "Mobile App",
      description: "Real-time weather application for Android. Features location services and a clean UI for beginners.",
      detailedDescription: "A beginner-friendly Android application that fetches real-time weather data based on the user's current GPS location. Built with Java/Kotlin, it utilizes a third-party Weather API to display current temperature, humidity, and forecasts. The project emphasizes clean UI design and understanding asynchronous network requests in mobile development.",
      tech: ["Android", "Java/Kotlin", "Weather API"],
      links: { github: "https://github.com/sushilnemkul/WeatherApp", demo: "#" },
      image: "/weather1.jpg",
      gallery: ["/weather1.jpg", "/weather2.jpg"]
    },
    {
      id: "05",
      title: "DAV Codefest 2026",
      category: "Events",
      description: "Organized a 72-hour National Level Hackathon with 150+ participants. Managed potential sponsors and faculty coordination.",
      detailedDescription: "Led the organization of DAV Codefest 2026. This was a massive 72-hour event featuring over 150+ participants from all over Nepal. My role involved cross-functional leadership, securing and managing sponsors, coordinating with faculty, and overseeing event logistics. The hackathon produced incredible and interesting projects from various teams, and it was a great experience managing the entire workflow, from sponsors to presenting the winners.",
      tech: ["Event Management", "Leadership", "Teamwork"],
      links: { github: "", demo: "#" },
      image: "/cod1.jpg",
      gallery: ["/cod1.jpg", "/cod2.jpg", "/cod3.jpg", "/cod4.jpg", "/cod5.jpg"]
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-28 bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Matching Site Aesthetics */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div ref={headerLineRef} className="w-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                    : 'bg-white/80 dark:bg-slate-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200/80 dark:border-slate-700/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cohesive Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2.5}
              />
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    Project {project.id}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Project Image Frame */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-gray-200/60 dark:border-slate-700/60 cursor-pointer mb-5"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600/90 px-3 py-1.5 rounded-lg shadow-md backdrop-blur-sm">
                      View Details <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50/80 dark:bg-slate-800/80 text-blue-700 dark:text-cyan-300 border border-blue-100 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/80 dark:border-slate-800">
                  <div>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        <Github size={16} className="mr-1.5" /> Source Code
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:underline transition-colors cursor-pointer"
                  >
                    Explore <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-2xl text-gray-900 dark:text-gray-100 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-1 block">
                    {selectedProject.category} Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white pr-10">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {selectedProject.detailedDescription}
                </p>

                {/* Gallery */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Project Gallery</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.gallery.map((img, idx) => {
                      const isPlaceholder = img.startsWith('placeholder');
                      return (
                        <div
                          key={idx}
                          onClick={() => !isPlaceholder && setActiveImage(img)}
                          className={`rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 aspect-video relative group ${!isPlaceholder ? 'cursor-zoom-in' : ''}`}
                        >
                          {isPlaceholder ? (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                              <ImageIcon size={40} className="mb-2 opacity-40" />
                              <span className="text-xs">Image {idx + 1}</span>
                            </div>
                          ) : (
                            <img
                              src={img}
                              alt={`${selectedProject.title} screenshot ${idx + 1}`}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Modal Footer CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-slate-800">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-md"
                    >
                      <Github size={18} className="mr-2" /> View GitHub Repository
                    </a>
                  )}
                  {selectedProject.links.demo !== "#" && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 font-medium text-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / Zoomed Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-lg cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[70] cursor-pointer"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Zoomed project screenshot"
                className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
