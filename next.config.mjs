/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'], // Google suka format ini (Next-Gen Formats)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Persiapan jika nanti ada gambar dari CMS external
      },
    ],
  },
  // Redirects opsional jika nanti ada URL lama yang ingin dialihkan
  async redirects() {
    return [];
  },
};

export default nextConfig;