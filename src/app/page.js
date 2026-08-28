// SERVER COMPONENT — No 'use client' directive
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import NavbarModern from '../components/NavbarModern';
import AuroraBackground from '../components/AuroraBackground';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ProductSearch from '../components/ProductSearch.client';
import TrustedBy from '../components/TrustedBy';
import ScrollReveal from '../components/ScrollReveal';
import FooterModern from '../components/FooterModern';
import FadeIn from '../components/FadeIn';
import clientsData from '../data/clients.json';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm.client';
import SolutionBuilder from '../components/SolutionBuilder.client';

export const metadata = {
  title: 'CV Putra Terbaik — Barrier Gate, Sistem Parkir Manless & Access Control Surabaya',
  description: 'Kontraktor terpercaya instalasi Barrier Gate, Sistem Parkir Manless RFID, CCTV LPR, dan Access Control untuk rumah sakit, perumahan, dan kawasan industri di Surabaya & Jawa Timur. Konsultasi gratis, garansi 2 tahun.',
  alternates: { canonical: 'https://www.putraterbaik.com' },
};

// ISR: serve from cache instantly, revalidate in background every 7 days
export const revalidate = 604800;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
      '@id': 'https://www.putraterbaik.com/#organization',
      'name': 'CV Putra Terbaik',
      'legalName': 'CV Putra Terbaik',
      'description': 'Spesialis instalasi sistem parkir otomatis, barrier gate, access control, dan Physical Barrier Systems (PBS) berbasis CPTED untuk gedung, rumah sakit, dan kawasan industri di Surabaya dan Jawa Timur.',
      'url': 'https://www.putraterbaik.com',
      'logo': 'https://www.putraterbaik.com/logo_cv.webp',
      'telephone': '+628113863270',
      'email': 'cvputraterbaik@gmail.com',
      'foundingDate': '2019',
      'address': { '@type': 'PostalAddress', 'streetAddress': 'Jl. Manukan Loka No.14', 'addressLocality': 'Tandes, Surabaya', 'addressRegion': 'Jawa Timur', 'postalCode': '60184', 'addressCountry': 'ID' },
      'geo': { '@type': 'GeoCoordinates', 'latitude': -7.246327, 'longitude': 112.6719893 },
      'areaServed': [{ '@type': 'City', 'name': 'Surabaya' }, { '@type': 'State', 'name': 'Jawa Timur' }],
      'openingHoursSpecification': [
        { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday'], 'opens': '08:00', 'closes': '17:00' },
        { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Saturday'], 'opens': '08:00', 'closes': '14:00' }
      ],
      'contactPoint': { '@type': 'ContactPoint', 'telephone': '+628113863270', 'contactType': 'sales', 'areaServed': 'ID', 'availableLanguage': ['Indonesian'] },
      'priceRange': '$$',
      'paymentAccepted': 'Cash, Transfer Bank, QRIS',
      'currenciesAccepted': 'IDR',
      'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '5', 'reviewCount': '3', 'bestRating': '5' },
      'review': [
        { '@type': 'Review', 'author': { '@type': 'Person', 'name': 'Bpk. Hartono' }, 'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' }, 'reviewBody': 'Sistem parkir dari Putra Terbaik sangat stabil. Sudah 3 tahun berjalan tanpa kendala berarti. After sales servicenya juara.', 'itemReviewed': { '@type': 'LocalBusiness', '@id': 'https://www.putraterbaik.com/#organization' } },
        { '@type': 'Review', 'author': { '@type': 'Person', 'name': 'Ibu Sarah' }, 'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' }, 'reviewBody': 'Respon teknisi sangat cepat. Pemasangan barrier gate rapi dan softwarenya mudah digunakan oleh operator kami.', 'itemReviewed': { '@type': 'LocalBusiness', '@id': 'https://www.putraterbaik.com/#organization' } },
        { '@type': 'Review', 'author': { '@type': 'Organization', 'name': 'PT Pertamina Perak' }, 'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' }, 'reviewBody': 'Solusi custom yang ditawarkan sangat membantu efisiensi traffic di area depo. Sangat merekomendasikan CV Putra Terbaik.', 'itemReviewed': { '@type': 'LocalBusiness', '@id': 'https://www.putraterbaik.com/#organization' } }
      ],
      'sameAs': ['https://www.instagram.com/cvputraterbaik', 'https://www.tokopedia.com/cvputraterbaik']
    },
    { '@type': 'WebSite', '@id': 'https://www.putraterbaik.com/#website', 'url': 'https://www.putraterbaik.com', 'name': 'CV Putra Terbaik', 'inLanguage': 'id-ID', 'publisher': { '@id': 'https://www.putraterbaik.com/#organization' } }
  ]
};

