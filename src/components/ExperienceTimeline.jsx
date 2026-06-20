import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "Project Implementation Specialist & AI Solutions Architect",
      company: "Lanzcape",
      location: "Remote, Belgium",
      period: "Present",
      description: "Architecting international cloud infrastructures and designing RAG pipelines."
    },
    {
      role: "Chief Technology Officer",
      company: "Quonote Digital",
      location: "Lagos, Nigeria",
      period: "Recent",
      description: "Managing technical budgets and directing resource allocation. Overseeing brand standard guides, website performance reviews, and deploying AI consulting software services for corporate clients."
    },
    {
      role: "Digital Sales & IT Transformation Executive",
      company: "Goxi Microinsurance",
      location: "Lagos, Nigeria",
      period: "Previous",
      description: "Leading a multi-phase digital transformation and revenue increase project. Architecting influencer marketing strategies, expanding digital agent recruitment, and maintaining highly stable technology solutions for a 1,000+ user base."
    },
    {
      role: "Technical Lead",
      company: "ASMB OOD",
      location: "Remote, Morocco",
      period: "Previous",
      description: "Directing a 5-person remote engineering team to build scalable auditing architectures and manage API integrations within strict tech budget guidelines."
    },
    {
      role: "ICT Support & Systems Engineer",
      company: "The Omar Group",
      location: "Lagos, Nigeria",
      period: "Previous",
      description: "Supervised multi-location network stability, managing vendor relationships for equipment installations, reducing procurement costs by 25%, and slashing network downtime by 30%."
    },
    {
      role: "Tech Sales & IT Support Executive",
      company: "All Access Global Enterprise",
      location: "Lagos, Nigeria",
      period: "Previous",
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
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
              >
                {/* Node on the center line */}
                <div className="timeline-node">
                  <Briefcase size={16} className="node-icon" />
                </div>
                
                {/* Content Card */}
                <div className="timeline-content-wrapper glass-panel">
                  <div className="timeline-meta">
                    <span className="timeline-period">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="timeline-location">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                  
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company gradient-text">{exp.company}</h4>
                  
                  <p className="timeline-desc">{exp.description}</p>
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
