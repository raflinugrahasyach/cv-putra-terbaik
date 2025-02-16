import React, { useRef, useState, useEffect } from 'react';
import '../Styles/ProductCarousel.css';

const ProductCarousel = ({ images, interval = 4000 }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current slide index berdasarkan scrollLeft
  const updateCurrentIndex = () => {
    const container = containerRef.current;
    if (container) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(index);
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const totalSlides = images.length;
    const autoScroll = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= totalSlides) {
        nextIndex = 0;
      }
      container.scrollTo({
        left: container.clientWidth * nextIndex,
        behavior: 'smooth'
      });
      setCurrentIndex(nextIndex);
    }, interval);

    return () => clearInterval(autoScroll);
  }, [images, interval, currentIndex]);

  // Update current index saat manual scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('scroll', updateCurrentIndex);
    return () => container.removeEventListener('scroll', updateCurrentIndex);
  }, []);

  // Fungsi untuk navigasi manual
  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = images.length - 1;
    }
    container.scrollTo({
      left: container.clientWidth * prevIndex,
      behavior: 'smooth'
    });
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
    container.scrollTo({
      left: container.clientWidth * nextIndex,
      behavior: 'smooth'
    });
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" ref={containerRef}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="carousel-button carousel-button-prev"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="carousel-button carousel-button-next"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
      <div className="carousel-indicator">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProductCarousel;
