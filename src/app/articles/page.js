'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // <--- JANGAN LUPA IMPORT INI
import NavbarModern from '../../components/NavbarModern';
import FooterModern from '../../components/FooterModern';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { 
  ShieldCheck, BarChart3, Zap, Clock, Building2, Hospital, ShoppingCart, 
  Plane, Home, Factory, ArrowRight, Settings2, PowerOff, Activity, Move, 
  TrafficCone, ParkingCircle, DoorOpen, ChevronRight
} from 'lucide-react';

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState('barrier-gate');

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans selection:bg-brand-100 selection:text-brand-900">
      <NavbarModern />
      <FloatingWhatsApp />

      {/* HEADER SECTION (Sekarang sudah ada Animasinya) */}
      <div className="bg-slate-50 pt-32 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
           {/* Bungkus dengan motion.div */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             <span className="inline-block py-1.5 px-4 rounded-full bg-green-100 text-green-600 text-xs font-bold tracking-wider mb-6 uppercase">
               Knowledge Base
             </span>
             <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
               Pusat Informasi & Teknologi
             </h1>
             <p className="text-lg text-slate-600 leading-relaxed">
               Pelajari spesifikasi teknis, cara kerja, dan manfaat solusi keamanan modern 
               untuk membantu Anda mengambil keputusan terbaik.
             </p>
           </motion.div>
        </div>
      </div>

      {/* LAYOUT 2 KOLOM (SIDEBAR + CONTENT) */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* SIDEBAR NAVIGATION (STICKY) */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-32">
            <h3 className="font-bold text-slate-900 mb-4 px-4 uppercase text-xs tracking-widest">Daftar Topik</h3>
            <div className="flex flex-col space-y-1 border-l-2 border-slate-100">
              <button 
                onClick={() => setActiveTab('barrier-gate')}
                className={`text-left px-4 py-3 text-sm font-medium border-l-2 -ml-[2px] transition-all hover:bg-slate-50 ${
                  activeTab === 'barrier-gate' 
                  ? 'border-brand-600 text-brand-600 bg-brand-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Barrier Gate System
              </button>
              <button 
                onClick={() => setActiveTab('vehicle-loop-detector')}
                className={`text-left px-4 py-3 text-sm font-medium border-l-2 -ml-[2px] transition-all hover:bg-slate-50 ${
                  activeTab === 'vehicle-loop-detector' 
                  ? 'border-brand-600 text-brand-600 bg-brand-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Vehicle Loop Detector
              </button>
            </div>

            {/* Banner Kecil di Sidebar */}
            <div className="mt-10 bg-slate-900 text-white p-6 rounded-2xl">
              <p className="text-sm font-bold mb-2">Butuh konsultasi teknis?</p>
              <p className="text-xs text-slate-400 mb-4">Tim kami siap membantu perencanaan sistem parkir Anda.</p>
              <Link href="/#contact" className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1">
                Hubungi Kami <ArrowRight size={12}/>
              </Link>
            </div>
          </aside>

          {/* MOBILE TABS (Hanya muncul di HP) */}
          <div className="lg:hidden col-span-1 flex overflow-x-auto gap-4 pb-4 border-b border-slate-100">
             <button 
                onClick={() => setActiveTab('barrier-gate')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold ${activeTab === 'barrier-gate' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'}`}
             >
               Barrier Gate
             </button>
             <button 
                onClick={() => setActiveTab('vehicle-loop-detector')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold ${activeTab === 'vehicle-loop-detector' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'}`}
             >
               Vehicle Loop Detector
             </button>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-3 min-h-[60vh]">
            
            {/* === KONTEN 1: BARRIER GATE === */}
            {activeTab === 'barrier-gate' && (
              <motion.article 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
              >
                <div className="mb-10">
                   <span className="text-brand-600 font-bold text-sm mb-2 block">PRODUK UNGGULAN</span>
                   <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                     Barrier Gate: Solusi Keamanan Modern
                   </h2>
                   <div className="relative w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-8">
                      <Image src="/assets/Homepage/products/barrier_gate_e10.webp" alt="Barrier Gate" fill className="object-cover" />
                   </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <h3 className="text-xl font-bold text-slate-900">Apa itu Barrier Gate?</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Barrier gate atau palang parkir otomatis adalah sistem pembatas akses kendaraan yang berfungsi sebagai kontrol untuk mengatur keluar masuknya kendaraan di area tertentu. Dilengkapi dengan berbagai fitur canggih, sistem ini mampu meningkatkan keamanan dan efisiensi pengelolaan lalu lintas.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Jenis-Jenis Barrier Gate</h3>
                  <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
                     <TechCard title="Automatic Barrier Gate" desc="Otomatis via RFID/Tiket. Cocok untuk traffic tinggi." />
                     <TechCard title="Swing Barrier Gate" desc="Mekanisme ayun untuk lobi gedung eksklusif." />
                     <TechCard title="Semi-Automatic" desc="Fleksibel dengan kontrol operator manual." />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Lokasi Pemasangan Ideal</h3>
                  <div className="flex flex-wrap gap-2 not-prose mb-8">
                    {["Gedung Perkantoran", "Rumah Sakit", "Mall", "Bandara", "Apartemen", "Industri"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-md font-medium">{tag}</span>
                    ))}
                  </div>

                  <div className="bg-brand-50 border-l-4 border-brand-500 p-6 rounded-r-xl not-prose my-8">
                     <h4 className="font-bold text-slate-900 mb-2">Manfaat Utama</h4>
                     <ul className="space-y-2">
                        <li className="flex gap-2 text-slate-700 text-sm"><ShieldCheck size={18} className="text-brand-600"/> Keamanan Terjamin</li>
                        <li className="flex gap-2 text-slate-700 text-sm"><Clock size={18} className="text-brand-600"/> Efisiensi Waktu</li>
                        <li className="flex gap-2 text-slate-700 text-sm"><BarChart3 size={18} className="text-brand-600"/> Data Lalu Lintas Akurat</li>
                     </ul>
                  </div>
                </div>
              </motion.article>
            )}

            {/* === KONTEN 2: VEHICLE LOOP === */}
            {activeTab === 'vehicle-loop-detector' && (
              <motion.article 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
              >
                <div className="mb-10">
                   <span className="text-brand-600 font-bold text-sm mb-2 block">TEKNOLOGI SENSOR</span>
                   <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                     Vehicle Loop Detector Technology
                   </h2>
                   <div className="relative w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg mb-8">
                      <Image src="/assets/Homepage/products/vehicle_loop_detector.webp" alt="Vehicle Loop" fill className="object-cover" />
                   </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <h3 className="text-xl font-bold text-slate-900">Apa itu Vehicle Loop Detector?</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Alat elektronik cerdas untuk mendeteksi keberadaan kendaraan berdasarkan perubahan induktansi magnetik. Alat ini ditanam di bawah permukaan jalan dan menjadi "otak" dari sistem palang otomatis untuk mencegah palang tertutup saat masih ada kendaraan di bawahnya.
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Varian Teknologi</h3>
                  <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
                     <TechCard title="Single Channel" desc="1 Saluran deteksi. Aplikasi sederhana." />
                     <TechCard title="Dual Channel" desc="2 Saluran. Bisa deteksi arah & kecepatan." />
                     <TechCard title="High Frequency" desc="Sensitif tinggi untuk kendaraan kecil/motor." />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Fungsi Integrasi</h3>
                  <div className="grid grid-cols-2 gap-4 not-prose">
                    <div className="p-4 border border-slate-200 rounded-xl">
                      <TrafficCone className="text-brand-500 mb-2" size={24}/>
                      <h5 className="font-bold text-sm">Traffic Light</h5>
                      <p className="text-xs text-slate-500">Mengatur lampu merah otomatis.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-xl">
                      <ParkingCircle className="text-brand-500 mb-2" size={24}/>
                      <h5 className="font-bold text-sm">Slot Counter</h5>
                      <p className="text-xs text-slate-500">Menghitung sisa parkir.</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* GLOBAL CTA DI BAWAH ARTIKEL */}
            <div className="mt-16 pt-8 border-t border-slate-200">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 p-8 rounded-2xl">
                 <div>
                   <h4 className="text-xl font-bold text-slate-900 mb-1">Tertarik dengan teknologi ini?</h4>
                   <p className="text-slate-600 text-sm">Dapatkan penawaran harga untuk instalasi di lokasi Anda.</p>
                 </div>
                 <Link href="/#contact" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-600 transition-colors">
                   Hubungi Sales
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </div>

      <FooterModern />
    </main>
  );
}

// Komponen Kecil
const TechCard = ({ title, desc }) => (
  <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-300 transition-colors shadow-sm">
    <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
    <p className="text-sm text-slate-600">{desc}</p>
  </div>
);