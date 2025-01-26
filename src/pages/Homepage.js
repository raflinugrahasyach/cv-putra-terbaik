// src/pages/Homepage.js
import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import '../Styles/Homepage.css';

const Homepage = () => {
  useEffect(() => {
    // Cek hash di URL, misalnya #services-section atau #contact-section
    const currentHash = window.location.hash; // contoh: "#services-section"

    if (currentHash === '#services-section') {
      scroller.scrollTo('services-section', {
        smooth: true,
        duration: 1100,
        offset: -70,
      });
    } else if (currentHash === '#contact-section') {
      scroller.scrollTo('contact-section', {
        smooth: true,
        duration: 1100,
        offset: -70,
      });
    }
    // Tambahkan else if lain jika ada section lain
  }, []);

  return (
    <>
      {/* Section 1: Header */}
      <header className="header">
        <div className="header-content">
          <h1>
            SOLUSI KEAMANAN TERPERCAYA DENGAN TEKNOLOGI TERKINI UNTUK 
            MENDUKUNG EFISIENSI DAN PRODUKTIVITAS BISNIS ANDA
          </h1>
          {/* Tombol "Pesan Sekarang" => scroll ke contact-section */}
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={1100}
            offset={-70}
            className="btn-primary"
          >
            Pesan Sekarang
          </ScrollLink>
        </div>
      </header>

      {/* Section 2: Intro */}
      <section className="section section-intro">
        <div className="section-intro-content">
          <div className="image-content">
            {/* background-image di set via Homepage.css */}
          </div>
          <div className="text-content">
            <h2>Kenalin, Solusi Keamanan Terpercaya untuk Bisnis Anda</h2>
            <p>
              CV Putra Terbaik adalah mitra terpercaya dalam menyediakan solusi 
              sistem keamanan modern dan efisien. Dengan teknologi terkini, layanan 
              profesional, dan komitmen tinggi, kami membantu bisnis Anda meningkatkan 
              keamanan, produktivitas, dan efisiensi operasional.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Layanan Kami */}
      {/*
         Dibungkus dengan <Element name="services-section"> agar bisa discroll
         dari Navbar dengan scroller.scrollTo('services-section').
      */}
      <Element name="services-section" className="section section-services">
        <h2>LAYANAN KAMI</h2>
        <div className="services">
          <div className="service-card">
            <img
              src="/assets/Homepage/services/access_control.jpg"
              alt="Access Control"
              className="service-image"
            />
            <div className="service-info">
              <h3>Access Control</h3>
              <p>Sistem kontrol akses pintu yang modern dan aman.</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/assets/Homepage/services/barrier_gate_e10.jpg"
              alt="Barrier Gate E10"
              className="service-image"
            />
            <div className="service-info">
              <h3>Barrier Gate E10</h3>
              <p>Sistem kontrol akses kendaraan yang andal dan efisien.</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/assets/Homepage/services/box_dispenser_ticket.jpg"
              alt="Box Dispenser Ticket"
              className="service-image"
            />
            <div className="service-info">
              <h3>Box Dispenser Ticket</h3>
              <p>Mesin dispenser tiket untuk pengelolaan parkir otomatis.</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/assets/Homepage/services/ip_camera_hikvision_outdoor_2mp.jpg"
              alt="IP Camera Hikvision"
              className="service-image"
            />
            <div className="service-info">
              <h3>IP Camera Hikvision</h3>
              <p>Kamera pengawasan outdoor dengan resolusi 2MP.</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/assets/Homepage/services/pos_parkir_single.jpg"
              alt="Pos Parkir Single"
              className="service-image"
            />
            <div className="service-info">
              <h3>Pos Parkir Single</h3>
              <p>Pos parkir efisien untuk kontrol masuk dan keluar kendaraan.</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/assets/Homepage/services/rfid_access_control.jpg"
              alt="RFID Access Control"
              className="service-image"
            />
            <div className="service-info">
              <h3>RFID Access Control</h3>
              <p>Sistem pengenalan kartu RFID untuk kontrol akses.</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/assets/Homepage/services/touchless_button.jpg"
              alt="Touchless Button"
              className="service-image"
            />
            <div className="service-info">
              <h3>Touchless Button</h3>
              <p>Tombol tanpa sentuh untuk akses pintu otomatis.</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/assets/Homepage/services/vehicle_loop_detector.jpg"
              alt="Vehicle Loop Detector"
              className="service-image"
            />
            <div className="service-info">
              <h3>Vehicle Loop Detector</h3>
              <p>Sensor deteksi kendaraan untuk manajemen parkir.</p>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/assets/Homepage/services/kartu_rfid.jpg"
              alt="Kartu RFID"
              className="service-image"
            />
            <div className="service-info">
              <h3>Kartu RFID</h3>
              <p>Kartu pintar untuk akses kontrol yang cepat dan aman.</p>
            </div>
          </div>
        </div>
      </Element>

      {/* Section 4: Proyek Kami */}
      <section className="section section-projects">
        <h2>PROYEK KAMI</h2>
        <p>Kami telah dipercaya untuk mengamankan berbagai proyek penting:</p>
        <div className="projects">
          <div className="project-card">
            <img
              src="/assets/projects/rs_ortopedi_solo.jpg"
              alt="RS Ortopedi Solo"
              className="project-image"
            />
            <div className="project-info">
              <h3>RS Ortopedi Solo</h3>
              <p>Solo, Jawa Tengah</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/depo_pertamina_cilacap.jpg"
              alt="Depo Pertamina Cilacap"
              className="project-image"
            />
            <div className="project-info">
              <h3>Depo Pertamina Cilacap</h3>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/depo_lpg_cilacap.jpg"
              alt="Depo LPG Cilacap"
              className="project-image"
            />
            <div className="project-info">
              <h3>Depo LPG Cilacap</h3>
              <p>Cilacap, Jawa Tengah</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/jembatan_timbang_cilacap.jpg"
              alt="Jembatan Timbang Pertamina Cilacap"
              className="project-image"
            />
            <div className="project-info">
              <h3>Jembatan Timbang Pertamina Cilacap</h3>
              <p>Cilacap, Jawa Tengah</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/antrian_kendaraan_cilacap.jpg"
              alt="Sistem Antrian Kendaraan Cilacap"
              className="project-image"
            />
            <div className="project-info">
              <h3>Sistem Antrian Kendaraan Cilacap</h3>
              <p>Cilacap, Jawa Tengah</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/tripod_tirtonadi_solo.jpg"
              alt="Sistem Tripod Terminal Tirtonadi Solo"
              className="project-image"
            />
            <div className="project-info">
              <h3>Sistem Tripod Terminal Tirtonadi Solo</h3>
              <p>Solo, Jawa Tengah</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/ramayana_gresik.jpg"
              alt="Ramayana Gresik"
              className="project-image"
            />
            <div className="project-info">
              <h3>Ramayana Gresik</h3>
              <p>Gresik, Jawa Timur</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/pasar_krempyeng_gresik.jpg"
              alt="Pasar Krempyeng Gresik"
              className="project-image"
            />
            <div className="project-info">
              <h3>Pasar Krempyeng Gresik</h3>
              <p>Gresik, Jawa Timur</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/rsi_jepara.jpg"
              alt="RSI Jepara"
              className="project-image"
            />
            <div className="project-info">
              <h3>RSI Jepara</h3>
              <p>Jepara, Jawa Tengah</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/rspku_jogjakarta.jpg"
              alt="RS PKU Muhammadiyah Jogjakarta"
              className="project-image"
            />
            <div className="project-info">
              <h3>RS PKU Muhammadiyah Jogjakarta</h3>
              <p>Jogjakarta</p>
            </div>
          </div>
          <div className="project-card">
            <img
              src="/assets/projects/bandara_juanda.jpg"
              alt="Bandara International Juanda"
              className="project-image"
            />
            <div className="project-info">
              <h3>Bandara International Juanda</h3>
              <p>Surabaya, Jawa Timur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Hubungi Kami */}
      <Element name="contact-section" className="section section-contact">
        <h1 className="section-title">HUBUNGI KAMI</h1>
        <div className="contact-wrapper">
          {/* Informasi Kontak */}
          <div className="contact-info">
            <h2 className="contact-title">KONTAK</h2>
            <div className="contact-item">
              <img
                src="/assets/Homepage/icons/logo_gmail.png"
                alt="Email"
                className="contact-icon"
              />
              <p>
                <a href="mailto:cvputraterbaik@gmail.com">cvputraterbaik@gmail.com</a>
              </p>
            </div>
            <div className="contact-item">
              <img
                src="/assets/Homepage/icons/logo_call.png"
                alt="Telepon"
                className="contact-icon"
              />
              <p>
                <a href="tel:+628113863270">+62 811-3863-270</a>
              </p>
            </div>
            <div className="contact-item">
              <img
                src="/assets/Homepage/icons/logo_maps.png"
                alt="Alamat"
                className="contact-icon"
              />
              <p>Jl. Manukan Loka 3/14, Surabaya, Jawa Timur</p>
            </div>
            <div className="contact-item">
              <img
                src="/assets/Homepage/icons/logo_wa.png"
                alt="WhatsApp"
                className="contact-icon"
              />
              <p>
                <a
                  href="https://wa.me/628113863270"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat via WhatsApp
                </a>
              </p>
            </div>
            <div className="contact-map">
              <iframe
                title="Lokasi Kantor CV Putra Terbaik"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6708414783186!2d112.67417877465797!3d-7.246327294702922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbff38103b7f%3A0x73594e75d7e77af4!2sJl.%20Manukan%20Loka%203%2F14%2C%20Manukan%20Wetan%2C%20Tandes%2C%20Surabaya%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1692602535293"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px', marginTop: '1rem' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Formulir Pesan */}
          <div className="contact-form">
            <h2>KIRIM PESAN</h2>
            <form>
              <label htmlFor="name">Nama</label>
              <input type="text" id="name" placeholder="Nama Anda" required />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="emailanda@gmail.com"
                required
              />

              <label htmlFor="subject">Subjek</label>
              <input
                type="text"
                id="subject"
                placeholder="Tulis subjek Anda di sini"
                required
              />

              <label htmlFor="message">Pesan Anda</label>
              <textarea
                id="message"
                placeholder="Tulis pesan Anda di sini"
                rows="4"
                required
              ></textarea>

              <div className="consent">
                <input type="checkbox" id="consent" required />
                <label htmlFor="consent">
                  Saya setuju bahwa informasi ini akan digunakan untuk
                  menghubungi saya.
                </label>
              </div>
              <button type="submit" className="btn-submit">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Tombol WA Mengambang */}
        <div className="floating-whatsapp">
          <a
            href="https://wa.me/628113863270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Homepage/icons/logo_wa.png"
              alt="Chat via WhatsApp"
              className="whatsapp-icon"
            />
          </a>
        </div>
      </Element>
    </>
  );
};

export default Homepage;
