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
      name: "John Doe",
      title: "CEO at Enterprise Tech",
      linkedinUrl: "https://linkedin.com/in/johndoe",
      review: "Isah is an exceptional technical leader. His ability to bridge the gap between business requirements and complex cloud architecture is unmatched. He transformed our entire data pipeline, reducing costs significantly while improving performance."
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "VP of Engineering at Quonote Digital",
      linkedinUrl: "https://linkedin.com/in/janesmith",
      review: "Working with Isah was a game-changer for our team. He brings a strategic mindset to every project, ensuring that our AI integrations were not only cutting-edge but also highly scalable and secure. Highly recommended."
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Director of Operations at Goxi Microinsurance",
      linkedinUrl: "https://linkedin.com/in/michaeljohnson",
      review: "Dickson led our digital transformation initiative flawlessly. His expertise in both IT management and inbound growth strategy helped us scale our user base while maintaining robust system stability."
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
            <div key={ref.id} className="reference-card glass-panel">
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
