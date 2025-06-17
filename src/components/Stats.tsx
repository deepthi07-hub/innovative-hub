import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([
    { number: 0, target: 500, suffix: '+', label: 'Projects Delivered' },
    { number: 0, target: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 0, target: 50, suffix: '+', label: 'Team Members' },
    { number: 0, target: 24, suffix: '/7', label: 'Support Available' }
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    animatedStats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(Math.floor(increment * currentStep), stat.target);
        
        setAnimatedStats(prev => 
          prev.map((s, i) => 
            i === index ? { ...s, number: currentValue } : s
          )
        );

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {animatedStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">
                {stat.number}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;