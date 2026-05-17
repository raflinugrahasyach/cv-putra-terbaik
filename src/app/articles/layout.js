// Page-level metadata for /articles — injected as a server component wrapper
// The actual client component is articles/page.js

export const metadata = {
  title: 'Artikel & Panduan Teknis Sistem Parkir, Barrier Gate & Keamanan Gedung',
  description: 'Pelajari cara kerja barrier gate, sistem parkir manless RFID, CCTV LPR, vehicle loop detector, dan access control. Panduan teknis B2B dari spesialis keamanan Surabaya.',
  keywords: [
    'cara kerja barrier gate', 'sistem parkir manless rfid', 'harga barrier gate mx50',
    'vehicle loop detector anti crash', 'cara kerja access control', 'kamera LPR plat nomor',
    'artikel sistem parkir otomatis', 'panduan instalasi cctv gedung', 'rfid reader parkir surabaya',
    'integrasi QRIS sistem parkir', 'Physical Barrier Systems PBS', 'CPTED keamanan gedung',
  ],
  openGraph: {
    title: 'Pusat Informasi & Panduan Teknis — CV Putra Terbaik',
    description: 'Artikel dan panduan B2B: cara kerja barrier gate, sistem parkir manless, CCTV LPR, dan access control dari spesialis keamanan Surabaya.',
    url: 'https://www.putraterbaik.com/articles',
    type: 'website',
  },
  alternates: { canonical: '/articles' },
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}
