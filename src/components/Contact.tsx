
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle ,Timer} from 'lucide-react';
import { title } from 'process';
import { Content } from 'vaul';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Srikakulam, Andhrapradesh, India',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9396262695',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@rompit.org',
    },
    {
      icon :Timer,
      title:'Timings',
      content:'Monday - Friday 9AM - 4PM'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="bg-background">
      <div className="max-container mt-10">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll">Let's Connect</h2>
          <p className="animate-on-scroll stagger-delay-1 max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Have a project in mind or want to learn more about our services? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact form */}
          <div className="animate-on-scroll stagger-delay-1">
            <div className="neo-box p-8 rounded-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-rompit transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-rompit transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-rompit transition-all duration-200"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-rompit text-white px-6 py-3 rounded-md font-medium hover:bg-rompit-600 transition-colors duration-200 focus-ring flex justify-center items-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info */}
          <div className="animate-on-scroll stagger-delay-2">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={item.title} className="flex items-start">
                  <div className="p-3 bg-rompit/10 dark:bg-rompit/20 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-rompit" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}

              {/* Add a map or image */}
              {/* <div className="neo-box mt-8 rounded-xl overflow-hidden">
                <div className="bg-muted h-64 w-full"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
