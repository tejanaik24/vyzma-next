'use client';

import React, { useState, useEffect, useRef } from 'react';

// ─── Slide data — each has its own colour identity ───────────────────────────

const slidesData = [
  {
    title: "AI Chatbots",
    tag: "Always On",
    description: "24/7 intelligent customer engagement that learns your brand voice and never sleeps.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2070&auto=format&fit=crop",
    // Electric blue / cyan
    accent: "#00D4FF",
    accentAlt: "#007BFF",
    glow: "rgba(0, 212, 255, 0.18)",
    glowStrong: "rgba(0, 212, 255, 0.06)",
    gradient: "from-[#00D4FF] to-[#007BFF]",
    imageOverlay: "from-[#007BFF]/40 via-transparent to-transparent",
    number: "01",
  },
  {
    title: "Workflow Automation",
    tag: "End-to-End",
    description: "Eliminate manual tasks with autonomous AI agents connecting your entire stack.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    // Violet / magenta
    accent: "#C026D3",
    accentAlt: "#7C3AED",
    glow: "rgba(192, 38, 211, 0.18)",
    glowStrong: "rgba(192, 38, 211, 0.06)",
    gradient: "from-[#C026D3] to-[#7C3AED]",
    imageOverlay: "from-[#7C3AED]/40 via-transparent to-transparent",
    number: "02",
  },
  {
    title: "AEO & GEO",
    tag: "AI-First Search",
    description: "Dominating the next era of search — surfacing your brand on ChatGPT and Perplexity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    // Emerald / teal
    accent: "#10B981",
    accentAlt: "#0891B2",
    glow: "rgba(16, 185, 129, 0.18)",
    glowStrong: "rgba(16, 185, 129, 0.06)",
    gradient: "from-[#10B981] to-[#0891B2]",
    imageOverlay: "from-[#059669]/40 via-transparent to-transparent",
    number: "03",
  },
  {
    title: "AI R&D",
    tag: "Custom Build",
    description: "Custom machine learning models and proprietary data pipelines built for your growth.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
    // Rose / amber
    accent: "#F43F5E",
    accentAlt: "#F97316",
    glow: "rgba(244, 63, 94, 0.18)",
    glowStrong: "rgba(244, 63, 94, 0.06)",
    gradient: "from-[#F43F5E] to-[#F97316]",
    imageOverlay: "from-[#F43F5E]/40 via-transparent to-transparent",
    number: "04",
  },
];

// ─── Mobile: flat service sections ───────────────────────────────────────────

