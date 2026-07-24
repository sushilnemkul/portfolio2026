import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
      _subject: `Portfolio Contact: Message from ${formData.get('user_name')}`
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/namecoolsusil@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok || result.success === 'true') {
        setStatus('Message sent successfully! I will get back to you soon.');
        form.current.reset();
      } else {
        setStatus('Failed to send message. Please try again or email namecoolsusil@gmail.com directly.');
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      setStatus('Failed to send message. Please try again or email namecoolsusil@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's Connect</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm actively looking for internship opportunities in Web Development and Data Analysis. 
              Feel free to reach out for collaborations or just to say hi!
            </p>
            
            <div className="space-y-4">
              <a href="mailto:namecoolsusil@gmail.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="mr-4" size={24} />
                namecoolsusil@gmail.com
              </a>
              <a href="tel:+9779843432401" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Phone className="mr-4" size={24} />
                9843432401
              </a>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin className="mr-4" size={24} />
                Siddhipur, Lalitpur
              </div>
              <a href="https://github.com/sushilnemkul" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github className="mr-4" size={24} />
                github.com/sushilnemkul
              </a>
              <a href="https://www.linkedin.com/in/sushil-nemkul-7868b2261/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="mr-4" size={24} />
                linkedin.com/in/sushil-nemkul
              </a>
            </div>
          </div>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="user_name" // Required by EmailJS
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            
             <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="user_email" // Required by EmailJS
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                name="message" // Required by EmailJS
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                placeholder="Your message..."
              />
            </div>

            {status && (
                <p className={`text-sm ${status.includes('success') ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                    {status}
                </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
