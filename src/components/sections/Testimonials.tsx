'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Vyzma's AI chatbot now handles 80% of our customer queries. The ROI was visible within the first week.",
    author: "Priya Sharma",
    role: "Founder at NestKart, Bangalore",
    initials: "PS",
    color: "#007BFF",
    // South Asian woman — professional
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop&crop=faces",
  },
  {
    id: 2,
    quote: "The workflow automation saved our ops team 40 hours every week. Genuinely a game changer.",
    author: "Rahul Mehta",
    role: "CTO at ZestyPay, Mumbai",
    initials: "RM",
    color: "#C026D3",
    // South Asian man — professional
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&h=200&auto=format&fit=crop&crop=faces",
  },
  {
    id: 3,
    quote: "Their AEO strategy got us featured across ChatGPT and Perplexity within a month. Nothing else compares.",
    author: "Ananya Krishnan",
    role: "Co-founder at BrandSpark, Hyderabad",
    initials: "AK",
    color: "#10B981",
    // South Asian woman — professional
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&h=200&auto=format&fit=crop&crop=faces",
  },
];

function Avatar({ src, alt, initials, color }: { src: string; alt: string; initials: string; color: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${color}80, ${color}40)`, border: `1px solid ${color}60` }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote);
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote);
      setDisplayedRole(testimonials[index].role);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 400);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-10 py-16 bg-black">
      {/* Quote Container */}
      <div className="relative px-8">
        <span className="absolute -left-2 -top-6 text-7xl font-serif text-white/[0.06] select-none pointer-events-none">
          &ldquo;
        </span>

        <p
          className={cn(
            "text-2xl md:text-3xl font-light text-white text-center max-w-lg leading-relaxed transition-all duration-400 ease-out",
            isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
          )}
        >
          {displayedQuote}
        </p>

        <span className="absolute -right-2 -bottom-8 text-7xl font-serif text-white/[0.06] select-none pointer-events-none">
          &rdquo;
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 mt-2">
        {/* Role text */}
        <p
          className={cn(
            "text-xs text-white/40 tracking-[0.2em] uppercase transition-all duration-500 ease-out",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
          )}
        >
          {displayedRole}
        </p>

        <div className="flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index && !isActive;
            const showName = isActive || isHovered;

            return (
              <button
                key={testimonial.id}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative flex items-center gap-0 rounded-full cursor-pointer",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive ? "bg-white shadow-lg" : "bg-transparent hover:bg-white/10",
                  showName ? "pr-4 pl-2 py-2" : "p-0.5",
                )}
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    initials={testimonial.initials}
                    color={testimonial.color}
                  />
                  {isActive && (
                    <div className="absolute inset-0 rounded-full ring-2 ring-black/30" />
                  )}
                </div>

                {/* Expanding name */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    showName ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <span
                      className={cn(
                        "text-sm font-medium whitespace-nowrap block",
                        "transition-colors duration-300",
                        isActive ? "text-black" : "text-white",
                      )}
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
