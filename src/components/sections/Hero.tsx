'use client';

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const splineRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!customElements.get("spline-viewer")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.0.82/build/spline-viewer.js";
      document.head.appendChild(script);
    }
  }, []);

  // Inject CSS into the Spline viewer's shadow DOM to kill the watermark
  useEffect(() => {
    const kill = () => {
      const viewer = document.querySelector("spline-viewer");
      if (!viewer?.shadowRoot) return false;
      const existing = viewer.shadowRoot.querySelector("#vyzma-no-logo");
      if (existing) return true;
      const style = document.createElement("style");
      style.id = "vyzma-no-logo";
      style.textContent = `
        #logo, [id*="logo"], a[href*="spline.design"],
        [class*="logo"], [data-key="logo"] {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `;
      viewer.shadowRoot.appendChild(style);
      return true;
    };

    // Retry until the shadow DOM is ready
    const iv = setInterval(() => { if (kill()) clearInterval(iv); }, 150);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="min-h-[calc(100vh-56px)] bg-black flex flex-col">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_42%] min-h-[calc(100vh-56px)]">

        {/* LEFT: headline + tagline + CTA */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-16">
          <div className="flex items-center gap-2.5 mb-7 font-mono text-[11px] tracking-[0.8px] uppercase text-[#007BFF]">
            <span className="inline-block w-6 h-px bg-[#007BFF]"></span>
            India&apos;s Premier AI Agency
          </div>

          <h1 className="font-bold leading-[0.92] tracking-[-0.025em] text-white mb-9">
            <span
              className="block text-[rgba(245,245,245,0.55)]"
              style={{ fontSize: "clamp(52px, 9.5vw, 140px)" }}
            >
              BUILT FOR
            </span>
            <span
              className="block text-white"
              style={{ fontSize: "clamp(72px, 13.5vw, 200px)" }}
            >
              GROWTH
            </span>
          </h1>

          <p className="text-[16px] leading-[1.6] text-white/45 max-w-[460px] mb-8">
            We build AI-powered workflows, automate your growth, and rank where it counts —
            so your business runs smarter with less effort.
          </p>

          <div className="flex flex-col gap-4">
            {/* Pilot badge */}
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-[rgba(0,195,100,0.9)] border border-[rgba(0,195,100,0.25)] bg-[rgba(0,195,100,0.07)] px-3.5 py-1.5 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(0,195,100,0.9)] animate-pulse flex-shrink-0" />
              Currently accepting 3 pilot projects — priority access, direct strategy.
            </div>

            <div className="flex items-center gap-8 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center font-semibold text-[14px] text-white bg-[#007BFF] rounded px-7 py-3.5 transition-opacity hover:opacity-90"
              >
                Apply for a pilot project →
              </a>
              <div className="font-mono text-[11px] tracking-[0.24px] text-white/35 leading-[1.8]">
                <div><span className="text-[#007BFF] mr-1">●</span>Bangalore — Innovation Hub</div>
                <div><span className="text-[#007BFF] mr-1">●</span>Vizag — Growth Hub</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Spline 3D scene — below text on mobile, right column on desktop */}
        <div className="relative h-72 md:h-auto overflow-hidden bg-black/[0.96]">
          {/* Spotlight cone */}
          <div
            className="absolute pointer-events-none z-[2]"
            style={{
              top: "-160px",
              left: "30%",
              width: "140%",
              height: "110%",
              background:
                "radial-gradient(ellipse 55% 45% at 38% 0%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 35%, transparent 70%)",
            }}
          />
          {/* Spline viewer — only rendered client-side to avoid SSR hydration mismatch */}
          <div ref={splineRef} className="absolute inset-0 w-full h-full z-[1]">
            {mounted && (
              // @ts-ignore — spline-viewer is a custom element
              <spline-viewer
                url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </div>

          {/* Hard-cover the "Built with Spline" badge (bottom-centre of viewer) */}
          <div
            className="absolute z-[3] pointer-events-none"
            style={{
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 200,
              height: 44,
              background: "#000",
              borderRadius: 8,
            }}
          />
        </div>

      </div>
    </section>
  );
}
