'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    sub: '30 MINUTES',
    body: 'We learn your business, your bottlenecks, and what success looks like for you. No pitch, just questions.',
  },
  {
    num: '02',
    title: 'Strategy & Scope',
    sub: 'WITHIN 48 HOURS',
    body: "You receive a clear plan: what we'll build, how long it takes, and what results to expect. No vague proposals.",
  },
  {
    num: '03',
    title: 'Build & Integrate',
    sub: 'FAST EXECUTION',
    body: 'We build your system, connect it to your existing tools, and test everything before handing over.',
  },
  {
    num: '04',
    title: 'Launch & Optimise',
    sub: 'ONGOING',
    body: "We go live, monitor performance, and refine based on real data. You're never left to figure it out alone.",
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: any;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Heading block
        gsap.from('.hww-head', {
          y: 24, opacity: 0, immediateRender: false,
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.hww-head', start: 'top 82%', toggleActions: 'play none none none' },
        });

        // Each row — stagger transform+opacity only (gsap-performance)
        gsap.from('.hww-row', {
          y: 32, opacity: 0, immediateRender: false,
          duration: 0.65, ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.hww-rows', start: 'top 78%', toggleActions: 'play none none none' },
        });

        // Separator lines draw in — scaleX on transform, no layout cost
        gsap.from('.hww-sep', {
          scaleX: 0, transformOrigin: 'left center', immediateRender: false,
          duration: 0.6, ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.hww-rows', start: 'top 78%', toggleActions: 'play none none none' },
        });

        // Ghost numbers fade in
        gsap.from('.hww-ghost', {
          opacity: 0, y: 10, immediateRender: false,
          duration: 0.8, ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.hww-rows', start: 'top 78%', toggleActions: 'play none none none' },
        });

        // CTA row
        gsap.from('.hww-cta', {
          y: 20, opacity: 0, immediateRender: false,
          duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: '.hww-cta', start: 'top 88%', toggleActions: 'play none none none' },
        });
      }, sectionRef);
    };

    init();
    return () => ctx?.revert(); // cleanup — no stray ScrollTriggers (gsap-performance)
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black border-t border-white/[0.06]"
      style={{ paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="hww-head mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-5 font-mono text-[10px] tracking-[0.1em] uppercase text-white/35">
              <span className="inline-block w-5 h-px bg-[#007BFF] opacity-60" />
              Process
            </div>
            <h2
              className="font-bold text-white leading-[1.0] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
            >
              From conversation<br />
              <span className="text-white/40">to live system.</span>
            </h2>
          </div>
          <p className="text-[14px] leading-[1.75] text-white/40 max-w-[300px] md:text-right font-mono">
            No mystery.<br />No vague timelines.
          </p>
        </div>

        {/* Steps — editorial rows */}
        <div className="hww-rows">
          {steps.map((step, i) => (
            <div key={step.num}>
              {/* Separator */}
              <div className="hww-sep h-px bg-white/[0.08]" style={{ willChange: 'transform' }} />

              {/* Row */}
              <div
                className="hww-row group relative grid items-center gap-6 py-8 md:py-10 transition-colors duration-200 hover:bg-white/[0.01]"
                style={{
                  gridTemplateColumns: 'auto 1fr 1fr',
                  cursor: 'default',
                }}
              >
                {/* Ghost number — decorative bg */}
                <span
                  className="hww-ghost pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-bold leading-none text-white/[0.03]"
                  style={{ fontSize: 'clamp(80px, 12vw, 160px)', letterSpacing: '-0.04em', willChange: 'transform' }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>

                {/* Step number */}
                <div className="relative z-10 flex items-center gap-5 min-w-[120px] md:min-w-[160px]">
                  <span
                    className="font-mono text-[13px] font-medium tabular-nums transition-colors duration-200"
                    style={{ color: 'rgba(0,123,255,0.7)', letterSpacing: '0.06em' }}
                  >
                    {step.num}
                  </span>
                  {/* Thin connecting dash */}
                  <span className="flex-1 h-px bg-white/[0.12] hidden md:block" style={{ maxWidth: 40 }} />
                </div>

                {/* Title + sub */}
                <div className="relative z-10">
                  <h3
                    className="text-white font-semibold leading-[1.15] tracking-[-0.015em] mb-1.5"
                    style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
                  >
                    {step.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/30">
                    {step.sub}
                  </span>
                </div>

                {/* Body */}
                <p className="relative z-10 text-[13px] md:text-[14px] leading-[1.75] text-white/40 max-w-[380px]">
                  {step.body}
                </p>

                {/* Left accent line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#007BFF] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            </div>
          ))}
          {/* Final separator */}
          <div className="hww-sep h-px bg-white/[0.08]" style={{ willChange: 'transform' }} />
        </div>

        {/* CTA */}
        <div className="hww-cta mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <a
            href="#contact"
            className="inline-flex items-center font-semibold text-[14px] text-white bg-[#007BFF] rounded px-7 py-3.5 transition-opacity duration-150 hover:opacity-90 cursor-pointer"
          >
            Apply for a pilot project →
          </a>
          <span className="font-mono text-[11px] tracking-[0.04em] text-white/30">
            Most projects go live in 2–4 weeks.
          </span>
        </div>

      </div>
    </section>
  );
}
