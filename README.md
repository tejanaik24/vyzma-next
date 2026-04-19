# VYZMA.AI — Landing Page

**India's Premier AI Agency** website. Built with Next.js 16, React 19, Three.js WebGPU, GSAP, and Tailwind CSS v4.

**Live**: **https://vyzma.in**

---

## 🎯 Quick Stats

| Platform | Status | URL/ID |
|---|---|---|
| Website | ✅ Live | https://vyzma.in |
| Google Business Profile | ✅ Verified | Business ID: 16348959545075177878 |
| GBP Public URL | ✅ Active | [Google Maps Listing](https://www.google.com/search?q=vyzma) |
| SEO Blog Content | ✅ 6 Posts Ready | `/home/ubuntu/vyzma_seo_geo_aeo_blogs.md` |

---

## 🚀 What's Been Set Up

### Google Business Profile (GBP)
- **Business Name**: vyzma
- **Category**: Internet marketing service
- **Description**: "Vyzma AI is India's premier AI agency, building intelligent systems that help businesses grow faster"
- **Phone**: 088867 20908
- **Website**: https://vyzma.in/
- **Service Area**: India (nationwide)
- **Locations**: 
  - Bangalore — Innovation Hub (Sarjapur Road)
  - Vizag — Growth Hub (MVP Colony)

### Services Added to GBP
1. AI Automation Services
2. Chatbot Development
3. Workflow Automation
4. AI Consulting

**Preserved existing services**: Digital marketing, SEO, Web design, Branding, etc.

### SEO Content Ready
6 comprehensive blog posts covering April 2026 trending topics:
- AI-Powered SEO Trends 2026
- GEO (Generative Engine Optimization) Complete Guide
- AEO (Answer Engine Optimization) Strategy
- Voice Search Optimization for AI Companies
- Local SEO for AI Agencies
- Content Marketing Strategy for AI Companies

### Brand Photos Downloaded
Location: `/home/ubuntu/vyzma_photos/`
- hero_ai.jpg, office_team.jpg, tech_work.jpg
- ai_robot.jpg, workspace.jpg, modern_office.jpg

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.3 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui via @base-ui/react |
| 3D / Shader | Three.js r183 WebGPU + TSL, @react-three/fiber, @react-three/drei |
| Scroll Animation | GSAP 3 + ScrollTrigger |
| Icons | lucide-react v1 |
| Hosting | Vercel (aliased to vyzma.in) |

---

## 📄 Sections (top → bottom)

| Component | Description |
|---|---|
| `Header` | Sticky nav — Services & Company dropdowns, mobile menu, CTA → `#contact` |
| `Hero` | Full-viewport headline + Spline 3D robot. On mobile: text stacks above robot (h-72). |
| `FeaturesTimeline` | Radial orbital timeline — 4 services with neon glow nodes. Radius 200px desktop / 130px mobile. |
| `ScrollingFeatures` | Aurora UI — 4 colour-coded feature slides. Desktop: scroll-hijacked sticky panel. Mobile: flat stacked sections. |
| `ShaderHero` | Three.js WebGPU depth-parallax shader with bloom. Canvas wrapped in error boundary — falls back to gradient if GPU unsupported. |
| `Testimonials` | 3 Indian client quotes with avatar selector |
| `ScrollHero` | GSAP scroll-driven 3D icosahedron with cinematic PBR shaders |
| `ContactForm` | Lead capture form → mailto fallback to vyzmaai.in@gmail.com |
| `Footer` | CTA band + 4-column grid + social links |
| `WhatsApp Button` | Floating fixed button bottom-right → wa.me/8886720908, opens new tab |

---

## ⚡ Performance Architecture

Heavy sections are lazy-loaded via `next/dynamic({ ssr: false })` through `ClientSections.tsx`. Only `Hero`, `ContactForm`, and `Footer` are included in the initial bundle.

```
Initial load  →  Hero + Header + Footer (fast)
On scroll     →  FeaturesTimeline, ScrollingFeatures, ShaderHero, Testimonials, ScrollHero
```

This pattern (inspired by lazy-loading Spline) took comparable sites from Lighthouse 30 → 90.

---

## 🛠️ Dev Setup

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

### Deploy to Vercel
```bash
vercel deploy --prod --yes
```

---

## 📝 Key Notes

### Lazy Loading (ClientSections.tsx)
All below-fold heavy components are exported from `src/components/sections/ClientSections.tsx` using `next/dynamic`. This file must have `'use client'` — in Next.js 15+, `ssr: false` dynamic imports must live in client files.

### Mobile Responsiveness
- **Hero**: `grid-cols-1 md:grid-cols-[1fr_42%]` — text full-width on mobile, Spline stacked below at `h-72`
- **FeaturesTimeline**: orbital radius is `130px` on mobile (< 768px), `200px` on desktop. SVG ring and node positions computed from the same `radius` state. Expanded cards `w-56 md:w-72`.
- **ScrollingFeatures**: on mobile renders `MobileServiceList` (flat stacked sections, same content/colors). On desktop renders `ScrollingFeatureShowcase` (scroll-hijacked sticky panel). Toggle via `useState(() => window.innerWidth < 768)` — safe because component is `ssr: false`.

### WebGPU Fallback (ShaderHero)
`three/webgpu` import auto-detects GPU capability and falls back to WebGL 2. Additionally, the Canvas is wrapped in a `CanvasErrorBoundary` React class component — if the renderer throws (unsupported GPU/browser), a gradient background renders instead and the text overlay remains visible.

### @base-ui/react (shadcn)
This project uses `@base-ui/react` (not Radix). `asChild` is **not supported**. Use plain `<a>` tags with `buttonVariants` classes for link-buttons, and `href` directly on `NavigationMenuLink`.

### lucide-react v1
Strict icon typing. Cast icons before passing custom props:
```tsx
const Icon = item.icon as React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>;
```

### Three.js WebGPU (ShaderHero)
Uses `three/webgpu` renderer and TSL (Three Shading Language). TSL type definitions are experimental — use `as any` casts on `bloom()` and texture nodes where TypeScript complains. The scan-line uniform must pass the live `uScanProgress` node directly (not `float(uScanProgress.value)`) so the shader graph tracks updates each frame.

### Spline Watermark
The `hide-logo` attribute on `<spline-viewer>` doesn't work on v1.0.82. Instead:
1. Shadow DOM CSS injection via `useEffect` — injects a `<style>` into the viewer's shadow root targeting `#logo` and `a[href*="spline.design"]`.
2. Black cover `<div>` absolutely positioned over the badge location as a hard fallback.

### FeaturesTimeline Animation
Uses `requestAnimationFrame` with 50ms throttle (not `setInterval`) for the auto-rotate loop. Cancels via `cancelAnimationFrame` on cleanup.

### ScrollHero CSS
Section positions use `[data-section="0..3"]` attribute selectors (not `nth-child`) because the sticky canvas and progress bar are siblings that shift the nth-child count.

---

## 🔍 SEO & Discoverability

| File | Purpose |
|---|---|
| `src/app/layout.tsx` | Global metadata — title, description, OpenGraph, Twitter card, `metadataBase` |
| `src/app/sitemap.ts` | Auto-generates `/sitemap.xml` |
| `src/app/robots.ts` | Auto-generates `/robots.txt` pointing to sitemap |

### SEO Actions Completed
- ✅ Google Business Profile listing created & verified
- ✅ 6 SEO/GEO/AEO blog posts written (trending April 2026 topics)
- ✅ Brand photos downloaded to `/home/ubuntu/vyzma_photos/`
- ⏳ Photos need upload to GBP (manual step)
- ⏳ Blog posts need publication to vyzma.in/blog
- ⏳ GBP business hours need manual configuration

### Submit to Google
- Sitemap: `https://vyzma.in/sitemap.xml`
- Search Console: `https://search.google.com/search-console`
- GBP Dashboard: `https://business.google.com/locations`

---

## 🎨 Brand Tokens

```
Primary blue:    #007BFF
Cyan:            #00D4FF
Magenta/Violet:  #C026D3
Emerald:         #10B981
Rose:            #F43F5E
WhatsApp green:  #25D366
Background:      #000000
```

---

## 📞 Contact

| Channel | Details |
|---|---|
| Email | vyzmaai.in@gmail.com |
| WhatsApp | +91 88867 20908 |
| Website | https://vyzma.in |
| Bangalore | Innovation Hub (Sarjapur Road) |
| Vizag | Growth Hub (MVP Colony) |
| Google Business | [vyzma on Google](https://www.google.com/search?q=vyzma) |

---

## 📁 Project Files Reference

| File | Description |
|---|---|
| `/home/ubuntu/vyzma_seo_geo_aeo_blogs.md` | 6 ready-to-publish blog posts |
| `/home/ubuntu/vyzma_gbp_setup_summary.md` | GBP setup summary & manual instructions |
| `/home/ubuntu/vyzma_photos/` | Brand photos (6 images) |
| `/home/ubuntu/vyzma-next/` | Next.js website source |
| `/home/ubuntu/vyzma-website/` | Legacy HTML website |

---

*Last Updated: April 14, 2026*
