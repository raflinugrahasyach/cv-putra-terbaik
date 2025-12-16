'use client';

import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  // Efek transparan ke solid saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi helper untuk navigasi hash yang aman
  const handleScrollNavigation = (e, target) => {
    e.preventDefault();
    setMenuActive(false);

    if (pathname === '/') {
      // Jika sudah di homepage, langsung scroll
      if (target === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 700,
          offset: -70,
        });
      }
    } else {
      // Jika di halaman lain, pindah ke homepage dulu
      if (target === 'top') {
        router.push('/');
      } else {
        // Next.js butuh waktu load, kita arahkan ke URL hash
        router.push(`/#${target}`);
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" onClick={(e) => handleScrollNavigation(e, 'top')} className="logo-text">
            CV PUTRA TERBAIK
          </Link>
        </div>
        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li>
            <Link href="/" onClick={(e) => handleScrollNavigation(e, 'top')}>
              HOME
            </Link>
          </li>
          <li>
            <a href="/#products-section" onClick={(e) => handleScrollNavigation(e, 'products-section')}>
              PRODUCTS
            </a>
          </li>
          <li>
            <Link href="/projects" onClick={() => setMenuActive(false)}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/articles" onClick={() => setMenuActive(false)}>
              ARTICLES
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuActive(false)}>
              ABOUT US
            </Link>
          </li>
          <li>
            <a
              href="/#contact-section"
              className="btn-contact"
              onClick={(e) => handleScrollNavigation(e, 'contact-section')}
            >
              CONTACT US
            </a>
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