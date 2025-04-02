import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Cloud, Camera, BarChart, Rocket } from 'lucide-react';
import AnimatedCursor from '@/components/AnimatedCursor';
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    const glare = card.querySelector('.card-tilt-glare') as HTMLElement;
    if (glare) {
      const percentX = x / rect.width * 100;
      const percentY = y / rect.height * 100;
      glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.2) 0%, transparent 80%)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  const projects = [
    {
      icon: Monitor,
      title: 'TrueSight AI',
      subtitle: 'AI vs. Real Image Classification',
      description: 'Advanced solution for distinguishing AI-generated and real images with unparalleled precision.',
      features: [
        'High-accuracy classification algorithms',
        'Media & security applications',
        'Content moderation integration'
      ],
    },
    {
      icon: Cloud,
      title: 'StreamXchange',
      subtitle: 'Real-Time File Sharing & Streaming',
      description: 'Session-based platform for secure, real-time collaboration and media streaming.',
      features: [
        'End-to-end encryption',
        'Real-time synchronization',
        'Scalable architecture'
      ],
    },
    {
      icon: Camera,
      title: 'OneShotStyle',
      subtitle: 'Photo Stylization with JoJoGAN',
      description: 'Transform photos into custom-styled masterpieces with single-reference learning.',
      features: [
        'One-shot style transfer',
        'High-quality outputs',
        'User-friendly interface'
      ],
    },
    {
      icon: BarChart,
      title: 'InsightReview',
      subtitle: 'Sentiment Analysis BI System',
      description: 'Business intelligence platform powered by advanced sentiment analysis.',
      features: [
        'Real-time sentiment tracking',
        'Customizable dashboards',
        'Cross-industry applications'
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <AnimatedCursor />
      
      <main>
        <section className="py-24 bg-secondary dark:bg-black/50">
          <div className="max-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll stagger-delay-1">
              Turning cutting-edge ideas into powerful software solutions
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="animate-on-scroll">Innovation in Action</h2>
              <p className="animate-on-scroll stagger-delay-1 max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                Explore our standout projects shaping the future of technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`animate-on-scroll stagger-delay-${index + 1}`}
                >
                  <div
                    className="card-tilt h-full"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="card-tilt-content neo-box p-8 h-full">
                      <div className="card-tilt-glare"></div>
                      <div className="bg-rompit/10 dark:bg-rompit/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                        <project.icon className="h-8 w-8 text-rompit" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-lg text-rompit mb-4">{project.subtitle}</p>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-rompit mr-2"></span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary dark:bg-black/50">
          <div className="max-container text-center">
            <div className="animate-on-scroll">
              <Rocket className="h-16 w-16 mx-auto mb-6 text-rompit" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll stagger-delay-1">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll stagger-delay-2">
              Our portfolio reflects our commitment to innovation, quality, and client success. 
              Whether it's harnessing AI for practical solutions or building tools that inspire creativity, 
              we're here to bring your vision to life.
            </p>
            <div className="mt-8 animate-on-scroll stagger-delay-3">
  <Link
    to="/contact"
    className="bg-rompit text-white px-8 py-4 rounded-lg font-medium hover:bg-rompit-600 transition-colors duration-200 inline-flex items-center"
  >
    <span>Start Your Project</span>
    <Rocket className="ml-2 h-5 w-5" />
  </Link>
</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;