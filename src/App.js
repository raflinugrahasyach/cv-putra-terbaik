// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './Styles/style.css';

const Homepage = lazy(() => import('./pages/Homepage'));
const Projects = lazy(() => import('./pages/Projects'));
const AboutUs = lazy(() => import('./pages/AboutUs'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
        </div>
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
