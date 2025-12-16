export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Folder yang tidak boleh diintip Google
    },
    sitemap: 'https://www.putraterbaik.com/sitemap.xml', // Ganti domain ini jika nanti sudah deploy
  };
}