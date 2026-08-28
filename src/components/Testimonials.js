'use client';
import { useRef, useEffect } from 'react';
import { Star, Quote, Building2, User } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Bpk. Hartono',
    role: 'Pengelola Puri Safira Residence',
    type: 'person',
    rating: 4.9,
    text: 'Sistem parkir dari Putra Terbaik sudah berjalan 3 tahun tanpa gangguan serius. Setiap ada kendala kecil, teknisi langsung hadir dalam beberapa jam. After sales service-nya benar-benar beda dari vendor lain.',
    tag: 'Sistem Parkir Manless',
  },
  {
    name: 'Ibu Rahayu Indriasari',
    role: 'Kabag Umum, RSUD Dr. Sutomo',
    type: 'person',
    rating: 4.8,
    text: 'Pemasangan barrier gate dikerjakan rapi dan tepat waktu. Softwarenya intuitif, operator kami yang tidak berlatar IT pun langsung bisa pakai. Sudah 2 tahun berjalan lancar.',
    tag: 'Barrier Gate MX-50',
  },
  {
    name: 'PT Pertamina Perak',
    role: 'Divisi Keamanan & Operasional',
    type: 'org',
    rating: 5.0,
    text: 'Solusi custom yang mereka tawarkan benar-benar memecahkan masalah traffic kami di area depo. Tim survei sangat profesional dan memahami kebutuhan keamanan industri migas. Highly recommended.',
    tag: 'Access Control + CCTV LPR',
  },
  {
    name: 'Bpk. Andhika Putra',
    role: 'Manajer Properti, Safira Garden',
    type: 'person',
    rating: 4.8,
    text: 'Hardware-nya terasa kokoh dan tidak mudah rusak meskipun dipakai intensif setiap hari. Sudah lebih dari 18 bulan berjalan, belum pernah ada downtime yang signifikan.',
    tag: 'Barrier Gate E10',
  },
  {
    name: 'RS Aisyiyah Siti Fatimah',
    role: 'Divisi Sarana & Prasarana',
    type: 'org',
    rating: 4.9,
    text: 'Integrasi RFID dengan sistem ticketing yang ada di RS kami berjalan mulus. Tim teknis Putra Terbaik sabar menjelaskan dan mendampingi proses uji coba sampai benar-benar siap.',
    tag: 'Sistem RFID + Manless',
  },
  {
    name: 'Bpk. Darmawan',
    role: 'Ketua RT, Cluster Emerald',
    type: 'person',
    rating: 4.7,
    text: 'Harga kompetitif dibanding vendor lain yang kami survei, tapi kualitas tidak kalah. Pemasangan selesai dalam 2 hari kerja. Warga perumahan jadi lebih tenang dengan akses kontrol ini.',
    tag: 'Barrier Gate Perumahan',
  },
  {
    name: 'Polda NTT',
    role: 'Bagian Logistik & Aset',
    type: 'org',
    rating: 4.8,
    text: 'Sistem parkir manless yang dipasang bekerja dengan baik bahkan di kondisi cuaca NTT yang panas. Kunjungan servis berkala juga selalu tepat jadwal. Komunikasi tim sangat responsif.',
    tag: 'Sistem Parkir Otomatis',
  },
  {
    name: 'Ibu Susi Wijayanti',
    role: 'Admin Operasional, Grand East Residence',
    type: 'person',
    rating: 4.9,
    text: 'Laporan harian dan fitur export data dari software parkir-nya sangat membantu administrasi kami. Tidak perlu rekap manual lagi. Investasi yang sangat worth it untuk pengelola perumahan.',
    tag: 'Software Parkir Custom',
  },
  {
    name: 'Bpk. Fajar Kurniawan',
    role: 'Supervisor Keamanan, PLN Ketintang',
    type: 'person',
    rating: 4.8,
    text: 'Loop detector yang mereka pasang sangat sensitif dan akurat. Tidak ada lagi kasus palang terbuka tanpa kendaraan atau sebaliknya. Instalasi kabel rapih, tidak merusak estetika area kantor.',
    tag: 'Vehicle Loop Detector',
  },
  {
    name: 'RS Woodward Palu',
    role: 'Manajemen Fasilitas',
    type: 'org',
    rating: 4.7,
    text: 'Kami pesan dari Surabaya untuk instalasi di Palu — koordinasi jarak jauhnya luar biasa. Tim tiba sesuai jadwal, garansi juga dihormati. Pengiriman unit aman tanpa kerusakan.',
    tag: 'Barrier Gate + Pos Parkir',
  },
  {
    name: 'Bpk. Hendra Santosa',
    role: 'Direktur Operasional, Pergudangan Waringin',
    type: 'person',
    rating: 5.0,
    text: 'Akses kontrol pintu gudang yang mereka pasang terintegrasi langsung dengan absensi karyawan. Satu investasi, dua manfaat. Tim juga bersedia training staf kami sampai benar-benar paham.',
    tag: 'RFID Access Control',
  },
  {
    name: 'Anvaya Juanda',
    role: 'Pengelola Kawasan Residensial',
    type: 'org',
    rating: 4.9,
    text: 'Sudah coba beberapa vendor sebelumnya, tapi Putra Terbaik yang paling responsif dan jujur soal ekspektasi teknis. Estimasi biaya pun tidak meleset dari penawaran awal.',
    tag: 'Barrier Gate MX-50',
  },
  {
    name: 'Bpk. Rizky Amrullah',
    role: 'Koordinator Lapangan, PT Wika',
    type: 'person',
    rating: 4.8,
    text: 'QR code scanner untuk sistem tiket parkir di proyek kami bekerja sangat cepat, bahkan di kondisi cahaya rendah. Tidak pernah ada antrian panjang lagi di pintu masuk area konstruksi.',
    tag: 'QR Code Parking System',
  },
];

