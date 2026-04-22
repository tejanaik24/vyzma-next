import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vyzma AI",
  description: "Learn about Vyzma AI - India's premier AI agency building chatbots, automation, and AI solutions.",
};

export default function AboutPage() {
  return (
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
  );
}