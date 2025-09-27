import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${particle.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-blue-900/30 z-10"></div>
      
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Muhammad</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Abdullah
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
            <span className="block mb-2">Web Developer</span>
            <span className="text-cyan-400">&</span>
            <span className="block mt-2">Digital Marketing Learner</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, responsive websites and learning the art of digital marketing 
            to create impactful online experiences that drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#resume')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              View Resume
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-cyan-400 hover:text-white transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
