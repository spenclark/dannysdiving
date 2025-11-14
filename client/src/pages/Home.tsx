import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { generateLocalBusinessSchema } from "@/lib/schema";

export default function Home() {
  useEffect(() => {
    document.title = "Danny's Diving Services - Professional Diving Victoria BC | Hull Cleaning & Underwater Inspections";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Professional commercial diving services in Victoria BC and Vancouver Island. Specializing in hull cleaning, underwater inspections, zinc changes, mooring services, and lost item retrieval. Fully insured and licensed.");
    }

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(generateLocalBusinessSchema());
    document.head.appendChild(schemaScript);

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://dannysdiving.com/');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.remove();
    }

    return () => {
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <ServicesGrid />
        <BeforeAfter />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
