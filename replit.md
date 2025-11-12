# Danny's Diving Services - Professional Diving Website

## Overview

Danny's Diving Services is a marketing website for a professional commercial diving business based in Victoria BC and Vancouver Island. The site showcases diving services including hull cleaning, underwater inspections, zinc anode replacement, mooring services, and equipment retrieval. Built as a lead generation platform, it features trust-building elements like video documentation, testimonials, certifications, and prominent call-to-action elements to drive phone calls and quote requests.

## Recent Changes

**November 12, 2025**
- Replaced "WorkSafeBC Compliant" trust badge with "Video Documentation - Every Job Recorded" to emphasize video recording of all jobs
- Migrated all images from generated assets to professional stock photography for better authenticity
- Created dedicated video gallery page (`/videos`) showcasing 9+ recent diving projects with thumbnails, durations, and dates
- Integrated contact form with backend API including email notifications via Nodemailer
- Added full-screen video modal preview for video gallery items
- Enhanced navigation with "Recent Work" link to video gallery page
- Implemented proper loading states and error handling for contact form submissions

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (Home, Videos, and 404 pages)
- Single-page application architecture with minimal routes

**UI Component System**
- shadcn/ui component library (New York style variant) for consistent design
- Radix UI primitives for accessible, headless UI components
- Tailwind CSS for utility-first styling with custom design tokens
- Design system follows local service business patterns (inspired by PressurePros, HomeAdvisor)
- Typography: Inter for headings/UI, Open Sans for body text (loaded via Google Fonts CDN)

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and API calls
- React Hook Form with Zod validation for contact form management
- Custom query client configuration with credential-based requests

**Component Architecture**
- Functional components with hooks
- Modular component structure: separate page components (Home, Videos) and reusable UI components
- Example components provided for development/testing purposes
- Key interactive features: before/after slider, video gallery with modal previews, mobile-responsive navigation
- Video gallery displays stock imagery thumbnails with play buttons, duration overlays, and full-screen modal on click

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- TypeScript for type safety across server code
- HTTP server creation for WebSocket support (future extensibility)

**API Design**
- RESTful API endpoint pattern (`/api/*`)
- Contact form submission endpoint (`POST /api/contact`)
- Zod schema validation for request payloads
- Structured error handling with appropriate HTTP status codes

**Development Environment**
- Vite middleware integration for hot module replacement in development
- Runtime error overlay for debugging
- Replit-specific plugins for development tooling (cartographer, dev banner)
- Request/response logging middleware with timing information

**Production Build**
- esbuild for server-side bundling
- Vite for client-side bundling
- Static file serving from `dist/public`

### Data Storage Solutions

**Database**
- PostgreSQL as the primary database (via Neon serverless)
- Drizzle ORM for type-safe database queries and schema management
- Schema-first approach with migration support (`drizzle-kit`)

**Data Models**
- `contactRequests` table storing lead information:
  - UUID primary key (auto-generated)
  - Contact details (name, phone, email)
  - Service interest and message fields
  - Timestamp tracking (createdAt)

**Database Access Pattern**
- Storage abstraction layer (`IStorage` interface)
- `DbStorage` implementation for production database operations
- Repository pattern for clean separation between business logic and data access

### Authentication and Authorization

**Current Implementation**
- No authentication system currently implemented
- Public-facing website with open access
- Contact form submissions do not require authentication

**Session Management**
- Express session infrastructure prepared (connect-pg-simple for PostgreSQL-backed sessions)
- Cookie-based session support available but not actively used

### External Dependencies

**Email Services**
- Nodemailer for transactional email delivery
- SMTP configuration via environment variables:
  - `SMTP_HOST` (default: smtp.gmail.com)
  - `SMTP_PORT` (default: 587)
  - `SMTP_USER` and `SMTP_PASS` for authentication
  - `SMTP_FROM` for sender address
  - `CONTACT_EMAIL` for receiving quote requests
- Email notifications sent on each contact form submission

**Database Hosting**
- Neon serverless PostgreSQL
- Connection via `DATABASE_URL` environment variable
- HTTP-based database driver (@neondatabase/serverless)

**CDN & External Assets**
- Google Fonts CDN for typography (Inter, Open Sans)
- Stock images stored in `attached_assets/stock_images/` directory (11 professional diving/maritime photos)
- Video gallery uses stock imagery as thumbnails with modal previews
- Note: Video playback functionality prepared for integration with actual video hosting service (YouTube, Vimeo, or custom solution)

**Third-Party UI Libraries**
- Radix UI component primitives (20+ components)
- Lucide React for iconography
- date-fns for date formatting
- cmdk for command palette functionality
- class-variance-authority and clsx for conditional styling

**Development Tools**
- Replit-specific Vite plugins for development experience
- tsx for TypeScript execution in development
- Tailwind CSS with PostCSS for styling pipeline