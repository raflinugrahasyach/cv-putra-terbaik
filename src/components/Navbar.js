// src/components/Navbar.js
import React, { useState } from 'react';
import { scroller } from 'react-scroll'; 
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuActive(!menuActive);

  // SERVICES: jika di homepage, scroll; kalau tidak, redirect ke /#services-section
  const handleServicesClick = (e) => {
    e.preventDefault(); 
    setMenuActive(false);

    if (location.pathname === '/') {
      scroller.scrollTo('services-section', {
        smooth: true,
        duration: 700,
        offset: -70,
      });
    } else {
      // Trigger homepage + hash => Homepage.js useEffect => scroll
      window.location.href = '/#services-section';
    }
  };

  // CONTACT US: jika di homepage, scroll; kalau tidak, redirect ke /#contact-section
  const handleContactClick = (e) => {
    e.preventDefault();
    setMenuActive(false);

    if (location.pathname === '/') {
      scroller.scrollTo('contact-section', {
        smooth: true,
        duration: 1300,
        offset: -70,
      });
    } else {
      // Trigger homepage + hash => Homepage.js useEffect => scroll
      window.location.href = '/#contact-section'; 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
        <div className="navbar-logo">
          <Link to="/" className="logo-text">
            CV PUTRA TERBAIK
          </Link>
        </div>

        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          {/* HOME */}
          <li>
            <Link to="/" onClick={() => setMenuActive(false)}>
              HOME
            </Link>
          </li>

          {/* ABOUT US => route /about (halaman lain) */}
          <li>
            <Link to="/about" onClick={() => setMenuActive(false)}>
              ABOUT US
            </Link>
          </li>

          {/* SERVICES => scroll di homepage, atau /#services-section */}
          <li>
            <Link 
              to="/#services-section" 
              onClick={handleServicesClick}
            >
              SERVICES
            </Link>
          </li>

          {/* CONTACT US => scroll di homepage, atau /#contact-section; 
              plus pakai className="btn-contact" agar style background kuning */}
          <li>
            <Link 
              to="/#contact-section" 
              className="btn-contact"
              onClick={handleContactClick}
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Toggle Menu (Mobile) */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
