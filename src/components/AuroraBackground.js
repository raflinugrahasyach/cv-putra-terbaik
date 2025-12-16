'use client';
import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let time = 0;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 0.002; // Kecepatan animasi
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Efek Gradasi Merah (Brand Color)
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.2, 0,
        canvas.width * 0.2, canvas.height * 0.2, canvas.width * 0.6
      );
      // Warna: Merah Soft -> Transparan
      gradient1.addColorStop(0, 'rgba(220, 38, 38, 0.08)'); 
      gradient1.addColorStop(1, 'rgba(220, 38, 38, 0)');
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Efek Gradasi Emas (Accent Color) - Bergerak
      const x2 = canvas.width * 0.8 + Math.cos(time) * 100;
      const y2 = canvas.height * 0.8 + Math.sin(time) * 50;
      
      const gradient2 = ctx.createRadialGradient(
        x2, y2, 0, x2, y2, canvas.width * 0.5
      );
      // Warna: Kuning Emas Soft
      gradient2.addColorStop(0, 'rgba(250, 204, 21, 0.08)'); 
      gradient2.addColorStop(1, 'rgba(250, 204, 21, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-100"
    />
  );
}