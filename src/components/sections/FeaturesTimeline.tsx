'use client';

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap, Bot, Workflow, Search, FlaskConical } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  accent: string;
  glow: string;
  gradFrom: string;
  gradTo: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "AI Chatbots",
    date: "Always On",
    content:
      "Conversational AI that handles customer queries, lead qualification, and support — 24/7, without human intervention. Trained on your business context.",
    category: "Automation",
    icon: Bot,
    relatedIds: [2, 3],
    status: "completed",
    energy: 92,
    accent: "#007BFF",
    glow: "rgba(0,123,255,0.6)",
    gradFrom: "#007BFF",
    gradTo: "#00D4FF",
  },
  {
    id: 2,
    title: "Workflow Automation",
    date: "End-to-End",
    content:
      "Connect your tools, eliminate manual tasks, and build intelligent pipelines that run your operations autonomously — from CRM to delivery.",
    category: "Productivity",
    icon: Workflow,
    relatedIds: [1, 4],
    status: "completed",
    energy: 87,
    accent: "#C026D3",
    glow: "rgba(192,38,211,0.6)",
    gradFrom: "#C026D3",
    gradTo: "#7C3AED",
  },
  {
    id: 3,
    title: "Answer Engines",
    date: "AI-First SEO",
    content:
      "Optimise your brand to appear in ChatGPT, Perplexity, and Gemini answers. Be the source, not just a result — dominate AI-driven search.",
    category: "Visibility",
    icon: Search,
    relatedIds: [1, 4],
    status: "in-progress",
    energy: 78,
    accent: "#10B981",
    glow: "rgba(16,185,129,0.6)",
    gradFrom: "#10B981",
    gradTo: "#0891B2",
  },
  {
    id: 4,
    title: "R&D Systems",
    date: "Custom Build",
    content:
      "Bespoke AI research and development — from fine-tuned models to proprietary data pipelines. We build the intelligence layer your business needs.",
    category: "Innovation",
    icon: FlaskConical,
    relatedIds: [2, 3],
    status: "in-progress",
    energy: 70,
    accent: "#F43F5E",
    glow: "rgba(244,63,94,0.6)",
    gradFrom: "#F43F5E",
    gradTo: "#F97316",
  },
];

// ─── Mobile: stacked service cards ───────────────────────────────────────────

