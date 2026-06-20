import React from 'react';
import { GraduationCap, Award, Shield, FileCheck, CheckCircle2 } from 'lucide-react';

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
    "HubSpot SEO Certification",
    "HubSpot Inbound Certification",
    "ITIL v4 Foundation Frameworks",
    "Microsoft IT Support Specialist",
    "CompTIA A+",
    "Google IT Support Professional"
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
            Academic background, recognized certifications, and professional computer science memberships.
          </p>
        </div>

        <div className="education-grid">
          {/* Degrees Column */}
          <div className="degrees-column">
            <h3 className="column-title">
              <GraduationCap size={22} className="column-title-icon" /> Academic Degrees
            </h3>
            <div className="degrees-list">
              {degrees.map((deg, idx) => (
                <div key={idx} className={`degree-card glass-panel border-${deg.color}`}>
                  <div className="degree-header">
                    <h4 className="degree-title">{deg.title}</h4>
                    <span className={`status-badge status-${deg.status.toLowerCase().replace(' ', '-')}`}>
                      {deg.status}
                    </span>
                  </div>
                  <p className="degree-institution">{deg.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Affiliations Column */}
          <div className="credentials-column">
            {/* Certifications Card */}
            <div className="credentials-block">
              <h3 className="column-title">
                <Award size={22} className="column-title-icon" /> Industry Certifications
              </h3>
              <div className="certifications-grid glass-panel">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="cert-item">
                    <CheckCircle2 size={16} className="cert-icon" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations Block */}
            <div className="credentials-block">
              <h3 className="column-title">
                <Shield size={22} className="column-title-icon" /> Professional Affiliations
              </h3>
              <div className="affiliations-list">
                {affiliations.map((aff, idx) => (
                  <div key={idx} className="affiliation-card glass-panel">
                    <FileCheck size={18} className="affiliation-icon" />
                    <span className="affiliation-name">{aff}</span>
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
