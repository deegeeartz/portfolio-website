import React, { useEffect, useState, useRef } from 'react';

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '10+', label: 'Enterprise Systems Built' },
    { value: '80%', label: 'Cloud Cost Reduction' },
    { value: '99.9%', label: 'Infrastructure Uptime' }
  ];

  return (
    <div ref={sectionRef} className="stats-bar-wrapper">
      <div className="container">
        <div className={`stats-grid ${isVisible ? 'animate-in' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" style={{ transitionDelay: `${index * 0.15}s` }}>
              <h3 className="stat-value gradient-text">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
