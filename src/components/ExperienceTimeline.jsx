import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "Project Implementation Specialist & AI Solutions Architect",
      company: "Lanzcape",
      location: "Remote, Belgium",
      period: "Present",
      isActive: true,
      achievements: ["Cloud Infrastructure Setup", "RAG Pipelines deployed"],
      description: "Architecting international cloud infrastructures and designing RAG pipelines."
    },
    {
      role: "Chief Technology Officer",
      company: "Quonote Digital",
      location: "Lagos, Nigeria",
      period: "Recent",
      isActive: false,
      achievements: ["AI Consulting", "Tech Budget Management"],
      description: "Managing technical budgets and directing resource allocation. Overseeing brand standard guides, website performance reviews, and deploying AI consulting software services for corporate clients."
    },
    {
      role: "Digital Sales & IT Transformation Executive",
      company: "Goxi Microinsurance",
      location: "Lagos, Nigeria",
      period: "Previous",
      isActive: false,
      achievements: ["1,000+ User Base", "Influencer Strategy Setup"],
      description: "Leading a multi-phase digital transformation and revenue increase project. Architecting influencer marketing strategies, expanding digital agent recruitment, and maintaining highly stable technology solutions for a 1,000+ user base."
    },
    {
      role: "Technical Lead",
      company: "ASMB OOD",
      location: "Remote, Morocco",
      period: "Previous",
      isActive: false,
      achievements: ["Scalable Auditing Architecture", "API Integrations"],
      description: "Directing a 5-person remote engineering team to build scalable auditing architectures and manage API integrations within strict tech budget guidelines."
    },
    {
      role: "ICT Support & Systems Engineer",
      company: "The Omar Group",
      location: "Lagos, Nigeria",
      period: "Previous",
      isActive: false,
      achievements: ["↓25% Procurement Costs", "↓30% Network Downtime"],
      description: "Supervised multi-location network stability, managing vendor relationships for equipment installations, reducing procurement costs by 25%, and slashing network downtime by 30%."
    },
    {
      role: "Tech Sales & IT Support Executive",
      company: "All Access Global Enterprise",
      location: "Lagos, Nigeria",
      period: "Previous",
      isActive: false,
      achievements: ["100+ Clients Annually", "Workstation Setup"],
      description: "Providing hands-on workstation setup, tech advisory, and hardware solutions to 100+ business clients annually."
    }
  ];

  return (
    <section id="experience" className="experience-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Professional Journey</h2>
          <p>
            A timeline of leading cross-functional teams, architecting cloud solutions, and directing enterprise digital systems.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'} ${exp.isActive ? 'active' : ''}`}
              >
                <div className="timeline-node"></div>
                
                <div className="timeline-content-wrapper glass-panel">
                  <div className="timeline-header">
                    {/* Company Logo Placeholder */}
                    <div className="image-placeholder company-logo">
                      {exp.company.charAt(0)}
                    </div>
                    
                    <div>
                      <h3 className="timeline-role">
                        {exp.role} 
                        {exp.isActive && <span style={{marginLeft: '8px', fontSize: '0.65rem', background: 'var(--accent-secondary)', color: 'white', padding: '2px 6px', borderRadius: '4px', verticalAlign: 'middle'}}>CURRENT</span>}
                      </h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                    </div>
                  </div>

                  <div className="timeline-meta">
                    <span className="timeline-period">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="timeline-location">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                  
                  <p className="timeline-desc">{exp.description}</p>
                  
                  <div className="achievement-tags">
                    {exp.achievements.map((ach, aIdx) => (
                      <span key={aIdx} className="achievement-tag">
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