function MobileServiceList() {
  return (
    <div className="bg-[#050505] flex flex-col">
      {slidesData.map((slide, i) => (
        <div
          key={i}
          className="relative px-6 py-10 border-b border-white/[0.06]"
          style={{
            background: `radial-gradient(ellipse 70% 40% at 50% 0%, ${slide.glowStrong}, transparent 60%)`,
          }}
        >
          {/* Tag pill */}
          <div
            className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase"
            style={{
              borderColor: `${slide.accent}40`,
              background: `${slide.accent}12`,
              color: slide.accent,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: slide.accent }} />
            {slide.tag}
          </div>

          {/* Title */}
          <h2
            className="font-black tracking-tight leading-[0.9] mb-4"
            style={{
              fontSize: 'clamp(40px, 10vw, 60px)',
              background: `linear-gradient(135deg, #ffffff 0%, ${slide.accent} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
            }}
          >
            {slide.title}
          </h2>

          {/* Description */}
          <p className="text-white/55 text-base leading-relaxed font-light mb-5">{slide.description}</p>

          {/* Ghost number */}
          <div
            className="font-black select-none pointer-events-none leading-none"
            style={{
              fontSize: '80px',
              background: `linear-gradient(135deg, ${slide.accent}18, ${slide.accentAlt}08)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.06em',
            }}
          >
            {slide.number}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="px-6 py-8">
        <a
          href="#contact"
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest text-white"
          style={{
            background: `linear-gradient(135deg, ${slidesData[0].accent}, ${slidesData[0].accentAlt})`,
            boxShadow: `0 0 32px ${slidesData[0].glow}`,
          }}
        >
          Work With Us <span>→</span>
        </a>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ScrollingFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const stickyPanelRef = useRef<HTMLDivElement | null>(null);

  const active = slidesData[activeIndex];

  // --- Scroll Handler (preserved exactly) ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - container.clientHeight;
      const stepHeight = scrollableHeight / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Grid pattern (subtle white lines on black)
  const gridPatternStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div style={{ height: `${slidesData.length * 100}vh` }}>

        {/* ── Sticky panel ─────────────────────────────────────────────────── */}
        <div
          ref={stickyPanelRef}
          className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]"
          style={{ transition: 'background 0.7s ease' }}
        >

          {/* Aurora background glow — transitions with slide */}
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 80% 50%, ${active.glow}, transparent 70%)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse 40% 50% at 15% 80%, ${active.glowStrong}, transparent 60%)`,
            }}
          />

          {/* ── Layout grid ─────────────────────────────────────────────────── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">

            {/* ── LEFT: Text content ────────────────────────────────────────── */}
            <div className="relative flex flex-col justify-center px-8 md:px-16 border-r border-white/[0.06]">

              {/* Top: slide counter + progress pills */}
              <div className="absolute top-10 left-8 md:left-16 flex items-center gap-4">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(slidesData.length).padStart(2, '0')}
                </span>
                <div className="flex gap-1.5">
                  {slidesData.map((slide, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        const container = scrollContainerRef.current;
                        if (container) {
                          const scrollableHeight = container.scrollHeight - container.clientHeight;
                          const stepHeight = scrollableHeight / slidesData.length;
                          container.scrollTo({ top: stepHeight * i, behavior: 'smooth' });
                        }
                      }}
                      className="h-[3px] rounded-full cursor-pointer transition-all duration-500 ease-in-out"
                      style={{
                        width: i === activeIndex ? '40px' : '16px',
                        background: i === activeIndex
                          ? `linear-gradient(to right, ${slide.accent}, ${slide.accentAlt})`
                          : 'rgba(255,255,255,0.15)',
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Giant ghost number */}
              <div
                className="absolute right-0 bottom-0 font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: 'clamp(140px, 22vw, 280px)',
                  background: `linear-gradient(135deg, ${active.accent}18, ${active.accentAlt}08)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  transition: 'all 0.7s ease',
                  letterSpacing: '-0.06em',
                  lineHeight: 0.85,
                }}
              >
                {active.number}
              </div>

              {/* Slide text — stacked, each animates in/out */}
              <div className="relative" style={{ minHeight: '280px' }}>
                {slidesData.map((slide, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 flex flex-col justify-center"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transform: i === activeIndex ? 'translateY(0)' : 'translateY(24px)',
                      transition: 'opacity 0.6s ease, transform 0.6s ease',
                      pointerEvents: i === activeIndex ? 'auto' : 'none',
                    }}
                  >
                    {/* Tag pill */}
                    <div
                      className="inline-flex items-center gap-2 self-start mb-5 px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase"
                      style={{
                        borderColor: `${slide.accent}40`,
                        background: `${slide.accent}12`,
                        color: slide.accent,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: slide.accent }}
                      />
                      {slide.tag}
                    </div>

                    {/* Title */}
                    <h2
                      className="font-black tracking-tight leading-[0.9] mb-6"
                      style={{
                        fontSize: 'clamp(44px, 6vw, 80px)',
                        background: `linear-gradient(135deg, #ffffff 0%, ${slide.accent} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {slide.title}
                    </h2>

                    {/* Description */}
                    <p className="text-white/55 text-lg leading-relaxed max-w-sm font-light">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-10 left-8 md:left-16">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accentAlt})`,
                    color: '#ffffff',
                    boxShadow: `0 0 32px ${active.glow}`,
                    transition: 'all 0.5s ease',
                  }}
                >
                  Work With Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* ── RIGHT: Image strip ────────────────────────────────────────── */}
            <div
              className="hidden md:flex items-center justify-center p-8 relative"
              style={gridPatternStyle}
            >
              {/* Aurora ring behind image */}
              <div
                className="absolute pointer-events-none rounded-full blur-3xl transition-all duration-700"
                style={{
                  width: '55%',
                  height: '60%',
                  background: `radial-gradient(circle, ${active.glow} 0%, transparent 70%)`,
                }}
              />

              {/* Image strip container */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  width: '52%',
                  height: '80vh',
                  border: `1px solid ${active.accent}25`,
                  boxShadow: `0 0 60px ${active.glow}, 0 25px 60px rgba(0,0,0,0.5)`,
                  transition: 'border-color 0.7s ease, box-shadow 0.7s ease',
                }}
              >
                {/* Scrolling strip — translateY preserved exactly */}
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    transform: `translateY(-${activeIndex * 100}%)`,
                    transition: 'transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)',
                  }}
                >
                  {slidesData.map((slide, i) => (
                    <div key={i} className="relative w-full h-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const t = e.currentTarget as HTMLImageElement;
                          t.onerror = null;
                          t.src = `https://placehold.co/800x1200/111111/ffffff?text=${encodeURIComponent(slide.title)}`;
                        }}
                      />
                      {/* Colour overlay per slide */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${slide.imageOverlay}`}
                      />
                      {/* Bottom label */}
                      <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase"
                          style={{ background: `${slide.accent}20`, color: slide.accent, border: `1px solid ${slide.accent}30` }}
                        >
                          {slide.tag}
                        </div>
                        <p className="mt-2 text-white font-bold text-lg tracking-tight">{slide.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 h-[2px] transition-all duration-700"
            style={{
              width: `${((activeIndex + 1) / slidesData.length) * 100}%`,
              background: `linear-gradient(to right, ${active.accentAlt}, ${active.accent})`,
              boxShadow: `0 0 12px ${active.accent}`,
            }}
          />

        </div>
      </div>
    </div>
  );
}

export default function ScrollingFeatures() {
  // ssr:false component — window always available on first render
  const [isMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  if (isMobile) return <MobileServiceList />;
  return <ScrollingFeatureShowcase />;
}
