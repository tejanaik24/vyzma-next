import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vyzma AI",
  url: "https://vyzma.in",
  logo: "https://vyzma.in/vyzma-logo.png",
  description: "Vyzma AI builds AI chatbots, workflow automation, answer engine strategies, and R&D systems for businesses in India.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8886720908",
    contactType: "customer service",
    availableLanguage: ["English", "Telugu", "Kannada"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vyzma AI Agency",
  url: "https://vyzma.in",
  telephone: "+91-8886720908",
  description: "AI agency specialising in chatbots, workflow automation, and answer engine optimisation for Indian businesses.",
  areaServed: ["Bangalore", "Hyderabad", "Vizag", "India"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  priceRange: "₹₹–₹₹₹",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vyzma.in"),
  title: "Vyzma AI — India's Premier AI Agency",
  description:
    "Vyzma AI builds AI chatbots, workflow automation, answer engine strategies, and R&D systems that help businesses grow faster. Based in Bangalore & Vizag.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vyzma AI — India's Premier AI Agency",
    description:
      "AI chatbots, workflow automation, answer engine optimisation, and R&D systems — built in India, competing globally.",
    url: "https://vyzma.in",
    siteName: "Vyzma AI",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyzma AI — India's Premier AI Agency",
    description:
      "AI chatbots, workflow automation, answer engine optimisation, and R&D systems — built in India, competing globally.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XCZLBPQYX6" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-XCZLBPQYX6');`}</Script>
        <Header />
        {children}
        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/8886720908"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
          style={{ background: '#25D366' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.85L.057 23.885a.5.5 0 0 0 .606.61l6.207-1.63A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.073-1.387l-.363-.215-3.763.988.998-3.652-.237-.377A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
