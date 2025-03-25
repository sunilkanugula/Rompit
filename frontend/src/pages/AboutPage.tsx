
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import AnimatedCursor from '@/components/AnimatedCursor';

const AboutPage: React.FC = () => {
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

  return (
    <div className="min-h-screen">
       <AnimatedCursor />
      
      <main>
        <section className="py-24 bg-secondary dark:bg-black/50">
          <div className="max-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll stagger-delay-1">
              Learn more about our mission, vision, and the team behind ROMPIT
            </p>
          </div>
        </section>
        <About />
        <section className="py-20 bg-background">
          <div className="max-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2024, ROMPIT began as a small team of passionate developers with a vision to bridge the gap between traditional gaming and emerging blockchain technologies.
                </p>
                <p className="text-muted-foreground mb-6">
                  Today, we've grown into a diverse team of experts, collaborating with industry leaders to create innovative solutions that push the boundaries of what's possible in gaming and Web3.
                </p>
              </div>
              <div className="animate-on-scroll stagger-delay-1">
                <div className="neo-box p-6 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-rompit">Our Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-rompit mr-2 mt-2"></span>
                      <div>
                        <h4 className="font-bold">Innovation</h4>
                        <p className="text-muted-foreground">Pushing boundaries and exploring new possibilities</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-rompit mr-2 mt-2"></span>
                      <div>
                        <h4 className="font-bold">Integrity</h4>
                        <p className="text-muted-foreground">Building trust through transparency and honesty</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-rompit mr-2 mt-2"></span>
                      <div>
                        <h4 className="font-bold">Inclusivity</h4>
                        <p className="text-muted-foreground">Creating accessible experiences for everyone</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
