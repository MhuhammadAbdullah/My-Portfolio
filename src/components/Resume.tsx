import React, { useEffect, useRef, useState } from 'react';
import { Download, BookOpen, Code, Award, Briefcase } from 'lucide-react';

const Resume = () => {
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

  const skills = {
    frontend: [
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Responsive Design', level: 90 }
    ],
    backend: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 75 },
      { name: 'API Development', level: 80 },
      { name: 'Database Design', level: 70 }
    ],
    marketing: [
      { name: 'SEO Optimization', level: 65 },
      { name: 'Social Media Marketing', level: 70 },
      { name: 'Google Analytics', level: 60 },
      { name: 'Content Marketing', level: 65 },
      { name: 'Email Marketing', level: 60 }
    ]
  };

  return (
    <section id="resume" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            My educational background, skills, and professional journey in web development 
            and digital marketing.
          </p>
          
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education & Training */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <BookOpen className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Education & Training</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      Web Development Course
                    </h4>
                    <span className="text-cyan-400 text-sm font-medium">2023</span>
                  </div>
                  <p className="text-cyan-400 font-medium mb-2">Saylani Mass IT Training</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Comprehensive training in full-stack web development including HTML5, CSS3, 
                    JavaScript, React.js, Node.js, MongoDB, and modern development practices.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      Digital Marketing Fundamentals
                    </h4>
                    <span className="text-blue-400 text-sm font-medium">2024</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">Self-Learning & Online Courses</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Studying digital marketing strategies, SEO, social media marketing, 
                    content creation, and analytics to complement web development skills.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      UI/UX Design Principles
                    </h4>
                    <span className="text-purple-400 text-sm font-medium">Ongoing</span>
                  </div>
                  <p className="text-purple-400 font-medium mb-2">Online Learning Platforms</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Learning user interface and user experience design principles to create 
                    more effective and user-friendly web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
              <div className="flex items-center mb-6">
                <Briefcase className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      Freelance Web Developer
                    </h4>
                    <span className="text-cyan-400 text-sm font-medium">2023 - Present</span>
                  </div>
                  <p className="text-cyan-400 font-medium mb-2">Self-Employed</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Developing responsive websites and web applications for various clients, 
                    focusing on modern design principles and user experience optimization.
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Built 15+ responsive websites using React and modern CSS</li>
                    <li>• Implemented SEO best practices for improved search rankings</li>
                    <li>• Collaborated with clients to understand requirements and deliver solutions</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-white">
                      Digital Marketing Intern
                    </h4>
                    <span className="text-blue-400 text-sm font-medium">2024 - Present</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">Learning Phase</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Gaining hands-on experience in digital marketing strategies, social media 
                    management, and content creation to complement web development skills.
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Learning Google Ads and Facebook Ads management</li>
                    <li>• Studying SEO optimization and keyword research</li>
                    <li>• Creating content for social media platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
            <div className="flex items-center mb-8">
              <Code className="text-cyan-400 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Frontend Development</h4>
                <div className="space-y-3">
                  {skills.frontend.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-cyan-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Backend Development</h4>
                <div className="space-y-3">
                  {skills.backend.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-blue-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marketing Skills */}
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-4">Digital Marketing</h4>
                <div className="space-y-3">
                  {skills.marketing.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;