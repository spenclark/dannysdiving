import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Diving Services Victoria BC | Danny's Diving - Professional Commercial Divers & Hull Cleaning";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Professional diving services Victoria BC and Vancouver Island. Expert commercial divers providing hull cleaning, underwater inspections, zinc changes, and mooring services. Licensed diving services serving Victoria marinas. Call (778) 535-4506.");
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://dannysdiving.com/');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    return () => {
      // Cleanup handled automatically
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
