// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Setiap kali pathname berubah, scroll halaman ke posisi (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Tidak me-render apa pun
}

export default ScrollToTop;
