'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavbarModern from '../../components/NavbarModern';
import FooterModern from '../../components/FooterModern';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { Target, Award, Users, CheckCircle2, ArrowRight, Shield, Zap, Headphones } from 'lucide-react';

// ─── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const STATS = [
  { value: '100+', label: 'Proyek Selesai' },
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '24/7', label: 'Dukungan Teknis' },
];

const WHY_US = [
  {
    icon: <Shield size={22} />,
    title: 'Kualitas Terjamin',
    desc: 'Setiap produk melewati quality control ketat sebelum instalasi. Kami hanya menggunakan komponen bergaransi resmi.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Teknologi Terkini',
    desc: 'Terus berinovasi mengadopsi teknologi RFID, IoT, dan AI untuk sistem yang lebih cerdas dan responsif.',
  },
  {
    icon: <Headphones size={22} />,
    title: 'Purna Jual Profesional',
    desc: 'Tim teknisi berpengalaman siap 24/7 untuk pemeliharaan, troubleshooting, dan upgrade sistem Anda.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <NavbarModern />
      <FloatingWhatsApp />

      {/* Hero About — Original Design */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Overlay Gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-slate-950 z-10 opacity-75"></div>
        
        {/* Gambar Background */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/AboutUs/about.webp"
            alt="Tentang CV Putra Terbaik" 
            fill 
            sizes="100vw"
            className="object-cover object-center scale-105"
            priority
          />
        </div>
        
        {/* Konten Teks di Tengah */}
        <div className="relative z-20 text-center px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider mb-6 uppercase">
              Profil Perusahaan
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-sm">
              Tentang Kami
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Mewujudkan sistem keamanan terpercaya yang beradaptasi dengan masa depan melalui inovasi dan pelayanan profesional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                {...fadeUp(i * 0.08)}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300"
              >
                <p className="text-4xl font-bold text-brand-600 mb-1 tracking-tight">{value}</p>
                <p className="text-sm text-slate-500 font-medium">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VISI MISI TIM ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-brand-600 tracking-widest uppercase mb-3">Fondasi Kami</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Nilai yang Kami Pegang</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* VISI */}
            <motion.div {...fadeUp(0)}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-400 h-full flex flex-col group">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <Target size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">VISI</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  "Mewujudkan konsep sistem keamanan yang terpercaya dan handal yang mampu beradaptasi dengan perkembangan teknologi secara berkelanjutan, dengan proses perbaikan secara terus menerus."
                </p>
              </div>
            </motion.div>

            {/* MISI */}
            <motion.div {...fadeUp(0.1)}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-400 h-full flex flex-col group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Award size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">MISI</h3>
                <ul className="text-slate-600 space-y-4 text-sm flex-grow">
                  {[
                    'Menyediakan sistem keamanan dengan standard kualitas yang tinggi sesuai dengan kebutuhan konsumen.',
                    'Menciptakan inovasi baru sesuai perkembangan teknologi di bidang sistem keamanan dan menerapkannya dalam skala kecil, menengah, dan besar.',
                    'Memastikan penyediaan semua produk sistem keamanan memberikan nilai tambah dan kepuasan bagi konsumen.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* TIM */}
            <motion.div {...fadeUp(0.2)}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-400 h-full flex flex-col group">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Users size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">TIM KAMI</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  Didukung oleh teknisi berpengalaman dan manajemen profesional yang berdedikasi tinggi. Kami siap memberikan layanan instalasi, pemeliharaan, dan purna jual terbaik untuk menjamin kepuasan jangka panjang setiap klien kami.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              {...fadeUp(0)}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100"
            >
              <Image
                src="/assets/AboutUs/about.webp"
                alt="Tim CV Putra Terbaik"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-white/80">
                <p className="text-2xl font-bold text-brand-600">100+</p>
                <p className="text-xs text-slate-500 font-semibold">Proyek Berhasil</p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div {...fadeUp(0.05)}>
                <span className="inline-block text-xs font-bold text-brand-600 tracking-widest uppercase mb-3">Mengapa Kami?</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  Keunggulan yang Membuat Kami Berbeda
                </h2>
                <div className="w-16 h-1 bg-brand-500 rounded-full mb-8" />
              </motion.div>

              <div className="space-y-6">
                {WHY_US.map(({ icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    {...fadeUp(0.1 + i * 0.1)}
                    className="flex gap-5 p-5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeUp(0.4)} className="mt-10">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-full shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-1"
                >
                  Konsultasi Gratis <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FooterModern />
    </main>
  );
}