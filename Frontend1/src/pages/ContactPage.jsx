import React from 'react';

const ContactPage = () => {
  return (
    <section style={{padding: '4rem 0', minHeight: '60vh'}}>
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with the Ministry of Jal Shakti</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ministry of Jal Shakti</h3>
            <p><i className="fas fa-map-marker-alt"></i> Address: Ministry of Jal Shakti, Government of India, New Delhi</p>
            <p><i className="fas fa-envelope"></i> Email: groundwater@jalshakti.gov.in</p>
            <p><i className="fas fa-phone"></i> Phone: +91-11-23345678</p>
            
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5"></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;