'use client';
import React from 'react';
import Image from 'next/image';

const topClients = [
  { name: "PT Pertamina",   logo: "/assets/Clients/logo_pertamina.png" },
  { name: "PLN (Persero)",  logo: "/assets/Clients/logo_pln.png" },
  { name: "RSUD Dr. Soetomo", logo: "/assets/Clients/logo_rs_soetomo.webp" },
  { name: "Angkasa Pura",   logo: "/assets/Clients/logo_angkasa_pura.jpg" },
  { name: "WIKA Gedung",    logo: "/assets/Clients/logo_wika.png" },
  { name: "Pelindo III",    logo: "/assets/Clients/logo_pelindo3.png" },
];

const TrustedBy = () => {
  return (
    <section className="py-10 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Dipercaya oleh Instansi &amp; Perusahaan Terbaik
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 lg:gap-x-16">
          {topClients.map((client, index) => (
            <div
              key={index}
              className="relative w-28 h-14 lg:w-32 lg:h-16 group transition-all duration-300"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                sizes="(max-width: 768px) 100px, 150px"
                loading="lazy"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;