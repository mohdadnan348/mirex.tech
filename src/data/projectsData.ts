export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  techTags: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  duration: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "resume-ai",
    title: "ResumeAI Pro",
    description: "AI-powered ATS resume scoring system that analyzes resumes and provides real-time feedback. Features include ATS score (0-100), role match percentage, missing keywords detection, strengths/weaknesses analysis, priority-based improvement suggestions with project ideas, and downloadable PDF reports.",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma", "DeepSeek AI", "Vercel", "Render"],
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    liveUrl: "https://resume-ai-pro-livid.vercel.app/",
    githubUrl: "https://github.com/mohdadnan348/ResumeAIPro",
    duration: "4 Weeks",
    client: "AI Tech Inc.",
    problem: "Job seekers struggled to optimize their resumes for Applicant Tracking Systems (ATS), leading to high rejection rates prior to human HR screenings. Existing solutions lacked actionable recommendations and project ideas to bridge skills gaps.",
    solution: "We engineered an automated evaluation engine using DeepSeek LLM capabilities integrated through Node.js. Next.js was chosen for rapid hydration, providing real-time scanning. The system parses PDF uploads, scores compatibility against specific JDs, highlights keyword deficiencies, and utilizes custom prompts to propose concrete projects.",
    result: "Scored over 50,000+ resumes in its first month, resulting in a reported 40% increase in HR interview callback rates for active premium users.",
    screenshots: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
    ]
  },
  {
    id: 2,
    slug: "proshipstar",
    title: "ProShipStar Logistics",
    description: "Modern logistics platform frontend with interactive UI components, shipment management, analytics dashboards, and optimized user experience for logistics operations.",
    techTags: ["React.js", "Tailwind CSS", "JavaScript", "EmailJS", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1606964212858-c215029db704?w=400&h=300&fit=crop",
    liveUrl: "https://www.proshipstar.com/",
    githubUrl: "https://github.com/mohdadnan348/prestar",
    duration: "3 Weeks",
    client: "PreStar Logistics",
    problem: "The client needed an intuitive, fast shipment dashboard interface to manage cargo and track logistics partners. Their existing UI was outdated, non-responsive, and led to booking drops.",
    solution: "Created a high-fidelity logistics client portal with search filtering, cargo tracking steps, interactive maps, and shipment metrics. Fully built with React.js and Tailwind CSS for rapid navigation, featuring EmailJS workflows for real-time dispatch receipts.",
    result: "Client engagement times increased by 60%, and mobile-based cargo bookings grew by 2.5x within the first 60 days.",
    screenshots: [
      "https://images.unsplash.com/photo-1606964212858-c215029db704?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=800&h=450&fit=crop"
    ]
  },
  {
    id: 3,
    slug: "aylish-salon",
    title: "Aylish Salon Management",
    description: "Full-stack salon management with appointment booking, service management, admin panel, WhatsApp integration, and EmailJS notifications.",
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "EmailJS", "Admin Panel"],
    imageUrl: "https://i.pinimg.com/1200x/c2/cf/69/c2cf69d4eccc8689fe719fb2b3692095.jpg",
    liveUrl: "https://salon-dun.vercel.app/",
    githubUrl: "https://github.com/mohdadnan348/salon",
    duration: "4 Weeks",
    client: "GlamUp Aylish Salon",
    problem: "Aylish Salon faced high booking overhead, client cancellations, and had no automated notification system to alert users about appointment approvals or timings.",
    solution: "Developed a full-stack salon system featuring visual scheduling slots. We added a custom Node/Express backend paired with MongoDB. Implemented a notification engine using EmailJS and direct WhatsApp API linking to instantly ping customers upon admin approval.",
    result: "Cut booking management effort by 70% and doubled active salon slot bookings due to automated booking reminders.",
    screenshots: [
      "https://i.pinimg.com/1200x/c2/cf/69/c2cf69d4eccc8689fe719fb2b3692095.jpg",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=450&fit=crop"
    ]
  },
  {
    id: 4,
    slug: "kheth-spices",
    title: "Kheth Spices",
    description: "Responsive eCommerce frontend for spices with product showcase, category sections, and EmailJS contact form.",
    techTags: ["React.js", "Tailwind CSS", "JavaScript", "EmailJS", "Responsive Design"],
    imageUrl: "https://t4.ftcdn.net/jpg/01/86/45/63/360_F_186456306_crFfy6WlvrBmJkqzJCpmDP9CGjSvUAHx.jpg",
    liveUrl: "https://khethspices.com",
    githubUrl: "https://github.com/mohdadnan348/khethspices",
    duration: "2 Weeks",
    client: "Kheth Farms Group",
    problem: "Kheth Spices wanted to enter the online retail market with a visually arresting eCommerce landing page showing catalog items and enabling bulk inquiry request drops.",
    solution: "Crafted a beautiful grid showcase capturing organic farm spices. Built with highly-responsive components in React and styled with deep warm brand tones in Tailwind. Integrates custom inquiry forms routing to the client email inbox via EmailJS.",
    result: "Generated 350+ premium bulk spice export inquiries within the first 3 weeks of going live online.",
    screenshots: [
      "https://t4.ftcdn.net/jpg/01/86/45/63/360_F_186456306_crFfy6WlvrBmJkqzJCpmDP9CGjSvUAHx.jpg",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=450&fit=crop"
    ]
  },
  {
    id: 5,
    slug: "school-management",
    title: "School ERP – One_tab",
    description: "Mobile school management system with role-based access – Admin, Faculty, Parents, Students. Features: fees management, attendance tracking, result generation, and class scheduling. Built with React Native for cross-platform mobile experience.",
    techTags: ["React Native", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    imageUrl: "https://www.shutterstock.com/image-photo/businessman-erp-software-enterprise-resource-260nw-2370541891.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/brainiactrainingcentre/One_tab",
    duration: "6 Weeks",
    client: "Brainiac Education Centre (Internship Project)",
    problem: "Schools struggled with fragmented administrative systems, tracking fees manually on spreadsheets, and communicating with parents about child attendance and results.",
    solution: "Designed a multi-role React Native mobile application for Android/iOS. Created separate visual dashboard screens for Faculty, Parents, and Admins. Features a secure JWT auth flow, automated monthly fee tracking ledgers, and real-time attendance markings.",
    result: "Deployed across 3 pilot campuses, saving administrators 12+ hours of ledger entries weekly and boosting fee compliance by 35%.",
    screenshots: [
      "https://www.shutterstock.com/image-photo/businessman-erp-software-enterprise-resource-260nw-2370541891.jpg",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop"
    ]
  },
  {
    id: 6,
    slug: "deepglam",
    title: "DeepGlam – B2B Clothing Platform",
    description: "B2B e-commerce mobile app for cloth business with multi-role system – Employee, Seller, Buyer, Admin. Features: product listing, order management, inventory, and role-based dashboards. Cross-platform React Native app.",
    techTags: ["React Native", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/5e0e4024ab5be6000762d078/0x0.jpg?format=jpg&crop=595,335,x0,y33,safe&height=900&width=1600&fit=bounds",
    liveUrl: "#",
    githubUrl: "https://github.com/brainiactrainingcentre/deepglam",
    duration: "5 Weeks",
    client: "DeepGlam Garments (Internship Project)",
    problem: "B2B clothing wholesale orders were done via phone calls, causing order errors, inventory mismatches, and delayed delivery tracking.",
    solution: "Built a robust cross-platform mobile B2B marketplace allowing buyers to place bulk orders, sellers to list products, and admins to oversee transactions. Integrates Cloudinary for batch product image uploads, and Mongo change streams for live inventory sync.",
    result: "Eliminated order processing mismatches entirely and increased active buyer repeat orders by 45% due to easy stock checks.",
    screenshots: [
      "https://imageio.forbes.com/specials-images/imageserve/5e0e4024ab5be6000762d078/0x0.jpg?format=jpg&crop=595,335,x0,y33,safe&height=900&width=1600&fit=bounds",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop"
    ]
  },
  {
    id: 7,
    slug: "maa-furniture",
    title: "Maa Furniture Business Website",
    description: "Full-stack business website for a local furniture and interior brand based in Kanpur. Includes lead generation, project gallery, WhatsApp/Call integration, Google Business Profile sync, and SEO-friendly structure. Built with Next.js and TypeScript for performance and scalability.",
    techTags: ["Next.js", "TypeScript", "EmailJS", "Vercel", "CSS", "React Icons"],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    liveUrl: "https://maafurniture.in",
    githubUrl: "https://github.com/mohdadnan348/furniture",
    duration: "3 Weeks",
    client: "Maa Furniture Kanpur",
    problem: "A local premium carpentry and furniture store lacked online visibility, causing potential clients to choose franchised outlets. They needed local search engine optimization to capture interior design leads.",
    solution: "Engineered a fast, server-side rendered website using Next.js with semantic HTML. Added localized schema markup for local SEO rankings. Structured a clean image project gallery displaying past home interior works with direct WhatsApp booking hooks.",
    result: "Gained local SEO ranking on Google first page for 20+ wood and modular kitchen search queries, generating a 200% bump in custom design leads.",
    screenshots: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=450&fit=crop"
    ]
  }
];
