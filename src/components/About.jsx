import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section reveal">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-header" style={{textAlign: 'left', marginBottom: '2rem'}}>
              <h2>Beyond the Code</h2>
              <p style={{margin: '0', fontSize: '1.15rem'}}>Architecting systems that drive business value.</p>
            </div>
            
            <p className="about-text" style={{fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7}}>
              I am a Technical Orchestrator with a proven track record of bridging the gap between C-suite objectives and complex technical implementations. Over the past 5+ years, I've transitioned from hands-on development to strategic IT management, always keeping a sharp focus on operational efficiency and bottom-line protection.
            </p>
            <p className="about-text" style={{fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7}}>
              Whether I'm deploying custom Hybrid RAG pipelines that eliminate operational bottlenecks, or implementing strict regulatory frameworks (NAICOM, NDPA, GDPR) for digital insurance platforms, my goal remains the same: building resilient, high-availability ecosystems that empower teams and scale revenues.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <Target size={24} style={{color: 'var(--accent-primary)', marginBottom: '0.5rem'}} />
                <h4 style={{marginBottom: '0.25rem'}}>Strategic Alignment</h4>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Translating business KPIs into technical roadmaps.</p>
              </div>
              <div className="highlight-item">
                <Users size={24} style={{color: 'var(--accent-secondary)', marginBottom: '0.5rem'}} />
                <h4 style={{marginBottom: '0.25rem'}}>Team Leadership</h4>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Guiding distributed engineering & auditing teams.</p>
              </div>
              <div className="highlight-item">
                <Zap size={24} style={{color: 'var(--accent-tertiary)', marginBottom: '0.5rem'}} />
                <h4 style={{marginBottom: '0.25rem'}}>Innovation Focus</h4>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Leveraging AI & automation for cost reduction.</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual glass-panel" style={{padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)'}}>
            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
              "He thinks <i className="gradient-text">with</i> the client and suggests even better solutions than the client thought of."
            </h3>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem'}}>
              <div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem'}}>
                M
              </div>
              <div>
                <h4 style={{margin: 0}}>Michel Ehrlich</h4>
                <span style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>Founder & Operator | Public Affairs & Policy Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
