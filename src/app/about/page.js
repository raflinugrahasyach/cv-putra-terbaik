'use client';

import React from 'react';
import Image from 'next/image';
import NavbarModern from '../../components/NavbarModern';
import FooterModern from '../../components/FooterModern';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import ScrollReveal from '../../components/ScrollReveal';
import { Target, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <NavbarModern />
      <FloatingWhatsApp />

      {/* Hero About (Tetap menggunakan Gambar Besar) */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Overlay Gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-slate-950 z-10 opacity-75"></div>
        
        {/* Gambar Background */}
        <div className="absolute inset-0">
            <Image 
              src="/assets/AboutUs/about.webp" // Pastikan path ini sesuai dengan file Anda
              alt="Tentang CV Putra Terbaik" 
              fill 
              className="object-cover object-center scale-105" // scale-105 agar ada efek zoom sedikit
              priority
            />
        </div>
        
        {/* Konten Teks di Tengah */}
        <div className="relative z-20 text-center px-6 mt-16">
          <ScrollReveal>
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider mb-6 uppercase">
              Profil Perusahaan
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-sm">
              Tentang Kami
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Mewujudkan sistem keamanan terpercaya yang beradaptasi dengan masa depan melalui inovasi dan pelayanan profesional.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* VISI */}
          <ScrollReveal>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg hover:border-brand-200 transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">VISI</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                "Mewujudkan konsep sistem keamanan yang terpercaya dan handal yang mampu beradaptasi dengan perkembangan teknologi secara berkelanjutan, dengan proses perbaikan secara terus menerus."
              </p>
            </div>
          </ScrollReveal>

          {/* MISI */}
          <ScrollReveal delay={0.2}>
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left hover:shadow-lg hover:border-blue-200 transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center tracking-tight">MISI</h3>
              <ul className="text-slate-600 space-y-4 text-sm flex-grow">
                <li className="flex gap-3 items-start">
                  <span className="mt-1 min-w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                  <span>Menyediakan sistem keamanan dengan standard kualitas yang tinggi sesuai dengan kebutuhan konsumen.</span>
                </li>
                <li className="flex gap-3 items-start">
                   <span className="mt-1 min-w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                   <span>Menciptakan inovasi baru sesuai perkembangan teknologi di bidang sistem keamanan dan menerapkannya dalam skala kecil, menengah, dan besar.</span>
                </li>
                <li className="flex gap-3 items-start">
                   <span className="mt-1 min-w-[6px] h-[6px] rounded-full bg-blue-500"></span>
                   <span>Memastikan penyediaan semua produk sistem keamanan memberikan nilai tambah dan kepuasan bagi konsumen.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* TIM KAMI (Pelengkap Layout agar Seimbang) */}
          <ScrollReveal delay={0.4}>
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg hover:border-green-200 transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">TIM KAMI</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                Didukung oleh teknisi berpengalaman dan manajemen profesional yang berdedikasi tinggi. Kami siap memberikan layanan instalasi, pemeliharaan, dan purna jual terbaik untuk menjamin kepuasan jangka panjang setiap klien kami.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Footer */}
      <FooterModern />
    </main>
  );
}