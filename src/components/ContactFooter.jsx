import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
  const formRef = useRef();

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
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    if (serviceId === 'YOUR_SERVICE_ID') {
      console.warn("EmailJS credentials not found in environment variables. Simulating submission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
          console.error("EmailJS Error:", error.text);
          setIsSubmitting(false);
          alert("Failed to send message. Please check the console or email directly.");
      });
  };

  return (
    <footer id="contact" className="contact-footer-section reveal">
      <div className="container contact-container">
        
        {/* Contact Info Column */}
        <div className="contact-info-panel">
          <h2 className="contact-panel-title">Ready to architect something <span className="gradient-text">exceptional?</span></h2>
          <p className="contact-panel-desc">
            Whether you are looking to architect custom AI pipelines, optimize enterprise cloud infrastructures, 
            or scale operational revenues, feel free to reach out. I am open to global remote leadership consulting and advisory engagements.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-detail-text" style={{display: 'flex', flexDirection: 'column'}}>
                <span className="detail-label" style={{fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Location</span>
                <span className="detail-value" style={{fontWeight: 500}}>Lagos, Nigeria (Open to Global Remote)</span>
              </div>
            </div>

            <a href="mailto:dickson.isah@outlook.com" className="contact-detail-item hover-link">
              <div className="contact-detail-icon">
                <Mail size={18} />
              </div>
              <div className="contact-detail-text" style={{display: 'flex', flexDirection: 'column'}}>
                <span className="detail-label" style={{fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Email Address</span>
                <span className="detail-value" style={{fontWeight: 500}}>dickson.isah@outlook.com</span>
              </div>
            </a>

            <a href="tel:+2348162941439" className="contact-detail-item hover-link">
              <div className="contact-detail-icon">
                <Phone size={18} />
              </div>
              <div className="contact-detail-text" style={{display: 'flex', flexDirection: 'column'}}>
                <span className="detail-label" style={{fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Phone Number</span>
                <span className="detail-value" style={{fontWeight: 500}}>+234 816 294 1439</span>
              </div>
            </a>
          </div>

          {/* Socials Connection */}
          <div className="social-links-container">
            <h3 className="social-title">Connect Professionally</h3>
            <div className="social-icons">
              <a 
                href="https://www.linkedin.com/in/dickson-isah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/deegeeartz" 
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
              <CheckCircle size={56} className="success-icon animate-pulse-fast" style={{color: 'var(--accent-secondary)'}} />
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for reaching out, Isah Dickson Godstime. I will review your submission and respond shortly.
              </p>
              <button 
                className="btn btn-primary" 
                onClick={() => setIsSuccess(false)}
                style={{marginTop: '1rem'}}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <h3 className="form-title" style={{marginBottom: '2rem'}}>Send an Inquiry</h3>
              
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
                <label className="form-label" htmlFor="email">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={`form-control ${errors.email ? 'input-error' : ''}`}
                  placeholder="e.g. john@enterprise.com"
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
                  placeholder="Consulting Inquiry"
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
                  placeholder="Tell me about your project or architecture needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn"
                disabled={isSubmitting}
                style={{width: '100%', marginTop: '1rem', padding: '1rem'}}
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <div className="container copyright-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div className="copyright-logo" style={{display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800}}>
            <img src="/profile-thumb.webp" alt="Isah Dickson" style={{width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover'}} loading="lazy" />
            <div style={{display: 'flex'}}>
              <span>ID</span><span className="gradient-text">G</span>
            </div>
          </div>
          <span className="copyright-text">
            &copy; {new Date().getFullYear()} Isah Dickson Godstime. All Rights Reserved. Built with React.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
