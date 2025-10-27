# replit.md

## Overview

This is a personal portfolio website for Gordon Frois, a product leader and entrepreneur with 15+ years of experience in SaaS, B2B, and B2C markets. The site showcases his professional experience, projects, articles, and contact information through a modern, responsive web interface built as a full-stack application.

## User Preferences

Preferred communication style: Simple, everyday language.
Content positioning: Tone down "Entrepreneur" emphasis - use "Ex-Founder" instead. Focus on product leadership expertise.

## Recent Changes (January 2025)

### Thinkerly Project Content Update (Latest - October 2025)
- **Comprehensive Content Refresh**: Updated Thinkerly project page to reflect actual production status and capabilities
- **Description Updates**: Emphasized production-ready platform status, multi-model AI validation, dual-proficiency tracking system
- **Updated Tags**: Added "Singapore Curriculum" and "Production Platform" to better represent the product
- **Challenges Section**: Rewrote with 6 new technical & educational challenges including mathematical accuracy at scale, dual-proficiency tracking, visual engagement balance, age-appropriate AI content, quality assurance, and child-friendly UX
- **Solutions Section**: Comprehensive rewrite with 7 implemented solutions including multi-model AI validation pipeline (GPT-4o-mini, GPT-5, Deepseek R1, Gemini), sophisticated dual-proficiency system (70/30 weighting), template-based visual generation, school-verified learning system, maker-checker quality control, child-friendly UX, and adaptive assessment orchestration
- **Current Execution**: Major update showing actual production features organized into Core Assessment Engine, Multi-Role Platform, Advanced Features, and Business Infrastructure
- **Tech Stack Expansion**: Comprehensive breakdown showing full architecture across frontend (React 18, Radix UI, TanStack Query, Canvas API), backend (Node.js service architecture, Drizzle ORM, role-based access), database (PostgreSQL 16, optimized proficiency tracking), AI (multi-model strategy), payments (Stripe integration), and educational framework (Singapore MOE, 12 heuristics, dual-proficiency algorithms)
- **Roadmap Updates**: Removed built features, reorganized into Near-Term (6-12 months), Medium-Term (12-24 months), and Long-Term Vision
- **Platform Status**: Clarified PMF validation stage with free-to-use model, 1,000+ MAU target before monetization, 95% complete subscription system in dormant mode
- **Visual Assets**: Updated hero image to new AI-powered Math Heuristics interface showing two tablets

### Options Monitor Project Addition
- **New Project Entry**: Added Options Monitor - automated credit spread scanner and trading assistant to portfolio
- **Project Details**: Built in 3 days from idea to production, combining Murex options expertise with credit spread strategies
- **Key Features**: Automated ticker analysis (15-20 daily), technical analysis (RSI, StochRSI), spread validation, Telegram alerts
- **Business Impact**: Reduced trading time from hours to 2 hours (10pm-12am) via asynchronous scanning and strategic alerts
- **Technical Implementation**: React/TypeScript frontend, Node.js backend, market data APIs, Telegram bot integration
- **Current Status**: Active testing with demo account before transitioning to live trading
- **Asset Integration**: Added screenshot (scanner interface) to all project display pages with conditional rendering

### LinkedIn Sharing & SEO Optimization
- **LinkedIn-Optimized Meta Tags**: Enhanced social sharing preview with compelling, professional descriptions specifically crafted for LinkedIn engagement
- **Improved Page Titles**: Changed from generic "15+ years..." to action-oriented "Product Leader Transforming Ideas Into Scalable Products"
- **Enhanced Descriptions**: Professional copy focusing on business impact, scale achievements, and measurable outcomes rather than just experience
- **Social Media Meta Tags**: Added LinkedIn-specific optimizations including image dimensions, author attribution, and locale settings
- **Twitter Card Optimization**: Enhanced Twitter card metadata with creator attribution and proper card type
- **Professional Positioning**: Emphasized "ex-founder turned executive" narrative with focus on 0→1 innovation and team leadership

### SEO Optimization Implementation
- **Comprehensive Meta Tags**: Added title, description, keywords, author, and robots meta tags to all pages
- **Open Graph & Twitter Cards**: Implemented social media sharing optimization with proper OG and Twitter meta tags
- **Structured Data**: Added JSON-LD schema markup for Person and Organization entities to improve search engine understanding
- **Technical SEO**: Created robots.txt and sitemap.xml for better crawling and indexing
- **Per-Page SEO**: Each page (Home, About, Experience, Projects, Articles, Contact) has unique, optimized meta information
- **SEO Components**: Built reusable SEOHead component for dynamic meta tag management across pages
- **Performance**: Added preconnect links for Google Fonts to improve loading performance

## System Architecture

### Frontend Architecture
The client-side is built using React with TypeScript and follows a component-based architecture:

- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for scroll animations and transitions
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

The frontend follows a pages-based routing structure with dedicated pages for home, about, projects, articles, and detailed views. Components are organized into reusable UI components and page-specific sections.

### Backend Architecture
The server-side uses Express.js with TypeScript in a minimalist setup:

- **Framework**: Express.js with TypeScript
- **Module System**: ES modules for modern JavaScript standards
- **Development**: Hot reload via Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation for users
- **API Design**: RESTful API structure with /api prefix for all routes

### Data Storage Solutions
The application is configured for PostgreSQL but currently uses in-memory storage:

- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon Database serverless)
- **Migrations**: Drizzle Kit for schema management and migrations
- **Schema**: Shared schema definitions between client and server
- **Current State**: Memory storage implementation as placeholder

### Authentication and Authorization
Basic user management structure is in place but not fully implemented:

- **User Schema**: PostgreSQL users table with username/password fields
- **Storage Interface**: CRUD operations for user management
- **Session Management**: Configured for connect-pg-simple (PostgreSQL session store)
- **Current State**: Framework ready but authentication flow not implemented

### Build and Deployment
The application uses Vite for development and production builds:

- **Development**: Vite dev server with HMR and React plugin
- **Production Build**: Client built with Vite, server bundled with esbuild
- **Asset Management**: Static file serving with proper routing
- **Environment**: Node.js with production/development configurations

## External Dependencies

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting (configured but not actively used)
- **Replit**: Development environment with runtime error handling and cartographer plugins

### Core Libraries
- **UI Framework**: React ecosystem with Radix UI primitives for accessibility
- **Database**: Drizzle ORM with PostgreSQL dialect and Zod integration
- **Styling**: Tailwind CSS with PostCSS processing and custom theme system
- **Development Tools**: TypeScript, Vite, esbuild for modern development workflow
- **Fonts**: Google Fonts (Inter) for typography
- **Icons**: Lucide React for consistent iconography

### Data Sources
The application currently uses static data files for content:
- Project data stored in TypeScript files with full case study information
- Article content with metadata and structured content
- Experience data with achievements and leadership information
- All content is statically typed with TypeScript interfaces