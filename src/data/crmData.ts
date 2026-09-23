export interface CRMPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CRMIndustry {
  title: string;
  description: string;
  icon: string;
}

export interface CRMFeature {
  title: string;
  description: string;
  icon: string;
}

export interface CRMCaseStudy {
  business: string;
  category: string;
  description: string;
  features: string[];
}

export const crmIndustries: CRMIndustry[] = [
  {
    title: "Logistics & Transport",
    description:
      "Manage shipments, customers, drivers, vehicles, invoices and complete logistics operations from one system.",
    icon: "Truck",
  },
  {
    title: "Spices & Manufacturing",
    description:
      "Track customers, orders, inventory, production, sales and business operations with a customized CRM.",
    icon: "Factory",
  },
  {
    title: "Solar Management",
    description:
      "Manage leads, installations, customers, service requests, quotations and follow-ups.",
    icon: "Sun",
  },
  
  {
    title: "Real Estate",
    description:
      "Manage properties, leads, agents, customers, site visits, follow-ups and deals.",
    icon: "Building2",
  },
  {
    title: "Education",
    description:
      "Manage students, admissions, fees, staff, communication and academic workflows.",
    icon: "GraduationCap",
  },
  {
    title: "Healthcare",
    description:
      "Manage patients, appointments, doctors, records, follow-ups and operational workflows.",
    icon: "HeartPulse",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Manage customers, products, orders, sales, inventory and customer support.",
    icon: "ShoppingCart",
  },
];

export const crmFeatures: CRMFeature[] = [
  {
    title: "Lead Management",
    description:
      "Capture, organize, assign and track leads throughout the complete sales pipeline.",
    icon: "Users",
  },
  {
    title: "Customer Management",
    description:
      "Maintain complete customer profiles, communication history and business information.",
    icon: "ContactRound",
  },
  {
    title: "Sales Pipeline",
    description:
      "Track enquiries, quotations, negotiations, conversions and closed deals.",
    icon: "ChartNoAxesCombined",
  },
  {
    title: "Task & Follow-up",
    description:
      "Create tasks, reminders and follow-ups so your team never misses an opportunity.",
    icon: "ListTodo",
  },
  {
    title: "Reports & Analytics",
    description:
      "Understand business performance through dashboards, reports and useful insights.",
    icon: "BarChart3",
  },
  {
    title: "Role-Based Access",
    description:
      "Give different team members access according to their responsibilities and permissions.",
    icon: "ShieldCheck",
  },
  {
    title: "Inventory Management",
    description:
      "Track products, stock levels, purchases, sales and inventory movement.",
    icon: "Package",
  },
  {
    title: "Invoice Management",
    description:
      "Manage quotations, invoices, payments and transaction records.",
    icon: "Receipt",
  },
  {
    title: "Notifications",
    description:
      "Keep teams updated with important activities, reminders and business events.",
    icon: "Bell",
  },
  {
    title: "Document Management",
    description:
      "Store and manage important business documents and customer-related files.",
    icon: "Files",
  },
  {
    title: "API & Integrations",
    description:
      "Connect your CRM with external tools, APIs, communication platforms and business services.",
    icon: "Plug",
  },
  {
    title: "Custom Workflow",
    description:
      "Build workflows around the exact process your business already follows.",
    icon: "Workflow",
  },
];

export const crmPlans: CRMPlan[] = [
  {
    name: "Starter CRM",
    price: "₹1,999",
    period: "/month",
    description:
      "For small businesses that need a simple CRM to manage customers and leads.",
    features: [
      "Customer Management",
      "Lead Management",
      "Task & Follow-up",
      "Basic Dashboard",
      "User Management",
      "Basic Reports",
      "Mobile Responsive",
      "Technical Support",
    ],
  },
  {
    name: "Business CRM",
    price: "₹2,999",
    period: "/month",
    description:
      "For growing businesses that need advanced sales and operational management.",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced Lead Management",
      "Sales Pipeline",
      "Quotation Management",
      "Invoice Management",
      "Advanced Reports",
      "Role-Based Access",
      "Custom Business Fields",
      "Notifications",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise CRM",
    price: "₹5,999",
    period: "/month",
    description:
      "For businesses requiring advanced workflows, integrations and customization.",
    features: [
      "Everything in Business",
      "Custom Workflow",
      "Advanced Analytics",
      "Inventory Management",
      "Document Management",
      "API Integrations",
      "Custom Roles & Permissions",
      "Business-Specific Modules",
      "Advanced Dashboard",
      "Dedicated Support",
    ],
  },
];

