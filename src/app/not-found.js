'use client';

import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';
import NavbarModern from '../components/NavbarModern';
import FooterModern from '../components/FooterModern';

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <NavbarModern />
      
      <div className="flex-grow flex items-center justify-center px-6 text-center pt-32 pb-20">
        <div className="max-w-md">
          <div className="w-24 h-24 bg-red-100 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce">
            <AlertTriangle size={48} />
          </div>
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari mungkin sudah dihapus, dipindahkan, atau alamat URL salah ketik.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg"
          >
            <Home size={20} /> Kembali ke Homepage
          </Link>
        </div>
      </div>

      <FooterModern />
    </div>
  );
}