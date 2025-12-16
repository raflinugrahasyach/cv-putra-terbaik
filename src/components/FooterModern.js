'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Instagram, ShoppingBag } from 'lucide-react';

const FooterModern = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t-4 border-brand-600 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* KOLOM 1: Info */}
        <div>
          <div className="flex items-center gap-4 mb-6">
             <div className="relative w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg overflow-hidden">
                 <Image src="/logo_cv.png" alt="Logo CV Putra Terbaik" fill className="object-contain" />
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
            {/* LinkedIn */}
            <SocialLink 
              icon={<Linkedin size={18} />} 
              href="https://www.linkedin.com/company/cv-putra-terbaik" 
              title="LinkedIn CV Putra Terbaik"
            />
            
            {/* WhatsApp */}
            <SocialLink 
              icon={<Phone size={18} />} 
              href="https://wa.me/628113863270" 
              title="Chat WhatsApp"
            />

            {/* Instagram */}
            <SocialLink 
              icon={<Instagram size={18} />} 
              href="https://www.instagram.com/cvputraterbaik" 
              title="Instagram @cvputraterbaik"
            />

            {/* Tokopedia */}
            <SocialLink 
              icon={<ShoppingBag size={18} />} 
              href="https://www.tokopedia.com/unitedportal" 
              title="Tokopedia United Portal"
            />
          </div>

        </div>

        {/* KOLOM 2: Navigasi */}
        <div className="flex flex-col">
          <h4 className="text-white text-lg font-bold mb-6">Navigasi Cepat</h4>
          <ul className="space-y-3">
            <FooterLink href="/#produk" text="Produk & Layanan" />
            <FooterLink href="/projects" text="Galeri Proyek" />
            <FooterLink href="/articles" text="Artikel Informatif" />
            <FooterLink href="/about" text="Tentang Kami" />
          </ul>
        </div>

        {/* KOLOM 3: KATEGORI PRODUK (Lebih Luas & Mengundang Klik) */}
        <div className="flex flex-col">
          <h4 className="text-white text-lg font-bold mb-6">Kategori Produk</h4>
          <ul className="space-y-3">
            <FooterLink href="/#produk" text="Sistem Parkir & Barrier Gate" />
            <FooterLink href="/#produk" text="Access Control & RFID" />
            <FooterLink href="/#produk" text="Vehicle Loop Detector" />
            <FooterLink href="/#produk" text="Kamera CCTV & Keamanan" />
            <FooterLink href="/#produk" text="Sparepart & Aksesoris" />
          </ul>
        </div>

        {/* KOLOM 4: Kontak */}
        <div className="flex flex-col">
          <h4 className="text-white text-lg font-bold mb-6">Kantor Pusat</h4>
          <ul className="space-y-4">
            <ContactItem icon={<MapPin size={20} className="text-brand-500" />}>
              Jl. Manukan Loka 3/14, Surabaya, Jawa Timur
            </ContactItem>
            <ContactItem icon={<Phone size={20} className="text-brand-500" />}>
              +62 811-3863-270
            </ContactItem>
            <ContactItem icon={<Mail size={20} className="text-brand-500" />}>
              cvputraterbaik@gmail.com
            </ContactItem>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
        <p>© {currentYear} CV Putra Terbaik. Melayani 24 Jam.</p>
      </div>
    </footer>
  );
};

// Helper Components (Sama)
const FooterLink = ({ href, text }) => (
  <li><Link href={href} className="flex items-center gap-2 hover:text-brand-500 transition-all group w-fit"><ArrowRight size={14} className="text-slate-600 group-hover:text-brand-500 transition-colors" />{text}</Link></li>
);
const ContactItem = ({ icon, children }) => (
  <li className="flex items-start gap-3"><div className="mt-1 shrink-0">{icon}</div><span>{children}</span></li>
);
const SocialLink = ({ icon, href, title }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title} className="w-9 h-9 bg-slate-900 border border-slate-800 flex items-center justify-center rounded-lg hover:bg-brand-600 hover:text-white hover:border-brand-500 transition-all">{icon}</a>
);

export default FooterModern;