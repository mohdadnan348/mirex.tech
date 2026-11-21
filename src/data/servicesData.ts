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
        benefits: ["A clearer and faster browsing experience", "More usable page layouts", "A stronger technical SEO foundation"]
      },
      {
        slug: "mobile-apps",
        name: "Mobile App Development",
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
        benefits: ["Reduce repetitive manual data entry", "Connect business information", "Improve operational visibility"]
      },
      {
        slug: "crm",
        name: "Customer Relationship Management (CRM)",
        shortDesc: "Manage sales funnels, pipeline deals, and customer success.",
        icon: "Users",
        longDesc: "Custom CRM portals crafted to track client pipelines, manage leads, automate email flows, and run customer success followups. We integrate direct call logs, WhatsApp alerts, and calendar notifications.",
        features: ["Lead Scoring System", "Automated Email & WhatsApp Sequences", "Sales Funnel Visualization", "Integrations with Calendly/Slack"],
        benefits: ["A clearer view of sales activity", "More consistent follow-up workflows", "Better visibility into customer relationships"]
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
        benefits: ["Automate suitable repetitive enquiries", "Offer responses outside business hours when configured", "Route complex questions to a human"]
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
        benefits: ["Consistent promotional content", "Clearer brand presentation", "Content adapted to selected channels"]
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
        benefits: ["Improve technical search readiness", "Make pages easier for search engines to understand", "Build relevant topical coverage over time"]
      },
      {
        slug: "social-media-marketing",
        name: "Social Media Marketing (SMM)",
        shortDesc: "Drive sales with targeted Facebook, Instagram, and Google ads.",
        icon: "Megaphone",
        longDesc: "We run high-converting social campaigns. Our SMM service includes regular post creatives, copy writing, audience segmentation, A/B testing, and monthly analytics review to double your returns on advertising spend.",
        features: ["High-Conversion Ad Design", "Precise Demographic Targeting", "A/B Creative Split Testing", "Performance Analytics Dashboard"],
        benefits: ["Reach selected audience segments", "Build consistent social presence", "Review campaign performance against agreed goals"]
      }
    ]
  }

  ,
  {
    title: "Business Platforms & Experience",
    items: [
      {
        slug: "ecommerce-development",
        name: "E-commerce Development",
        shortDesc: "Online stores with product catalogues, checkout, payments and order workflows.",
        icon: "ShoppingCart",
        longDesc: "We develop e-commerce experiences around your catalogue, customer journey and operational needs. Scope can include storefronts, product management, checkout, payment integration, order administration and reporting.",
        features: ["Product and category management", "Cart and checkout flows", "Payment gateway integration", "Order and customer dashboards"],
        benefits: ["A focused online buying experience", "Centralized order workflows", "Room to expand as the catalogue grows"]
      },
      {
        slug: "custom-software",
        name: "Custom Software Development",
        shortDesc: "Purpose-built business applications for workflows that off-the-shelf tools do not fit.",
        icon: "Code2",
        longDesc: "We plan and build custom web applications around your business processes, user roles, data and integrations. The scope is defined with you before implementation.",
        features: ["Requirements and workflow mapping", "Custom dashboards and modules", "API and database design", "Authentication and permissions"],
        benefits: ["Software aligned with your operations", "Less dependence on disconnected tools", "A maintainable foundation for future changes"]
      },
      {
        slug: "business-automation",
        name: "Business Automation",
        shortDesc: "Connect repetitive tasks, notifications and business systems into clearer workflows.",
        icon: "Workflow",
        longDesc: "We identify repeatable steps in your business process and implement practical automations using APIs, scheduled jobs, notifications and AI integrations where appropriate.",
        features: ["Workflow and notification automation", "Third-party system integration", "Approval and task flows", "AI-assisted process automation"],
        benefits: ["Fewer repetitive manual steps", "More consistent process execution", "Better visibility across workflows"]
      },
      {
        slug: "api-integration",
        name: "API Development & Integration",
        shortDesc: "Secure APIs and integrations that connect your products and services.",
        icon: "Network",
        longDesc: "We design REST APIs and connect external platforms such as payment, communication, storage and business services based on documented requirements.",
        features: ["REST API design and development", "Third-party API integration", "Authentication and authorization", "Error handling and documentation"],
        benefits: ["Connected business systems", "Reusable integration layer", "Clearer data exchange"]
      },
      {
        slug: "ui-ux-design",
        name: "UI/UX Design",
        shortDesc: "User-centred interface design for websites, dashboards and applications.",
        icon: "PanelsTopLeft",
        longDesc: "We structure user journeys and interfaces around the people who use your product, with attention to clarity, accessibility, responsive layouts and handoff to development.",
        features: ["User flows and information architecture", "Wireframes and interface design", "Responsive design systems", "Developer-ready specifications"],
        benefits: ["Clearer product navigation", "Consistent visual language", "Interfaces aligned to user tasks"]
      },
      {
        slug: "website-maintenance",
        name: "Website Maintenance & Support",
        shortDesc: "Ongoing updates, fixes and technical care for existing websites and applications.",
        icon: "Wrench",
        longDesc: "We provide maintenance based on an agreed support scope, which may include dependency updates, bug fixes, content changes, monitoring and deployment assistance.",
        features: ["Bug fixes and small enhancements", "Dependency and security updates", "Backup and deployment assistance", "Agreed support plans"],
        benefits: ["A better-maintained digital presence", "A clear route for ongoing improvements", "Help resolving technical issues"]
      }
    ]
  }

];