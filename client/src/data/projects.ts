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
  techStack?: {
    frontend: string[];
    backend: string[];
    database: string[];
    dataSecurity: string[];
    thirdPartyIntegrations: string[];
    machineLearning: string[];
  };
  learnings: string[];
  slug: string;
}

export const projects: Project[] = [
  {
    id: "financial-butler",
    title: "Financial Butler",
    description: "AI-driven personal finance management app providing 360° financial insights and decision-making tools for consumers.",
    longDescription: "Financial Butler was a comprehensive mobile-first application aggregated financial data from banks, credit cards, investments, CPF and insurance, utilizing machine learning to provide personalized insights and automated financial management. Addressing a critical gap in financial literacy amongst the emerging affluent",
    category: "FinTech",
    tags: ["B2C","PFM", "Machine Learning", "Mobile App", "Data"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    status: "completed",
    year: "2018-2021",
    role: "Founder & CEO",
    challenges: [
      "Addressing under-insurance crisis: 66-80% of users across ASEAN lacked adequate emergency savings",
      "Navigating complex multi-market regulatory compliance (MAS, Bank Negara, SEC Thailand)",
      "Building trust for financial data aggregation in privacy-conscious markets",
      "Competing against established banks and emerging fintech players",
      "Scaling technical infrastructure across multiple banking APIs and data formats"
    ],
    solutions: [
      "Developed AI-driven financial profiling system to identify spending patterns and insurance gaps",
      "Implemented bank-level security with end-to-end encryption and regulatory compliance frameworks",
      "Created intuitive UX with bubble-based visualization for complex financial relationships",
      "Built strategic partnerships with banks, insurers, and robo-advisors for product distribution",
      "Established scalable API integration architecture supporting 15+ financial institutions"
    ],
    results: [
      "Achieved 5,000+ Monthly Active Users with 30% month-over-month growth",
      "Processed 84,000+ financial transactions across aggregated accounts",
      "Connected with 34 investors, delivered 22+ pitch presentations",
      "Secured 4 strategic partnerships with major financial institutions",
      "Achieved S$50M+ in insurance policy referrals and 8,350+ investment account openings (projected)"
    ],
    techStack: {
      frontend: ["React Native", "JavaScript", "Chart.js", "Redux"],
      backend: ["Node.js", "Express.js", "Python", "RESTful APIs"],
      database: ["MongoDB", "Redis Cache", "Data Warehousing"],
      dataSecurity: ["End-to-End Encryption", "OAuth 2.0", "JWT Tokens", "Bank-level Security"],
      thirdPartyIntegrations: ["Banking APIs", "Plaid", "MAS Regulatory APIs", "Insurance APIs", "Investment Platform APIs"],
      machineLearning: ["Python ML Libraries", "Predictive Analytics", "Financial Risk Modeling", "Behavioral Pattern Recognition"]
    },
    technologies: ["React Native", "Node.js", "Python", "MongoDB", "AWS", "Machine Learning", "Banking APIs", "Chart.js", "Real-time Analytics"],
    learnings: [
      "Financial education and user onboarding are critical for fintech adoption in emerging markets",
      "Data-driven personalization significantly improves user engagement and product stickiness",
      "Strategic partnerships with incumbent financial institutions accelerate market penetration",
      "Regulatory compliance must be embedded from day one, not retrofitted",
      "Market expansion requires deep understanding of local financial behaviors and preferences"
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
