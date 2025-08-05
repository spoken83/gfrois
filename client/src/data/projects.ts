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
    longDescription: "Financial Butler was a personal finance management app that provided users with a complete 360° view of their finances by connecting all financial touchpoints - spending, savings, insurance, and investments - through a single app and leveraging machine learning for auto-categorization and personalized insights. My goal was to address financial literacy for the emerging affluent in Asia, guiding users toward smarter spending, better saving, adequate insurance, and intelligent investing.",
    category: "FinTech",
    tags: ["B2C","PFM", "Machine Learning", "Mobile App", "Data Analytics"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    status: "completed",
    year: "2018-2021",
    role: "Founder",
    challenges: [
      "Inadequet savings: 66% (Singapore), 76% (Malaysia), 80% (Thailand) lack 6-month emergency funds",
      "Singaporeans were under-insured despite high awareness, many chose traditional savings for growing wealth",
      "Fragmented financial management - users managing money across multiple disconnected platforms",
      "Building trust for comprehensive financial data aggregation in privacy-conscious markets",
      "Competing against established financial advisors, banks, and digital comparison tools like GoBear"
    ],
    solutions: [
      "Built 360° financial profile connecting all accounts, assets, and liabilities in one platform",
      "Implemented AI-driven insights with machine learning auto-categorization for spending patterns",
      "Created financial marketplace with tailored product recommendations and educational content",
      "Developed roadmap features for insurance needs analysis and emergency savings management"
    ],
    results: [
      "MVP launched March 2019 with ~30% month-over-month growth achieving 5000+ active users",
      "1,200+ app downloads in Singapore market within first year",
      "Processed 84,000+ financial transactions with average user age of 27.1 years",
      "Secured 4 signed strategic partnerships with banks, insurers, and robo-advisors"
    ],
    techStack: {
      frontend: ["React Native", "JavaScript", "Chart.js"],
      backend: ["Node.js", "Express.js", "Python"],
      database: ["MongoDB"],
      dataSecurity: ["Bank-level Security", "Data Encryption & Privacy", "Secured API Integration"],
      thirdPartyIntegrations: ["Open Banking APIs"],
      machineLearning: ["Auto-categorization", "Spending Pattern Analysis", "Financial Profiling", "Predictive Insights", "Risk Assessment"]
    },
    technologies: ["React Native", "Node.js", "Python", "MongoDB", "AWS", "Machine Learning", "Banking APIs", "Chart.js", "Real-time Analytics"],
    learnings: [
      "Establishing multi-revenue model (subscriptions + referral/affiliate + partnerships) early is crucial for sustainability and growth",
      "Product-led growth is key, and very powerful especially when built on trust, transparency and security",
      "ASEAN markets has massive opportunity: Total Addressable Market of S$4.3bn (insurance) + S$4.5bn AUM (robo-investment) and is very fragmented and nuanced"
    ],
    slug: "financial-butler"
  },
  {
    id: "lockket",
    title: "Lockket.app",
    description: "Interactive memory walls for special events - capture memories together through real-time photo and message sharing.",
    longDescription: "Lockket turns special events into interactive memory walls where guests share photos and messages in real-time. From weddings to memorials, Lockket helps create and preserve special moments with AI content moderation, QR code access, and multilingual support for seamless memory collection.",
    category: "Event Technology",
    tags: ["B2B", "SaaS", "Events", "Memory Sharing", "Current"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    status: "current",
    year: "2024-Present",
    role: "Product Lead & Co-founder",
    challenges: [
      "Creating engaging real-time experiences for diverse event types (weddings, funerals, graduations, corporate)",
      "Ensuring appropriate content through AI moderation while maintaining authentic user expression",
      "Building seamless mobile experience with QR code access requiring no app downloads",
      "Balancing feature richness with simplicity for event organizers and guests"
    ],
    solutions: [
      "Developed real-time animated memory walls that update instantly as guests contribute",
      "Implemented advanced AI content moderation to ensure appropriate contributions before display",
      "Created simple QR code access system allowing instant participation from any mobile device",
      "Built multilingual support (English/Chinese) with automatic detection for inclusive participation"
    ],
    results: [
      "Successfully launched live platform with credit-based pricing model ($70-$100 per event)",
      "Serving multiple event types: weddings, memorials, graduations, and corporate events",
      "Integrated photo book creation service (20x20cm hardcover, 30 pages) for lasting memories",
      "Offering 3 free credits for new service providers to encourage platform adoption"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Real-time UI", "Responsive Design"],
      backend: ["Node.js", "Real-time WebSocket", "API Services", "Payment Processing"],
      database: ["Real-time Database", "Media Storage", "User Management"],
      dataSecurity: ["AI Content Moderation", "Secure Payment", "Privacy Protection"],
      thirdPartyIntegrations: ["Stripe Payment", "Photo Book Printing", "Email Services"],
      machineLearning: ["AI Content Moderation", "Automatic Content Detection", "Language Detection"]
    },
    technologies: ["React", "TypeScript", "WebSocket", "AI Moderation", "Stripe", "Real-time Database"],
    learnings: [
      "Real-time user experiences require careful balance between immediacy and content safety",
      "Event technology must be accessible to all demographics - QR codes eliminate app download friction",
      "Credit-based pricing works well for event-driven businesses with clear per-use value",
      "Multilingual support is essential for inclusive event experiences across diverse communities"
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
