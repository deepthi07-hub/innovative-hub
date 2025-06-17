// src/pages/Contact.tsx

import React, { useState, FormEvent } from 'react';
import '../styles/App.css'; // Global styles
import './Contact.css'; // Specific styles for Contact page

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill in all fields.');
      setFormStatus('error');
      return;
    }

    // In a real application, you would send this data to a backend server.
    // For this example, we'll simulate an API call.
    try {
      // Simulate API call
      console.log('Form Data Submitted:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // Check for a simulated error (e.g., if email is 'test@error.com')
      if (formData.email === 'test@error.com') {
        throw new Error('Simulated submission error.');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Failed to send your message. Please try again later.');
      setFormStatus('error');
    }
  };

  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <p className="page-intro">
        We'd love to hear from you! Whether you have a question about admissions, placements, partnerships, or general inquiries, please feel free to reach out.
      </p>

      <div className="contact-grid">
        <div className="contact-form-container">
          <h2 className="form-heading">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-label="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-label="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                aria-label="Subject of your message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                aria-label="Your message"
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <p className="form-message success-message">
                Your message has been sent successfully! We will get back to you soon.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="form-message error-message">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            )}
          </form>
        </div>

        <div className="contact-info-container">
          <h2 className="info-heading">Connect With Us</h2>
          <div className="info-item">
            <h3>General Inquiries</h3>
            <p>Email: <a href="mailto:info@nrtec.in">info@nrtec.in</a></p>
            <p>Phone: <a href="tel:+918647239905">086472 39905</a></p>
          </div>
          <div className="info-item">
            <h3>Admissions</h3>
            <p>Email: <a href="mailto:admissions@nrtec.in">admissions@nrtec.in</a></p>
            <p>Phone: <a href="tel:+919154686203">+91 9154686203</a>, <a href="tel:+919154686204">9154686204</a></p>
          </div>
          <div className="info-item">
            <h3>Placements</h3>
            <p>Email: <a href="mailto:placements@nrtec.in">placements@nrtec.in</a></p>
            <p>Phone: <a href="tel:+919885553622">+91 9885553622</a></p>
          </div>
          <div className="info-item">
            <h3>Our Address</h3>
            <p>
              Kotappakonda Road, Yellamanda (Post),<br />
              Narasaraopet - 522601, Palnadu Dist.,<br />
              Andhra Pradesh, India.
            </p>
            <a href="https://www.google.com/maps/search/Kotappakonda+Road,+Narasaraopeta+-+522601,+Palnadu+Dist.+Andhra+Pradesh+522601" target="_blank" rel="noopener noreferrer" className="map-link">
              View on Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;