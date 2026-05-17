/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    // Removed wildcard hostname — all images are local /public assets.
    // Add specific external hostnames here only if a CMS is integrated.
  },

  async redirects() {
    return [];
  },

  // ── Military-grade HTTP Security Headers ─────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Clickjacking defense
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // MIME-type sniffing prevention
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer privacy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Legacy XSS filter (IE/Edge fallback)
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Force HTTPS for 2 years, include subdomains, submit to preload list
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Restrict browser features — no camera/mic abuse
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), payment=()',
          },
          // Content Security Policy — tuned for GA4, Formspree, Google Maps
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "frame-src https://www.google.com",
              "connect-src 'self' https://formspree.io https://www.google-analytics.com https://region1.google-analytics.com",
              "worker-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://formspree.io",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;