export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  status: "completed" | "active" | "current";
  year: string;
  role: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  technologies: string[];
  learnings: string[];
  slug: string;
}

export const projects: Project[] = [
  {
    id: "financial-butler",
    title: "Financial Butler",
    description: "Personal finance management app that aggregates financial data and provides actionable insights for better financial decisions.",
    longDescription: "Financial Butler was a mobile-first personal finance application designed to help users take control of their financial lives. The app aggregated data from credit cards, savings accounts, investments, and insurance policies, providing users with a comprehensive view of their financial health and actionable insights to make better decisions.",
    category: "FinTech",
    tags: ["FinTech", "Mobile App", "B2C"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    status: "completed",
    year: "2018-2021",
    role: "Founder & Product Lead",
    challenges: [
      "Building trust with users for financial data aggregation",
      "Navigating complex regulatory requirements across multiple financial institutions",
      "Creating intuitive UX for complex financial concepts",
      "Securing funding in a competitive fintech landscape"
    ],
    solutions: [
      "Implemented bank-level security protocols and transparent privacy policies",
      "Developed API integrations with major Singaporean banks and financial institutions",
      "Conducted extensive user research and iterative design testing",
      "Built compelling product demos and data-driven pitch presentations"
    ],
    results: [
      "Achieved ~5000 Monthly Active Users within first year",
      "60% increase in user conversion rates through optimization",
      "Connected with 34 investors and delivered 22 pitches",
      "Participated in 3 startup competitions and 1 tech conference"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Plaid API", "Chart.js"],
    learnings: [
      "The importance of regulatory compliance in fintech products",
      "Building trust is paramount when handling sensitive financial data",
      "User education is crucial for adoption of complex financial tools",
      "MVP validation is essential before heavy feature development"
    ],
    slug: "financial-butler"
  },
  {
    id: "lockket",
    title: "Lockket.app",
    description: "Current project focused on solving productivity challenges through innovative product design and user experience optimization.",
    longDescription: "Lockket is an innovative productivity platform designed to help individuals and teams manage their time, tasks, and goals more effectively. The project focuses on creating seamless workflows that adapt to different working styles and organizational needs.",
    category: "Productivity",
    tags: ["Productivity", "SaaS", "Current"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    status: "current",
    year: "2024-Present",
    role: "Product Lead & Co-founder",
    challenges: [
      "Differentiating in a crowded productivity software market",
      "Balancing simplicity with powerful features",
      "Creating workflows that work for diverse user types",
      "Building sustainable growth in a competitive landscape"
    ],
    solutions: [
      "Focus on unique AI-powered insights and automation",
      "Progressive disclosure UI design philosophy",
      "Extensive user research across different industries",
      "Community-driven growth and feedback loops"
    ],
    results: [
      "Currently in private beta with select users",
      "Positive early user feedback on core features",
      "Strategic partnerships being developed",
      "Preparing for public launch in Q2 2025"
    ],
    technologies: ["React", "TypeScript", "Supabase", "Vercel", "OpenAI API", "Stripe"],
    learnings: [
      "Current project - learnings in progress",
      "The importance of focused feature development",
      "User feedback loops are critical for product-market fit",
      "AI integration requires thoughtful UX design"
    ],
    slug: "lockket"
  },
  {
    id: "thinkerly",
    title: "Thinkerly.app",
    description: "AI-powered math learning for primary students to help kids master problem-solving skills through heuristics-based math questions, for confident, PSLE-ready thinkers.",
    longDescription: "Thinkerly is AI-powered math learning for primary students to help kids master problem-solving skills through heuristics-based math questions beyond tradional rote learning. Building confidence for PSLE and beyond through deep thinking, not drilling.",
    category: "Knowledge Management",
    tags: ["Knowledge Mgmt", "Web App", "Active"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    status: "active",
    year: "2023-Present",
    role: "Product Advisor & Investor",
    challenges: [
      "Creating intuitive knowledge organization systems",
      "Balancing structure with flexibility in knowledge capture",
      "Building engagement in learning-focused products",
      "Monetizing knowledge management tools effectively"
    ],
    solutions: [
      "AI-powered content categorization and insights",
      "Flexible tagging and connection systems",
      "Gamification elements for learning engagement",
      "Tiered pricing model based on usage and features"
    ],
    results: [
      "Growing user base of knowledge workers and consultants",
      "Strong retention rates among active users",
      "Positive feedback on knowledge discovery features",
      "Expanding into enterprise team features"
    ],
    technologies: ["Next.js", "PostgreSQL", "Redis", "Algolia", "Stripe", "OpenAI"],
    learnings: [
      "Knowledge management is highly personal and contextual",
      "Search and discovery are crucial for knowledge tools",
      "Regular usage habits are essential for knowledge platforms",
      "Enterprise vs individual use cases require different approaches"
    ],
    slug: "thinkerly"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
