import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo mb-4">
              <Zap size={24} />
              InnovateHub
            </div>
            <p>
              Leading the future of digital innovation with cutting-edge 
              solutions and expert craftsmanship. Transform your ideas 
              into reality with our comprehensive technology services.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>
                  Features
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>
                <Mail size={16} style={{ display: 'inline', marginRight: '8px' }} />
                hello@innovatehub.com
              </li>
              <li>
                <Phone size={16} style={{ display: 'inline', marginRight: '8px' }} />
                +1 (555) 123-4567
              </li>
              <li>
                <MapPin size={16} style={{ display: 'inline', marginRight: '8px' }} />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 InnovateHub. All rights reserved. Built with passion for innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;