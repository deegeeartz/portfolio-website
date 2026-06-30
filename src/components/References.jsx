import React from 'react';
import { Quote } from 'lucide-react';

const Linkedin = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const References = () => {
  const references = [
    {
      id: 1,
      name: "Michel Ehrlich",
      title: "Founder & Operator | Public Affairs & Policy Intelligence",
      linkedinUrl: "https://www.linkedin.com/in/michel-ehrlich", // Optional fallback link
      isSpotlight: true,
      review: "Working with Dickson was one of the best developer experiences I have had. He is extremely competent and up-to-date technically and technologically, he is highly professional in his communications and working style, and - this is important - he thinks *with* the client and sometimes suggests even better solutions or approaches than the client thought of. He delivers high-quality work on time and on budget. I recommend Dickson highly - work with him and you will not regret it."
    }
  ];

  return (
    <section id="references" className="references-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Endorsements</h2>
          <p>
            Insights and reviews from colleagues, clients, and industry leaders I've had the pleasure of working with.
          </p>
        </div>

        <div className="references-grid">
          {references.map((ref) => (
            <div key={ref.id} className={`reference-card glass-panel ${ref.isSpotlight ? 'spotlight-card' : ''}`} style={ref.isSpotlight ? { border: '1px solid var(--accent-primary)', boxShadow: '0 10px 30px -10px var(--glow-color)' } : {}}>
              {ref.isSpotlight && (
                <div className="hero-badge" style={{marginBottom: '1.5rem', alignSelf: 'flex-start', fontSize: '0.75rem', padding: '0.4rem 0.8rem'}}>
                  <span className="badge-pulse"></span>
                  <span>Featured Client Spotlight</span>
                </div>
              )}
              <Quote size={32} className="quote-icon" />
              <p className="reference-text">"{ref.review}"</p>
              
              <div className="reviewer-info">
                {/* Reviewer Photo Placeholder */}
                <div className="image-placeholder reviewer-photo">
                  {ref.name.charAt(0)}
                </div>
                
                <div className="reviewer-details">
                  <h4 className="reviewer-name">{ref.name}</h4>
                  <span className="reviewer-title">{ref.title}</span>
                </div>
                
                <a 
                  href={ref.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="linkedin-link"
                  aria-label={`${ref.name}'s LinkedIn Profile`}
                  title="Verify on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
