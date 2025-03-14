import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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

    if (sectionRef.current) {
      const elementsToAnimate = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elementsToAnimate.forEach((el) => observer.observe(el));
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: 'Our Mission',
      content: 'To inspire, innovate, and empower through exceptional game development and seamless integration of Web3 and blockchain technologies.',
      animation: 'scale',
    },
    {
      title: 'Vision',
      content: 'Building a future where gaming and blockchain technologies converge to create immersive, secure, and accessible digital ecosystems for everyone.',
      animation: 'scale',
    },
    {
      title: 'Innovation Meets Imagination',
      content: 'We are transforming the digital frontier with cutting-edge game development and pioneering solutions in Web3 and blockchain technology.',
      animation: 'scale',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="max-container">
        {/* Added "Who We Are" heading */}
        <h2 className="text-center text-3xl font-bold text-rompit mb-6 animate-on-scroll">Who We Are</h2>

        <div className="text-center mb-12">
          <h3 className="animate-on-scroll text-2xl font-semibold">ABOUT ROMPIT</h3>
          <p className="animate-on-scroll stagger-delay-1 max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            At ROMPIT, we're a passionate team of developers, designers, and innovators dedicated to reshaping the gaming and blockchain landscape. Established with a vision to fuse creativity with technology, we specialize in delivering next-generation games and scalable blockchain solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <div
              key={card.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`animate-on-scroll stagger-delay-${index + 1} neo-box p-6 transition-all duration-700 h-full`}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div
                className={`h-full flex flex-col ${
                  card.animation === 'flip'
                    ? 'group relative [transform-style:preserve-3d] transition-all duration-700 hover:[transform:rotateY(180deg)]'
                    : card.animation === 'scale'
                    ? 'transition-transform duration-500 hover:scale-[1.05]'
                    : 'transition-all duration-500 hover:shadow-[0_10px_50px_rgba(0,0,0,0.08)]'
                }`}
              >
                <div className={`${card.animation === 'flip' ? 'absolute inset-0 [backface-visibility:hidden]' : ''} flex flex-col h-full`}>
                  <h3 className="text-2xl font-bold mb-4 text-rompit">{card.title}</h3>
                  <p className="text-muted-foreground flex-grow">{card.content}</p>
                </div>

                {card.animation === 'flip' && (
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-rompit text-white rounded-2xl flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                      <p>{card.content}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll stagger-delay-4">
          <a
            href="/about"
            className="inline-flex items-center text-rompit hover:text-rompit-600 font-medium transition-colors duration-200"
          >
            <span>Learn More</span>
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

export default About;
