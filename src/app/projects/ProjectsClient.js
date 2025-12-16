'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import projectsList from '../../data/projects.json'; 
import NavbarModern from '../../components/NavbarModern'; 
import FooterModern from '../../components/FooterModern';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { Play, ZoomIn, X, MapPin, CheckCircle2, Calendar } from 'lucide-react';

export default function ProjectsClient() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  
  // Membalik urutan agar proyek terbaru di atas
  const allProjects = [...projectsList].reverse(); 

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans selection:bg-brand-100 selection:text-brand-900">
      <NavbarModern />
      <FloatingWhatsApp />

      {/* HEADER SECTION (Projects) */}
      <div className="bg-slate-50 pt-32 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-100 text-brand-600 text-xs font-bold tracking-wider mb-6 uppercase">
              Portofolio Pemasangan
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Galeri Dokumentasi
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Arsip visual pengerjaan sistem keamanan di berbagai lokasi klien. 
              Bukti dedikasi kami terhadap kerapian instalasi dan fungsi.
            </p>
          </motion.div>
        </div>
      </div>

      {/* GALLERY SECTION (MASONRY LAYOUT) */}
      <div className="flex-grow bg-white px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Menggunakan CSS Columns untuk efek Masonry sejati */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedMedia(project)}
              >
                {/* STATUS BADGE (Pojok Kiri Atas) */}
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-green-700 flex items-center gap-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <CheckCircle2 size={12} className="text-green-600" /> TERPASANG
                </div>

                {/* MEDIA DISPLAY */}
                <div className="relative w-full">
                  {/* Trik agar rasio gambar asli terjaga di masonry: Tidak pakai fill, pakai width/height auto */}
                  {(project.type === 'video' || (typeof project.media === 'string' && project.media.endsWith('.mp4'))) ? (
                    <div className="relative w-full aspect-video"> 
                       <video 
                        className="w-full h-full object-cover"
                        muted loop playsInline autoPlay
                      >
                        <source src={project.media} type="video/mp4" />
                      </video>
                      {/* Video Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                          <Play size={20} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image 
                      src={project.media} 
                      alt={project.name || "Dokumentasi Proyek"}
                      width={800} // Lebar standar, tinggi menyesuaikan
                      height={600}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* OVERLAY INFO (Glassmorphism Slide Up) */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.name ? (
                      <h3 className="font-bold text-sm lg:text-base mb-1 line-clamp-1">{project.name}</h3>
                    ) : (
                      <h3 className="font-bold text-sm mb-1">Dokumentasi Proyek</h3>
                    )}
                    
                    {project.loc && (
                      <div className="flex items-center gap-2 text-xs text-slate-200">
                        <MapPin size={12} className="text-brand-400" />
                        <span className="truncate">{project.loc}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Overlay Gelap Halus */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 pointer-events-none" />
                
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-slate-400 text-sm">
              Menampilkan {allProjects.length} dokumentasi proyek.
            </p>
          </div>
        </div>
      </div>

      <FooterModern />

      {/* LIGHTBOX / MODAL */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2 bg-white/10 rounded-full hover:bg-white/20">
              <X size={24} />
            </button>
            
            <div 
              className="w-full max-w-5xl max-h-[90vh] relative rounded-xl overflow-hidden shadow-2xl bg-black"
              onClick={e => e.stopPropagation()}
            >
              {(selectedMedia.type === 'video' || (typeof selectedMedia.media === 'string' && selectedMedia.media.endsWith('.mp4'))) ? (
                <video controls autoPlay className="w-full h-full max-h-[85vh] object-contain mx-auto">
                  <source src={selectedMedia.media} type="video/mp4" />
                </video>
              ) : (
                <div className="relative w-full h-[80vh] md:h-[85vh]">
                  <Image 
                    src={selectedMedia.media} 
                    alt="Proyek Detail"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              
              {/* Caption Modal */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 text-white">
                 <h3 className="text-xl font-bold">{selectedMedia.name || 'Detail Dokumentasi'}</h3>
                 {selectedMedia.loc && (
                   <p className="text-slate-300 flex items-center gap-2 mt-1">
                     <MapPin size={16} className="text-brand-500" /> {selectedMedia.loc}
                   </p>
                 )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}