function MobileOrbitalList({ timelineData }: RadialOrbitalTimelineProps) {
  return (
    <div className="w-full bg-black py-12 px-5 flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative flex items-center justify-center" style={{ width: 36, height: 36 }}>
          <div
            className="absolute rounded-full animate-pulse"
            style={{
              width: 36, height: 36,
              background: 'conic-gradient(from 0deg, #007BFF, #00D4FF, #C026D3, #F43F5E, #007BFF)',
              filter: 'blur(8px)', opacity: 0.7,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 24, height: 24,
              background: 'linear-gradient(135deg, rgba(0,123,255,0.4) 0%, rgba(192,38,211,0.4) 100%)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          />
        </div>
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/30">Our Services</span>
      </div>

      {timelineData.map((item) => {
        const Icon = item.icon as React.FC<{ size?: number; style?: React.CSSProperties }>;
        return (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(5,5,5,0.75)',
              backdropFilter: 'blur(24px)',
              border: `1px solid ${item.accent}40`,
              boxShadow: `0 0 24px ${item.glow.replace('0.6', '0.08')}`,
            }}
          >
            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 36, height: 36,
                      background: `linear-gradient(135deg, ${item.gradFrom}, ${item.gradTo})`,
                      border: `2px solid ${item.accent}`,
                      boxShadow: `0 0 12px ${item.glow}`,
                    }}
                  >
                    <Icon size={14} style={{ color: '#fff' }} />
                  </div>
                  <h3 className="text-sm font-bold" style={{ color: item.accent }}>{item.title}</h3>
                </div>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{ background: `${item.accent}20`, border: `1px solid ${item.accent}50`, color: item.accent }}
                >
                  {item.status === 'completed' ? 'LIVE' : 'BUILDING'}
                </span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed mb-3">{item.content}</p>
              <div className="pt-3 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] mb-1.5">
                  <span className="text-white/40">Capability</span>
                  <span className="font-mono" style={{ color: item.accent }}>{item.energy}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.energy}%`,
                      background: `linear-gradient(90deg, ${item.gradFrom}, ${item.gradTo})`,
                      boxShadow: `0 0 8px ${item.glow}`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Desktop: radial orbital ──────────────────────────────────────────────────

function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const rafRef = useRef<number>(0);
  // Smaller orbit radius on mobile so nodes don't get clipped
  const [radius, setRadius] = useState(() =>
    typeof window !== 'undefined' ? (window.innerWidth < 768 ? 130 : 200) : 200
  );

  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 768 ? 130 : 200);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulse: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulse[relId] = true; });
        setPulseEffect(newPulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    let lastTime = 0;
    const step = (now: number) => {
      if (now - lastTime >= 50) {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
        lastTime = now;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
<div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* ── Aurora Central Orb ── */}
          <div className="absolute z-10 flex items-center justify-center" style={{ width: 120, height: 120 }}>
            {/* Outermost aurora halo */}
            <div
              className="absolute rounded-full animate-ping"
              style={{
                width: 140,
                height: 140,
                background: "radial-gradient(circle, rgba(0,123,255,0.15) 0%, transparent 70%)",
                animationDuration: "3s",
              }}
            />
            {/* Second aurora ring */}
            <div
              className="absolute rounded-full animate-ping"
              style={{
                width: 110,
                height: 110,
                background: "radial-gradient(circle, rgba(192,38,211,0.2) 0%, transparent 70%)",
                animationDuration: "2.3s",
                animationDelay: "0.4s",
              }}
            />
            {/* Inner glow ring */}
            <div
              className="absolute rounded-full animate-pulse"
              style={{
                width: 88,
                height: 88,
                background: "conic-gradient(from 0deg, #007BFF, #00D4FF, #C026D3, #F43F5E, #007BFF)",
                filter: "blur(12px)",
                opacity: 0.7,
              }}
            />
            {/* Glass orb body */}
            <div
              className="absolute rounded-full"
              style={{
                width: 72,
                height: 72,
                background: "linear-gradient(135deg, rgba(0,123,255,0.4) 0%, rgba(192,38,211,0.4) 50%, rgba(244,63,94,0.3) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 0 40px rgba(0,123,255,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            />
            {/* Core white dot */}
            <div
              className="absolute rounded-full animate-pulse"
              style={{
                width: 20,
                height: 20,
                background: "radial-gradient(circle, #fff 0%, rgba(0,212,255,0.8) 100%)",
                boxShadow: "0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,123,255,0.5)",
              }}
            />
          </div>

          {/* ── Orbit Ring — gradient glow ── */}
          <svg
            className="absolute pointer-events-none"
            width={radius * 2 + 20}
            height={radius * 2 + 20}
            viewBox={`${-radius - 10} ${-radius - 10} ${radius * 2 + 20} ${radius * 2 + 20}`}
            style={{ opacity: 0.5 }}
          >
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#007BFF" />
                <stop offset="33%" stopColor="#C026D3" />
                <stop offset="66%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
              <filter id="orbitGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="0" cy="0" r={radius} fill="none" stroke="url(#orbitGrad)" strokeWidth="1.5" filter="url(#orbitGlow)" />
          </svg>

          {/* ── Nodes ── */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon as React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Neon aura halo */}
                <div
                  className="absolute rounded-full transition-all duration-500"
                  style={{
                    width: isExpanded ? 80 : isPulsing ? 70 : 56,
                    height: isExpanded ? 80 : isPulsing ? 70 : 56,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`,
                    filter: "blur(8px)",
                    animation: isPulsing ? "pulse 1s ease-in-out infinite" : "none",
                  }}
                />

                {/* Icon circle */}
                <div
                  className="relative flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    width: 44,
                    height: 44,
                    background: isExpanded
                      ? `linear-gradient(135deg, ${item.gradFrom}, ${item.gradTo})`
                      : isRelated
                      ? `linear-gradient(135deg, ${item.gradFrom}99, ${item.gradTo}99)`
                      : "rgba(0,0,0,0.8)",
                    border: `2px solid ${isExpanded ? item.accent : isRelated ? item.accent : item.accent + "60"}`,
                    boxShadow: isExpanded
                      ? `0 0 20px ${item.glow}, 0 0 40px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.2)`
                      : isRelated
                      ? `0 0 12px ${item.glow}`
                      : `0 0 6px ${item.accent}40`,
                    backdropFilter: "blur(12px)",
                    transform: isExpanded ? "scale(1.5)" : "scale(1)",
                  }}
                >
                  <Icon
                    size={16}
                    className="transition-colors duration-300"
                    style={{ color: isExpanded ? "#fff" : item.accent }}
                  />
                </div>

                {/* Label */}
                <div
                  className="absolute whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300"
                  style={{
                    top: 52,
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: isExpanded ? item.accent : "rgba(255,255,255,0.65)",
                    textShadow: isExpanded ? `0 0 12px ${item.glow}` : "none",
                  }}
                >
                  {item.title}
                </div>

                {/* ── Expanded Glass Card ── */}
                {isExpanded && (
                  <div
                    className="absolute w-56 md:w-72 overflow-visible"
                    style={{ top: 68, left: "50%", transform: "translateX(-50%)" }}
                  >
                    {/* connector line */}
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4"
                      style={{ background: `linear-gradient(to bottom, ${item.accent}, transparent)` }}
                    />
                    <div
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: "rgba(5,5,5,0.75)",
                        backdropFilter: "blur(24px)",
                        border: `1px solid ${item.accent}40`,
                        boxShadow: `0 0 40px ${item.glow.replace("0.6", "0.2")}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                      }}
                    >
                      {/* Card header accent line */}
                      <div
                        className="h-px w-full"
                        style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                      />

                      <div className="p-4">
                        {/* Status + date row */}
                        <div className="flex justify-between items-center mb-3">
                          <span
                            className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                            style={{
                              background: `${item.accent}20`,
                              border: `1px solid ${item.accent}50`,
                              color: item.accent,
                            }}
                          >
                            {item.status === "completed" ? "LIVE" : "BUILDING"}
                          </span>
                          <span className="text-[10px] font-mono text-white/40">{item.date}</span>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-sm font-bold mb-2"
                          style={{ color: item.accent, textShadow: `0 0 8px ${item.glow}` }}
                        >
                          {item.title}
                        </h3>

                        {/* Content */}
                        <p className="text-xs text-white/60 leading-relaxed">{item.content}</p>

                        {/* Energy bar */}
                        <div className="mt-4 pt-3 border-t border-white/5">
                          <div className="flex justify-between items-center text-[10px] mb-1.5">
                            <span className="flex items-center gap-1 text-white/40">
                              <Zap size={9} style={{ color: item.accent }} /> Capability
                            </span>
                            <span className="font-mono" style={{ color: item.accent }}>{item.energy}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${item.energy}%`,
                                background: `linear-gradient(90deg, ${item.gradFrom}, ${item.gradTo})`,
                                boxShadow: `0 0 8px ${item.glow}`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Connected nodes */}
                        {item.relatedIds.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-white/5">
                            <div className="flex items-center gap-1 mb-2">
                              <Link size={9} style={{ color: item.accent }} />
                              <span className="text-[10px] uppercase tracking-wider font-medium text-white/30">
                                Connected
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {item.relatedIds.map((relatedId) => {
                                const relatedItem = timelineData.find((i) => i.id === relatedId);
                                return (
                                  <button
                                    key={relatedId}
                                    className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full transition-all duration-200 cursor-pointer"
                                    style={{
                                      background: `${relatedItem?.accent || "#fff"}15`,
                                      border: `1px solid ${relatedItem?.accent || "#fff"}30`,
                                      color: relatedItem?.accent || "#fff",
                                    }}
                                    onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                  >
                                    {relatedItem?.title}
                                    <ArrowRight size={8} />
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function FeaturesTimeline() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}
