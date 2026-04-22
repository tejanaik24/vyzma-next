import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Vyzma AI",
  description: "Get in touch with Vyzma AI for AI chatbot, automation, and AI development services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mb-8 text-lg text-neutral-400">
            Ready to get started with AI? Let&apos;s talk about your project.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white focus:border-neutral-700 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white focus:border-neutral-700 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white focus:border-neutral-700 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-violet-600 px-8 py-3.5 font-semibold text-white transition-all hover:bg-violet-700"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 border-t border-neutral-800 pt-8">
            <h2 className="mb-4 text-xl font-bold">Other ways to reach us</h2>
            <p className="text-neutral-400">
              Email: hello@vyzma.in<br />
              Phone: +91 8886720908<br />
              WhatsApp: +91 8886720908
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}