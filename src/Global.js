// src/Global.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import './Styles/FloatingWhatsApp.css'; // Pastikan file CSS ini ada di folder Styles

const Global = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/about-us" component={AboutUs} />
          {/* Tambahkan route lain jika diperlukan */}
        </Switch>
        {/* Komponen Floating WhatsApp yang tampil secara global */}
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
      </>
    </Router>
  );
};

export default Global;