export default function Homepage() {
  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-brand-100 selection:text-brand-900 bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavbarModern />
      <AuroraBackground />
      <FloatingWhatsApp />

      {/* HERO */}
      <section className="relative pt-18 lg:pt-26 pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
        <div className="order-1 lg:order-2 flex-1 relative w-full min-h-[260px] h-[280px] sm:h-[380px] lg:h-[560px] xl:h-[620px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 via-accent-400/15 to-brand-100/30 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-white/40 to-transparent rounded-[50%] blur-2xl opacity-50"></div>
          <Image src="/assets/Homepage/hero_rumah.webp" alt="Instalasi sistem parkir otomatis dan barrier gate di perumahan Surabaya oleh CV Putra Terbaik — Physical Barrier Systems berbasis CPTED" fill sizes="(max-width: 640px) 95vw, (max-width: 1024px) 60vw, 50vw" className="object-contain object-center drop-shadow-2xl animate-float" priority />
        </div>
        <FadeIn className="order-2 lg:order-1 flex-1 text-center lg:text-left z-10" duration={0.8}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-600 text-sm font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span></span>
            Solusi Keamanan Terpercaya #1
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Amankan Aset,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">Tingkatkan Efisiensi.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">Mitra terpercaya penyedia sistem parkir otomatis, barrier gate, dan akses kontrol modern untuk bisnis Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/#produk" className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">Lihat Produk <ArrowRight size={20} /></Link>
            <Link href="/#contact" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-bold transition-all hover:-translate-y-1 flex items-center justify-center gap-2">Hubungi Sales</Link>
          </div>
        </FadeIn>
      </section>

      <TrustedBy />

      {/* TENTANG KAMI */}
      <section id="tentang" className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white order-2 lg:order-1">
                <Image src="/assets/Homepage/about-us-pro.webp" alt="Tim teknisi CV Putra Terbaik sedang melakukan instalasi sistem parkir otomatis dan barrier gate di lapangan" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Kenalin, Solusi Keamanan Terpercaya untuk Bisnis Anda</h2>
                <div className="w-20 h-1.5 bg-brand-500 rounded-full mb-8"></div>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify">
                  <p>CV Putra Terbaik adalah mitra terpercaya dalam menyediakan solusi sistem keamanan modern dan efisien. Dengan teknologi terkini, layanan profesional, dan komitmen tinggi, kami membantu bisnis Anda meningkatkan keamanan, produktivitas, dan efisiensi operasional.</p>
                  <p>Layanan kami meliputi pengadaan sistem palang parkir otomatis, barrier gate seri MX, seri E, paket manless sistem ticket, sistem RFID reader, vehicle loop detector, software custom, pos parkir, pos parkir single, box manless dengan touchless button, QR code scanner, capture foto dengan IP camera, automatic door closer, automatic magnetic door lock, sliding gate yang sudah dipercaya oleh berbagai instansi dan korporasi di seluruh wilayah Indonesia.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* B2B CUSTOM RFQ / SOLUTION BUILDER */}
      <SolutionBuilder />

      {/* PRODUK — Client Island */}
      <ProductSearch />

      {/* DAFTAR KLIEN */}
      <section id="proyek" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">DAFTAR KLIEN KAMI</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Kami bangga telah dipercaya oleh berbagai instansi di seluruh Indonesia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {clientsData.slice(0, 8).map((proj, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-brand-600 font-bold border border-slate-100 shadow-sm">{idx + 1}</div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded-full">Selesai</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight">{proj.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1"><MapPin size={14} /> {proj.loc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-xl font-bold mb-8 border-b border-slate-700 pb-4">Daftar Klien Lainnya</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 text-sm text-slate-300">
              {clientsData.slice(8).map((proj, idx) => (
                <div key={idx} className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                  <CheckCircle2 size={14} className="text-brand-500 shrink-0" /><span>{proj.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/projects" className="inline-flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all">Lihat Galeri Foto & Video <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — Social Proof before CTA */}
      <Testimonials />

      {/* HUBUNGI KAMI */}
      <section id="contact" className="py-24 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Mulai Konsultasi</h2>
            <p className="text-slate-600 mb-12 text-lg">Hubungi kami untuk penawaran harga terbaik atau sekadar tanya jawab.</p>
            <div className="space-y-4 mb-10">
              <a href="https://maps.app.goo.gl/hAErKbQeShTFmMyU6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors"><MapPin size={24} /></div>
                <div><p className="text-sm text-slate-500">Alamat Kantor</p><p className="text-lg font-bold text-slate-900">CV Putra Terbaik</p></div>
              </a>
              <a href="https://wa.me/628113863270" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors"><Phone size={24} /></div>
                <div><p className="text-sm text-slate-500">WhatsApp / Telepon</p><p className="text-lg font-bold text-slate-900">+62 811-3863-270</p></div>
              </a>
              <a href="mailto:cvputraterbaik@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors"><Mail size={24} /></div>
                <div><p className="text-sm text-slate-500">Email</p><p className="text-lg font-bold text-slate-900">cvputraterbaik@gmail.com</p></div>
              </a>
            </div>
            <a href="https://maps.app.goo.gl/hAErKbQeShTFmMyU6" target="_blank" rel="noopener noreferrer" className="block h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200 group relative">
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors z-10 flex items-center justify-center">
                <span className="bg-white text-brand-600 px-4 py-2 rounded-full font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Buka di Google Maps</span>
              </div>
              <iframe className="pointer-events-none" title="Lokasi Kantor CV Putra Terbaik" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.962772592576!2d112.6719893!3d-7.246327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ffb739772c63%3A0x69661570ee61c6b!2sJl.%20Manukan%20Loka%20No.14%2C%20Banjar%20Sugihan%2C%20Kec.%20Tandes%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060184!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </a>
          </div>
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 h-fit">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Kirim Pesan</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <FooterModern />
    </main>
  );
}