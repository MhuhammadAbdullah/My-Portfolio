import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Website Development',
    'UI/UX Design',
    'Digital Marketing',
    'SEO Optimization',
    'Responsive Design',
    'Social Media Marketing'
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/abdullahbaloch"
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/abdullahbaloch"
    },
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      url: "https://instagram.com/abdullahbaloch"
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter",
      url: "https://twitter.com/abdullahbaloch"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Abdullah Baloch
                </h3>
                <p className="text-gray-400 mt-2">Web Developer & Digital Marketing Learner</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Passionate about creating beautiful, functional websites and learning the art 
                of digital marketing to deliver comprehensive digital solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 transform hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
              <div className="space-y-3">
                <div className="text-gray-400 text-sm">
                  <strong className="text-white">Email:</strong><br />
                  abdullah.baloch@email.com
                </div>
                <div className="text-gray-400 text-sm">
                  <strong className="text-white">Phone:</strong><br />
                  +92 300 1234567
                </div>
                <div className="text-gray-400 text-sm">
                  <strong className="text-white">Location:</strong><br />
                  Karachi, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-6 rounded-2xl border border-cyan-500/20">
            <div className="text-center md:flex md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-gray-400 text-sm">
                  Get notified about my latest projects and blog posts
                </p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-r-lg hover:shadow-lg transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              © {currentYear} Abdullah Baloch. Made with 
              <Heart size={14} className="text-red-400 mx-1 fill-current" />
              in Karachi
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;