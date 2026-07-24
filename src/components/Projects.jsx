import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Image as ImageIcon } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

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

  const projects = [
    {
      title: "Bird Species Identification System",
      description: "Deep learning application using CNNs and TensorFlow to classify bird species from images. Features data preprocessing and augmentation.",
      detailedDescription: "A comprehensive deep learning project designed to identify various bird species accurately. It involves collecting image datasets, preprocessing, data augmentation to handle overfitting, and training a Convolutional Neural Network (CNN) using TensorFlow and Keras. The system is designed to provide high accuracy predictions and can be integrated into a larger web application.",
      tech: ["Python", "TensorFlow", "CNN", "Keras"],
      links: { github: "https://github.com/sushilnemkul/bird_species_identification", demo: "#" },
      image: "/b1.jpg",
      gallery: ["/b1.jpg", "/b2.jpg", "/b3.jpg", "/b4.jpg", "/b5.jpg", "/b6.jpg.png", "/b7.jpg", "/b8.jpg", "/b9.jpg", "/b10.jpg", "/b11.jpg"]
    },
    {
      title: "Fishtopia",
      description: "An E-Commerce platform for aquatic products. Features Khalti payment integration and follows Agile methodology.",
      detailedDescription: "Fishtopia is an e-commerce platform specifically tailored for aquatic enthusiasts. Built using React.js for the frontend and Flask for the backend, it provides a seamless shopping experience. It includes user authentication, a shopping cart, and integrates with the Khalti API for secure payment processing. The project was developed following Agile methodologies to ensure continuous iteration and improvement.",
      tech: ["React.js", "Flask", "Khalti API", "Agile"],
      links: { github: "https://github.com/sushilnemkul/project5thsem/tree/master", demo: "#" },
      image: "/f1.png",
      gallery: ["/f1.png", "/f2.png", "/f3.png", "/f4.png", "/f5.png", "/f6.png"]
    },
    {
      title: "Adopt a Buddy",
      description: "Animal adoption platform connecting pets with future owners. Built with PHP & MySQL using Waterfall methodology.",
      detailedDescription: "Adopt a Buddy is a platform aimed at reducing the number of stray animals by connecting shelters and current owners with potential adopters. Developed using traditional web technologies like PHP, MySQL, and HTML/CSS following the Waterfall methodology. It features a robust database schema to track pet medical histories, adoption statuses, and user profiles.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      links: { github: "https://github.com/sushilnemkul/pet-adoption", demo: "#" },
      image: "/ad3.jpg",
      gallery: ["/ad3.jpg", "/ad1.jpg", "/ad2.jpg", "/ad4.jpg", "/ad5.jpg", "/ad6.jpg", "/ad7.jpg", "/ad8.jpg", "/ad9.jpg", "/ad10.jpg", "/ad11.jpg.png", "/ad12.jpg.png"]
    },
    {
      title: "Weather App",
      description: "Real-time weather application for Android. Features location services and a clean UI for beginners.",
      detailedDescription: "A beginner-friendly Android application that fetches real-time weather data based on the user's current GPS location. Built with Java/Kotlin, it utilizes a third-party Weather API to display current temperature, humidity, and forecasts. The project emphasizes clean UI design and understanding asynchronous network requests in mobile development.",
      tech: ["Android", "Java/Kotlin", "Weather API"],
      links: { github: "https://github.com/sushilnemkul/WeatherApp", demo: "#" },
      image: "/weather1.jpg",
      gallery: ["/weather1.jpg", "/weather2.jpg"]
    },
    {
      title: "DAV Codefest 2026",
      description: "Organized a 72-hour National Level Hackathon with 150+ participants. Managed potential sponsors and faculty coordination.",
      detailedDescription: "Led the organization of DAV Codefest 2026. This was a massive 72-hour event featuring over 150+ participants from all over Nepal. My role involved cross-functional leadership, securing and managing sponsors, coordinating with faculty, and overseeing event logistics. The hackathon produced incredible and interesting projects from various teams, and it was a great experience managing the entire workflow, from sponsors to presenting the winners.",
      tech: ["Event Management", "Leadership", "Teamwork"],
      links: { github: "", demo: "#" },
      image: "/cod1.jpg",
      gallery: ["/cod1.jpg", "/cod2.jpg", "/cod3.jpg", "/cod4.jpg", "/cod5.jpg"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="group bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="h-48 bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-gray-400 overflow-hidden relative cursor-pointer"
              >
                {project.image.startsWith('/') || project.image.startsWith('http') ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </>
                ) : (
                  <span>{project.image} Placeholder</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Github size={20} className="mr-2" /> Code
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" /> Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Popup for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-6 md:p-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 pr-12">{selectedProject.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed whitespace-pre-wrap">
                  {selectedProject.detailedDescription}
                </p>

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend Gallery</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {selectedProject.gallery.map((img, idx) => {
                    const isPlaceholder = img.startsWith('placeholder');
                    return (
                      <div
                        key={idx}
                        onClick={() => !isPlaceholder && setActiveImage(img)}
                        className={`bg-gray-200 dark:bg-slate-800 rounded-xl aspect-video flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 overflow-hidden border border-gray-100 dark:border-gray-700 relative group ${!isPlaceholder ? 'cursor-zoom-in' : ''}`}
                      >
                        {isPlaceholder ? (
                          <>
                            <ImageIcon size={48} className="mb-2 opacity-50" />
                            <span className="text-sm">Insert {selectedProject.title} Image {idx + 1} Here</span>
                          </>
                        ) : (
                          <>
                            <img
                              src={img}
                              alt={`${selectedProject.title} screenshot ${idx + 1}`}
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-4">
                  {selectedProject.links.github && (
                    <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center flex-1 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                      <Github size={20} className="mr-2" /> View Source Code
                    </a>
                  )}
                  {selectedProject.links.demo !== "#" && (
                    <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                      <ExternalLink size={20} className="mr-2" /> Live Demo
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
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[70] cursor-pointer"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Zoomed project screenshot"
                className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
