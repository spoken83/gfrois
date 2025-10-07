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
    currentExecution: [
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
    roadmap: [
      "Enhanced AI moderation with custom content filters for different event types",
      "Advanced analytics dashboard for event organizers to track engagement metrics",
      "Integration with major event planning platforms and wedding vendors",
      "Expanded photo book customization options and international shipping"
    ],
    slug: "lockket"
  },
  {
    id: "options-monitor",
    title: "Options Monitor",
    description: "Automated credit spread scanner and trading assistant - Built in 3 days to transform hours of manual ticker analysis into intelligent, automated setup detection with Telegram alerts.",
    longDescription: "Options Monitor is a personal trading tool that combines years of options trading expertise from working at Murex with modern credit spread strategies. Built in just 3 days from idea to production, this platform automates the tedious process of analyzing 15-20 tickers daily, running asynchronous scans with intelligent setup detection, technical analysis, and risk validation. The system delivers actionable trade setups via Telegram alerts at strategic market times, reducing active trading time from hours to just 2 hours of focused analysis and execution.",
    category: "Trading Technology",
    tags: ["Personal Tool", "Options Trading", "Automation", "Credit Spreads", "Active"],
    image: "@assets/image_1759828033380.png",
    status: "active",
    year: "2024-Present",
    role: "Creator & Trader",
    challenges: [
      "Manual analysis of 15-20 tickers daily was extremely time-consuming and inefficient",
      "Identifying optimal credit spread setups required complex technical analysis and risk calculations",
      "Needed timely alerts aligned with market hours (daily digest, pre-market, market open)",
      "Validating multiple spread combinations against strict risk/reward criteria manually was error-prone",
      "Transitioning from options theory knowledge to practical credit spread trading execution"
    ],
    solutions: [
      "Built automated scanner with technical analysis engine (RSI, StochRSI, support/resistance levels)",
      "Implemented intelligent PUT spread setup validation with multi-factor scoring system",
      "Created asynchronous scanning system with Telegram bot alerts at 6pm SGT (digest), 8pm (pre-market), 10pm (market open)",
      "Developed comprehensive risk analysis testing multiple spread combinations with constraint validation",
      "Integrated real-time position tracking with P/L calculations and DTE monitoring"
    ],
    currentExecution: [
      "Live platform currently testing with demo trading account for validation phase",
      "Automated daily scans across 15-20 tickers with qualified setup detection",
      "Telegram integration delivering timely market alerts at strategic trading hours",
      "Reduced active trading time from hours of manual analysis to 2 hours (10pm-12am) of focused execution",
      "Platform ready for transition to live trading account after one-week testing period"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Real-time UI", "Responsive Design"],
      backend: ["Node.js", "Async Processing", "Market Data APIs", "Telegram Bot API"],
      database: ["Position Tracking", "Scan History", "Alert Management"],
      thirdPartyIntegrations: ["Telegram Bot", "Market Data Providers", "Options Pricing APIs"]
    },
    technologies: ["React", "TypeScript", "Node.js", "Technical Analysis Algorithms", "Telegram API", "Async Processing", "Options Pricing Models"],
    learnings: [
      "Rapid prototyping (3 days from idea to production) is possible when combining domain expertise with focused execution",
      "Automation transforms trading from time-intensive manual analysis to strategic decision-making",
      "Asynchronous processing and timely alerts enable efficient participation in time-sensitive markets",
      "Systematic risk validation and scoring algorithms reduce emotional trading decisions"
    ],
    roadmap: [
      "Transition to live trading account after successful demo validation period",
      "Expand scanner to support additional options strategies beyond PUT credit spreads",
      "Integrate machine learning for pattern recognition and setup prediction",
      "Build comprehensive backtesting engine to validate strategies against historical data"
    ],
    slug: "options-monitor"
  },
  {
    id: "thinkerly",
    title: "Thinkerly.app",
    description: "AI-powered math learning platform for primary students using heuristics-based problem solving to build confident, PSLE-ready thinkers beyond traditional rote learning.",
    longDescription: "Thinkerly is a comprehensive math heuristics assessment and learning platform designed for primary school students. The platform goes beyond traditional drilling methods by teaching students structured problem-solving approaches through proven mathematical heuristics, helping them become confident and strategic thinkers ready for PSLE and beyond.",
    category: "EdTech",
    tags: ["EdTech", "AI Learning", "Math Heuristics", "Current"],
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    status: "current",
    year: "2024-Present",
    role: "Product Lead & Co-founder", 
    challenges: [
      "Moving beyond traditional rote learning methods to conceptual understanding",
      "Teaching structured problem-solving heuristics to young learners effectively",
      "Creating engaging math content that builds confidence rather than anxiety",
      "Designing assessment tools that accurately measure mathematical thinking skills"
    ],
    solutions: [
      "Developed comprehensive heuristics-based problem solving framework covering key strategies",
      "Built AI-powered assessment system that evaluates mathematical thinking processes",
      "Created role-based platform serving students, parents, and educators with tailored experiences",
      "Implemented structured learning pathways that gradually introduce complex problem-solving concepts"
    ],
    currentExecution: [
      "Live platform with demo accounts showcasing full student assessment journey",
      "Multi-role system supporting admin, parent, and student user experiences",
      "Comprehensive heuristics curriculum covering mathematical problem-solving strategies",
      "AI-powered assessment engine providing detailed analysis of student thinking patterns"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Responsive Design", "Modern UI"],
      backend: ["Node.js", "Express", "Authentication System", "Role Management"],
      database: ["PostgreSQL", "User Management", "Assessment Data", "Progress Tracking"],
      ai: ["AI Assessment Engine", "Problem Analysis", "Personalized Learning"],
      education: ["Heuristics Framework", "PSLE Preparation", "Math Curriculum"]
    },
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AI Assessment", "Educational Framework"],
    roadmap: [
      "Expanded heuristics library covering advanced problem-solving strategies for higher primary levels",
      "Parent dashboard with detailed progress analytics and home practice recommendations",
      "Integration with Singapore math curriculum standards and school assessment systems",
      "Adaptive learning algorithms that personalize difficulty based on individual student progress"
    ],
    slug: "thinkerly"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
