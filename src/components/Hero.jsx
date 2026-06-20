import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Server, Cpu, BarChart } from 'lucide-react';

const Hero = () => {
  const titles = [
    "Chief Technology Officer",
    "AI Solutions Architect",
    "IT Management & Digital Strategist"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIndex];

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    alert("Resume download initialized!\n(In a live production deployment, this links to your PDF resume document.)");
  };

  return (
    <section id="hero" className="hero-section">
      <div className="glow-dot glow-dot-1"></div>
      <div className="glow-dot glow-dot-2"></div>
      
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>Available for Enterprise Consultation & Leadership Roles</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="gradient-text">Isah Dickson Godstime</span>
          </h1>
          
          <div className="hero-subtitle-container">
            <span className="hero-subtitle-prefix">I am a </span>
            <span className="hero-subtitle-typed gradient-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>
          
          <p className="hero-description">
            Bridging the gap between high-level business strategy, technical execution, and digital growth. 
            I architect production-grade AI pipelines, deploy highly optimized multi-cloud infrastructure, 
            and lead cross-functional IT and digital marketing teams to scale enterprise revenue and brand visibility.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={handleScrollToProjects}>
              View My Work <ArrowRight size={18} />
            </a>
            <button className="btn btn-secondary" onClick={handleDownloadResume}>
              Download Resume <Download size={18} />
            </button>
          </div>
        </div>

        <div className="hero-graphics">
          <div className="graphics-container animate-float">
            <div className="tech-orbit-circle">
              {/* Central AI Nucleus */}
              <div className="nucleus-glow"></div>
              <div className="nucleus">
                <Cpu size={32} className="nucleus-icon" />
              </div>

              {/* Satellites */}
              <div className="satellite satellite-cloud">
                <Server size={18} />
              </div>
              <div className="satellite satellite-marketing">
                <BarChart size={18} />
              </div>

              {/* Orbiting rings */}
              <div className="orbit-ring orbit-ring-1"></div>
              <div className="orbit-ring orbit-ring-2"></div>
              <div className="orbit-ring orbit-ring-3"></div>
            </div>

            {/* Glowing Tech Info Badges */}
            <div className="info-card info-card-1 glass-panel">
              <span className="info-card-value">80%</span>
              <span className="info-card-label">Cloud Cost Reduction</span>
            </div>
            <div className="info-card info-card-2 glass-panel">
              <span className="info-card-value">1,000+</span>
              <span className="info-card-label">Users Supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
