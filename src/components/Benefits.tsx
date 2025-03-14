
import React, { useEffect, useRef } from 'react';
import { Shield, TrendingUp, Rocket, TestTube } from 'lucide-react';

const Benefits: React.FC = () => {
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

  const benefits = [
    {
      icon: Shield,
      title: 'Build Brand Trust',
      description: 'Build confidence and credibility with your audience through transparent and consistent messaging.',
    },
    {
      icon: TrendingUp,
      title: 'More Leads & Growth',
      description: 'Attract potential customers effectively by showcasing the unique value your brand offers.',
    },
    {
      icon: Rocket,
      title: 'Higher Conversions',
      description: 'Turn players into loyal customers with engaging experiences and meaningful rewards.',
    },
    {
      icon: TestTube,
      title: 'Test Marketing Ideas',
      description: 'Experiment with innovative strategies to find the most effective ways to engage your audience.',
    },
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-20 bg-secondary dark:bg-black/50">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll">Why Choose Us?</h2>
          <p className="animate-on-scroll stagger-delay-1 max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Our comprehensive approach combines technical expertise with creative innovation to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`animate-on-scroll stagger-delay-${index + 1}`}
            >
              <div className="h-full neo-box p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="bg-rompit/10 dark:bg-rompit/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-rompit" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll stagger-delay-5">
          <a
            href="/benefits"
            className="bg-rompit/10 hover:bg-rompit/20 text-rompit px-6 py-3 rounded-md font-medium transition-all duration-200 focus-ring inline-flex items-center"
          >
            <span>Explore Benefits</span>
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

export default Benefits;
