
import React, { useEffect, useRef } from 'react';
import { Gamepad2, Link, Database ,Brain} from 'lucide-react';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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

    // Observe section elements
    if (sectionRef.current) {
      const elementsToAnimate = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elementsToAnimate.forEach((el) => observer.observe(el));
    }

    // Observe cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
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

  const services = [
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Create immersive gaming experiences with cutting-edge technology, from mobile games to AAA titles.',
      features: ['Immersive Gameplay Experiences with story-driven design',
         'Cutting-Edge Technology using Unreal Engine and Unity',
          'Multi-Platform Development for PC, console, and mobile'],
    },
    {
      icon: Link,
      title: 'Web3 Integration',
      description: 'Empower your gaming platform with blockchain technology',
      features: ['Decentralized Gaming Ecosystems with true asset ownership',
                   'Smart Contract Solutions for scalable systems',
                  'Seamless integration with dApps and gaming platforms'],
    },
    {
      icon: Database,
      title: 'Blockchain Development',
      description: 'Custom blockchain solutions for gaming and beyond',
      features: ['Tokenized Economy Design and Crypto Integration',
,'NFT Solutions for gaming, art, and collectibles','Custom Public and Private Blockchain Development',],
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Enhance your applications with artificial intelligence for automation, analytics, and personalized experiences.',
      features: ['Chatbots & Virtual Assistants', 'Predictive Analytics', 'AI-powered Personalization'],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll">Our Expertise</h2>
          <p className="animate-on-scroll stagger-delay-1 max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We deliver comprehensive solutions across gaming and blockchain technologies to elevate your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
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

        <div className="mt-12 text-center animate-on-scroll stagger-delay-4">
          <a
            href="/services"
            className="bg-rompit text-white px-6 py-3 rounded-md font-medium hover:bg-rompit-600 transition-colors duration-200 focus-ring inline-flex items-center"
          >
            <span>View All Services</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
