import { useRef } from 'react';
import { motion } from 'framer-motion';
import { GlowingEffectDemo } from './ui/demo';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Skills() {
  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(lineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 85%'
        }
      }
    );
  }, []);

  const technicalSkills = [
    "Python", "CNN & TensorFlow", "SQL / MySQL", "PHP", "JavaScript", "React.js", "HTML & CSS", "Git & GitHub", "Android Studio", "Computer Networking (Cisco Basics)", "Fortigate"
  ];
  const softSkills = [
    "Data Analysis & Management", "UI/UX Fundamentals", "Problem Solving", "Time Management", "Team Leadership", "Adaptive", "Cyber Security Basics"
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300"
    >
      <p className="font-semibold text-gray-800 dark:text-gray-200 text-center">{skill}</p>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Skills</h2>
          <div ref={lineRef} className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full origin-center" />
          <p className="text-gray-600 dark:text-gray-400">My technical and professional toolkit</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-600 dark:text-blue-400">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-green-600 dark:text-green-400">Conceptual & Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index + technicalSkills.length} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">My Core Competencies</h3>
            <p className="text-gray-600 dark:text-gray-400">What I value and build into my work</p>
          </div>
          <GlowingEffectDemo />
        </div>
      </div>
    </section>
  );
}
