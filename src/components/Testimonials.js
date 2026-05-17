'use client';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, User } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Bpk. Hartono',
    role: 'Pengelola Puri Safira Residence',
    type: 'person',
    rating: 5,
    text: 'Sistem parkir dari Putra Terbaik sangat stabil. Sudah 3 tahun berjalan tanpa kendala berarti. After sales service-nya juara — teknisi datang dalam hitungan jam setiap ada masalah.',
    tag: 'Sistem Parkir Manless',
  },
  {
    name: 'Ibu Sarah',
    role: 'Manajemen RSUD Dr. Soetomo',
    type: 'person',
    rating: 5,
    text: 'Respon teknisi sangat cepat. Pemasangan barrier gate sangat rapi dan softwarenya mudah digunakan oleh operator kami yang tidak memiliki latar belakang IT sekalipun.',
    tag: 'Barrier Gate MX-50',
  },
  {
    name: 'PT Pertamina Perak',
    role: 'Divisi Keamanan & Operasional',
    type: 'org',
    rating: 5,
    text: 'Solusi custom yang ditawarkan sangat membantu efisiensi traffic di area depo kami. Tim survei profesional dan memahami kebutuhan keamanan industri. Sangat merekomendasikan CV Putra Terbaik.',
    tag: 'Access Control + CCTV LPR',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-50/60 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wider mb-5 uppercase border border-brand-100">
            Kata Klien Kami
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Dipercaya, Terbukti, Direkomendasikan
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Hasil nyata dari klien yang telah mempercayakan keamanan aset mereka kepada kami.
          </p>
        </motion.div>

        {/* Aggregate Rating Bar */}
        <motion.div {...fadeUp(0.1)} className="flex items-center justify-center gap-4 mb-12">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} size={22} className="fill-accent-400 text-accent-400" />
            ))}
          </div>
          <span className="text-2xl font-bold text-slate-900">5.0</span>
          <span className="text-slate-400 text-sm">/ 5 — dari 3 ulasan terverifikasi</span>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.12)}
              className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-md hover:shadow-xl hover:border-brand-100 transition-all duration-300 flex flex-col group"
            >
              {/* Quote icon */}
              <Quote
                size={44}
                className="absolute top-6 right-6 text-slate-100 group-hover:text-brand-50 transition-colors"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label={`Rating ${t.rating} dari 5`}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={16} className="fill-accent-400 text-accent-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-600 leading-relaxed mb-6 flex-1 relative z-10 text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Product tag */}
              <span className="inline-block mb-6 px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-100 w-fit">
                {t.tag}
              </span>

              {/* Reviewer */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                  {t.type === 'org'
                    ? <Building2 size={18} />
                    : <User size={18} />
                  }
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-tight">{t.name}</p>
                  <p className="text-xs text-brand-600 font-medium mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
