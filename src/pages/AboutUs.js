// AboutUs.js
import '../Styles/AboutUs.css';

const AboutUs = () => {
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
      {/* Hero Section dengan parallax effect */}
      <header className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>TENTANG KAMI</h1>
          <p>CV Putra Terbaik adalah perusahaan yang menyediakan solusi keamanan berkualitas tinggi dengan nilai investasi yang terjangkau.</p>
        </div>
      </header>

      {/* Vision & Mission dengan cards modern */}
      <section className="vision-mission-section">
        <div className="section-container">
          <div className="vm-header">
            <h2>VISI & MISI</h2>
          </div>
          
          <div className="vm-container">
            <div className="vm-card vision">
              <div className="card-icon">
                <img src="/assets/AboutUs/vision-icon.png" alt="Vision" />
              </div>
              <h3>VISI KAMI</h3>
              <p>Mewujudkan konsep sistem keamanan yang terpercaya dan handal yang mampu beradaptasi dengan perkembangan teknologi secara berkelanjutan.</p>
            </div>

            <div className="vm-card mission">
              <div className="card-icon">
                <img src="/assets/AboutUs/mission-icon.png" alt="Mission" />
              </div>
              <h3>MISI KAMI</h3>
              <ul>
                <li>
                  <span className="bullet">01</span>
                  Menyediakan sistem keamanan dengan standar kualitas tinggi
                </li>
                <li>
                  <span className="bullet">02</span>
                  Menciptakan inovasi sesuai perkembangan teknologi
                </li>
                <li>
                  <span className="bullet">03</span>
                  Memastikan kepuasan maksimal bagi konsumen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section dengan animated counter */}
      <section className="achievements-section">
        <div className="section-container">
          <div className="achievements-header">
            <h2>PENCAPAIAN KAMI</h2>
            <p>Hingga hari ini, kami terus berinovasi untuk memastikan keamanan terbaik bagi klien kami di berbagai wilayah Indonesia.</p>
          </div>

          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-icon">
                <img src="/assets/AboutUs/projects-icon.png" alt="Projects" />
              </div>
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Proyek Terselesaikan</div>
            </div>

            <div className="achievement-item">
              <div className="achievement-icon">
                <img src="/assets/AboutUs/clients-icon.png" alt="Clients" />
              </div>
              <div className="achievement-number">50+</div>
              <div className="achievement-label">Klien Bisnis</div>
            </div>

            <div className="achievement-item">
              <div className="achievement-icon">
                <img src="/assets/AboutUs/experience-icon.png" alt="Experience" />
              </div>
              <div className="achievement-number">10+</div>
              <div className="achievement-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;