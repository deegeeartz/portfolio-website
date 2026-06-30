import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import References from './components/References';
import ContactFooter from './components/ContactFooter';

function App() {
  // Theme state: dark mode default, persisted in local storage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    // Apply theme attribute to root html tag
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Reveal-on-scroll animation observer
  useEffect(() => {
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, no need to observe again
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.15, // trigger when 15% of the element is visible
      rootMargin: "0px 0px -50px 0px" // trigger slightly before entering viewport
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Isah Dickson Godstime - Senior IT Professional & AI Solutions Architect</title>
        <meta name="description" content="Portfolio of Isah Dickson Godstime: Senior IT Professional, AI Solutions Architect, and Technical Orchestrator specializing in cloud infrastructures and digital transformation." />
        <meta name="keywords" content="Isah Dickson Godstime, IT Management, AI Architect, Cloud Infrastructure, Tech Lead, Nigeria, RAG Pipelines" />
        <meta property="og:title" content="Isah Dickson Godstime - Senior IT Professional" />
        <meta property="og:description" content="Senior IT Professional and Technical Orchestrator specializing in cloud systems and AI solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TechStack />
        <ExperienceTimeline />
        <Projects />
        <EducationCertifications />
        <References />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
