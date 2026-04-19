'use client';

import dynamic from 'next/dynamic';

export const FeaturesTimeline = dynamic(
  () => import('@/components/sections/FeaturesTimeline'),
  { ssr: false, loading: () => <div className="h-screen bg-black" /> }
);

export const ScrollingFeatures = dynamic(
  () => import('@/components/sections/ScrollingFeatures'),
  { ssr: false, loading: () => <div className="h-screen bg-black" /> }
);

export const ShaderHero = dynamic(
  () => import('@/components/sections/ShaderHero'),
  { ssr: false, loading: () => <div className="h-svh bg-[#050505]" /> }
);

export const Testimonials = dynamic(
  () => import('@/components/sections/Testimonials'),
  { ssr: false, loading: () => <div className="py-16 bg-black" /> }
);

export const ScrollHero = dynamic(
  () => import('@/components/sections/ScrollHero'),
  { ssr: false, loading: () => <div style={{ height: '400vh', background: '#050505' }} /> }
);
