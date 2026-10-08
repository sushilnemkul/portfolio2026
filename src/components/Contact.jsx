import { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
  const lineRef = useRef(null);
  const form = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [feedback, setFeedback] = useState({ type: null, message: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.user_name.trim()) {
      errors.user_name = 'Please enter your name.';
    }
    if (!formData.user_email.trim()) {
      errors.user_email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email.trim())) {
      errors.user_email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Your message should be at least 10 characters long.';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFeedback({
        type: 'error',
        message: 'Please complete all required fields correctly.',
        details: 'Check the highlighted fields above.',
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback({
      type: 'loading',
      message: 'Sending your message...',
      details: 'Please wait a moment while your message is delivered.',
    });

    const data = {
      name: formData.user_name.trim(),
      email: formData.user_email.trim(),
      message: formData.message.trim(),
      _subject: `Portfolio Contact: New Message from ${formData.user_name.trim()}`,
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/namecoolsusil@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok || result.success === 'true') {
        setFeedback({
          type: 'success',
          message: 'Message Sent Successfully!',
          details: "Thank you for reaching out. I'll get back to you as soon as possible.",
        });
        setFormData({ user_name: '', user_email: '', message: '' });
        setFormErrors({});
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      setFeedback({
        type: 'error',
        message: 'Failed to Send Message',
        details: 'Something went wrong. Please email namecoolsusil@gmail.com directly or try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div
          ref={lineRef}
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-16 rounded-full origin-center"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Info Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's Connect</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm actively seeking opportunities in Software Development, Web Applications, and AI/ML projects.
              Whether you have a project idea, an internship opportunity, or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-4">
              {/* Clickable Email */}
              <a
                href="mailto:namecoolsusil@gmail.com"
                aria-label="Send an email to Sushil Nemkul at namecoolsusil@gmail.com"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 -ml-2"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 mr-4">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Email</div>
                  <div className="font-semibold text-gray-900 dark:text-white">namecoolsusil@gmail.com</div>
                </div>
              </a>

              {/* Clickable Phone Number */}
              <a
                href="tel:+9779843432401"
                aria-label="Call Sushil Nemkul at +977 9843432401"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 -ml-2"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 mr-4">
                  <Phone size={22} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Phone</div>
                  <div className="font-semibold text-gray-900 dark:text-white">+977 9843432401</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center text-gray-700 dark:text-gray-300 p-2 -ml-2">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 mr-4">
                  <MapPin size={22} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Location</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Siddhipur, Lalitpur, Nepal</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com/sushilnemkul"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sushil Nemkul's GitHub profile"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium border border-gray-200 dark:border-gray-700"
                >
                  <Github size={18} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sushil-nemkul-7868b2261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sushil Nemkul's LinkedIn profile"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium border border-gray-200 dark:border-gray-700"
                >
                  <Linkedin size={18} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column with Success and Error Messages */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-md"
          >
            {/* Full Feedback Alert Box: Success / Error / Loading */}
            {feedback.type && (
              <div
                role={feedback.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
                className={`p-4 rounded-xl text-sm font-medium border flex items-start gap-3 transition-all ${
                  feedback.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                    : feedback.type === 'error'
                    ? 'bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                    : 'bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-800'
                }`}
              >
                {feedback.type === 'success' && (
                  <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                )}
                {feedback.type === 'error' && (
                  <AlertCircle size={20} className="text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                )}
                {feedback.type === 'loading' && (
                  <Loader2 size={20} className="text-blue-600 dark:text-blue-400 animate-spin flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="font-bold">{feedback.message}</div>
                  {feedback.details && (
                    <div className="text-xs mt-1 opacity-90 leading-relaxed">{feedback.details}</div>
                  )}
                </div>
              </div>
            )}

            {/* Name Input */}
            <div>
              <label htmlFor="user_name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!formErrors.user_name}
                autoComplete="name"
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 dark:bg-slate-700/60 text-gray-900 dark:text-white outline-none transition-all ${
                  formErrors.user_name
                    ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500'
                }`}
                placeholder="e.g. John Doe"
              />
              {formErrors.user_name && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle size={12} /> {formErrors.user_name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!formErrors.user_email}
                autoComplete="email"
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 dark:bg-slate-700/60 text-gray-900 dark:text-white outline-none transition-all ${
                  formErrors.user_email
                    ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500'
                }`}
                placeholder="you@example.com"
              />
              {formErrors.user_email && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle size={12} /> {formErrors.user_email}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!formErrors.message}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 dark:bg-slate-700/60 text-gray-900 dark:text-white outline-none transition-all ${
                  formErrors.message
                    ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                    : 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500'
                }`}
                placeholder="Tell me about your project, idea, or opportunity..."
              />
              {formErrors.message && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle size={12} /> {formErrors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
