import type { Service } from "@shared/services";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dannysdiving.com/#business",
    "name": "Danny's Diving Services",
    "image": "https://dannysdiving.com/favicon.png",
    "description": "Professional commercial diving services in Victoria BC and Vancouver Island. Specializing in underwater hull cleaning, boat inspections, zinc anode replacement, mooring services, and underwater recovery.",
    "url": "https://dannysdiving.com",
    "telephone": "+17785354506",
    "email": "dannysdivingservices@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Victoria",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.4284,
      "longitude": -123.3656
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Victoria",
        "containedIn": {
          "@type": "AdministrativeArea",
          "name": "British Columbia"
        }
      },
      {
        "@type": "Place",
        "name": "Vancouver Island"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": []
  };
}

export function generateServiceSchema(service: Service) {
  const serviceTypeMap: Record<string, string> = {
    "hull-cleaning": "BoatCleaning",
    "underwater-inspections": "BoatInspection",
    "zinc-changes": "BoatMaintenance",
    "mooring-services": "BoatMaintenance",
    "lost-item-retrieval": "Service",
    "commercial-diving": "Service"
  };

  return {
    "@context": "https://schema.org",
    "@type": serviceTypeMap[service.slug] || "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://dannysdiving.com/#business"
    },
    "areaServed": service.serviceAreas.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "offers": {
      "@type": "Offer",
      "description": service.pricing,
      "priceCurrency": "CAD"
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
