// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import './Styles/style.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
