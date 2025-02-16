// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import '../Styles/Footer.css';

// SVG Icons (existing icons remain the same)
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E1306C">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.057 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.197-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-professional">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info Column */}
          <div className="footer-column company-info">
            <h4>CV Putra Terbaik</h4>
            <div className="footer-column-content">
              <p className="company-description">Innovative Security Solutions</p>
              <p className="company-tagline">Empowering Your Business with Cutting-Edge Technology</p>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="footer-column quick-links">
            <h4>Quick Links</h4>
            <div className="footer-column-content">
              <ul className="footer-nav-list">
                <li>
                  <Link
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      // Jika sudah di homepage, scroll ke atas
                      if (window.location.pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        // Jika tidak, navigasi ke homepage
                        window.location.href = '/';
                      }
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#products-section"
                    onClick={(e) => {
                      e.preventDefault();
                      // Jika di homepage, scroll ke section Products
                      if (window.location.pathname === '/') {
                        scroller.scrollTo('products-section', {
                          smooth: true,
                          duration: 700,
                          offset: -70,
                        });
                      } else {
                        // Jika tidak, navigasi ke homepage dengan hash
                        window.location.href = '/#products-section';
                      }
                    }}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    onClick={(e) => {
                      e.preventDefault();
                      // Jika sudah di halaman Projects, scroll ke atas
                      if (window.location.pathname === '/projects') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        // Jika tidak, navigasi ke halaman Projects
                        window.location.href = '/projects';
                      }
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={(e) => {
                      e.preventDefault();
                      // Jika sudah di halaman About Us, scroll ke atas
                      if (window.location.pathname === '/about') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        // Jika tidak, navigasi ke halaman About Us
                        window.location.href = '/about';
                      }
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contact-section"
                    onClick={(e) => {
                      e.preventDefault();
                      // Jika di homepage, scroll ke section Contact
                      if (window.location.pathname === '/') {
                        scroller.scrollTo('contact-section', {
                          smooth: true,
                          duration: 1300,
                          offset: -70,
                        });
                      } else {
                        // Jika tidak, navigasi ke homepage dengan hash
                        window.location.href = '/#contact-section';
                      }
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Information Column */}
          <div className="footer-column">
            <h4>Contact Information</h4>
            <div className="footer-column-content">
              <p className="contact-email">
                <span className="contact-label">Email</span> 
                cvputraterbaik@gmail.com
              </p>
              <p className="contact-phone">
                <span className="contact-label">Phone</span> 
                +62 811-3863-270
              </p>
              <p className="contact-address">
                <span className="contact-label">Address</span> 
                Jl. Manukan Loka 3/14, Surabaya
              </p>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="footer-column social-media">
            <h4>Connect With Us</h4>
            <div className="footer-column-content">
              <div className="social-links">
                <a 
                  href="https://www.linkedin.com/company/cv-putra-terbaik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a 
                  href="https://wa.me/628113863270" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <img 
                    src="/assets/Homepage/icons/logo_wa.png"
                    alt="WhatsApp" 
                    style={{ width: '24px', height: '24px' }}
                  />
                </a>
                <a 
                  href="https://www.instagram.com/cvputraterbaik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href="https://www.tokopedia.com/unitedportal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Tokopedia"
                >
                  <img 
                    src="/assets/Homepage/icons/logo_tokopedia.png"
                    alt="Tokopedia" 
                    style={{ width: '24px', height: '24px' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} CV Putra Terbaik. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;