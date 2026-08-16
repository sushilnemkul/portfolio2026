import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ZoomIn } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Photography() {
  const [activePhoto, setActivePhoto] = useState(null);
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

  const photos = [
    {
      title: "DAV Codefest Event Capture",
      category: "Events & Leadership",
      image: "/cod1.jpg",
      aspect: "aspect-video"
    },
    {
      title: "Portrait & Perspective",
      category: "Creative Portrait",
      image: "/DSC_9687-Enhanced-NR.jpg.jpeg",
      aspect: "aspect-square"
    },
    {
      title: "Hackathon Dynamics",
      category: "Events & Leadership",
      image: "/cod2.jpg",
      aspect: "aspect-video"
    },
    {
      title: "Personal Lens",
      category: "Creative Portrait",
      image: "/s2.jpg",
      aspect: "aspect-square"
    },
    {
      title: "Team Spirit & Collaboration",
      category: "Events & Leadership",
      image: "/cod3.jpg",
      aspect: "aspect-video"
    },
    {
      title: "Keynote & Stage Moments",
      category: "Events & Leadership",
      image: "/cod4.jpg",
      aspect: "aspect-video"
    }
  ];

  return (
    <section id="photography" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
            <Camera size={20} /> Photography & Events
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Visual Stories</h2>
          <div ref={headerLineRef} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full origin-center" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Capturing authentic moments, event leadership highlights, and creative visual perspectives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              onClick={() => setActivePhoto(photo.image)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-gray-200 dark:bg-slate-700 cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              <div className={`${photo.aspect} w-full overflow-hidden`}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">{photo.category}</span>
                <h3 className="text-lg font-bold flex items-center justify-between">
                  {photo.title}
                  <ZoomIn size={18} className="opacity-80 group-hover:scale-110 transition-transform" />
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setActivePhoto(null)}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={activePhoto}
              alt="Expanded photo view"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
