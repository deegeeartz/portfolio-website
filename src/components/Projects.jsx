import React, { useState } from 'react';
import { LayoutGrid, Cloud, TrendingUp, Cpu, ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work', icon: <LayoutGrid size={16} /> },
    { id: 'cloud-ai', name: 'Cloud & AI', icon: <Cloud size={16} /> },
    { id: 'growth-marketing', name: 'Growth & Inbound', icon: <TrendingUp size={16} /> },
    { id: 'engineering', name: 'Engineering', icon: <Cpu size={16} /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Lanzcape AI Infrastructure & Search Optimization",
      focus: "Cloud Engineering & Cost Optimization",
      impact: "Re-architected a hybrid vector search and RAG data parsing pipeline, dropping cloud infrastructure overhead by 80% and halving feature delivery times.",
      category: "cloud-ai",
      tags: ["RAG Architecture", "AWS OpenSearch", "Vector Search", "Python", "Cloud Cost Optimization"],
      details: "To address high latency and ballooning cloud costs, I led the re-engineering of Lanzcape's data parsing ingestion engine and search pipeline. By moving to AWS OpenSearch Serverless and implementing intelligent vector caching layers, we compressed document indexing times and radically optimized instance resource utilization."
    },
    {
      id: 2,
      title: "Okada/Tricycle Insurance Digital Expansion",
      focus: "Digital Marketing, SEO & Revenue Growth",
      impact: "Spearheaded the inbound and digital operational strategy to expand market penetration for Goxi's commercial microinsurance product, integrating targeted influencer pipelines, CRM analytics, and digital agent recruitment.",
      category: "growth-marketing",
      tags: ["Inbound Strategy", "CRM Integrations", "SEO", "Growth Marketing", "Agent Network"],
      details: "Designed a multi-channel operational campaign targeted at commercial tricycle operators in Lagos. We set up high-converting landing pages optimized for search, launched custom CRM leads routing pipelines, and built a dashboard to track influencer conversions and digital agent sign-ups, boosting monthly recurring revenue."
    },
    {
      id: 3,
      title: "Quonote Digital Brand & Web Architecture",
      focus: "IT Management & Inbound Strategy",
      impact: "Managed the end-to-end development, brand standard creation, and technical SEO deployment for an AI consulting and IT firm, aligning the web presence directly with inbound lead-generation goals.",
      category: "growth-marketing",
      tags: ["IT Leadership", "Brand Lifecycle", "Technical SEO", "Lead Gen Pipelines"],
      details: "Established the full brand identity system and digital architecture for Quonote Digital. Set up robust, highly stable hosting environments, deployed a lightning-fast marketing front-end with structured meta schemas for technical SEO, and automated lead capture routing to scale outbound consultative sales."
    },
    {
      id: 4,
      title: "InsurBridge AI (Heirs Insurance Hackathon)",
      focus: "Full-Stack Dev & Insurtech Strategy",
      impact: "Designed and submitted a comprehensive multi-account insurtech platform aimed at modernizing technical insurance distribution.",
      category: "engineering",
      tags: ["React.js", "API Integrations", "Insurtech", "System Architecture"],
      details: "Built as a flagship hackathon prototype, InsurBridge AI leverages conversational AI engines to guide retail prospects through complex insurance policies, automatically mapping answers to carrier APIs to return instant quotes and structured claims filing portals."
    },
    {
      id: 5,
      title: "Enterprise Resource Tracker",
      focus: "Custom Engineering & Asset Management",
      impact: "Built and deployed a custom, location-aware mobile web application to solve proprietary asset management challenges across high-traffic environments for The Omar Group.",
      category: "engineering",
      tags: ["React.js", "Node.js", "Location APIs", "Asset Management"],
      details: "Designed a lightweight, field-tested mobile tracking app that logs real-time locations and maintenance statuses of remote enterprise hardware equipment. Slashed asset loss rates and optimized on-site technician scheduling loops."
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Featured Proof of Work</h2>
          <p>
            Demonstrating tangible technical achievements in cloud cost reduction, revenue operations, and software delivery.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="filter-controls-wrapper">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'filter-btn-active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-panel"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-header">
                <span className="project-focus">{project.focus}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-card-body">
                <p className="project-impact">{project.impact}</p>
              </div>
              <div className="project-card-footer">
                <span className="learn-more-link">
                  View Architecture Details <ExternalLink size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            
            <div className="modal-body-content">
              <span className="modal-focus">{selectedProject.focus}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              
              <div className="modal-section">
                <h4>Core Impact</h4>
                <p className="modal-impact-text">{selectedProject.impact}</p>
              </div>

              <div className="modal-section">
                <h4>Project Scope & Implementation</h4>
                <p className="modal-details-text">{selectedProject.details}</p>
              </div>

              <div className="modal-section">
                <h4>Technologies & Competencies</h4>
                <div className="modal-tags-wrapper">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="skill-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
