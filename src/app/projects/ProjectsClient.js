'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import projectsList from '../../data/projects.json'; 
import ScrollReveal from '../../components/ScrollReveal';
// Import Navbar & Footer
import NavbarModern from '../../components/NavbarModern'; 
import FooterModern from '../../components/FooterModern';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { Play, ZoomIn, X, MapPin } from 'lucide-react';

export default function ProjectsClient() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const allProjects = [...projectsList].reverse(); 

  return (
    // Tambahkan bg-white agar clean
    <main className="bg-white min-h-screen flex flex-col">
      {/* 1. Navbar */}
      <NavbarModern />
      <FloatingWhatsApp />

      <div className="bg-slate-50 pt-32 pb-20 px-6 flex-grow">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Galeri Dokumentasi
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Bukti nyata kualitas kerja kami. Berikut adalah dokumentasi pemasangan sistem di berbagai lokasi klien yang telah kami selesaikan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div 
                  className="group relative aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-200"
                  onClick={() => setSelectedMedia(project)}
                >
                  {(project.type === 'video' || (typeof project.media === 'string' && project.media.endsWith('.mp4'))) ? (
                      <video 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        muted loop 
                        playsInline
                      >
                        <source src={project.media} type="video/mp4" />
                      </video>
                  ) : (
                      <Image 
                        src={project.media} 
                        alt={project.name || "Dokumentasi Proyek"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        {(project.type === 'video' || (typeof project.media === 'string' && project.media.endsWith('.mp4'))) 
                          ? <Play size={24} fill="currentColor" /> 
                          : <ZoomIn size={24} />
                        }
                     </div>
                     <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.name && (
                          <h3 className="text-white font-bold text-lg mb-1">{project.name}</h3>
                        )}
                        {project.loc && (
                          <p className="text-slate-300 text-sm flex items-center gap-1">
                            <MapPin size={14} /> {project.loc}
                          </p>
                        )}
                     </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-20 text-center border-t border-slate-200 pt-10">
             <p className="text-slate-500 italic">
               Dan masih banyak lagi proyek instalasi yang telah kami kerjakan di seluruh Indonesia.
             </p>
          </div>
        </div>
      </div>

      {/* 2. Footer */}
      <FooterModern />

      {/* Modal / Lightbox (Code sama) */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in" onClick={() => setSelectedMedia(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full">
             <X size={32} />
          </button>
          <div className="w-full max-w-6xl max-h-[90vh] relative rounded-lg overflow-hidden flex items-center justify-center shadow-2xl" onClick={e => e.stopPropagation()}>
            {(selectedMedia.type === 'video' || (typeof selectedMedia.media === 'string' && selectedMedia.media.endsWith('.mp4'))) ? (
              <video controls autoPlay className="w-full h-full max-h-[85vh] object-contain bg-black">
                <source src={selectedMedia.media} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-[85vh]">
                <Image src={selectedMedia.media} alt="Proyek Zoom" fill className="object-contain"/>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}