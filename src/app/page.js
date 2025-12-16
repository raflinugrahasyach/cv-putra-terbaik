'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, MessageCircle, ArrowRight, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';

// Components
import NavbarModern from '../components/NavbarModern';
import AuroraBackground from '../components/AuroraBackground';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ProductCarousel from '../components/ProductCarousel';
import TrustedBy from '../components/TrustedBy';
import ScrollReveal from '../components/ScrollReveal';
import FooterModern from '../components/FooterModern';

// Data
import productsData from '../data/products.json';
import clientsData from '../data/clients.json';

export default function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter produk logic
  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-brand-100 selection:text-brand-900 bg-slate-50">
      <NavbarModern />
      <AuroraBackground />
      <FloatingWhatsApp />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-600 text-sm font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Solusi Keamanan Terpercaya #1
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Amankan Aset,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">
              Tingkatkan Efisiensi.
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Mitra terpercaya penyedia sistem parkir otomatis, barrier gate, dan akses kontrol modern untuk bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="#produk" className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Lihat Produk <ArrowRight size={20} />
            </Link>
            <Link href="#contact" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Hubungi Sales
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <div className="flex-1 relative w-full h-[400px] lg:h-[500px]">
           <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-accent-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
           <Image 
             src="/assets/Homepage/hero-system-real.png" 
             alt="Hero CV Putra Terbaik"
             fill
             className="object-contain drop-shadow-2xl animate-float"
             priority
           />
        </div>
      </section>

      {/* --- TRUSTED BY --- */}
      <TrustedBy />

      {/* --- INTRO SECTION (TENTANG KAMI) --- */}
      <section id="tentang" className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Gambar Engineer (Proporsional) */}
              <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white order-2 lg:order-1">
                <Image 
                  src="/assets/Homepage/about-us-pro.png" 
                  alt="Tentang Kami" 
                  fill 
                  className="object-cover object-top hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Teks Intro */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Kenalin, Solusi Keamanan Terpercaya untuk Bisnis Anda
                </h2>
                <div className="w-20 h-1.5 bg-brand-500 rounded-full mb-8"></div>
                
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify">
                  <p>
                    CV Putra Terbaik adalah mitra terpercaya dalam menyediakan solusi sistem keamanan modern dan efisien. 
                    Dengan teknologi terkini, layanan profesional, dan komitmen tinggi, kami membantu bisnis Anda 
                    meningkatkan keamanan, produktivitas, dan efisiensi operasional.
                  </p>
                  <p>
                    Layanan kami meliputi pengadaan sistem palang parkir otomatis, barrier gate seri MX, seri E, 
                    paket manless sistem ticket, sistem RFID reader, vehicle loop detector, software custom, 
                    pos parkir, pos parkir single, box manless dengan touchless button, QR code scanner, 
                    capture foto dengan IP camera, automatic door closer, automatic magnetic door lock, 
                    sliding gate yang sudah dipercaya oleh berbagai instansi dan korporasi di seluruh wilayah Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- PRODUK KAMI --- */}
      <section id="produk" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">PRODUK KAMI</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Solusi keamanan terbaik dengan teknologi mutakhir untuk kebutuhan Anda.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Cari produk (misal: Barrier Gate)..." 
                className="w-full pl-12 pr-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <ScrollReveal key={item.id}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                  <div className="relative h-64 bg-slate-100 overflow-hidden">
                    {item.images && item.images.length > 1 ? (
                      <ProductCarousel images={item.images} interval={4000} />
                    ) : (
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    )}
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {item.desc}
                    </p>
                    
                    <div className="mt-auto">
                      <a 
                        href={`https://wa.me/628113863270?text=Halo%20Putra%20Terbaik,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 bg-brand-600 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-700 transition-colors"
                      >
                        <MessageCircle size={18} /> Tanya Produk
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <p className="text-center text-slate-500 mt-8">Produk tidak ditemukan.</p>
          )}
        </div>
      </section>

      {/* --- PROYEK KAMI --- */}
      <section id="proyek" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">DAFTAR KLIEN KAMI</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kami bangga telah dipercaya oleh berbagai instansi di seluruh Indonesia.
            </p>
          </div>

          {/* Highlight Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {clientsData.slice(0, 8).map((proj, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-brand-600 font-bold border border-slate-100 shadow-sm">
                      {idx + 1}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded-full">Selesai</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight">{proj.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <MapPin size={14} /> {proj.loc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* List Lengkap */}
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-xl font-bold mb-8 border-b border-slate-700 pb-4">
              Daftar Klien Lainnya
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 text-sm text-slate-300">
              {clientsData.slice(8).map((proj, idx) => (
                <div key={idx} className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                  <CheckCircle2 size={14} className="text-brand-500 shrink-0" />
                  <span>{proj.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/projects" className="inline-flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all">
                Lihat Galeri Foto & Video <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- HUBUNGI KAMI --- */}
      <section id="contact" className="py-24 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Mulai Konsultasi</h2>
            <p className="text-slate-600 mb-12 text-lg">
              Hubungi kami untuk penawaran harga terbaik atau sekadar tanya jawab.
            </p>
            
            <div className="space-y-6 mb-10">
              <a href="https://wa.me/628113863270" target="_blank" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp / Telepon</p>
                  <p className="text-lg font-bold text-slate-900">+62 811-3863-270</p>
                </div>
              </a>
              
              <a href="mailto:cvputraterbaik@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-lg font-bold text-slate-900">cvputraterbaik@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <iframe
                title="Lokasi Kantor CV Putra Terbaik"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.962772592576!2d112.6719893!3d-7.246327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ffb739772c63%3A0x69661570ee61c6b!2sJl.%20Manukan%20Loka%20No.14%2C%20Banjar%20Sugihan%2C%20Kec.%20Tandes%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060184!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 h-fit">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Kirim Pesan</h3>
            <form action="https://formspree.io/f/xdkalpgo" method="POST" className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Contoh: Budi Santoso"
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="emailanda@gmail.com"
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Pesan</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  placeholder="Tulis kebutuhan Anda di sini..."
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-400" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Kirim Pesan Sekarang <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <FooterModern />

    </main>
  );
}