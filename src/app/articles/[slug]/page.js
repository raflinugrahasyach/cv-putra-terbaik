import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react';
import NavbarModern from '../../../components/NavbarModern';
import FooterModern from '../../../components/FooterModern';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import ARTICLES from '../../../data/articles.json';

// Pre-generate all 16 article slugs at build time (SSG)
export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.id }));
}

// ISR: revalidate article content monthly in the background
export const revalidate = 2592000;

// Dynamic metadata per article
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.id === slug);
  if (!article) return { title: 'Artikel Tidak Ditemukan' };

  return {
    title: `${article.title} | CV Putra Terbaik`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.putraterbaik.com/articles/${slug}`,
      type: 'article',
      images: [{ url: `https://www.putraterbaik.com${article.image}`, alt: article.title }],
    },
    alternates: { canonical: `https://www.putraterbaik.com/articles/${slug}` },
  };
}

export default async function ArticleSlugPage({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.id === slug);
  if (!article) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.excerpt,
    'image': `https://www.putraterbaik.com${article.image}`,
    'author': { '@type': 'Organization', 'name': 'CV Putra Terbaik', 'url': 'https://www.putraterbaik.com' },
    'publisher': { '@type': 'Organization', 'name': 'CV Putra Terbaik', 'logo': { '@type': 'ImageObject', 'url': 'https://www.putraterbaik.com/logo_cv.webp' } },
    'datePublished': article.datePublished || '2025-11-03',
    'dateModified': article.datePublished || '2025-11-03',
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://www.putraterbaik.com/articles/${slug}` },
    'keywords': article.tags.join(', '),
    'articleSection': article.category,
  };

  return (
    <main className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <NavbarModern />
      <FloatingWhatsApp />

      {/* Hero */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden bg-slate-900 pt-16">
        <Image src={article.image} alt={article.title} fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">{article.category}</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">{article.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
          <span className="flex items-center gap-1.5 text-slate-500 text-sm"><Clock size={14} /> {article.readTime} baca</span>
          <span className="flex items-center gap-1.5 text-slate-500 text-sm"><Tag size={14} /> {article.tag}</span>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">{article.excerpt}</p>

        <div className="space-y-8">
          {article.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{s.h}</h2>
              <p className="text-slate-600 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>

        {/* Content-to-Conversion CTA — links reader to the product catalog */}
        <div className="my-10 p-6 bg-brand-50 border border-brand-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-slate-900 text-base mb-1">Tertarik menggunakan produk ini?</p>
            <p className="text-slate-500 text-sm">Lihat spesifikasi lengkap, foto produk, dan harga terbaik langsung dari kami.</p>
          </div>
          <Link
            href="/#produk"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors"
          >
            Lihat Spesifikasi &amp; Harga <ArrowRight size={15} />
          </Link>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
          {article.tags.map((t) => (
            <span key={t} className="px-3 py-1 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full border border-brand-100">{t}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg mb-1">Tertarik dengan solusi ini?</p>
            <p className="text-slate-400 text-sm">Dapatkan penawaran terbaik untuk instalasi di lokasi Anda.</p>
          </div>
          <a href="https://wa.me/628113863270" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shrink-0">
            Konsultasi Gratis <ArrowRight size={16} />
          </a>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 text-sm font-medium transition-colors">
            <ArrowLeft size={16} /> Kembali ke Semua Artikel
          </Link>
        </div>
      </div>

      <FooterModern />
    </main>
  );
}
