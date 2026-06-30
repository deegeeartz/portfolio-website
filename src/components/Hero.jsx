import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Briefcase, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  const titles = [
    "Chief Technology Officer",
    "Senior IT Professional",
    "Technical Orchestrator",
    "AI Solutions Architect",
    "IT Management & Digital Strategist",
    "Founder & Solutions Provider"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section id="hero" className="hero-section">
      <div className="dot-grid-overlay"></div>
      <div className="glow-dot glow-dot-1"></div>
      <div className="glow-dot glow-dot-2"></div>
      
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>Available for Enterprise Consultation & Leadership</span>
          </div>
          
          <h1 className="hero-title reveal active">
            Hi, I'm <br />
            <span className="gradient-text">Isah Dickson Godstime</span>
          </h1>
          
          <div className="hero-subtitle-container reveal active" style={{transitionDelay: '0.1s'}}>
            <span className="hero-subtitle-prefix">I am a </span>
            <span className="hero-subtitle-typed gradient-text-alt" style={{marginLeft: '8px'}}>{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>
          
          <p className="hero-description reveal active" style={{transitionDelay: '0.2s'}}>
            Senior IT Professional and Technical Orchestrator with 5+ years of experience building secure, high-availability cloud systems, API frameworks, and enterprise digital insurance platforms. Expert at collaborating with executives to align technical roadmaps with core business growth and deploying custom AI (Hybrid RAG) pipelines.
          </p>
          
          <div className="hero-actions reveal active" style={{transitionDelay: '0.3s'}}>
            <a href="#projects" className="btn btn-primary" onClick={handleScrollToProjects}>
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/Isah_Dickson_CV.pdf" download="Isah_Dickson_CV.pdf" className="btn btn-secondary">
              Download Resume <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visuals reveal active" style={{transitionDelay: '0.4s'}}>
          <div className="headshot-frame animate-float">
            <img 
              src="/profile-pic.webp" 
              alt="Isah Dickson Godstime - Professional Headshot" 
              style={{width: '100%', height: '100%', borderRadius: '18px', objectFit: 'cover'}}
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
          </div>
          
          <div className="metric-float metric-float-1 glass-panel">
            <span className="metric-val">80%</span>
            <span className="metric-label">Cloud Cost Reduction</span>
          </div>
          
          <div className="metric-float metric-float-2 glass-panel">
            <span className="metric-val">1,000+</span>
            <span className="metric-label">Users Supported</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
