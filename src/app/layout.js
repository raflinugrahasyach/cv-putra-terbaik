import './globals.css';
import Script from 'next/script'; // <--- BARIS INI WAJIB ADA JIKA PAKAI GA

export const metadata = {
  title: {
    template: '%s | CV Putra Terbaik',
    default: 'CV Putra Terbaik - Solusi Sistem Parkir & Keamanan Otomatis',
  },
  description: 'Spesialis pengadaan dan instalasi Barrier Gate, Sistem Parkir Manless, dan Access Control terpercaya di Surabaya dan seluruh Indonesia.',
  icons: {
    icon: '/favicon.ico', // Pastikan file favicon.ico ada di folder public
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