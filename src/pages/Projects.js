// src/pages/Projects.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../Styles/Projects.css';

const Projects = () => {
  const location = useLocation();
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Scroll otomatis ke elemen berdasarkan hash URL
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location]);

  // Daftar proyek: 16 gambar dan 3 video
  const projectsList = [
    { id: 1, media: "/assets/Projects/project-1.jpg" },
    { id: 2, media: "/assets/Projects/project-2.jpg" },
    { id: 3, media: "/assets/Projects/project-3.jpg" },
    { id: 4, media: "/assets/Projects/project-4.jpg" },
    { id: 5, media: "/assets/Projects/project-5.jpg" },
    { id: 6, media: "/assets/Projects/project-6.jpg" },
    { id: 7, media: "/assets/Projects/project-7.jpg" },
    { id: 8, media: "/assets/Projects/project-8.jpg" },
    { id: 9, media: "/assets/Projects/project-9.jpg" },
    { id: 10, media: "/assets/Projects/project-10.jpg" },
    { id: 11, media: "/assets/Projects/project-11.jpg" },
    { id: 12, media: "/assets/Projects/project-12.jpg" },
    { id: 13, media: "/assets/Projects/project-13.jpg" },
    { id: 14, media: "/assets/Projects/project-14.jpg" },
    { id: 15, media: "/assets/Projects/project-15.jpg" },
    { id: 16, media: "/assets/Projects/project-16.jpg" },
    { id: 17, media: "/assets/Projects/project-vid-1.mp4" },
    { id: 18, media: "/assets/Projects/project-vid-2.mp4" },
    { id: 19, media: "/assets/Projects/project-vid-3.mp4" },
  ];

  // Fungsi untuk merender ikon overlay dan badge untuk menandai tipe media
  const renderOverlayIcon = (media) => {
    if (media.endsWith('.mp4')) {
      return (
        <>
          <span className="overlay-icon">▶</span>
          <div className="media-badge">Video</div>
        </>
      );
    } else {
      return (
        <>
          <span className="overlay-icon">🔍</span>
          <div className="media-badge">Foto</div>
        </>
      );
    }
  };

  return (
    <div className="projects-page">
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
      {/* Header Section */}
      <div className="projects-header">
        <h1>PROYEK KAMI</h1>
        <p className="projects-subheader">
          Kami telah dipercaya untuk mengerjakan berbagai proyek penting
        </p>
      </div>

      {/* Grid Proyek */}
      <div className="projects-grid-container">
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              className="project-item"
              onClick={() => setSelectedMedia(project)}
            >
              <div className="media-container">
                {project.media.endsWith('.mp4') ? (
                  <video 
                    className="project-video"
                    muted
                    loop
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  >
                    <source src={project.media} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={project.media}
                    alt={`Project ${project.id}`}
                    className="project-image"
                    loading="lazy"
                  />
                )}
                <div className="media-overlay" />
                {renderOverlayIcon(project.media)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal untuk menampilkan media yang dipilih */}
      {selectedMedia && (
        <div className="project-modal" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedMedia(null)}
            >
              ×
            </button>
            {selectedMedia.media.endsWith('.mp4') ? (
              <video controls autoPlay className="modal-media">
                <source src={selectedMedia.media} type="video/mp4" />
              </video>
            ) : (
              <img
                src={selectedMedia.media}
                alt={`Project ${selectedMedia.id}`}
                className="modal-media"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
