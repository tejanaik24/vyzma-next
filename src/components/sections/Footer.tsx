'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Elegant Shape ────────────────────────────────────────────────────────────

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// ─── Fade-up variant (shared) ──────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

// ─── Footer Grid ──────────────────────────────────────────────────────────────

const footerColumns = [
  {
    heading: "About",
    content: (
      <p className="text-sm text-white/45 leading-relaxed">
        Vyzma AI is a Bangalore &amp; Vizag-based agency building intelligent
        systems — AI chatbots, workflow automation, and answer-engine
        strategies — that help businesses grow faster with less effort.
      </p>
    ),
  },
  {
    heading: "Services",
    content: (
      <ul className="flex flex-col gap-2.5">
        {["AI Chatbots", "Workflow Automation", "Answer Engines", "R&D Systems"].map(
          (s) => (
            <li key={s}>
              <a
                href="#"
                className="text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                {s}
              </a>
            </li>
          )
        )}
      </ul>
    ),
  },
  {
    heading: "Offices",
    content: (
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs font-mono tracking-widest uppercase text-[#007BFF] mb-1">
            Innovation Hub
          </p>
          <p className="text-sm text-white/70 font-semibold">Bangalore</p>
          <p className="text-xs text-white/35 mt-0.5">
            AI R&amp;D · Engineering · Strategy
          </p>
        </div>
        <div>
          <p className="text-xs font-mono tracking-widest uppercase text-[#007BFF] mb-1">
            Growth Hub
          </p>
          <p className="text-sm text-white/70 font-semibold">Vizag</p>
          <p className="text-xs text-white/35 mt-0.5">
            Local Partnerships · Client Success
          </p>
        </div>
      </div>
    ),
  },
  {
    heading: "Contact",
    content: (
      <div className="flex flex-col gap-3">
        <a
          href="mailto:vyzmaai.in@gmail.com"
          className="text-sm text-[#007BFF] hover:text-white transition-colors duration-200 border-b border-[#007BFF]/30 pb-0.5 self-start"
        >
          vyzmaai.in@gmail.com
        </a>
        <div className="flex gap-3 mt-1">
          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-white/40 hover:border-[#007BFF] hover:text-[#007BFF] transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Twitter / X */}
          <a
            href="#"
            aria-label="Twitter"
            className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-white/40 hover:border-[#007BFF] hover:text-[#007BFF] transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-white/40 hover:border-[#007BFF] hover:text-[#007BFF] transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    ),
  },
];

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="w-full bg-black">

      {/* ── Geometric hero band ─────────────────────────────────────────────── */}
      <div className="relative w-full flex items-center justify-center overflow-hidden bg-black py-24 md:py-32">
        {/* Ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl pointer-events-none" />

        {/* Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ElegantShape
            delay={0.3} width={600} height={140} rotate={12}
            gradient="from-indigo-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
          <ElegantShape
            delay={0.5} width={500} height={120} rotate={-15}
            gradient="from-rose-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[60%] md:top-[65%]"
          />
          <ElegantShape
            delay={0.4} width={300} height={80} rotate={-8}
            gradient="from-violet-500/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />
          <ElegantShape
            delay={0.6} width={200} height={60} rotate={20}
            gradient="from-amber-500/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />
          <ElegantShape
            delay={0.7} width={150} height={40} rotate={-25}
            gradient="from-cyan-500/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#007BFF]" />
              <span className="text-sm text-white/60 tracking-wide">
                India&apos;s Premier AI Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  VYZMA.AI
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                  Built for Growth.
                </span>
              </h2>
            </motion.div>

            {/* Sub-copy */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg md:text-xl text-white/40 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                AI-powered workflows, answer engines, and digital systems that
                help businesses grow faster — built in India, competing globally.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Top-fade blends into the section above */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* ── Footer grid ─────────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {footerColumns.map((col, i) => (
              <motion.div key={col.heading} custom={i} variants={fadeUp}>
                <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-white/30 mb-5">
                  {col.heading}
                </h3>
                {col.content}
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <p className="text-[11px] font-mono tracking-wider text-white/20">
              © 2026 Vyzma AI. Built in India.
            </p>
            <p className="text-[11px] font-mono tracking-wider text-white/20">
              All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>

    </footer>
  );
}
