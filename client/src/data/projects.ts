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
    description: "Personal finance at your fingertips - A 360° customer journey platform with AI-driven financial management connecting all financial touchpoints.",
    longDescription: "Financial Butler was a comprehensive personal finance management platform that provided users with a complete 360° view of their financial lives. The platform connected all financial touchpoints - spending, savings, insurance, and investments - through a single app, leveraging machine learning for auto-categorization and personalized insights. Addressing the critical under-insurance crisis across ASEAN markets (66% in Singapore, 76% in Malaysia, 80% in Thailand lack 6-month emergency savings), Financial Butler guided users toward smarter spending, better saving, adequate insurance, and intelligent investing.",
    category: "FinTech",
    tags: ["B2C","PFM", "Machine Learning", "Mobile App", "Data"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    status: "completed",
    year: "2018-2021",
    role: "Founder & CEO",
    challenges: [
      "Emergency savings crisis: 66% (Singapore), 76% (Malaysia), 80% (Thailand) lack 6-month emergency funds",
      "Under-insurance epidemic across ASEAN markets affecting financial security",
      "Fragmented financial management - users managing money across multiple disconnected platforms",
      "Building trust for comprehensive financial data aggregation in privacy-conscious markets",
      "Competing against established financial advisors, banks, and digital comparison tools like GoBear"
    ],
    solutions: [
      "Built 360° financial profile connecting all accounts, assets, and liabilities in one platform",
      "Implemented AI-driven insights with machine learning auto-categorization for spending patterns",
      "Created financial marketplace with tailored product recommendations and educational content",
      "Developed roadmap features for insurance needs analysis and emergency savings management",
      "Established multi-revenue model: subscriptions, referrals (insurance/investments), and partnerships"
    ],
    results: [
      "MVP launched March 2019 with ~30% month-over-month growth achieving 5000+ active users",
      "1,200+ app downloads in Singapore market within first year",
      "Processed 84,000+ financial transactions with average user age of 27.1 years",
      "Secured 4 signed strategic partnerships with banks, insurers, and robo-advisors"
    ],
    techStack: {
      frontend: ["React Native", "JavaScript", "Chart.js", "Mobile UI/UX"],
      backend: ["Node.js", "Express.js", "Python", "RESTful APIs", "Financial Data Processing"],
      database: ["MongoDB", "Financial Transaction Storage", "User Profile Management", "Real-time Analytics"],
      dataSecurity: ["Bank-level Security", "Data Encryption", "Privacy Compliance", "Secure API Integration"],
      thirdPartyIntegrations: ["Open Banking APIs", "Insurance Provider APIs", "Robo-advisor Platforms", "Investment Services"],
      machineLearning: ["Auto-categorization", "Spending Pattern Analysis", "Financial Profiling", "Predictive Insights", "Risk Assessment"]
    },
    technologies: ["React Native", "Node.js", "Python", "MongoDB", "AWS", "Machine Learning", "Banking APIs", "Chart.js", "Real-time Analytics"],
    learnings: [
      "ASEAN markets show massive opportunity: Total Addressable Market of S$4.3bn (insurance) + S$4.5bn AUM (robo-investment)",
      "Strategic partnerships with banks, insurers, and robo-advisors are essential for customer acquisition and revenue growth", 
      "Building trust through education and transparency is critical when handling personal financial data",
      "Multi-revenue model approach (subscriptions + referrals + partnerships) provides sustainable business foundation",
      "Timing and market readiness matter - launched during COVID-19 when digital financial services adoption accelerated"
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
