# Danny's Diving Services - Professional Diving Website

## Overview
Danny's Diving Services is a marketing website for a commercial diving business in Victoria, BC. Its primary purpose is to generate leads by showcasing services such as hull cleaning and underwater inspections. The site incorporates trust-building elements like video documentation, testimonials, and certifications, alongside clear calls-to-action for phone calls and quote requests. A key ambition is to achieve strong local SEO dominance in Victoria BC and Vancouver Island for commercial diving-related search terms.

## User Preferences
Preferred communication style: Simple, everyday language.

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