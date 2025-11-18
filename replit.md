# Danny's Diving Services - Professional Diving Website

## Overview
Danny's Diving Services is a marketing website for a commercial diving business in Victoria, BC. The site aims to generate leads by showcasing services like hull cleaning and underwater inspections, featuring trust-building elements such as video documentation, testimonials, and certifications, along with prominent calls-to-action for phone calls and quote requests. The project focuses on strong local SEO to dominate search rankings in Victoria BC and Vancouver Island, targeting key search terms including "divers near me", "divers Victoria", "hull cleaning Victoria", and related commercial diving searches.

## Recent Changes

**November 18, 2025**
- **Email Integration Setup with Resend**:
  - Integrated Resend for transactional email delivery
  - Created `server/email.ts` module with Resend client configuration using Replit connector authentication
  - Updated contact form endpoint to use Resend instead of Nodemailer
  - Configured automatic API key management through Replit's secure connector system
  - Email notifications now sent via Resend when users submit quote requests through contact form
  - Maintained graceful error handling - form submissions succeed even if email fails
  - Updated favicon to custom-generated diving mask icon on ocean blue background
  - Verified application running successfully with new email integration

**November 17, 2025 (Credential Update)**
- **Corrected Licensing Language for Accuracy**:
  - Updated all "licensed" references to "certified" or "insured" to accurately reflect Danny's credentials (certified commercial diver from Spain, not Canadian-licensed)
  - Homepage and schema: "Licensed and insured" → "Certified and insured"
  - Trust badge updated: "Licensed Commercial Diver" → "Certified Commercial Diver" with "Internationally Trained"
  - Footer: "Licensed, insured, and trusted" → "Certified, insured, and trusted"
  - Terms page: "licensed, insured commercial divers" → "certified, insured commercial divers"
  - All 6 service page meta descriptions updated to use "certified" or "insured" instead of "licensed"
  - Maintains professional trust signals without making false claims about Canadian licensing
  - Changes verified via end-to-end testing and architect review

**November 17, 2025 (Final)**
- **SEO Optimization for "Diving Services Victoria" Search Term**:
  - Updated homepage to target "diving services Victoria" searches:
    - Title: "Diving Services Victoria BC | Danny's Diving - Professional Commercial Divers & Hull Cleaning"
    - Meta description: "Professional diving services Victoria BC and Vancouver Island. Expert commercial divers providing hull cleaning, underwater inspections, zinc changes, and mooring services. Licensed diving services serving Victoria marinas. Call (778) 535-4506."
    - Hero H1: "Professional Diving Services Victoria BC & Vancouver Island"
  - Enhanced LocalBusiness schema with business service keywords:
    - AlternateName: "Danny's Diving Services Victoria BC" (reinforces geo-targeted business name)
    - Description: "Professional diving services Victoria BC and Vancouver Island. Licensed and insured commercial divers..."
    - Slogan: "Victoria's Trusted Diving Services"
  - Added og:image meta tag for proper social sharing previews
  - Fixed duplicate LocalBusiness schema issue (single static schema in index.html only)
  - Documented unused schema generator function to prevent future confusion
  - Fixed hero button styling to follow UI component guidelines (removed custom padding/height)
  - All changes validated via end-to-end testing and architect review as production-ready

**November 17, 2025 (Later)**
- **SEO Optimization for "Divers Near Me" and "Divers Victoria" Search Terms**:
  - Updated homepage to target local diver searches:
    - Title: "Professional Divers Victoria BC | Danny's Diving Services - Commercial Diving & Hull Cleaning"
    - Meta description: "Professional commercial divers in Victoria BC and Vancouver Island. Expert underwater services including hull cleaning, boat inspections, zinc changes, and mooring services. Licensed divers serving Victoria marinas."
    - Open Graph tags updated to "Professional Commercial Divers Victoria BC"
  - Enhanced LocalBusiness schema with diver-focused keywords:
    - Description: "Professional commercial divers in Victoria BC and Vancouver Island. Licensed and insured divers specializing in underwater hull cleaning, boat inspections, zinc anode replacement, mooring services, and underwater recovery. Trusted local divers serving Victoria marinas since 2021."
    - Added slogan: "Victoria's Trusted Commercial Divers"
  - Updated all 6 service page meta descriptions to include "commercial divers", "professional divers", or "licensed divers" keywords while maintaining natural language and user readability
  - Keyword density maintained at moderate levels (1-2 "diver" mentions per element) to avoid over-optimization
  - Strategic placement of diver keywords in primary metadata and schema to capture "divers near me/Victoria" search intent
  - All changes verified through end-to-end testing and architect review

