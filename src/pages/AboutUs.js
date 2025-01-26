import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  return (
    <>
      {/* SECTION 1: Header */}
      <header className="header about-us-header">
        <div className="header-content">
          <h1>TENTANG KAMI</h1>
          <p>
            CV Putra Terbaik adalah perusahaan yang menyediakan solusi keamanan 
            berkualitas tinggi dengan nilai investasi yang terjangkau.
          </p>
        </div>
      </header>

      {/* SECTION 2: Visi & Misi */}
      <section className="section about-us-vision-mission">
        <h2 className="section-title">VISI & MISI</h2>
        <div className="vm-container">
          <div className="vision">
            {/* Ganti path icon sesuai kebutuhan */}
            <img 
              src="/assets/AboutUs/vision-icon.png" 
              alt="Vision Icon" 
              className="vm-icon" 
            />
            <h3>VISI KAMI</h3>
            <p>
            Mewujudkan konsep sistem keamanan yang terpercaya dan handal yang mampu beradaptasi dengan perkembangan teknologi 
            secara berkelanjutan, dengan proses perbaikan secara terus-menerus.
            </p>
          </div>
          <div className="mission">
            {/* Ganti path icon sesuai kebutuhan */}
            <img 
              src="../assets/AboutUs/mission-icon.png" 
              alt="Mission Icon" 
              className="vm-icon" 
            />
            <h3>MISI KAMI</h3>
            <ul className="mission-list">
              <li>Menyediakan sistem keamanan dengan standar kualitas yang tinggi sesuai dengan kebutuhan konsumen.</li>
              <li>Menciptakan inovasi baru sesuai perkembangan teknologi di bidang sistem keamanan dan menerapkannya dalam skala kecil, menengah, dan besar.</li>
              <li>Memastikan penyediaan semua produk sistem keamanan memberikan nilai tambah dan kepuasan bagi konsumen.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Pencapaian */}
      <section className="section about-us-achievements">
        <h2 className="section-title">PENCAPAIAN KAMI</h2>
        <p className="section-subtitle">
          Hingga hari ini, kami terus berinovasi untuk memastikan keamanan 
          terbaik bagi klien kami di berbagai wilayah Indonesia.
        </p>
        <div className="achievements-container">
          <div className="achievement-card">
            <div className="achievement-icon">
              {/* Ganti path icon sesuai kebutuhan */}
              <img 
                src="/assets/AboutUs/projects-icon.png" 
                alt="Projects Icon" 
              />
            </div>
            <h3>+100</h3>
            <p>Proyek Keamanan Terselesaikan</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">
              {/* Ganti path icon sesuai kebutuhan */}
              <img 
                src="/assets/AboutUs/clients-icon.png" 
                alt="Clients Icon" 
              />
            </div>
            <h3>+50</h3>
            <p>Klien Bisnis</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">
              {/* Ganti path icon sesuai kebutuhan */}
              <img 
                src="/assets/AboutUs/experience-icon.png" 
                alt="Experience Icon" 
              />
            </div>
            <h3>+10</h3>
            <p>Tahun Pengalaman</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
