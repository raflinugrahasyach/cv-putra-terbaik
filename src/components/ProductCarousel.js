'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = ({ images, alts = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fungsi Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Fungsi Prev Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Auto Slide Logic
  useEffect(() => {
    // Kalau mouse lagi di atas gambar (hover), jangan auto slide
    if (isHovered) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, isHovered, interval]);

  // Mencegah klik link parent saat klik tombol navigasi
  const handleManualNav = (e, action) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  };

  return (
    <div 
      className="relative w-full h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Display */}
      <div className="w-full h-full relative">
        <Image
          src={images[currentIndex]}
          alt={alts[currentIndex] || `Foto produk ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-700"
          loading="lazy"
        />
      </div>

      {/* Tombol Kiri (Muncul saat hover) */}
      <button 
        onClick={(e) => handleManualNav(e, prevSlide)}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-brand-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Tombol Kanan (Muncul saat hover) */}
      <button 
        onClick={(e) => handleManualNav(e, nextSlide)}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-brand-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indikator Titik Bawah */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/20 px-2 py-1 rounded-full backdrop-blur-[2px]">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-white w-6' : 'bg-white/50 w-1.5'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;