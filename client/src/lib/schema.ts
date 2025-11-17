import type { Service } from "@shared/services";

// NOTE: LocalBusiness schema is statically defined in client/index.html
// This generator is no longer used to avoid duplicate structured data
// If you need to update the LocalBusiness schema, edit client/index.html directly

export function generateServiceSchema(service: Service) {
  const serviceTypeDescriptions: Record<string, string> = {
    "hull-cleaning": "Boat hull cleaning and barnacle removal",
    "underwater-inspections": "Underwater boat inspection and hull damage assessment",
    "zinc-changes": "Zinc anode replacement and corrosion prevention",
    "mooring-services": "Mooring installation, inspection, and maintenance",
    "lost-item-retrieval": "Underwater search and recovery services",
    "commercial-diving": "Commercial diving services"
  };

  const areaCoordinates: Record<string, { lat: number; lng: number }> = {
    "Victoria Inner Harbour": { lat: 48.4231, lng: -123.3683 },
    "Oak Bay Marina": { lat: 48.4267, lng: -123.3014 },
    "Sidney Marina": { lat: 48.6501, lng: -123.3992 },
    "Victoria Harbour marinas": { lat: 48.4231, lng: -123.3683 },
    "Victoria": { lat: 48.4284, lng: -123.3656 },
    "Esquimalt Harbour": { lat: 48.4320, lng: -123.4398 },
    "Canoe Cove Marina": { lat: 48.6622, lng: -123.4083 },
    "Van Isle Marina": { lat: 48.6506, lng: -123.3968 },
    "Brentwood Bay": { lat: 48.5794, lng: -123.4597 }
  };

  const enhancedAreaServed = service.serviceAreas.map(area => {
    const coords = areaCoordinates[area];
    if (coords) {
      return {
        "@type": "Place",
        "name": area,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": coords.lat,
          "longitude": coords.lng
        }
      };
    }
    return {
      "@type": "Place",
      "name": area
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceTypeDescriptions[service.slug] || service.title,
    "name": service.title,
    "description": service.description,
    "image": `https://dannysdiving.com${service.image}`,
    "url": `https://dannysdiving.com/services/${service.slug}`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://dannysdiving.com/#business",
      "name": "Danny's Diving Services",
      "telephone": "+17785354506",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Victoria",
        "addressRegion": "BC",
        "addressCountry": "CA"
      }
    },
    "areaServed": enhancedAreaServed,
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+17785354506",
        "contactType": "customer service",
        "areaServed": "CA",
        "availableLanguage": ["English"]
      }
    },
    "offers": {
      "@type": "Offer",
      "description": service.pricing,
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.benefits.map((benefit, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": benefit
        }
      }))
    }
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
