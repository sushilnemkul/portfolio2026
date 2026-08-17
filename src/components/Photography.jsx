import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ZoomIn, Sparkles } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
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
      span: "col-span-1 md:col-span-2 row-span-1",
      heightClass: "h-64 sm:h-72 md:h-80"
    },
    {
      title: "Portrait & Perspective",
      category: "Creative Portrait",
      image: "/DSC_9687-Enhanced-NR.jpg.jpeg",
      span: "col-span-1 md:col-span-1 row-span-1 md:row-span-2",
      heightClass: "h-80 sm:h-96 md:h-full min-h-[320px] md:min-h-[664px]"
    },
    {
      title: "Hackathon Dynamics",
      category: "Events & Leadership",
      image: "/cod2.jpg",
      span: "col-span-1 md:col-span-1 row-span-1",
      heightClass: "h-64 sm:h-72 md:h-80"
    },
    {
      title: "Team Spirit & Collaboration",
      category: "Events & Leadership",
      image: "/cod3.jpg",
      span: "col-span-1 md:col-span-1 row-span-1",
      heightClass: "h-64 sm:h-72 md:h-80"
    },
    {
      title: "Personal Lens & Perspective",
      category: "Creative Portrait",
      image: "/s2.jpg",
      span: "col-span-1 md:col-span-1 row-span-1 md:row-span-2",
      heightClass: "h-80 sm:h-96 md:h-full min-h-[320px] md:min-h-[664px]"
    },
    {
      title: "Keynote & Stage Moments",
      category: "Events & Leadership",
      image: "/cod4.jpg",
      span: "col-span-1 md:col-span-2 row-span-1",
      heightClass: "h-64 sm:h-72 md:h-80"
    },
    {
      title: "Hackathon Culmination & Energy",
      category: "Events & Leadership",
      image: "/cod5.jpg",
      span: "col-span-1 md:col-span-2 row-span-1",
      heightClass: "h-64 sm:h-72 md:h-80"
    }
  ];

  return (
    <section id="photography" className="py-28 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching site UI */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-cyan-400 bg-blue-50/80 dark:bg-slate-800/80 border border-blue-200/60 dark:border-cyan-500/20 mb-3 shadow-xs">
            <Camera size={14} />
            <span>Visual Stories & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Photography & <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <div ref={headerLineRef} className="w-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base mt-3">
            Capturing moments, event leadership highlights, and creative perspectives that inform UI design.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-[auto]">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl border border-gray-200/80 dark:border-white/10 ${photo.span} ${photo.heightClass}`}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2.5}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                onClick={() => setActivePhoto(photo.image)}
                className="group relative w-full h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl bg-slate-900 cursor-pointer"
              >
                {/* Full-Fill Image */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Glassmorphic Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 backdrop-blur-md mb-2">
                      {photo.category}
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        {photo.title}
                      </h3>
                      <div className="p-2 rounded-full bg-white/10 group-hover:bg-cyan-500/20 text-white group-hover:text-cyan-300 backdrop-blur-md transition-colors flex-shrink-0">
                        <ZoomIn size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setActivePhoto(null)}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 cursor-pointer"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={activePhoto}
              alt="Expanded photo view"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
