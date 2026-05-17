'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Instagram, ShoppingBag } from 'lucide-react';

const FooterModern = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  // Menyalin logika navigasi yang sama dari NavbarModern
  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (isHomePage) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', `#${targetId}`);
        }
      } else {
        router.push(href);
      }
      return;
    }

    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    router.push(href, { scroll: false });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t-4 border-brand-600 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* KOLOM 1: Info */}
        <div>
          <div className="flex items-center gap-4 mb-6">
             <div className="relative w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg overflow-hidden">
                 <Image src="/logo_cv.webp" alt="Logo CV Putra Terbaik" fill sizes="56px" className="object-contain" />
             </div>
             <div className="flex flex-col">
               <span className="text-xl font-bold text-white leading-none">CV PUTRA</span>
               <span className="text-xl font-bold text-brand-500 leading-none">TERBAIK</span>
             </div>
          </div>
          <p className="leading-relaxed mb-6 pr-4 text-sm">
            Solusi sistem keamanan dan parkir otomatis modern terpercaya di Indonesia.
          </p>
          <div className="flex gap-3">
            <SocialLink icon={<Linkedin size={18} />} href="https://www.linkedin.com/company/cv-putra-terbaik" title="LinkedIn CV Putra Terbaik" />
            <SocialLink icon={<Phone size={18} />} href="https://wa.me/628113863270" title="Chat WhatsApp" />
            <SocialLink icon={<Instagram size={18} />} href="https://www.instagram.com/cvputraterbaik" title="Instagram @cvputraterbaik" />
            <SocialLink icon={<ShoppingBag size={18} />} href="https://www.tokopedia.com/unitedportal" title="Tokopedia United Portal" />
          </div>
        </div>

        {/* KOLOM 2: Navigasi */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
             <span className="w-8 h-1 bg-brand-600 rounded-full"></span> Navigasi Cepat
          </h4>
          <ul className="space-y-3">
            <FooterLink href="/#produk" onClick={(e) => handleNavClick(e, '/#produk')}>Produk & Layanan</FooterLink>
            <FooterLink href="/projects" onClick={(e) => handleNavClick(e, '/projects')}>Galeri Proyek</FooterLink>
            <FooterLink href="/articles" onClick={(e) => handleNavClick(e, '/articles')}>Artikel Informatif</FooterLink>
            <FooterLink href="/about" onClick={(e) => handleNavClick(e, '/about')}>Tentang Kami</FooterLink>
          </ul>
        </div>

        {/* KOLOM 3: Kategori */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-brand-600 rounded-full"></span> Kategori Produk
          </h4>
          <ul className="space-y-3">
            <FooterLink href="/#produk" onClick={(e) => handleNavClick(e, '/#produk')}>Sistem Parkir & Barrier Gate</FooterLink>
            <FooterLink href="/#produk" onClick={(e) => handleNavClick(e, '/#produk')}>Access Control & RFID</FooterLink>
            <FooterLink href="/#produk" onClick={(e) => handleNavClick(e, '/#produk')}>Vehicle Loop Detector</FooterLink>
            <FooterLink href="/#produk" onClick={(e) => handleNavClick(e, '/#produk')}>Kamera CCTV & Keamanan</FooterLink>
            <FooterLink href="/#produk" onClick={(e) => handleNavClick(e, '/#produk')}>Sparepart & Aksesoris</FooterLink>
          </ul>
        </div>

        {/* KOLOM 4: Kontak */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-brand-600 rounded-full"></span> Kantor Pusat
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="https://maps.app.goo.gl/hAErKbQeShTFmMyU6" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 hover:text-white transition-colors cursor-pointer">
                <MapPin size={20} className="text-slate-600 shrink-0 mt-1 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                <span className="leading-relaxed">Jl. Manukan Loka 3/14, Surabaya, Jawa Timur</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/628113863270" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone size={20} className="text-slate-600 shrink-0 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                <span>+62 811-3863-270</span>
              </a>
            </li>
            <li>
              <a href="mailto:cvputraterbaik@gmail.com" className="group flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail size={20} className="text-slate-600 shrink-0 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                <span>cvputraterbaik@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {currentYear} CV Putra Terbaik. Melayani 24 Jam.
        </p>
        <p className="text-sm flex gap-6">
          <Link href="/surabaya" className="hover:text-white transition-colors">Cabang Surabaya</Link>
          <Link href="/gresik" className="hover:text-white transition-colors">Cabang Gresik</Link>
          <Link href="/sidoarjo" className="hover:text-white transition-colors">Cabang Sidoarjo</Link>
        </p>
      </div>
    </footer>
  );
};

/* --- Komponen Pembantu --- */

function FooterLink({ href, children, onClick }) {
  return (
    <li>
      <a 
        href={href} 
        onClick={onClick}
        className="group flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowRight size={14} className="text-slate-600 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
        {children}
      </a>
    </li>
  );
}

function SocialLink({ icon, href, title }) {
  return (
    <a 
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer" 
      className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-brand-500/20"
    >
      {icon}
    </a>
  );
}

export default FooterModern;