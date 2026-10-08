import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, FolderGit2, Mail } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

export default function NotFound() {
  useEffect(() => {
    document.title = '404: Page Not Found | Sushil Nemkul';
    return () => {
      document.title = 'Sushil Nemkul | Software Developer & BCA Student Portfolio';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center relative overflow-hidden bg-white dark:bg-slate-900 transition-colors">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-lg mx-auto"
      >
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-cyan-500/30 mb-6">
          <span>Error 404</span>
        </div>

        {/* Big Glitch/Glow Title */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 bg-clip-text text-transparent tracking-tighter mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-md mx-auto">
          The link you followed may be broken, or the page may have been removed or relocated.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 active:scale-95"
          >
            <Home size={18} />
            <span>Back to Homepage</span>
          </Link>

          <a
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 font-semibold text-sm transition-all border border-gray-200 dark:border-gray-700 active:scale-95"
          >
            <FolderGit2 size={18} />
            <span>View Projects</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">
          Need immediate assistance?{' '}
          <a
            href="mailto:namecoolsusil@gmail.com"
            className="text-blue-600 dark:text-cyan-400 font-medium hover:underline inline-flex items-center gap-1"
          >
            <Mail size={12} /> Contact Sushil
          </a>
        </div>
      </Motion.div>
    </div>
  );
}
