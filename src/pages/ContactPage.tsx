
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Building2, Phone, Mail, Globe, Clock, Users } from 'lucide-react';
import AnimatedCursor from '@/components/AnimatedCursor';

const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'faq'>('contact');
  
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

  const officeInfo = [
    {
      icon: Building2,
      title: 'Headquarters',
      content: '123 Innovation Way, Tech Center, CA 94103',
    },
    {
      icon: Globe,
      title: 'Regional Offices',
      content: 'New York • London • Tokyo • Singapore',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
    },
    {
      icon: Users,
      title: 'Support Team',
      content: '24/7 Online Support for Enterprise Clients',
    },
  ];

  const faqs = [
    {
      question: 'What technologies do you use for game development?',
      answer: 'We primarily use Unity and Unreal Engine for game development, along with custom tools and frameworks designed for optimal performance and cross-platform compatibility.',
    },
    {
      question: 'How do you integrate blockchain into gaming?',
      answer: 'We implement blockchain technology through smart contracts, NFT integrations, and decentralized gaming economies. Our solutions focus on creating true digital ownership while maintaining excellent gameplay experiences.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A small to medium-sized game typically takes 4-8 months, while larger projects or full NFT marketplaces may take 8-12 months to complete.',
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, we provide comprehensive post-launch support packages that include maintenance, updates, and scaling solutions to ensure your project continues to perform optimally.',
    },
    {
      question: 'Can you help with existing projects that need blockchain integration?',
      answer: 'Absolutely! We specialize in adding blockchain functionality to existing games and applications, with a focus on seamless integration that enhances the user experience.',
    },
  ];

  return (
    <div className="min-h-screen">
      <AnimatedCursor/>
      
      <main>
        <section className="py-24 bg-secondary dark:bg-[#c4c5c10a]">
          <div className="max-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll stagger-delay-1">
              Get in touch with our team for inquiries, collaborations, or support
            </p>
          </div>
        </section>
        <Contact />
    
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
