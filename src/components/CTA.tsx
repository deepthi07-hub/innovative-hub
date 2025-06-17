import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
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
      { threshold: 0.3 }
    );

    const section = sectionRef.current;
    if (section) {
      const animatedElements = section.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta-content">
          <h2 className="heading-secondary cta-title animate-on-scroll">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-large cta-description animate-on-scroll">
            Let's discuss how we can help you innovate, scale, and succeed 
            in today's competitive digital landscape.
          </p>
          <div className="hero-buttons animate-on-scroll">
            <a href="mailto:hello@innovatehub.com" className="btn btn-primary btn-large">
              Start Your Project
              <ArrowRight size={20} />
            </a>
            <a href="tel:+1234567890" className="btn btn-hero-secondary btn-large">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;