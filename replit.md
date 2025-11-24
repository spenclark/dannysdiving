# Danny's Diving Services - Professional Diving Website

## Overview
Danny's Diving Services is a marketing website for a commercial diving business in Victoria, BC. Its primary purpose is to generate leads by showcasing services such as hull cleaning and underwater inspections. The site incorporates trust-building elements like video documentation, testimonials, and certifications, alongside clear calls-to-action for phone calls and quote requests. A key ambition is to achieve strong local SEO dominance in Victoria BC and Vancouver Island for commercial diving-related search terms.

## User Preferences
Preferred communication style: Simple, everyday language.

## Recent Changes

**November 23, 2025**
- **Page Speed Optimizations**:
  - **Google Fonts Optimization**: Implemented async font loading using media="print" onload technique with preconnect hints, eliminating 1,220ms render-blocking time
  - **Image Optimization**: Converted all PNG/JPG images to WebP format achieving 94.4% compression (5.51MB savings)
    - Service thumbnails: hull cleaning, underwater inspections, zinc anodes, mooring, lost items, commercial diving
    - Video poster images: hero background, before/after hull cleaning posters
    - Brand assets: logo images optimized to WebP
  - **Image Loading Strategy**: 
    - Above-fold logo images use eager loading with explicit width/height to prevent CLS
    - Below-fold service thumbnails use lazy loading for better initial page load
  - **Social Media Preview Images**:
    - Generated optimized 1200x630px OG images in client/public/og-images/ directory
    - Each service has dedicated OG image for social sharing (Facebook, Twitter, LinkedIn)
    - Added ogImage field to Service interface with canonical URLs
    - Updated meta tags and structured data to use absolute OG image URLs
  - **Build Scripts**: Created scripts/optimize-images.ts and scripts/generate-og-images.ts for reproducible asset optimization
  - **Expected Performance Impact**: ~1.2 seconds faster load time, ~5.4 MB bandwidth savings per page load

- **Accessibility Improvements**:
  - **Zoom Support**: Removed viewport zoom restrictions to allow users to pinch-zoom on mobile (critical for vision-impaired users)
  - **Button Labels**: Added aria-label to modal close button for screen reader accessibility
  - **Heading Hierarchy**: Fixed heading structure to follow proper h1 → h2 → h3 sequence across all pages
    - Removed h3/h4 from TrustBadges and Footer components where they broke hierarchy
    - Ensures screen readers can properly navigate page structure
    - Improves SEO by providing clear content hierarchy to search engines
  - **Video Captions**: Added caption tracks to all video elements (hero video, before/after videos)
    - Created VTT caption files in client/public/captions/ directory
    - Provides accessibility for hearing-impaired users
    - Meets WCAG 2.1 accessibility standards

**November 21, 2025**
- **Hero Video Background**:
  - Replaced static hero image with full-screen video background
  - Video autoplays, loops continuously, and is muted for optimal user experience
  - Includes `playsInline` attribute for iOS compatibility
  - No poster/thumbnail - video starts playing immediately for seamless experience
  - Maintains dark gradient overlay for text readability
  - Video properly sized with `object-cover` for responsive behavior across all devices
  - Accessibility enhanced with semantic video element and proper ARIA labeling

