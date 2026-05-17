'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/628113863270"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Hubungi Kami via WhatsApp"
    >
      {/* Container Tombol */}
      <div className="flex items-center gap-3 bg-white text-slate-800 px-4 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:-translate-y-1">
        
        {/* Icon WA Official Color */}
        <div className="relative w-8 h-8 flex items-center justify-center bg-[#25D366] rounded-full text-white">
           <MessageCircle size={20} fill="white" className="absolute" />
           {/* Ping Animation — green dot = online/active status */}
           <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
           </span>
        </div>

        {/* Teks Profesional */}
        <div className="flex flex-col items-start leading-none">
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Butuh Bantuan?</span>
           <span className="text-sm font-bold text-slate-900 group-hover:text-[#25D366] transition-colors">Chat Support</span>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;