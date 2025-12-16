'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Tambah hook ini
import { Menu, X, ArrowRight } from 'lucide-react';

export default function NavbarModern() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Cek kita sedang di halaman mana

  // Cek apakah ini Homepage?
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LOGIKA STYLE NAVBAR:
  // Kalau bukan HomePage, ATAU sudah di-scroll -> Pakai Background Putih (Solid)
  // Kalau HomePage DAN belum scroll -> Pakai Transparan
  const navClasses = (!isHomePage || isScrolled)
    ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' // Solid Style
    : 'bg-transparent py-5'; // Transparent Style

  // LOGIKA WARNA TEKS:
  // Kalau background putih -> Teks Gelap
  // Kalau background transparan (di Home) -> Teks Gelap juga (karena bg Home cerah)
  // Jadi kita buat konsisten gelap saja agar aman, kecuali mau style khusus.
  const textColor = 'text-slate-900';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-md border border-slate-100">
             <Image 
               src="/logo_cv.png" 
               alt="Logo CV Putra Terbaik" 
               fill
               className="object-contain"
             />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg lg:text-xl tracking-tight leading-none transition-colors ${textColor}`}>
              CV PUTRA <span className="text-brand-600">TERBAIK</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wider">SOLUSI KEAMANAN TERPERCAYA</span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Produk', href: '/#produk' },
            { name: 'Proyek', href: '/projects' },
            { name: 'Tentang', href: '/about' },
            { name: 'Artikel', href: '/articles' },
          ].map((item) => {
            // Cek apakah link ini aktif
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`text-sm font-medium hover:text-brand-600 transition-colors relative group ${
                  isActive ? 'text-brand-600 font-bold' : 'text-slate-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-600 transition-all group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
              </Link>
            )
          })}
          
          <Link href="/#contact" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-500/30 flex items-center gap-2 group">
            Hubungi Kami
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 md:hidden flex flex-col gap-4 animate-fade-in-down">
          {[
            { name: 'Produk', href: '/#produk' },
            { name: 'Proyek', href: '/projects' },
            { name: 'Tentang', href: '/about' },
            { name: 'Artikel', href: '/articles' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-lg font-medium text-slate-700 hover:text-brand-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/#contact" className="bg-brand-600 text-white py-3 rounded-lg text-center font-bold">
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}