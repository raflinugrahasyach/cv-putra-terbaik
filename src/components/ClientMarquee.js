'use client';
import React from 'react';

// Ambil 5-6 Klien Terbesar saja untuk dipajang di atas
const topClients = [
  "PT PERTAMINA", "PLN (PERSERO)", "RSUD DR. SUTOMO", 
  "ANGKASA PURA", "WIKA GEDUNG", "PELINDO III"
];

const TrustedBy = () => {
  return (
    <section className="py-8 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          Dipercaya oleh Instansi & Perusahaan Terbaik
        </p>
        
        {/* Tampilan Grid Diam (Static) - Lebih Berwibawa */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-70">
          {topClients.map((client, index) => (
            <h3 
              key={index} 
              className="text-xl lg:text-2xl font-bold text-slate-400 hover:text-brand-600 transition-colors cursor-default"
            >
              {client}
            </h3>
            // Nanti jika ada logo gambar, ganti <h3> di atas dengan <Image src="..." />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;