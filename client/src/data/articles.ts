export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: string;
  slug: string;
  image: string;
  tags: string[];
  visibility: 'public' | 'preview' | 'draft'; // public: visible everywhere, preview: visible only in dev/preview, draft: visible only in dev
}

export const articles: Article[] = [
  {
    id: "ai-enabled-pm",
    title: "Not an AI PM. A PM Powered by AI.",
    excerpt: "The role of Product is evolving — not because every product is built with AI, but because every Product Manager can now build smarter with AI.",
    content: `Not an AI PM. A PM Powered by AI.

The role of Product is evolving — not because every product is built with AI, but because every Product Manager can now build smarter with AI.

This shift isn't about becoming an *"AI PM."*
It's about being a PM powered by AI — and when done right, it changes everything.

We're entering a new era where AI doesn't just speed things up.
It amplifies product sense, accelerates decision-making, and raises the bar for what great product management looks like.

Here's what that looks like in practice — and how I'm applying it in my own work:

## Research is no longer passive. It's live, sharp, and continuous.

Traditionally, research was something we scheduled: interviews, survey cycles, competitor reviews. Valuable, but often slow and stale.

Now, with AI in the loop, research becomes something you can run every day.

I use **ChatGPT** to break down unfamiliar domains, quickly ramp up on new topics, or explore edge-case use scenarios. It's like having a research assistant that never tires.

**Grok** helps me track real-time market sentiment — what users are actually saying, asking, and complaining about in the wild.

**Claude** by Anthropic is my go-to for summarising long documents and support logs, clustering feedback, or identifying themes across large qualitative datasets.

What used to take weeks now takes hours.
But more importantly, I'm closer to my customers and market than ever before.

## Writing user stories is now a collaborative act — with AI as your challenger.

I no longer write user stories in isolation. I write them with a copilot.

Here's how: I'll draft a story or an epic, then prompt **ChatGPT** with things like:

*"What edge cases am I missing?"*
*"Does this acceptance criteria hold up?"*
*"Challenge the assumptions behind this flow."*

The point isn't to outsource the thinking — it's to pressure-test it.

The *"so that…"* has never been more important. If the outcome isn't clear, AI will expose the vagueness. If the job-to-be-done isn't sharp, the story won't hold.

The result?
Tighter stories. Stronger logic. Clearer intentions.
And more aligned conversations with stakeholders and engineers.

## Roadmaps are becoming dynamic, signal-driven systems.

Roadmaps used to be planning documents. Now they're feedback systems.

With AI tools giving me faster research, earlier prototypes, and sharper signals, I no longer plan in rigid quarters. I plan in learning loops.

I focus on:

- Capabilities, not features.
- Signals, not assumptions.
- Jobs-to-be-done, not just timelines.

AI helps simulate flows, map outcomes, and identify blockers early — all of which informs what's truly needed now, and what can wait.

Roadmaps are no longer a wishlist.
They're living systems grounded in real user behaviour, market signals, and business impact.

## Prototyping happens faster — and validation comes earlier.

We often talk about *"failing fast."* But what if you could validate fast instead?

I use **Replit** to quickly vibe-code journeys and build rough flows that users can interact with — sometimes in a matter of hours.

It's not about fidelity. It's about speed to feedback.

Instead of waiting 2–3 sprints to see if a feature resonates, I can test a flow within the same week.
And if users struggle or disengage, I know it's not worth building yet.

That changes everything — from how I define MVPs, to how I prioritize backlog items, to how I communicate product direction internally.

When you get signal early, you reduce waste later.

## Strategy sharpens with real-time data and feedback.

One of the biggest unlocks of AI is how it changes the tempo of product strategy.

Data dashboards become promptable.
Cohort analysis happens in seconds.
Forecast models are no longer spreadsheet-only territory.

This means you're no longer waiting for an analyst or BI team to weigh in.
You can move from question to insight — on your own — and in minutes.

It leads to more confident decisions.
Faster iterations.
And better conversations with stakeholders who now expect product to lead, not just respond.

AI doesn't replace strategic thinking — it clears the path for it.

## Product and Engineering are overlapping more than ever.

The days of handing off tickets and hoping for the best are behind us.

PMs today are scripting, prototyping, automating, and — in many cases — even fine-tuning small models themselves.

I've been building quick internal tools to test flows or data ideas on my own.
Not because I have to. But because I can — and it helps me collaborate better with engineers.

When you speak their language, understand technical tradeoffs, and test your ideas without waiting on a sprint,
you unlock a new layer of respect and velocity.

The best PMs aren't just storytellers or strategists.
They're builders too.

## Better insights, higher ceilings.

From clustering behaviours to generating hypotheses, AI helps raise the ceiling of what a single PM can handle.

You still need taste. You still need sense.
But you also now have scale.

You can:

- Connect more dots.
- Run more simulations.
- Build stronger narratives from messier data.

The craft is still yours.
But the surface area you can cover just multiplied.

## But AI is not a silver bullet.

There are real pitfalls if you're not careful.

**1. Shiny features ≠ real user needs**
AI makes it dangerously easy to generate cool ideas.
But *"easy"* doesn't mean valuable.
You still need to anchor everything to real problems and real users. That hasn't changed.

**2. Early signals ≠ final truth**
A vibe-coded prototype flops — does that mean the idea is bad? Or just not framed right yet?
Too many PMs will kill good ideas too early.
Judgement still matters. Pattern recognition still matters.
Product sense is still what separates noise from insight.

## The truth?

AI won't replace Product Managers.
But it will absolutely expose them.

It will reveal who relies on fluff — and who's got real product chops.
It will show who's guessing — and who's validating.
It will separate the good from the great.

Because the best PMs won't be replaced by AI.
They'll be replaced by a better PM using AI.

The role of Product isn't dying.
It's evolving.
And it's evolving fast.`,
    category: "Product Strategy",
    publishedAt: "Aug 6, 2025",
    readTime: "7 min read",
    slug: "ai-enabled-pm",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    tags: ["Product Management", "AI", "Strategy", "Leadership"],
    visibility: "public"
  },
  {
    id: "product-led-growth-southeast-asia",
    title: "The Evolution of Product-Led Growth in Southeast Asia",
    excerpt: "Exploring how PLG strategies are adapting to unique market dynamics across APAC, from regulatory considerations to cultural preferences...",
    content: `Product-Led Growth (PLG) has become a dominant strategy in the global SaaS landscape, but its implementation in Southeast Asia requires a nuanced understanding of local market dynamics, regulatory frameworks, and cultural preferences.

## The Unique APAC Context

Southeast Asia presents a complex tapestry of markets, each with distinct characteristics that impact how PLG strategies can be executed. From Singapore's advanced digital infrastructure to Indonesia's diverse archipelago economy, product leaders must adapt their approaches accordingly.

### Regulatory Considerations

One of the most significant challenges in implementing PLG strategies in APAC is navigating the diverse regulatory landscape. Countries like Singapore have well-established financial and data protection frameworks, while emerging markets may have evolving regulations that require constant monitoring and adaptation.

### Cultural Preferences and User Behavior

Asian users often demonstrate different engagement patterns compared to Western markets. Relationship-building, trust establishment, and community-driven adoption play crucial roles in product success. This means that traditional PLG tactics like freemium models need to be complemented with more personalized onboarding and community-building initiatives.

## Key Adaptations for Success

Based on my experience leading product teams across Singapore, Australia, and other APAC markets, here are the critical adaptations needed for successful PLG implementation:

### 1. Localized Onboarding Experiences

Creating onboarding flows that respect local business practices and communication styles is essential. This includes everything from language localization to understanding local business customs and decision-making processes.

### 2. Community-Centric Growth

Unlike markets where viral coefficients drive growth, APAC markets often rely heavily on word-of-mouth and community recommendations. Building strong user communities and leveraging local influencers becomes crucial for sustainable growth.

### 3. Flexible Pricing Models

The diversity in economic conditions across APAC markets requires flexible pricing strategies. What works in Singapore may not be suitable for markets like Vietnam or the Philippines.

## The Future of PLG in APAC

As digital adoption continues to accelerate across Southeast Asia, we're seeing exciting opportunities for innovative PLG approaches. The key is balancing global best practices with deep local market understanding.

The companies that will succeed are those that can maintain the efficiency and scalability of PLG while respecting and adapting to local market nuances. This requires product leaders who can think globally but act locally, combining data-driven decision making with cultural intelligence.`,
    category: "Product Strategy",
    publishedAt: "Dec 15, 2024",
    readTime: "8 min read",
    slug: "product-led-growth-southeast-asia",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    tags: ["Product Strategy", "PLG", "APAC", "Growth"],
    visibility: "preview"
  },
  {
    id: "building-distributed-teams",
    title: "Building High-Performing Product Teams in Distributed Organizations",
    excerpt: "Lessons learned from leading cross-functional teams across multiple time zones and cultural contexts...",
    content: `Leading distributed product teams across multiple time zones and cultural contexts has taught me invaluable lessons about communication, trust-building, and maintaining team cohesion in complex organizational structures.

## The Distributed Team Reality

In today's global economy, distributed teams are not just a nice-to-have—they're essential for accessing top talent and serving diverse markets. However, leading such teams requires a fundamental shift in management philosophy and practices.

### Communication as the Foundation

Clear, asynchronous communication becomes the backbone of successful distributed teams. This means moving beyond traditional meeting-heavy cultures to embrace documentation, structured decision-making processes, and intentional communication practices.

### Building Trust Across Distances

Trust building in distributed teams requires deliberate effort. Regular one-on-ones, transparent goal setting, and creating opportunities for team members to showcase their work are crucial for maintaining team cohesion.

## Practical Strategies That Work

Based on my experience leading teams across Singapore, UK, Vietnam, and other locations, here are the strategies that have proven most effective:

### 1. Establish Clear Working Agreements

Define when and how team members should be available for collaboration, establish communication norms, and create shared understanding of deliverables and timelines.

### 2. Leverage Time Zone Differences

Rather than seeing time zones as obstacles, use them as advantages. Create handoff processes that allow work to continue across time zones, and use asynchronous work periods for deep focus time.

### 3. Invest in Team Culture

Regular virtual team building, shared celebrations of wins, and creating informal communication channels help maintain the human connections that drive high performance.

### 4. Use Data to Drive Decisions

In distributed environments, objective data becomes even more important for making decisions and measuring progress. Establish clear metrics and regular reporting cadences.

## The Leadership Mindset Shift

Leading distributed teams requires a shift from managing presence to managing outcomes. This means focusing on results rather than activity, and building systems that enable autonomy while maintaining alignment.

The most successful distributed teams I've led are those where every team member feels empowered to make decisions within their domain while remaining connected to the broader mission and goals.

## Looking Forward

As remote and distributed work becomes increasingly common, the organizations that excel will be those that master the art of distributed collaboration. This isn't just about tools and processes—it's about creating cultures that thrive on trust, transparency, and shared purpose.`,
    category: "Leadership",
    publishedAt: "Nov 28, 2024",
    readTime: "6 min read",
    slug: "building-distributed-teams",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    tags: ["Leadership", "Remote Teams", "Management", "Culture"],
    visibility: "draft"
  },
  {
    id: "financial-butler-journey",
    title: "From Idea to Impact: My Financial Butler Journey",
    excerpt: "A deep dive into the challenges and learnings from building a fintech startup from zero to 5000 users...",
    content: `Building Financial Butler from concept to a fintech app serving 5000 monthly active users was one of the most challenging and rewarding experiences of my career. Here's the unvarnished truth about what it takes to build a fintech startup in Singapore.

## The Genesis of an Idea

The idea for Financial Butler came from a personal pain point—managing multiple financial accounts, credit cards, and investments across different platforms was becoming increasingly complex. I realized that many young professionals in Singapore faced similar challenges.

### Market Research and Validation

Before writing a single line of code, I spent three months conducting user interviews with over 50 potential users. The insights were eye-opening:
- 78% of respondents used multiple banking apps daily
- 65% felt overwhelmed by their financial data
- 89% wanted actionable insights, not just data aggregation

## The Technical Challenge

Building a fintech app that aggregates financial data is technically complex and heavily regulated. Here were the major challenges we faced:

### Security and Compliance

Implementing bank-level security wasn't optional—it was the foundation everything else was built on. This meant:
- End-to-end encryption for all data transmission
- Secure API integrations with major Singaporean banks
- Compliance with MAS regulations and PDPA requirements
- Regular security audits and penetration testing

### Data Integration Complexity

Each financial institution had different API standards, data formats, and integration requirements. Creating a unified data model that could handle this diversity while maintaining data accuracy was one of our biggest technical challenges.

## The Fundraising Reality

Connecting with 34 investors and delivering 22 pitches taught me valuable lessons about fundraising in the fintech space:

### What Investors Care About
- Regulatory compliance and security posture
- User acquisition costs and retention metrics
- Clear path to monetization
- Team's ability to navigate complex regulatory environment

### Common Rejection Reasons
- Concerns about data security and regulatory risks
- Questions about market size and competition
- Uncertainty about monetization strategy
- Team's lack of prior fintech experience

## User Acquisition and Growth

Growing from zero to 5000 MAU required a multi-channel approach:

### Product-Led Growth
- Freemium model with clear value proposition
- In-app referral mechanisms
- Focus on user onboarding experience

### Community Building
- Financial literacy workshops
- Partnership with personal finance influencers
- Content marketing focused on financial education

### Data-Driven Optimization
- A/B testing for onboarding flows
- User behavior analysis to identify friction points
- Continuous iteration based on user feedback

## Key Learnings and Mistakes

### What Worked Well
- Obsessive focus on user feedback and iteration
- Strong emphasis on security and compliance from day one
- Building trust through transparency and education
- Data-driven decision making for product features

### What I'd Do Differently
- Spend more time on regulatory strategy before building
- Focus on fewer features initially and execute them better
- Build partnerships with financial institutions earlier
- Invest more in user education and onboarding

## The Pivot Decision

After two and a half years, we made the difficult decision to wind down Financial Butler. While we had achieved product-market fit with our core user base, the path to sustainable business growth was longer and more capital-intensive than anticipated.

### Lessons from the Pivot
- Market timing matters, especially in heavily regulated industries
- Having a clear exit strategy is as important as a growth strategy
- Team health and sustainability should never be compromised
- Not every good product becomes a successful business

## Reflections and Next Steps

Building Financial Butler taught me invaluable lessons about entrepreneurship, product development, and the fintech landscape. While the startup didn't achieve the scale we originally envisioned, the experience shaped my approach to product leadership and prepared me for future opportunities.

The relationships built, lessons learned, and skills developed during this journey have been instrumental in my subsequent roles and continue to inform my approach to product strategy and team leadership.

## For Aspiring Fintech Entrepreneurs

If you're considering building a fintech product, here's my advice:
- Understand the regulatory landscape before you build
- Security and compliance are features, not afterthoughts
- User trust is your most valuable asset
- Focus on solving real problems, not just building cool technology
- Build a team with complementary skills and shared vision

The fintech space is challenging but full of opportunities for those willing to navigate its complexities with patience, persistence, and a user-first mindset.`,
    category: "Innovation",
    publishedAt: "Nov 12, 2024",
    readTime: "12 min read",
    slug: "financial-butler-journey",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    tags: ["Entrepreneurship", "FinTech", "Startup", "Lessons Learned"],
    visibility: "draft"
  },
  {
    id: "business-strategy-lessons-hard-way",
    title: "3 Business Strategy Lessons I Learnt the Hard Way",
    excerpt: "Strategy looks simple in slides, but real lessons come from lived experience. Here are 3 business strategy lessons I had to learn the hard way.",
    content: `3 Business Strategy Lessons I Learnt the Hard Way

Strategy looks simple on slides. In reality, it's messy, political, and full of trade-offs.

Over the last 15+ years, I've built products and ventures across fintech, insurtech, and edtech. Along the way, I didn't just learn frameworks — I learnt the kind of strategy lessons you only get by living through them.

Here are three that stuck with me.

## 1. Good revenue > bad revenue

When I took over a B2C-InsureTech venture, **SNACK**, I inherited a model that looked successful on paper. GMV (or GWP in the insurance world) was growing fast, charts looked great in board decks, and the team had momentum.

But underneath, the growth was fuelled by vanity metrics and subsidized revenue. It wasn't sustainable. Users weren't sticking, costs were ballooning, and the economics didn't make sense.

Turning that around wasn't easy. It meant challenging the *"success story"* others wanted to tell, making unpopular decisions, and pushing for a model that created real user value.

**Takeaway:** sustainable revenue compounds. Vanity revenue collapses.

## 2. Foundations before features

There's always pressure to scale faster. At another start-up, we were adding features rapidly, sometimes selling them before operations were even ready to deliver.

Chasing growth, it looked like we were sprinting ahead. However on the inside, our processes were buckling. Manual operations couldn't keep pace, mistakes were creeping in, and the team was stretched thin.

I had to make the unpopular call to pause new features, rally the teams, and fix the foundations first. It slowed us down in the short term, but gave us the stability to grow again without breaking.

**Takeaway:** true scale doesn't come from stacking features. It comes from resilient infrastructure that can handle growth.

## 3. Don't ignore the elephants

Every venture has elephants in the room — regulatory hurdles, brittle processes, rising costs, or broken revenue models. Spotting them is easy. Getting everyone to admit they're there is the hard part.

I faced this several times. It's uncomfortable to call out the big problems when everyone else wants to keep pushing forward. But I learnt the cost of ignoring them is far greater than the cost of confronting them.

The toughest decisions were the ones that weren't popular — but those were the decisions that actually moved us forward.

**Takeaway:** elephants don't shrink when ignored. They only get bigger.

## Closing thoughts

These weren't neat lessons from a textbook, they were hard-won, sometimes painful, but ultimately transformative.

They've shaped how I approach every new venture: push for real revenue, fix your foundations, and never shy away from the elephants in the room.

I'd love to hear: what's the hardest business lesson you've had to push through?`,
    category: "Strategy",
    publishedAt: "Aug 19, 2025",
    readTime: "4 min read",
    slug: "business-strategy-lessons-hard-way",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    tags: ["Strategy", "Entrepreneurship", "Leadership", "Lessons Learned"],
    visibility: "public"
  }
];

// Utility function to filter articles based on environment
export const getVisibleArticles = (): Article[] => {
  const isDevelopment = import.meta.env.DEV;
  
  return articles.filter(article => {
    switch (article.visibility) {
      case 'public':
        return true; // Always visible
      case 'preview':
        return isDevelopment; // Only visible in development/preview
      case 'draft':
        return isDevelopment; // Only visible in development
      default:
        return true;
    }
  });
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  const visibleArticles = getVisibleArticles();
  return visibleArticles.find(article => article.slug === slug);
};
