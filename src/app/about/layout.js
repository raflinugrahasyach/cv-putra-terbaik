export const metadata = {
  title: 'Tentang Kami — CV Putra Terbaik, Spesialis Sistem Keamanan & Parkir Surabaya',
  description: 'CV Putra Terbaik: 5+ tahun pengalaman, 100+ proyek instalasi barrier gate, sistem parkir manless RFID, CCTV LPR, dan access control. Mitra terpercaya untuk gedung, rumah sakit, dan kawasan industri di Jawa Timur.',
  keywords: [
    'tentang cv putra terbaik', 'profil perusahaan sistem parkir surabaya',
    'kontraktor barrier gate jawa timur terpercaya', 'spesialis akses kontrol surabaya',
    'vendor cctv lpr gedung surabaya', 'Physical Barrier Systems contractor indonesia',
  ],
  openGraph: {
    title: 'Tentang CV Putra Terbaik — 5+ Tahun, 100+ Proyek Keamanan',
    description: '5+ tahun pengalaman instalasi sistem parkir & keamanan di Jawa Timur. Tim bersertifikat, garansi 2 tahun, dukungan teknis 24/7.',
    url: 'https://www.putraterbaik.com/about',
  },
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
