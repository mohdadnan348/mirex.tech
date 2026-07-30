export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "fe-dev",
    title: "React / Next.js Frontend Developer",
    department: "Engineering",
    location: "Kanpur / Noida / Remote",
    type: "Full-Time",
    experience: "2-4 Years",
    description: "We are looking for a frontend wizard who loves building pixel-perfect, highly animated, and fast web applications using Next.js and Tailwind CSS.",
    requirements: [
      "Proficient in React, Next.js (App Router), TypeScript, and Tailwind CSS.",
      "Experience with animation libraries like Framer Motion or GSAP.",
      "Deep understanding of Core Web Vitals and SEO optimization.",
      "Ability to create clean, responsive CSS Modules and flex layouts."
    ]
  },
  {
    id: "be-dev",
    title: "Node.js / Express Backend Engineer",
    department: "Engineering",
    location: "Kanpur / Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Join us to architect secure, scalable API endpoints, manage databases, and design custom microservices/AI integrations.",
    requirements: [
      "Strong proficiency in Node.js, Express.js, and RESTful/GraphQL API design.",
      "Hands-on experience with MongoDB, PostgreSQL, and Prisma ORM.",
      "Experience with JWT authentication, role-based access controls, and Cloudinary.",
      "Familiarity with OpenAI / Gemini API structures and RAG vector databases is a plus."
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Designer",
    department: "Design Studio",
    location: "Remote",
    type: "Contract / Full-Time",
    experience: "1-3 Years",
    description: "Create premium, Apple & Vercel-inspired dark mode layouts, high-fidelity wireframes, and design interactive components.",
    requirements: [
      "Exceptional Figma portfolio demonstrating clean grid systems and glassmorphic aesthetics.",
      "Strong understanding of user-centered design, user flows, and responsive wireframing.",
      "Knowledge of micro-interactions and transitions."
    ]
  }
];
