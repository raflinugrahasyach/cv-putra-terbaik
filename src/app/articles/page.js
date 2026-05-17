'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarModern from '../../components/NavbarModern';
import FooterModern from '../../components/FooterModern';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import ARTICLES from '../../data/articles.json';
import { ArrowRight, X, Clock, Tag, ChevronRight } from 'lucide-react';


const ALL_CATS = ['Semua', ...Array.from(new Set(ARTICLES.map(a => a.category)))];

function ArticleCard({ a, onOpen }) {
  return (
    // Link wraps the entire card for Googlebot crawlability of /articles/[slug]
    // onClick fires the modal for the UX preview — both patterns coexist
    <Link href={`/articles/${a.id}`} onClick={(e) => { e.preventDefault(); onOpen(a); }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 flex flex-col cursor-pointer group"
      >
        <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
          <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-600" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <span className="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">{a.category}</span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="flex items-center gap-1 text-slate-400 text-xs"><Clock size={11} /> {a.readTime}</span>
            <span className="flex items-center gap-1 text-slate-400 text-xs"><Tag size={11} /> {a.tag}</span>
          </div>
          <h2 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2 flex-1">{a.title}</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">{a.excerpt}</p>
          <span className="flex items-center gap-1 text-brand-600 font-bold text-sm group-hover:gap-2 transition-all duration-200">
            Baca Selengkapnya <ChevronRight size={15} />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function Modal({ a, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // Store previously focused element to restore on close
    const prevFocus = document.activeElement;

    // Move focus to close button immediately on mount
    closeBtnRef.current?.focus();

    // Escape key closes the modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Lock body scroll while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      // Restore focus to the element that triggered the modal
      prevFocus?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-56 rounded-t-3xl overflow-hidden bg-slate-100">
          <Image src={a.image} alt={a.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Tutup artikel"
            className="absolute top-4 right-4 w-9 h-9 bg-black/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            <X size={18} />
          </button>
          <span className="absolute bottom-4 left-5 bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">{a.category}</span>
        </div>
        <div className="p-7">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center gap-1 text-slate-400 text-xs"><Clock size={11} /> {a.readTime} baca</span>
            <span className="flex items-center gap-1 text-slate-400 text-xs"><Tag size={11} /> {a.tag}</span>
          </div>
          <h2 id="modal-title" className="text-xl font-bold text-slate-900 mb-2 leading-tight">{a.title}</h2>
          <p className="text-slate-500 text-sm mb-7 leading-relaxed">{a.excerpt}</p>
          <div className="space-y-5">
            {a.sections.map((s, i) => (
              <div key={i}>
                <h3 className="font-bold text-slate-900 mb-1.5">{s.h}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-7 pt-5 border-t border-slate-100">
            {a.tags.map(t => (
              <span key={t} className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full border border-brand-100">{t}</span>
            ))}
          </div>
          <div className="mt-6 p-5 bg-slate-900 rounded-2xl text-white">
            <p className="font-bold mb-1 text-sm">Tertarik dengan solusi ini?</p>
            <p className="text-slate-400 text-xs mb-4">Dapatkan penawaran terbaik untuk instalasi di lokasi Anda.</p>
            <Link href="/#contact" onClick={onClose} className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-300">
              Hubungi Sales <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ArticlesPage() {
  const [cat, setCat] = useState('Semua');
  const [open, setOpen] = useState(null);
  const filtered = cat === 'Semua' ? ARTICLES : ARTICLES.filter(a => a.category === cat);

  // Visually-hidden live region — notifies screen readers of filter results
  // WCAG 2.2 SC 4.1.3 — Status Messages
  const liveMessage = `${filtered.length} artikel ditemukan dalam kategori ${cat}.`;

  // ── Article + FAQ JSON-LD for SGE/AI Overviews ─────────────────────────────
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.putraterbaik.com/articles',
        'name': 'Pusat Informasi & Panduan Teknis Sistem Parkir & Keamanan',
        'description': 'Artikel B2B: cara kerja barrier gate, sistem parkir manless RFID, CCTV LPR, Physical Barrier Systems (PBS), dan Crime Prevention Through Environmental Design (CPTED) dari spesialis keamanan Surabaya.',
        'publisher': { '@id': 'https://www.putraterbaik.com/#organization' },
        'inLanguage': 'id-ID',
        'hasPart': ARTICLES.map(a => ({
          '@type': 'Article',
          'headline': a.title,
          'description': a.excerpt,
          'image': `https://www.putraterbaik.com${a.image}`,
          'author': { '@id': 'https://www.putraterbaik.com/#organization' },
          'publisher': { '@id': 'https://www.putraterbaik.com/#organization' },
          'inLanguage': 'id-ID',
          'keywords': a.tags.join(', '),
        }))
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Berapa harga barrier gate di Surabaya?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Harga barrier gate di Surabaya bervariasi: Barrier Gate E10 (entry-level untuk perumahan) mulai dari Rp 6-10 juta, sementara Barrier Gate MX-50 (heavy-duty untuk gedung dan rumah sakit) berkisar Rp 12-20 juta. Harga paket sistem parkir lengkap 2 pintu mulai dari Rp 35 juta. Hubungi CV Putra Terbaik di +62 811-3863-270 untuk penawaran resmi.' } },
          { '@type': 'Question', 'name': 'Apa itu sistem parkir manless?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sistem parkir manless adalah sistem parkir otomatis tanpa operator yang menggunakan teknologi RFID, barcode, atau QR code untuk proses check-in dan check-out kendaraan. Sistem ini menggantikan petugas parkir dengan kamera IP, sensor loop detector, barrier gate otomatis, dan software manajemen berbasis cloud yang memungkinkan pemantauan real-time dari jarak jauh.' } },
          { '@type': 'Question', 'name': 'Apa itu barrier gate dan bagaimana cara kerjanya?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Barrier gate atau palang parkir otomatis adalah sistem Physical Barrier (PBS) yang mengontrol akses kendaraan ke area tertentu. Cara kerjanya: driver menekan tombol atau tap kartu RFID, sinyal dikirim ke kontroler, motor menggerakkan boom (lengan palang) ke atas, kendaraan melintas, vehicle loop detector mendeteksi kendaraan sudah lewat, boom menutup kembali. Komponen utama: motor driver, boom arm aluminium, loop detector, dan kontroler elektronik.' } },
          { '@type': 'Question', 'name': 'Apakah sistem parkir CV Putra Terbaik mendukung QRIS?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ya, sistem parkir yang kami instalasikan mendukung integrasi pembayaran QRIS (Quick Response Code Indonesian Standard) sesuai regulasi Bank Indonesia dan mandat parkir non-tunai Pemkot Surabaya. Selain QRIS, sistem kami juga mendukung e-Toll, transfer bank, dan pembayaran digital lainnya melalui API integrasi pembayaran terbuka.' } },
          { '@type': 'Question', 'name': 'Berapa lama proses instalasi sistem parkir?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Proses instalasi sistem parkir standar (2 pintu, 1 pos operator, 2 kamera) biasanya membutuhkan waktu 3-5 hari kerja termasuk konfigurasi software dan pelatihan operator. Untuk proyek skala besar dengan banyak titik parkir, estimasi dikerjakan setelah survey lapangan. CV Putra Terbaik memberikan garansi instalasi 2 tahun dan dukungan teknis 24/7.' } }
        ]
      }
    ]
  };
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <main className="bg-slate-50 min-h-screen flex flex-col selection:bg-brand-100 selection:text-brand-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <NavbarModern />
      <FloatingWhatsApp />

      {/* HEADER */}
      <div className="bg-white pt-32 pb-14 px-6 border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wider mb-5 uppercase border border-brand-100">
              Knowledge Base
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Pusat Informasi &amp; Teknologi
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Pelajari spesifikasi teknis, cara kerja, dan manfaat solusi keamanan modern untuk membantu Anda mengambil keputusan terbaik.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="bg-white border-b border-slate-100 px-4 py-3 sticky top-[70px] z-30">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-0.5">
          {ALL_CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shrink-0 ${
                cat === c ? 'bg-brand-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >{c} {cat === c && <span className="ml-1 text-white/70 text-xs">({filtered.length})</span>}</button>
          ))}
        </div>
      </div>

      {/* Visually-hidden aria-live region — WCAG 2.2 SC 4.1.3 Status Messages */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {liveMessage}
      </div>

      {/* GRID */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div key={cat} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map(a => <ArticleCard key={a.id} a={a} onOpen={setOpen} />)}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 bg-slate-900 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Butuh Konsultasi Teknis?</h3>
            <p className="text-slate-400">Tim kami siap membantu perencanaan sistem parkir &amp; keamanan Anda.</p>
          </div>
          <Link href="/#contact" className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg">
            Hubungi Sales <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <FooterModern />

      <AnimatePresence>
        {open && <Modal a={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </main>
  );
}