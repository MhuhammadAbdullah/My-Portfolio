import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Abdullah delivered an outstanding website that exceeded our expectations. His attention to detail and understanding of our business needs was impressive. The site is not only beautiful but also performs exceptionally well."
    },
    {
      name: "Michael Chen",
      position: "Founder & CEO",
      company: "Digital Solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with Abdullah was a fantastic experience. He combines technical expertise with creative vision, resulting in a website that perfectly represents our brand. His digital marketing insights were invaluable."
    },
    {
      name: "Emily Rodriguez",
      position: "E-commerce Manager",
      company: "Fashion Forward",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The e-commerce platform Abdullah built for us has significantly increased our online sales. His understanding of user experience and conversion optimization is remarkable. Highly recommended!"
    },
    {
      name: "David Park",
      position: "Restaurant Owner",
      company: "Bella Vista",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Abdullah transformed our online presence completely. The new website is modern, mobile-friendly, and has helped us attract more customers. His SEO work has improved our search rankings dramatically."
    }
  ];

  const brands = [
    "TechStart Inc.",
    "Digital Solutions",
    "Fashion Forward",
    "Bella Vista",
    "Creative Agency",
    "StartupHub"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            What my clients say about working with me. Their success is my success, 
            and I'm proud to have contributed to their growth.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className={`relative mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-6 left-6 text-cyan-400/20">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {Array.from({ length: testimonials[currentSlide].rating }).map((_, index) => (
                  <Star key={index} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-center">
                  <div className="font-semibold text-white text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-cyan-400 text-sm">
                    {testimonials[currentSlide].position}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/80 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/80 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-cyan-400' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Brand Logos */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Amazing Clients
            </h3>
            <p className="text-gray-400">
              I've had the privilege to work with these incredible brands and businesses
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-800/30 rounded-lg border border-gray-700/30 text-gray-300 font-medium hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8 rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Them?</h3>
            <p className="text-gray-400 mb-6">
              Let's create something amazing together and add your success story to this list.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;