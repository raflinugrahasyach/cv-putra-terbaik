'use client';

import React, { useState } from 'react';
import NavbarModern from '../../components/NavbarModern';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

export default function ArticlesClient() {
  const [activeTab, setActiveTab] = useState('umum');

  return (
    <main className="bg-white min-h-screen">
      <NavbarModern />
      <FloatingWhatsApp />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
         <h1 className="text-4xl font-bold text-slate-900 mb-4">Artikel & Berita</h1>
         <p className="text-slate-600 mb-12">Informasi terbaru seputar teknologi sistem parkir dan keamanan.</p>

         <div className="p-12 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-500 italic">Belum ada artikel yang dipublikasikan saat ini.</p>
         </div>
      </div>
      
      <Footer />
    </main>
  );
}