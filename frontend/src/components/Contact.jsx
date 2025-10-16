import React, { useState } from 'react';
import { portfolioData } from '../mock';
import * as LucideIcons from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    alert('Thanks for reaching out! This is a demo submission. Backend integration coming soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-mono text-center">
          <span className="text-emerald-400">04.</span> Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <LucideIcons.Mail className="text-emerald-400" size={20} />
                <a href={`mailto:${portfolioData.email}`} className="hover:text-emerald-400 transition-colors">
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <LucideIcons.Phone className="text-emerald-400" size={20} />
                <a href={`tel:${portfolioData.phone}`} className="hover:text-emerald-400 transition-colors">
                  {portfolioData.phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <h4 className="text-xl font-semibold text-white mb-4 font-mono">Find Me Online</h4>
            <div className="flex flex-wrap gap-4">
              {portfolioData.socialLinks.map((link, index) => {
                const IconComponent = LucideIcons[link.icon];
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 group"
                  >
                    <IconComponent className="text-gray-400 group-hover:text-emerald-400 transition-colors" size={20} />
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-mono">
                      {link.platform}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-slate-900 border-2 border-slate-700 rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-mono text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-mono text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-mono text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-400 text-slate-900 rounded-lg font-mono font-semibold hover:bg-emerald-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-400/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;