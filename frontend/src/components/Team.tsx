import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import vivek from "../assests/vivek.jpg";
import harish from "../assests/harish.png";
import shankar from '../assests/shankar.jpg';
import me2 from "../assests/me2.jpg";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imagePlaceholder: string;
  linkedin: string;
  github: string;
  twitter: string;
}

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const teamCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

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

    teamCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const teamMembers: TeamMember[] = [
    {
      name: 'Shankar Rao Mata',
      role: 'Lead Technical Architect',
      bio: 'Senior Software Engineer (Java, AWS, Rust, Solidity)',
      imagePlaceholder: shankar,
      linkedin: 'https://www.linkedin.com/in/mshankarrao/',
      github: 'https://github.com/mshankarrao',
      twitter: 'https://x.com/shankarlive',
    },
    {
      name: 'Vivek Jami',
      role: 'Full Stack Developer',
      bio: '3+ years in Full Stack development | Web3 enthusiast | Problem Solving, Python, Rust, Solidity, Go.',
      imagePlaceholder: vivek,
      linkedin: 'https://www.linkedin.com/in/vivek-jami/',
      github: 'https://github.com/vivekjami',
      twitter: 'https://x.com/vivekjami',
    },
    {
      name: 'Lokeswara Rao Katari',
      role: 'Junior Software Engineer',
      bio: 'Full-Stack Developer | GDSC Cloud Lead 23 | Go, TypeScript, React, Docker, Kubernetes.',
      imagePlaceholder: me2,
      linkedin: 'https://www.linkedin.com/in/lokesh-katari/',
      github: 'https://github.com/lokesh-katari',
      twitter: 'https://x.com/lokeshkatari921',
    },
    {
      name: 'Harish K',
      role: 'UI/UX Designer',
      bio: 'Creating UI/UX experiences that enhance user engagement and drive product success.',
      imagePlaceholder: harish,
      linkedin: 'https://www.linkedin.com/in/harish-k-23671494/',
      github: 'https://github.com/',
      twitter: 'https://twitter.com/',
    },
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-secondary dark:bg-black/50">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll">Meet Our Experts</h2>
          <p className="animate-on-scroll stagger-delay-1 max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Our talented team brings together diverse expertise in gaming, blockchain, and creative design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (teamCardsRef.current[index] = el)}
              className={`animate-on-scroll stagger-delay-${index + 1}`}
            >
              <div className="group neo-box overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className={`aspect-[4/5] ${!loadedImages[index] ? 'image-loading' : ''}`}>
                    <img
                      src={member.imagePlaceholder}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-rompit text-sm">{member.role}</p>
                  <div className="flex mt-3 space-x-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-black dark:text-white hover:opacity-80">
                      <FaLinkedin size={20} />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-black dark:text-white hover:opacity-80">
                      <FaGithub size={20} />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-black dark:text-white hover:opacity-80">
                      <FaXTwitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
