'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
  Bot,
  Workflow,
  Search,
  FlaskConical,
  Users,
  FileText,
  Shield,
  HelpCircle,
  BarChart2,
  Mail,
  MapPin,
  Handshake,
  Network,
  BookOpen,
} from 'lucide-react';

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
        'bg-black/95 supports-[backdrop-filter]:bg-black/60 border-white/[0.06] backdrop-blur-lg':
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity p-1">
            <span className="font-bold text-white tracking-tight text-lg">
              VYZMA<span className="text-[#007BFF]">.</span>AI
            </span>
          </a>

          {/* Desktop nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white data-[state=open]:text-white">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black/95 border border-white/[0.08] p-1 pr-1.5">
                  <ul className="grid w-[520px] grid-cols-2 gap-2 rounded-md p-2">
                    {serviceLinks.map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                  <div className="px-2 pb-2">
                    <p className="text-white/40 text-xs font-mono">
                      Ready to start?{' '}
                      <a href="#contact" className="text-[#007BFF] hover:text-white transition-colors">
                        Book a discovery call →
                      </a>
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/70 hover:text-white data-[state=open]:text-white">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black/95 border border-white/[0.08] p-1 pr-1.5 pb-1.5">
                  <div className="grid w-[420px] grid-cols-2 gap-2">
                    <ul className="space-y-1 p-2">
                      {companyLinks.map((item, i) => (
                        <li key={i}>
                          <ListItem {...item} />
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-1 p-3">
                      {companyLinks2.map((item, i) => (
                        <li key={i}>
                          <NavigationMenuLink
                            href={item.href}
                            className="flex p-2 hover:bg-white/[0.05] flex-row rounded-md items-center gap-x-2 transition-colors"
                          >
                            <item.icon className="text-white/50 size-4" />
                            <span className="text-sm text-white/70 font-medium">{item.title}</span>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuLink
                href="#contact"
                className="px-3 text-sm text-white/70 hover:text-white transition-colors rounded-md p-2"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent px-2.5 h-8 text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-colors duration-200"
          >
            Book a Call
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#007BFF] hover:bg-[#0066CC] px-2.5 h-8 text-sm font-semibold text-white transition-colors duration-200"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile hamburger */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-white/10 bg-transparent text-white/70 hover:text-white"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-4" duration={300} />
        </Button>
      </nav>

      {/* Mobile menu */}
      <MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
        <NavigationMenu className="max-w-full">
          <div className="flex w-full flex-col gap-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-white/30">Services</span>
            {serviceLinks.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
            <span className="text-xs font-mono tracking-widest uppercase text-white/30 mt-2">Company</span>
            {companyLinks.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
            {companyLinks2.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
          </div>
        </NavigationMenu>
        <div className="flex flex-col gap-2">
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent h-8 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
          >
            Book a Call
          </a>
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center rounded-lg bg-[#007BFF] hover:bg-[#0066CC] h-8 text-sm font-semibold text-white transition-colors duration-200"
          >
            Start a Project
          </a>
        </div>
      </MobileMenu>
    </header>
  );
}

// ─── Mobile menu portal ───────────────────────────────────────────────────────

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        'bg-black/95 supports-[backdrop-filter]:bg-black/80 backdrop-blur-lg',
        'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y border-white/[0.06] md:hidden',
      )}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn(
          'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
          'size-full p-4',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

// ─── List item (shared) ───────────────────────────────────────────────────────

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
  return (
    <NavigationMenuLink
      href={href}
      className={cn(
        'w-full flex flex-row gap-x-2',
        'hover:bg-white/[0.05] hover:text-white focus:bg-white/[0.05] focus:text-white',
        'data-[active=true]:bg-white/[0.04] rounded-sm p-2 transition-colors',
        className,
      )}
      {...props}
    >
      <div className="bg-white/[0.04] border border-white/[0.06] flex aspect-square size-10 items-center justify-center rounded-md shrink-0">
        <Icon className="text-[#007BFF] size-4" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="text-sm font-medium text-white/80">{title}</span>
        {description && (
          <span className="text-xs text-white/40">{description}</span>
        )}
      </div>
    </NavigationMenuLink>
  );
}

// ─── Navigation data ──────────────────────────────────────────────────────────

const serviceLinks: LinkItem[] = [
  {
    title: 'AI Chatbots',
    href: '#contact',
    description: 'Conversational AI for support, leads & sales — 24/7',
    icon: Bot,
  },
  {
    title: 'Workflow Automation',
    href: '#contact',
    description: 'Connect tools, eliminate manual tasks end-to-end',
    icon: Workflow,
  },
  {
    title: 'Answer Engine Optimisation',
    href: '#contact',
    description: 'Rank in ChatGPT, Perplexity & Gemini results',
    icon: Search,
  },
  {
    title: 'R&D Systems',
    href: '#contact',
    description: 'Custom AI models & proprietary data pipelines',
    icon: FlaskConical,
  },
  {
    title: 'Analytics & Reporting',
    href: '#contact',
    description: 'Track AI impact with real-time dashboards',
    icon: BarChart2,
  },
  {
    title: 'Integrations',
    href: '#contact',
    description: 'Connect your CRM, ERP & existing stack',
    icon: Network,
  },
  {
    title: 'Vyzma PDF',
    href: 'https://vyzma-pdf.vercel.app',
    description: 'AI-powered service proposals & business reports',
    icon: BookOpen,
  },
];

const companyLinks: LinkItem[] = [
  {
    title: 'About Vyzma AI',
    href: '#contact',
    description: 'Bangalore & Vizag — building intelligent systems',
    icon: Users,
  },
  {
    title: 'Partnerships',
    href: '#contact',
    description: 'Collaborate with us for mutual growth',
    icon: Handshake,
  },
  {
    title: 'Contact Us',
    href: '#contact',
    description: 'vyzmaai.in@gmail.com · Bangalore · Vizag',
    icon: Mail,
  },
  {
    title: 'Offices',
    href: '#contact',
    description: 'Innovation Hub · Growth Hub',
    icon: MapPin,
  },
];

const companyLinks2: LinkItem[] = [
  {
    title: 'Privacy Policy',
    href: '#contact',
    icon: Shield,
  },
  {
    title: 'Terms of Service',
    href: '#contact',
    icon: FileText,
  },
  {
    title: 'Help Center',
    href: '#contact',
    icon: HelpCircle,
  },
];

// ─── useScroll hook ───────────────────────────────────────────────────────────

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
