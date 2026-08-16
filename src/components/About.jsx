import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  Code2,
  ShieldCheck,
  Network,
  Cpu,
  Sparkles,
  Users,
  Camera,
  Award,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax transforms linked to scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const photoY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [40, -30]);
  const contentY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -15]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const careerFocusList = [
    { name: 'Web Development', icon: Code2 },
    { name: 'Cyber Security', icon: ShieldCheck },
    { name: 'Computer Networking', icon: Network },
    { name: 'AI/ML', icon: Cpu },
  ];

  const traits = [
    { name: 'Self-learner', icon: Sparkles },
    { name: 'Highly adaptable', icon: CheckCircle2 },
    { name: 'Strong communicator', icon: Users },
    { name: 'Hackathon Organizer', icon: Award },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col items-center"
        >
          {/* Section Heading */}
          <Motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          </Motion.div>

          {/* Unified Content Layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Clean Portrait */}
            <Motion.div
              variants={itemVariants}
              style={{ y: photoY }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-sm">
                <div className="relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-slate-800 shadow-xl border border-gray-200/80 dark:border-slate-700/80">
                  <div className="w-full h-80 sm:h-96 overflow-hidden">
                    <img
                      src="s2.jpg"
                      alt="Sushil Nemkul"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </Motion.div>

            {/* Right: Authentic Bio & Focus */}
            <Motion.div
              variants={itemVariants}
              style={{ y: contentY }}
              className="lg:col-span-7 space-y-7 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
            >
              {/* Education / Intro */}
              <p>
                I am currently pursuing a <strong className="text-gray-900 dark:text-white font-semibold">Bachelor of Computer Applications (BCA)</strong> at <strong className="text-gray-900 dark:text-white font-semibold">DAV College</strong> (2022 – Present).
                Prior to this, I completed my +2 in Science (Biology) from Capital Secondary School.
              </p>

              {/* Career Focus */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Career Focus
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {careerFocusList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium bg-blue-50 dark:bg-slate-800/80 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-slate-700/80"
                      >
                        <Icon size={16} className="text-blue-600 dark:text-cyan-400" />
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Personal Traits */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Personal Traits
                </h3>
                <p className="mb-3">
                  I pride myself on being a <strong className="text-gray-900 dark:text-white font-medium">self-learner</strong>, highly <strong className="text-gray-900 dark:text-white font-medium">adaptable</strong>, and a <strong className="text-gray-900 dark:text-white font-medium">strong communicator</strong>.
                  I enjoy taking on leadership roles, as demonstrated by my experience as a Hackathon Organizer.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {traits.map((trait) => {
                    const TraitIcon = trait.icon;
                    return (
                      <span
                        key={trait.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-slate-700"
                      >
                        <TraitIcon size={13} className="text-blue-600 dark:text-cyan-400" />
                        {trait.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Photography */}
              <div className="pt-3 border-t border-gray-200 dark:border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 mt-1 flex-shrink-0">
                  <Camera size={18} />
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  Outside of tech, I am a passionate <strong className="text-gray-900 dark:text-white font-medium">photographer</strong>. I love capturing moments and maintaining a creative perspective, which often translates into designing better, more visually appealing user interfaces.
                </p>
              </div>

            </Motion.div>

          </div>
        </Motion.div>
      </div>
    </section>
  );
}
