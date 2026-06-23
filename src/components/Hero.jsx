import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sushil Nemkul</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-semibold">
              BCA Student | IT Enthusiast | Aspiring Software Developer
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Passionate and self-driven IT student with experience in web development, data handling, and event leadership through hackathons and academic projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="/public/Sushil_CV_2026.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Download CV <Download className="ml-2" size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{ duration: 0.5, delay: 0.2, y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="relative w-72 h-72 md:w-96 md:h-96 mx-auto cursor-pointer"
          >
            {/* Add your professional photo here */}
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center">
                 <img src="DSC_9687-Enhanced-NR.jpg.jpeg" alt="Sushil Nemkul" className="w-full h-full object-cover" />
                 {/* <img src="/path/to/photo.jpg" alt="Sushil Nemkul" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
