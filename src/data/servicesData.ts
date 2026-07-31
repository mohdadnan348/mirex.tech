export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
  longDesc: string;
  features: string[];
  benefits: string[];
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    title: "Development",
    items: [
      {
        slug: "website-development",
        name: "Website Development",
        shortDesc: "Next-gen responsive websites optimized for high conversion and speed.",
        icon: "Globe",
        longDesc: "We build premium websites using the latest stacks like Next.js, React, and Svelte. Our websites are server-side rendered, optimized for Core Web Vitals, and designed to look stunning on any screen size. We follow Apple & Vercel aesthetics to give your brand a high-end feel.",
        features: ["Server-Side Rendering (SSR)", "Core Web Vitals Optimization", "SEO Friendly Architecture", "Mobile First Design"],
        benefits: ["Double your site speed", "Increase user engagement by 40%", "Better organic search rankings"]
      },
      {
        slug: "mobile-apps",
        name: "Mobile Apps",
        shortDesc: "Cross-platform mobile applications for iOS & Android.",
        icon: "Smartphone",
        longDesc: "Get premium cross-platform mobile apps built with React Native and Flutter. We manage the entire lifecycle from initial UI design, backend integration, push notifications, to publishing on the Apple App Store and Google Play Store.",
        features: ["Cross-Platform Codebase", "Push Notifications Integration", "Offline Sync Capabilities", "Biometric Authentication"],
        benefits: ["Engage customers directly", "Native-like fluid performance", "Shorter time-to-market"]
      },
      {
        slug: "erp",
        name: "Enterprise Resource Planning (ERP)",
        shortDesc: "Streamline workflows and manage business operations in one tab.",
        icon: "Cpu",
        longDesc: "Custom ERP systems designed to automate inventory, employee roles, billing, and scheduling. We replace Excel sheets with real-time analytics dashboards, database tracking, and automatic invoice generations.",
        features: ["Role-Based Access Control (RBAC)", "Real-time Inventory Tracking", "Automated Billing & Invoices", "Audit Logs"],
        benefits: ["Reduce operational costs by 30%", "Eliminate manual data entries", "Unified corporate data overview"]
      },
      {
        slug: "crm",
        name: "Customer Relationship Management (CRM)",
        shortDesc: "Manage sales funnels, pipeline deals, and customer success.",
        icon: "Users",
        longDesc: "Custom CRM portals crafted to track client pipelines, manage leads, automate email flows, and run customer success followups. We integrate direct call logs, WhatsApp alerts, and calendar notifications.",
        features: ["Lead Scoring System", "Automated Email & WhatsApp Sequences", "Sales Funnel Visualization", "Integrations with Calendly/Slack"],
        benefits: ["Boost lead conversions by 25%", "Clear visibility of sales pipelining", "Improved client retention rate"]
      }
    ]
  },
  {
    title: "AI Solutions",
    items: [
      {
        slug: "ai-chatbots",
        name: "AI Chatbots & Agents",
        shortDesc: "Custom LLM integrations (Gemini, DeepSeek, OpenAI) for automated chat.",
        icon: "MessageSquareText",
        longDesc: "We build advanced AI Chatbots and automated agents powered by LLMs (OpenAI, Gemini, DeepSeek). By utilizing Retrieval-Augmented Generation (RAG), the bot answers customer queries strictly based on your internal business databases.",
        features: ["RAG (Retrieval-Augmented Generation)", "Multi-language bot support", "Seamless human handoff", "Omnichannel: Web, WhatsApp, Telegram"],
        benefits: ["Automate 80% of customer support", "24/7 instant client replies", "Drastically reduced ticket load"]
      }
    ]
  },
  {
    title: "Creative Studio",
    items: [
      {
        slug: "video-editing",
        name: "Video Editing & Studio",
        shortDesc: "Stunning promotional video edits and motion graphics.",
        icon: "Video",
        longDesc: "High-end product video ads, reel edits, and motion design tailored for social media attention. We combine 3D animations, custom SFX, color grading, and dynamic text typography to make your videos stand out.",
        features: ["3D Motion Graphics", "Custom Sound Effects (SFX)", "Color Grading & Audio Tuning", "Social Media Optimized Aspect Ratios"],
        benefits: ["Boost ad click-through rates by 50%", "High-quality brand positioning", "Viral-ready social content"]
      }
    ]
  },
  {
    title: "Digital Marketing",
    items: [
      {
        slug: "seo",
        name: "SEO Optimization",
        shortDesc: "On-page, off-page, and technical SEO for higher rankings.",
        icon: "Search",
        longDesc: "Maximize your search presence on Google. We offer detailed keyword research, technical SEO optimizations (sitemaps, schemas, speed audits), page-by-page copywriting, and quality link-building campaigns.",
        features: ["Technical SEO Site Audit", "Schema.org Rich Snippets", "Targeted Keyword Integration", "Backlink Strategy Campaigns"],
        benefits: ["Get ranking for competitive search terms", "Increase free organic traffic", "Build authority in your industry niche"]
      },
      {
        slug: "social-media-marketing",
        name: "Social Media Marketing (SMM)",
        shortDesc: "Drive sales with targeted Facebook, Instagram, and Google ads.",
        icon: "Megaphone",
        longDesc: "We run high-converting social campaigns. Our SMM service includes regular post creatives, copy writing, audience segmentation, A/B testing, and monthly analytics review to double your returns on advertising spend.",
        features: ["High-Conversion Ad Design", "Precise Demographic Targeting", "A/B Creative Split Testing", "Performance Analytics Dashboard"],
        benefits: ["Scale sales with social funneling", "Build a dedicated social community", "Higher ROI on daily ad spend"]
      }
    ]
  }
];