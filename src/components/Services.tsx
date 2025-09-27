import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, TrendingUp, Smartphone, Search, Share2 } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code size={32} />,
      title: "Website Development",
      description: "Custom websites built with modern technologies like React, Node.js, and responsive design principles. From simple landing pages to complex web applications.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
      color: "cyan"
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that provide exceptional user experiences. Focus on usability, accessibility, and modern design trends.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "blue"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and reach your target audience effectively through various channels.",
      features: ["Marketing Strategy", "Content Creation", "Campaign Management", "Analytics & Reporting"],
      color: "purple"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Responsive Development",
      description: "Mobile-first approach ensuring your website looks and works perfectly on all devices, from smartphones to desktop computers.",
      features: ["Mobile-First Design", "Cross-Device Testing", "Touch-Friendly Interface", "Fast Loading"],
      color: "green"
    },
    {
      icon: <Search size={32} />,
      title: "SEO Optimization",
      description: "Search engine optimization to improve your website's visibility and ranking on search engines, driving more organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Performance Optimization"],
      color: "orange"
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to build brand awareness, engage with your audience, and drive conversions across platforms.",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics Tracking"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500/20',
        bg: 'from-cyan-500/20 to-cyan-600/20',
        text: 'text-cyan-400',
        hover: 'group-hover:border-cyan-500/40'
      },
      blue: {
        border: 'border-blue-500/20',
        bg: 'from-blue-500/20 to-blue-600/20',
        text: 'text-blue-400',
        hover: 'group-hover:border-blue-500/40'
      },
      purple: {
        border: 'border-purple-500/20',
        bg: 'from-purple-500/20 to-purple-600/20',
        text: 'text-purple-400',
        hover: 'group-hover:border-purple-500/40'
      },
      green: {
        border: 'border-green-500/20',
        bg: 'from-green-500/20 to-green-600/20',
        text: 'text-green-400',
        hover: 'group-hover:border-green-500/40'
      },
      orange: {
        border: 'border-orange-500/20',
        bg: 'from-orange-500/20 to-orange-600/20',
        text: 'text-orange-400',
        hover: 'group-hover:border-orange-500/40'
      },
      pink: {
        border: 'border-pink-500/20',
        bg: 'from-pink-500/20 to-pink-600/20',
        text: 'text-pink-400',
        hover: 'group-hover:border-pink-500/40'
      }
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I offer a comprehensive range of web development and digital marketing services 
            to help bring your vision to life and grow your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border ${colorClasses.border} ${colorClasses.hover} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center ${colorClasses.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-xl font-bold text-white mb-4 group-hover:${colorClasses.text.replace('text-', 'text-')} transition-colors duration-300`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <button className={`text-sm font-medium ${colorClasses.text} hover:text-white transition-colors duration-200`}>
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Let's discuss how I can help you achieve your goals with professional web development 
              and digital marketing solutions.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;