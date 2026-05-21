import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vyzma AI",
  description: "Vyzma AI terms of service — the terms governing your use of our AI agency services.",
  alternates: {
    canonical: "https://vyzma.in/terms",
  },
  robots: "index, follow",
  openGraph: {
    title: "Terms of Service | Vyzma AI",
    description: "Terms governing your use of Vyzma AI's agency services.",
    url: "https://vyzma.in/terms",
    siteName: "Vyzma AI",
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <p className="mb-8 text-sm text-neutral-500">Last updated: May 22, 2026</p>
          <div className="space-y-6 text-neutral-300 leading-relaxed">

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">1. Services</h2>
              <p>Vyzma AI provides AI development, automation, digital marketing, and consulting services. Specific deliverables, timelines, and pricing are defined in individual project agreements.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">2. Project Engagement</h2>
              <p>Each project begins with a discovery phase where we define scope, deliverables, and pricing. Upon mutual agreement, a project proposal is signed and work commences. Payment terms are specified in the proposal.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">3. Intellectual Property</h2>
              <p>Upon full payment, you retain ownership of all custom work product delivered. Vyzma AI retains the right to use non-confidential project details in our portfolio unless otherwise agreed.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">4. Confidentiality</h2>
              <p>We treat all client information as confidential. We do not share your business data, strategies, or proprietary information with any third party without explicit written consent.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">5. Limitation of Liability</h2>
              <p>Vyzma AI's liability is limited to the amount paid for the specific project giving rise to the claim. We are not liable for indirect damages including loss of profits or business interruption.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">6. Termination</h2>
              <p>Either party may terminate a project agreement with 14 days written notice. Services delivered up to the termination date are billed at the agreed rate.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">7. Contact</h2>
              <p>For questions about these terms, email <a href="mailto:vyzmaai.in@gmail.com" className="text-[#007BFF] hover:underline">vyzmaai.in@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
