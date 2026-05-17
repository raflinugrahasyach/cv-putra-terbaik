import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Galeri Proyek & Portofolio Instalasi Barrier Gate, Parkir Manless & CCTV',
  description: 'Dokumentasi 100+ proyek pemasangan barrier gate, sistem parkir manless RFID, CCTV LPR, dan access control di RSUD, perumahan elite, gedung perkantoran, dan kawasan industri Surabaya & Jawa Timur.',
  keywords: ['portofolio instalasi barrier gate', 'proyek sistem parkir surabaya', 'dokumentasi pemasangan CCTV', 'galeri instalasi access control jawa timur'],
  openGraph: {
    title: 'Galeri Proyek 100+ Instalasi — CV Putra Terbaik',
    description: 'Bukti nyata: 100+ pemasangan barrier gate, parkir manless RFID & CCTV LPR di Surabaya. Lihat dokumentasi lengkap proyek kami.',
    url: 'https://www.putraterbaik.com/projects',
  },
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}