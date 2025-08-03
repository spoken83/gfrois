export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  category: string;
  achievements: string[];
  leadership: string[];
  image: string;
  isHighlighted?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "income-insurance",
    company: "Income Insurance",
    role: "Product & Venture Lead | Senior Product Manager",
    period: "Jan 2024 – Present | Aug 2022 – Dec 2023",
    category: "InsureTech",
    achievements: [
      "Achieved 2x growth in top-line revenue with 8-10% shift to higher profitability products",
      "Built scalable user management module (RBAC) for 2000+ users across 2 agency units",
      "Designed AI-enabled tool increasing advisor/customer satisfaction by 20%"
    ],
    leadership: [
      "Led venture team of 6 (product managers, growth hackers, customer success)",
      "Owned Product P&L, reduced OPEX by 30% while increasing MRR to S$30k (+50%)",
      "Won 2023 Hackathon with innovative pay-as-you-use digital product"
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400"
  },
  {
    id: "railsbank",
    company: "Railsbank (now Railsr)",
    role: "Lead / Senior Product Manager | APAC Product Lead",
    period: "Jul 2021 – Aug 2022",
    category: "BaaS",
    achievements: [
      "Spearheaded cross-product strategy spanning Singapore and Australia",
      "Launched multi-currency ledgers, payment schemes, and compliance services",
      "Closed 2 key clients, increasing ARR by +$1M"
    ],
    leadership: [
      "Led team of 2 PMs and 3 engineering squads",
      "Established data-driven culture using customer usage analytics",
      "Collaborated across UK HQ, EU and VN engineering teams"
    ],
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400"
  },
  {
    id: "financial-butler",
    company: "Financial Butler",
    role: "Founder",
    period: "Dec 2018 – Mar 2021",
    category: "Startup Founder",
    achievements: [
      "Designed MVP and interactive wireframes end-to-end",
      "34 investor connections, 22 pitches delivered",
      "60% increase in user conversion, ~5000 MAU within first year"
    ],
    leadership: [
      "Successful launch within 6 months",
      "3 startup competitions, 1 tech conference",
      "Strategic partnerships with fintechs and insurers"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
    isHighlighted: true
  },
  {
    id: "murex",
    company: "Murex",
    role: "Project Manager | Product Lead | Implementation Consultant",
    period: "Jun 2011 – Jun 2021",
    category: "FinTech Enterprise",
    achievements: [
      "Delivered 5 Murex projects across APAC (300-3000 man-days)",
      "Led project teams of 5-20 members",
      "Complex front-to-back implementations and offshore rollouts"
    ],
    leadership: [
      "7 years Product Management expertise across presales to implementation",
      "Led first successful Mx.3 FX Cash eDistribution, generating S$10m+ revenue",
      "Product expert for Distribution across Asia markets"
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400"
  }
];
