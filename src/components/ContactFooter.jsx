import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// Custom LinkedIn SVG Icon component to avoid environment dependency export issues
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

// Custom GitHub SVG Icon component to avoid environment dependency export issues
const Github = ({ size = 20, className }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message content is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <footer id="contact" className="contact-footer-section reveal">
      <div className="container contact-container">
        
        {/* Contact Info Column */}
        <div className="contact-info-panel">
          <h2 className="contact-panel-title">Let's Connect</h2>
          <p className="contact-panel-desc">
            Whether you are looking to architect custom AI pipelines, optimize enterprise cloud infrastructures, 
            or scale operational revenues, feel free to reach out. I am open to global remote leadership consulting and advisory engagements.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-detail-text">
                <span className="detail-label">Location</span>
                <span className="detail-value">Lagos, Nigeria (Open to Global Remote)</span>
              </div>
            </div>

            <a href="mailto:dickson.isah@outlook.com" className="contact-detail-item hover-link">
              <div className="contact-detail-icon">
                <Mail size={18} />
              </div>
              <div className="contact-detail-text">
                <span className="detail-label">Email Address</span>
                <span className="detail-value">dickson.isah@outlook.com</span>
              </div>
            </a>

            <a href="tel:+2348162941439" className="contact-detail-item hover-link">
              <div className="contact-detail-icon">
                <Phone size={18} />
              </div>
              <div className="contact-detail-text">
                <span className="detail-label">Phone Number</span>
                <span className="detail-value">+234 816 294 1439</span>
              </div>
            </a>
          </div>

          {/* Socials Connection */}
          <div className="social-links-container">
            <h3 className="social-title">Follow & Connect</h3>
            <div className="social-icons">
              <a 
                href="https://www.linkedin.com/in/isah-dickson-godstime-9562bb2b4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Quonote-Digital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn github-btn"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form-panel glass-panel">
          {isSuccess ? (
            <div className="form-success-state">
              <CheckCircle size={56} className="success-icon animate-pulse-fast" />
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for reaching out, Isah Dickson Godstime. I will review your submission and respond shortly.
              </p>
              <button 
                className="btn btn-secondary" 
                onClick={() => setIsSuccess(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Send a Message</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={`form-control ${errors.name ? 'input-error' : ''}`}
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={`form-control ${errors.email ? 'input-error' : ''}`}
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className={`form-control ${errors.subject ? 'input-error' : ''}`}
                  placeholder="Inquiry Topic"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className={`form-control ${errors.message ? 'input-error' : ''}`}
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <div className="container copyright-container">
          <span className="copyright-logo">ID<span className="gradient-text">G</span></span>
          <span className="copyright-text">
            &copy; {new Date().getFullYear()} Isah Dickson Godstime. All Rights Reserved. Built with React & Vanilla CSS.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
