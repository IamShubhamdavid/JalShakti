import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ministry of Jal Shakti</h3>
            <p>Government of India's initiative for sustainable water resource management</p>
            <p>Address: Ministry of Jal Shakti, Government of India, New Delhi</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/data">Data Portal</Link></li>
              <li><Link to="/resources">Research Papers</Link></li>
              <li><Link to="/resources">Policy Documents</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-envelope"></i> Email: groundwater@jalshakti.gov.in</p>
            <p><i className="fas fa-phone"></i> Phone: +91-11-23345678</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 Ministry of Jal Shakti, Government of India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;