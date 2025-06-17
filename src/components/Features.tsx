import React, { useEffect, useRef } from 'react';
import { 
  Rocket, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users 
} from 'lucide-react';

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const section = sectionRef.current;
    if (section) {
      const animatedElements = section.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Rocket size={24} />,
      title: 'Rapid Innovation',
      description: 'Transform your ideas into market-ready solutions with our accelerated development process and cutting-edge methodologies.'
    },
    {
      icon: <Brain size={24} />,
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence and machine learning to create intelligent systems that adapt and evolve with your business.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Enterprise Security',
      description: 'Built-in security measures and compliance standards ensure your innovations are protected from day one.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimized',
      description: 'Every solution is engineered for peak performance, scalability, and reliability to support your growth.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Reach',
      description: 'Cloud-native architectures and global infrastructure ensure your innovations reach users worldwide seamlessly.'
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Team',
      description: 'Our multidisciplinary team of experts brings decades of experience in technology, design, and business strategy.'
    }
  ];

  return (
    <section id="features" className="features" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="heading-secondary section-title">
            Why Choose InnovateHub?
          </h2>
          <p className="text-large section-description">
            We combine technical excellence with creative vision to deliver 
            solutions that don't just meet today's needs, but anticipate tomorrow's opportunities.
          </p>
        </div>

        <div className="features-grid stagger-animation">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-on-scroll"
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="heading-tertiary feature-title">
                {feature.title}
              </h3>
              <p className="text-base feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;