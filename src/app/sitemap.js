import ARTICLES from '../data/articles.json';

export default function sitemap() {
  const baseUrl = 'https://www.putraterbaik.com';

  // Static pages — with realistic, stable lastModified dates
  const staticPages = [
    { url: baseUrl,                        lastModified: '2026-04-27', changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${baseUrl}/about`,             lastModified: '2026-04-27', changeFrequency: 'yearly',   priority: 0.7 },
    { url: `${baseUrl}/projects`,          lastModified: '2026-04-27', changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${baseUrl}/articles`,          lastModified: '2026-04-27', changeFrequency: 'weekly',   priority: 0.9 },
  ];

  // Dynamic article pages — each gets its own URL
  const articlePages = ARTICLES.map((article) => ({
    url: `${baseUrl}/articles/${article.id}`,
    lastModified: '2026-04-01',
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}