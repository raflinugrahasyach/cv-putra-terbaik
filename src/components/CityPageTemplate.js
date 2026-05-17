// City-level landing page factory — one file used via re-export per city
// Each city gets its own metadata, H1, schema, and content variation

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, CheckCircle, Phone, MapPin } from 'lucide-react';
import NavbarModern from './NavbarModern';
import FooterModern from './FooterModern';
import FloatingWhatsApp from './FloatingWhatsApp';

const CITY_DATA = {
  surabaya: {
    name: 'Surabaya',
    province: 'Jawa Timur',
    slug: 'surabaya',
    h1: 'Sistem Keamanan & Parkir Otomatis Surabaya',
    subheadline: 'Vendor #1 Barrier Gate, Sistem Parkir Manless, dan Access Control untuk Gedung, Rumah Sakit, dan Kawasan Industri Surabaya.',
    description: 'CV Putra Terbaik adalah vendor terpercaya instalasi barrier gate, sistem parkir manless RFID, CCTV LPR, dan access control di Surabaya. Melayani Surabaya Barat, Timur, Utara, Selatan, dan Pusat. Konsultasi gratis, garansi 2 tahun.',
    keywords: ['barrier gate surabaya', 'sistem parkir otomatis surabaya', 'vendor keamanan gedung surabaya', 'instalasi access control surabaya', 'palang parkir surabaya', 'cctv lpr surabaya'],
    areas: ['Surabaya Barat', 'Surabaya Timur', 'Surabaya Utara', 'Surabaya Selatan', 'Surabaya Pusat', 'Tandes', 'Wiyung', 'Rungkut', 'Kenjeran'],
    geo: { lat: -7.2575, lng: 112.7521 },
  },
  gresik: {
    name: 'Gresik',
    province: 'Jawa Timur',
    slug: 'gresik',
    h1: 'Sistem Keamanan & Parkir Otomatis Gresik',
    subheadline: 'Vendor Terpercaya Barrier Gate dan Sistem Parkir Manless untuk Kawasan Industri dan Perumahan Gresik.',
    description: 'CV Putra Terbaik melayani instalasi barrier gate, sistem parkir otomatis RFID, CCTV LPR, dan access control di Gresik dan sekitarnya. Cocok untuk kawasan industri JIIPE, Maspion, dan perumahan cluster Gresik. Konsultasi gratis.',
    keywords: ['barrier gate gresik', 'sistem parkir otomatis gresik', 'vendor keamanan gedung gresik', 'instalasi access control gresik', 'palang parkir gresik kawasan industri'],
    areas: ['Gresik Kota', 'Kebomas', 'Driyorejo', 'Cerme', 'Menganti', 'Manyar', 'JIIPE', 'Maspion Industrial Estate'],
    geo: { lat: -7.1566, lng: 112.6508 },
  },
  sidoarjo: {
    name: 'Sidoarjo',
    province: 'Jawa Timur',
    slug: 'sidoarjo',
    h1: 'Sistem Keamanan & Parkir Otomatis Sidoarjo',
    subheadline: 'Spesialis Barrier Gate dan Sistem Parkir Manless untuk Perumahan, Perkantoran, dan Industri Sidoarjo.',
    description: 'CV Putra Terbaik melayani instalasi barrier gate, sistem parkir manless RFID, CCTV, dan access control di Sidoarjo. Melayani perumahan Waru, Gedangan, BSD, dan kawasan perkantoran serta industri Sidoarjo. Konsultasi gratis.',
    keywords: ['barrier gate sidoarjo', 'sistem parkir otomatis sidoarjo', 'vendor keamanan gedung sidoarjo', 'instalasi palang parkir sidoarjo', 'access control sidoarjo'],
    areas: ['Sidoarjo Kota', 'Waru', 'Gedangan', 'Taman', 'Buduran', 'Candi', 'Porong', 'Tulangan'],
    geo: { lat: -7.4458, lng: 112.7183 },
  },
};

export function CityPage({ city }) {
  const data = CITY_DATA[city];

  const cityJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `https://www.putraterbaik.com/${data.slug}/#localbusiness`,
        'name': `CV Putra Terbaik — ${data.name}`,
        'description': data.description,
        'url': `https://www.putraterbaik.com/${data.slug}`,
        'telephone': '+628113863270',
        'email': 'cvputraterbaik@gmail.com',
        'address': { '@type': 'PostalAddress', 'addressLocality': data.name, 'addressRegion': data.province, 'addressCountry': 'ID' },
        'geo': { '@type': 'GeoCoordinates', 'latitude': data.geo.lat, 'longitude': data.geo.lng },
        'areaServed': data.areas.map(a => ({ '@type': 'City', 'name': a })),
        'parentOrganization': { '@id': 'https://www.putraterbaik.com/#organization' },
        'priceRange': '$$',
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Beranda', 'item': 'https://www.putraterbaik.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Layanan', 'item': 'https://www.putraterbaik.com/#produk' },
          { '@type': 'ListItem', 'position': 3, 'name': `Layanan ${data.name}`, 'item': `https://www.putraterbaik.com/${data.slug}` },
        ]
      }
    ]
  };

  return (
    <main className="bg-white min-h-screen">
      <Script id={`ld-city-${city}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }} strategy="beforeInteractive" />
      <NavbarModern />
      <FloatingWhatsApp />

      {/* HERO */}
      <section className="relative bg-slate-900 pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/assets/Homepage/hero_rumah.webp" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-brand-600/90 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">Melayani Area {data.name}</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">{data.h1}</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">{data.subheadline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/628113863270" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              <Phone size={18} /> Konsultasi Gratis
            </a>
            <Link href="/" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-all flex items-center justify-center gap-2">
              Lihat Produk <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* AREA COVERAGE */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">Area Layanan di {data.name}</h2>
          <p className="text-slate-600 text-center mb-10">Tim teknisi kami siap survey dan instalasi di seluruh wilayah {data.name}.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.areas.map((area) => (
              <div key={area} className="flex items-center gap-2 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <MapPin size={16} className="text-brand-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">Layanan Kami di {data.name}</h2>
          <p className="text-slate-600 text-center mb-10">Solusi sistem keamanan dan parkir terintegrasi untuk semua segmen bisnis.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Barrier Gate & Palang Parkir', desc: 'Instalasi barrier gate seri MX-50 dan E10 untuk semua jenis lokasi.' },
              { title: 'Sistem Parkir Manless RFID', desc: 'Parkir otomatis niroperator berbasis RFID dan cloud dashboard real-time.' },
              { title: 'CCTV & IP Camera LPR', desc: 'Kamera pengintai dan License Plate Recognition untuk dokumentasi kendaraan.' },
              { title: 'Access Control & Door Lock', desc: 'Sistem kontrol akses pintu dengan kartu RFID, PIN, dan sidik jari.' },
            ].map((s) => (
              <div key={s.title} className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all">
                <CheckCircle size={20} className="text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-brand-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Butuh Sistem Keamanan di {data.name}?</h2>
          <p className="text-white/80 mb-8">Konsultasi gratis dengan tim ahli kami. Survey lokasi tanpa biaya.</p>
          <a href="https://wa.me/628113863270" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg">
            <Phone size={18} /> Hubungi Kami Sekarang
          </a>
        </div>
      </section>

      <FooterModern />
    </main>
  );
}

export { CITY_DATA };
