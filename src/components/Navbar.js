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
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.location.href = '/';
    }
  };

  // Handler untuk Products
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

  // Handler untuk Projects
  const handleProjectsClick = (e) => {
    e.preventDefault();
    setMenuActive(false);
    if (location.pathname === '/projects') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.location.href = '/projects';
    }
  };

  // Handler untuk articles
  const handleArticlesClick = (e) => {
    e.preventDefault();
    setMenuActive(false);
    if (location.pathname === '/articles') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.location.href = '/articles';
    }
  };

  // Handler untuk About Us
  const handleAboutClick = (e) => {
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
  };

  // Handler untuk Contact Us
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
            <Link to="/articles" onClick={handleArticlesClick}>
              ARTICLES
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleAboutClick}>
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
