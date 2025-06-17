import { useEffect, useRef } from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  BarChart3 
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Custom Software Development',
      description: 'From web applications to enterprise software, we build scalable, maintainable solutions tailored to your specific business requirements and objectives.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Innovation',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms with cutting-edge features.'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & DevOps',
      description: 'Modernize your infrastructure with cloud-native solutions, automated deployments, and robust DevOps practices for maximum efficiency and reliability.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, machine learning models, and intelligent reporting systems that drive business growth.'
    }
  ];

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="heading-secondary section-title">
            Our Services
          </h2>
          <p className="text-large section-description">
            Comprehensive innovation services designed to transform your business 
            and accelerate your digital transformation journey.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="heading-tertiary service-title">
                {service.title}
              </h3>
              <p className="text-base service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;