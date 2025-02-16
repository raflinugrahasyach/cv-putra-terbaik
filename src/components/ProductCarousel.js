import React, { useRef, useEffect } from 'react';

const ProductCarousel = ({ images, interval = 4000 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Total scrollable width
    const totalScrollWidth = container.scrollWidth - container.clientWidth;
    let scrollPosition = 0;

    const autoScroll = setInterval(() => {
      if (scrollPosition >= totalScrollWidth) {
        // Kembali ke awal
        container.scrollTo({ left: 0, behavior: 'smooth' });
        scrollPosition = 0;
      } else {
        scrollPosition += container.clientWidth; // geser satu "slide"
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }, interval);

    return () => clearInterval(autoScroll);
  }, [images, interval]);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        gap: '8px'
      }}
      className="product-carousel"
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          style={{ minWidth: '100%', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};

export default ProductCarousel;
