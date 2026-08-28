'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import projectsList from '../../data/projects.json'; 
import NavbarModern from '../../components/NavbarModern'; 
import FooterModern from '../../components/FooterModern';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { Play, X, Wrench, CheckCircle2 } from 'lucide-react';

const allProjects = [...projectsList].reverse();

export default function ProjectsClient() {
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeImageUrl, setActiveImageUrl] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (activeVideoUrl && videoRef.current) {
      console.log("🔥 FORCE LOADING VIDEO URL:", activeVideoUrl);
      videoRef.current.pause();
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
      videoRef.current.src = activeVideoUrl;
      videoRef.current.load();
      videoRef.current.play().catch(e => console.error("Play error:", e));
    }
  }, [activeVideoUrl]);

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans selection:bg-brand-100 selection:text-brand-900">
      <NavbarModern />
      <FloatingWhatsApp />

      {/* HEADER SECTION */}
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

      {/* GALLERY — MASONRY */}
      <div className="flex-grow bg-white px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {allProjects.map((project, index) => {
              const isVid = project.type === 'video' || (typeof project.media === 'string' && project.media.endsWith('.mp4'));

              return (
                <motion.div
                  key={project.id || project.media || index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.6) }}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                  onClick={() => {
                    if (isVid) {
                      console.log("👉 THUMBNAIL CLICKED. Passing URL:", project.media);
                      setActiveVideoUrl(project.media);
                    } else {
                      console.log("👉 IMAGE THUMBNAIL CLICKED. Passing URL:", project.media);
                      setActiveImageUrl(project.media);
                    }
                  }}
                >
                  {/* STATUS BADGE */}
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-green-700 flex items-center gap-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <CheckCircle2 size={12} className="text-green-600" /> TERPASANG
                  </div>

                  {/* MEDIA THUMBNAIL */}
                  <div className="relative w-full">
                    {isVid ? (
                      <div className="relative w-full aspect-video bg-slate-900">
                        <video
                          src={`${project.media}#t=0.1`}
                          preload="metadata"
                          muted
                          playsInline
                          className="w-full h-full object-cover opacity-80"
                        />
                        {/* Play overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform shadow-xl">
                            <Play size={22} fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Image 
                        src={project.media} 
                        alt={project.system || "Dokumentasi Proyek"}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* OVERLAY INFO */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-xs text-slate-200">
                        <Wrench size={12} className="text-brand-400 shrink-0" />
                        <span className="truncate font-medium">Dokumentasi Instalasi</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <p className="text-slate-400 text-sm">
              Menampilkan {allProjects.length} dokumentasi proyek.
            </p>
          </div>
        </div>
      </div>

      <FooterModern />

      {/* VIDEO MODAL */}
      {activeVideoUrl && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setActiveVideoUrl(null)}
        >
          <button 
            className="absolute top-5 right-5 text-white/60 hover:text-white z-[110] p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setActiveVideoUrl(null)}
            aria-label="Tutup"
          >
            <X size={22} />
          </button>
          
          <div 
            className="w-full max-w-5xl max-h-[90vh] relative rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              ref={videoRef} 
              controls 
              className="w-full max-h-[80vh] object-contain" 
              playsInline
            />
          </div>
        </div>
      )}

      {/* IMAGE MODAL */}
      {activeImageUrl && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setActiveImageUrl(null)}
        >
          <button 
            className="absolute top-5 right-5 text-white/60 hover:text-white z-[110] p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setActiveImageUrl(null)}
            aria-label="Tutup"
          >
            <X size={22} />
          </button>
          
          <div 
            className="w-full max-w-5xl max-h-[90vh] relative rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh] md:h-[85vh]">
              <Image 
                src={activeImageUrl} 
                alt="Detail Proyek"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}