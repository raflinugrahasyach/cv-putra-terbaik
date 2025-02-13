// src/components/Navbar.js
import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuActive(!menuActive);

  // Handler untuk tombol Home
  const handleHomeClick = (e) => {
    e.preventDefault();
    setMenuActive(false);
    if (location.pathname === '/') {
      // Jika di homepage, scroll ke atas dengan animasi
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Jika di halaman lain, navigasi ke homepage
      window.location.href = '/';
    }
  };

  // PRODUCTS: jika di homepage, scroll; kalau tidak, redirect ke /#products-section
  const handleProductsClick = (e) => {
    e.preventDefault();
    setMenuActive(false);
    if (location.pathname === '/') {
      scroller.scrollTo('products-section', {
        smooth: true,
        duration: 700,
        offset: -70,
      });
    } else {
      window.location.href = '/#products-section';
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setMenuActive(false);
    if (location.pathname === '/projects') {
      // Jika sudah di halaman projects, scroll ke atas dengan animasi
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Jika di halaman lain, navigasi ke projects
      window.location.href = '/projects';
    }
  };

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
      window.location.href = '/#contact-section';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={handleHomeClick} className="logo-text">
            CV PUTRA TERBAIK
          </Link>
        </div>
        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={handleHomeClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/#products-section" onClick={handleProductsClick}>
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleProjectsClick}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={(e) => {
                e.preventDefault();
                setMenuActive(false);
                if (location.pathname === '/about') {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                } else {
                  window.location.href = '/about';
                }
              }}
            >
              ABOUT US
            </Link>
          </li>
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
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span>&#9776;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
