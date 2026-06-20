import React from 'react';
import { Briefcase, TrendingUp, Brain, Cloud, Code } from 'lucide-react';

const TechStack = () => {
  const stackDomains = [
    {
      title: "IT Management & Leadership",
      icon: <Briefcase className="domain-icon" size={24} />,
      color: "accent-primary",
      skills: [
        "Technology Budgeting",
        "Vendor Management & Negotiation",
        "Cross-Functional Team Leadership",
        "Disaster Recovery Planning",
        "Resource Allocation",
        "ITIL v4 Service Governance",
        "Agile Sprint Cadence"
      ]
    },
    {
      title: "Digital Marketing & Inbound",
      icon: <TrendingUp className="domain-icon" size={24} />,
      color: "accent-secondary",
      skills: [
        "Search Engine Optimization (SEO)",
        "Inbound Lead Gen Pipelines",
        "Data-Driven Digital Campaigns",
        "Influencer Marketing Strategy",
        "Brand Standard Lifecycle",
        "CRM Integrations"
      ]
    },
    {
      title: "AI & Data Engineering",
      icon: <Brain className="domain-icon" size={24} />,
      color: "accent-tertiary",
      skills: [
        "RAG Architecture",
        "LLM Orchestration (GPT-4o, Perplexity)",
        "Prompt Engineering",
        "ETL Pipelines (Pandas)",
        "Power BI Reporting",
        "Advanced Data Visualization"
      ]
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: <Cloud className="domain-icon" size={24} />,
      color: "accent-primary",
      skills: [
        "AWS (EC2, S3, Lambda, OpenSearch)",
        "Google Cloud Platform (GCP)",
        "Firebase Backend",
        "Docker Containerization",
        "CI/CD Automated Pipelines",
        "Linux Server Administration"
      ]
    },
    {
      title: "Software Development",
      icon: <Code className="domain-icon" size={24} />,
      color: "accent-secondary",
      skills: [
        "Python Scripting",
        "JavaScript",
        "TypeScript",
        "React.js Development",
        "Tailwind CSS Layouts",
        "REST & GraphQL API Integration"
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
              className={`expertise-card glass-panel border-${domain.color}`}
            >
              <div className="card-header-wrapper">
                <div className={`icon-container bg-${domain.color}`}>
                  {domain.icon}
                </div>
                <h3 className="expertise-card-title">{domain.title}</h3>
              </div>
              <div className="skills-chips-wrapper">
                {domain.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {skill}
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
