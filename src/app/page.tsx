import Hero from "@/components/sections/Hero";
import HowWeWork from "@/components/sections/HowWeWork";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import {
  FeaturesTimeline,
  ScrollingFeatures,
  Testimonials,
  ScrollHero,
} from "@/components/sections/ClientSections";

const industries = ["Fitness & Wellness", "D2C & E-commerce", "Real Estate", "EdTech", "Healthcare", "Professional Services", "Retail"];

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      {/* Industry strip */}
      <div className="border-y border-white/5 px-6 md:px-10 py-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-white/35 whitespace-nowrap">Built for businesses in</span>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {industries.map((ind, i) => (
            <>
              <span key={ind} className="font-mono text-[11px] tracking-[0.04em] text-white/50">{ind}</span>
              {i < industries.length - 1 && <span key={`sep-${i}`} className="text-white/20 text-sm">·</span>}
            </>
          ))}
        </div>
      </div>
      {/* Stats trust bar */}
      <div className="border-b border-white/[0.06] px-6 md:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: '50+',  label: 'Projects delivered' },
          { num: '48h',  label: 'Strategy turnaround' },
          { num: '24/7', label: 'AI systems uptime' },
          { num: '2',    label: 'Offices — BLR & Vizag' },
        ].map(s => (
          <div key={s.num} className="flex flex-col gap-1">
            <span className="font-mono text-[22px] font-semibold text-white tracking-[-0.02em]">{s.num}</span>
            <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-white/35">{s.label}</span>
          </div>
        ))}
      </div>
      <ServicesCarousel />
      <ScrollingFeatures />
      <HowWeWork />
      <FeaturesTimeline />
      <Testimonials />
      <ScrollHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
