'use client';
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Bpk. Hartono",
    role: "Pengelola Puri Safira",
    text: "Sistem parkir dari Putra Terbaik sangat stabil. Sudah 3 tahun berjalan tanpa kendala berarti. After sales servicenya juara."
  },
  {
    name: "Ibu Sarah",
    role: "Manajemen RSUD",
    text: "Respon teknisi sangat cepat. Pemasangan barrier gate rapi dan softwarenya mudah digunakan oleh operator kami."
  },
  {
    name: "PT Pertamina Perak",
    role: "Divisi Keamanan",
    text: "Solusi custom yang ditawarkan sangat membantu efisiensi traffic di area depo. Sangat merekomendasikan CV Putra Terbaik."
  }
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {testimonials.map((testi, idx) => (
        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
          <Quote className="absolute top-6 right-6 text-slate-100 group-hover:text-brand-100 transition-colors" size={48} />
          
          <div className="flex gap-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={18} className="fill-accent-400 text-accent-400" />
            ))}
          </div>
          
          <p className="text-slate-600 italic mb-6 leading-relaxed relative z-10">
            "{testi.text}"
          </p>
          
          <div className="border-t border-slate-100 pt-4">
            <h4 className="font-bold text-slate-900">{testi.name}</h4>
            <span className="text-sm text-brand-600 font-medium">{testi.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;