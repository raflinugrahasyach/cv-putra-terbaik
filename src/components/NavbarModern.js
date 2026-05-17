'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function NavbarModern() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = (!isHomePage || isScrolled)
    ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
    : 'bg-transparent py-5';

  const textColor = 'text-slate-900';

  // Handler kustom untuk memastikan semua navigasi punya efek "smooth scroll"
  // sesuai ekspektasi:
  // 1. Jika anchor di page yang sama -> scroll ke anchor
  // 2. Jika pindah ke page yg sama -> scroll ke atas
  // 3. Jika pindah page -> pindah dulu (tanpa mereset scroll), lalu smooth scroll ke atas
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Kasus 1: Anchor link (misal: /#produk)
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (isHomePage) {
        // Sudah di homepage — scroll langsung, update hash dengan bersih
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash tanpa push history baru (menghindari double-hash)
          history.replaceState(null, '', `#${targetId}`);
        }
      } else {
        // Di halaman lain — navigate ke homepage + anchor
        router.push(href);
      }
      return;
    }

    // Kasus 2: Navigasi ke page yang sama persis (misal di /projects klik /projects)
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Kasus 3: Navigasi ke page lain (Cross-page navigation)
    // - Pindah route dengan scroll: false agar posisi y saat ini tetap sama sesaat setelah pindah
    // - Beri delay kecil lalu trigger smooth scroll ke atas
    router.push(href, { scroll: false });
    
    // Memberikan waktu Next.js merender halaman baru, lalu scroll ke atas
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const NAV_ITEMS = [
    { name: 'Produk', href: '/#produk' },
    { name: 'Proyek', href: '/projects' },
    { name: 'Tentang', href: '/about' },
    { name: 'Artikel', href: '/articles' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <Link href="/" onClick={(e) => handleNavClick(e, '/')} scroll={false} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-md border border-slate-100">
             <Image 
               src="/logo_cv.webp" 
               alt="Logo CV Putra Terbaik" 
               fill
               sizes="48px"
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
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium hover:text-brand-600 transition-colors relative group cursor-pointer ${
                  isActive ? 'text-brand-600 font-bold' : 'text-slate-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-600 transition-all group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
              </a>
            )
          })}
          
          <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="cursor-pointer bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-500/30 flex items-center gap-2 group">
            Hubungi Kami
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 md:hidden flex flex-col gap-4 animate-fade-in-down">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-lg font-medium text-slate-700 hover:text-brand-600 cursor-pointer"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
          <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="cursor-pointer bg-brand-600 text-white py-3 rounded-lg text-center font-bold">
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}