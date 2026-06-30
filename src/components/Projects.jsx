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
      metric: "80%",
      metricLabel: "Cloud Cost Reduction",
      impact: "Re-architected a hybrid vector search and RAG data parsing pipeline, dropping cloud infrastructure overhead by 80% and halving feature delivery times.",
      category: "cloud-ai",
      tags: ["RAG Architecture", "AWS OpenSearch", "Vector Search", "Python", "Cloud Cost Optimization"],
      details: "To address high latency and ballooning cloud costs, I led the re-engineering of Lanzcape's data parsing ingestion engine and search pipeline. By moving to AWS OpenSearch Serverless and implementing intelligent vector caching layers, we compressed document indexing times and radically optimized instance resource utilization."
    },
    {
      id: 2,
      title: "Okada/Tricycle Insurance Digital Expansion",
      focus: "Digital Marketing & Revenue Growth",
      metric: "1k+",
      metricLabel: "Active User Base",
      impact: "Spearheaded the inbound and digital operational strategy to expand market penetration for Goxi's commercial microinsurance product, integrating targeted influencer pipelines, CRM analytics, and digital agent recruitment.",
      category: "growth-marketing",
      tags: ["Inbound Strategy", "CRM Integrations", "SEO", "Growth Marketing", "Agent Network"],
      details: "Designed a multi-channel operational campaign targeted at commercial tricycle operators in Lagos. We set up high-converting landing pages optimized for search, launched custom CRM leads routing pipelines, and built a dashboard to track influencer conversions and digital agent sign-ups, boosting monthly recurring revenue."
    },
    {
      id: 3,
      title: "Quonote Digital Brand & Web Architecture",
      focus: "IT Management & Inbound Strategy",
      metric: "10x",
      metricLabel: "Lead Gen Routing",
      impact: "Managed the end-to-end development, brand standard creation, and technical SEO deployment for an AI consulting and IT firm, aligning the web presence directly with inbound lead-generation goals.",
      category: "growth-marketing",
      tags: ["IT Leadership", "Brand Lifecycle", "Technical SEO", "Lead Gen Pipelines"],
      details: "Established the full brand identity system and digital architecture for Quonote Digital. Set up robust, highly stable hosting environments, deployed a lightning-fast marketing front-end with structured meta schemas for technical SEO, and automated lead capture routing to scale outbound consultative sales."
    },
    {
      id: 4,
      title: "InsurBridge AI Platform",
      focus: "Full-Stack Dev & Insurtech Strategy",
      metric: "1st",
      metricLabel: "Hackathon Prototype",
      impact: "Designed and submitted a comprehensive multi-account insurtech platform aimed at modernizing technical insurance distribution.",
      category: "engineering",
      tags: ["React.js", "API Integrations", "Insurtech", "System Architecture"],
      details: "Built as a flagship hackathon prototype, InsurBridge AI leverages conversational AI engines to guide retail prospects through complex insurance policies, automatically mapping answers to carrier APIs to return instant quotes and structured claims filing portals."
    },
    {
      id: 5,
      title: "Enterprise Resource Tracker",
      focus: "Custom Engineering & Asset Management",
      metric: "Real-Time",
      metricLabel: "Location Tracking",
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
              style={activeFilter === cat.id ? {background: 'var(--accent-primary)', color: 'white', borderColor: 'transparent'} : {}}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-panel"
              onClick={() => setSelectedProject(project)}
            >
              <div style={{ flex: 1 }}>
                <span className="project-focus">{project.focus}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-impact">{project.impact}</p>
                <div className="skills-chips-wrapper" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="skill-chip">{tag}</span>
                  ))}
                  {project.tags.length > 3 && <span className="skill-chip">+{project.tags.length - 3}</span>}
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', paddingLeft: project.id === 1 ? '2rem' : '0' }}>
                <div style={{ marginBottom: project.id === 1 ? '0' : '1.5rem' }}>
                  <span className="project-metric gradient-text">{project.metric}</span>
                  <span className="project-metric-label">{project.metricLabel}</span>
                </div>
                <span className="learn-more-link" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
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
              <span className="modal-focus" style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>{selectedProject.focus}</span>
              <h3 className="modal-title" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{selectedProject.title}</h3>
              
              <div className="modal-section" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Core Impact</h4>
                <p className="modal-impact-text" style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1rem', fontSize: '1.05rem' }}>{selectedProject.impact}</p>
              </div>

              <div className="modal-section" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Project Scope & Implementation</h4>
                <p className="modal-details-text" style={{ color: 'var(--text-secondary)' }}>{selectedProject.details}</p>
              </div>

              <div className="modal-section">
                <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Technologies & Competencies</h4>
                <div className="skills-chips-wrapper">
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
