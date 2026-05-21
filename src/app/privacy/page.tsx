import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vyzma AI",
  description: "Vyzma AI privacy policy — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://vyzma.in/privacy",
  },
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Vyzma AI",
    description: "How Vyzma AI collects, uses, and protects your personal information.",
    url: "https://vyzma.in/privacy",
    siteName: "Vyzma AI",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mb-8 text-sm text-neutral-500">Last updated: May 22, 2026</p>
          <div className="space-y-6 text-neutral-300 leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">1. Information We Collect</h2>
              <p>When you contact us through our website or book a call, we collect:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Your name and email address</li>
                <li>Phone number</li>
                <li>Company name and service interests</li>
                <li>Any additional information you provide in messages</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Respond to your inquiries and project requests</li>
                <li>Provide our AI agency services</li>
                <li>Send relevant communications about your projects</li>
                <li>Improve our services based on feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">3. Data Protection</h2>
              <p>We implement appropriate security measures to protect your personal information. Your data is stored securely and never shared with third parties without your consent, except where required by law.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">4. Third-Party Services</h2>
              <p>We use Google Analytics (GA4) to understand website traffic patterns. Google may process anonymized data per their privacy policy. We do not sell or rent your personal information.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">6. Contact</h2>
              <p>For privacy-related inquiries, email us at <a href="mailto:vyzmaai.in@gmail.com" className="text-[#007BFF] hover:underline">vyzmaai.in@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
