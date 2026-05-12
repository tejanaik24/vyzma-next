import { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/blog-data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Vyzma AI — SEO, GEO, AEO & AI Automation Insights',
  description: 'Insights on AI-powered growth: SEO trends 2026, Generative Engine Optimization, Answer Engine Optimization, and AI automation for Indian businesses.',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog | Vyzma AI',
    description: 'Insights on AI-powered growth for Indian businesses.',
    url: 'https://vyzma.in/blog',
  },
};

const categoryColors: Record<string, string> = {
  SEO: 'text-blue-400 bg-blue-400/10',
  GEO: 'text-purple-400 bg-purple-400/10',
  AEO: 'text-green-400 bg-green-400/10',
  Strategy: 'text-yellow-400 bg-yellow-400/10',
  'Local SEO': 'text-orange-400 bg-orange-400/10',
  'AI Automation': 'text-cyan-400 bg-cyan-400/10',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="border-b border-white/[0.06] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#007BFF] uppercase">
            Vyzma AI — Insights
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-xl text-white/50">
            SEO, GEO, AEO, and AI automation — practical insights for Indian businesses ready to grow smarter.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-lg border border-white/[0.08] bg-white/[0.02] p-6 transition-all hover:border-white/[0.16] hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category] ?? 'text-white/50 bg-white/10'}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-white/30">{post.readTime}</span>
                </div>
                <h2 className="mb-2 text-lg font-semibold leading-snug text-white group-hover:text-[#007BFF] transition-colors">
                  {post.title}
                </h2>
                <p className="mb-4 flex-1 text-sm text-white/50 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">{formatDate(post.date)}</span>
                  <span className="text-xs font-medium text-[#007BFF] group-hover:underline">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 font-mono text-xs tracking-widest text-[#007BFF] uppercase">
            Ready to grow?
          </p>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Let Vyzma AI build your visibility strategy
          </h2>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#007BFF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0066CC] transition-colors"
          >
            Start a Project →
          </a>
        </div>
      </section>
    </main>
  );
}