**November 17, 2025**
- **Cutting-Edge SEO Implementation for Local Search Dominance**:
  - Enhanced LocalBusiness JSON-LD schema in index.html with:
    - Geographic coordinates (48.4284, -123.3656) for Victoria BC location
    - Complete business hours and contact information
    - Comprehensive service areas including all major Victoria marinas
  - Upgraded ServicePage with advanced meta tag system:
    - Twitter Card meta tags for social media optimization
    - Geographic meta tags (geo.region, geo.position, ICBM) for local search signals
    - Enhanced Open Graph properties for better social sharing
    - BreadcrumbList structured data for improved search result navigation
    - Proper meta tag cleanup on unmount to prevent stale metadata during SPA navigation
  - Enhanced Service schema (schema.ts) with valid Schema.org types:
    - Replaced invalid custom types with proper "Service" @type and serviceType annotations
    - Added geographic coordinates for all 8 service areas (Victoria, Oak Bay, Sidney, Esquimalt, etc.)
    - Comprehensive areaServed with Place objects including GeoCoordinates
    - Enhanced provider details and service offers with CAD pricing
  - Implemented "Other Services" internal linking system on service pages for improved crawlability
  - Created comprehensive XML sitemap (sitemap.xml) with:
    - All pages (homepage, videos, 6 service pages) with proper priorities
    - Service pages prioritized at 0.9 for maximum local search weight
    - Current lastmod dates (2025-11-17) for freshness signals
  - Verified robots.txt configuration for optimal crawler guidance
  - Optimized heading hierarchy with strategic location keyword placement throughout service pages
  - Added resource preload hints in index.html for Core Web Vitals optimization (fonts, critical resources)

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend uses React 18+ with TypeScript, Vite for building, and Wouter for routing. It's a multi-page application with SEO-optimized routes. UI components are built with shadcn/ui and Radix UI primitives, styled using Tailwind CSS, and uses Inter and Open Sans fonts. State management and API calls are handled by TanStack Query, and forms use React Hook Form with Zod validation. The architecture emphasizes modular components, interactive features like a video gallery with modal previews, and dynamic service pages.

### Backend Architecture
The backend is built with Express.js and TypeScript, designed with RESTful API endpoints. It includes a contact form submission endpoint and a dynamic XML sitemap endpoint. Zod is used for request payload validation, and structured error handling is implemented. The server is configured for development with Vite middleware and for production with esbuild and Vite bundling, serving static files.

### Data Storage Solutions
PostgreSQL (via Neon serverless) is the primary database, managed with Drizzle ORM for type-safe queries. A `contactRequests` table stores lead information, including contact details, service interest, and timestamps. A storage abstraction layer with a `DbStorage` implementation and a repository pattern ensures clear separation of concerns. No authentication system is currently implemented, as it's a public-facing website.

### UI/UX Decisions
The design uses shadcn/ui (New York style) and Radix UI for a consistent and accessible interface. Typography is handled by Inter for headings and Open Sans for body text. The overall design is inspired by local service business patterns, focusing on clear calls-to-action and trust-building elements.

### Feature Specifications
Key features include a video gallery showcasing diving projects with modal previews, 6 SEO-optimized service pages (hull cleaning, underwater inspections, etc.) each with local keywords, benefits, process steps, FAQs, and CTAs. The site also includes a contact form integrated with a backend API.

### System Design Choices
The project prioritizes SEO with structured data (JSON-LD), comprehensive meta tags (Open Graph, Twitter Card, Geographic), canonical URLs, and an XML sitemap. Content structure is optimized with FAQs, detailed process descriptions, and benefits sections. Internal linking is implemented to improve crawlability and user navigation.

## External Dependencies

*   **Email Services:** Resend for transactional email delivery, integrated via Replit connector for secure API key management. Contact form submissions trigger email notifications to `dannysdivingservices@gmail.com` (configurable via `CONTACT_EMAIL` environment variable).
*   **Database Hosting:** Neon serverless PostgreSQL, accessed via `DATABASE_URL` environment variable and `@neondatabase/serverless` driver.
*   **CDN & External Assets:** Google Fonts CDN for Inter and Open Sans. Stock images are stored locally, and video gallery thumbnails are stock imagery, with video playback prepared for external hosting.