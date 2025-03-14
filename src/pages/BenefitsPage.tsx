
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import { Shield, Zap, Target, BarChart, Users, Clock } from 'lucide-react';
import AnimatedCursor from '@/components/AnimatedCursor';

const BenefitsPage: React.FC = () => {
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

  const additionalBenefits = [
    {
      icon: Zap,
      title: 'Enhanced Performance',
      description: 'Optimize your gaming platform for speed, reliability, and smooth user experiences.',
    },
    {
      icon: Target,
      title: 'Targeted Marketing',
      description: 'Reach your ideal audience with precision through data-driven marketing strategies.',
    },
    {
      icon: BarChart,
      title: 'Data Insights',
      description: 'Gain valuable insights into user behavior and preferences to inform better decisions.',
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Foster a loyal community around your brand with engaging social features.',
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Save development time with our streamlined processes and expert guidance.',
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Protect your users and assets with top-tier security measures and best practices.',
    },
  ];

  return (
    <div className="min-h-screen">
       <AnimatedCursor />
      <Navbar />
      <main>
        <section className="py-24 bg-secondary dark:bg-[#313131]">
          <div className="max-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Benefits</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll stagger-delay-1">
              Discover how our solutions can transform your gaming experience and business
            </p>
          </div>
        </section>
        <Benefits />
        <section className="py-20 bg-background">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="animate-on-scroll">More Advantages</h2>
              <p className="animate-on-scroll stagger-delay-1 max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                Explore additional ways our solutions can benefit your gaming and blockchain projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {additionalBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`animate-on-scroll stagger-delay-${index + 1}`}
                >
                  <div className="neo-box p-6 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="bg-rompit/10 dark:bg-rompit/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                      <benefit.icon className="h-7 w-7 text-rompit" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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

export default BenefitsPage;
