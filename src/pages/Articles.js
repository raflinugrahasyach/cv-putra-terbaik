// src/pages/Articles.js
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../Styles/Articles.css';

const Articles = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('barrier-gate');

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.slice(1);
      setActiveTab(hash === 'vehicle-loop-detector' ? hash : 'barrier-gate');
      
      const element = document.getElementById('articles-content');
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle scroll ke contact section di homepage
  const handleContactScroll = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, null, '#contact-section');
      }
    }
  };

  return (
    <div className="articles-page">
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RYVG9EY6E4"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RYVG9EY6E4');
          `}
        </script>
        <title>Artikel - Sistem Keamanan & Solusi Parkir Otomatis | CV Putra Terbaik</title>
        <meta name="description" content="Informasi lengkap tentang Barrier Gate dan Vehicle Loop Detector untuk sistem keamanan dan manajemen parkir otomatis dari CV Putra Terbaik" />
      </Helmet>

      {/* Hero Section */}
      <section className="articles-hero">
        <div className="articles-hero-overlay"></div>
        <div className="articles-hero-content">
          <h1>ARTIKEL INFORMATIF</h1>
          <p>Pelajari lebih dalam tentang produk dan teknologi keamanan terkini untuk area parkir</p>
        </div>
      </section>

      {/* Article Navigation */}
      <section className="articles-navigation">
        <div className="articles-tabs">
          <button 
            className={activeTab === 'barrier-gate' ? 'active' : ''} 
            onClick={() => handleTabChange('barrier-gate')}
          >
            Barrier Gate
          </button>
          <button 
            className={activeTab === 'vehicle-loop-detector' ? 'active' : ''} 
            onClick={() => handleTabChange('vehicle-loop-detector')}
          >
            Vehicle Loop Detector
          </button>
        </div>
      </section>

      {/* Articles Content */}
      <section id="articles-content" className="articles-content">
        {activeTab === 'barrier-gate' ? (
          <div className="article-wrapper">
            <div className="article-header">
              <h2>Barrier Gate: Solusi Keamanan Modern untuk Area Parkir Anda</h2>
              <p className="article-subtitle">Tingkatkan keamanan dan efisiensi pengelolaan lalu lintas kendaraan dengan sistem palang otomatis</p>
            </div>
            
            <div className="article-image-container">
              <img 
                src="/assets/Homepage/products/barrier_gate_e10.jpg" 
                alt="Barrier Gate Modern" 
                className="article-main-image"
              />
              <div className="image-caption">
                Barrier Gate - Sistem kontrol akses kendaraan yang andal dan efisien
              </div>
            </div>
            
            <div className="article-body">
              <div className="article-section">
                <h3>Apa itu Barrier Gate?</h3>
                <p>
                  Barrier gate atau palang parkir otomatis adalah sistem pembatas akses kendaraan yang berfungsi sebagai kontrol untuk mengatur keluar masuknya kendaraan di area tertentu. Sistem ini berperan penting dalam meningkatkan keamanan dan mengelola lalu lintas kendaraan dengan efisien.
                </p>
                <p>
                  Dilengkapi dengan berbagai fitur canggih, sistem ini mampu meningkatkan keamanan, mengelola arus lalu lintas kendaraan, dan mengoptimalkan penggunaan area parkir.
                </p>
              </div>
              
              <div className="article-section">
                <h3>Lokasi Pemasangan Barrier Gate</h3>
                <div className="article-locations">
                  <div className="location-item">
                    <div className="location-icon">🏢</div>
                    <div className="location-text">Gedung Perkantoran</div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">🏥</div>
                    <div className="location-text">Rumah Sakit</div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">🏪</div>
                    <div className="location-text">Pusat Perbelanjaan</div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">✈️</div>
                    <div className="location-text">Bandara & Terminal</div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">🏠</div>
                    <div className="location-text">Perumahan & Apartemen</div>
                  </div>
                  <div className="location-item">
                    <div className="location-icon">🏭</div>
                    <div className="location-text">Kawasan Industri</div>
                  </div>
                </div>
              </div>
              
              <div className="article-section">
                <h3>Jenis-Jenis Barrier Gate</h3>
                <div className="article-types">
                  <div className="type-card">
                    <h4>Automatic Barrier Gate</h4>
                    <div className="type-icon">
                      <span className="material-icons">security</span>
                    </div>
                    <p>
                      Sistem palang yang bergerak secara otomatis ketika akses diberikan melalui kartu RFID, tiket, atau metode otentikasi lainnya. Sempurna untuk area dengan arus lalu lintas kendaraan tinggi.
                    </p>
                  </div>
                  <div className="type-card">
                    <h4>Swing Barrier Gate</h4>
                    <div className="type-icon">
                      <span className="material-icons">door_sliding</span>
                    </div>
                    <p>
                      Sistem pengendalian akses dengan mekanisme ayun untuk mengatur lalu lintas orang atau kendaraan pada area tertentu. Ideal untuk pintu masuk gedung eksklusif atau area terbatas.
                    </p>
                  </div>
                  <div className="type-card">
                    <h4>Semi-Automatic Barrier Gate</h4>
                    <div className="type-icon">
                      <span className="material-icons">settings_remote</span>
                    </div>
                    <p>
                      Kombinasi sistem manual dan otomatis yang memberikan fleksibilitas operasional. Cocok untuk lokasi dengan kebutuhan pengawasan operator tambahan.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="article-section">
                <h3>Manfaat Penggunaan Barrier Gate</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="benefit-icon">🔒</div>
                    <div className="benefit-content">
                      <h4>Keamanan Ditingkatkan</h4>
                      <p>Peningkatan keamanan dan kontrol akses yang lebih ketat</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">📊</div>
                    <div className="benefit-content">
                      <h4>Kelancaran Lalu Lintas</h4>
                      <p>Pengelolaan lalu lintas kendaraan yang lebih teratur dan efisien</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">⚡</div>
                    <div className="benefit-content">
                      <h4>Kelancaran Keluar Masuk</h4>
                      <p>Penyederhanaan proses masuk dan keluar kendaraan</p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">📱</div>
                    <div className="benefit-content">
                      <h4>Efisiensi Operasional</h4>
                      <p>Peningkatan efisiensi operasional di area parkir</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="article-section integration-section">
                <h3>Integrasi dengan Sistem Modern</h3>
                <p>
                  Barrier gate modern dapat diintegrasikan dengan berbagai sistem dan perangkat untuk meningkatkan fungsionalitasnya.
                </p>
              </div>
              
              <div className="article-cta">
                <h3>Tingkatkan Keamanan Area Anda dengan Barrier Gate</h3>
                <p>
                  CV Putra Terbaik menyediakan berbagai jenis barrier gate berkualitas tinggi dengan instalasi profesional dan dukungan teknis yang handal.
                </p>
                <Link 
                  to="/#contact-section" 
                  className="cta-button"
                  onClick={handleContactScroll}
                >
                  Dapatkan Penawaran
                  <span className="arrow-icon">➜</span>
                </Link>
              </div>
            </div>
          </div>
          ) : (
          <div className="article-wrapper">
            <div className="article-header">
              <h2>Vehicle Loop Detector: Teknologi Deteksi Kendaraan Otomatis</h2>
              <p className="article-subtitle">
                Optimalkan sistem keamanan dan manajemen parkir dengan deteksi kendaraan cerdas
              </p>
            </div>
            
            <div className="article-image-container">
              <img 
                src="/assets/Homepage/products/vehicle_loop_detector.jpg" 
                alt="Vehicle Loop Detector" 
                className="article-main-image"
              />
              <div className="image-caption">
                Vehicle Loop Detector - Sensor deteksi kendaraan untuk manajemen parkir
              </div>
            </div>
            
            <div className="article-body">
              <div className="article-section">
                <h3>Apa itu Vehicle Loop Detector?</h3>
                <p>
                  Alat elektronik cerdas untuk mendeteksi keberadaan kendaraan berdasarkan perubahan induktansi magnetik. 
                  Digunakan dalam sistem lalu lintas, parkir, dan gerbang otomatis untuk meningkatkan efisiensi dan keamanan.
                </p>
              </div>
              
              <div className="article-section">
                <h3>Jenis-Jenis Vehicle Loop Detector</h3>
                <div className="article-types">
                  <div className="type-card">
                    <h4>Single Channel</h4>
                    <div className="type-icon">
                      <span className="material-icons">sensors</span>
                    </div>
                    <div className="type-content">
                      <ul>
                        <li>1 saluran deteksi</li>
                        <li>Aplikasi sederhana</li>
                        <li>Deteksi keberadaan dasar</li>
                      </ul>
                    </div>
                  </div>

                  <div className="type-card">
                    <h4>Dual Channel</h4>
                    <div className="type-icon">
                      <span className="material-icons">compare_arrows</span>
                    </div>
                    <div className="type-content">
                      <ul>
                        <li>2 saluran deteksi</li>
                        <li>Deteksi arah & kecepatan</li>
                        <li>Sistem kompleks</li>
                      </ul>
                    </div>
                  </div>

                  <div className="type-card">
                    <h4>Frekuensi Tinggi</h4>
                    <div className="type-icon">
                      <span className="material-icons">speed</span>
                    </div>
                    <div className="type-content">
                      <ul>
                        <li>Sensitif tinggi</li>
                        <li>Deteksi kendaraan kecil</li>
                        <li>Respon cepat</li>
                      </ul>
                    </div>
                  </div>

                  <div className="type-card">
                    <h4>Frekuensi Rendah</h4>
                    <div className="type-icon">
                      <span className="material-icons">power_off</span>
                    </div>
                    <div className="type-content">
                      <ul>
                        <li>Tahan gangguan</li>
                        <li>Lingkungan elektrik</li>
                        <li>Stabil & handal</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="article-section">
                <h3>Implementasi & Manfaat</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <span className="material-icons">traffic</span>
                    </div>
                    <div className="benefit-content">
                      <h4>Sistem Lalu Lintas</h4>
                      <ul>
                        <li>Pengaturan lampu otomatis</li>
                        <li>Deteksi kepadatan</li>
                        <li>Optimasi arus kendaraan</li>
                      </ul>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <span className="material-icons">local_parking</span>
                    </div>
                    <div className="benefit-content">
                      <h4>Manajemen Parkir</h4>
                      <ul>
                        <li>Deteksi slot parkir</li>
                        <li>Penghitungan kapasitas</li>
                        <li>Sistem bimbingan parkir</li>
                      </ul>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <span className="material-icons">door_sliding</span>
                    </div>
                    <div className="benefit-content">
                      <h4>Gerbang Otomatis</h4>
                      <ul>
                        <li>Akses kendaraan otomatis</li>
                        <li>Integrasi barrier gate</li>
                        <li>Deteksi keberadaan real-time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <span className="material-icons">directions_car</span>
                    </div>
                    <div className="benefit-content">
                      <h4>Sistem Toll</h4>
                      <ul>
                        <li>Klasifikasi kendaraan</li>
                        <li>Penghitungan volume</li>
                        <li>Sistem tarif otomatis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="article-cta">
              <h3>Optimalkan Sistem Deteksi Kendaraan Anda</h3>
              <p>
                Dapatkan solusi vehicle loop detector terintegrasi dengan dukungan teknis profesional.
              </p>
              <Link 
                to="/#contact-section" 
                className="cta-button"
                onClick={handleContactScroll}
              >
                Dapatkan Penawaran
                <span className="arrow-icon">➜</span>
              </Link>
            </div>
          </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Articles;