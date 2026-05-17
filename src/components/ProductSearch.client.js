'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MessageCircle } from 'lucide-react';
import ProductCarousel from './ProductCarousel';
import ScrollReveal from './ScrollReveal';
import productsData from '../data/products.json';

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="produk" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">PRODUK KAMI</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Solusi keamanan terbaik dengan teknologi mutakhir untuk kebutuhan Anda.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Cari produk (misal: Barrier Gate)..."
              className="w-full pl-12 pr-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Cari produk sistem keamanan"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <ScrollReveal key={item.id}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  {item.images && item.images.length > 1 ? (
                    <ProductCarousel
                      images={item.images}
                      alts={item.images.map((_, i) => `${item.title} — foto ${i + 1}`)}
                      interval={4000}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={`${item.title} — produk sistem keamanan CV Putra Terbaik Surabaya`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={`https://wa.me/628113863270?text=Halo%20Putra%20Terbaik,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 bg-brand-600 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-700 transition-colors"
                    >
                      <MessageCircle size={18} /> Tanya Produk
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-slate-500 mt-8">Produk tidak ditemukan.</p>
        )}
      </div>
    </section>
  );
}
