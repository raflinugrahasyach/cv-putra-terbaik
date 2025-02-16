import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight, MessageCircle, Clock, Check } from 'lucide-react';

const ContactCTA = () => {
  return (
    <div className="product-card contact-cta">
      <ScrollLink
        to="contact-section"
        smooth={true}
        duration={1100}
        offset={-70}
        className="cta-container"
      >
        <div className="cta-content">
          <div className="cta-header">
            <h3>Butuh Konsultasi?</h3>
            <p>Tim ahli kami siap membantu menemukan solusi keamanan terbaik untuk Anda</p>
          </div>
          
          <div className="feature-list">
            <div className="feature-item">
              <MessageCircle className="feature-icon" />
              <span>Konsultasi Personal</span>
            </div>
            <div className="feature-item">
              <Clock className="feature-icon" />
              <span>Respon Cepat</span>
            </div>
            <div className="feature-item">
              <Check className="feature-icon" />
              <span>Solusi Tepat</span>
            </div>
          </div>
          
          <div className="cta-footer">
            <span>Mulai Konsultasi</span>
            <div className="arrow-container">
              <ArrowRight className="arrow-icon" />
            </div>
          </div>
        </div>
      </ScrollLink>
    </div>
  );
};

export default ContactCTA;