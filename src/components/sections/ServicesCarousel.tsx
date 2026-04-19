'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Image from 'next/image';

const services = [
  {
    id: 'chatbots',
    num: '01',
    tag: 'Conversational AI',
    title: 'AI Chatbots',
    summary:
      '24/7 intelligent assistants for sales, support, and lead capture — trained on your business, deployed on your website or WhatsApp.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=85&fit=crop',
    accent: '#007BFF',
  },
  {
    id: 'automation',
    num: '02',
    tag: 'Automation',
    title: 'Workflow Automation',
    summary:
      'End-to-end process automation that eliminates manual work. Connect your CRM, tools, and data into one autonomous pipeline.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85&fit=crop',
    accent: '#007BFF',
  },
  {
    id: 'aeo',
    num: '03',
    tag: 'AI-First Search',
    title: 'AEO · GEO · SEO',
    summary:
      'Rank on Google, appear in ChatGPT and Perplexity answers, and dominate local search — three strategies, one integrated system.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&fit=crop',
    accent: '#007BFF',
  },
  {
    id: 'voice',
    num: '04',
    tag: 'Voice AI',
    title: 'AI Calling Agents',
    summary:
      'AI voice agents that make and receive calls — follow up with leads, confirm appointments, handle FAQs. Sounds human. Works better.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=85&fit=crop',
    accent: '#007BFF',
  },
  {
    id: 'custom',
    num: '05',
    tag: 'Bespoke Build',
    title: 'Custom AI Solutions',
    summary:
      'Purpose-built AI for your exact operations — fine-tuned models, RAG systems, proprietary data pipelines, custom dashboards.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=85&fit=crop',
    accent: '#007BFF',
  },
  {
    id: 'web',
    num: '06',
    tag: 'Design + Build',
    title: 'Website Design & Dev',
    summary:
      'Fast, conversion-focused websites built to attract leads and support your AI systems from day one. Every pixel has a purpose.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85&fit=crop',
    accent: '#007BFF',
  },
];

export default function ServicesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
      setCurrent(api.selectedScrollSnap());
    };
    update();
    api.on('select', update);
    api.on('reInit', update);
    return () => { api.off('select', update); api.off('reInit', update); };
  }, [api]);

  // GSAP entrance — transform+opacity only (gsap-performance)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ctx: any;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from('.sc-head', {
          y: 24, opacity: 0, immediateRender: false,
          duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
        gsap.from('.sc-track', {
          y: 32, opacity: 0, immediateRender: false,
          duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        });
      }, sectionRef);
    };
    init();
    return () => ctx?.revert(); // kill stray tweens (gsap-performance)
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black border-t border-white/[0.06] overflow-hidden"
      style={{ paddingTop: 'clamp(64px, 8vw, 120px)', paddingBottom: 'clamp(64px, 8vw, 120px)' }}
    >
      {/* Header row */}
      <div className="sc-head max-w-6xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2.5 mb-5 font-mono text-[10px] tracking-[0.1em] uppercase text-white/35">
            <span className="inline-block w-5 h-px bg-[#007BFF] opacity-60" />
            What We Build
          </div>
          <h2
            className="font-bold text-white leading-[1.04] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Intelligence,{' '}
            <span className="text-white/35">deployed.</span>
          </h2>
        </div>

        {/* Nav buttons */}
        <div className="flex items-center gap-3">
          {/* Dot indicators */}
          <div className="hidden md:flex items-center gap-1.5 mr-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className="transition-all duration-200 rounded-full cursor-pointer"
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  background: i === current ? '#007BFF' : 'rgba(255,255,255,0.18)',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => api?.scrollPrev()}
            disabled={!canPrev}
            className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 disabled:opacity-25 transition-all duration-150 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            disabled={!canNext}
            className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 disabled:opacity-25 transition-all duration-150 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Carousel — touch-action: pan-y via carousel.tsx for scroll fix */}
      <div className="sc-track pl-6 md:pl-12">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            dragFree: false,
            // Prevent carousel capturing vertical scroll (scroll sticking fix)
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {services.map((svc) => (
              <CarouselItem
                key={svc.id}
                className="pl-5 basis-[85%] sm:basis-[60%] md:basis-[42%] lg:basis-[33%]"
              >
                <a
                  href="#contact"
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                  style={{ height: 380 }}
                  aria-label={svc.title}
                >
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 42vw, 33vw"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Tag pill */}
                    <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.08em] uppercase text-white/60 border border-white/20 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {svc.tag}
                    </div>
                    {/* Step num */}
                    <div
                      className="absolute top-4 right-4 font-mono text-[11px] font-medium tabular-nums"
                      style={{ color: 'rgba(0,123,255,0.8)' }}
                    >
                      {svc.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3
                      className="text-white font-semibold tracking-[-0.01em] leading-[1.2] mb-2.5"
                      style={{ fontSize: 18 }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-[13px] leading-[1.7] text-white/40 line-clamp-3">
                      {svc.summary}
                    </p>

                    {/* Arrow — slides in on hover */}
                    <div className="mt-auto pt-4 flex items-center gap-2 text-[#007BFF] text-[12px] font-mono tracking-[0.04em] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span>Learn more</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom blue accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#007BFF] opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Mobile dot indicators */}
      <div className="md:hidden flex items-center justify-center gap-1.5 mt-8">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className="transition-all duration-200 rounded-full cursor-pointer"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? '#007BFF' : 'rgba(255,255,255,0.18)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
