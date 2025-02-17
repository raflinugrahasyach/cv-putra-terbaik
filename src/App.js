// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs'; // Import halaman About Us
import './Styles/style.css';

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* 1) Ditaruh di sini */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} /> {/* Rute untuk About Us */}
          <Route path="/projects" element={<Projects />} /> {/* Rute untuk Services */}
          {/* Rute fallback untuk mengarahkan ke homepage jika rute tidak ditemukan */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
