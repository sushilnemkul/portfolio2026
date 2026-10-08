import { Github, Linkedin, Mail, Instagram, Phone, MapPin, Download, ArrowUp, Camera } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Photography', href: '#photography' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-12 border-t border-gray-800/80 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-800/80">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={scrollToTop}
              aria-label="Sushil Nemkul - Scroll to top"
              className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            >
              <div className="p-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <img
                  src="/logo.png"
                  alt="Sushil Nemkul Logo"
                  width="28"
                  height="28"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Sushil Nemkul
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              BCA student at DAV College and aspiring software developer passionate about building modern web applications, AI/ML computer vision systems, and event leadership.
            </p>
            <div className="pt-1">
              <a
                href="/Sushil_CV_2026.pdf"
                download="Sushil_Nemkul_CV.pdf"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white transition-colors shadow-sm shadow-blue-600/30"
              >
                <Download size={14} />
                <span>Download Resume (CV)</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors inline-block focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Clickable Contact Details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact Sushil
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:namecoolsusil@gmail.com"
                  aria-label="Send email to Sushil Nemkul at namecoolsusil@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
                >
                  <Mail size={16} className="text-blue-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                  <span className="break-all">namecoolsusil@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+9779843432401"
                  aria-label="Call Sushil Nemkul at +977 9843432401"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors group focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
                >
                  <Phone size={16} className="text-blue-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                  <span>+977 9843432401</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span>Siddhipur, Lalitpur, Nepal</span>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Photography */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Connect & Follow
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href="https://github.com/sushilnemkul"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sushil Nemkul's GitHub profile"
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <Github size={16} />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sushil-nemkul-7868b2261/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sushil Nemkul's LinkedIn profile"
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <Linkedin size={16} />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/namecoolsusil/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sushil Nemkul's personal Instagram profile"
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <Instagram size={16} />
                </div>
                <span>Instagram (Personal)</span>
              </a>
              <a
                href="https://www.instagram.com/i_am_sushil_nemkul"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sushil Nemkul's photography Instagram profile"
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <Camera size={16} />
                </div>
                <span>Instagram (Photography)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {currentYear} Sushil Nemkul. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-gray-500">
              Designed & Developed by Sushil Nemkul
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded py-1 px-2"
              aria-label="Scroll back to top of the page"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
