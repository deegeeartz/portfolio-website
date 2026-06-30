import React from 'react';
import { Briefcase, TrendingUp, Brain, Cloud, Code } from 'lucide-react';

const TechStack = () => {
  const stackDomains = [
    {
      title: "IT Management & Leadership",
      icon: <Briefcase className="domain-icon" size={24} />,
      skills: [
        { name: "Technology Budgeting", level: "expert" },
        { name: "Vendor Management", level: "advanced" },
        { name: "Team Leadership", level: "expert" },
        { name: "Disaster Recovery", level: "advanced" },
        { name: "ITIL v4 Governance", level: "expert" },
        { name: "Agile Sprints", level: "advanced" }
      ]
    },
    {
      title: "Digital Marketing & Design",
      icon: <TrendingUp className="domain-icon" size={24} />,
      skills: [
        { name: "SEO Optimization", level: "expert" },
        { name: "Inbound Pipelines", level: "expert" },
        { name: "Digital Campaigns", level: "advanced" },
        { name: "CRM Integrations", level: "expert" },
        { name: "Adobe Illustrator", level: "advanced" }
      ]
    },
    {
      title: "AI & Data Engineering",
      icon: <Brain className="domain-icon" size={24} />,
      skills: [
        { name: "RAG Architecture", level: "expert" },
        { name: "LLM Orchestration", level: "expert" },
        { name: "Prompt Engineering", level: "advanced" },
        { name: "ETL Pipelines", level: "expert" },
        { name: "Power BI", level: "advanced" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="domain-icon" size={24} />,
      skills: [
        { name: "AWS Services", level: "expert" },
        { name: "GCP", level: "advanced" },
        { name: "Docker", level: "advanced" },
        { name: "CI/CD Pipelines", level: "advanced" },
        { name: "Linux Server Admin", level: "expert" }
      ]
    },
    {
      title: "Software Development",
      icon: <Code className="domain-icon" size={24} />,
      skills: [
        { name: "Python", level: "expert" },
        { name: "JavaScript/React.js", level: "advanced" },
        { name: "SQL/PostgreSQL", level: "advanced" },
        { name: "REST/GraphQL APIs", level: "expert" }
      ]
    }
  ];

  return (
    <section id="expertise" className="expertise-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Core Expertise & Arsenal</h2>
          <p>
            Bridging operational efficiency, artificial intelligence execution, and enterprise growth engines.
          </p>
        </div>

        <div className="expertise-grid">
          {stackDomains.map((domain, index) => (
            <div 
              key={index} 
              className="expertise-card glass-panel"
            >
              <div className="card-header-wrapper">
                <div className="icon-container">
                  {domain.icon}
                </div>
                <h3 className="expertise-card-title">{domain.title}</h3>
              </div>
              <div className="skills-chips-wrapper">
                {domain.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    <span 
                      style={{
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        display: 'inline-block',
                        marginRight: '6px',
                        backgroundColor: skill.level === 'expert' ? 'var(--accent-secondary)' : 'var(--accent-primary)'
                      }}
                      title={skill.level === 'expert' ? 'Expert' : 'Advanced'}
                    ></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
