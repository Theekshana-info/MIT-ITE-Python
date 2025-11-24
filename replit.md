# Python Learning Hub

## Overview

This is an interactive Python learning platform built as a full-stack web application. The platform provides comprehensive tutorials, code examples, interactive quizzes, and visual flowcharts to help users learn Python programming concepts from data types to NumPy arrays. The application features a clean, educational interface inspired by premium learning platforms like Khan Academy and Codecademy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using functional components and hooks for state management and side effects.

**Routing**: Client-side routing implemented with `wouter` for lightweight navigation between educational pages (Home, Data Types, Operators, Conditionals, Loops, Functions, Arrays, NumPy, Flowcharts, Activities, Summary).

**UI Component Library**: Radix UI primitives combined with custom-styled components following the shadcn/ui pattern. This provides accessible, unstyled components that are enhanced with Tailwind CSS styling.

**Styling System**: Tailwind CSS with a comprehensive design token system defined in CSS variables for colors, spacing, and shadows. Custom utility classes (`hover-elevate`, `active-elevate-2`) provide interactive feedback. The design follows a "new-york" style variant with rounded corners and soft shadows.

**State Management**: TanStack Query (React Query) for server state management, though currently the application operates primarily as a frontend-only learning platform with content stored in TypeScript data files.

**Content Structure**: Educational content is organized in dedicated data files (`client/src/data/*.ts`) containing structured information for each topic, including code examples, explanations, and quiz questions.

**Search Functionality**: Real-time search with text highlighting implemented using regex-based matching and React components to mark search results across all pages.

### Backend Architecture

**Server Framework**: Express.js configured for both development and production environments.

**Development Mode**: Vite development server integrated as Express middleware with HMR (Hot Module Replacement) for rapid development.

**Production Mode**: Static file serving from a pre-built `dist/public` directory with fallback to `index.html` for client-side routing.

**Session Management**: Infrastructure in place for session-based authentication using `connect-pg-simple` for PostgreSQL session storage, though not actively utilized in current implementation.

**API Routes**: Minimal backend API surface - the application is designed as a content-focused platform with most logic handled client-side.

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL with type-safe query building and schema definitions.

**Database Schema**: Minimal schema with a `users` table (id, username, password) defined but not actively used - the platform currently functions without user authentication.

**Migration Strategy**: Drizzle Kit configured for schema migrations with output to a `migrations` directory.

**Content Storage**: Educational content (tutorials, examples, quizzes) stored as TypeScript constants in the codebase rather than in a database, enabling fast access and type safety.

### Design System

**Color Palette**: CSS custom properties defining semantic color tokens for light mode (primary blue #3B82F6, backgrounds, borders, etc.) with support for dark mode variants.

**Typography**: Font stack includes Inter for UI text, Fira Code/JetBrains Mono for code snippets, DM Sans for headings, and Architects Daughter for decorative elements.

**Component Patterns**: Card-based layouts with consistent spacing (p-6 to p-8), muted backgrounds (#F9FAFB), and syntax-highlighted code blocks with distinctive output boxes.

**Responsive Design**: Mobile-first approach with sidebar that collapses to drawer on mobile devices, grid layouts that stack on smaller screens.

### Build System

**Bundler**: Vite for frontend builds with React plugin and TypeScript support.

**Module Resolution**: Path aliases configured for clean imports (`@/` for client src, `@shared/` for shared code, `@assets/` for static assets).

**Build Process**: Two-step build - Vite builds the React frontend to `dist/public`, esbuild bundles the Express server to `dist/index.js` with external packages.

**Development Tools**: Replit-specific plugins for runtime error overlay, cartographer (code intelligence), and development banner in non-production environments.

## External Dependencies

### UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **class-variance-authority**: For creating type-safe component variants
- **cmdk**: Command menu component for search interfaces
- **embla-carousel-react**: Carousel/slider functionality
- **lucide-react**: Icon library

### Database & ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL with Zod integration
- **@neondatabase/serverless**: PostgreSQL client optimized for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### React Ecosystem
- **React**: v18+ with TypeScript
- **wouter**: Lightweight routing library
- **TanStack Query**: Async state management for data fetching
- **React Hook Form**: Form state management with @hookform/resolvers for validation

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Utility for merging Tailwind classes
- **zod**: TypeScript-first schema validation

### Build Tools
- **Vite**: Build tool and dev server
- **esbuild**: Fast JavaScript bundler for server-side code
- **TypeScript**: Type system and compiler
- **Replit plugins**: Development tooling specific to Replit environment