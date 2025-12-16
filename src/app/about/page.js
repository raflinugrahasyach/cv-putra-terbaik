'use client'; // Pastikan ada ini karena kita pakai animasi/interaksi

import React from 'react';
import Image from 'next/image';
import NavbarModern from '../../components/NavbarModern';
import FooterModern from '../../components/FooterModern'; // <-- PENGGANTIAN DI SINI
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import ScrollReveal from '../../components/ScrollReveal';
import { Target, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <NavbarModern />
      <FloatingWhatsApp />

      {/* Hero About */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-10 opacity-70"></div>
        {/* Pastikan gambar ini ada, atau ganti dengan gambar lain yang tersedia */}
        <div className="absolute inset-0">
            <Image 
            src="/assets/AboutUs/about.png" // Menggunakan gambar yang sudah ada
            alt="Tentang CV Putra Terbaik" 
            fill 
            className="object-cover"
            />
        </div>
        
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Tentang Kami</h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Berdedikasi memberikan solusi keamanan teknologi tinggi untuk masa depan Indonesia.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-all h-full">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Visi Kami</h3>
              <p className="text-slate-600 leading-relaxed">
                Menjadi perusahaan penyedia sistem keamanan dan parkir otomatis terdepan di Indonesia yang mengutamakan kualitas dan kepuasan pelanggan.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-all h-full">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Misi Kami</h3>
              <ul className="text-slate-600 text-left space-y-3 text-sm">
                <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> Menyediakan produk berkualitas tinggi dengan teknologi terbaru.</li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> Memberikan pelayanan purna jual (after-sales) yang responsif.</li>
                <li className="flex gap-2"><span className="text-brand-500 font-bold">•</span> Membangun hubungan jangka panjang dengan setiap klien.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-all h-full">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tim Kami</h3>
              <p className="text-slate-600 leading-relaxed">
                Didukung oleh teknisi berpengalaman dan tim manajemen yang profesional, kami siap menangani proyek dari skala kecil hingga korporasi besar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterModern /> {/* <-- PENGGANTIAN DI SINI JUGA */}
    </main>
  );
}