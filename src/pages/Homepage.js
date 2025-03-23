import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


import ContactCTA from '../components/ContactCTA';
import ProductCarousel from '../components/ProductCarousel';

// Impor file CSS per section
import '../Styles/Homepage/Header.css';
import '../Styles/Homepage/Intro.css';
import '../Styles/Homepage/Products.css';
import '../Styles/Homepage/HomepageProjects.css'; // Pastikan nama file sesuai
import '../Styles/Homepage/Contact.css';
import '../Styles/Homepage/Services.css';

const Homepage = () => {
  useEffect(() => {
    // Cek hash di URL untuk scroll ke section tertentu
    const currentHash = window.location.hash;
    if (currentHash === '#products-section') {
      scroller.scrollTo('products-section', {
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
    } else if (currentHash === '#projects-section') {
      scroller.scrollTo('projects-section', {
        smooth: true,
        duration: 1100,
        offset: -70,
      });
    }
  }, []);

  // Array produk; untuk produk dengan lebih dari satu gambar, gunakan properti "images"
  const products = [
    {
      images: [
        "/assets/Homepage/products/pos_parkir_single1.jpg",
        "/assets/Homepage/products/pos_parkir_single2.jpg",
        "/assets/Homepage/products/pos_parkir_single3.jpg"
      ],
      title: "Pos Parkir Single",
      desc: "Pos parkir efisien untuk kontrol masuk dan keluar kendaraan."
    },
    {
      images: [
        "/assets/Homepage/products/box_dispenser_ticket1.jpg",
        "/assets/Homepage/products/box_dispenser_ticket2.jpg",
        "/assets/Homepage/products/box_dispenser_ticket3.jpg"
      ],
      title: "Box Dispenser Ticket",
      desc: "Mesin dispenser tiket untuk pengelolaan parkir otomatis."
    },
    {
      image: "/assets/Homepage/products/barrier_gate_e10.jpg",
      title: "Barrier Gate E10",
      desc: "Sistem kontrol akses kendaraan yang andal dan efisien."
    },
    {
      image: "/assets/Homepage/products/access_control.jpg",
      title: "Access Control",
      desc: "Sistem kontrol akses pintu yang modern dan aman."
    },
    {
      image: "/assets/Homepage/products/ip_camera_hikvision_outdoor_2mp.jpg",
      title: "IP Camera Hikvision",
      desc: "Kamera pengawasan outdoor dengan resolusi 2MP."
    },
    {
      image: "/assets/Homepage/products/rfid_access_control.jpg",
      title: "RFID Access Control",
      desc: "Sistem pengenalan kartu RFID untuk kontrol akses."
    },
    {
      image: "/assets/Homepage/products/touchless_button.jpg",
      title: "Touchless Button",
      desc: "Tombol tanpa sentuh untuk akses pintu otomatis."
    },
    {
      image: "/assets/Homepage/products/vehicle_loop_detector.jpg",
      title: "Vehicle Loop Detector",
      desc: "Sensor deteksi kendaraan untuk manajemen parkir."
    },
    {
      image: "/assets/Homepage/products/switch_hub_tp_link_8_port.jpg",
      title: "Switch Hub TP-Link 8 Port",
      desc: "Switch jaringan desktop dengan 8 port 10/100Mbps."
    },
    {
      image: "/assets/Homepage/products/kartu_rfid.jpg",
      title: "Kartu RFID",
      desc: "Kartu pintar untuk akses kontrol yang cepat dan aman."
    }
  ];

  return (
    <>
      <Helmet>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RYVG9EY6E4"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RYVG9EY6E4');
          `}
        </script>
      </Helmet>

      {/* Section 1: Header */}
      <header className="header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>
            <span className="highlight">SOLUSI KEAMANAN TERPERCAYA</span> DENGAN TEKNOLOGI TERKINI UNTUK MENDUKUNG
            EFISIENSI DAN PRODUKTIVITAS BISNIS ANDA
          </h1>
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={1100}
            offset={-70}
            className="btn-primary"
          >
            Pesan Sekarang
            <span className="btn-icon"></span>
          </ScrollLink>
        </div>
      </header>

      {/* Section 2: Intro */}
      <section className="section-intro">
        <div className="section-intro-container">
          <div className="section-intro-content">
            <div className="intro-image-wrapper">
              <div className="image-content">
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="intro-text-content">
              <div className="text-content-inner">
                <h2>Kenalin, Solusi Keamanan Terpercaya untuk Bisnis Anda</h2>
                <div className="yellow-divider"></div>
                <div className="text-paragraphs">
                  <p>
                    CV Putra Terbaik adalah mitra terpercaya dalam menyediakan solusi
                    sistem keamanan modern dan efisien. Dengan teknologi terkini, layanan
                    profesional, dan komitmen tinggi, kami membantu bisnis Anda meningkatkan
                    keamanan, produktivitas, dan efisiensi operasional. 
                  </p>
                  <p>
                    Layanan kami meliputi pengadaan sistem palang parkir otomatis, barrier gate seri MX, seri E, 
                    paket manless sistem ticket, sistem RFID reader, vehicle loop detector, software custom, 
                    pos parkir, pos parkir single, box manless dengan touchless button, QR code scanner, 
                    capture foto dengan IP camera, automatic door closer, automatic magnetic door lock, 
                    sliding gate yang sudah dipercaya oleh berbagai instansi dan korporasi di seluruh wilayah Indonesia. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Produk Kami */}
      <Element name="products-section" className="section-products">
        <div className="products-header">
          <h2>PRODUK KAMI</h2>
          <p>Solusi keamanan modern untuk bisnis Anda</p>
        </div>
        <div className="products-grid">
          {products.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-image-wrapper">
                {item.images ? (
                  <ProductCarousel images={item.images} interval={4000} />
                ) : (
                  <img src={item.image} alt={item.title} className="product-image" />
                )}
              </div>
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
          <ContactCTA />
        </div>
      </Element>

      {/* Section 5: Proyek Kami (Homepage Projects) */}
      <Element name="projects-section" className="hp-section-projects">
        <div className="hp-projects-header">
          <h1>PROYEK KAMI</h1>
          <p className="hp-projects-subheader">
            Kami telah dipercaya untuk mengerjakan berbagai proyek penting
          </p>
        </div>
        <div className="hp-projects-grid-container">
          <div className="hp-projects-grid">
            {/* Project Items */}
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>RSUD Dr Sutomo</h3>
                <p>Surabaya, Jawa Timur</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>RS Woodward</h3>
                <p>Palu, Sulawesi Tengah</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>PT Pertamina Perak</h3>
                <p>Surabaya, Jawa Timur</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Puri Safira Regency</h3>
                <p>Gresik, Jawa Timur</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Amartha Safira</h3>
                <p>Sidoarjo, Jawa Timur</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Safira Garden</h3>
                <p>Sidoarjo, Jawa Timur</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Anvaya Juanda</h3>
                <p>Sidoarjo, Jawa Timur</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Grand East Residence</h3>
                <p>Sidoarjo, Jawa Timur</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>PLN Ketintang</h3>
                <p>Surabaya, Jawa Timur</p>
              </div>
            </div>

            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Warkop Mie Agam</h3>
                <p>Surabaya, Jawa Timur</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Pergudangan Waringin Margomulyo</h3>
                <p>Surabaya, Jawa Timur</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>RS Ortopedi Solo</h3>
                <p>Solo, Jawa Tengah</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Depo Pertamina Cilacap</h3>
                <p>Cilacap, Jawa Tengah</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Depo LPG Cilacap</h3>
                <p>Cilacap, Jawa Tengah</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Jembatan Timbang Pertamina Cilacap</h3>
                <p>Cilacap, Jawa Tengah</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Sistem Antrian Kendaraan Cilacap</h3>
                <p>Cilacap, Jawa Tengah</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Sistem Tripod Terminal Tirtonadi Solo</h3>
                <p>Solo, Jawa Tengah</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Ramayana Gresik</h3>
                <p>Gresik, Jawa Timur</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Pasar Krempyeng Gresik</h3>
                <p>Gresik, Jawa Timur</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>RSI Jepara</h3>
                <p>Jepara, Jawa Tengah</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>RS PKU Muhammadiyah</h3>
                <p>Jogjakarta</p>
              </div>
            </div>
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">Completed</div>
                <h3>Bandara International Juanda</h3>
                <p>Surabaya, Jawa Timur</p>
              </div>
            </div>
            {/* Call-to-action item */}
            <div className="hp-project-item">
              <div className="hp-project-content">
                <div className="hp-project-badge">50+ Projects</div>
                <h3>Cari Tahu Lebih Banyak!</h3>
                <p>Temukan bagaimana kami membantu bisnis seperti milik Anda</p>
              </div>
            </div>
          </div>

          <Link to="/projects" className="hp-projects-cta">
            <span>Lihat Semua Proyek</span>
            <div className="hp-cta-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </Element>

      {/* Section 6: Hubungi Kami & Floating WhatsApp */}
      <Element name="contact-section" className="section-contact">
        <h1 className="section-title">HUBUNGI KAMI</h1>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-title">KONTAK</h2>
            <a href="mailto:cvputraterbaik@gmail.com" className="contact-item">
              <img
                src="/assets/Homepage/icons/logo_gmail.png"
                alt="Email"
                className="contact-icon"
              />
              <div className="contact-item-content">
                <p>cvputraterbaik@gmail.com</p>
              </div>
            </a>
            <a href="tel:+628113863270" className="contact-item">
              <img
                src="/assets/Homepage/icons/logo_call.png"
                alt="Telepon"
                className="contact-icon"
              />
              <div className="contact-item-content">
                <p>+62 811-3863-270</p>
              </div>
            </a>
            <a
              href="https://maps.app.goo.gl/ufdRPUdnhTnFroYa9"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <img
                src="/assets/Homepage/icons/logo_maps.png"
                alt="Alamat"
                className="contact-icon"
              />
              <div className="contact-item-content">
                <p>Jl. Manukan Loka 3/14, Surabaya, Jawa Timur</p>
              </div>
            </a>
            <a
              href="https://wa.me/628113863270"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <img
                src="/assets/Homepage/icons/logo_wa.png"
                alt="WhatsApp"
                className="contact-icon"
              />
              <div className="contact-item-content">
                <p>Chat via WhatsApp</p>
              </div>
            </a>
            <div className="contact-map">
              <iframe
                title="Lokasi Kantor CV Putra Terbaik"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.812612366068!2d112.65972087407279!3d-7.262155392744628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ff00357d836f%3A0x4c2a504d6a09cb5a!2sCV.%20Putra%20Terbaik!5e0!3m2!1sen!2sid!4v1740200966416!5m2!1sen!2sid"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px', marginTop: '1rem' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="contact-form">
            <h2>KIRIM PESAN</h2>
            <form action="https://formspree.io/f/xdkalpgo" method="POST">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nama Anda"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="emailanda@gmail.com"
                required
              />
              <label htmlFor="subject">Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Tulis subjek Anda di sini"
                required
              />
              <label htmlFor="message">Pesan Anda</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tulis pesan Anda di sini"
                rows="4"
                required
              ></textarea>
              <div className="consent">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                />
                <label htmlFor="consent">
                  Saya setuju bahwa informasi ini akan digunakan untuk menghubungi saya.
                </label>
              </div>
              <input
                type="hidden"
                name="_replyto"
                value="cvputraterbaik@gmail.com"
              />
              <button type="submit" className="btn-submit">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Homepage;
