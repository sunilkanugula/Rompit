import React, { useEffect, useRef } from 'react';
import FloatingShapes from './FloatingShapes';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on mount
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];

    elements.forEach((el, i) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('animated');
        }, 300 + i * 200);
      }
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center mt-3 overflow-hidden bg-secondary dark:bg-[#0d0d0d]">
      {/* Background shapes */}
      <FloatingShapes />

      {/* Content Container */}
      <div className="max-container relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
        {/* Title */}
        <h1 
          ref={titleRef}
          className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6 md:mb-8"
        >
          Welcome to <span className="text-gradient hover-pop">ROMPIT TECHNOLOGIES
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="animate-on-scroll stagger-delay-1 text-xl md:text-2xl mb-10 md:mb-12 max-w-2xl text-balance"
        >
         Innovating the Future of Gaming , Web3 & AI applications
        </p>

        {/* CTA Button */}
        <div 
          ref={ctaRef} 
          className="animate-on-scroll stagger-delay-2"
        >
          <a 
            href="#about" 
            className="bg-rompit text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 hover:bg-rompit-600 hover:shadow-[0_0_15px_rgba(255,102,0,0.5)] focus-ring hover-grow"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
