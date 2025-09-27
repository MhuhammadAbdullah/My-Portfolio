import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, TrendingUp, Award } from 'lucide-react';

const About = () => {
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

  const timeline = [
    {
      icon: <Code size={24} />,
      title: "Web Development Journey",
      period: "2023 - Present",
      description: "Started learning web development with a focus on modern technologies like React, Node.js, and responsive design principles."
    },
    {
      icon: <Award size={24} />,
      title: "Saylani Mass IT Training",
      period: "2023",
      description: "Completed comprehensive web development course covering frontend and backend technologies, databases, and project development."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Digital Marketing Learning",
      period: "2024 - Present",
      description: "Expanding skills in digital marketing, SEO optimization, social media marketing, and online advertising strategies."
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      period: "Ongoing",
      description: "Developing skills in user interface and user experience design to create beautiful and functional digital experiences."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web developer and digital marketing enthusiast dedicated to creating 
            innovative digital solutions that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey into the digital world began with a curiosity about how websites work and 
                how businesses connect with their audiences online. Through dedicated learning and 
                hands-on practice, I've developed a strong foundation in web development.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Currently expanding my expertise in digital marketing, I believe in the power of 
                combining technical skills with marketing knowledge to create websites that not only 
                look great but also drive real business results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about staying up-to-date with the latest trends and technologies, 
                always striving to deliver exceptional user experiences and measurable outcomes 
                for every project I work on.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
          }`}>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-300 text-sm">Years Learning</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Projects Built</div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h4 className="text-lg font-semibold text-white mb-4">Core Expertise</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Frontend Development</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="w-20 bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Backend Development</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="w-24 bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Digital Marketing</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="w-16 bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Journey
            </span>
          </h3>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 flex-1 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    <span className="text-cyan-400 font-medium text-sm">{item.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;