export const crmModels = [
  {
    title: "Monthly CRM",
    description:
      "Start quickly with a monthly CRM plan. Choose the plan according to your business requirements and upgrade as your business grows.",
    benefits: [
      "Low initial investment",
      "Quick setup",
      "Regular updates",
      "Technical support",
      "Easy scalability",
    ],
    icon: "CalendarDays",
  },
  {
    title: "Permanent / Custom CRM",
    description:
      "Get a CRM developed specifically around your business process, workflow, departments and operational requirements.",
    benefits: [
      "Business-specific development",
      "Custom modules",
      "Custom workflows",
      "Custom integrations",
      "Long-term ownership",
    ],
    icon: "Infinity",
  },
];

export const crmProcess = [
  {
    step: "01",
    title: "Understand Your Business",
    description:
      "We first understand your business, team structure, customers and current workflow.",
    icon: "MessageSquareText",
  },
  {
    step: "02",
    title: "Define CRM Requirements",
    description:
      "We identify the modules, roles, permissions, reports and features your business actually needs.",
    icon: "ClipboardList",
  },
  {
    step: "03",
    title: "CRM Demo",
    description:
      "We provide a business-specific demo within approximately 30 minutes to show how the CRM can work for you.",
    icon: "MonitorPlay",
  },
  {
    step: "04",
    title: "Customize & Configure",
    description:
      "The CRM is configured or developed according to your business requirements and workflow.",
    icon: "Settings2",
  },
  {
    step: "05",
    title: "Launch & Training",
    description:
      "After implementation, your team can start using the CRM with guidance and support.",
    icon: "Rocket",
  },
  {
    step: "06",
    title: "Support & Growth",
    description:
      "We continue supporting the system and can add new modules as your business grows.",
    icon: "Headphones",
  },
];

export const crmCaseStudies: CRMCaseStudy[] = [
  {
    business: "Spices Management",
    category: "Manufacturing & Trading",
    description:
      "CRM workflow designed around customer management, orders, sales and business operations.",
    features: [
      "Customer Management",
      "Order Management",
      "Sales Tracking",
      "Business Reports",
    ],
  },
  {
    business: "Solar Management",
    category: "Solar & Energy",
    description:
      "CRM workflow for managing enquiries, customers, installations and service follow-ups.",
    features: [
      "Lead Management",
      "Customer Tracking",
      "Installation Management",
      "Follow-ups",
    ],
  },
  {
  business: "Shop Management",
  category: "Retail & Inventory",
  description:
    "Complete shop management system for managing products, inventory, sales, purchases, customers and low-stock alerts.",
  features: [
    "Product Management",
    "Inventory Management",
    "Low Stock Alerts",
    "Sales Management",
    "Purchase Management",
    "Customer Management",
    "Stock Tracking",
    "Reports & Analytics",
  ],
},

  {
    business: "Logistics Management",
    category: "Logistics & Transport",
    description:
      "CRM and operational workflow for managing customers, shipments, drivers and business activities.",
    features: [
      "Customer Management",
      "Shipment Tracking",
      "Driver Management",
      "Reports & Analytics",
    ],
  },
];

export const crmStats = [
  {
    value: "50+",
    label: "Businesses",
    description: "Using our CRM solutions",
  },
  {
    value: "30 Min",
    label: "Demo",
    description: "Business-specific CRM demo",
  },
  {
    value: "100%",
    label: "Customizable",
    description: "Built around your workflow",
  },
  {
    value: "24/7",
    label: "Access",
    description: "Cloud-based business management",
  },
];

export const crmFaqs = [
  {
    question: "What is a business CRM?",
    answer:
      "A CRM is a business management system that helps you manage customers, leads, sales, follow-ups, tasks, reports and other business operations from one platform.",
  },
  {
    question: "Can you customize the CRM according to our business?",
    answer:
      "Yes. We can configure existing CRM features or develop custom modules and workflows according to your business requirements.",
  },
  {
    question: "What is the monthly CRM pricing?",
    answer:
      "Our current monthly plans start from ₹1,999, with additional plans at ₹2,999 and ₹5,999 depending on the required features.",
  },
  {
    question: "Do you provide a permanent CRM?",
    answer:
      "Yes. We also provide permanent/custom CRM development for businesses that need a system specifically designed around their workflow.",
  },
  {
    question: "Can we see a demo before purchasing?",
    answer:
      "Yes. We can provide a business-specific CRM demo in approximately 30 minutes so you can understand how the system can fit your workflow.",
  },
  {
    question: "Can we add new features later?",
    answer:
      "Yes. New modules, integrations and workflows can be added as your business requirements evolve.",
  },
];