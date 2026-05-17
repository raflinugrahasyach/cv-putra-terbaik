import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';

// ── Render-blocking-free font — served from Google's CDN via Next.js ──────────
// Eliminates OS font fallback (Arial on Windows, SF on macOS, Roboto on Android)
// Ensures consistent "Swiss Style" typography across all devices.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',         // Show fallback font while Inter loads (no FOIT)
  variable: '--font-inter', // Expose as CSS variable for Tailwind
  preload: true,
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-RYVG9EY6E4';

export const metadata = {
  metadataBase: new URL('https://www.putraterbaik.com'),
  title: {
    template: '%s | CV Putra Terbaik — Spesialis Sistem Parkir & Keamanan Surabaya',
    default: 'CV Putra Terbaik — Barrier Gate, Sistem Parkir Manless & Access Control Surabaya',
  },
  description: 'Kontraktor terpercaya instalasi Barrier Gate, Sistem Parkir Manless RFID, CCTV LPR, dan Access Control untuk rumah sakit, perumahan, dan kawasan industri di Surabaya & Jawa Timur. Konsultasi gratis, garansi 2 tahun.',
  keywords: [
    'barrier gate surabaya', 'jual barrier gate surabaya', 'sistem parkir otomatis surabaya',
    'sistem parkir manless', 'palang parkir otomatis', 'access control gedung',
    'CCTV LPR surabaya', 'vehicle loop detector', 'RFID reader parkir',
    'kontraktor sistem keamanan perumahan', 'instalasi barrier gate jawa timur',
    'Physical Barrier Systems PBS', 'Crime Prevention Through Environmental Design CPTED',
    'transparansi pendapatan parkir', 'integrasi QRIS parkir', 'TKDN sistem parkir',
    'parkir manless jawa timur', 'vendor keamanan gedung surabaya',
    'box manless rfid reader', 'pos parkir single', 'tiang gooseneck rfid',
  ],
  authors: [{ name: 'CV Putra Terbaik', url: 'https://www.putraterbaik.com' }],
  creator: 'CV Putra Terbaik',
  publisher: 'CV Putra Terbaik',
  openGraph: {
    title: 'CV Putra Terbaik — Barrier Gate, Sistem Parkir Manless & Keamanan Surabaya',
    description: 'Spesialis instalasi Barrier Gate, Parkir Manless RFID, CCTV LPR & Access Control. 100+ proyek, 5+ tahun, garansi 2 tahun. Hubungi kami sekarang.',
    url: 'https://www.putraterbaik.com',
    siteName: 'CV Putra Terbaik',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: 'Tim Teknisi CV Putra Terbaik — Instalasi Barrier Gate & Sistem Parkir Surabaya' }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV Putra Terbaik — Barrier Gate & Sistem Parkir Surabaya',
    description: 'Spesialis instalasi Barrier Gate, Parkir Manless RFID & CCTV LPR Surabaya. 100+ proyek selesai.',
    images: ['/assets/og-image.jpg'],
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: { icon: '/favicon.ico' },
  // verification.google: Add your Search Console token here when ready
  // verification: { google: 'YOUR_TOKEN_HERE' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased text-slate-900 font-sans">
        {/* Preconnect hints — reduce DNS latency for critical third-parties */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Google Analytics — afterInteractive ensures no render-blocking */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}