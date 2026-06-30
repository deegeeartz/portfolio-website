import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "Project Implementation Specialist & AI Solutions Architect",
      company: "Lanzcape",
      location: "Remote, Belgium",
      period: "Nov 2025 – Present",
      isActive: true,
      achievements: ["Cloud Infrastructure Setup", "Hybrid RAG AI Bot deployed", "70% Cost Reduction"],
      description: "Designing and deploying secure cloud infrastructure and data ingestion pipelines on AWS. Built an AI advisory bot using Perplexity's LLM, GPT, and Hybrid RAG frameworks, resolving critical bottlenecks and reducing infrastructure costs by 70%."
    },
    {
      role: "IT & Digital Transformation Executive",
      company: "Goxi Microinsurance",
      location: "Lagos, Nigeria",
      period: "Mar 2025 – Present",
      isActive: true,
      achievements: ["1,000+ User Base", "25% Faster Onboarding", "NAICOM Compliance"],
      description: "Managing core infrastructure stability for enterprise digital insurance platforms (99.5% uptime). Leading technical rollouts for automated enrollment and payment APIs, ensuring strict NAICOM and NDPA compliance."
    },
    {
      role: "Head of Development",
      company: "ASMB OOD (BespokeAudits)",
      location: "Remote, Morocco",
      period: "Nov 2023 – Present",
      isActive: true,
      achievements: ["40% Faster Delivery", "95% Client Retention", "Remote Team Lead"],
      description: "Leading a 5-person engineering team to build a scalable hospitality auditing solution. Translating business objectives into Agile roadmaps and overseeing third-party API configurations."
    },
    {
      role: "Founder & Solutions Provider",
      company: "Quonote Enterprise",
      location: "Lagos, Nigeria",
      period: "Jul 2022 – Present",
      isActive: true,
      achievements: ["End-to-End Consulting", "Brand Lifecycle Management", "AI Tools Deployment"],
      description: "Directing tech strategy and providing end-to-end consulting for enterprise clients. Delivering scalable software infrastructure, database configurations, and creating high-impact visual assets."
    },
    {
      role: "ICT Support & Systems Executive",
      company: "The Omar Group",
      location: "Lagos, Nigeria",
      period: "Aug 2024 – Mar 2025",
      isActive: false,
      achievements: ["↓25% Procurement Costs", "Location API Integration"],
      description: "Spearheaded the digitization of operational content and engineered secure, location-restricted local networks. Optimized hardware lifecycles and slashed overall procurement costs by 25%."
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
