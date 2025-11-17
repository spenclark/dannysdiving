# Danny's Diving Services - Professional Diving Website

## Overview
Danny's Diving Services is a marketing website for a commercial diving business in Victoria, BC. The site aims to generate leads by showcasing services like hull cleaning and underwater inspections, featuring trust-building elements such as video documentation, testimonials, and certifications, along with prominent calls-to-action for phone calls and quote requests. The project focuses on strong local SEO to dominate search rankings in Victoria BC and Vancouver Island.

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

*   **Email Services:** Nodemailer for transactional email delivery, configured via environment variables for SMTP settings and recipient email.
*   **Database Hosting:** Neon serverless PostgreSQL, accessed via `DATABASE_URL` environment variable and `@neondatabase/serverless` driver.
*   **CDN & External Assets:** Google Fonts CDN for Inter and Open Sans. Stock images are stored locally, and video gallery thumbnails are stock imagery, with video playback prepared for external hosting.