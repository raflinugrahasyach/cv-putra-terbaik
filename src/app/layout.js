import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.putraterbaik.com'),
  title: {
    template: '%s | CV Putra Terbaik',
    default: 'CV Putra Terbaik - Solusi Sistem Parkir & Keamanan Otomatis',
  },
  description: 'Spesialis pengadaan dan instalasi Barrier Gate, Sistem Parkir Manless, dan Access Control terpercaya di Surabaya dan seluruh Indonesia.',
  
  // --- TAMBAHAN BARU (Agar Gambar Muncul di WA) ---
  openGraph: {
    title: 'CV Putra Terbaik - Solusi Sistem Parkir & Keamanan Otomatis',
    description: 'Spesialis Barrier Gate, Parkir Manless & CCTV Surabaya.',
    url: 'https://www.putraterbaik.com',
    siteName: 'CV Putra Terbaik',
    images: [
      {
        url: '/assets/og-image.jpg', // Pastikan file ini ada!
        width: 1200,
        height: 630,
        alt: 'Tim Teknisi CV Putra Terbaik & Barrier Gate',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  // -----------------------------------------------

  alternates: {
    canonical: '/',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['Barrier Gate', 'Sistem Parkir', 'Palang Parkir', 'Surabaya', 'Keamanan'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased text-slate-900">
        {/* Google Analytics Global */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-RYVG9EY6E4`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RYVG9EY6E4');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}