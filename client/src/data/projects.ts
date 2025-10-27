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
  results?: string[];
  currentExecution?: string[];
  technologies: string[];
  techStack?: {
    frontend: string[];
    backend: string[];
    database: string[];
    dataSecurity?: string[];
    thirdPartyIntegrations?: string[];
    machineLearning?: string[];
    ai?: string[];
    education?: string[];
  };
  learnings?: string[];
  roadmap?: string[];
  slug: string;
}

export const projects: Project[] = [
  {
    id: "thinkerly",
    title: "Thinkerly.app",
    description:
      "Production-ready AI-powered math assessment platform for Singapore primary students (P1-6) combining curriculum mastery tracking with mathematical heuristics proficiency.",
    longDescription:
      "Thinkerly is an AI-powered math platform for Singapore primary students that goes beyond traditional drilling. We deliver high-quality questions combined with proven mathematical heuristics, building consistent habits that sharpen critical thinking and strengthen foundations. Our dual-proficiency system tracks both curriculum mastery and problem-solving skills, transforming students into confident thinkers ready to tackle advanced math and excel in PSLE and beyond.",
    category: "EdTech",
    tags: [
      "EdTech",
      "AI Learning",
      "Math Heuristics",
      "Singapore Curriculum",
      "Production Platform",
    ],
    image:
      "https://images.unsplash.com/photo-1596496050827-8299e0220269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    status: "current",
    year: "2025-Present",
    role: "Product, Founder",
    challenges: [
      "Mathematical Accuracy at Scale: Ensuring AI-generated questions maintain 100% mathematical correctness across diverse problem types and difficulty levels",
      "Dual-Proficiency Tracking: Measuring both curriculum mastery AND problem-solving heuristics simultaneously with appropriate weighting",
      "Visual Engagement Balance: Creating educational diagrams that enhance understanding without revealing answers or creating confusion",
      "Age-Appropriate AI Content: Generating contextually appropriate questions for Primary 1-6 range with Singapore cultural relevance",
      "Quality Assurance: Validating thousands of AI-generated questions while maintaining educational standards",
      "User Experience for Children: Designing interfaces that work for young learners who may not be case-sensitive or tech-savvy",
    ],
    solutions: [
      "Multi-Model AI Validation Pipeline: GPT-4o-mini for generation, GPT-5 for marking/validation, Deepseek R1 for verification, and Gemini for OCR—with emergency-stop safeguards for educational safety",
      "Sophisticated Dual-Proficiency System: 70% curriculum sub-strand proficiency + 30% heuristic proficiency weighting with mastery-based advancement algorithms",
      "Template-Based Visual Generation: Deterministic mathematical calculations with targeted AI enhancement for wording/distractors, ensuring accuracy while maintaining engagement",
      "School-Verified Learning System: Uploads real exam questions, extracts pedagogical patterns via AI, continuously improves question generation quality",
      "Maker-Checker Quality Control: Visual vetting workflow where all AI-generated visuals are manually reviewed before student delivery",
      "Child-Friendly UX: Case-insensitive login, real-time username availability, clear error messages, and iPad-optimized interface",
      "Adaptive Assessment Orchestration: Diagnostic tests, targeted practice, and personalized learning paths based on real-time proficiency data",
    ],
    currentExecution: [
      "Core Assessment Engine: Comprehensive AI-powered question generation with multi-model validation, three assessment types (Diagnostic, Adaptive Practice, Targeted Review), real-time dual-proficiency calculation, context-aware AI feedback with OCR analysis, visual enhancement engine with 5+ question types",
      "Multi-Role Platform: Student experience with gamification (points, achievements, custom avatars), parent dashboard with multi-child support and detailed analytics, admin controls for user management and analytics",
      "Advanced Features: School-verified question upload pipeline with AI pattern extraction, heuristic learning system, visual vetting maker-checker workflow, PMF feedback collection system, feature flag infrastructure, comprehensive admin analytics",
      "Business Infrastructure: Stripe integration (subscription checkout, billing, webhooks - currently dormant), session-based authentication with role-based access control, PostgreSQL database with optimized proficiency tracking, monetization system ready to activate post-PMF",
    ],
    techStack: {
      frontend: [
        "React 18 with TypeScript",
        "Radix UI + shadcn/ui",
        "Canvas Drawing API",
        "Tailwind CSS",
        "iPad-optimized responsive design",
      ],
      backend: [
        "Node.js + Express.js with TypeScript",
        "SOA",
        "AssessmentService",
        "QuestionManagementService",
        "ProficiencyService",
        "CurriculumService",
        "Drizzle ORM",
        "Session-based authentication",
        "Role-Based Access Control (Admin, Parent, Child)",
      ],
      database: ["PostgreSQL 16 via Neon serverless"],
      ai: [
        "Multi-Model Strategy",
        "OpenAI GPT-4o-mini (generation)",
        "GPT-5 (marking/validation)",
        "Deepseek R1 (verification)",
        "Google Gemini (OCR)",
        "Pattern learning engine",
        "Context-aware feedback with OCR",
      ],
      thirdPartyIntegrations: [
        "Stripe Integration",
        "Subscription management system",
        "Feature gating for monetization",
      ],
      education: [
        "Singapore MOE Curriculum Standards (P1-P6)",
        "12 Mathematical Heuristics (PSLE-aligned)",
        "Dual-Proficiency Algorithms (70/30 weighting)",
        "Mastery-based progression",
        "Curriculum-driven decision framework",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Multi-Model AI",
      "Stripe",
      "Educational Framework",
    ],
    roadmap: [
      "Near-Term (6-12 months): Teacher dashboard for classroom deployment, school partnership integrations, advanced geometry visual rendering, mobile native apps (iOS/Android)",
      "Medium-Term (12-24 months): Peer collaboration features for group problem-solving, expanded heuristics library for secondary school, real-time tutoring mode with live AI assistance, parent community features",
      "Long-Term Vision: Regional expansion beyond Singapore (Malaysia, Hong Kong), integration with school management systems, predictive analytics for PSLE performance, AI-powered personalized learning journey builder",
    ],
    slug: "thinkerly",
  },
  {
    id: "options-monitor",
    title: "Options Monitor",
    description:
      "Automated credit spread scanner and trading assistant - Built in 3 days to transform hours of manual ticker analysis into intelligent, automated setup detection with Telegram alerts.",
    longDescription:
      "Options Monitor is a personal trading tool that combines years of options trading expertise from working at Murex with modern credit spread strategies. Built in just 3 days from idea to production, this platform automates the tedious process of analyzing 15-20 tickers daily, running asynchronous scans with intelligent setup detection, technical analysis, and risk validation. The system delivers actionable trade setups via Telegram alerts at strategic market times, reducing active trading time from hours to just 2 hours of focused analysis and execution.",
    category: "Trading Technology",
    tags: [
      "Personal Tool",
      "Options Trading",
      "Automation",
      "Credit Spreads",
      "Current",
    ],
    image: "@assets/image_1759828033380.png",
    status: "current",
    year: "2024-Present",
    role: "Creator & Trader",
    challenges: [
      "Manual analysis of 15-20 tickers daily was extremely time-consuming and inefficient",
      "Identifying optimal credit spread setups required complex technical analysis and risk calculations",
      "Needed timely alerts aligned with market hours (daily digest, pre-market, market open)",
      "Validating multiple spread combinations against strict risk/reward criteria manually was error-prone",
      "Transitioning from options theory knowledge to practical credit spread trading execution",
    ],
    solutions: [
      "Built automated scanner with technical analysis engine (RSI, StochRSI, support/resistance levels)",
      "Implemented intelligent PUT spread setup validation with multi-factor scoring system",
      "Created asynchronous scanning system with Telegram bot alerts at 6pm SGT (digest), 8pm (pre-market), 10pm (market open)",
      "Developed comprehensive risk analysis testing multiple spread combinations with constraint validation",
      "Integrated real-time position tracking with P/L calculations and DTE monitoring",
    ],
    currentExecution: [
      "Live platform currently testing with demo trading account for validation phase",
      "Automated daily scans across 15-20 tickers with qualified setup detection",
      "Telegram integration delivering timely market alerts at strategic trading hours",
      "Reduced active trading time from hours of manual analysis to 2 hours (10pm-12am) of focused execution",
      "Platform ready for transition to live trading account after one-week testing period",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Real-time UI", "Responsive Design"],
      backend: [
        "Node.js",
        "Async Processing",
        "Market Data APIs",
        "Telegram Bot API",
      ],
      database: ["Position Tracking", "Scan History", "Alert Management"],
      thirdPartyIntegrations: [
        "Telegram Bot",
        "Market Data Providers",
        "Options Pricing APIs",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Technical Analysis Algorithms",
      "Telegram API",
      "Async Processing",
      "Options Pricing Models",
    ],
    learnings: [
      "Rapid prototyping (3 days from idea to production) is possible when combining domain expertise with focused execution",
      "Automation transforms trading from time-intensive manual analysis to strategic decision-making",
      "Asynchronous processing and timely alerts enable efficient participation in time-sensitive markets",
      "Systematic risk validation and scoring algorithms reduce emotional trading decisions",
    ],
    roadmap: [
      "Transition to live trading account after successful demo validation period",
      "Expand scanner to support additional options strategies beyond PUT credit spreads",
      "Integrate machine learning for pattern recognition and setup prediction",
      "Build comprehensive backtesting engine to validate strategies against historical data",
    ],
    slug: "options-monitor",
  },
  {
    id: "lockket",
    title: "Lockket.app",
    description:
      "Interactive memory walls for special events - capture memories together through real-time photo and message sharing.",
    longDescription:
      "Lockket turns special events into interactive memory walls where guests share photos and messages in real-time. From weddings to memorials, Lockket helps create and preserve special moments with AI content moderation, QR code access, and multilingual support for seamless memory collection.",
    category: "Event Technology",
    tags: ["B2B", "SaaS", "Events", "Memory Sharing", "Current"],
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    status: "current",
    year: "2024-Present",
    role: "Product Lead & Co-founder",
    challenges: [
      "Creating engaging real-time experiences for diverse event types (weddings, funerals, graduations, corporate)",
      "Ensuring appropriate content through AI moderation while maintaining authentic user expression",
      "Building seamless mobile experience with QR code access requiring no app downloads",
      "Balancing feature richness with simplicity for event organizers and guests",
    ],
    solutions: [
      "Developed real-time animated memory walls that update instantly as guests contribute",
      "Implemented advanced AI content moderation to ensure appropriate contributions before display",
      "Created simple QR code access system allowing instant participation from any mobile device",
      "Built multilingual support (English/Chinese) with automatic detection for inclusive participation",
    ],
    currentExecution: [
      "Successfully launched live platform with credit-based pricing model ($70-$100 per event)",
      "Serving multiple event types: weddings, memorials, graduations, and corporate events",
      "Integrated photo book creation service (20x20cm hardcover, 30 pages) for lasting memories",
      "Offering 3 free credits for new service providers to encourage platform adoption",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Real-time UI", "Responsive Design"],
      backend: [
        "Node.js",
        "Real-time WebSocket",
        "API Services",
        "Payment Processing",
      ],
      database: ["Real-time Database", "Media Storage", "User Management"],
      dataSecurity: [
        "AI Content Moderation",
        "Secure Payment",
        "Privacy Protection",
      ],
      thirdPartyIntegrations: [
        "Stripe Payment",
        "Photo Book Printing",
        "Email Services",
      ],
      machineLearning: [
        "AI Content Moderation",
        "Automatic Content Detection",
        "Language Detection",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "WebSocket",
      "AI Moderation",
      "Stripe",
      "Real-time Database",
    ],
    roadmap: [
      "Enhanced AI moderation with custom content filters for different event types",
      "Advanced analytics dashboard for event organizers to track engagement metrics",
      "Integration with major event planning platforms and wedding vendors",
      "Expanded photo book customization options and international shipping",
    ],
    slug: "lockket",
  },
  {
    id: "financial-butler",
    title: "Financial Butler",
    description:
      "Personal finance at your fingertips - A 360° customer journey platform with AI-driven financial management connecting all financial touchpoints.",
    longDescription:
      "Financial Butler was a personal finance management app that provided users with a complete 360° view of their finances by connecting all financial touchpoints - spending, savings, insurance, and investments - through a single app and leveraging machine learning for auto-categorization and personalized insights. My goal was to address financial literacy for the emerging affluent in Asia, guiding users toward smarter spending, better saving, adequate insurance, and intelligent investing.",
    category: "FinTech",
    tags: ["B2C", "PFM", "Machine Learning", "Mobile App", "Data Analytics"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    status: "completed",
    year: "2018-2021",
    role: "Founder",
    challenges: [
      "Inadequet savings: 66% (Singapore), 76% (Malaysia), 80% (Thailand) lack 6-month emergency funds",
      "Singaporeans were under-insured despite high awareness, many chose traditional savings for growing wealth",
      "Fragmented financial management - users managing money across multiple disconnected platforms",
      "Building trust for comprehensive financial data aggregation in privacy-conscious markets",
      "Competing against established financial advisors, banks, and digital comparison tools like GoBear",
    ],
    solutions: [
      "Built 360° financial profile connecting all accounts, assets, and liabilities in one platform",
      "Implemented AI-driven insights with machine learning auto-categorization for spending patterns",
      "Created financial marketplace with tailored product recommendations and educational content",
      "Developed roadmap features for insurance needs analysis and emergency savings management",
    ],
    results: [
      "MVP launched March 2019 with ~30% month-over-month growth achieving 5000+ active users",
      "1,200+ app downloads in Singapore market within first year",
      "Processed 84,000+ financial transactions with average user age of 27.1 years",
      "Secured 4 signed strategic partnerships with banks, insurers, and robo-advisors",
    ],
    techStack: {
      frontend: ["React Native", "JavaScript", "Chart.js"],
      backend: ["Node.js", "Express.js", "Python"],
      database: ["MongoDB"],
      dataSecurity: [
        "Bank-level Security",
        "Data Encryption & Privacy",
        "Secured API Integration",
      ],
      thirdPartyIntegrations: ["Open Banking APIs"],
      machineLearning: [
        "Auto-categorization",
        "Spending Pattern Analysis",
        "Financial Profiling",
        "Predictive Insights",
        "Risk Assessment",
      ],
    },
    technologies: [
      "React Native",
      "Node.js",
      "Python",
      "MongoDB",
      "AWS",
      "Machine Learning",
      "Banking APIs",
      "Chart.js",
      "Real-time Analytics",
    ],
    learnings: [
      "Establishing multi-revenue model (subscriptions + referral/affiliate + partnerships) early is crucial for sustainability and growth",
      "Product-led growth is key, and very powerful especially when built on trust, transparency and security",
      "ASEAN markets has massive opportunity: Total Addressable Market of S$4.3bn (insurance) + S$4.5bn AUM (robo-investment) and is very fragmented and nuanced",
    ],
    slug: "financial-butler",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
