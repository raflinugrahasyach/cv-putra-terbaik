import React from 'react';
import '../Styles/FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <div className="floating-whatsapp">
      <a
        href="https://wa.me/628113863270"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/Homepage/icons/logo_wa.png"
          alt="Chat via WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
