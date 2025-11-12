# Design Guidelines: Danny's Diving Services

## Design Approach
**Reference-Based Approach** - Drawing inspiration from successful local service businesses (PressurePros, HomeAdvisor, Thumbtack) with emphasis on trust-building, clear service presentation, and immediate conversion opportunities.

**Core Principles:**
- Trust above all: Professional, credible, transparent
- Immediate action: Phone number and contact form always accessible
- Visual proof: Before/after comparisons, work imagery, certifications
- Local authority: Geographic and industry expertise prominent

## Typography System

**Fonts:** Google Fonts via CDN
- Primary: Inter (headings, navigation, buttons)
- Secondary: Open Sans (body text, forms)

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headlines: text-3xl md:text-4xl lg:text-5xl, font-bold
- Service Titles: text-2xl md:text-3xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Small Print: text-sm, for disclaimers/certifications

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: space-y-8 or gap-8
- Card padding: p-6 md:p-8
- Tight groupings: space-y-4

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-4 md:px-6
- Content sections: max-w-6xl
- Form containers: max-w-2xl
- Text content: max-w-3xl

## Component Library

### Navigation
Sticky header with transparent-to-solid transition on scroll
- Logo left, navigation center, phone button right (CTA style)
- Mobile: Hamburger menu with full-screen overlay
- Phone number: Large, clickable, icon + number format

### Hero Section
Full-viewport video background (80-100vh) with overlay gradient
- Looping underwater diving footage
- Centered content with headline + subheadline + dual CTA buttons
- Scroll indicator at bottom
- Phone number badge floating top-right on desktop

### Before/After Comparison
Interactive slider component (using library like react-compare-image or vanilla JS alternative)
- Full-width or contained within max-w-5xl
- Labels "Before" and "After" on respective sides
- Headline above: "See The Difference Professional Hull Cleaning Makes"

### Service Cards Grid
3-column on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Service icon (from Heroicons - anchor, shield-check, wrench, etc.)
- Service title
- Brief description (2-3 lines)
- "Learn More" link to dedicated service page
- Hover: subtle lift effect (transform, shadow)

### Trust Indicators Section
Icon grid (grid-cols-2 md:grid-cols-4)
- Fully Insured badge (prominent, larger)
- Commercial License
- WorkSafeBC Coverage
- Years of Experience
Each with icon, title, brief descriptor

### Testimonials
Carousel or grid of 3 testimonials (grid-cols-1 md:grid-cols-3)
- Customer name
- Star rating (5 stars using Font Awesome)
- Quote text
- Optional: Customer initial avatar or photo

### Contact Form
Two-column layout on desktop: Form left, contact info/map right
Form fields:
- Full Name (required)
- Phone Number (required)
- Email (required)
- Service Type (dropdown with all services)
- Message/Details (textarea)
- Submit button (large, full-width on mobile)

Contact info panel:
- Phone number (clickable)
- Email address
- Service area text
- Operating hours
- Optional: Embedded Google Maps showing Victoria BC coverage area

### Footer
Three-column layout (stacks on mobile)
- Column 1: Logo, tagline, social links
- Column 2: Quick links to all service pages
- Column 3: Contact information, certifications
Bottom bar: Copyright, privacy/terms links

## Animations
**Minimal and purposeful:**
- Hero: Gentle fade-in on load
- Scroll-triggered: Fade-in-up for sections (use Intersection Observer)
- Before/after slider: Smooth drag interaction only
- No parallax, no auto-playing carousels

## Images

### Hero Section
**Full-width video background** - Underwater diving footage showing hull cleaning or inspection work in action. Should loop seamlessly. If video unavailable, use high-quality hero image of diver working underwater with boat hull visible.

### Before/After Section
**Hull cleaning comparison slider** - Split image showing barnacle-covered hull (before) vs. clean hull (after). High resolution, same boat/angle for dramatic effect.

### Service Cards
**Service-specific images** (6 total):
1. Hull Cleaning: Close-up of cleaned boat bottom
2. Underwater Inspections: Diver examining propeller/rudder
3. Zinc Replacement: Diver installing zinc anode
4. Mooring Services: Underwater shot of mooring chain/anchor
5. Lost Item Retrieval: Diver recovering item from seafloor
6. Commercial Diving: Professional diver in full gear

### Trust Section
**Certification badges/logos:**
- Insurance provider logo
- Commercial diving license badge
- WorkSafeBC logo
- Any industry association memberships

### About/Team (if included)
Professional photo of Danny in diving gear, credibility-building portrait

## Page Structure

### Homepage
1. Hero (video background)
2. Trust indicators bar (insurance, licensed, local)
3. Services grid (6 services with images)
4. Before/after hull cleaning slider
5. Why Choose Danny's (4-6 benefit points with icons)
6. Testimonials section
7. Service area map/coverage
8. Contact form
9. Footer

### Individual Service Pages (6 pages)
1. Service-specific hero image
2. Service description (2-3 paragraphs)
3. Benefits list with icons
4. Process/methodology (3-4 steps)
5. Relevant before/after or work images
6. Pricing guidance (if applicable) or "Request Quote" CTA
7. Related services
8. Contact form
9. Footer

All service pages optimized for SEO with location keywords (Victoria BC, Vancouver Island, Greater Victoria, etc.).