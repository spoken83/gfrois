# replit.md

## Overview

This is a personal portfolio website for Gordon Frois, a product leader and entrepreneur with 15+ years of experience in SaaS, B2B, and B2C markets. The site showcases his professional experience, projects, articles, and contact information through a modern, responsive web interface built as a full-stack application.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)

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