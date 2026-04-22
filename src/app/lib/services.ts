export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
  accentColor: string;
}

export const SERVICES: Service[] = [
  {
    id: "ai-chatbots",
    slug: "ai-chatbots",
    title: "AI Chatbots",
    tag: "AI Agents",
    summary: "Intelligent conversational agents powered by GPT-4o & Claude for 24/7 customer support",
    description: "Transform your customer support with AI-powered chatbots that understand context, handle complex queries, and deliver personalized responses round the clock. Our chatbots integrate seamlessly with your existing systems to provide instant, accurate answers while escalating to human agents when needed.",
    accentColor: "#8B5CF6",
    features: [
      { title: "GPT-4o & Claude Integration", description: "Powered by the latest frontier models for natural, context-aware conversations" },
      { title: "Multi-Platform Deployment", description: "Deploy across website, WhatsApp, Telegram, Slack, and custom integrations" },
      { title: "Custom Knowledge Base", description: "Train on your documents, FAQs, and product catalogs for domain-specific responses" },
      { title: "Smart Escalation", description: "Automatically detect complex queries and escalate to human agents with full context" },
      { title: "Analytics Dashboard", description: "Track conversations, sentiment, resolution rates, and improvement opportunities" },
      { title: "Voice & Multimodal", description: "Support voice inputs, image analysis, and file processing capabilities" },
      { title: "Continuous Learning", description: "AI improves over time based on interaction patterns and feedback" },
      { title: "Enterprise Security", description: "SOC 2 compliant, GDPR ready, with end-to-end encryption" }
    ],
    faqs: [
      { question: "How does the AI chatbot learn about our products?", answer: "We train the chatbot on your knowledge base — documents, FAQs, product catalogs, and past conversations. This takes 1-2 weeks depending on content volume." },
      { question: "Can it handle complex technical support queries?", answer: "Yes, the AI can be trained on technical documentation and support articles. For highly complex issues, it will gather relevant information and escalate to your support team with context." },
      { question: "What platforms can the chatbot be deployed on?", answer: "We support website widgets, WhatsApp Business, Telegram, Slack, Microsoft Teams, and custom API integrations with your existing systems." },
      { question: "How accurate are the AI responses?", answer: "Our chatbots achieve 85-95% accuracy on trained topics. For untrained queries, the system is configured to either admit uncertainty or escalate to human agents." },
      { question: "Is there a setup fee?", answer: "Yes, there's a one-time setup fee for knowledge base creation, training, and integration. Monthly pricing is based on conversation volume."
      }
    ]
  },
  {
    id: "workflow-automation",
    slug: "workflow-automation",
    title: "Workflow Automation",
    tag: "Operations",
    summary: "Automate repetitive tasks and business processes with AI-powered workflows",
    description: "Eliminate manual, repetitive tasks that drain your team's productivity. Our AI-powered workflow automation handles data entry, document processing, approvals, and cross-system syncing — freeing your team to focus on high-value work. Built on n8n or Make.com with custom AI enhancements for intelligent decision-making.",
    accentColor: "#10B981",
    features: [
      { title: "Intelligent Process Mapping", description: "AI analyzes your workflows to identify automation opportunities and bottlenecks" },
      { title: "Cross-System Sync", description: "Connect CRM, ERP, accounting, and custom tools with bidirectional data flow" },
      { title: "Document Processing", description: "Auto-extract data from invoices, contracts, forms, and emails with AI OCR" },
      { title: "Smart Approvals", description: "Route requests based on complexity, value, or AI-assessed risk scores" },
      { title: "Scheduled Triggers", description: "Time-based automation for reports, follow-ups, and periodic tasks" },
      { title: "Error Handling", description: "Automatic retry logic, fallback paths, and alert systems for failures" },
      { title: "Audit Trails", description: "Complete logs of all automation actions for compliance and debugging" },
      { title: "Custom Integrations", description: "API development for connecting bespoke or legacy systems" }
    ],
    faqs: [
      { question: "What systems can you integrate with?", answer: "We integrate with 500+ apps including Salesforce, HubSpot, QuickBooks, Xero, Zoho, Freshworks, custom CRMs, and any API-accessible system." },
      { question: "How long does automation setup take?", answer: "Simple automations take 1-2 weeks. Complex cross-system workflows with AI processing typically take 3-4 weeks including testing." },
      { question: "Do we need coding knowledge?", answer: "No. We build and maintain the automation. Your team just reviews dashboards and handles exceptions that require human judgment." },
      { question: "What happens if an automation fails?", answer: "Our systems include retry logic, fallback paths, and immediate alerts. Failed tasks are logged with error details for manual review." },
      { question: "Can we request new automations later?", answer: "Yes, you can request additional workflows anytime. We offer bundled hours or per-automation pricing for ongoing development."
      }
    ]
  },
  {
    id: "seo-aeo-geo",
    slug: "seo-aeo-geo",
    title: "SEO & AI Search",
    tag: "Organic Growth",
    summary: "Rank higher on Google & get cited by AI assistants like ChatGPT, Claude & Perplexity",
    description: "Traditional SEO meets AI search optimization. We optimize for Google while building your presence in AI-generated answers — ensuring ChatGPT, Claude, and Perplexity cite your business. Includes technical SEO, content strategy, and the emerging AEO/GEO practices that define the future of search.",
    accentColor: "#F59E0B",
    features: [
      { title: "Technical SEO Audit", description: "Site speed, schema markup, crawlability, and core web vitals optimization" },
      { title: "AI Search Optimization", description: "Structure content for citation in ChatGPT, Claude, Perplexity, and Gemini responses" },
      { title: "Keyword Strategy", description: "Data-driven targeting of high-intent, high-conversion keywords" },
      { title: "Content Engine", description: "Regular SEO-optimized blogs, guides, and resource pages on topic clusters" },
      { title: "Local SEO", description: "Google Business Profile optimization with multi-location management" },
      { title: "Schema & Structured Data", description: "FAQ, Product, Service, Organization schemas for rich search results" },
      { title: "Link Building", description: "Ethical outreach for high-quality, relevant backlinks" },
      { title: "Monthly Reporting", description: "Rankings, traffic, AI citation tracking, and growth recommendations" }
    ],
    faqs: [
      { question: "How long until we see results?", answer: "Technical fixes show impact in 2-4 weeks. Content and authority improvements typically take 3-6 months for sustained results." },
      { question: "What is AEO/GEO?", answer: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are new disciplines for appearing in AI-generated answers. We include this in all our SEO packages." },
      { question: "Do you guarantee first-page rankings?", answer: "No ethical SEO can guarantee specific rankings. We commit to white-hat practices, documented strategies, and monthly progress reports with fair timelines." },
      { question: "How is AI search different from Google?", answer: "AI assistants cite sources differently — they extract from content that directly answers questions. We optimize for both Google and AI citation." },
      { question: "What's included in monthly retainers?", answer: "Continuous technical improvements, 2-4 new content pieces monthly, link building, schema updates, and detailed analytics."
      }
    ]
  },
  {
    id: "voice-ai",
    slug: "voice-ai",
    title: "Voice AI",
    tag: "Speech AI",
    summary: "Natural voice assistants with real-time speech recognition and synthesis",
    description: "Deploy natural-sounding voice AI agents for customer calls, IVR systems, and real-time conversations. Our voice AI understands context, handles accents, and responds with human-like speech synthesis. Perfect for customer support automation, appointment scheduling, and sales qualification.",
    accentColor: "#EC4899",
    features: [
      { title: "Real-Time Speech Recognition", description: "Sub-300ms latency with accent and noise handling" },
      { title: "Human-Like TTS", description: "Natural voice synthesis in 50+ languages and voices" },
      { title: "Voice Cloning", description: "Create consistent brand voices from short audio samples" },
      { title: "IVR Replacement", description: "AI-powered phone tree that actually understands intent" },
      { title: "Appointment Booking", description: "Calendar integration for self-service scheduling" },
      { title: "Call Escalation", description: "Seamless handoff to human agents with full context" },
      { title: "Multi-Language", description: "Support callers in Hindi, English, Tamil,Telugu, and 40+ languages" },
      { title: "Compliance Recording", description: "Automatic call logging for financial and healthcare compliance" }
    ],
    faqs: [
      { question: "Can it handle noisy environments?", answer: "Yes, our voice AI uses noise suppression and can route to different models based on call quality. It performs well in home and office environments." },
      { question: "What languages are supported?", answer: "50+ languages including Hindi, English, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, and all major global languages." },
      { question: "How is this different from IVR?", answer: "Traditional IVR requires buttons and fixed paths. Voice AI understands natural speech, handles varied queries, and learns from interactions." },
      { question: "Can it make outbound calls?", answer: "Yes, we can set up AI-powered outbound for reminders, follow-ups, and sales calls with human-like conversations." },
      { question: "Is voice cloning available?", answer: "Yes, we can create a custom voice from your recordings — typically 30 minutes of studio-quality audio."
      }
    ]
  },
  {
    id: "custom-ai",
    slug: "custom-ai",
    title: "Custom AI Development",
    tag: "AI Engineering",
    summary: "Bespoke AI solutions built for your specific business requirements",
    description: "When off-the-shelf AI won't work, we build custom solutions. From proprietary ML models to AI-powered products, our team engineers bespoke AI systems designed for your unique requirements. Full-cycle development from concept to deployment with ongoing support.",
    accentColor: "#3B82F6",
    features: [
      { title: "Requirement Analysis", description: "Deep discovery to define AI scope, constraints, and success metrics" },
      { title: "Custom Model Training", description: "Fine-tuned models on your proprietary data for domain expertise" },
      { title: "RAG Systems", description: "Retrieval-augmented generation combining your data with LLMs" },
      { title: "AI Product Development", description: "End-to-end development of AI-first products" },
      { title: "API Development", description: "RESTful or GraphQL APIs for AI integrations" },
      { title: "Model Optimization", description: "Distillation, quantization, and edge deployment" },
      { title: "Testing & QA", description: "Rigorous evaluation on diverse test cases" },
      { title: "Ongoing Support", description: "Model monitoring, retraining, and performance optimization" }
    ],
    faqs: [
      { question: "What types of custom AI do you build?", answer: "We build classification, regression, recommendation, NER, summarization, generation, and multi-modal AI systems tailored to business needs." },
      { question: "How long does development take?", answer: "Minimum viable AI systems take 4-8 weeks. Production-grade AI with full testing typically takes 3-6 months." },
      { question: "Do we own the AI model?", answer: "Yes, you own all trained models, code, and IP. We provide full documentation for internal maintenance if needed." },
      { question: "Can the AI be deployed on-premise?", answer: "Yes, we support cloud, on-premise, or hybrid deployments based on your security requirements." },
      { question: "What's the minimum budget for custom AI?", answer: "We work with budgets from ₹5L to ₹50L+. Smaller projects use transfer learning on existing models. Larger projects involve custom training."
      }
    ]
  },
  {
    id: "website-design",
    slug: "website-design",
    title: "Website Design",
    tag: "Web Development",
    summary: "Modern, fast websites built with Next.js and AI integration",
    description: "We build high-performance websites that load instantly, rank well, and convert visitors. From simple landing pages to complex web applications with AI integrations — our sites are built for growth. Next.js powered with server-side rendering for SEO and speed.",
    accentColor: "#06B6D4",
    features: [
      { title: "Next.js Development", description: "React-based with App Router, server components, and edge deployment" },
      { title: "AI Integrations", description: "Chatbots, recommendation engines, and AI-powered search" },
      { title: "Performance Optimized", description: "Sub-2 second loads, optimized Core Web Vitals" },
      { title: "SEO Built-In", description: "Technical SEO, schema markup, and sitemaps" },
      { title: "Mobile-First", description: "Responsive design that works perfectly on all devices" },
      { title: "CMS Integration", description: "Easy content management with Sanity, Contentful, or Strapi" },
      { title: "Analytics", description: "Built-in GA4, event tracking, and custom dashboards" },
      { title: "Maintenance", description: "Monthly updates, security patches, and performance monitoring" }
    ],
    faqs: [
      { question: "How long to build a website?", answer: "Landing pages: 1-2 weeks. Business sites: 3-4 weeks. Complex web apps: 2-3 months." },
      { question: "Will our site rank on Google?", answer: "We build SEO foundations — fast loads, mobile-friendly, schema. Rankings depend on content quality and SEO strategy, which we can also manage." },
      { question: "Can we update content ourselves?", answer: "Yes, we integrate a headless CMS so you can edit content without coding." },
      { question: "Do you offer redesigns?", answer: "Yes, we audit existing sites and provide modern redesigns with improved UX, speed, and conversion optimization." },
      { question: "What's the cost?", answer: "Landing pages: ₹50K-1L. Business sites: ₹2-5L. Web apps: ₹5-25L. Full-year support packages available."
      }
    ]
  },
  {
    id: "google-ads",
    slug: "google-ads",
    title: "Google Ads",
    tag: "PPC Advertising",
    summary: "Data-driven Google Ads campaigns that maximize ROAS",
    description: "We manage Google Ads campaigns that deliver real business results. From search to display to shopping, our data-driven approach optimizes for conversions — not just clicks. Includes landing page optimization and continuous A/B testing.",
    accentColor: "#4285F4",
    features: [
      { title: "Campaign Structure", description: "Logical organization by product, intent, and conversion value" },
      { title: "Keyword Strategy", description: "High-intent keyword targeting with negative keywords" },
      { title: "Ad Copy Optimization", description: "Continuous testing of headlines and descriptions" },
      { title: "Smart Bidding", description: "Target CPA, ROAS, or conversion value optimization" },
      { title: "Remarketing", description: "Cross-platform remarketing for abandoned carts and leads" },
      { title: "Display & Shopping", description: "Visual ads for brand awareness and product feeds" },
      { title: "Landing Pages", description: "High-converting pages optimized for ad traffic" },
      { title: "Weekly Optimization", description: "Ongoing bid adjustments, keyword expansion, and A/B testing" }
    ],
    faqs: [
      { question: "How much should we spend on Google Ads?", answer: "Budget depends on keywords, competition, and goals. We recommend starting at ₹50K-1L/month minimum for meaningful data. We'll propose a budget after keyword research." },
      { question: "When will we see results?", answer: "Initial campaigns launch in 1-2 weeks. Optimized campaigns with significant data typically show results in 4-8 weeks." },
      { question: "Do you charge management fees?", answer: "We charge 15-20% of ad spend (₹15K minimum) or fixed retainers for large accounts. This includes setup, management, and optimization." },
      { question: "Can you improve existing campaigns?", answer: "Yes, we audit current campaigns, identify waste, and propose improvements. Often we can double results without increasing spend." },
      { question: "What industries do you work with?", answer: "We've worked with SaaS, e-commerce, real estate, education, healthcare, B2B services, and lead-gen businesses."
      }
    ]
  },
  {
    id: "meta-ads",
    slug: "meta-ads",
    title: "Meta Ads",
    tag: "Social Advertising",
    summary: "Facebook & Instagram ads that build brand and drive conversions",
    description: "We create Meta advertising strategies that work for both brand building and direct response. From creative development to audience targeting to retargeting — our approach combines creative excellence with data optimization. Includes ad creative development and video production.",
    accentColor: "#0EA5E9",
    features: [
      { title: "Creative Strategy", description: "Hook, message, and CTA frameworks for high performance" },
      { title: "Ad Creative Development", description: "Static, video, and carousel ads designed for conversion" },
      { title: "Audience Targeting", description: "Interest, behavior, and lookalike audience targeting" },
      { title: "Retargeting", description: "Website visitors, engagement, and customer audiences" },
      { title: "A/B Testing", description: "Systematic testing of creatives, audiences, and placements" },
      { title: "Meta Pixel Setup", description: "Proper event tracking for optimization and attribution" },
      { title: "Lead Generation Ads", description: "Instant forms and lead capture on Instagram/Facebook" },
      { title: "Weekly Optimization", description: "Creative rotation, audience refinement, and bid management" }
    ],
    faqs: [
      { question: "How much should we spend?", answer: "Starting budget: ₹30K-50K/month for meaningful testing. Growth accounts typically scale to ₹2-10L/month." },
      { question: "What's the minimum commitment?", answer: "We recommend 3 months to see proper results. Initial setup is 1-2 weeks." },
      { question: "Do you create the ad creatives?", answer: "Yes, our packages include ad creative development — copy, images, videos, and ongoing creative testing." },
      { question: "Which objective should we choose?", answer: "It depends on goals — awareness (reach), consideration (traffic/engagement), or conversion (sales/leads). We recommend based on your funnel." },
      { question: "How do you measure success?", answer: "We track CPM, CPC, CTR, CPA, ROAS, and attributed revenue. Dashboard with weekly updates and monthly strategy reviews."
      }
    ]
  }
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map(service => service.slug);
}