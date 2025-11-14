# Danny's Diving Services - Professional Diving Website

## Overview

Danny's Diving Services is a marketing website for a professional commercial diving business based in Victoria BC and Vancouver Island. The site showcases diving services including hull cleaning, underwater inspections, zinc anode replacement, mooring services, and equipment retrieval. Built as a lead generation platform, it features trust-building elements like video documentation, testimonials, certifications, and prominent call-to-action elements to drive phone calls and quote requests.

## Recent Changes

**November 14, 2025**
- **Comprehensive SEO Enhancement for Local Search Rankings**:
  - Added structured data (Schema.org JSON-LD) for all pages:
    - LocalBusiness schema on homepage with full business details, service areas, and contact info
    - Service schema for each service page with provider, service areas, and pricing
    - FAQ schema on all service pages for rich snippet eligibility in search results
  - Enhanced title tags and H1 headings with service differentiators:
    - Hull Cleaning: "Underwater Barnacle Removal & Marine Growth Cleaning"
    - All services now include descriptive keywords like "underwater", "commercial diver", "professional"
  - Added "Hull Cleaning vs Boat Detailing" comparison section to hull cleaning page:
    - Clearly differentiates underwater hull cleaning from topside boat washing/detailing
    - Explains why true hull cleaning requires commercial diving underwater
    - Addresses common search confusion between hull cleaning and boat detailing services
  - Implemented canonical URLs on all pages to prevent duplicate content penalties
  - Added descriptive alt text to all service images with location keywords (Victoria, Vancouver Island)
  - Added Open Graph image tags for improved social media sharing
  - Enhanced keyword variations throughout content:
    - Increased use of "Victoria" without always including "BC" for broader search coverage
    - Added local marina names (Oak Bay, Sidney, Brentwood Bay) throughout content
    - Included service-specific terms (barnacle removal, marine growth, underwater cleaning)

**November 13, 2025**
- **Implemented SEO sitemap system** for improved search engine indexing:
  - Dynamic XML sitemap at `/sitemap.xml` with all 10 pages (home, videos, 6 services, privacy, terms)
  - robots.txt file configured to guide search engine crawlers
  - Service page URLs prioritized at 0.9 for local search optimization in Victoria BC
  - Sitemap automatically updates with current date for freshness signals

**November 12, 2025**
- Replaced "WorkSafeBC Compliant" trust badge with "Video Documentation - Every Job Recorded" to emphasize video recording of all jobs
- Updated experience stats to "3+ Years Experience" and "50+ Clients" for accuracy
- Updated phone number throughout site to (778) 535-4506
- Fixed navbar visibility on white background pages (Videos page)
- Migrated all images from generated assets to professional stock photography for better authenticity
- Created dedicated video gallery page (`/videos`) showcasing 9+ recent diving projects with thumbnails, durations, and dates
- Integrated contact form with backend API including email notifications via Nodemailer
- Added full-screen video modal preview for video gallery items
- Enhanced navigation with "Recent Work" link to video gallery page
- Implemented proper loading states and error handling for contact form submissions
- **Created 6 SEO-optimized service pages** for local search (Victoria BC & Vancouver Island):
  - Hull Cleaning (`/services/hull-cleaning`)
  - Underwater Inspections (`/services/underwater-inspections`)
  - Zinc Anode Replacement (`/services/zinc-changes`)
  - Mooring Services (`/services/mooring-services`)
  - Underwater Recovery (`/services/lost-item-retrieval`)
  - Commercial Diving (`/services/commercial-diving`)
- Each service page includes: local keywords, benefits, process steps, service areas, FAQs, pricing info, and multiple CTAs
- Added smooth scroll navigation for on-page sections (services, testimonials, contact)
- Added CTA section to Videos page with phone call and quote request buttons
- Added trust callout on homepage linking to video gallery: "Watch our recent work videos - every job is recorded"

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- Multi-page application with SEO-optimized routes:
  - Home (`/`)
  - Videos (`/videos`)
  - 6 individual service pages (`/services/:slug`)
  - 404 Not Found page

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
- Modular component structure: separate page components (Home, Videos, ServicePage) and reusable UI components
- Example components provided for development/testing purposes
- Key interactive features: before/after slider, video gallery with modal previews, mobile-responsive navigation
- Video gallery displays stock imagery thumbnails with play buttons, duration overlays, and full-screen modal on click
- Service pages: Dynamic routing with comprehensive SEO content including benefits, process, service areas, FAQs
- Shared service data model (`shared/services.ts`) containing all service information for consistency

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- TypeScript for type safety across server code
- HTTP server creation for WebSocket support (future extensibility)

**API Design**
- RESTful API endpoint pattern (`/api/*`)
- Contact form submission endpoint (`POST /api/contact`)
- SEO sitemap endpoint (`GET /sitemap.xml`) - dynamic XML generation with all site pages
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

## SEO Strategy

**Search Engine Indexing**
- XML sitemap at `/sitemap.xml` listing all site pages with priorities and change frequencies
- robots.txt file configured to allow all crawlers and reference sitemap location
- Dynamic sitemap generation with current lastmod dates for freshness signals
- Service pages prioritized at 0.9 for maximum local search visibility

**Local Search Optimization**
- 6 individual service pages optimized for Victoria BC and Vancouver Island searches
- Each page includes 20+ local keyword mentions (Victoria BC, Vancouver Island, Oak Bay, Sidney, etc.)
- Service area sections list specific marinas and locations throughout the region
- Meta descriptions optimized for local search with phone number inclusion
- Unique H1 tags per service page with local modifiers

**Content Structure for SEO**
- Comprehensive FAQ sections answering common local questions
- Detailed process descriptions for user education and keyword density
- Benefits sections highlighting value propositions
- Service areas clearly listed with local place names
- Multiple call-to-action sections with phone number and quote requests

**Technical SEO**
- Structured data markup (JSON-LD) on all pages:
  - LocalBusiness schema with geo-coordinates, service areas, contact info
  - Service schema for each service page
  - FAQ schema for rich snippets in search results
- Canonical URLs implemented on all pages to prevent duplicate content
- Open Graph meta tags for social media sharing with service-specific images
- Dynamic page titles and meta descriptions per service with keyword optimization
- Enhanced H1 tags with service differentiators (e.g., "Underwater Barnacle Removal")
- Descriptive image alt text with location keywords (Victoria, Vancouver Island)
- Clean URL structure (`/services/hull-cleaning`)
- Internal linking from service grid to individual pages
- Mobile-responsive design for local mobile searches
- Fast loading with optimized images

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