**November 20, 2025**
- **Google Reviews Integration**:
  - Replaced mock testimonials with 4 authentic Google reviews
  - Reviews from Stuart Dahlgren, Chris and Anne Daley, Thorsten Hoefling, and John Bain
  - Added Google icon branding to each review card for authenticity
  - Added "Read More Reviews on Google" button linking to Google Business Profile (https://share.google/jPX1F6I1wnMGh4LCa)
  - Changed layout from 3-column to 4-column grid to accommodate all reviews
  - All reviews highlight key strengths: video documentation, fair pricing, prompt service

- **Sitemap Configuration**:
  - Removed static sitemap.xml from public folder
  - Now using dynamic backend-generated sitemap at `/sitemap.xml`
  - Sitemap automatically updates lastmod date daily for better SEO
  - Includes all pages: homepage, videos, 6 service pages, privacy, and terms

- **Service Page Thumbnail Images Update**:
  - Replaced all stock service images with authentic underwater photos from actual diving work
  - Updated images in shared/services.ts:
    - Hull Cleaning: Underwater hull view showing boat from below in clear blue water
    - Underwater Inspections: Propeller/shaft inspection photo showing marine growth and component condition
    - Zinc Anode Replacement: Close-up of zinc anode underwater showing replacement work
    - Mooring Services: Mooring chain and equipment on seafloor showing maintenance work
    - Lost Item Retrieval: Underwater recovery scene showing search and retrieval operations
    - Commercial Diving: Professional diver working underwater in clear turquoise water showing marine infrastructure work
  - New thumbnails display on homepage services grid and individual service detail pages
  - All images provide authentic visual examples of actual services performed
  - Verified across all service pages through end-to-end testing

- **Hull Cleaning Before/After Video Improvements**:
  - Updated videos to play once and pause at the end instead of looping continuously
  - Removed `loop` attribute; added `onEnded` handler to track playback completion
  - Changed video preload from "none" to "metadata" for better loading
  - Videos autoplay when visible (muted), play through once, then pause
  - Users can manually replay videos by clicking the play/pause button
  - Replaced stock poster images with actual underwater hull photos showing real before/after conditions
  - New poster images provide authentic preview and serve as fallback if video fails to load

- **Gmail Email Integration (Replacing Resend)**:
  - Replaced Resend with Gmail API for contact form email notifications
  - Integrated via Replit's secure Gmail connector using googleapis package
  - Emails sent from dannysdivingservices@gmail.com (free, no custom domain required)
  - OAuth2 authentication with automatic token refresh
  - Successfully tested end-to-end with contact form

## System Architecture

### Frontend Architecture
The frontend is built with React 18+, TypeScript, Vite, and Wouter for routing, creating an SEO-optimized multi-page application. UI components leverage shadcn/ui and Radix UI primitives, styled with Tailwind CSS, utilizing Inter and Open Sans fonts. State management and API interactions are handled by TanStack Query, while forms use React Hook Form with Zod validation. The architecture emphasizes modular components, interactive features like a video gallery with modal previews, and dynamic service pages.

### Backend Architecture
The backend uses Express.js and TypeScript, designed with RESTful API endpoints. It manages contact form submissions and generates a dynamic XML sitemap. Zod is used for request payload validation, and robust error handling is implemented. The server is configured for both development (with Vite middleware) and production (with esbuild and Vite bundling, serving static files).

### Data Storage Solutions
Neon serverless PostgreSQL serves as the primary database, managed by Drizzle ORM for type-safe queries. A `contactRequests` table stores lead information. A storage abstraction layer with a `DbStorage` implementation and a repository pattern ensures clear separation of concerns.

### UI/UX Decisions
The design adopts shadcn/ui (New York style) and Radix UI for a consistent and accessible interface. Inter is used for headings and Open Sans for body text. The visual design, including the circular logo and navy blue primary color, is inspired by local service business patterns, focusing on clear calls-to-action and trust-building elements.

### Feature Specifications
Key features include a video gallery with modal previews showcasing diving projects, six SEO-optimized service pages (each detailing specific services with local keywords, benefits, process steps, FAQs, and CTAs), and a contact form integrated with the backend API.

### System Design Choices
The project prioritizes SEO through structured data (JSON-LD), comprehensive meta tags (Open Graph, Twitter Card, Geographic), canonical URLs, and an XML sitemap. Content structure is optimized with FAQs, detailed process descriptions, and benefits sections. Internal linking is implemented to improve crawlability and user navigation.

## External Dependencies

*   **Email Services:** Gmail API for contact form email notifications, integrated via Replit's secure Gmail connector.
*   **Database Hosting:** Neon serverless PostgreSQL.
*   **CDN & External Assets:** Google Fonts CDN for Inter and Open Sans. YouTube for video content.