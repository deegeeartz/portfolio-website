import React from 'react';
import { GraduationCap, Award, Shield, CheckCircle2 } from 'lucide-react';

const EducationCertifications = () => {
  const degrees = [
    {
      title: "M.Sc. Information Technology & Cybersecurity",
      institution: "Miva Open University",
      status: "In Progress",
      color: "accent-primary"
    },
    {
      title: "B.Sc. Computer Science",
      institution: "Lagos State University (LASU)",
      status: "Completed",
      color: "accent-secondary"
    },
    {
      title: "B.A. English Language and Literature",
      institution: "National Open University of Nigeria (NOUN)",
      status: "Completed",
      color: "accent-tertiary"
    }
  ];

  const certifications = [
    { name: "HubSpot SEO Certification", color: "#ff7a59" },
    { name: "HubSpot Inbound Certification", color: "#ff7a59" },
    { name: "ITIL v4 Foundation", color: "#00558F" },
    { name: "Microsoft IT Support Specialist", color: "#00a4ef" },
    { name: "CompTIA A+", color: "#ff0000" },
    { name: "Google IT Support Professional", color: "#4285F4" }
  ];

  const affiliations = [
    "Nigeria Computer Society (NCS)",
    "Institute of Software Practitioners of Nigeria (ISPON)"
  ];

  return (
    <section id="education" className="education-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Education & Credentials</h2>
          <p>
            Academic background, recognized certifications, and professional memberships.
          </p>
        </div>

        <div className="education-grid">
          {/* Degrees Column */}
          <div className="degrees-column">
            <h3 className="column-title">
              <GraduationCap size={22} className="column-title-icon" style={{color: 'var(--accent-primary)', marginRight: '8px'}} /> 
              Academic Degrees
            </h3>
            <div className="degrees-list">
              {degrees.map((deg, idx) => (
                <div key={idx} className="degree-card glass-panel" style={{ borderLeft: `3px solid var(--${deg.color})` }}>
                  {/* Institution Logo Placeholder */}
                  <div className="image-placeholder institution-logo">
                    {deg.institution.charAt(0)}
                  </div>
                  <div className="degree-info">
                    <h4>{deg.title}</h4>
                    <p>{deg.institution}</p>
                    <span className={`status-badge status-${deg.status.toLowerCase().replace(' ', '-')}`}>
                      {deg.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Affiliations Column */}
          <div className="credentials-column">
            {/* Certifications Block */}
            <div className="credentials-block" style={{ marginBottom: '3rem' }}>
              <h3 className="column-title">
                <Award size={22} className="column-title-icon" style={{color: 'var(--accent-secondary)', marginRight: '8px'}} /> 
                Industry Certifications
              </h3>
              <div className="cert-grid">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="cert-card" style={{ borderLeft: `3px solid ${cert.color}` }}>
                    <CheckCircle2 size={16} style={{ color: cert.color, flexShrink: 0 }} />
                    <span className="cert-name">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations Block */}
            <div className="credentials-block">
              <h3 className="column-title">
                <Shield size={22} className="column-title-icon" style={{color: 'var(--accent-tertiary)', marginRight: '8px'}} /> 
                Professional Affiliations
              </h3>
              <div className="cert-grid">
                {affiliations.map((aff, idx) => (
                  <div key={idx} className="cert-card" style={{ borderLeft: '3px solid var(--text-secondary)' }}>
                    <Shield size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                    <span className="cert-name">{aff}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
