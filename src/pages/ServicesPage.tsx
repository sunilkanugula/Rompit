
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { Code, Palette, Headphones, Puzzle, LineChart, Trophy } from 'lucide-react';
import AnimatedCursor from '@/components/AnimatedCursor';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Animation observer
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

    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Add mouse move event for 3D effect
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
    
    // Update glare position
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

  const additionalServices = [
    {
      icon: Code,
      title: 'Smart Contract Auditing',
      description: 'Ensure your blockchain contracts are secure, efficient, and free from vulnerabilities.',
      features: ['Security Analysis', 'Performance Optimization', 'Vulnerability Detection'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user interfaces that enhance the gaming experience.',
      features: ['Wireframing', 'Prototyping', 'User Testing'],
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Ongoing assistance and maintenance to ensure your platform runs smoothly.',
      features: ['24/7 Support', 'Issue Resolution', 'Performance Monitoring'],
    },
    {
      icon: Puzzle,
      title: 'Custom Solutions',
      description: 'Tailored development services to meet your specific project requirements.',
      features: ['Requirement Analysis', 'Custom Development', 'Integration Services'],
    },
    {
      icon: LineChart,
      title: 'Analytics Integration',
      description: 'Implement robust analytics to track user behavior and platform performance.',
      features: ['Data Collection', 'Visualization Tools', 'Insight Generation'],
    },
    {
      icon: Trophy,
      title: 'Tokenomics Design',
      description: 'Develop effective token economics models for your blockchain project.',
      features: ['Token Utility', 'Economic Modeling', 'Incentive Structures'],
    },
  ];

  return (
    <div className="min-h-screen">
       <AnimatedCursor />
      <Navbar />
      <main>
        <section className="py-24 bg-secondary dark:bg-black/50">
          <div className="max-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll stagger-delay-1">
              Comprehensive solutions for gaming and blockchain technologies
            </p>
          </div>
        </section>
        <Services />
        <section className="py-20 bg-secondary dark:bg-black/50">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="animate-on-scroll">Additional Services</h2>
              <p className="animate-on-scroll stagger-delay-1 max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                Explore our extended range of specialized services to meet all your gaming and blockchain needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {additionalServices.map((service, index) => (
                <div
                  key={service.title}
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
                        <service.icon className="h-8 w-8 text-rompit" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
