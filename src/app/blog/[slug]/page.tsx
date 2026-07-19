import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, getBlogPost, getAllSlugs } from '@/lib/blog-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

const BLOG_OG_IMAGES: Record<string, string> = {
  'what-is-vyzma-ai': '/og-vyzma-homepage.png',
  'google-ai-hub-vizag-businesses-2026': '/og-blog-1.png',
  'best-ai-agency-visakhapatnam-2026': '/og-blog-2.png',
  'ai-automation-vizag-businesses-2026': '/og-blog-3.png',
  'ai-chatbots-visakhapatnam-2026': '/og-blog-4.png',
  'ai-for-real-estate-vizag-2026': '/og-blog-5.png',
  'ai-for-pharma-companies-vizag-2026': '/og-blog-6.png',
  'best-ai-agency-bangalore-2026': '/og-blog-7.png',
  'digital-marketing-agency-visakhapatnam-2026': '/og-blog-8.png',
  'seo-agency-visakhapatnam-2026': '/og-blog-9.png',
  'google-ads-agency-visakhapatnam-2026': '/og-blog-10.png',
  'website-design-visakhapatnam-2026': '/og-blog-11.png',
  'whatsapp-marketing-vizag-2026': '/og-blog-12.png',
  'digital-marketing-visakhapatnam-2026': '/og-blog-13.png',
  'seo-is-dead-in-india-ai-overviews-2026': '/og-blog-14.png',
  'top-website-building-companies-in-vizag': '/og-blog-15.png',
  'ecommerce-website-design-cost-in-india': '/og-blog-16.png',
  'b2b-lead-generation-with-ai-chatbots': '/og-blog-17.png',
  'startup-ai-stack-guide-2026': '/og-blog-18.png',
  'nextjs-vs-wordpress-which-is-better': '/og-blog-19.png',
  'website-design-company-in-visakhapatnam': '/og-blog-20.png',
  'web-development-agency-visakhapatnam': '/og-blog-21.png',
  'web-design-for-real-estate': '/og-blog-22.png',
  'how-much-does-it-cost-to-build-a-website': '/og-blog-23.png',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const ogImage = BLOG_OG_IMAGES[slug];
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://vyzma.in/blog/${post.slug}`,
    },
    robots: 'index, follow',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://vyzma.in/blog/${post.slug}`,
      type: 'article',
      ...(ogImage && {
        images: [{ url: `https://vyzma.in${ogImage}`, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      ...(ogImage && { images: [`https://vyzma.in${ogImage}`] }),
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderContent(content: string) {
  const paragraphs = content.split('\n\n');
  return paragraphs.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-white">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith('### ')) {
      return (
        <h3 key={i} className="mt-6 mb-3 text-lg font-semibold text-white">
          {block.slice(4)}
        </h3>
      );
    }
    if (block.includes('|') && block.includes('---')) {
      const lines = block.split('\n').filter(Boolean);
      const headers = lines[0].split('|').filter((c) => c.trim()).map((c) => c.trim());
      const rows = lines.slice(2).map((line) =>
        line.split('|').filter((c) => c.trim()).map((c) => c.trim())
      );
      return (
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm text-white/80">
            <thead>
              <tr className="border-b border-white/10">
                {headers.map((h, j) => (
                  <th key={j} className="px-3 py-2 text-left font-semibold text-white">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j} className="border-b border-white/5">
                  {row.map((cell, k) => (
                    <td key={k} className="px-3 py-2 text-white/70">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (block.startsWith('1. ') || block.startsWith('- ')) {
      const isOrdered = block.startsWith('1. ');
      const items = block.split('\n').filter(Boolean);
      const ListTag = isOrdered ? 'ol' : 'ul';
      const listClass = isOrdered ? 'list-decimal' : 'list-disc';
      return (
        <ListTag key={i} className={`my-4 space-y-2 pl-6 ${listClass}`}>
          {items.map((item, j) => (
            <li key={j} className="text-white/70 leading-relaxed pl-2">
              {item.replace(/^[\d]+\. /, '').replace(/^- /, '')}
            </li>
          ))}
        </ListTag>
      );
    }
    if (block.startsWith('![')) {
      const match = block.match(/!\[(.+?)\]\((.+?)\)/);
      if (match) {
        return (
          <div key={i} className="my-8 overflow-hidden rounded-lg border border-white/[0.08]">
            <img
              src={match[2]}
              alt={match[1]}
              className="w-full object-cover"
              loading="lazy"
            />
            <p className="px-3 py-2 text-xs text-white/30 italic">{match[1]}</p>
          </div>
        );
      }
    }
    if (block.startsWith('[') && block.includes('](')) {
      const match = block.match(/\[(.+?)\]\((.+?)\)/);
      if (match) {
        return (
          <div key={i} className="my-8">
            <a
              href={match[2]}
              className="inline-flex items-center justify-center rounded-lg bg-[#007BFF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0066CC] transition-colors"
            >
              {match[1]}
            </a>
          </div>
        );
      }
    }
    const boldRendered = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return (
      <p
        key={i}
        className="my-4 text-white/70 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: boldRendered }}
      />
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const postOgImage = BLOG_OG_IMAGES[slug];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Teja Naik',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'Vyzma AI', url: 'https://vyzma.in' },
      url: 'https://vyzma.in/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vyzma AI',
      url: 'https://vyzma.in',
      logo: { '@type': 'ImageObject', url: 'https://vyzma.in/logo.png' },
    },
    url: `https://vyzma.in/blog/${post.slug}`,
    ...(postOgImage && { image: `https://vyzma.in${postOgImage}` }),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vyzma.in' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://vyzma.in/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://vyzma.in/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <main className="min-h-screen bg-black text-white">
        {/* Breadcrumb */}
        <div className="border-b border-white/[0.06] px-6 py-4 md:px-10">
          <div className="mx-auto max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-white/30">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/50 truncate max-w-[200px]">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full border border-[#007BFF]/30 px-3 py-0.5 text-xs font-medium text-[#007BFF]">
                {post.category}
              </span>
              <span className="text-xs text-white/30">{post.readTime}</span>
              <span className="text-xs text-white/30">·</span>
              <span className="text-xs text-white/30">{formatDate(post.date)}</span>
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl">
              {post.title}
            </h1>

            <p className="mb-10 text-lg text-white/50 leading-relaxed border-l-2 border-[#007BFF] pl-4">
              {post.excerpt}
            </p>

            <div className="prose-content">
              {renderContent(post.content)}
            </div>

            <div className="mt-12 border-t border-white/[0.06] pt-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#007BFF]/10 text-xl font-bold text-[#007BFF]">
                  TN
                </div>
                <div>
                  <p className="font-semibold text-white">Teja Naik</p>
                  <p className="text-sm text-white/50">Founder, Vyzma AI · India&apos;s Premier AI Agency</p>
                  <p className="mt-1 text-xs text-white/30">Building AI solutions for Indian businesses in Vizag &amp; Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <section className="border-t border-white/[0.06] px-6 py-16 md:px-10">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-xl font-bold text-white">More from the blog</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-lg border border-white/[0.08] bg-white/[0.02] p-4 transition-all hover:border-white/[0.16]"
                  >
                    <span className="mb-2 block text-xs text-[#007BFF]">{p.category}</span>
                    <h3 className="text-sm font-semibold text-white/80 leading-snug group-hover:text-white transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
