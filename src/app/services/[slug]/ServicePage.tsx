import { getService, SERVICES } from "../../lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Vyzma AI",
    };
  }

  return {
    title: `${service.title} Services | Vyzma AI`,
    description: service.summary,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} — Vyzma AI`,
      description: service.summary,
      url: `https://vyzma.in/services/${slug}`,
      siteName: "Vyzma AI",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-24 md:py-32"
          style={{ background: `linear-gradient(135deg, ${service.accentColor}15 0%, #0a0a0a 100%)` }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.03),_transparent_50%)]" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span
                className="mb-4 inline-block rounded-full border px-4 py-1.5 text-sm font-medium"
                style={{
                  borderColor: `${service.accentColor}40`,
                  background: `${service.accentColor}10`,
                  color: service.accentColor,
                }}
              >
                {service.tag}
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">{service.title}</h1>
              <p className="text-lg text-neutral-400 md:text-xl">{service.summary}</p>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-neutral-300">{service.description}</p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-neutral-950 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 hover:border-neutral-700"
                >
                  <div
                    className="mb-3 h-1 w-12 rounded-full"
                    style={{ background: service.accentColor }}
                  />
                  <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {service.faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div
              className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-16"
              style={{
                background: `linear-gradient(135deg, ${service.accentColor}10 0%, transparent 50%)`,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(255,255,255,0.03),_transparent_50%)" />
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to get started?</h2>
                <p className="mb-8 text-lg text-neutral-400">
                  Let&apos;s discuss how we can help with your {service.title.toLowerCase()}.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: service.accentColor }}
                  >
                    Get a Demo
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/50 px-8 py-3.5 font-semibold text-white transition-all hover:border-neutral-600 hover:bg-neutral-800"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-neutral-800 bg-neutral-900/30 open:bg-neutral-900/50">
      <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white list-none">
        <span>{question}</span>
        <span className="transition-transform duration-300 group-open:rotate-180">
          <svg
            className="h-5 w-5 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-6 text-neutral-400">{answer}</div>
    </details>
  );
}