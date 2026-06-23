import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { TimelineDemo } from './ui/timeline-demo';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Networking Intern',
      company: 'Nepal Electricity Authority (NEA)',
      date: '2026 - Present',
      description: 'Gaining hands-on experience in enterprise computer networking, infrastructure maintenance, and system troubleshooting.'
    },
    {
      id: 2,
      role: 'Hackathon Organizer & Team Lead',
      company: 'DAV Codefest 2025',
      date: '2025',
      description: 'Organized a massive 72-hour hackathon with 150+ participants. Managed sponsors, faculty coordination, and team leadership.'
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'Academic Projects',
      date: '2023 - 2025',
      description: 'Developed various web applications using React.js and PHP. Focused on UI/UX fundamentals and responsive design.'
    },
    {
      id: 4,
      role: 'Graphics Designer',
      company: 'Freelance / Self-learning',
      date: '2022 - 2023',
      description: 'Created digital assets, logos, and UI mockups. Gained strong understanding of visual hierarchy and aesthetics.'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-800" />
              
              <div className="mb-1 flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                <Calendar size={16} className="mr-2" />
                {exp.date}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 font-medium">
                 <Briefcase size={16} className="mr-2" />
                 {exp.company}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <TimelineDemo />
      </div>
    </section>
  );
}
