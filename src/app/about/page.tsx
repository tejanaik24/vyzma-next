import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vyzma AI — India's Premier AI Agency",
  description: "Learn about Vyzma AI — India's premier AI agency based in Bangalore & Vizag. We build AI chatbots, workflow automation, SEO, voice AI, and custom AI solutions for Indian businesses.",
  alternates: {
    canonical: "https://vyzma.in/about",
  },
  robots: "index, follow",
  openGraph: {
    title: "About Vyzma AI — India's Premier AI Agency",
    description: "AI chatbots, automation, SEO, and custom AI development — built in India, competing globally. Based in Bangalore & Vizag.",
    url: "https://vyzma.in/about",
    siteName: "Vyzma AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://vyzma.in/og-vyzma-homepage.png",
        width: 1200,
        height: 630,
        alt: "About Vyzma AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vyzma AI — India's Premier AI Agency",
    description: "AI chatbots, automation, SEO, and custom AI development — built in India, competing globally.",
    images: ["https://vyzma.in/og-vyzma-homepage.png"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vyzma AI",
  description: "India's premier AI agency building chatbots, automation, and AI solutions.",
  url: "https://vyzma.in/about",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="min-h-screen py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Vyzma AI</h1>
          <p className="mb-6 text-lg text-neutral-400">
            Vyzma AI is India's premier AI agency, building intelligent solutions that help businesses grow faster.
          </p>
          <div className="space-y-4 text-neutral-300">
            <p>
              Founded in 2023, we specialize in AI chatbots, workflow automation, answer engine optimization, 
              and custom AI development. Our team combines deep AI expertise with practical business understanding 
              to deliver solutions that drive real results.
            </p>
            <p>
              Based in Bangalore & Vizag, we serve businesses across India and globally, delivering 
              world-class AI solutions at competitive prices.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <p className="text-neutral-400">
              Email: hello@vyzma.in<br />
              Phone: +91 8886720908<br />
              Location: Bangalore, India
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}