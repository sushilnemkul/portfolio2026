import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="flex-1 order-2 md:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-gray-500 dark:text-gray-400 overflow-hidden shadow-xl cursor-pointer">
                <motion.img
                  src="s2.jpg"
                  alt="Sushil Nemkul"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
            <div className="flex-1 order-1 md:order-2 space-y-6 text-gray-600 dark:text-gray-300 text-lg">
              <p>
                I am currently pursuing a <strong>Bachelor of Computer Applications (BCA)</strong> at <strong>DAV College</strong> (2022 – Present).
                Prior to this, I completed my +2 in Science (Biology) from Capital Secondary School.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Career Focus</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Web Development</li>
                  <li>Cyber Security</li>
                  <li>Computer Networking</li>
                  <li>AI/ML</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Personal Traits</h3>
                <p className="mb-4">
                  I pride myself on being a <strong>self-learner</strong>, highly <strong>adaptable</strong>, and a <strong>strong communicator</strong>.
                  I enjoy taking on leadership roles, as demonstrated by my experience as a Hackathon Organizer.
                </p>
                <p>
                  Outside of tech, I am a passionate <strong>photographer</strong>. I love capturing moments and maintaining a creative perspective, which often translates into designing better, more visually appealing user interfaces.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
