// src/pages/SkillboostPro.js
import React from 'react';
import '../Styles/Skillboost.css';

const images = [
  { id: 1, src: 'path-to-image-1.jpg', alt: 'SkillBoost Pro 1' },
  { id: 2, src: 'path-to-image-2.jpg', alt: 'SkillBoost Pro 2' },
  { id: 3, src: 'path-to-image-3.jpg', alt: 'SkillBoost Pro 3' },
  { id: 4, src: 'path-to-image-4.jpg', alt: 'SkillBoost Pro 4' },
  { id: 5, src: 'path-to-image-5.jpg', alt: 'SkillBoost Pro 5' },
];

const SkillboostPro = () => {
  return (
    <div className="skillboost-pro">
      {/* <header className="skillboost-header"> */}
        <h1>SkillBoost Pro</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
      {/* </header> */}
      <div className="skillboost-gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillboostPro;
