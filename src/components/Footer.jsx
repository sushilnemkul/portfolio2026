import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-8 mb-8">
            <a href="https://github.com/sushilnemkul" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/sushil-nemkul-7868b2261/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="mailto:namecoolsusil@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={24} /></a>
        </div>
        <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sushil Nemkul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