// Duplicate cards for seamless infinite loop
const DOUBLED = [...TESTIMONIALS, ...TESTIMONIALS];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={
            i <= full
              ? 'fill-accent-400 text-accent-400'
              : i === full + 1 && half
              ? 'fill-accent-200 text-accent-400'
              : 'text-slate-200 fill-slate-200'
          }
        />
      ))}
      <span className="text-xs font-bold text-slate-500 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="relative flex-shrink-0 w-[320px] md:w-[360px] bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mx-3 flex flex-col select-none">
      <Quote size={36} className="absolute top-5 right-5 text-slate-100" aria-hidden="true" />
      <StarRating rating={t.rating} />
      <p className="text-slate-600 leading-relaxed my-4 flex-1 text-[14px] relative z-10 line-clamp-4">
        &ldquo;{t.text}&rdquo;
      </p>
      <span className="inline-block mb-4 px-3 py-1 bg-brand-50 text-brand-700 text-[11px] font-bold rounded-full border border-brand-100 w-fit">
        {t.tag}
      </span>
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
          {t.type === 'org' ? <Building2 size={16} /> : <User size={16} />}
        </div>
        <div>
          <p className="font-bold text-slate-900 text-sm leading-tight">{t.name}</p>
          <p className="text-[11px] text-brand-600 font-medium mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Speed in pixels per frame (~1px/frame = smooth ~60fps)
    const SPEED = 0.6;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Reset when we've scrolled one full set of cards
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Total avg rating
  const avgRating = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-brand-50/50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wider mb-5 uppercase border border-brand-100">
            Kata Klien Kami
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Dipercaya, Terbukti, Direkomendasikan
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Hasil nyata dari klien yang telah mempercayakan keamanan aset mereka kepada kami.
          </p>
        </div>

        {/* Aggregate Rating */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={22} className="fill-accent-400 text-accent-400" />
            ))}
          </div>
          <span className="text-2xl font-bold text-slate-900">{avgRating}</span>
          <span className="text-slate-400 text-sm">/ 5 — dari {TESTIMONIALS.length} ulasan klien</span>
        </div>
      </div>

      {/* MARQUEE TRACK — full bleed */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex pb-4 pt-2"
          style={{ willChange: 'transform', width: 'max-content' }}
          aria-label="Testimonial dari klien CV Putra Terbaik"
        >
          {DOUBLED.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
